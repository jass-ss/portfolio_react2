import React, { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubHeader from '../common/SubHeader';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

const path = process.env.PUBLIC_URL;

function Youtube() {
	const [on, setOn] = useState('advertisement');

	const [arr, setArr] = useState([]);
	const [ele, setEle] = useState(null);
	const [ad, setAd] = useState(null);
	const [sps, setSps] = useState([]);
	const [adv, setAdv] = useState([]);

	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const youtube_key = 'AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM';
	const playListId = 'PLgRXT2p63sR2XX3SUYVo57tpYJxmNIhm-';
	const num = 13;
	const youtube_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=${playListId}&maxResults=${num}`;

	useEffect(() => {
		axios
			.get(youtube_url)
			.then((json) => json.data.items)
			.then((data) => setArr(data));

		//setEle(arr[0].snippet.thumbnails.standard.url);
	}, []); // 첫 렌더링때에만 데이터 가져오기.

	console.log(arr);

	useEffect(() => {
		if (arr[0]) {
			setEle(arr[0]);
			setAd(arr[11]);
			setSps(arr.slice(1, 4));
			setAdv(arr.slice(6, 10));
		}
	}, [arr]);
	console.log(adv);

	return (
		<>
			<SubHeader img={`${path}/img/banner00.png`}>
				<h2>YOUTUBE</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>

			<Layout name={'youtube'}>
				<div className='youtube'>
					<div className='cate'>
						<span onClick={() => setOn('advertisement')}>ADVERTISEMENT</span>
						<span onClick={() => setOn('sponsorship')}>SPONSORSHIP</span>
					</div>
					{on == 'advertisement' ? (
						<div className='advertisement'>
							<div className='main'>
								<div className='pic'>
									<img
										src={ad ? ad.snippet.thumbnails.standard.url : null}
										alt=''
									/>
								</div>
								<div className='txt'></div>
							</div>
							{adv.map((a, idx) => {
								const title = a.snippet.title;
								return (
									<React.Fragment key={idx}>
										<article>
											<p>{0 + `${3 + idx}` + "'s"}</p>
											<div className='pic'>
												<img
													src={a.snippet.thumbnails.standard.url}
													alt=''
													onClick={() => {
														setIndex(idx + 6);
														setOpen(true);
													}}
												/>
											</div>
											<p className='title'>
												{title.length > 50
													? title.slice(0, 40) + '...'
													: a.snippet.title}
											</p>
										</article>
									</React.Fragment>
								);
							})}
						</div>
					) : (
						<div className='sponsorship'>
							<article className='main'>
								<div className='pic'>
									<img
										onClick={() => {
											setIndex(0);
											setOpen(true);
										}}
										src={ele ? ele.snippet.thumbnails.standard.url : null}
										alt=''
									/>
								</div>
								<div className='txt'>
									<div className='txt_box'>
										<h1>COOKING TV SHOW</h1>
										<h2>SPONSORSHIP</h2>
										<p>
											we sponsored a TV show with our kitchen appliances. check
											the youtube and our product
										</p>
									</div>
								</div>
							</article>

							<div className='videos'>
								{sps.map((m, idx) => {
									return (
										<div className='pic' key={idx}>
											<img
												src={m.snippet.thumbnails.standard.url}
												onClick={() => {
													setIndex(idx + 1);
													console.log(index);
													setOpen(true);
												}}
											/>
											<p>{ele.snippet.title}</p>
										</div>
									);
								})}
							</div>

							<div className='frame'>
								<span>SNAP SHOT </span>
								<article className='pics'>
									<div className='slide'>
										<img src={`${path}/img/tv1.jpg`} alt='' />
										<img src={`${path}/img/tv2.jpg`} alt='' />
										<img src={`${path}/img/tv3.jpg`} alt='' />
										<img src={`${path}/img/tv4.jpg`} alt='' />
										<img src={`${path}/img/tv5.jpg`} alt='' />
										<img src={`${path}/img/tv6.jpg`} alt='' />
										<img src={`${path}/img/tv7.jpg`} alt='' />
									</div>

									<a href='#' className='stop'>
										STOP
									</a>
									<a href='#' className='play'>
										PLAY
									</a>
								</article>
								<FontAwesomeIcon icon={faAngleRight} className='next' />
								<FontAwesomeIcon icon={faAngleLeft} className='prev' />
							</div>
						</div>
					)}
				</div>
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						src={
							`https://www.youtube.com/embed/` +
							arr[index].snippet.resourceId.videoId
						}
						frameborder='0'></iframe>
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
