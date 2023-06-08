import { useNavigate } from "react-router-dom";
import "./Pages.css";
const SignIn = () => {

  const navigate = useNavigate();
  function ToSignUpPage () {
  
    // Redirect to signup
    navigate('/'); 
  }

  const onCreateAccountClick = (() => {
    //TODO: call an api for register
  }, []);

  const onContinueWithGoogleClick = (() => {
    //TODO: register using google accout
  }, []);

  const onByCreatingAnClick = (() => {
    //TODO: policy page
  }, []);

  const onFrameButtonClick = (() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton1Click = (() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton2Click = (() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton3Click = (() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton4Click = (() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton5Click = (() => {
    //TODO: ai api only when register
  }, []);

  return (
    <div className="main-page">
      <img className="background-image" alt="" src="/bg (2).jpg" />
      <div className="logo-wrapper">
        <img alt ='Logo' src=""/> 
      </div>
      <div className="create-an-account">Login</div>
      
      <div className="email">Email</div>
      <input
        className="email-input"
        type="email"
        placeholder="Enter Your Email"
        required
        autoFocus
      />
      

      <div className="password">Password</div>
      <input
        className="password-input"
        type="password"
        placeholder="Enter your Password"
        required
        autoFocus
      />
    
      <button
        className="create-account"
        autoFocus
        onClick={onCreateAccountClick}
      >
        <div className="create-account-text">Login</div>
      </button>

      <a className="forgot-password" onClick={onByCreatingAnClick}>
        <span >Forgot Password ? </span>
      </a>

      <div className="or">Or</div>

      <button
        className="continue-with-google"
        autoFocus
        onClick={onContinueWithGoogleClick}>
        <img
          className="google-icon"
          alt=""
          src="/flatcoloriconsgoogle.svg"
        />
        <div className="continue-with-google-text">Continue With Google</div>
      </button>

      <a className="already-have-an-account" onClick={ToSignUpPage}>
        <span>{`Don't have an account ? `}</span>
        <b className="signin">Create now</b>
      </a>



      <button className="ai-wrapper"
        autoFocus
        onClick={onFrameButtonClick}>
        <b className="gradient-button-text">Ai</b>
      </button>


      <button
        className="illustrations-wrapper"
        autoFocus
        onClick={onFrameButton1Click}>
        <b className="gradient-button-text">Illustrations</b>
      </button>


      <button
        className="ui-kits-wrapper"
        autoFocus
        onClick={onFrameButton2Click}>
        <b className="gradient-button-text">Ui Kits</b>
      </button>


      <button className="icons-wrapper"
        autoFocus
        onClick={onFrameButton3Click}>
        <b className="gradient-button-text">Icons</b>
      </button>


      <button
        className="d-elements-wrapper"
        autoFocus
        onClick={onFrameButton4Click}>
        <b className="gradient-button-text">3D Elements</b>
      </button>



      <button
        className="images-wrapper"
        autoFocus
        onClick={onFrameButton5Click}>
        <b className="gradient-button-text">Images</b>
      </button>
    </div>
  );
};

export default SignIn;
