import { VscProject } from "react-icons/vsc";

const Process = ({ step, children }) => (
  <div className="grid grid-cols-2 grid-rows-auto gap-2">
    <div className="col-start-1 row-start-2 place-self-center bg-purple-500 w-14 h-14 rounded-2xl">
      <VscProject />
    </div>
    <div className="col-start-2 row-start-1 text-gray-300 text-sm">
      {step === 1
        ? "Planeación y Diseño"
        : step === 2
        ? "Desarrollo"
        : "Pruebas y Despliegue"}
    </div>
    <div className="col-start-2 row-start-2 text-sm">{children}</div>
    <div className="col-start-2 row-start-3 text-lg font-bold">Paso {step}</div>
  </div>
);

export default Process;
