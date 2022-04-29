import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu({ setOn, on }) {
	const active = { color: '#aaa' };
	return (
		<div className={` menu ${on}`}>
			<div id='mob'>
				<ul>
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
							HELP
						</NavLink>
					</li>
					<li>
						<NavLink to='/sign_up' activeStyle={active}>
							sign-up
						</NavLink>
					</li>
				</ul>
				<span onClick={() => setOn(false)}>X</span>
			</div>
		</div>
	);
}

export default Menu;
