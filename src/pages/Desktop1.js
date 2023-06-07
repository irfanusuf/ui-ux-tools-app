import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <div className={styles.createAnAccount}>Create an account</div>
      <div className={styles.emailParent}>
        <div className={styles.email}>Email</div>
        <div className={styles.enterYourEmailParent}>
          <div className={styles.email}>Enter Your Email</div>
          <img className={styles.messageIcon} alt="" src="/message.svg" />
        </div>
      </div>
      <div className={styles.desktop1Inner}>
        <div className={styles.logoWrapper}>
          <div className={styles.email}>LOGO</div>
        </div>
      </div>
      <div className={styles.passwordParent}>
        <div className={styles.email}>Password</div>
        <div className={styles.parent}>
          <div className={styles.div}>********</div>
          <img className={styles.messageIcon} alt="" src="/hide1.svg" />
        </div>
      </div>
      <div className={styles.alreadyHaveAnContainer}>
        <span>{`Already have an account ? `}</span>
        <b className={styles.signin}>Signin</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.createAccountWrapper}>
          <div className={styles.createAccount}>Create Account</div>
        </div>
      </div>
      <div className={styles.desktop1Inner1}>
        <div className={styles.flatColorIconsgoogleParent}>
          <img
            className={styles.messageIcon}
            alt=""
            src="/flatcoloriconsgoogle1.svg"
          />
          <div className={styles.createAccount}>Continue With Google</div>
        </div>
      </div>
      <div className={styles.or}>Or</div>
      <div className={styles.desktop1Item} />
      <div className={styles.lineDiv} />
      <div className={styles.byCreatingAnContainer}>
        {`By creating an account you agree to our Company’s `}
        <span className={styles.terms}>Terms</span>
        {` and `}
        <span className={styles.terms}>Privacy Policy</span>
      </div>
    </div>
  );
};

export default Desktop1;
