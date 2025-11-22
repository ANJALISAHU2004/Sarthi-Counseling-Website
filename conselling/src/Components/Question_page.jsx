import "./Question.css";
import Question_data from "./Question_data";
import Ques from "./question";
import Midbar2 from "./Midbar2";
export default function Question_page({ Submit }) {
  return (
    <div className="QUESTION_BODY">
      <Midbar2></Midbar2>
      <p className="Pques" id="hero">
        <span class="highlight c1"> Career</span>
        <span class="highlight c2"> Apptitude</span>
        <span class="highlight c3"> Test</span>
      </p>
      {Question_data.map((Q) => {
        return <Ques data={Q.ques}></Ques>;
      })}

      <div class="submit">
        <button class="button-29" role="button" onClick={Submit}>
          Show Results
        </button>
      </div>
    </div>
  );
}
