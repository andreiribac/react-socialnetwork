import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		<header className={style.header}>
			<img src="https://casinos-landing.s3-eu-west-1.amazonaws.com/_zigzag777/css/img/logo.svg" alt="" />
			<div className={style.loginBlock}>
				{props.isAuth
					? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
					: <NavLink to={'/login'}>Login</NavLink>
				}
				
			</div>
		</header>
	);
}

export default Header;