import React from "react";

function Display2 ({operator,difficulty,questionCount}){
  let comment = ""
  switch(operator){
    case"add":
     comment = `there will be ${questionCount} question of addition.`
     return (
      <div>
        <p>
          {comment}
        </p>

    </div>
  );
    case"subtract":
    comment = `there will be ${questionCount} question of subtraction.`
    return (
      <div>
        <p>
          {comment}
        </p>

    </div>
  );
    case"multiply":
    comment = `there will be ${questionCount} question of multiplication.`
    return (
      <div>
        <p>
          {comment}
        </p>

    </div>
  );    case"divide":
    comment = `there will be ${questionCount} question of division.`
    return (
      <div>
        <p>
          {comment}
        </p>

    </div>
  );    default: return(
      <div>
        empty
      </div>
    );
    }
  };

export default Display2;