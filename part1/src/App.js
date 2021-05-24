import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es la app</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="blue" message="En un curso de React" />
      <Description />
    </div>
  );
};

export default App;
