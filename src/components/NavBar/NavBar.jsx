import React from 'react';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav className={style.nav}>
			<ul>
				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to="/profile">Profile</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to="/dialogs">Messages</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to="/news">News</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to="/music">Music</NavLink>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to="/settings">Settings</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default React.memo(NavBar);