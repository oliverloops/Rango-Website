import { FaLaptopCode } from "react-icons/fa";
import { BiRocket, BiPaint } from "react-icons/bi";

const Process = ({ step, children }) => (
  <div className="grid grid-cols-auto grid-rows-auto gap-3 p-8">
    {step === 1 ? (
      <div className="col-start-1 row-start-2  bg-purple-500 w-14 h-14 rounded-2xl">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center self-center text-white p-3">
            <BiPaint size={32} />
          </div>
        </div>
      </div>
    ) : step === 2 ? (
      <div className="col-start-1 row-start-2 bg-green-500 w-14 h-14 rounded-2xl">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center self-center text-white p-3">
            <FaLaptopCode size={32} />
          </div>
        </div>
      </div>
    ) : (
      <div className="col-start-1 row-start-2 bg-yellow-500 w-14 h-14 rounded-2xl">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center self-center text-white p-3">
            <BiRocket size={32} />
          </div>
        </div>
      </div>
    )}
    <div className="col-start-2 row-start-1 text-gray-300 text-sm">
      {step === 1
        ? "Planeación y Diseño"
        : step === 2
        ? "Desarrollo"
        : "Pruebas y Despliegue"}
    </div>
    <div className="col-start-2 row-start-2 text-sm max-w-xs">{children}</div>
    <div className="col-start-2 row-start-3 text-md font-bold">Paso {step}</div>
  </div>
);

export default Process;
