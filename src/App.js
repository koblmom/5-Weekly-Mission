import NavigationBar from "./components/section/NavigationBar/NavigationBar";
import FolderInfo from "./components/section/FolderInfo/FolderInfo";
import MainContent from "./components/section/MainContent/MainContent";
import Footer from "./components/section/Footer/Footer";
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
