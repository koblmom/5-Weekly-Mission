import NavigationBar from "./components/common/NavigationBar/NavigationBar";
import AddLinkBar from "./components/main/AddLinkBar/AddLinkBar";
import MainContent from "./components/main/MainContent/MainContent";
import Footer from "./components/common/Footer/Footer";
import "./App.css";
import "./global.css";

function App() {
  return (
    <>
      <NavigationBar />
      <AddLinkBar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
