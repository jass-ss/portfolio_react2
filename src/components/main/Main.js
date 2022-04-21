import React, { useEffect, useRef, useState } from 'react';
import Visual from './Visual';
import Content from './Content';
import Header from '../common/Header';

function Main() {
	const ref = useRef(null);
	const offs = [];
	const [scr, setScr] = useState();
	useEffect(() => {
		if (ref) {
			console.log(ref.current.querySelectorAll('section'));
			const secs = ref.current.querySelectorAll('section');
			secs.forEach((s, idx) => offs.push(s.offsetTop));
			console.log(offs);
			window.scrollTo(0, offs[4]);
		}
	}, []);
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
		<div ref={ref}>
			<Header type={'main'} />
			<Visual></Visual>
			<Content></Content>
		</div>
	);
}

export default Main;
