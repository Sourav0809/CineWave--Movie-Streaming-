import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/account" element={<AuthPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default MyRoutes;
