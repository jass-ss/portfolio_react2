import React, { useRef } from 'react';
import Member from '../sub/Member';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Map from '../sub/Map';
import SubHeader from '../common/SubHeader';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const path = process.env.PUBLIC_URL;

function Brand() {
	const winWidth = window.innerWidth; //모바일 접속시에만 사용. 브라우저 화면에 따라 변경되는 값이 필요하면 resize() 이벤트 걸어야 한다.
	const ref = useRef(null);
	let press = false;
	let n = 0;
	let s;
	let end;
	let moving;
	const mouseMove = (e) => {
		if (press) {
			const move = e.changedTouches[0].clientX;
			moving = s - move;
			if (moving < 0) {
				//마우스 왼쪽으로 드래그. pics의 marginLeft - 됨.
				//	n--;
				console.log(n);
				if (n === 0) {
					//n = 0;
					moving = 0;
				}
			} else if (moving > 0) {
				//n++;
				console.log(n);
				if (n === -2) {
					moving = 0;
				}
			}
			const ratio = moving * (-100 / winWidth) * 1.5;
			ref.current.style.marginLeft = `${n * 100 + ratio}%`;
		}
	};
	const slideMove = (e) => {
		press = false;
		end = e.changedTouches[0].clientX;
		if (s - end > 0) {
			n--;
			if (n < -2) n = -2;
		} else if (s - end < 0) {
			n++;
			if (n > 0) n = 0;
		}
		console.log(n);
		ref.current.style.marginLeft = `${n * 100}%`;
	};
	return (
		<section className='content brand'>
			<SubHeader img={`${path}/img/banner12.jpg`}>
				<div className='textBox'>
					<h2>BRAND</h2>
					<p>
						Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam
						aliquid, incidunt magni alias saepe quidem
					</p>
				</div>
			</SubHeader>
			<div className='inner'>
				<figure className='logo'>
					<h1>CHROME KICHEN - TECHNOLOGY WITH STYLE</h1>
					<div className='svg'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='-10 0 600 512'>
							<path d='M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z' />
						</svg>
					</div>
					<p className='intro'>
						quasi iure necessitatibus mollitia impedit error distinctio magnam
						aut neque quod optio libero dolor eligendi ut atque ab aperiam
					</p>
				</figure>
				<div className='story'>
					<div
						className='pics'
						ref={ref}
						onTouchStart={(e) => {
							press = true;
							s = e.changedTouches[0].clientX;
							console.log(n);
						}}
						onTouchEnd={(e) => slideMove(e)}
						onTouchMove={(e) => mouseMove(e)}
						onClick={() => alert(winWidth)}>
						<article>
							<img src={`${path}/img/eco.jpg`} alt='' />
							<h2>ECOFRIENDLY</h2>
							<p>
								High performance and low consumption, highest energy efficiency
								class rating
							</p>
						</article>
						<article>
							<img src={`${path}/img/test.jpg`} alt='' />
							<h2>EFFICIENT</h2>
							<p>
								onstant and strict control tests throughout the entire
								production process testify
							</p>
						</article>
						<article>
							<img src={`${path}/img/mecanic2.jpg`} alt='' />
							<h2>SUSTAINABILITY</h2>
							<p>Quality, Health, Safety and Environment policy</p>
						</article>
					</div>
					<FontAwesomeIcon
						icon={faAngleLeft}
						className='prev'
						onClick={() => {
							n++;
							if (n == 1) n = 0;
							ref.current.style.marginLeft = `${n * 100}%`;
						}}
					/>
					<FontAwesomeIcon
						icon={faAngleRight}
						className='next'
						onClick={() => {
							n--;
							if (n == -3) n = -2;
							ref.current.style.marginLeft = `${n * 100}%`;
						}}
					/>
				</div>
				<Member />

				<article className='team'>
					<div className='txt'>
						<h1>OUR TEAM</h1>
						<p>
							quis inventore enim iure eligendi beatae, perspiciatis omnis
							facere, sint distinctio? Consequuntur dolorem aperiam doloribus
							fugit quae.
						</p>
					</div>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className='mySwiper'>
						<div className='pics'>
							<SwiperSlide>
								<div className='pic'>
									<img src={`${path}/img/people1.jpg`} alt='' />
									<p>Operations</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='pic'>
									<img src={`${path}/img/people2.png`} alt='' />
									<p>Design</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='pic'>
									<img src={`${path}/img/people4.jpg`} alt='' />
									<p>Administration</p>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='pic'>
									<img src={`${path}/img/people3.jpg`} alt='' />
									<p>Human Resources</p>
								</div>
							</SwiperSlide>
						</div>
					</Swiper>
				</article>

				<div className='teamWork'>
					<article>
						<img src={`${path}/img/teamwork.jpg`} alt='' />
						<p>We believe in teamwork.</p>
					</article>

					<article>
						<img src={`${path}/img/goal.jpg`} alt='' />
						<p>We work for a common goal.</p>
					</article>

					<article>
						<img src={`${path}/img/team.jpg`} alt='' />
						<p>We are a prepared and united team.</p>
					</article>
				</div>
			</div>
			<Map></Map>
		</section>
	);
}
export default Brand;