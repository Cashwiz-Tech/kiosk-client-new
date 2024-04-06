import Buying from "modules/bying/buying"
import "./App.css"
import MainLayout from "./layouts/main-layout/main-layout"

function App() {
	return (
		<div className="App">
			<MainLayout>
				<Buying />
			</MainLayout>
		</div>
	)
}

export default App
