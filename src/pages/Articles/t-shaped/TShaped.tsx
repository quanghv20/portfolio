const verticalSkills = [
  {
    title: "🔹 ⚛️ ReactJS",
    items: [
      "Core: Hooks, Context, JSX, Virtual DOM.",
      "State Management: Redux Toolkit / Zustand / React Query.",
      "Performance: Memoization, lazy loading, code splitting, virtualization.",
      "Component design: Atomic design, reusable pattern, composition.",
    ],
  },
  {
    title: "🔹 🚀 NextJS",
    items: [
      "Routing: App Router, dynamic/static routes.",
      "Rendering modes: SSR, SSG, CSR, ISR.",
      "SEO: Metadata, Open Graph, sitemap, robots.txt.",
      "API Routes: làm các backend nhẹ tích hợp nhanh.",
      "App Router: Layouts, templates, nested routing.",
      "Deployment: Vercel, Netlify, custom domain, env config.",
      "Edge Middleware: xử lý auth, logic nhẹ.",
    ],
  },
  {
    title: "🔹 🧪 Testing",
    items: [
      "Unit & integration: React Testing Library, Vitest/Jest.",
      "E2E: Playwright / Cypress.",
    ],
  },
  {
    title: "🔹 🎨 UI/UX + Design System",
    items: [
      "Sử dụng Figma: đọc và convert design sang code.",
      "UI Library: TailwindCSS, ShadCN, MUI, Ant Design.",
      "Accessibility: Thẻ HTML chuẩn, aria-label, WCAG.",
      "Animation: Framer Motion, CSS animation.",
    ],
  },
  {
    title: "🔹 📈 Hiệu Năng và Tối Ưu",
    items: [
      "Lighthouse audit, bundle analyzer.",
      "Image optimization (next/image).",
      "Code splitting, lazy loading, caching.",
    ],
  },
];

const horizontalSkills = [
  {
    title: "🛠 DevOps & Công Cụ",
    items: [
      "Git nâng cao: branch flow, conflict, rebase.",
      "CI/CD: GitHub Actions, Vercel, Netlify.",
      "Docker (cơ bản, chạy FE app trong container).",
    ],
  },
  {
    title: "🧠 Kỹ Năng Mềm & Làm Việc Nhóm",
    items: [
      "Agile/Scrum, Jira, Notion.",
      "Giao tiếp với UI/UX, BA, QA.",
      "Review code, đặt tên biến tốt, maintainable code.",
    ],
  },
  {
    title: "📚 Phát Triển Cá Nhân",
    items: [
      "Đọc tài liệu gốc, đọc RFC của React/Next.",
      "Viết blog kỹ thuật (dev.to, Hashnode, Medium).",
      "Làm side project showcase.",
      "Làm video tutorial nếu thích chia sẻ.",
    ],
  },
];

export default function TShapedFrontendDoc() {
  return (
    <div className="mx-auto py-8 space-y-8 text-gray-800">
      <h1 className="text-3xl font-bold">
        🎯 Định Hướng Phát Triển Bản Thân Theo Hình T-Shaped
      </h1>

      <h1 className="text-3xl font-bold">
        <span className="text-black">Frontend Developer Chuyên Sâu</span>
      </h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">
          🔠 Mô Hình Chữ T Cho FE Là Gì?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Phần dọc (|)</strong> → Đào sâu công nghệ Frontend: ReactJS,
            NextJS, tối ưu, performance, testing.
          </li>
          <li>
            <strong>Phần ngang (—)</strong> → Kiến thức rộng về UI/UX, Git,
            teamwork, kỹ năng mềm, SEO, CI/CD...
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          🧱 A. Chiều Dọc – Chuyên Sâu Frontend
        </h2>
        {verticalSkills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold">{skill.title}</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">
          🌐 B. Chiều Ngang – Kỹ Năng Tổng Quát
        </h2>
        {horizontalSkills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bolds">{skill.title}</h3>
            <ul className="list-disc list-inside ml-4 space-y-2 mt-3">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
