import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Cards from "./components/courses";

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>

      {/* <Login></Login> */}
      {/* <Footer></Footer> */}
      <Cards></Cards>
     
    </>
  );
}

export default App;
