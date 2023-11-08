import React from "react";

function Display ({operator,difficulty,questionCount}){
    return (
        <div>
        <ul>
          <p>
            Current status
          </p>
          <li>
          {operator}
          </li>
          <li>
          {difficulty}
          </li>
          <li>
          {questionCount}
          </li>
        </ul>
      </div>
    )
}
export default Display;