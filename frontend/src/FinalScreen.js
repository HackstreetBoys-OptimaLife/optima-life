import React from "react";
import HardCoded from "./Components/MyArray"
import MyArray from "./Components/MyArray";

const FinalScreen = (props) => {
    return<>
        <div className="mx-auto h-screen">
            <div className="place-content-center bg-[url('./assets/homescreen.jpg')] bg-cover bg-no-repeat">
                <div className="flex flex-col items-center justify-center h-screen">
                   <h1 className="text-8xl font-bold mb-8 text-white">Your Final Score is ready!!!</h1>
                    <h2 className="text-5xl font-bold mb-8 text-white">Points: {MyArray[MyArray.length -1]}</h2>
                    <div className="mt-8">
                        <div className="grid grid-cols-2 gap-52">
                            <button 
                                className="w-96 h-36 text-2xl border border-gray-400 rounded text-center bg-gray-900 text-white"
                                style={{opacity:"0.7"}}
                            >
                                Redeem Points
                            </button>
                            <button 
                                className="w-96 h-36 text-2xl border border-gray-400 rounded text-center bg-gray-900 text-white"
                                style={{opacity:"0.7"}}
                            >
                                Bank Points
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default FinalScreen;