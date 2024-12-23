import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageLoader } from "./pages/PageLoader";

const Signup=lazy(()=>import("./pages/Signup"));
const Signin=lazy(()=>import("./pages/Signin"));
const Home=lazy(()=>import("./pages/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
