import { useCallback, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous delay
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const ToLoginPage = () => {
    navigate('/login');
  };


  const registerUser = useCallback(async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('/register', {
        email,
        password
      });
      toast.success("Registration successful",{position : toast.POSITION.TOP_CENTER, autoClose: 500,}); // Show success toast
      
      navigate('/login');// Handle the response or perform any necessary actions
    } catch (error) {
      toast.error("Type your credentials",{position: toast.POSITION.TOP_CENTER, autoClose: 500,}); // Show error toast
    }
  }, [email, password , navigate]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
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
    <div className="main-page">
      <img className="background-image" alt="" src="/signupbg.png" />
      <div className="logo-wrapper">
        <img alt='Logo' src="" />
      </div>
      <div className="create-an-account">Create an account</div>
<form>
      <div className="email">Email</div>
      <input
        className="email-input"
        type="email"
        placeholder="Enter Your Email"
        value= {email}
        onChange={handleEmailChange}
        required
        autoFocus
      />

      <div className="password">Password</div>
      <input
        className="password-input"
        type="password"
        placeholder="Enter your Password"
        value= {password}
        onChange={handlePasswordChange}
        required
        autoFocus
      />
</form>

      <button
        className="create-account"
        autoFocus
        onClick={registerUser}
      >
        <div className="create-account-text">Create Account</div>
      </button>

      <a className="by-creating-container" onClick={onByCreatingAnClick}>
        {`By creating an account you agree to our Company’s `}<br />
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
