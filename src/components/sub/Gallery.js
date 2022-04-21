import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import SubHeader from '../common/SubHeader';
import Popup from '../common/Popup';

import axios from 'axios';

const path = process.env.PUBLIC_URL;

function Gallery() {
	const key = 'e565f81533120f8f890f47cdeb951ff4';
	const user = '195295333@N07';
	const method = 'flickr.people.getPhotos';
	const page = 20;
	const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${key}&per_page=${page}&format=json&nojsoncallback=1&user_id=${user}`;

	const [open, setOpen] = useState(false);
	const [arr, setArr] = useState([]);
	const [index, setIndex] = useState('');

	useEffect(() => {
		console.log('??');
		axios.get(url).then((json) => setArr(json.data.photos.photo));
		console.log('??');
	}, []);

	return (
		<>
			<SubHeader img={`${path}/img/banner00.jpg`}>
				<h2>GALLERY</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
			<Layout name={'gallery'}>
				<div className='g_list'>
					<h1>DETAIL CUT</h1>
					<p>improve your performance and give shape to your ambitions</p>
					{arr.map((a, idx) => {
						return (
							<article key={idx}>
								<img
									src={`https://live.staticflickr.com/${a.server}/${a.id}_${a.secret}_m.jpg`}
									alt=''
									onClick={() => {
										setIndex(idx);
										setOpen(true);
									}}
								/>
								<h2>{a.title}</h2>
							</article>
						);
					})}
					<p className='last'>
						"We believe that making a succesful business is both a science and a
						passion."
					</p>
				</div>
			</Layout>
			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${arr[index].server}/${arr[index].id}_${arr[index].secret}_m.jpg`}
						alt=''
					/>
				</Popup>
			) : null}
		</>
	);
}

export default Gallery;
