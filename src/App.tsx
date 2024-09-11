import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <Navigation />
        <main className="container max-w-7xl mx-auto"></main>
      </div>
    </ThemeProvider>
  );
};

export default App;
