import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import { useNavigate } from "react-router-dom";
import { InputData } from "../interfaces/interfaces";

export default function Try() {
  const { inputData, setInputData } = useContext(InputContext);
  const navigate = useNavigate();
  return (
    <section className=" w-10/12 md:w-2/3 lg:w-1/2 mx-auto flex flex-col gap-10 pb-5">
      <div className="flex justify-start gap-5">
        <div className="w-1/2 flex justify-between">
          <label htmlFor="age" className=" text-xl md:text-2xl">
            Edad
          </label>
          <h1 className="text-2xl text-gray-600">{inputData.age}</h1>
        </div>
        <input
          className="w-full"
          type="range"
          id="age"
          name="age"
          min="14"
          max="99"
          value={inputData.age}
          onChange={(e) =>
            setInputData({ ...inputData, age: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="flex justify-start gap-5">
        <div className="w-1/2 flex justify-between">
          <label htmlFor="age" className=" text-xl md:text-2xl">
            Altura (cm)
          </label>
          <h1 className="text-2xl text-gray-600">{inputData.heigth}</h1>
        </div>

        <input
          className="w-full"
          type="range"
          id="heigth"
          name="heigth"
          min="140"
          max="220"
          value={inputData.heigth}
          onChange={(e) =>
            setInputData({ ...inputData, heigth: parseInt(e.target.value) })
          }
        />
      </div>
      <div className="flex justify-start">
        <label
          htmlFor="hairColor"
          className=" text-xl md:text-2xl my-auto w-1/3"
        >
          Color de pelo
        </label>
        <select
          className="text-2xl border-2 rounded-sm border-black p-1"
          name="hairColor"
          id="hairColor"
          onChange={(e) =>
            setInputData({
              ...inputData,
              hairColor: e.target.value as InputData["hairColor"],
            })
          }
          value={inputData.hairColor}
        >
          <option value="brown">Castaño</option>
          <option value="black">Negro</option>
          <option value="blonde">Rubio</option>
          <option value="redhead">Pelirrojo</option>
          <option value="grey">Gris</option>
        </select>
      </div>

      <div className="flex justify-start">
        <h1 className="my-auto  text-xl md:text-2xl w-1/3">Largo del pelo</h1>
        <ul className="flex gap-3">
          <li>
            <input
              type="radio"
              name="hairHeigth"
              id="large"
              value="Large"
              className="hidden peer"
              defaultChecked={true}
            />
            <label
              htmlFor="large"
              className="bg-red-500 peer-checked:bg-red-700 inline-block rounded-md hover:scale-105 cursor-pointer transition"
              onClick={() => {
                setInputData({ ...inputData, hairHeigth: "large" });
              }}
            >
              <img
                src="https://kamelrechner.eu/img/woman-long-hair.png"
                alt="B"
              />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="hairHeigth"
              id="middle"
              value="Middle"
              className="hidden peer"
            />
            <label
              htmlFor="middle"
              className="bg-red-500 peer-checked:bg-red-700 inline-block rounded-md hover:scale-105 cursor-pointer transition"
              onClick={() => {
                setInputData({ ...inputData, hairHeigth: "middle" });
              }}
            >
              <img
                src="https://kamelrechner.eu/img/woman-middle-hair.png"
                alt="B"
              />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="hairHeigth"
              id="short"
              value="Short"
              className="hidden peer"
            />
            <label
              htmlFor="short"
              className="bg-red-500 peer-checked:bg-red-700 inline-block rounded-md hover:scale-105 cursor-pointer transition"
              onClick={() => {
                setInputData({ ...inputData, hairHeigth: "short" });
              }}
            >
              <img
                src="https://kamelrechner.eu/img/woman-short-hair.png"
                alt="B"
              />
            </label>
          </li>
        </ul>
      </div>
      <div className="flex justify-start">
        <h1 className=" text-xl md:text-2xl w-1/3">Color de ojos</h1>
        <select
          name="eyeColor"
          id="eyeColor"
          onChange={(e) =>
            setInputData({
              ...inputData,
              eyeColor: e.target.value as InputData["eyeColor"],
            })
          }
          value={inputData.eyeColor}
          className="text-2xl border-2 border-black p-1 rounded-sm"
        >
          <option value="black">Negro</option>
          <option value="blue">Azul</option>
          <option value="green">Verde</option>
          <option value="brown">Marrón</option>
          <option value="grey">Gris</option>
        </select>
      </div>
      <div className="flex justify-start">
        <h1 className=" text-xl md:text-2xl my-auto w-1/3">
          Tamaño de las tetas
        </h1>
        <ul className="flex gap-3">
          <li>
            <input
              type="radio"
              name="boobSize"
              id="small"
              value="Small"
              className="hidden peer"
              defaultChecked={true}
            />
            <label
              htmlFor="small"
              className="bg-red-500 peer-checked:bg-red-700 inline-block rounded-md hover:scale-105 cursor-pointer transition"
              onClick={() => {
                setInputData({ ...inputData, boobSize: "small" });
              }}
            >
              <img src="https://kamelrechner.eu/img/boobs-a.png" alt="B" />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="boobSize"
              id="boobMiddle"
              value="Middle"
              className="hidden peer"
            />
            <label
              htmlFor="boobMiddle"
              className="bg-red-500 peer-checked:bg-red-700 inline-block rounded-md hover:scale-105 cursor-pointer transition"
              onClick={() => {
                setInputData({ ...inputData, boobSize: "middle" });
              }}
            >
              <img src="https://kamelrechner.eu/img/boobs-b.png" alt="B" />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="boobSize"
              id="big"
              value="Big"
              className="hidden peer"
            />
            <label
              htmlFor="big"
              className="bg-red-500 peer-checked:bg-red-700 inline-block rounded-md hover:scale-105 cursor-pointer transition"
              onClick={() => {
                setInputData({ ...inputData, boobSize: "big" });
              }}
            >
              <img src="https://kamelrechner.eu/img/boobs-c.png" alt="B" />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="boobSize"
              id="veryBig"
              value="VeryBig"
              className="hidden peer"
            />
            <label
              htmlFor="veryBig"
              className="bg-red-500 peer-checked:bg-red-700 inline-block rounded-md hover:scale-105 cursor-pointer transition"
              onClick={() => {
                setInputData({ ...inputData, boobSize: "veryBig" });
              }}
            >
              <img src="https://kamelrechner.eu/img/boobs-d.png" alt="B" />
            </label>
          </li>
        </ul>
      </div>
      <div className="flex justify-start">
        <h1 className=" text-xl md:text-2xl w-1/3">Contextura física</h1>
        <select
          name="physicalContext"
          id="physicalContext"
          onChange={(e) =>
            setInputData({
              ...inputData,
              physicalContext: e.target.value as InputData["physicalContext"],
            })
          }
          value={inputData.physicalContext}
          className="border-2 border-black p-1 rounded-sm text-2xl"
        >
          <option value="thin">Flaca</option>
          <option value="sporty">Deportista</option>
          <option value="sporty">Mamadisima</option>
          <option value="normal">Normal</option>
          <option value="chubby">Gordita</option>
          <option value="fat">Gorda</option>
        </select>
      </div>
      <button
        className="bg-red-500 rounded-md py-4 px-10 w-fit mx-auto text-white text-2xl hover:scale-110 transition"
        onClick={() => {
          navigate("/result");
        }}
      >
        Calcular
      </button>
    </section>
  );
}
