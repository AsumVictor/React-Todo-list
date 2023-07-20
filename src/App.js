import { BrowserRouter,Routes, Route } from "react-router-dom";
import { TodoPage } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
