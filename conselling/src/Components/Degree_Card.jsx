import "./Degree.css";

function Degree_Card({ college }) {
  return (
    <>
      <div class="wrap animate pop">
        <div class="overlay_Degree">
          <div class="overlay_Degree-content animate slide-left delay-2">
            <h1 class="animate slide-left pop delay-4">{college.name}</h1>
            <p
              class="animate slide-left pop delay-5"
              style={{ color: "white", marginbottom: "2.5rem" }}
            >
              Kingdom: <em>Plantae</em>
            </p>
          </div>
          <div
            style={{ backgroundimage: college.url }}
            class="image-content animate slide delay-5"
          ></div>
          <div class="dots animate">
            <div class="dot animate slide-up delay-6"></div>
            <div class="dot animate slide-up delay-7"></div>
            <div class="dot animate slide-up delay-8"></div>
          </div>
        </div>
        <div class="text">
          <p style={{ color: "black" }}>
            <img class="inset" src={college.url} alt="" />
            {college.description}
          </p>
          <p style={{ color: "black" }}>{college.description}</p>
          <p style={{ color: "black" }}>{college.description}</p>
        </div>
      </div>
    </>
  );
}
export default Degree_Card;
