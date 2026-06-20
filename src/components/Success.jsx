import successIcon from "../assets/icon-success.svg";

function Success({ email }) {
  return (
    <>
      <div className="success">
        <img src={successIcon} alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
        <button type="submit" id="dismiss-btn">
          Dusmiss message
        </button>
      </div>
    </>
  );
}

export default Success;
