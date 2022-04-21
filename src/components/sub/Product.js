import React from 'react';
import SubHeader from '../common/SubHeader';
import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

function Product() {
	return (
		<>
			<SubHeader img={`${path}/img/banner14.jpg`}>
				<h2>PRODUCT</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
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

				<section className='two1'>
					<div className='inner'>
						<div className='wrapper'>
							<article>
								<img src={`${path}/img/product6.png`} alt='silver stove' />
								<h2>A QUESTION OF STYLE</h2>
								<p>
									Every collection has a soul. Which recounts a very personal
									experience - that of the person who lives with it.
								</p>
							</article>

							<article>
								<img src={`${path}/img/product4.jpg`} alt='' />
								<h2>CLEAN LINES AND RIGOROUS LOGIC</h2>
								<p>
									translate into the pleasure of living and working in a
									well-organised, functional and yet not austere kitchen. you
									can make the most of your space
								</p>
							</article>
						</div>
					</div>
				</section>

				<section className='two2'>
					<div className='inner'>
						<div className='wrapper'>
							<article>
								<img src={`${path}/img/product2.jpg`} alt='hand mixer' />
								<h2>MANAGING EACH PREPARATION WITH SIMPLICITY</h2>
								<p>
									In these mechanical and laborious procedures, to achieve
									excellence, it is better to help our hands
								</p>
							</article>

							<article>
								<img src={`${path}/img/product5.jpg`} alt='shining stove' />
								<h2>GLOSSY FINISH</h2>
								<p>
									perfect to catalyze as much light as possible in the kitchen
								</p>
							</article>
						</div>
					</div>
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
					<div className='inner'>
						<div className='wrapper'>
							<article>
								<img
									src={`${path}/img/service1.jpg`}
									alt=' free service for 1 year'
								/>
								<h2>1 Year of dedicated care</h2>
							</article>

							<article>
								<img
									src={`${path}/img/service2.jpg`}
									alt="a man who's checking"
								/>
								<h2>Planned maintenance program</h2>
							</article>

							<article>
								<img
									src={`${path}/img/service3.jpg`}
									alt='a car with service partner'
								/>
								<h2>Repairing service: whenever and wherever you want.</h2>
							</article>
						</div>

						<div id='mail'>
							<p>Sign up to our product newsletter</p>
							<form action='#' id='mailForm'>
								<fieldset>
									<legend className='h'>메일링 신청</legend>
									<div>
										<input
											type='text'
											id='mailBox'
											placeholder='your Email'
											required
										/>
										<input type='submit' id='submit' value='submit' />
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}

export default Product;
