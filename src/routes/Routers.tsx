import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout.tsx";
import Home from "../pages/Home.tsx";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>

  );
}

export default Routers;
