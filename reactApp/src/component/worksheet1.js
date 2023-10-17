// import React, { useState, useEffect } from "react";

const makeRandomNumber = () => {
  return Math.floor(Math.random() * 9);
};

const generateQuestions = (count, difficulty) => {
  let counter = count;
  const questionList = new Map();
  while (counter > 0) {
    const singleQuestion = Array(difficulty + 1)
      .fill(0)
      .map(makeRandomNumber);
    questionList.set(counter, { problem: singleQuestion, answer: {} });
    counter = counter - 1;
  }
  return questionList;
};

const operations = (type, count, difficulty) => {
  let load = false;
  let counter = count;
  if (type) {
    load = true;
  }
  switch (type) {
    case "Add":
      let worksheet = new Map();
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
        worksheet.set(counter, questionSet.get(counter));
        counter = counter - 1;
      }
      console.log(worksheet);
      break;
    case "Subtract":
      break;
    case "Multiply":
      break;
    case "Divide":
      break;
    default:
      load = false;
  }
};
operations("Add", 10, 1);
