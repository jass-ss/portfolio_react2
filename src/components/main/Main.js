import React, { useEffect, useRef, useState } from 'react';
import Visual from './Visual';
import Content from './Content';
import Header from '../common/Header';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [scr, setScr] = useState();
	const [scrolled, setScrolled] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('section');
		pos.current = []; // 윈도우 리사이즈 이벤트가 일어나면 기존값 클리어 후 새 값 push.
		secs.forEach((s, idx) => pos.current.push(s.offsetTop));
	};

	const activation = () => {
		const base = -200;
		let scroll = window.scrollY;
		//현재 스크롤되는 거는 값을 scrolled state에 저장
		setScrolled(scroll);
		const btns = main.current.querySelectorAll('.btns li');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {}, []);
	/*
	useEffect(() => {
		const scroll = window.scrollY;
		window.addEventListener('scroll', () => {
			console.log(scroll);
			setScr(scroll);
		});
		return () => {
			window.removeEventListener('scroll', () => {
				console.log(scroll);
				setScr(scroll);
			});
		};
	}, [scr]); */

	return (
		<div ref={main}>
			<Header type={'main'} />
			<Visual></Visual>
			<Content></Content>
		</div>
	);
}

export default Main;
