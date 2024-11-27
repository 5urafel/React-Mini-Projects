import React, { useState } from "react";
import "./Question.css";
import { GrAdd, GrSubtract } from "react-icons/gr";

const Question = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <>
      <div className="question-header">
        <h3>Do i have to allow the use of a cookies?</h3>

        <div className="expand-collapse" onClick={handleExpand}>
          {expand ? <GrAdd /> : <GrSubtract />}
        </div>
      </div>
      <p className={expand ? "answer-none" : "answer"}>
        Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman
        copper mug church-key coloring book, whatever poutine normcore fixie
        cred kickstarter post-ironic street art.
      </p>
    </>
  );
};

export default Question;
