import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageLoader } from "./pages/PageLoader";


const Signup=lazy(()=>import("./pages/Signup"));
const Signin=lazy(()=>import("./pages/Signin"));
const Home=lazy(()=>import("./pages/Home"));
const About=lazy(()=>import("./pages/About.js"));
const Contact=lazy(()=>import("./pages/Contact.js"));
function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
