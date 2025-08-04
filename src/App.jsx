import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Support from "./pages/Support";
import Company from "./pages/Company";
import ContactUs from "./pages/ContactUs";
import TermsandCondition from "./pages/TermsandCondition";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/support" element={<Support />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<TermsandCondition />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
    </Layout>
  );
}

export default App;
