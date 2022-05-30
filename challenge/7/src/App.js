// import logo from './logo.svg';
// import './App.css';

import './css/style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home';
import RentCar from './components/pages/cars';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/rent" element={<RentCar />} />
				</Routes>
			</Router>
			{/* <h1>tes</h1> */}
		</div>
	);
}

export default App;
