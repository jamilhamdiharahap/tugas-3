import ReactDOM from "react-dom/client";

let nama = "";

const Welcome = (props) => {
  return <h1>selamat datang {props.nama}</h1>;
};

const App = () => {
  return !nama ? <button>Login</button> : <Welcome nama="Hamdi Harahap" />;
};

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));
rootElement.render(<App />);
