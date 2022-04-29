import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Menu from '../common/Menu';

function Header({ type }) {
	const active = { color: '#aaa' };
	const [on, setOn] = useState(false);
	const color = { color: '#fff', position: 'fixed', top: '3vh' };

	return (
		<header className={type}>
			<h1>
				<NavLink exact to='/' style={on ? color : null}>
					CHROME KITCHEN
				</NavLink>
			</h1>
			<ul id='gnb'>
				<li>
					ABOUT
					<ul className='sec'>
						<li>
							<NavLink to='/brand' activeStyle={active}>
								BRAND
							</NavLink>
						</li>
						<li>
							<NavLink to='/product' activeStyle={active}>
								PRODUCT
							</NavLink>
						</li>
						<li>
							<NavLink to='/store' activeStyle={active}>
								STORE
							</NavLink>
						</li>
					</ul>
				</li>
				<li>
					<NavLink to='/gallery' activeStyle={active}>
						GALLERY
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeStyle={active}>
						YOUTUBE
					</NavLink>
				</li>
				<li>
					<NavLink to='/board' activeStyle={active}>
						BOARD
					</NavLink>
				</li>
				<li>
					<NavLink to='/sign_up' activeStyle={active}>
						sign-up
					</NavLink>
				</li>
			</ul>
			<Menu setOn={setOn} on={on ? 'on' : 'off'}></Menu>
			{on ? null : (
				<FontAwesomeIcon
					icon={faBars}
					className='icon'
					onClick={() => {
						on ? setOn(false) : setOn(true);
					}}
				/>
			)}
		</header>
	);
}

export default Header;
