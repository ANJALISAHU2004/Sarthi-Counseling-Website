import CarrerSlider from "./CarrerSlider";
import { FaArrowRight } from "react-icons/fa";
function Careers() {
  return (
    <>
      <div className="box2 headings">
        <h2>career Suggestion</h2>
        <div className="arrow">
          <FaArrowRight />
        </div>{" "}
      </div>
      <CarrerSlider></CarrerSlider>
    </>
  );
}
export default Careers;
