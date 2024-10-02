import "./main.css";
import { FaArrowRight } from "react-icons/fa";
import CollegeSlider from "./CollegeSlider";
import Careers from "./Carrers";
import "./CarrerSlider.css";
import Carrer_skills from "./Carrer-skills";
import Career_steps from "./Career-steps";
function Main() {
  return (
    <>
      <div className="box">
        <h1>Your Personalized Carrer Suggestions</h1>
      </div>
      <Careers></Careers>

      <div className="box2 headings">
        <h2>Product Manager</h2>
        <div className="arrow">
          <FaArrowRight />
        </div>{" "}
      </div>
      <div className="doc">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          voluptatum aliquam hic animi earum amet accusantium rerum expedita
          voluptate dolor aspernatur a, dolorem illo. Ullam ab adipisci quidem
          at eum ad quos, labore praesentium, error incidunt omnis molestiae
          expedita eius laborum excepturi. Odit architecto nobis, inventore
          voluptates dolore molestiae suscipit natus consequuntur quas, officia
          nulla voluptatibus possimus placeat omnis aperiam hic, aliquam ex
          delectus harum. Neque error commodi consectetur hic vero iusto totam
          voluptatum nesciunt eaque est, sequi omnis natus quo itaque ratione
          repudiandae atque! Optio deleniti similique quas architecto illo
          alias, modi veniam molestiae, molestias explicabo culpa vel quisquam.
        </h5>
        <div className="box2 headings">
          <h2>Career Path in Steps</h2>
          <div className="arrow">
            <FaArrowRight />
          </div>{" "}
        </div>
        <Career_steps></Career_steps>
        <div className="box2 headings">
          <h2>Average salaries</h2>
          <div className="arrow">
            <FaArrowRight />
          </div>{" "}
        </div>
        <div className="salary-box">
          <div className="salary-box1">Entry-level</div>
          <div className="salary-box2">Experienced</div>
        </div>
        <CollegeSlider></CollegeSlider>{" "}
        <div className="box2 headings">
          <h2>Skills</h2>
          <div className="arrow">
            <FaArrowRight />
          </div>{" "}
        </div>
        <Carrer_skills></Carrer_skills>
        <div className="box2 headings">
          <h2>Courses</h2>
          <div className="arrow">
            <FaArrowRight />
          </div>{" "}
        </div>
        <div className="courses-slider">
          <div className="courses-box1">Entry-level</div>
          <div className="courses-box2">Experienced</div>
        </div>
      </div>
    </>
  );
}
export default Main;
