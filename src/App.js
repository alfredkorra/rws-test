import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import SliderCard from "./SliderCard/SliderCard";
import quots from "../src/assets/quots.png";
import footerimg from "../src/assets/footerimg.png";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <div className="cotntainer">
        <div className="header_slider">
          <img src={quots} alt="" />
          <div className="desc">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p className="p_desc">
              Donec pede justo, fringilla vel, aliuqet nec, vulputate eget,
              arcu. In enim justo, rhoncues ut, imperdiet a, venenatis vitae,
              justo
            </p>
          </div>
        </div>
        <SliderCard />
        <div className="slider_bottom">
          <h2>Lorem ipsum dolor sit amet</h2>
          <button>Lorem ipsum</button>
        </div>
        <div className="img_footer">
          <img src={footerimg} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
