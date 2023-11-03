import "./UserLogin.scss";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../config/constants";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        navigate("/user/home");
      }
    } catch (err) {
      console.log("error logging in", err);
    }
  };

  return (
    <div className="background">
      <div className="form__container">
        <form className="user">
          <h2 className="user__title">Welcome Back</h2>

          <section className="user__section">
            <label htmlFor="username" className="label">
              Username:
            </label>
            <input
              type="text"
              placeholder="email@email.com"
              className="user__input form__input"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>

          <section className="user__section">
            <label htmlFor="user__password" className="label">
              Password:
            </label>
            <input
              type="password"
              className="user__input form__input"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>

          <button className="user__submit" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
