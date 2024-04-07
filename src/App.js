import NavigationBar from "./components/common/NavigationBar/NavigationBar";
import FolderInfo from "./components/main/FolderInfo/FolderInfo";
import MainContent from "./components/main/MainContent/MainContent";
import Footer from "./components/common/Footer/Footer";
import "./App.css";
import "./global.css";

function App() {
  return (
    <>
      <NavigationBar />
      <FolderInfo />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
