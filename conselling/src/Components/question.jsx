import "./Question.css";

export default function Ques({ data }) {
  return (
    <>
      <div id="hero-text">
        <p className="Pques">
          {" "}
          {data}
          {/* <span class="highlight c1"> let go</span>,and
          <span class="highlight c2"> sit still</span>,and allow
          <span class="highlight c3"> contentment</span> to come to you. */}
        </p>

        <div class="checkbox-wrapper-39">
          <div className="Pques">LIKE</div>
          <label>
            <input type="checkbox" />
            <span class="checkbox"></span>
          </label>
          <label>
            <input type="checkbox" />
            <span class="checkbox"></span>
          </label>
          <label>
            <input type="checkbox" />
            <span class="checkbox"></span>
          </label>
          <label>
            <input type="checkbox" />
            <span class="checkbox"></span>
          </label>
          <label>
            <input type="checkbox" />
            <span class="checkbox"></span>
          </label>
          <label>
            <input type="checkbox" />
            <span class="checkbox"></span>
          </label>
          <div className="Pques">DISLIKE</div>
        </div>
      </div>
    </>
  );
}
