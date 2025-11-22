import "./Degree.css";
import Degree_Card from "./Degree_Card";
import Heading from "./Heading";
import degrees from "./Degree_data";
function Degrees(params) {
  return (
    <>
      <Heading heading={"TOP DEGREES"}></Heading>
      <div className="Degrees">
        {degrees.map((c) => (
          <Degree_Card college={c}></Degree_Card>
        ))}
      </div>
    </>
  );
}
export default Degrees;
