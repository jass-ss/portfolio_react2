import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleLeft,
	faAngleRight,
	faCirclePlay,
} from '@fortawesome/free-solid-svg-icons';
import { Anim } from '../../class/anime';

const path = process.env.PUBLIC_URL;

function Sponsorship({ sps, setOpen, setIndex }) {
	const slide = useRef(null);
	const [idx, setIdx] = useState(false);
	const [vidIndex, setVidIndex] = useState(0);
	const [imgs, setImgs] = useState();
	const mobile = useRef(false);
	const size = useRef(0);

	let vw = size.current;
	//let vw = 0;
	console.log('s', vw);
	let click = true;
	let img;

	function getVw() {
		const imgs = slide.current.querySelectorAll('img');
		if (matchMedia('screen and (max-width: 549px)').matches) {
			slide.current.style.marginLeft = 0;
			imgs.forEach((e) => e.classList.remove('on'));
			imgs[0].classList.add('on');
			setIdx(0);
			mobile.current = true;
		} else {
			mobile.current = false;
			slide.current.style.marginLeft = 'auto';
		}
	}

	const index = (n) => {
		let num;
		console.log(idx);
		if (idx - n > 0) {
			num = 1;
		} else if (idx - n < 0) {
			num = -1;
		} else return;

		console.log(n, num);

		new Anim(imgs[idx], {
			prop: 'left',
			value: `${100 * num}%`,
			duration: 500,
			callback: () => {
				imgs[idx].style.left = 0;
				imgs[idx].classList.remove('on');
			},
		});

		imgs[n].classList.add('on');
		imgs[n].style.left = num > 0 ? '-100%' : '200%';
		new Anim(imgs[n], {
			prop: 'left',
			value: 0,
			duration: 500,
			callback: () => {},
		});
	};

	const prev = () => {
		if (matchMedia('screen and (max-width: 549px)').matches) {
			if (!click) return;
			click = false;
			new Anim(imgs[idx], {
				prop: 'margin-left',
				value: '100%',
				duration: 400,
				callback: () => {
					imgs[idx].classList.remove('on');
					imgs[idx].style.marginLeft = 0;
				},
			});
			if (idx == 0) {
				imgs[6].classList.add('on');
				imgs[6].style.left = '-100%';
				new Anim(imgs[6], {
					prop: 'left',
					value: 0,
					duration: 400,
					callback: () => {
						click = true;
						setIdx(6);
					},
				});
			} else {
				imgs[idx - 1].classList.add('on');
				imgs[idx - 1].style.left = '-100%';
				new Anim(imgs[idx - 1], {
					prop: 'left',
					value: 0,
					duration: 400,
					callback: () => {
						click = true;
						setIdx(idx - 1);
					},
				});
			}
		} else {
			console.log(click);
			vw = window.innerWidth / 100;
			vw >= 11.8 ? (img = (0.7 * vw * 0.85) / 3) : (img = (0.85 * vw) / 3);

			//  width 549px를 넘으면
			if (slide.current.style.marginLeft === 'auto') {
				slide.current.append(slide.current.firstElementChild);
				slide.current.style.marginLeft = `${-img * 100}px`;
			}

			if (!click) return;
			click = false;
			console.log(img);
			new Anim(slide.current, {
				prop: 'margin-left',
				value: -img * 200,
				duration: 400,
				callback: () => {
					click = true;
					slide.current.style.marginLeft = `${-img * 100}px`;
					slide.current.append(slide.current.firstElementChild);
				},
			});
		}
	};

	const next = () => {
		if (matchMedia('screen and (max-width: 549px)').matches) {
			if (!click) return;
			click = false;
			new Anim(imgs[idx], {
				prop: 'margin-left',
				value: '-100%',
				duration: 400,
				callback: () => {
					imgs[idx].classList.remove('on');
					imgs[idx].style.marginLeft = 0;
				},
			});
			if (idx == 6) {
				imgs[0].classList.add('on');
				imgs[0].style.left = '200%';
				new Anim(imgs[0], {
					prop: 'left',
					value: 0,
					duration: 400,
					callback: () => {
						click = true;
						setIdx(0);
					},
				});
			} else {
				imgs[idx + 1].classList.add('on');
				imgs[idx + 1].style.left = '200%';
				new Anim(imgs[idx + 1], {
					prop: 'left',
					value: 0,
					duration: 400,
					callback: () => {
						click = true;
						setIdx(idx + 1);
					},
				});
			}
		} else {
			console.log(click);
			vw = window.innerWidth / 100;
			vw >= 11.8 ? (img = (0.7 * vw * 0.85) / 3) : (img = (0.85 * vw) / 3);

			//  width 549px를 넘으면
			if (slide.current.style.marginLeft === 'auto') {
				slide.current.prepend(slide.current.lastElementChild);
				slide.current.style.marginLeft = `${-img * 100}px`;
			}

			if (!click) return;
			click = false;
			new Anim(slide.current, {
				prop: 'margin-left',
				value: 0,
				duration: 500,
				callback: () => {
					click = true;
					slide.current.prepend(slide.current.lastElementChild);
					slide.current.style.marginLeft = `${-img * 100}px`;
				},
			});
		}
	};

	useEffect(() => {
		if (slide) {
			console.log(slide.current);
			setImgs(slide.current.querySelectorAll('img'));
		}
	}, [slide]);

	useEffect(() => {
		//console.log('set');

		getVw();
		window.addEventListener('resize', getVw);
		return () => {
			//console.log('clear');
			window.removeEventListener('resize', getVw);
		};
	}, []);

	return (
		<div className='sponsorship'>
			<h1>COOKING TV SHOW</h1>
			<p>
				we sponsored a TV show with our kitchen appliances. check the youtube
				and our product
			</p>
			<div className='box'>
				<div className='main'>
					<div className='pic'>
						<div className='wrapper'>
							<img
								src={
									sps[0]
										? `${sps[vidIndex].snippet.thumbnails.standard.url}`
										: null
								}
								alt=''
								onClick={() => setOpen(true)}
							/>
							<FontAwesomeIcon
								icon={faCirclePlay}
								className='circlePlay'
								onClick={() => setOpen(true)}
							/>
						</div>
					</div>
					<div className='info'>
						<div className='videos'>
							{sps.map((m, idx) => {
								return (
									<div className='pics' key={idx}>
										<p>{'0' + idx}</p>
										<div className='pic'>
											<img
												src={m.snippet.thumbnails.standard.url}
												onClick={() => {
													setIndex(idx);
													setVidIndex(idx);
												}}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<p>{sps[0] ? `${sps[vidIndex].snippet.title}` : null} </p>
			</div>

			<div className='frame'>
				<span>SNAP SHOT </span>
				<article className='pics'>
					<div className='slide' ref={slide}>
						<img src={`${path}/img/tv1.jpg`} alt='' />
						<img src={`${path}/img/tv2.jpg`} alt='' />
						<img src={`${path}/img/tv3.jpg`} alt='' />
						<img src={`${path}/img/tv4.jpg`} alt='' />
						<img src={`${path}/img/tv5.jpg`} alt='' />
						<img src={`${path}/img/tv6.jpg`} alt='' />
						<img src={`${path}/img/tv7.jpg`} alt='' />
					</div>
					{mobile ? (
						<ul className='index'>
							<li
								onClick={() => {
									setIdx(0);
									index(0);
								}}></li>
							<li
								onClick={() => {
									setIdx(1);
									index(1);
								}}></li>
							<li
								onClick={() => {
									setIdx(2);
									index(2);
								}}></li>
							<li
								onClick={() => {
									setIdx(3);
									index(3);
								}}></li>
							<li
								onClick={() => {
									setIdx(4);
									index(4);
								}}></li>
							<li
								onClick={() => {
									setIdx(5);
									index(5);
								}}></li>
							<li
								onClick={() => {
									setIdx(6);
									index(6);
								}}></li>
						</ul>
					) : null}

					<a href='#' className='stop'>
						STOP
					</a>
					<a href='#' className='play'>
						PLAY
					</a>
				</article>
				<FontAwesomeIcon icon={faAngleRight} className='next' onClick={next} />
				<FontAwesomeIcon icon={faAngleLeft} className='prev' onClick={prev} />
			</div>
		</div>
	);
}

export default Sponsorship;
