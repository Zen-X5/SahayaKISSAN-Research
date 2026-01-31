import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Page2 = lazy(() => import("./pages/Page2"));
const Page3 = lazy(() => import("./pages/Page3"));
const Page4 = lazy(() => import("./pages/Page4"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Service = lazy(() => import("./pages/TermsOfService"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
import PageLoader from "./components/PageLoader";
function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Service />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
