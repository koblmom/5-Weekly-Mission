import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="NavagtionBar">
      <div className="NavigationBar-items">
        <a>
          <img
            className="NavigatioBar-img"
            src="images/linkbrary.svg"
            alt="logo"
          ></img>
        </a>
        <a>
          <span className="NavigationBar-signin">로그인</span>
        </a>
      </div>
    </nav>
  );
}

export default NavigationBar;
