import "./App.css";
// import Home from "./Components/Home";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Careers_name_cards from "./Components/Careers_name_cards";
import Midbar from "./Components/Midbar";
import Midbar2 from "./Components/Midbar2";
import Degrees from "./Components/Degrees";
import Ques from "./Components/question";
import { useState } from "react";
import Question_page from "./Components/Question_page";
function App() {
  const [count, setCount] = useState(true);
  const onChange = (e) => {
    const newval = e.target.value;
    setCount(newval);
    console.log(count);
  };
  if (count == true) {
    return (
      <>
        <Navbar></Navbar>
        <Question_page Submit={onChange}></Question_page>
        {/* <Ques></Ques> */}
        <Footer></Footer>
      </>
    );
  } else {
    return (
      <>
        <Navbar></Navbar>
        <Header></Header>
        <div className="containerbox">
          <Careers_name_cards></Careers_name_cards>
          <Midbar></Midbar>
          <Degrees></Degrees>
          {/* <Midbar2></Midbar2> */}
          {/* <Home></Home> */}
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default App;
