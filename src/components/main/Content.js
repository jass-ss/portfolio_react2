import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import anime from '../../class/anime';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';

const path = process.env.PUBLIC_URL;

function Content({ scr, pos }) {
	const pop = useRef(null);
	const vid = useSelector((state) => state.youtubeReducer.youtube);
	const posts = JSON.parse(localStorage.getItem('posts'));
	const base = -900;
	console.log(pos[1] + base);

	const [news, setNews] = useState([]);
	const [on, setOn] = useState(false);
	const [videos, setVideos] = useState([]);
	const [index, setIndex] = useState(0);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (vid) {
			const data = vid.slice(1, 4);
			setVideos(data);
		}
		if (posts) {
			const prevPosts = posts.slice(0, 3);
			setNews(prevPosts);
		}
	}, [vid]);

	console.log(videos);
	console.log(scr);
	useEffect(() => {
		console.log('시작');
		if (scr >= pos[1]) {
			setOn(true);
			console.log('111111111111');
		}
	}, []);

	return (
		<main className='content main'>
			<div className='inner'>
				<section id='service'>
					<h1>ABOUT CHROME KITCHEN</h1>
					<h2>PRODUCT</h2>
					<div className='inner'>
						<div className='wrap'>
							<div
								className='box'
								style={
									scr >= pos[1] + base
										? { transform: 'translateY(-100px)' }
										: null
								}>
								<article className='odd'>
									<img src={`${path}/img/detail0.jpg`} alt='area induction' />
									<h3>DETAILS AND CHROMING</h3>
									<p>
										choose between classic and stainless steel and enamelled
										steal, shaped glass and even cooper.
									</p>
								</article>
								<article className='odd'>
									<img
										src={`${path}/img/detail3.jpg`}
										alt='small appliances in the room'
									/>
									<h3>MICROLIVING: SPACE-SAVING APPLIANCES</h3>
									<p>For a confortable living, even in limited spaces.</p>
								</article>

								<article className='odd'>
									<img src={`${path}/img/detail4.jpg`} alt='stand mixer' />
									<h3>THE ART OF COOKING</h3>
									<p>
										All the necessary instruments to create magic in the kitchen
									</p>
								</article>
							</div>

							<div
								className='box'
								style={
									scr >= pos[1] + (base + 300)
										? { transform: 'translateY(-100px)' }
										: null
								}>
								<article className='even'>
									<img src={`${path}/img/detail2.jpg`} alt='kitchen' />
									<h3>CONNECTED HOUSEHOLD APPLIANCES</h3>
									<p>
										The new generation of connected CHROME KITCHEN appliances.
									</p>
								</article>
								<article className='even'>
									<img src={`${path}/img/product3.jpg`} alt='steal kitchen' />
									<h3>AN INCREDIBLE RANGE OF MATERIALS AND COLORS</h3>
									<p>
										Glass, stainless steel, copper and a palette of 13 enamel
										colours: how and why the choice of materials matters.
									</p>
								</article>
								<article className='even'>
									<img src={`${path}/img/detail1.jpg`} alt='area induction' />
									<h3>AREA INDUCTION HOB: SAFETY AND FLEXIBILITY</h3>
									<p>
										To cook with practicality and safety, without giving up an
										elegant contemporary design
									</p>
								</article>
							</div>

							<a href='subpage.html'>
								view more <FontAwesomeIcon icon={faArrowRightLong} />
							</a>
						</div>
					</div>
				</section>

				<section id='banner'>
					<div
						className='aniLogo'
						style={
							scr <= pos[3] && scr >= pos[2] + base
								? { width: `${(scr - 2000) * 0.1}%` }
								: null
						}>
						<p> Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
					</div>
					<div className='inner'>
						<article>
							<img src={`${path}/img/chrome2.jpg`} alt='opened pot' />
							<h1>DISCOVER YOUR STYLE.</h1>
							<p>
								A complete offering for high technology collections, articulated
								in a rich palette of colours
							</p>
							<a href='#'>
								view more <FontAwesomeIcon icon={faArrowRightLong} />
							</a>
						</article>
					</div>
				</section>

				<section id='brand'>
					<div className='inner'>
						<h1>BEYOND THE KITCHEN</h1>
						<h2>BRAND STORY</h2>
						<div className='wrap'>
							<article>
								<img src={`${path}/img/brand3.jpg`} alt='eco-company' />
								<h3>ECOFRIENDLY PRODUCTS</h3>
								<p>
									Special focus is placed on obtaining the highest energy
									efficiency class rating in order to help the environment and
									improve quality of life.
								</p>
							</article>

							<article>
								<img src={`${path}/img/brand4.jpg`} alt="a man who's cooking" />
								<h3>HOME OFFICE: MAKE YOUR WORK SMART</h3>
								<p>
									With our domestic appliances, home is the perfect working
									space with a stylish atmosphere
								</p>
							</article>

							<article>
								<img src={`${path}/img/brand2.jpg`} alt='cleaning system' />
								<h3>SENSE.Klean</h3>
								<p>
									SENSE.Klean™ technology estimates the degree of dirt and
									suggests the best automatic cleaning mode according to actual
									use.
								</p>
							</article>

							<a href='#'>
								view more <FontAwesomeIcon icon={faArrowRightLong} />
							</a>
						</div>
					</div>
				</section>

				<section id='banner2'>
					<div className='inner'>
						<article>
							<img src={`${path}/img/chrome_banner2.jpg`} alt='' />
							<h1>PROJECTS OF ART</h1>
							<p>
								the worlds of high design and fashion meet and merge with chrome
								kitchen to create unique domestic appliances
							</p>
							<a href='#'>
								view more <FontAwesomeIcon icon={faArrowRightLong} />
							</a>
						</article>
					</div>
				</section>

				<section id='product'>
					<div className='inner'>
						<div className='wrap'>
							<h1>COOKING WITH CHROME KITCHEN</h1>
							<h2>INSPIRATION</h2>
							<img
								src={`${path}/img/becca-tapert-RjmGzTg4_mw-unsplash.jpg`}
								alt=''
							/>
							<p>
								Cook, heat, conserve: a tour of the kitchen between technology
								and organisation
							</p>
							<a href='#'>
								view more <FontAwesomeIcon icon={faArrowRightLong} />
							</a>
						</div>
					</div>
				</section>

				<section id='fetch'>
					<div className='inner'>
						<div className='prevNews'>
							<h1>LATEST NEWS</h1>
							{news.map((m, idx) => {
								return (
									<div className='text' key={idx}>
										<h2
											onClick={() => {
												open ? setOpen(false) : setOpen(true);
											}}>
											{m.title}
										</h2>
										{/*open ? <p>{m.text}</p> : null*/}
									</div>
								);
							})}
						</div>
						<div className='prevVids'>
							<h1>YOUTUBE CLIP</h1>
							{videos.map((v, idx) => {
								return (
									<article key={idx}>
										<div className='wrap'>
											<img
												src={v.snippet.thumbnails.standard.url}
												alt=''
												onClick={() => {
													setIndex(idx);
													pop.current.open();
												}}
											/>
										</div>
									</article>
								);
							})}
						</div>
					</div>
				</section>
			</div>
			<Popup ref={pop}>
				{videos[0] && (
					<>
						<iframe
							src={
								`https://www.youtube.com/embed/` +
								videos[index].snippet.resourceId.videoId
							}
							frameBorder='0'></iframe>
						<span onClick={() => pop.current.close()}>close</span>
					</>
				)}
			</Popup>
		</main>
	);
}

export default Content;