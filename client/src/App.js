import "./styles/app.scss"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
      <BrowserRouter>
          <div className="app">
              <Routes>
                  <Route path='/:id' element={<Home/>}/>
                  <Route
                      path="*"
                      element={<Navigate to={`f${(+new Date).toString(16)}`} replace />}
                  />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
