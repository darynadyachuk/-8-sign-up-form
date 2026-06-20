import { useState } from "react";
import mobile from "../assets/illustration-sign-up-mobile.svg";
import desktop from "../assets/illustration-sign-up-desktop.svg";
import icon from "../assets/icon-list.svg";

function Card({ setEmail, setIsSubmitted }) {
  const [isInvalid, setIsInvalid] = useState(false);
  return (
    <>
      <div className="image-area">
        <picture>
          <source media="(min-width:48rem)" srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </div>
      <section className="info">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>
            <img src={icon} alt="" />
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <img src={icon} alt="" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <img src={icon} alt="" />
            <p>And much more!</p>
          </li>
        </ul>
        <form
          onSubmit={(e) => {
            const inputValue = e.target.elements["email-input"].value;
            e.preventDefault();
            if (!inputValue.includes("@")) {
              setIsInvalid(true);
            } else {
              setIsInvalid(false);
              setIsSubmitted(true);
            }
          }}
        >
          <div className="label-area">
            <label htmlFor="email">Email address</label>
            {isInvalid && <span className="error">Valid email required</span>}
          </div>
          <input
            type="text"
            name="email-input"
            className={isInvalid ? "email-input-invalid" : "email-input"}
            placeholder="email@company.com"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" id="subscribe-btn">
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
    </>
  );
}

export default Card;
