import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

function Sec_service({ pos, scr, path }) {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const dot = [0, 1, 2];
	const [mobile, setMoblie] = useState(false);
	useEffect(() => {
		if (matchMedia('screen and (max-width: 649px)').matches) {
			setMoblie(true);
		} else {
			setMoblie(false);
		}
	}, [pos]);

	const setOn = (n) => {
		const arti1 = ref.current.querySelectorAll('article');
		const arti2 = ref2.current.querySelectorAll('article');
		arti1.forEach((a) => (a.style.opacity = 0));
		arti2.forEach((a) => (a.style.opacity = 0));
		arti1[n].style.opacity = 1;
		arti2[n].style.opacity = 1;
	};

	return (
		<div>
			<h1>ABOUT CHROME KITCHEN</h1>
			<h2>PRODUCT</h2>
			<div className='inner'>
				<div className='case'>
					<div
						className='box'
						ref={ref}
						style={
							scr >= pos[0] - pos[0] * 0.2 && !mobile
								? { transform: 'translateY(-20%)' }
								: null
						}>
						<article
							className='odd'
							style={
								scr >= pos[0] - pos[0] * 0.5 && mobile ? { left: '0' } : null
							}>
							<img src={`${path}/img/detail0.jpg`} alt='area induction' />
							<h3>DETAILS AND CHROMING</h3>
							<p>
								choose between classic and stainless steel and enamelled steal,
								glass and cooper.
							</p>
						</article>
						<article
							className='odd'
							style={
								scr >= pos[0] - pos[0] * 0.5 && mobile ? { left: '0' } : null
							}>
							<img
								src={`${path}/img/detail3.jpg`}
								alt='small appliances in the room'
							/>
							<h3>MICROLIVING: SPACE-SAVING APPLIANCES</h3>
							<p>For a confortable living, even in limited spaces.</p>
						</article>

						<article
							className='odd'
							style={
								scr >= pos[0] - pos[0] * 0.5 && mobile ? { left: '0' } : null
							}>
							<img src={`${path}/img/detail4.jpg`} alt='stand mixer' />
							<h3>THE ART OF COOKING</h3>
							<p>
								All the necessary instruments to create magic in the kitchen
							</p>
						</article>
					</div>

					<div
						className='box'
						ref={ref2}
						style={
							scr >= pos[0] * 1.8 && !mobile
								? { transform: 'translateY(-20%)' }
								: null
						}>
						<article
							className='even'
							style={
								scr >= pos[0] - pos[0] * 0.2 && mobile
									? { right: '66.5%' } // 가로로 3개의 아티클이 너비 100%이므로. right:0은 제일 오른쪽 끝이다.
									: null
							}>
							<img src={`${path}/img/detail2.jpg`} alt='kitchen' />
							<h3>CONNECTED HOUSEHOLD APPLIANCES</h3>
							<p>The new generation of connected CHROME KITCHEN appliances.</p>
						</article>
						<article
							className='even'
							style={
								scr >= pos[0] - pos[0] * 0.2 && mobile
									? { right: '66.5%' }
									: null
							}>
							<img src={`${path}/img/product3.jpg`} alt='steal kitchen' />
							<h3>AN INCREDIBLE RANGE OF MATERIALS AND COLORS</h3>
							<p>
								Glass, stainless steel, copper and a palette of 13 enamel
								colours: how and why the choice of materials matters.
							</p>
						</article>
						<article
							className='even'
							style={
								scr >= pos[0] - pos[0] * 0.2 && mobile
									? { right: '66.5%' }
									: null
							}>
							<img src={`${path}/img/detail1.jpg`} alt='area induction' />
							<h3>AREA INDUCTION HOB: SAFETY AND FLEXIBILITY</h3>
							<p>
								To cook with practicality and safety, without giving up an
								elegant contemporary design
							</p>
						</article>
					</div>
				</div>
				<div className='wrap2'>
					{dot.map((d, idx) => {
						return (
							<div className='dot' key={idx} onClick={() => setOn(idx)}></div>
						);
					})}
				</div>
				<a href='subpage.html'>
					view more <FontAwesomeIcon icon={faArrowRightLong} />
				</a>
			</div>
		</div>
	);
}

export default Sec_service;
