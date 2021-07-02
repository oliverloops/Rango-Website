import Image from "next/image";

const Home = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4">
      <div className="col-start-1 row-start-1 row-end-3">
        <h1 className="text-purple-500">
          Construímos tus ambiciosos productos digitales.
        </h1>
      </div>
      <div className="col-start-1 row-start-2 row-end-4">
        <p>
          Rango es una agencia de software. En Rango nosotros construímos el
          futuro, resolvemos problemas y creamos las mejores experiencias en web
          y móvil.
        </p>
      </div>
      <div className="col-start-2 row-start-2 row-end-3">
        <Image src="/rango_logo.png" width="232" height="232" />
      </div>
    </div>
  );
};

export default Home;
