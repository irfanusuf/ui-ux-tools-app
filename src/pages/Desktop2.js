import styles from "./Desktop2.module.css";
const Desktop2 = () => {
  return (
    <div className={styles.desktop2}>
      <div className={styles.desktop2Child} />
      <div className={styles.login}>Login</div>
      <div className={styles.emailParent}>
        <div className={styles.email}>Email</div>
        <div className={styles.enterYourEmailParent}>
          <div className={styles.email}>Enter Your Email</div>
          <img className={styles.messageIcon} alt="" src="/message.svg" />
        </div>
      </div>
      <div className={styles.desktop2Inner}>
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
      <div className={styles.dontHaveAnContainer}>
        <span>{`Don’t have an account ? `}</span>
        <b className={styles.createNow}>Create now</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.loginWrapper}>
          <div className={styles.continueWithGoogle}>Login</div>
        </div>
      </div>
      <div className={styles.desktop2Inner1}>
        <div className={styles.flatColorIconsgoogleParent}>
          <img
            className={styles.messageIcon}
            alt=""
            src="/flatcoloriconsgoogle1.svg"
          />
          <div className={styles.continueWithGoogle}>Continue With Google</div>
        </div>
      </div>
      <div className={styles.or}>Or</div>
      <div className={styles.desktop2Item} />
      <div className={styles.lineDiv} />
      <div className={styles.forgotPassword}>Forgot Password?</div>
    </div>
  );
};

export default Desktop2;
