import { useState } from "react";
import Buying from "modules/bying/buying";
import "./App.css";
import MainLayout from "./layouts/main-layout/main-layout";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <MainLayout setShow={setShow}>
        <Buying show={show} setShow={setShow} />
      </MainLayout>
    </div>
  );
}

export default App;
