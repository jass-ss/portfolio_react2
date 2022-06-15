import React from 'react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Sec_brand({ pos, path, scr }) {
	const img = useRef(null);

	let press = false;
	let s;
	let e;
	let move;
	let moving;
	let n = 0;

	return (
		<div className='inner'>
			<h1>BEYOND THE KITCHEN</h1>
			<h2>BRAND STORY</h2>
			<div className='case'>
				<div
					className='wrap'
					draggable='true'
					ref={img}
					onTouchStart={(e) => {
						//e.preventDefault();
						console.log(n);
						press = true;
						//alert(e.changedTouches[0].clientX);
						s = e.changedTouches[0].clientX;
						console.log('s', s);
					}}
					onTouchEnd={(e) => {
						press = false;
						e = e.changedTouches[0].clientX;
						console.log('e', e);
						if (s - e > 0) {
							n--;
							if (n < -2) n = -2;
							img.current.style.marginLeft = `${n * 67}%`;
						} else if (s - e < 0) {
							n++;
							if (n > 0) n = 0;
							img.current.style.marginLeft = `${n * 67}%`;
						}
					}}
					onTouchMove={(e) => {
						if (press) {
							//	alert('?');
							const ratio = 350 / 100;
							move = e.changedTouches[0].clientX;
							//console.log(move)
							moving = move - s;
							// console.log('m',moving)
							img.current.style.marginLeft = `${n * 67 + moving / ratio}%`;
						}
					}}>
					<article draggable='true'>
						<img src={`${path}/img/brand3.jpg`} alt='eco-company' />
						<h3>ECOFRIENDLY PRODUCTS</h3>
						<p>
							Special focus is placed on obtaining the highest energy efficiency
							class rating in order to help the environment and improve quality
							of life.
						</p>
					</article>

					<article draggable='true'>
						<img src={`${path}/img/brand4.jpg`} alt="a man who's cooking" />
						<h3>HOME OFFICE: MAKE YOUR WORK SMART</h3>
						<p>
							With our domestic appliances, home is the perfect working space
							with a stylish atmosphere
						</p>
					</article>

					<article draggable='true'>
						<img src={`${path}/img/brand2.jpg`} alt='cleaning system' />
						<h3>SENSE.Klean</h3>
						<p>
							SENSE.Klean™ technology estimates the degree of dirt and suggests
							the best automatic cleaning mode according to actual use.
						</p>
					</article>

					<div
						className='linkWrapper'
						style={scr >= pos[2] ? { width: '40%' } : null}>
						<a href='#'>
							view more <FontAwesomeIcon icon={faArrowRightLong} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sec_brand;
