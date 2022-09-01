import "./App.css";
import Contacts from "./Imports/Contacts/Contacts";
import Header from "./Imports/Header/Header";
import Mian from "./Imports/Main/Mian";
import Portfolio from "./Imports/Portfolio/Portfolio";
import Section from "./Imports/Section/Section";
import Skills from "./Imports/Skills/Skills";

function App() {
  return (
    <div>
      <Header />;
      <Section />;
      <Mian />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
