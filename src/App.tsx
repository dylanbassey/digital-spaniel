import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestimonialsProvider } from "./context/context";

function App() {
  return (
    <TestimonialsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </TestimonialsProvider>
  );
}

export default App;
