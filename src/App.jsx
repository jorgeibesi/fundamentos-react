const MyButton = () => {
  return <button>i'm a button</button>;
};

export const App = () => {
  const title = "Mi titulo desde una constante";
  const classTitle = "text-center";
  const pathImg = "https://picsum.photos/200";
  const user = true; //Simulando que el usuario está registrado y activo en nuestro sitio web
  return (
    <div className={classTitle}>
      <h1>{title}</h1>
      <img src={pathImg} alt={`imagen-${title}`} />
      {user && <MyButton />}
    </div>
  );
};
