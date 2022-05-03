import React, { useState, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Visual() {
	const ref = useRef(null);

	const [flex, setFlex] = useState(false);

	const show = (n) => {
		const num = ref.current.querySelectorAll('.pic');
		const ref2 = num[n];
		ref2.querySelector('img').style.opacity = 0;
		ref2.querySelector('video').style.opacity = 1;
		ref2.querySelector('video').play();
	};
	const pause = (n) => {
		const num = ref.current.querySelectorAll('.pic');
		const ref2 = num[n];
		ref2.querySelector('img').style.opacity = 0.3;
		ref2.querySelector('video').style.opacity = 0;
		ref2.querySelector('video').pause();
	};
	const more = (n, b) => {
		console.log(b);
		const num = ref.current.querySelectorAll('.pic');
		const ref2 = num[n];
		if (b) {
			num.forEach((n) => (n.style.flex = 0));
			ref2.style.flex = 4;
		} else {
			num.forEach((n) => (n.style.flex = 1));
		}
	};
	return (
		<div className='main_visual' ref={ref}>
			<div
				className='pic one'
				onMouseEnter={() => show(0)}
				onMouseLeave={() => pause(0)}
				onClick={() => {
					{
						flex ? setFlex(false) : setFlex(true);
					}
					more(0, flex ? false : true);
				}}>
				<img src={`${path}/img/store2_Moment.jpg`} alt='' />
				<video src={`${path}/img/store2_Trim2.mp4`} muted loop></video>
				<div className='box'>
					<span>
						<a href='#'>
							B <span>RAND</span>{' '}
						</a>
					</span>
					<span>TECHNOLOGY WITH STYLE</span>
				</div>
			</div>
			<div
				className='pic two'
				onMouseEnter={() => show(1)}
				onMouseLeave={() => pause(1)}
				onClick={() => {
					{
						flex ? setFlex(false) : setFlex(true);
					}
					more(1, flex ? false : true);
				}}>
				<img src={`${path}/img/brandMoment.jpg`} alt='' />
				<video src={`${path}/img/brand.mp4`} muted loop></video>
				<div className='box'>
					<span>
						<a href='#'>
							P<span>RODUCT</span>
						</a>
					</span>
					<span>A QUESTION OF STYLE</span>
				</div>
			</div>
			<div
				className='pic three'
				onMouseEnter={() => show(2)}
				onMouseLeave={() => pause(2)}
				onClick={() => {
					{
						flex ? setFlex(false) : setFlex(true);
					}
					more(2, flex ? false : true);
				}}>
				<img src={`${path}/img/product3_Moment.jpg`} alt='' />
				<video src={`${path}/img/product3.mp4`} muted loop></video>
				<div className='box'>
					<span>
						<a href='#'>
							S<span>TORE</span>
						</a>
					</span>
					<span>DISCOVER YOUR STYLE</span>
				</div>
			</div>
			<div
				className='pic four'
				onMouseEnter={() => show(3)}
				onMouseLeave={() => pause(3)}
				onClick={() => {
					{
						flex ? setFlex(false) : setFlex(true);
					}
					more(3, flex ? false : true);
				}}>
				<img src={`${path}/img/brand2_Moment.jpg`} alt='' />
				<video src={`${path}/img/brand2.mp4`} muted loop></video>
				<div className='box'>
					<span>
						<a href='#'>
							Y<span>OUTUBE</span>
						</a>
					</span>
					<span>BEYOUND THE STYLE</span>
				</div>
			</div>
		</div>
	);
}

export default Visual;
