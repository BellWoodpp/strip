import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // 防止 Vercel Image Optimization Transformations 异常增长：
    // 开启 Image Optimization API 会让 /_next/image 承担图片变换与缓存成本（可被刷宽度/质量组合）。
    // 该站点图片优化改走 `images.weserv.nl` + `@unpic/react`（wsrv provider），关闭 Next/Vercel 图片优化可直接止血（/ _next/image 将返回 404）。
    unoptimized: true,
  },
};

export default nextConfig;
