import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import './App.css'
import { Form, Button, Row, Col, Container} from "reactstrap";
class SignupForm extends React.Component{
  handleSubmit=(values)=>
  {
    console.log(values);
  }
  render()
  {
    const responseFacebook=(response)=>{
      console.log(response);
      alert("Signup Succesfully with"+response.profileObj.email+"account and check console for other details");
    }
    const responseGoogle = (response)=>{
      console.log(response.profileObj);
       alert("Signup Succesfully with"+response.profileObj.email+"account and check console for other details");
     };
    return(
      <Container className="container">
        <Row>
          <Col sm="10" className="x">
            <img src='logo.png'/>
          </Col>
        </Row>
        <Row>
          <Col sm="5" className="x">
            <h3>SIGN UP</h3>
            <br/>
            <h1 style={{ fontWeight:"normal" }}>Create your account</h1>
            <h5 style={{ fontWeight:"normal" }}>sdhla kds'a kd'JF skan kldfakn aklhfaehv aklhfah kahsfal</h5>
            <GoogleLogin
            clientId="689688957845-bpk9raj2tcetv9g88r0jd88pktq3p9f0.apps.googleusercontent.com"
            buttonText="Sign up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            redirectUri="http://localhost:3000"
            />
            <FacebookLogin
              appId="848013662672907"
              fields="name,email,picture"
              cssClass="fb"
              buttonText="Sign up with Facebook"
              icon="fa fa-facebook-f"
              callback={responseFacebook}
            />
            <br/>
            <hr
            style={{width: "40%",display: "inline-block",verticalAlign: "middle",}}></hr>{" "}
            <span style={{ color: "grey" }}>or</span>{" "}
            <hr style={{width: "40%",display: "inline-block",verticalAlign: "middle",}}></hr>
            <Form onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="y"
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="y"
                  ></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input type="text" placeholder="Email" className="y"></input>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <input
                    type="password"
                    placeholder="Password"
                    className="y"
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
                  >
                    SIGN UP
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SignupForm;
