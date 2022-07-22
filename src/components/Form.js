import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextFied from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log("e value", e);
  };

  const verifycalls = (e) => {
    console.log("event", e.target.value);
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Contact Form" />

        <TextFied
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
        />
        <br />
        <TextFied
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lastName")}
        />
        <br />
        <TextFied
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
        />
        <br />
        <TextFied
          hintText="Enter Your Message"
          floatingLabelText="Message"
          onChange={handleChange("message")}
        />
        <br />
        <RaisedButton
          label="Send"
          style={StyleSheet.button}
          onClick={verifycalls}
        />
        <ReCAPTCHA
          // ref={(ref) => (this.recaptcha = ref)}
          sitekey="6LeaZg8hAAAAAD0gO6P66qC2JrAGsOaiEFLTxzok"
          data-theme="dark"
          // onResolved={this.onResolved}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Form;
