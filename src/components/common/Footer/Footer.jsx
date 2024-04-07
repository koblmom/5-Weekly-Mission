import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <span className="Footer-copyright">©codeit - 2023</span>
        <div className="Footer-links">
          <a
            className="Footer-link"
            href="https://weekly-mission-week8.vercel.app/privacy"
          >
            Privacy Policy
          </a>
          <a
            className="Footer-link"
            href="https://weekly-mission-week8.vercel.app/faq"
          >
            FAQ
          </a>
        </div>
        <div className="Footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/facebook.svg" alt="facebook 로고" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/twitter.svg" alt="twitter 로고" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/youtube.svg" alt="youtube 로고" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
