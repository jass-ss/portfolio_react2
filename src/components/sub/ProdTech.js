import React, { useState } from 'react';

function ProdTech({ path }) {
	const textArr = [
		`1 Year of dedicated care`,
		`Planned maintenance program`,
		`Repairing service: whenever and wherever you want.`,
	];

	const [text, setText] = useState(0);
	return (
		<div className='inner'>
			<div className='wrapper'>
				<article onClick={() => setText(0)}>
					<img
						style={text === 0 ? { border: '2px solid orange' } : null}
						src={`${path}/img/service1.jpg`}
						alt=' free service for 1 year'
					/>
					<h2>1 Year of dedicated care</h2>
				</article>

				<article onClick={() => setText(1)}>
					<img
						style={text === 1 ? { border: '2px solid orange' } : null}
						src={`${path}/img/service2.jpg`}
						alt="a man who's checking"
					/>
					<h2>Planned maintenance program</h2>
				</article>

				<article onClick={() => setText(2)}>
					<img
						style={text === 2 ? { border: '2px solid orange' } : null}
						src={`${path}/img/service3.jpg`}
						alt='a car with service partner'
					/>
					<h2>Repairing service: whenever and wherever you want.</h2>
				</article>
			</div>

			<div className='mobText'>{textArr[text]}</div>

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
	);
}

export default ProdTech;
