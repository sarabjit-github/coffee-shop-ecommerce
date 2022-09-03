import "./Scss/App.css";
import { Hero } from "./Components/Hero/Hero";
import { Popularproduct } from "./Components/PopularProduct/Popularproduct";
import { Delivery } from "./Components/Delivery/Delivery";
import { About } from "./Components/About/About";
import { Menu } from "./Components/Menu/Menu";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import { Newsletter } from "./Components/Newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <div className="hero-container">
        <Hero />
        <Popularproduct />
      </div>
      <main>
        <Delivery />
        {/* <About /> */}
        {/* <Menu /> */}
        <Testimonial />
        <Newsletter />
      </main>
    </div>
  );
}

export default App;
