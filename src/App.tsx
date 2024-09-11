import Navigation from "./components/Navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <ThemeProvider>
      <div className="h-screen">
        <Navigation />
        <main className="container max-w-7xl mx-auto">
          <Button>Click me</Button>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
