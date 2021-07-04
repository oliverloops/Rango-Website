import Link from "next/link";

const Form = () => {
  return (
    <form className="flex flex-col justify-center rounded-2xl shadow-lg p-4">
      <label className="px-4 py-2 pt-6">
        <input
          className="bg-gray-200 rounded-lg px-4 py-2 w-full"
          type="text"
          placeholder="Ingresa tu nombre"
        />
      </label>
      <label className="px-4 py-2">
        <input
          className="bg-gray-200 rounded-lg px-4 py-2 w-full"
          type="text"
          placeholder="Ingresa tu correo electrónico"
        />
      </label>
      <label className="px-4 py-2">
        <textarea
          className="bg-gray-200 rounded-lg px-4 py-2 w-full"
          placeholder="Aquí puedes agregar más detalles, la idea que tengas en mente o preguntas que tengas al respecto"
        />
      </label>
      <div className="flex justify-center p-3">
        <Link href="#">
          <a>
            <button className="bg-yellow-300 rounded-full py-3 px-8">
              Enviar
            </button>
          </a>
        </Link>
      </div>
    </form>
  );
};

export default Form;
