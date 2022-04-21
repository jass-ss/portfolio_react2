import React from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

const path = process.env.PUBLIC_URL;

function Sponsorship({ ele, sps, setOpen, setIndex }) {
	return (
		<Layout>
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
								we sponsored a TV show with our kitchen appliances. check the
								youtube and our product
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
		</Layout>
	);
}

export default Sponsorship;
