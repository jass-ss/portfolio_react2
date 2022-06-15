import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ProdSlide({ path }) {
	const ref = useRef(null);
	let press = false;
	let st;
	let end;
	let nowPic = 0;
	const winWidth = window.innerWidth;

	const slideStart = (e) => {
		press = true;
		st = e.changedTouches[0].clientX;
	};
	const slideMove = (e) => {
		if (press) {
			let now = e.changedTouches[0].clientX;
			let moving = st - now;
			const ratio = (moving / (winWidth / 100)) * 1.5;
			if (moving > 0) {
				ref.current.style.marginLeft = `${nowPic * -100 - ratio}%`;
			} else if (moving < 0) {
				ref.current.style.marginLeft = `${nowPic * -100 - ratio}%`;
			}
		}
	};
	const slideEnd = (e) => {
		press = false;
		end = e.changedTouches[0].clientX;
		if (st - end > 0) {
			nowPic++;
			console.log(nowPic);
			if (nowPic > 3) nowPic = 3;
		} else if (st - end < 0) {
			nowPic--;
			if (nowPic < 0) nowPic = 0;
			//console.log(nowPic);
		}
		ref.current.style.marginLeft = `${nowPic * -100}%`;
	};

	return (
		<div
			className='slide'
			ref={ref}
			onTouchStart={(e) => slideStart(e)}
			onTouchMove={(e) => slideMove(e)}
			onTouchEnd={(e) => slideEnd(e)}>
			<div className='two1'>
				<div className='inner'>
					<div className='wrapper'>
						<article>
							<img src={`${path}/img/product6.png`} alt='silver stove' />
							<h2>A QUESTION OF STYLE</h2>
							<p>
								Every collection has a soul. Which recounts a very personal
								experience - that of the person who lives with it.
							</p>
						</article>

						<article>
							<img src={`${path}/img/product4.jpg`} alt='' />
							<h2>CLEAN LINES AND RIGOROUS LOGIC</h2>
							<p>
								translate into the pleasure of living and working in a
								well-organised, functional and yet not austere kitchen. you can
								make the most of your space
							</p>
						</article>
					</div>
				</div>
			</div>

			<div className='two2'>
				<div className='inner'>
					<div className='wrapper'>
						<article>
							<img src={`${path}/img/product2.jpg`} alt='hand mixer' />
							<h2>MANAGING EACH PREPARATION WITH SIMPLICITY</h2>
							<p>
								In these mechanical and laborious procedures, to achieve
								excellence, it is better to help our hands
							</p>
						</article>

						<article>
							<img src={`${path}/img/product5.jpg`} alt='shining stove' />
							<h2>GLOSSY FINISH</h2>
							<p>
								perfect to catalyze as much light as possible in the kitchen
							</p>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProdSlide;
