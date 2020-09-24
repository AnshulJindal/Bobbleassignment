import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "./App.css";
import axios from "axios";
import { Form, Button, Row, Col, Container } from "reactstrap";
class SignupForm extends React.Component {
  state = { email: "", password: "" };
  handleSubmit = async (e) => {
    if(this.state.email=== '')
      alert('Email is Missing');
    else if(this.state.password==='')
      alert('Password is missing');
    else if(!(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email)))
      alert("Email entered is not valid");
      else {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/register", {
        email: this.state.email,
        password: this.state.password,
      });
      console.log(response);
      alert("Signup Successful");
    } catch (error) {
      alert("Invalid Credentials");
    }
  }
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.currentTarget.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.currentTarget.value });
  };
  responseFacebook = (response) => {
    console.log(response);
    alert(
      "Signup Succesfully with" +
        response.id +
        "account and check console for other details"
    );
  };
  responseGoogle = (response) => {
    console.log(response.profileObj);
    alert(
      "Signup Succesfully with" +
        response.profileObj.email +
        "account and check console for other details"
    );
  };
  render() {
    return (
      <Container className="container">
        <Row>
          <Col sm="5" className="x">
            <img src="logo.png" />
          </Col>
        </Row>
        <Row>
          <Col sm="5" className="x">
            <h3>SIGN UP</h3>
            <br />
            <h1 style={{ fontWeight: "normal" }}>Create your account</h1>
            <h5 style={{ fontWeight: "normal" }}>
               Lorem Ipsum dolor sit amet,consectetur adipiscing elit
            </h5>
            <GoogleLogin
              clientId="689688957845-bpk9raj2tcetv9g88r0jd88pktq3p9f0.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              redirecturi="https://master.di6guhu8qtisg.amplifyapp.com"
            />
            <FacebookLogin
              appId="848013662672907"
              fields="name,email,picture"
              cssClass="fb"
              buttonText="Sign up with Facebook"
              icon="fa fa-facebook-f"
              callback={this.responseFacebook}
            />
            <br />
            <hr
              style={{
                width: "40%",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            ></hr>{" "}
            <span style={{ color: "grey" }}>or</span>{" "}
            <hr
              style={{
                width: "40%",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            ></hr>
            <Form onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="y"
                    name="firstname"
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="y"
                    name="lastname"
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="Email"
                    className="y"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="password"
                    placeholder="Password"
                    className="y"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  ></input>
                </Col>
              </Row>
              <Row>
                <p
                  style={{
                    fontSize: "12px",
                    marginLeft: "50px",
                    color: "grey",
                  }}
                >
                  By Clicking Sign Up, You agree to our
                  <a href="#">Terms of Use</a> and our{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Button
                    type="submit"
                    color="primary"
                    style={{ width: "85%" }}
                    onClick={this.handleSubmit}
                  >
                    SIGN UP
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupForm;
