import Message from "./Message";

export default function NextQuestion(props) {
  return (
    <>
        <div style={{marginBottom:"3rem"}}></div>
        <Message text={props.text} />

        <div className="flex justify-center items-center" style={{marginTop:"5rem"}}>
          <button
            className="bg-blue-500 hover:bg-red-400 text-white font-bold py-10 px-24 rounded"
            onClick={props.onClick}
          >
            Continue
          </button>
        </div>
    </>
  );
}
