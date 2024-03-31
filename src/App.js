import NavigationBar from "./components/section/NavigationBar/NavigationBar";
import FolderInfo from "./components/section/FolderInfo/FolderInfo";
import MainContent from "./components/section/MainContent/MainContent";
import "./App.css";
import "./global.css";

function App() {
  return (
    <>
      <NavigationBar />
      <FolderInfo />
      <MainContent />
    </>
  );
}

export default App;
