"use client";

import { WsrvImage } from "@/components/WsrvImage";
import { useEffect, useRef, useState } from "react";

export default function Faq() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const openImage = (src: string, alt: string) => (event?: React.MouseEvent<HTMLElement>) => {
    if (event?.currentTarget instanceof HTMLElement) {
      lastTrigger.current = event.currentTarget;
    }
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setShowImageModal(true);
  };

  const closeImage = () => {
    setShowImageModal(false);
    requestAnimationFrame(() => {
      lastTrigger.current?.focus();
      lastTrigger.current = null;
    });
    setModalImageSrc("");
    setModalImageAlt("");
  };

  useEffect(() => {
    if (showImageModal) {
      requestAnimationFrame(() => {
        modalRef.current?.focus();
      });
    }
  }, [showImageModal]);

  return (
    <section className="section" id="faq">
      <h2>FAQ</h2>
      <details>
        <summary>how to read urine test strips results chart?</summary>
        <div className="faq-intro">
          <p>
            To read a urine test strip, dip the strip in urine, tap off excess, and immediately compare the colors of the
            reagent pads to the color chart on the bottle&apos;s label at the specific times indicated for each test. Each color
            block on the chart corresponds to a specific reading, and a match indicates the concentration or presence of that
            substance (like protein, glucose, or pH).
          </p>
          <button
            type="button"
            className="faq-intro__trigger"
            onClick={openImage("https://r2bucket.stripchart.org/stript-chart.jpg", "Urine test strip reference chart enlarged")}
            aria-label="放大色卡示意图"
          >
            <WsrvImage
              src="https://r2bucket.stripchart.org/stript-chart.jpg"
              alt="Urine test strip reference chart"
              className="faq-intro__image"
              width={360}
              height={240}
              layout="constrained"
            />
          </button>
        </div>
        <h3>Step-by-step guide</h3>
        <ol>
          <li>
            <strong>Prepare the strip:</strong> Dip the strip into the urine for the specified time, usually two seconds, then tap
            off excess urine against the side of the container.
          </li>
          <li>
            <strong>Watch for color changes:</strong> Observe the reagent pads for changes in color. Color changes beyond the
            specified time on the chart are not diagnostically valuable.
          </li>
          <li>
            <strong>Compare with the chart:</strong> Immediately hold the strip up to the color chart on the bottle&apos;s label to
            find the best match for each reagent pad.
          </li>
          <li>
            <strong>Interpret the results:</strong>
            <ul className="indicator-list">
              <li>
                <strong>pH:</strong> A value of 6-6.5 is orange, while 7-7.5 is green, and 8-8.5 is blue-green.
              </li>
              <li>
                <strong>Protein:</strong> A negative result is green; a positive one is blue. The darker the blue, the more protein
                is present.
              </li>
              <li>
                <strong>Leukocytes (white blood cells):</strong> Cream is negative, while shades of brown or purple indicate a
                positive result. Purple shows a high concentration.
              </li>
              <li>
                <strong>Nitrite:</strong> A white pad is negative. Any pink color indicates a positive result, suggesting a bacterial
                presence.
              </li>
              <li>
                <strong>Blood:</strong> An orange color is negative. A green color indicates the presence of blood, with a speckled
                pattern showing a trace to moderate amount.
              </li>
              <li>
                <strong>Glucose:</strong> Light aqua is negative. Green indicates trace amounts, and green-brown means moderate to high
                levels.
              </li>
            </ul>
          </li>
          <li>
            <strong>For semi-quantitative results:</strong> Check the chart for specific times to read different tests. For example,
            pH and protein can often be read within 60 seconds, but other tests may have different timeframes.
          </li>
          <li>
            <strong>In case of unexpected results:</strong> If results are questionable, repeat the test with a new strip and ensure
            it&apos;s not expired. If problems continue, consult a doctor.
          </li>
        </ol>
      </details>
      <details>
        <summary>how to make a strip chart in excel</summary>
        <div className="faq-intro">
          <p>
            The Strip Plot is one of many graph types that provide information about the distribution of observations on a single
            variable. It is used to provide a useful view of the overall structure contained within the data set by simply showing
            each observation as a point plotted along a scale line that represents the range of the data values. The chart to the
            right shows a strip plot of the prevalence of raised blood pressure among men for 201 countries and territories.
            Let&apos;s build it in Excel.
          </p>
          <div className="faq-intro__media">
            <button
              type="button"
              className="faq-intro__trigger"
              onClick={openImage(
                "https://r2bucket.stripchart.org/excel/BlogPic-rce91.webp",
                "Excel strip chart example preview enlarged"
              )}
              aria-label="放大 Excel 条形图示意图"
            >
              <WsrvImage
                src="https://r2bucket.stripchart.org/excel/BlogPic-rce91.webp"
                alt="Excel strip chart example preview"
                className="faq-intro__image"
                width={360}
                height={240}
                layout="constrained"
              />
            </button>
          </div>
        </div>
        <div className="faq-intro">
          <p>
            The data source for the above chart is shown below. It shows the prevalence of raised blood pressure among men—data
            collected by NCD.RisC—for 201 countries and territories, as illustrated to the right.
          </p>
          <div className="faq-intro__media">
            <button
              type="button"
              className="faq-intro__trigger"
              onClick={openImage(
                "https://r2bucket.stripchart.org/excel/Fig1-defae.webp",
                "Excel strip chart data source enlarged"
              )}
              aria-label="放大 Excel 数据来源图表"
            >
              <WsrvImage
                src="https://r2bucket.stripchart.org/excel/Fig1-defae.webp"
                alt="Excel strip chart data source preview"
                className="faq-intro__image"
                width={360}
                height={240}
                layout="constrained"
              />
            </button>
          </div>
        </div>
      </details>
      <details>
        <summary>Is the strip chart optimized for compliance reviews?</summary>
        <p>
          Audit teams can annotate timelines, export captures, and walk regulators through a continuous strip chart history in
          minutes.
        </p>
      </details>
      {showImageModal ? (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={modalImageAlt || "Expanded strip chart illustration"}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeImage();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeImage();
            }
          }}
          tabIndex={-1}
          ref={modalRef}
        >
          <WsrvImage
            src={modalImageSrc}
            alt={modalImageAlt || "Expanded strip chart illustration"}
            className="image-modal__content"
            width={800}
            height={600}
            layout="constrained"
            onClick={closeImage}
          />
          <button type="button" className="image-modal__close" onClick={closeImage} aria-label="关闭放大图片">
            Close
          </button>
        </div>
      ) : null}
    </section>
  );
}
