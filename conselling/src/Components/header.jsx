import "./Header.css";

function Header(params) {
  return (
    <div className="head">
      <header className="header_1">
        <div className="over">
          <h1>YOUR RESULT</h1>
          <h3>
            You’ve completed all the assessments. Take a look at your results
            below.
          </h3>
          <p>
            Based on your responses, here are some characteristics that make you
            unique compared to everyone else.
          </p>
          <br />
        </div>
      </header>
    </div>
  );
}
export default Header;
