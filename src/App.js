// utils
import { lazy, Suspense } from "react";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css';
import "./style.css";

// components
import { Route, Routes } from "react-router-dom";

// pages
const Dashboard = lazy(() => import("@pages/Dashboard"));
const LoadingScreen = lazy(() => import("@pages/LoadingScreen"));

function App() {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;