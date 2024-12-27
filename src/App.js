import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageLoader } from "./pages/PageLoader";



const Signup=lazy(()=>import("./pages/Signup"));
const Signin=lazy(()=>import("./pages/Signin"));
const Home=lazy(()=>import("./pages/Home"));
const About=lazy(()=>import("./pages/About.js"));
const Contact=lazy(()=>import("./pages/Contact.js"));
const Dashboard=lazy(()=>import("./pages/Dashboard.js"));
const ViewProduct=lazy(()=>import("./pages/ViewProduct.js"));
const Profile=lazy(()=>import("./pages/Profile.js"));
const Order=lazy(()=>import("./pages/Order.js"));

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore-products" element={<Dashboard />} />
          <Route path="/view-product/:id" element={<ViewProduct />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
