import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import SubHeader from '../common/SubHeader';
import Popup from '../common/Popup';
import { useSelector } from 'react-redux';

const path = process.env.PUBLIC_URL;

function Gallery() {
	const pics = useSelector((state) => state.flickrReducer.flickr);
	const [items, setArr] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);
	const pop = useRef(null);

	useEffect(() => {
		console.log(pics);
		if (pics) {
			setArr(pics);
		}
	}, [pics]);

	return (
		<>
			<SubHeader img={`${path}/img/banner00.jpg`}>
				<div className='textBox'>
					<h2>GALLERY</h2>
					<p>
						Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam
						aliquid, incidunt magni alias saepe quidem
					</p>
				</div>
			</SubHeader>
			<Layout name={'gallery'}>
				<div className='g_list'>
					<h1>DETAIL CUT</h1>
					<p>improve your performance and give shape to your ambitions</p>
					<div className='wrapper'>
						{items.map((item, idx) => {
							return (
								<article key={idx}>
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
										alt=''
										onClick={() => {
											setIndex(idx);
											setLoading(true);
											//setOpen(true);
											pop.current.open();
										}}
									/>
									<h2>{item.title}</h2>
								</article>
							);
						})}
					</div>
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
