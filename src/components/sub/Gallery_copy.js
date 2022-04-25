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

	const [items, setArr] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const pop = useRef(null);

	useEffect(() => {
		axios.get(url).then((json) => {
			setArr(json.data.photos.photo);
			setLoading(true); //데이터를 받은 후에 한번만!
		});
	}, []);

	console.log(items);

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
					{items.map((item, idx) => {
						return (
							<article key={idx}>
								<img
									src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
									alt=''
									onClick={() => {
										setIndex(idx);
										//setOpen(true);
										pop.current.open();
									}}
								/>
								<h2>{item.title}</h2>
							</article>
						);
					})}
					<p className='last'>
						"We believe that making a succesful business is both a science and a
						passion."
					</p>
				</div>
			</Layout>

			<Popup ref={pop}>
				{loading && (
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
						alt=''
					/>
				)}
				<span onClick={() => pop.current.close()}>close</span>
			</Popup>
		</>
	);
}

export default Gallery;
