import { Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/"><h2 className="text-white text-2x1 font-bold">C2C Shopping App</h2></Link>
        </div>
      </nav>

      <div className="container mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;