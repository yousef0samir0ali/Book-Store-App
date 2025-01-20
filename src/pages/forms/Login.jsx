import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.success("Password is required");
  };

  //Show Password Handler
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>Login to your account</h1>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FontAwesomeIcon
                onClick={showPasswordHandler}
                icon={faEye}
                className="show-password-icon"
              />
            ) : (
              <FontAwesomeIcon
                onClick={showPasswordHandler}
                icon={faEyeSlash}
                className="show-password-icon"
              />
            )}
          </div>
          <button>Login</button>
        </form>
        <div className="form-footer">
          Don`t have an account?
          <Link className="form-link" to={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
