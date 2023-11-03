import "./CompanyLogin.scss";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../config/constants";
import { useNavigate } from "react-router-dom";

const CompanyLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/company/login`,
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
    <div className="form__container">
      <form action="" className="corporate">
        <h2 className="corporate__title">Get Back To Business</h2>

        <section className="corporate__section">
          <label htmlFor="username" className="label">
            Username:
          </label>
          <input
            type="text"
            placeholder="email@email.com"
            className="corporate__input form__input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>

        <section className="corporate__section">
          <label htmlFor="corporate__password" className="label">
            Password:
          </label>
          <input
            type="password"
            className="corporate__input form__input"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        <button className="corporate__submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default CompanyLogin;
