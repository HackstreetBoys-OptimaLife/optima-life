import Message from "./Message";
import useSound from "use-sound";
import forestMusic from "../assets/mixkit-birds-in-forest-loop-1239.wav";
import videoBg from "../assets/in-the-early-morning-forest-moewalls.com.mp4";
import { useState } from "react";

import data from "../questions.json";

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

  const test = () => {
    console.log("P: " + points);
    console.log("MP: " + mentalPoints);
    console.log("EP: " + emotionalPoints);
    console.log("HP: " + healthPoints);
    console.log("SP: " + socialPoints);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl py-5 pt-8">
        <div className="absolute z-20 ">
          <button className="p-4 text-gray-300" onClick={play}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </button>
          <div className="p-8 space-y-2 relative h-[38rem] overflow-scroll overflow-x-auto overflow-y-auto ">
            {data.map((d) =>
              count === d.id ? <Message text={d.question} /> : null
            )}

            {data.map((d) =>
              count === d.id ? (
                <div
                  key={d.id}
                  className="flex items-center justify-start flex-row-reverse"
                >
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
                          // setCount(count + 1);
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
              ) : null
            )}
            {rightAnswer !== "" ? <Message text={rightAnswer} /> : null}
          </div>
        </div>
        <div
          className="relative flex items-center 
        justify-center h-[43rem]  overflow-hidden rounded-3xl border-2 border-black py-2 px-4 border-b-4"
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
    </>
  );
}
