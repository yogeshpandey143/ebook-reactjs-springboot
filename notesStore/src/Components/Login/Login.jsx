import React from "react";
import "./Login.css";
import { useAppContext } from "../../context/AppContext";

const Login = () => {
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setShowUserLogin, navigate, setUser } = useAppContext();
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();

      setUser({ name :"Yogesh Pandey",
         email: "yogi@gmail.com" });
      setShowUserLogin(false);
      navigate("/");
  }
    
   

  

  return (
    <div
      onClick={() => (setShowUserLogin(false), navigate("/"))}
      className="login-page"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="login-container"
      >
        {state === "register" ? (
          <h2 className="login-title">Welcome </h2>
        ) : (
          <h2 className="login-title">Welcome Back</h2>
        )}
        <form  onSubmit={onSubmitHandler}>
          {state === "register" && (
            <div className="w-full">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter your name"
                className="login-input"
                type="text"
                required
              />
            </div>
          )}
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="login-input"
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="login-input"
            required
          />
          {state === "register" ? (
            <p>
              Already have an account?{" "}
              <span onClick={() => setState("login")} className="link-text">
                Log In
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setState("register")} className="link-text">
                click here
              </span>
            </p>
          )}

          <button className="submit-button">
            {state === "register" ? "Create Account" : "Login"}
          </button>
        </form>
        <button type="button" className="social-button apple">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
            alt="appleLogo"
            className="social-icon"
          />
          Log in with Apple
        </button>
        <button type="button" className="social-button google">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
            alt="googleFavicon"
            className="social-icon"
          />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
