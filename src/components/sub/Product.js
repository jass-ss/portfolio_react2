import React from 'react';
import SubHeader from '../common/SubHeader';
import ProdSlide from './ProdSlide';
import ProdTech from './ProdTech';
//import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

function Product() {
	return (
		<>
			<SubHeader img={`${path}/img/banner14.jpg`}>
				<div className='textBox'>
					<h2>PRODUCT</h2>
					<p>
						Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam
						aliquid, incidunt magni alias saepe quidem
					</p>
				</div>
			</SubHeader>
			<section className='content product'>
				<section className='one on'>
					<div className='inner'>
						<p className='intro'>
							A complete offering for high technology collections, articulated
							in a rich palette of colours which, alongside white and black,
							ranges over sorbet colours, metallic tones and classic saturated
							colours.
						</p>
					</div>
				</section>

				<section className='two'>
					<ProdSlide path={path}></ProdSlide>
				</section>

				<section className='three'>
					<div className='inner'>
						<h2>SIGNATURE COLOR</h2>
						<div className='pics'>
							<div className='pic'>
								<img src={`${path}/img/black.jpg`} alt='' />
							</div>

							<div className='pic'>
								<img src={`${path}/img/gray2.jpg`} alt='' />
							</div>

							<div className='pic'>
								<img src={`${path}/img/gray.jpg`} alt='' />
							</div>

							<div className='pic'>
								<img src={`${path}/img/ivory.jpg`} alt='' />
							</div>
						</div>

						<article>
							<ul>
								<li>
									<p>
										PANTONE <br />
										4287 C <br />
										66.62.55.54
									</p>
								</li>
								<li>
									<p>
										PANTONE <br />
										COOLGRAY 10 C<br />
										57.46.40.25
									</p>
								</li>
								<li>
									<p>
										PANTONE <br />
										COOLGRAY 11 C<br />
										63.52.44.33
									</p>
								</li>
								<li>
									<p>
										PANTONE <br />
										9224 C<br />
										6.10.15.0
									</p>
								</li>
							</ul>
						</article>

						<a href='#'> GO TO GET </a>
					</div>
				</section>

				<section className='four'>
					<div className='banner'>
						<img src={`${path}/img/banner4.jpg`} alt='' />
						<h2>TECHNICAL SERVICES</h2>
					</div>
					<div className='inner'>
						<p className='intro'>
							Do you have a busy period of work in your business and you do not
							want to get caught unprepared? With the Preventive Maintenance
							program to take care of your oven by our most qualified service
							partners, you will be prepared for every upcoming business
							opportunity!
						</p>
					</div>
				</section>

				<section className='five'>
					<ProdTech path={path}></ProdTech>
				</section>
			</section>
		</>
	);
}

export default Product;
