import "./App.css";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

export default function App() {
  return (
    <div>
      <Header title="Journal" />
      <Main />
      <Footer footer="Journal App - 2028" />
    </div>
  );
}
