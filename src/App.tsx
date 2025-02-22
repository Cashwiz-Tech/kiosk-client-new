import { useState } from "react";
import Buying from "modules/bying/buying";
import "./App.css";
import MainLayout from "./layouts/main-layout/main-layout";
import { Provider } from "react-redux";
import { store } from "store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthWatcher from "components/AuthWatcher";

function App() {
  const [show, setShow] = useState(false);
  function setShow_func() {
    setShow(true);
  }
  return (
    <Provider store={store}>
      <div className="App">
        <MainLayout setShow={setShow_func}>
          <AuthWatcher />
          <Router>
            <Routes>
              <Route
                path="/:partnerId"
                element={<Buying show={show} setShow={setShow} />}
              />
            </Routes>
          </Router>
        </MainLayout>
      </div>
    </Provider>
  );
}

export default App;
