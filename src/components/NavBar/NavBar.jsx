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
				<li className={style.item}>
					{/* <NavLink className={style.link} activeClassName={style.active} to="/friends">Friends</NavLink> */}
					<div>
						<img src="https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png" alt="" />
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default React.memo(NavBar);