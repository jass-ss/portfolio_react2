import React, { useState, useEffect, useRef } from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';
import SubHeader from '../common/SubHeader';
import Advertisement from './Advertisement';
import Sponsorship from './Sponsorship';
import { useSelector } from 'react-redux';

const path = process.env.PUBLIC_URL;

function Youtube() {
	const vid = useSelector((state) => state.youtubeReducer.youtube);
	console.log(vid);
	const [on, setOn] = useState('advertisement');
	const pop = useRef(null);

	//	const [ele, setEle] = useState(null);
	const [ad, setAd] = useState(null);
	const [sps, setSps] = useState([]);
	const [adv, setAdv] = useState([]);

	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		console.log(vid);
		if (vid) {
			//	setEle(vid[0]);
			setAd(vid[11]);
			setSps(vid.slice(0, 3));
			setAdv(vid.slice(3));
		}
	}, [vid]);

	useEffect(() => {
		console.log(open);
	}, [open]);
	return (
		<>
			<SubHeader img={`${path}/img/banner331.jpg`}>
				<div className='textBox'>
					<h2>YOUTUBE</h2>
					<p>
						Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam
						aliquid, incidunt magni alias saepe quidem
					</p>
				</div>
			</SubHeader>

			<Layout name={'youtube'}>
				<Advertisement
					ad={ad}
					adv={adv}
					setOpen={setOpen}
					setIndex={setIndex}></Advertisement>
				<Sponsorship
					//	ele={ele}
					sps={sps}
					//vidIndex={index}
					setOpen={setOpen}
					setIndex={setIndex}></Sponsorship>
			</Layout>

			{open ? (
				<Popup ref={pop} open={open} setOpen={setOpen}>
					<iframe
						src={
							`https://www.youtube.com/embed/` +
							vid[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
					<span
						onClick={() => {
							pop.current.close();
						}}>
						close
					</span>
					{/* 클릭이벤트로 setOn(false)를 호출하면 open의 값이 false가 되고, 팝업컴포넌트가 null로 변해서 팝업창 사라지는 모션이 실행되지 않음., */}
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
