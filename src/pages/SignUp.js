import { useCallback } from "react";
import "./SignUp.css";
const SignUp = () => {
  const onAlreadyHaveAnClick = useCallback(() => {
    //TODO: go to sign page
  }, []);

  const onCreateAccountClick = useCallback(() => {
    //TODO: call an api for register
  }, []);

  const onContinueWithGoogleClick = useCallback(() => {
    //TODO: register using google accout
  }, []);

  const onByCreatingAnClick = useCallback(() => {
    //TODO: policy page
  }, []);

  const onFrameButtonClick = useCallback(() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton1Click = useCallback(() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton2Click = useCallback(() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton3Click = useCallback(() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton4Click = useCallback(() => {
    //TODO: ai api only when register
  }, []);

  const onFrameButton5Click = useCallback(() => {
    //TODO: ai api only when register
  }, []);

  return (
    <div className="signup">
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="signup-child" />
      <div className="logo-wrapper">
        <div className="logo">LOGO</div>
      </div>
      <div className="create-an-account">Create an account</div>
      <div className="email">Email</div>
      <div className="password">Password</div>
      <a className="already-have-an-container" onClick={onAlreadyHaveAnClick}>
        <span>{`Already have an account ? `}</span>
        <b className="signin">Signin</b>
      </a>
      <button
        className="create-account"
        autoFocus
        onClick={onCreateAccountClick}
      >
        <div className="create-account1">Create Account</div>
      </button>
      <button
        className="continue-with-google"
        autoFocus
        onClick={onContinueWithGoogleClick}
      >
        <img
          className="flat-color-iconsgoogle"
          alt=""
          src="/flatcoloriconsgoogle.svg"
        />
        <div className="continue-with-google1">Continue With Google</div>
      </button>
      <div className="or">Or</div>
      <a className="by-creating-an-container" onClick={onByCreatingAnClick}>
        {`By creating an account you agree to our Company’s `}
        <span className="terms">Terms</span>
        {` and `}
        <span className="terms">Privacy Policy</span>
      </a>
      <input
        className="password-input"
        type="password"
        placeholder="Enter your Password"
        required
        autoFocus
      />
      <input
        className="email-input"
        type="email"
        placeholder="Enter Your Email"
        required
        autoFocus
      />
      <button className="ai-wrapper" autoFocus onClick={onFrameButtonClick}>
        <b className="ai">Ai</b>
      </button>
      <button
        className="illustrations-wrapper"
        autoFocus
        onClick={onFrameButton1Click}
      >
        <b className="ai">Illustrations</b>
      </button>
      <button
        className="ui-kits-wrapper"
        autoFocus
        onClick={onFrameButton2Click}
      >
        <b className="ai">Ui Kits</b>
      </button>
      <button className="icons-wrapper" autoFocus onClick={onFrameButton3Click}>
        <b className="ai">Icons</b>
      </button>
      <button
        className="d-elements-wrapper"
        autoFocus
        onClick={onFrameButton4Click}
      >
        <b className="ai">3D Elements</b>
      </button>
      <button
        className="images-wrapper"
        autoFocus
        onClick={onFrameButton5Click}
      >
        <b className="ai">Images</b>
      </button>
    </div>
  );
};

export default SignUp;
