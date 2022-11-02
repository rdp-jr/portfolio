import "./App.css";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { ProjectList } from "./components/sections/ProjectList";
import { TechStack } from "./components/sections/TechStack";

function App() {
  return (
    <div className="App">
      <Header />
      <TechStack />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
