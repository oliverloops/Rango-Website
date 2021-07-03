const Form = () => {
  return (
    <div className="bg-red-400 w-80 h-80">
      <form className="flex flex-col justify-center contact-form">
        <input type="text" placeholder="Ingresa tu nombre" />
        <input type="text" placeholder="Ingresa tu correo electrónico" />
        <textarea
          placeholder="Aquí puedes agregar más detalles, 
      la idea que tengas en mente o preguntas que tengas al respecto"
        />
      </form>
    </div>
  );
};

export default Form;
