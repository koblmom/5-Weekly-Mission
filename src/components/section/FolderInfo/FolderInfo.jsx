import useFetch from "../../hook/fetchDataHook";
import "./FolderInfo.css";

function FolderInfo() {
  const [userData] = useFetch("folder");

  return (
    <div className="FolderInfo">
      <img
        className="FolderInfo-profile"
        src={userData?.folder?.owner?.profileImageSource}
        alt="폴더 소유자 프로필 이미지"
      />
      <span className="FolderInfo-owner">{userData?.folder?.owner?.name}</span>
      <h2 className="FolderInfo-folder">{userData?.folder?.name}</h2>
    </div>
  );
}
export default FolderInfo;
