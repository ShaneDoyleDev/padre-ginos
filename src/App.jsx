import { createRoot } from "react-dom/client";
import Order from "./Order";

const App = () => {
  return (
    <>
      <h1>Padre Gino's Pizza – Order Now</h1>
      <Order />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
