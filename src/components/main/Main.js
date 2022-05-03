import React, { useEffect, useRef, useState } from 'react';
import Visual from './Visual';
import Content from './Content';
import Header from '../common/Header';
import Popup2 from '../common/Popup2';

function Main() {
	const main = useRef(null);
	const [scr, setScr] = useState(0);
	const pos = useRef([]);
	const [open, setOpen] = useState();
	const [checked, setCheck] = useState(false);

	const getPos = () => {
		//console.log(main.current);
		if (main.current) {
			//useRef가 붙은 main컴포넌트에서만 실행.
			const secs = main.current.querySelectorAll('section');
			pos.current = []; // 윈도우 리사이즈 이벤트가 일어나면 기존값 클리어 후 새 값 push.
			secs.forEach((s, idx) => pos.current.push(s.offsetTop)); //값이 변경되어도 렌더링x.
			console.log(pos.current);
		}
	};

	/*	const activation = () => {
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
	}; */

	function scrll() {
		const scroll = window.scrollY;
		setScr(scroll);
		//console.log(scr);
	}

	useEffect(() => {
		getPos();
		const isCookie = document.cookie.indexOf('chrome');
		isCookie === -1 ? setOpen(true) : setOpen(false);
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

	const setCookie = () => {
		const today = new Date();
		const day = today.getDate();
		today.setDate(day + 1);
		const duedate = today.toGMTString();
		document.cookie = `chrome=chrome; path=/; expires=${duedate}`;
	};

	const isCheck = (e) => {
		const check = e.target.checked;
		setCheck(check);
	};

	return (
		<div ref={main}>
			<Header type={'main'} />
			{open && (
				<Popup2>
					<p>NOTICE</p>
					<p>
						이 사이트는 비상업용 목적으로 제작된 가상 기업 사이트입니다. 이
						사이트에 사용된 이미지의 출처는 smeg, unox, balmuda, unsplash 이며,
						저작권은 해당 기업과 사진작가에게 있습니다.
					</p>
					<div className='wrap'>
						<label htmlFor='cookie'>
							<input type='checkBox' id='cookie' onClick={(e) => isCheck(e)} />
							하루동안 열지 않기
						</label>
						<label htmlFor='setCookie'>
							<input
								type='checkBox'
								id='setCookie'
								onClick={() => {
									{
										checked && setCookie();
									}
									setOpen(false);
								}}
							/>
							확인하였습니다
						</label>
					</div>
				</Popup2>
			)}
			<Visual></Visual>
			<Content scr={scr} pos={pos.current}>
				test
			</Content>
		</div>
	);
}

export default Main;
