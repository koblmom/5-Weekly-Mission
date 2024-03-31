import NavigationBar from "./components/section/NavigationBar/NavigationBar";
import FolderInfo from "./components/section/FolderInfo/FolderInfo";
import SearchBar from "./components/section/SearchBar/SearchBar";
import CardData from "./components/section/CardData/CardData";
import "./App.css";
import "./global.css";

function App() {
  return (
    <>
      <NavigationBar />
      <FolderInfo />
      <SearchBar />
      <CardData />
    </>
  );
}

export default App;
