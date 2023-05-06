import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();
  const [otp, setOTP] = useState('');

  const handleNumberClick = (number) => {
    if (otp.length < 4) {
      setOTP(otp + number);
    }
  };

  const handleBackspaceClick = () => {
    setOTP(otp.slice(0, -1));
  };

  const handleDoneClick = async () => {
    const response = await fetch(`http://localhost:8080/api/v1/patients?token=${otp}`);
    const { data } = await response.json();
    if(data) {
      history.push(`/game/${data.healthCardId}`);
    }
    else
    {
      alert("Invalid PIN");
    }
  }

    return(
        <div className="mx-auto h-screen">
            <div className="place-content-center bg-[url('./assets/homescreen.jpg')] bg-cover bg-no-repeat">
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold mb-8 text-white">Enter PIN</h1>
                    <div className="flex justify-center">
                        {Array.from({ length: 4 }).map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-36 h-36 mx-2 text-3xl border border-yellow-200 rounded text-center bg-gray-900 text-white"
                            style={{opacity:"0.7"}}
                            value={otp[index] || ''}
                            onChange={() => {}}
                        />
                        ))}
                    </div>
                    <div className="mt-8">
                        <div className="grid grid-cols-3 gap-2">
                        {Array.from({ length: 9 }).map((_, index) => (
                            <button
                            key={index}
                            className="w-36 h-36 text-2xl border border-gray-400 rounded text-center bg-gray-900 text-white"
                            style={{opacity:"0.7"}}
                            onClick={() => handleNumberClick(index + 1)}
                            >
                            {index + 1}
                            </button>
                        ))}
                        <button
                            className="w-36 h-36 text-2xl border border-gray-400 rounded text-center bg-gray-900 text-white"
                            style={{opacity:"0.7"}}
                            onClick={handleBackspaceClick}
                        >
                            &#x232b;
                        </button>
                        <button
                            className="w-36 h-36 text-2xl border border-gray-400 rounded text-center bg-gray-900 text-white"
                            style={{opacity:"0.7"}}
                            onClick={() => handleNumberClick(0)}
                        >
                            0
                        </button>
                        <a
                            className="flex items-center justify-center w-36 h-36 text-2xl border border-gray-400 rounded bg-gray-900 text-white"
                            style={{opacity:"0.7"}}
                            onClick={handleDoneClick}
                        >
                            &#10003;
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
