
import { Route, Routes } from "react-router-dom";
import "./index.css"
import { MyProvider } from "./context";
import { Home } from "./pages/home";
import { News } from "./pages/news";
import Table from "./pages/table";
import TeamDetails from "./pages/teamDetails";
function App() {
  return (
    <>
    <MyProvider>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<News/>}/>
      <Route path="/table" element={<Table/>}/>
      <Route path="/team/:teamName" element={<TeamDetails/>} />
    </Routes>
    </MyProvider>
    </>
  );
}

export default App;




