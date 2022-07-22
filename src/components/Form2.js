import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Form = () => {
  const captchaRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    console.log("tokens", token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" className="input" />
      <ReCAPTCHA
        sitekey="6LeaZg8hAAAAAD0gO6P66qC2JrAGsOaiEFLTxzok"
        data-theme="dark"
        ref={captchaRef}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
