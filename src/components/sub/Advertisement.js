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
	);
}

export default Advertisement;
