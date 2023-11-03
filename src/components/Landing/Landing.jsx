import "./Landing.scss";
import { Link } from "react-router-dom";
import credit from "../../styles/images/credit-cards.png";

const Landing = () => {
  return (
    <div className="homepage">
      <section className="homepage__left">
        <h1 className="homepage__title">Invoices are easier than ever.</h1>
        <h3 className="homepage__subtitle">
          Invoices shouldn't take up your day. There is always more to be done.
        </h3>
        <div className="homepage__navigation">
          <Link to="login/company">
            <button className="homepage__button">Corporate Login</button>
          </Link>
          <Link to="login/user">
            <button className="homepage__button">Shopper Login</button>
          </Link>
        </div>
      </section>

      <section className="homepage__right">
        <img src={credit} alt="" />
      </section>
    </div>
  );
};

export default Landing;
