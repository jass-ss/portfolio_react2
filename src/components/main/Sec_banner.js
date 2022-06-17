import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Sec_banner({ pos, path, scr }) {
	const start = pos[1] * 0.5;
	const end = pos[1];
	const len = end - start;
	const move = scr - start;
	const ratio = (move / len) * 100;

	//console.log('scr', scr);

	return (
		<>
			<div
				className='aniLogo'
				style={
					scr > pos[1] * 0.4 && scr < pos[1] * 0.9
						? { marginLeft: `${80 - ratio}%` }
						: { marginLeft: '0%' }
				}>
				<p> Lorem ipsum dolor, sit amet consectetur elit</p>
			</div>
			<div className='inner'>
				<article>
					<img src={`${path}/img/chrome2.jpg`} alt='opened pot' />
					<h1>DISCOVER YOUR STYLE.</h1>
					<p>
						A complete offering for high technology collections, articulated in
						a rich palette of colours
					</p>
					<a href='#'>
						view more <FontAwesomeIcon icon={faArrowRightLong} />
					</a>
				</article>
			</div>
		</>
	);
}

export default Sec_banner;
