import { useNavigate } from "react-router-dom";
import "./Pages.css";
const SignUp = () => {


  const navigate = useNavigate();

  function ToLoginPage() {
  
    // Redirect to login page
    navigate('/login'); 
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
      <img className="background-image" alt="" src="/signupbg.png" />
      <div className="logo-wrapper">
      <img alt ='Logo' src=""/> 
      </div>
      <div className="create-an-account">Create an account</div>
      
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
        <div className="create-account-text">Create Account</div>
      </button>

      <a className="by-creating-container" onClick={onByCreatingAnClick}>
        {`By creating an account you agree to our Company’s `}<br/>
        <span className="terms">Terms & conditions </span>
        {` and `} 
        <span className="terms">Privacy Policy</span>
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

      <a className="already-have-an-account" onClick={ToLoginPage}>
        <span>{`Already have an account ? `}</span>
        <b className="signin">Login</b>
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

export default SignUp;
