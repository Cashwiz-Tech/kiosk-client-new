import { useState } from "react";
import Buying from "modules/bying/buying";
import "./App.css";
import MainLayout from "./layouts/main-layout/main-layout";
import { Provider } from "react-redux";
import { store } from "store/store";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <MainLayout setShow={setShow}>
          <Buying show={show} setShow={setShow} />
        </MainLayout>
      </div>
    </Provider>
  );
}

export default App;
