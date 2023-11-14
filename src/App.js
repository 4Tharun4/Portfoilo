import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/contact";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/NavBar/NavBar";
import { Projects } from "./Components/Works/Projects";
import { Intro } from "./Components/intro/intro";


function App() {
  return(
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
