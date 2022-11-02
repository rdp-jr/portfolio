import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectList } from "./components/ProjectList";
import { TechStack } from "./components/TechStack";

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
