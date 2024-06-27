// responsive nav bar using react
// import bg from './bg.jpg';
import './App.css';
import Nav from './Nav.js';
import Icon from './Icon.js'
import Logo from './Logo.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
function App() {
  return (
    <div className="App">
      <header className="App-header" style= {{backgroundColor: "blue", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 50px 0 50px"}}>
        <Logo />
        <Nav />
        <Icon />
      </header>
      <div className="banner">
        <Banner />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
