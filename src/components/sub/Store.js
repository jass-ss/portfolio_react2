import React from 'react';
import SubHeader from '../common/SubHeader';
import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

const oven = ['oven1.jpg', 'over3.jpg', 'oven4.jpg', 'oven5.jpg'];
const oven_name = ['SILVER', 'BLACK', 'COOPER', 'WHITE'];
const micro = ['micro1.jpg', 'micro2.jpg', 'micro3.png', 'micro4.png'];
const micro_name = ['RANGE WHITE', 'RANGE GRAY', 'MICRO WHITE', 'MICRO BLACK'];
const toast = ['toaster1.jpg', 'toaster2.jpg', 'toaster3.jpg'];
const toast_name = ['WHITE', 'BLACK', 'GRAY'];
const pan = ['26cm_pan.png', '30cm_pan.jpg'];
const pan_name = ['26CM STEEL PAN', '30CS STEEL PAN'];
const wok = ['26cm_wok.jpg'];
function Store() {
	return (
		<>
			<SubHeader img={`${path}/img/chrome.jpg`}>
				<h2>STORE</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
			<Layout name={'store'}>
				<div className='wrap'>
					<h1>CATEGORY</h1>

					<div className='store_list'>
						<ul>
							<li className='all on'>
								<a href='*'>ALL</a>
							</li>
							<li>
								<a href='.oven'>OVEN</a>
							</li>
							<li>
								<a href='.micro'>MICROWAVE</a>
							</li>
							<li>
								<a href='.toaster'>TOAST</a>
							</li>
							<li>
								<a href='.pan'>PAN</a>
							</li>
							<li>
								<a href='.wok'>WOK</a>
							</li>
						</ul>
					</div>
				</div>
				<section className='store_product'>
					{oven.map((o, idx) => {
						return (
							<article className='appliance oven' key={idx}>
								<img src={`${path}/img/${o}`} alt='' />

								<ul className='txt'>
									<li>OVEN {oven_name[idx]}</li>
									<li>price: 1,680,000 won</li>
									<li>size: 557 x 518 x 552 mm</li>
								</ul>
							</article>
						);
					})}
					{micro.map((m, idx) => {
						return (
							<article className='appliance micro' key={idx}>
								<img src={`${path}/img/${m}`} alt='' />

								<ul className='txt'>
									<li>{micro_name[idx]}</li>
									<li>price: 649,000 won</li>
									<li>size: 450 x 390 x 330 mm</li>
								</ul>
							</article>
						);
					})}
					{toast.map((t, idx) => {
						return (
							<article className='appliance toaster' key={idx}>
								<img src={`${path}/img/${t}`} alt='' />

								<ul className='txt'>
									<li>TOASTER {toast_name[idx]}</li>
									<li>price: 339000 won</li>
									<li>size: 357 x 321 x 209 mm</li>
								</ul>
							</article>
						);
					})}
					{pan.map((p, idx) => {
						return (
							<article className='cookWear pan'>
								<img src={`${path}/img/${p}`} alt='' />

								<ul className='txt'>
									<li>{pan_name[idx]}</li>
									<li>price:120000 won</li>
								</ul>
							</article>
						);
					})}
					{wok.map((w, idx) => {
						return (
							<article className='cookWear wok'>
								<img src={`${path}/img/${w}`} alt='' />

								<ul className='txt'>
									<li>26CM WOK</li>
									<li>price:150000 won</li>
								</ul>
							</article>
						);
					})}
				</section>

				{/*	<section className='store_product'>
					<article className='appliance oven'>
						<img src='./img/oven1.jpg' alt='' />

						<ul className='txt'>
							<li>OVEN SILVER</li>
							<li>price: 1,680,000 won</li>
							<li>size: 557 x 518 x 552 mm</li>
						</ul>
					</article>

					<article className='appliance oven'>
						<img src='./img/over3.jpg' alt='' />

						<ul className='txt'>
							<li>OVEN BLACK</li>
							<li>price: 1,680,000 won</li>
							<li>size: 557 x 518 x 552 mm</li>
						</ul>
					</article>

					<article className='appliance oven'>
						<img src='./img/oven4.jpg' alt='' />

						<ul className='txt'>
							<li>OVEN RETRO COOPER</li>
							<li>price: 2,180,000 won</li>
							<li>size: 597 x 548 x 592 mm</li>
						</ul>
					</article>

					<article className='appliance oven'>
						<img src='./img/oven5.jpg' alt='' />

						<ul className='txt'>
							<li>OVEN RETRO WHITE</li>
							<li>price: 2,180,000 won</li>
							<li>size: 597 x 548 x 592 mm</li>
						</ul>
					</article>

					<article className='appliance micro'>
						<img src='./img/micro1.jpg' alt='' />

						<ul className='txt'>
							<li>RANGE WHITE</li>
							<li>price: 649,000 won</li>
							<li>size: 450 x 390 x 330 mm</li>
						</ul>
					</article>

					<article className='appliance micro'>
						<img src='./img/micro2.jpg' alt='' />

						<ul className='txt'>
							<li>RANGE GRAY</li>
							<li>price: 649,000 won</li>
							<li>size: 450 x 390 x 330 mm</li>
						</ul>
					</article>

					<article className='appliance micro'>
						<img src='./img/micro3.png' alt='' />

						<ul className='txt'>
							<li>MICROWAVE BLACK</li>
							<li>price: 449,000 won</li>
							<li>size: 400 x 340 x 300 mm</li>
						</ul>
					</article>

					<article className='appliance micro'>
						<img src='./img/micro4.png' alt='' />

						<ul className='txt'>
							<li>MICROWAVE WHITE</li>
							<li>price: 449,000 won</li>
							<li>size: 400 x 340 x 300 mm</li>
						</ul>
					</article>

					<article className='appliance toaster'>
						<img src='./img/toaster1.jpg' alt='' />

						<ul className='txt'>
							<li>TOASTER WHITE</li>
							<li>price: 339000 won</li>
							<li>size: 357 x 321 x 209 mm</li>
						</ul>
					</article>

					<article className='appliance toaster'>
						<img src='./img/toaster2.jpg' alt='' />

						<ul className='txt'>
							<li>TOASTER BLACK</li>
							<li>price: 339000 won</li>
							<li>size: 357 x 321 x 209 mm</li>
						</ul>
					</article>

					<article className='appliance toaster'>
						<img src='./img/toaster3.jpg' alt='' />

						<ul className='txt'>
							<li>TOASTER GRAY</li>
							<li>price: 339000 won</li>
							<li>size: 357 x 321 x 209 mm</li>
						</ul>
					</article>

					<article className='cookWear pan'>
						<img src='./img/26cm_pan.png' alt='' />

						<ul className='txt'>
							<li>26CS STEEL PAN</li>
							<li>price:100000 won</li>
							<li>size: 26cm</li>
						</ul>
					</article>

					<article className='cookWear pan'>
						<img src='./img/30cm_pan.jpg' alt='' />

						<ul className='txt'>
							<li>30CM STEEL PAN</li>
							<li>price:120000 won</li>
							<li>size: 30cm</li>
						</ul>
					</article>

					<article className='cookWear wok'>
						<img src='./img/26cm_wok.jpg' alt='' />

						<ul className='txt'>
							<li>26CM WOK</li>
							<li>price:150000 won</li>
							<li>size: 26cm</li>
						</ul>
					</article>
	</section> */}
			</Layout>
		</>
	);
}

export default Store;
