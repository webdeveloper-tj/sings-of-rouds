import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import About from "./pages/About.page";
import NotFound from "./pages/NotFound.page";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";
import Sings from "./pages/Sings.page";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Sings />} path="/sings" />
          <Route element={<QuizPage />} path="/quiz" />
          <Route element={<NotFound />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
