import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "./loading/Loading";
import Layout from "./components/layout";

// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
// import PostsPage from "./pages/PostsPage";
// import Portfolios from "./pages/Portfolios";
// import Portfolio from "./pages/Portfolio";
// import NotFound from "./pages/NotFound";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const Portfolios = lazy(() => import("./pages/Portfolios"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LifeSyclePage = lazy(() => import("./pages/LifeSyclePage"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="lifesycle" element={<LifeSyclePage />} />
            <Route path="portfolios">
              <Route path="" element={<Portfolios />} />
              <Route path=":portfolioId" element={<Portfolio />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
