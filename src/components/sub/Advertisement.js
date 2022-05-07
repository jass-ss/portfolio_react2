import React from 'react';
import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

function Advertisement({ ad, adv, setIndex, setOpen }) {
	return (
		<div className='advertisement'>
			<h1> TV COMMERCIALS </h1>
			<p>
				You may see ads in a few different places in YouTube TV, like when
				you're watching live TV
			</p>
			{adv.map((a, idx) => {
				const title = a.snippet.title;
				return (
					<React.Fragment key={idx}>
						<article>
							<h2>{0 + `${3 + idx}` + "'s"}</h2>
							<div className='pic'>
								<img
									src={a.snippet.thumbnails.standard.url}
									alt=''
									onClick={() => {
										setIndex(idx + 3);
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
