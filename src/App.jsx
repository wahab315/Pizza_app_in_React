import Footer from "./components/Footer";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { pizzaData } from "./data";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menus data={pizzaData} />
        <Footer/>
      </div>
    </>
  );
}

export default App;
