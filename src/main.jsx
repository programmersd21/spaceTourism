import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './components/Home';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Technology from './components/Technology';
import PlayGround from './components/PlayGround.jsx';
import Quiz from './components/Quiz.jsx';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/crew',
		element: <Crew />,
	},

	{
		path: '/destination',
		element: <Destination />,
	},

	{
		path: '/tech',
		element: <Technology />,
	},
	{
		path: '/playground',
		element: <PlayGround />,
	},
	{
		path: '/quiz',
		element: <Quiz />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider
			router={router}
			fallbackElement={<Error />}
		/>
	</React.StrictMode>
);
