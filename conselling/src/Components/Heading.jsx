import "./Heading.css";
import { FaArrowRight } from "react-icons/fa";
function Heading({ heading }) {
  return (
    <>
      <div className="box2 headings">
        <h2>{heading}</h2>
        <div className="arrow">
          <FaArrowRight />
        </div>{" "}
      </div>
    </>
  );
}
export default Heading;
