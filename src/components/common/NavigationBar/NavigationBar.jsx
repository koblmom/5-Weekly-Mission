import "./NavigationBar.css";
import useFetch from "../../hook/fetchDataHook";

function NavigationBar() {
  const [userData] = useFetch("user");

  return (
    <nav className="NavigtionBar">
      <div className="NavigationBar-items">
        <a>
          <img
            className="NavigationBar-img"
            src="images/linkbrary.svg"
            alt="logo"
          ></img>
        </a>
        {userData ? (
          <div className="Navigation-profile">
            <img
              className="Navigation-profileImg"
              src={userData?.profileImageSource}
            />
            <span className="Navigation-profileEmail">{userData?.email}</span>
          </div>
        ) : (
          <a>
            <span className="NavigationBar-signin">로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}
export default NavigationBar;
