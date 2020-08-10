import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Minesweeper from './Minesweeper';
import RockPaperScissor from './RockPaperScissor';

const App = () => {
	return (
		<>
			<Route exact path='/'>
				<div className='App'>
					<header className='App-header'>
						<img src={logo} className='App-logo' alt='logo' />
						<p>Hello, welcome to the world of ElysiPi</p>
						<a
							className='App-link'
							href='https://www.youtube.com/watch?v=J2sRoTCJD0k'
							target='_blank'
							rel='noopener noreferrer'
						>
							Beat the heat!
						</a>
						<Link to='/minesweeper'>Play Minesweeper 💣💥🚩</Link>
						<Link to='/rockpaperscissor'>Play Rock-Paper-Scissor 👊✋✌️</Link>
					</header>
				</div>
			</Route>
			<Route path='/rockpaperscissor'>
				<RockPaperScissor />
			</Route>
			<Route path='/minesweeper'>
				<Minesweeper />
			</Route>
		</>
	);
};

export default App;
