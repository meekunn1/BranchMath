import React, { useState, useEffect } from "react";
import Operations from "./worksheet1";

const WorkPage = () => {
  const options = ["Add", "Subtract", "Multiply", "Divide", "mix"];
  const optionSelection = function (options) {
    return <option>{options}</option>;
  };

  //default
  const type = "Add";
  const difficulty = "1";
  const questionCount = "10";

  const [inputState, setInputState] = useState({
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What operation would you like to practice?</label>
        <select>{options.map(optionSelection)}</select>
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
      <Operations type={type} count={questionCount} difficulty={difficulty}/>
    </div>
  );
};

export default WorkPage;