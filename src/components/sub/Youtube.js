import React, { useState, useEffect } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Popup2 from '../common/Popup2';
import SubHeader from '../common/SubHeader';
import Advertisement from './Advertisement';
import Sponsorship from './Sponsorship';
import { useSelector } from 'react-redux';

const path = process.env.PUBLIC_URL;

function Youtube() {
	const vid = useSelector((state) => state.youtubeReducer.youtube);
	console.log(vid);
	const [on, setOn] = useState('advertisement');

	const [ele, setEle] = useState(null);
	const [ad, setAd] = useState(null);
	const [sps, setSps] = useState([]);
	const [adv, setAdv] = useState([]);

	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		console.log(vid);
		if (vid) {
			setEle(vid[0]);
			setAd(vid[11]);
			setSps(vid.slice(1, 4));
			setAdv(vid.slice(6, 10));
		}
	}, [vid]);

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
							vid[index].snippet.resourceId.videoId
						}
						frameborder='0'></iframe>
				</Popup2>
			) : null}
		</>
	);
}

export default Youtube;
