import MainLayout from "@/layouts/index.tsx";
import {
  AboutPage,
  ArticlesPage,
  ArticleDetailsPage,
  HomePage,
  ProjectsPage,
  SpeakingPage,
  UsesPage,
} from "@/pages/index.ts";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/articles", element: <ArticlesPage /> },
      { path: "/article-details", element: <ArticleDetailsPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/speaking", element: <SpeakingPage /> },
      { path: "/uses", element: <UsesPage /> },
    ],
  },
]);

export default router;
