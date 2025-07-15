import "./App.css";
import Login from "./Components/Login/Login";
import { useAppContext } from "./context/AppContext";
//import router...........
import Router from "./Router/Router";

export default function App() {

     const { showUserLogin } = useAppContext();
  return (
    <>
        {showUserLogin ? <Login /> : <Router />}
      
    </>
  );
}
