import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Packages from "./pages/Packages.js";
import { Toaster } from "@/components/ui/toaster";
import BackgroundBlob from "./components/BackgroundBlob.js";

const App = () => {
  return (
    <ThemeProvider>
      <>
        <Navigation />
        <ScrollToTop>
          <main className="container max-w-7xl mx-auto px-4 mb-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/packages" element={<Packages />} />
            </Routes>
          </main>
          <BackgroundBlob />
        </ScrollToTop>
        <Toaster />
      </>
    </ThemeProvider>
  );
};

export default App;
