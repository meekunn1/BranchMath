import React, { useState, useEffect } from "react";
import Operations from "./worksheet1";
import Display from "./display";
import Display2 from "./display2";

const WorkPage = () => {
  // useEffect(()=> {
  //    setInputState(difficulty);
  //   //  difficulty = inputState.difficulty;
  //   //  questionCount = inputState.questionCount;
  // },[])
  let worksheet = { operator: "add", difficulty: 1, questionCount: 5 };

  const [resultArray, setResultArray] = useState([
    worksheet.operator,
    worksheet.difficulty,
    worksheet.questionCount,
  ]);

  const [resultObject, setResultObject] = useState([worksheet]);

  const options = [
    { label: "Add", value: "add" },
    { label: "Subtract", value: "subtract" },
    { label: "Multilpy", value: "multiply" },
    { label: "Divide", value: "divide" },
    { label: "Mix", value: "mix" },
  ];
  const optionSelection = function (options) {
    return <option value={options.value}>{options.label}</option>;
  };

  const [inputState, setInputState] = useState({
    operator: "add",
    difficulty: "1",
    questionCount: "10",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    worksheet = {
      operator: inputState.operator,
      difficulty: inputState.difficulty,
      questionCount: inputState.questionCount,
    };
    console.log(inputState);
    return [
      setResultArray([
        worksheet.operator,
        worksheet.difficulty,
        worksheet.questionCount,
      ]),
      setResultObject({ worksheet }),
    ];
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What operation would you like to practice?</label>
        <select name='operator' onChange={handleChange} defaultValue={"add"}>
          {options.map(optionSelection)}
        </select>
        <label>What difficulty would you like to challenge?</label>
        <input
          type='number'
          name='difficulty'
          defaultValue={1}
          onChange={handleChange}
          required
        />
        <label>How many questions would you like to challenge?</label>
        <input
          type='number'
          name='questionCount'
          defaultValue={10}
          onChange={handleChange}
          required
        />
        <button type='submit' className='btn'>
          Start
        </button>
      </form>
      <div>
        result Array: {resultArray[0]}, {resultArray[1]}, {resultArray[2]}
        {/* <Display operator={result.operator} difficulty={result.difficulty} questionCount={result.questionCount}/> */}
      </div>
      {/* <div>result Object: {resultObject}</div> */}
      <Display
        operator={inputState.operator}
        difficulty={inputState.difficulty}
        questionCount={inputState.questionCount}
      />
      <Display2
        operator={resultArray[0]}
        difficulty={resultArray[1]}
        questionCount={resultArray[2]}
      />
      {/*<Operations
        type={resultArray[0]}
        difficulty={resultArray[1]}
        count={resultArray[2]}
  />*/}
    </div>
  );
};

export default WorkPage;
