import React, { useEffect, useRef, useState } from 'react';
import Visual from './Visual';
import Content from './Content';
import Header from '../common/Header';

function Main() {
	const main = useRef(null);
	const [scr, setScr] = useState(0);
	const pos = useRef([]);
	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('section');
		pos.current = []; // 윈도우 리사이즈 이벤트가 일어나면 기존값 클리어 후 새 값 push.
		secs.forEach((s, idx) => pos.current.push(s.offsetTop)); //값이 변경되어도 렌더링x.
		console.log(pos.current);
	};

	const activation = () => {
		const base = -200;
		let scroll = window.scrollY;
		//현재 스크롤되는 거는 값을 scrolled state에 저장
		setScrolled(scroll);
		console.log(scrolled);
		const btns = main.current.querySelectorAll('.btns li');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	function scrll() {
		const scroll = window.scrollY;
		setScr(scroll);
		//console.log(scr);
	}

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		return () => {
			window.addEventListener('resize', getPos);
			console.log('pos 클리어');
		};
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', scrll);
		return () => {
			window.removeEventListener('scroll', scrll);
			console.log('클리어');
		};
	}, [scr]);

	return (
		<div ref={main}>
			<Header type={'main'} />
			<Visual></Visual>
			<Content scr={scr} pos={pos.current}></Content>
		</div>
	);
}

export default Main;
