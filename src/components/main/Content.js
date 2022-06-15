import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import anime from '../../class/anime';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import Sec_brand from './Sec_brand';
import Sec_service from './Sec_service';
import Sec_banner from './Sec_banner';

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
					<Sec_service pos={pos} path={path} scr={scr}></Sec_service>
				</section>

				<section id='banner'>
					<Sec_banner pos={pos} path={path} scr={scr}></Sec_banner>
				</section>

				<section id='brand'>
					<Sec_brand pos={pos} path={path} scr={scr}></Sec_brand>
				</section>

				<section id='banner2'>
					<div className='inner'>
						<article>
							<img
								src={`${path}/img/chrome_banner2.jpg`}
								alt=''
								style={
									scr >= pos[2] + (pos[3] - pos[2]) * 0.5
										? { width: '100%' }
										: null
								}
							/>
							<h1>PROJECTS OF ART</h1>
							<p>
								the worlds of high design and fashion meet and merge with chrome
								kitchen to create unique domestic appliances
							</p>
							<a
								href='#'
								style={
									scr >= pos[3]
										? {
												background: '#666666d1',
										  }
										: null
								}>
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
								style={scr >= pos[3] ? { opacity: '1' } : null}
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
							<div className='wrapper1'>
								<h1>LATEST NEWS</h1>
							</div>
							<div className='wrapper2'>
								{news.map((m, idx) => {
									return (
										<div className='text' key={idx}>
											<div className='wrap'>
												<h2
													onClick={() => {
														open ? setOpen(false) : setOpen(true);
													}}>
													{m.title}
												</h2>
												{/*open ? <p>{m.text}</p> : null*/}
											</div>
										</div>
									);
								})}
							</div>
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
			<Popup ref={pop} setOpen={setOpen}>
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
