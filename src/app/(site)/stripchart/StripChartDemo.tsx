"use client";

import { useEffect, useRef, useState } from "react";

type Stream = {
  id: number;
  name: string;
  color: string;
  data: number[];
};

type StripChartOptions = {
  maxPoints: number;
  background?: string;
  gridColor?: string;
  lineWidth?: number;
};

class StripChart {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private options: Required<StripChartOptions>;
  private width = 0;
  private height = 0;
  private resizeHandler: () => void;

  constructor(canvas: HTMLCanvasElement, options: StripChartOptions) {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Unable to initialize canvas context");
    }

    this.canvas = canvas;
    this.ctx = ctx;
    this.options = {
      maxPoints: options.maxPoints,
      background: options.background ?? "#ffffff",
      gridColor: options.gridColor ?? "#e5e7eb",
      lineWidth: options.lineWidth ?? 2,
    } as Required<StripChartOptions>;

    this.resizeHandler = this.resize.bind(this);
    window.addEventListener("resize", this.resizeHandler, { passive: true });
    this.resize();
  }

  private resize() {
    const deviceRatio = window.devicePixelRatio || 1;
    const parent = this.canvas.parentElement;
    const targetWidth = parent ? parent.clientWidth : 960;
    const targetHeight = parent ? Math.max(parent.clientHeight, 360) : 360;

    if (this.canvas.width !== targetWidth * deviceRatio || this.canvas.height !== targetHeight * deviceRatio) {
      this.canvas.width = targetWidth * deviceRatio;
      this.canvas.height = targetHeight * deviceRatio;
      this.canvas.style.width = `${targetWidth}px`;
      this.canvas.style.height = `${targetHeight}px`;
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(deviceRatio, deviceRatio);
    }

    this.width = targetWidth;
    this.height = targetHeight;
    this.drawGrid();
  }

  private drawGrid() {
    const { ctx, width, height } = this;
    ctx.fillStyle = this.options.background;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = this.options.gridColor;
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 8]);

    const horizontalLines = 4;
    for (let i = 1; i < horizontalLines; i++) {
      const y = (height / horizontalLines) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.setLineDash([]);
  }

  draw(streams: Stream[]) {
    this.drawGrid();
    const { ctx, width, height } = this;
    const maxPoints = this.options.maxPoints;
    const xStep = width / (maxPoints - 1);

    streams.forEach((stream) => {
      if (stream.data.length < 2) {
        return;
      }
      ctx.strokeStyle = stream.color;
      ctx.lineWidth = this.options.lineWidth;
      ctx.beginPath();

      stream.data.forEach((value, index) => {
        const x = index * xStep;
        const normalized = 1 - value / 100;
        const y = normalized * height;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();
    });
  }

  clear() {
    this.drawGrid();
  }

  destroy() {
    window.removeEventListener("resize", this.resizeHandler);
  }
}

const baseline = 52;
const maxPoints = 220;
const colorPalette = ["#2563eb", "#10b981", "#ef4444", "#f97316", "#8b5cf6", "#14b8a6", "#facc15", "#ec4899"];

const clamp = (value: number, min = 0, max = 100) => Math.min(max, Math.max(min, value));

export default function StripChartDemo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<StripChart | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamCounter = useRef(0);
  const [intervalMs, setIntervalMs] = useState(250);
  const [isRunning, setIsRunning] = useState(false);
  const [streams, setStreams] = useState<Stream[]>([]);

  const createStream = () => {
    const color = colorPalette[streamCounter.current % colorPalette.length];
    streamCounter.current += 1;
    return {
      id: Date.now() + streamCounter.current,
      name: `Stream ${streamCounter.current}`,
      color,
      data: Array.from({ length: maxPoints }, () => baseline + (Math.random() - 0.5) * 8),
    };
  };

  const drawStreams = (nextStreams: Stream[]) => {
    chartRef.current?.draw(nextStreams);
  };

  const tick = () => {
    setStreams((current) => {
      const nextStreams = current.map((stream) => {
        const previous = stream.data[stream.data.length - 1] ?? baseline;
        const variance = (Math.random() - 0.5) * 8;
        const next = clamp(previous + variance);
        const nextData = stream.data.slice(1);
        nextData.push(Number(next.toFixed(2)));
        return {
          ...stream,
          data: nextData,
        };
      });

      drawStreams(nextStreams);
      return nextStreams;
    });
  };

  const start = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(tick, intervalMs);
    setIsRunning(true);
  };

  const pause = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  };

  const clearChart = () => {
    setStreams((current) => {
      const nextStreams = current.map((stream) => ({
        ...stream,
        data: Array.from({ length: maxPoints }, () => baseline),
      }));
      drawStreams(nextStreams);
      return nextStreams;
    });
  };

  const addStream = () => {
    setStreams((current) => {
      const nextStreams = [...current, createStream()];
      drawStreams(nextStreams);
      return nextStreams;
    });
  };

  const removeStream = () => {
    setStreams((current) => {
      if (current.length <= 1) {
        return current;
      }
      const nextStreams = current.slice(0, current.length - 1);
      drawStreams(nextStreams);
      return nextStreams;
    });
  };

  useEffect(() => {
    if (isRunning) {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    chartRef.current = new StripChart(canvasRef.current, {
      maxPoints,
      background: "#ffffff",
      gridColor: "#e5e7eb",
      lineWidth: 2,
    });

    const initialStreams = [createStream(), createStream()];
    setStreams(initialStreams);
    chartRef.current.draw(initialStreams);
    start();

    return () => {
      pause();
      chartRef.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="stripchart-page">
      <section className="intro">
        <h1>Live strip chart console</h1>
        <p>
          Experiment with simulated data streams, tune update speeds, and watch the strip chart animate across a responsive canvas
          designed for continuous monitoring.
        </p>
      </section>
      <section className="dashboard">
        <div className="control-panel">
          <div className="control-group">
            <h2>Playback</h2>
            <div className="button-row">
              <button type="button" className="btn primary" disabled={isRunning} onClick={start}>
                Start
              </button>
              <button type="button" className="btn" disabled={!isRunning} onClick={pause}>
                Pause
              </button>
              <button type="button" className="btn" onClick={clearChart}>
                Clear
              </button>
            </div>
          </div>
          <div className="control-group">
            <h2>Update interval</h2>
            <div className="slider-row">
              <input
                value={intervalMs}
                onChange={(event) => setIntervalMs(Number(event.target.value))}
                type="range"
                min={50}
                max={1000}
                step={50}
                aria-label="Update interval in milliseconds"
              />
              <span>{intervalMs} ms</span>
            </div>
          </div>
          <div className="control-group">
            <h2>Data streams</h2>
            <p className="hint">Active streams: {streams.length}</p>
            <div className="button-row">
              <button type="button" className="btn" onClick={addStream}>
                Add stream
              </button>
              <button type="button" className="btn" disabled={streams.length <= 1} onClick={removeStream}>
                Remove stream
              </button>
            </div>
          </div>
        </div>

        <div className="canvas-wrapper">
          <canvas ref={canvasRef} aria-label="Animated strip chart" />
        </div>

        <div className="legend">
          <h2>Legend</h2>
          <ul>
            {streams.map((stream) => (
              <li key={stream.id}>
                <span className="swatch" style={{ backgroundColor: stream.color }} aria-hidden="true" />
                <span>{stream.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
