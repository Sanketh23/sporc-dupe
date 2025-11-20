import React from "react";
import ReactDOM from "react-dom/client";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import PlayQuizPage from "./pages/PlayQuizPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:quizId" element={<PlayQuizPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<CategoryDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);