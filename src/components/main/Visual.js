import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Anim } from '../../class/anime';

const path = process.env.PUBLIC_URL;

function Visual() {
	const ref = useRef(null);
	const index = useRef(0);
	let enable = true;

	const [flex, setFlex] = useState(false);
	const [mobile, setMoblie] = useState(false);

	useEffect(() => {
		window.addEventListener('resize', getVw);
		return () => window.removeEventListener('resize', getVw);
	}, []);

	function getVw() {
		if (matchMedia('screen and (max-width: 649px)').matches) {
			setMoblie(true);
		} else {
			setMoblie(false);
		}
	}

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
		if (!flex) {
			ref2.querySelector('img').style.opacity = 0.3;
			ref2.querySelector('video').style.opacity = 0;
			ref2.querySelector('video').pause();
		}
	};
	const more = (n, b) => {
		console.log(b);
		const num = ref.current.querySelectorAll('.pic');
		const ref2 = num[n];
		if (b) {
			num.forEach((n) => (n.style.flex = 0));
			ref2.style.flex = 4;
			ref2.querySelector('.box span').style.color = '#fff';
			ref2.querySelector('.box span >span').style.color = '#fff';
		} else {
			num.forEach((n) => (n.style.flex = 1));
			ref2.querySelector('.box span').style.color = '#111';
			ref2.querySelector('.box span >span').style.color = '#111';
		}
	};

	let play = false;
	const vidPlay = (n) => {
		const num = ref.current.querySelectorAll('.pic');
		const ref2 = num[n];
		if (!play) {
			ref2.querySelector('img').style.opacity = 0;
			ref2.querySelector('video').style.opacity = 1;
			ref2.querySelector('.box span').style.color = '#fff';
			ref2.querySelector('.box span >span').style.color = '#fff';
			ref2.querySelector('video').play();
			play = true;
		} else {
			ref2.querySelector('video').pause();
			ref2.querySelector('img').style.opacity = 0.5;
			ref2.querySelector('video').style.opacity = 0;
			ref2.querySelector('.box span').style.color = '#111';
			ref2.querySelector('.box span >span').style.color = '#111';
			play = false;
		}
	};

	const moving = (n) => {
		if (enable) {
			enable = false;
			const ref2 = ref.current.querySelectorAll('.pic');
			ref.current.style.marginLeft = '-100%'; //위치 초기화. 이 코드가 없으면 위치를 이상하게 설정된채로 Anim이 실행된다.
			if (index.current - n > 0) {
				ref2[n].style.left = '0%';
				ref2[n].style.opacity = '1';
				new Anim(ref.current, {
					prop: 'margin-left',
					value: '0%',
					duration: 500,
					callback: () => {
						ref.current.style.marginLeft = '-100%';
						ref2.forEach((_, idx) => {
							ref2[idx].style.left = '33.33%';
							ref2[idx].style.zIndex = 0;
							ref2[idx].style.opacity = 0;
						});
						ref2[n].style.opacity = '1';
						ref2[n].style.zIndex = '5';
						enable = true;
						index.current = n;
					},
				});
			} else if (index.current - n < 0) {
				ref2[n].style.left = '66.66%';
				ref2[n].style.opacity = '1';
				new Anim(ref.current, {
					prop: 'margin-left',
					value: '-200%',
					duration: 500,
					callback: () => {
						ref.current.style.marginLeft = '-100%';
						ref2.forEach((_, idx) => {
							ref2[idx].style.left = '33.33%';
							ref2[idx].style.zIndex = 0;
							ref2[idx].style.opacity = 0;
						});
						ref2[n].style.opacity = '1';
						ref2[n].style.zIndex = '5';
						enable = true;
						index.current = n;
					},
				});
			} else enable = true;
		} else {
			return;
		}
	};

	let start;
	let end;
	const touchSt = (e) => {
		start = e.changedTouches[0].clientX;
	};
	const touchEnd = (e) => {
		end = e.changedTouches[0].clientX;
		const move = start - end;
		if (move > 50) {
			let newIndex = index.current + 1;
			console.log(newIndex);
			moving(newIndex == 4 ? 3 : newIndex);
		} else if (move < -50) {
			let newIndex = index.current - 1;
			console.log(newIndex);
			moving(newIndex == -1 ? 0 : newIndex);
		}
	};

	return (
		<div
			className='main_visual'
			onTouchStart={(e) => touchSt(e)}
			onTouchEnd={(e) => touchEnd(e)}>
			<div className='wrapper' ref={ref}>
				<div className='pic one'>
					<img src={`${path}/img/store2_Moment.jpg`} alt='' />
					<video src={`${path}/img/store2_Trim2.mp4`} muted loop></video>
					<div className='box'>
						<span
							onMouseEnter={!mobile ? () => show(0) : null}
							onMouseLeave={!mobile ? () => pause(0) : null}
							onClick={
								!mobile
									? () => {
											{
												flex ? setFlex(false) : setFlex(true);
											}
											more(0, flex ? false : true);
									  }
									: null
							}>
							<span>T</span>ECHNOLOGY
							<br /> WITH STYLE
						</span>
						<FontAwesomeIcon
							icon={faCirclePlay}
							className='circlePlay'
							onClick={() => vidPlay(0)}
						/>
					</div>
				</div>
				<div className='pic two'>
					<img src={`${path}/img/brandMoment.jpg`} alt='' />
					<video src={`${path}/img/brand.mp4`} muted loop></video>
					<div className='box'>
						<span
							onMouseEnter={!mobile ? () => show(1) : null}
							onMouseLeave={!mobile ? () => pause(1) : null}
							onClick={
								!mobile
									? () => {
											{
												flex ? setFlex(false) : setFlex(true);
											}
											more(1, flex ? false : true);
									  }
									: null
							}>
							<span>A</span> QUESTION
							<br /> OF STYLE
						</span>
						<FontAwesomeIcon
							icon={faCirclePlay}
							className='circlePlay'
							onClick={() => vidPlay(1)}
						/>
					</div>
				</div>
				<div className='pic three'>
					<img src={`${path}/img/product3_Moment.jpg`} alt='' />
					<video src={`${path}/img/product3.mp4`} muted loop></video>
					<div className='box'>
						<span
							onMouseEnter={!mobile ? () => show(2) : null}
							onMouseLeave={!mobile ? () => pause(2) : null}
							onClick={
								!mobile
									? () => {
											{
												flex ? setFlex(false) : setFlex(true);
											}
											more(2, flex ? false : true);
									  }
									: null
							}>
							<span>D</span>ISCOVER
							<br /> YOUR STYLE
						</span>
						<FontAwesomeIcon
							icon={faCirclePlay}
							className='circlePlay'
							onClick={() => vidPlay(2)}
						/>
					</div>
				</div>
				<div className='pic four'>
					<img src={`${path}/img/brand2_Moment.jpg`} alt='' />
					<video src={`${path}/img/brand2.mp4`} muted loop></video>
					<div className='box'>
						<span
							onMouseEnter={!mobile ? () => show(3) : null}
							onMouseLeave={!mobile ? () => pause(3) : null}
							onClick={
								!mobile
									? () => {
											{
												flex ? setFlex(false) : setFlex(true);
											}
											more(3, flex ? false : true);
									  }
									: null
							}>
							<span>B</span>EYOUND
							<br /> THE STYLE
						</span>
						<FontAwesomeIcon
							icon={faCirclePlay}
							className='circlePlay'
							onClick={() => vidPlay(3)}
						/>
					</div>
				</div>
			</div>

			<div className='index'>
				<button onClick={() => moving(0)}></button>
				<button onClick={() => moving(1)}></button>
				<button onClick={() => moving(2)}></button>
				<button onClick={() => moving(3)}></button>
			</div>
		</div>
	);
}

export default Visual;
