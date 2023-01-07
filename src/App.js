import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FoodCards from "./components/food/FoodCards";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
        <Skills />
        <Projects />
        <FoodCards />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
