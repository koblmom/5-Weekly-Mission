import "./NavigationBar.css";
import useFetch from "../hook/fetchDataHook";

function NavigationBar() {
  const data = useFetch("https://bootcamp-api.codeit.kr");

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
        {data ? (
          <div className="Navigation-profile">
            <img
              className="Navigation-profileImg"
              src={data[0]?.profileImageSource}
            />
            <span className="Navigation-profileEmail">{data[0]?.email}</span>
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
