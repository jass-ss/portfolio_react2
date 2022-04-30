import React from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

function Advertisement({ ad, adv, setIndex, setOpen }) {
	return (
		<div className='advertisement'>
			<div className='main'>
				<div className='pic'>
					<img src={ad ? ad.snippet.thumbnails.standard.url : null} alt='' />
				</div>
				<div className='txt'>
					<div className='txt_box'>
						<h1> TV COMMERCIALS </h1>
						<h2>ADVERTISEMENT</h2>
						<p>
							You may see ads in a few different places in YouTube TV, like when
							you're watching live TV
						</p>
					</div>
				</div>
			</div>
			{adv.map((a, idx) => {
				const title = a.snippet.title;
				return (
					<React.Fragment key={idx}>
						<article>
							<div className='text'>
								<p>{0 + `${3 + idx}` + "'s"}</p>
								<p className='title'>
									{title.length > 50
										? title.slice(0, 40) + '...'
										: a.snippet.title}
								</p>
							</div>

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
						</article>
					</React.Fragment>
				);
			})}
		</div>
	);
}

export default Advertisement;
