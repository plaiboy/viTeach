import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const FrameFour = React.lazy(() => import("pages/FrameFour"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
       
          <Route path="*" element={<NotFound />} />
          <Route path="/lessons" element={<FrameFour />} />
          <Route path="/" element={<Loginpage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
