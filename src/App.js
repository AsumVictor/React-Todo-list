import { BrowserRouter, Route } from 'react-router-dom';
import {
  TodoPage
} from './Routes';

function App() {
  return (
    <BrowserRouter>
          <Route path="/" element={<TodoPage />} />
    </BrowserRouter>
  );
}

export default App;
