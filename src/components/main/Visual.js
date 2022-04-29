import React, { useState, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Visual() {
	const ref = useRef(null);
	const show = (e) => {
		ref.current.querySelector('img').style.opacity = 0;
		ref.current.querySelector('video').style.opacity = 1;
		ref.current.querySelector('video').play();
	};
	const pause = (e) => {
		ref.current.querySelector('img').style.opacity = 0.3;
		ref.current.querySelector('video').style.opacity = 0;
		ref.current.querySelector('video').pause();
	};
	return (
		<div className='main_visual'>
			<div className='pic one'>
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
			<div className='pic two'>
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
				ref={ref}
				onMouseEnter={show}
				onMouseLeave={pause}>
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
			<div className='pic four'>
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
