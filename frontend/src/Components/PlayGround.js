import Message from "./Message";
import FinalScreen from "../FinalScreen";
import useSound from "use-sound";
import forestMusic from "../assets/mixkit-birds-in-forest-loop-1239.wav";
import videoBg from "../assets/in-the-early-morning-forest-moewalls.com.mp4";
import { useState } from "react";

import data from "../questions.json";
import NextQuestion from "./NextQuestion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function PlayGround() {
  const [play] = useSound(forestMusic, { volume: 0.25 });
  const [count, setCount] = useState(1);
  const [points, setPoints] = useState(0);
  const [rightAnswer, setRightAnswer] = useState("");
  const [emotionalPoints, setEmotionalPoints] = useState(0);
  const [mentalPoints, setMentalPoints] = useState(0);
  const [socialPoints, setSocialPoints] = useState(0);
  const [healthPoints, setHealthPoints] = useState(0);

  const setStatPoints = (point, category) => {
    switch (category) {
      case "EH":
        setEmotionalPoints(emotionalPoints + point);
        break;
      case "MH":
        setMentalPoints(mentalPoints + point);
        break;
      case "SH":
        setSocialPoints(socialPoints + point);
        break;
      case "HH":
        setHealthPoints(healthPoints + point);
        break;
      case "NA":
        setCount(15);
        break;
      default:
        break;
    }
  };

  const checkAnswer = (data, option) => {
    const category = data.category;
    if (option === data.answer) {
      setRightAnswer(data.correctResponse);
      setStatPoints(1, category);
      setPoints(points + 20);
    } else {
      setRightAnswer(data.incorrectResponse);
      setStatPoints(0, category);
      setPoints(points + 5);
    }
  };

  const test = async () => {
    console.log("P: " + points);
    console.log("MP: " + mentalPoints);
    console.log("EP: " + emotionalPoints);
    console.log("HP: " + healthPoints);
    console.log("SP: " + socialPoints);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 pt-8">
        <div
          className="absolute inset-0 z-0 flex flex-col m-auto items-center max-w-7xl
        h-[43rem] overflow-hidden rounded-3xl border-2 border-black px-4 border-b-4 "
        >
          <video
            className="absolute z-10 w-auto 
            min-w-full min-h-full opacity-90"
            src={videoBg}
            autoPlay="true"
            loop="true"
          />
        </div>
      </div>

      <div className="relative z-10 h-[43rem] justify-center flex flex-col items-center m-[4.5rem]">
        <div className="p-8 space-y-2 relative flex-grow w-[80rem]">
          {data.map((d) =>
            count === d.id ? <Message text={d.question} /> : null
          )}

          {data.map((d) =>
            count === d.id ? (
              <div className="flex items-center justify-end flex-row">
                <div className="flex flex-row-reverse" key={d.id}>
                  <img
                    alt=""
                    className="flex items-center justify-center h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                  <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                    <div className="flex space-x-5">
                      <button
                        className="bg-green-500 hover:bg-green-400 text-white font-bold py-10 px-24 border-b-4 border-green-700 hover:border-green-500 rounded-full"
                        onClick={() => {
                          checkAnswer(d, d.options[0]);
                        }}
                      >
                        {d.options[0]}
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-400 text-white font-bold py-10 px-24 border-b-4 border-red-700 hover:border-red-500 rounded-full"
                        onClick={() => {
                          checkAnswer(d, d.options[1]);
                        }}
                      >
                        {d.options[1]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
          {rightAnswer !== "" || count === 15 ? (
            count < 15 ? (
              <NextQuestion
                text={rightAnswer}
                onClick={() => {
                  setCount(count + 1);
                  setRightAnswer("");
                  console.log(rightAnswer);
                }}
              />
            ) : (
              <Link
                to="/game/finish"
                className="flex items-center justify-center bg-blue-500 text-5xl text-white py-10 px-24 rounded"
                style={{
                  marginTop: "15rem",
                  marginLeft: "20rem",
                  marginRight: "20rem",
                }}
                onClick={test}
              >
                Finish
              </Link>
            )
          ) : null}
        </div>
      </div>
    </>
  );
}
