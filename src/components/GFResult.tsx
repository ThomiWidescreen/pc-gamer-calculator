import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InputContext } from "../context/InputContext";
import GFResultFunction from "../lib/GFResultFunction";
import CountUp from "react-countup";

export default function GFResults() {
  const navigate = useNavigate();
  const { inputData, setInputData } = useContext(InputContext);
  return (
    <>
      <h1 className="bebas text-center text-7xl">El valor de tu novia es</h1>
      <div className="text-center text-8xl p-5 bebas">
        <CountUp end={GFResultFunction(inputData)} />
      </div>
      <h1 className="bebas text-center text-7xl">PC's Gamer</h1>
      <div className="flex justify-center pt-10">
        <button
          onClick={() => {
            setInputData({
              age: 14,
              heigth: 140,
              hairColor: "black",
              hairHeigth: "large",
              eyeColor: "black",
              boobSize: "small",
              physicalContext: "thin",
            });
            navigate("/", { replace: true });
          }}
          className="text-2xl md:text-4xl font-semibold py-3 px-5 rounded-md bg-red-500 text-white hover:scale-110 transition"
        >
          Reintentar
        </button>
      </div>
    </>
  );
}
