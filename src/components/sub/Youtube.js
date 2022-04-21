import React, { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Popup2 from '../common/Popup2';
import SubHeader from '../common/SubHeader';
import Advertisement from './Advertisement';
import Sponsorship from './Sponsorship';

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
						<Advertisement
							ad={ad}
							adv={adv}
							setOpen={setOpen}
							setIndex={setIndex}
						/>
					) : (
						<Sponsorship
							ele={ele}
							sps={sps}
							setOpen={setOpen}
							setIndex={setIndex}
						/>
					)}
				</div>
			</Layout>

			{open ? (
				<Popup2 setOpen={setOpen}>
					<iframe
						src={
							`https://www.youtube.com/embed/` +
							arr[index].snippet.resourceId.videoId
						}
						frameborder='0'></iframe>
				</Popup2>
			) : null}
		</>
	);
}

export default Youtube;
