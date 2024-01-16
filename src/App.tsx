import React from "react";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./context/authContext";
import Dashboard from "./pages/Dashboard";

function App() {
	const { user } = useAuth();

	return (
		<div className="w-full min-h-screen bg-gray-200">
			{user ? <Dashboard /> : <LoginPage />}
		</div>
	);
}

export default App;
