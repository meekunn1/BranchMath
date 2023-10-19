// import React, { useState, useEffect } from "react";

const makeRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const generateQuestions = (count, difficulty) => {
  let counter = count;
  const questionList = new Map();
  while (counter > 0) {
    const singleQuestion = Array(difficulty + 1)
      .fill(0)
      .map(makeRandomNumber);
    questionList.set(counter, {
      problem: singleQuestion,
      question: {},
      answer: {},
    });
    counter = counter - 1;
  }
  return questionList;
};

const Operations = (type, count, difficulty) => {
  let load = false;
  let counter = count;
  if (type) {
    load = true;
  }
  switch (type) {
    case "add":
      let Addworksheet = new Map();
      while (counter > 0) {
        const questionSet = generateQuestions(count, difficulty);
        // console.log(questionSet);
        const initialValue = 0;
        const answerSum = questionSet
          .get(counter)
          .problem.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
          );
        // console.log(answerSum);
        questionSet.get(counter).answer = answerSum;
        questionSet.get(counter).question = questionSet
          .get(counter)
          .problem.join(" + ");
        Addworksheet.set(counter, questionSet.get(counter));
        counter = counter - 1;
      }
      console.log(Addworksheet);
      break;
    case "subtract":
      let Subtractworksheet = new Map();
      while (counter > 0) {
        const questionSet = generateQuestions(count, difficulty);
        // console.log(questionSet);
        const initialValue = questionSet.get(counter).problem[0] * 2;
        const answerSum = questionSet
          .get(counter)
          .problem.reduce(
            (accumulator, currentValue) => accumulator - currentValue,
            initialValue
          );
        // console.log(answerSum);
        questionSet.get(counter).answer = answerSum;
        questionSet.get(counter).question = questionSet
          .get(counter)
          .problem.join(" - ");
        Subtractworksheet.set(counter, questionSet.get(counter));
        counter = counter - 1;
      }
      console.log(Subtractworksheet);
      break;
    case "multiply":
      let MultiplyWorksheet = new Map();
      while (counter > 0) {
        const questionSet = generateQuestions(count, difficulty);
        // console.log(questionSet);
        const initialValue = 1;
        const answerSum = questionSet
          .get(counter)
          .problem.reduce(
            (accumulator, currentValue) => accumulator * currentValue,
            initialValue
          );
        // console.log(answerSum);
        questionSet.get(counter).answer = answerSum;
        questionSet.get(counter).question = questionSet
          .get(counter)
          .problem.join(" x ");
          MultiplyWorksheet.set(counter, questionSet.get(counter));
        counter = counter - 1;
      }
      console.log(MultiplyWorksheet);
      break;
    case "divide":
      let DivideWorksheet = new Map();
      while (counter > 0) {
        const questionSet = generateQuestions(count, difficulty);
        // console.log(questionSet);
        const initialValue = 1;
        const answerSum = questionSet
          .get(counter)
          .problem.reduce(
            (accumulator, currentValue) => accumulator / currentValue,
            initialValue
          );
        // console.log(answerSum);
        questionSet.get(counter).answer = answerSum;
        questionSet.get(counter).question = questionSet
          .get(counter)
          .problem.join(" ÷ ");
          DivideWorksheet.set(counter, questionSet.get(counter));
        counter = counter - 1;
      }
      console.log(DivideWorksheet);
      break;
    default:
      load = false;
  }
};
Operations("divide", 10, 1);

// export default operations;
