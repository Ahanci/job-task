import "./App.css";
import MainPage from "./pages/mainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./pages/tasks";
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";
import SearchPage from "./pages/searchPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/page-a" element={<PageA />} />
          <Route path="/page-b" element={<PageB />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
