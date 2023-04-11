import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import How from "./components/How";
import Where from "./components/Where";
import What from "./components/What";
import Results from "./components/Results";
function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
        <Routes>
          <Route path="/" exact />
          <Route path="/how" exact element={<How />}>
            Apple Page
          </Route>
          <Route path="/where" exact element={<Where />}>
            Banana Page
          </Route>
          <Route path="/what" exact element={<What />}>
            Orange Page
          </Route>
           <Route path="*" element={<Results />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;