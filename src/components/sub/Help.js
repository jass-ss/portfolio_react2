import React, { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';
import SubHeader from '../common/SubHeader';

const path = process.env.PUBLIC_URL;

function Help() {
	const input = useRef(null);
	const textarea = useRef(null);

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('posts'));
		console.log(res);
		if (!res) {
			console.log('>>???');
			localStorage.setItem(
				'posts',
				JSON.stringify([
					{ title: 'dummy', text: 'loremlorem' },
					{ title: 'dummy2', text: 'loremlorem2' },
				]) //저장된 값 없으면 더미데이터 셋.
			);
		}
	}, []);

	const res = JSON.parse(localStorage.getItem('posts'));
	const [data, setData] = useState(res ? res : []);
	const [index, setIndex] = useState(null);
	const [open, setOpen] = useState(false);
	const [write, setWrite] = useState(false);

	useEffect(() => {
		console.log(index);
	}, [index]);

	useEffect(() => {
		console.log('data:', data);
		if (data == []) return;
		localStorage.setItem('posts', JSON.stringify(data));
	}, [data]);

	const create = (e) => {
		const title = input.current.value.trim();
		console.log(title);
		const text = textarea.current.value.trim();
		console.log(text);
		if ((title && text) === '') {
			alert('내용을 입력해주세요');
			return;
		}
		const newObj = { title: title, text: text };
		setData([newObj, ...data]);
		console.log(data);
		input.current.value = '';
		textarea.current.value = '';
	};

	const del = (index) => {
		if (index === null) {
			return;
		}
		const newData = data.filter((_, idx) => idx !== index);
		console.log(newData);
		setData(newData);
	};

	const update = (index) => {
		console.log(data);
		const newData = data.map((d, idx) => {
			//새로운 배열을 만들어서
			if (index === idx) {
				d = { ...d, change: true }; //업데이트 해주고
				console.log(d);
			}
			return d; //반환
		});
		console.log(newData);
		setData(newData); //set.
	};
	const back = (index) => {
		console.log(data);
		const newData = data.map((d, idx) => {
			if (index === idx) {
				d = { ...d, change: false };
				console.log(d);
			}
			return d;
		});
		console.log(newData);
		setData(newData);
	};
	const handleOpen = (e, idx) => {
		const innerText = e.currentTarget.children[0].innerText;
		console.log(idx);
		if (innerText === '-') {
			setOpen(false);
		} else {
			setOpen(idx);
		}
	};

	return (
		<>
			<SubHeader img={`${path}/img/banner23.jpg`}>
				<h2>HELP</h2>
				<p>
					Lorem ipsum dolor sit amet consecte adipisicing elit. Numquam aliquid,
					incidunt magni alias saepe quidem
				</p>
			</SubHeader>
			<Layout name={'help'}>
				<h1>Q&amp;A</h1>
				<span className='intro'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. IpsNumquam
					aliquid, incidunt magni alias saepe quidem
				</span>
				{write ? (
					<>
						<input type='text' name='title' ref={input}></input>
						<textarea
							name='text'
							id=''
							cols='30'
							rows='10'
							ref={textarea}></textarea>
						<button onClick={create}>create</button>
						<button onClick={() => setWrite(false)}>cancel</button>
					</>
				) : null}
				{data.map((d, idx) => {
					return (
						<React.Fragment key={idx}>
							<div
								className='box'
								onClick={(e) => {
									setIndex(idx);
									handleOpen(e, idx);
								}}>
								{d.change ? (
									<React.Fragment key={idx}>
										<input
											type='text'
											defaultValue={data[idx].title}
											ref={input}></input>
										<textarea
											defaultValue={data[idx].text}
											ref={textarea}></textarea>
										<button
											onClick={() => {
												setIndex(idx);
												back(idx);
											}}>
											cancle
										</button>
										<button
											onClick={() => {
												setIndex(idx);
												update(idx);
												create();
											}}>
											save
										</button>
									</React.Fragment>
								) : (
									<React.Fragment key={idx}>
										<span>{open === idx ? `-` : `+`}</span>
										<h2>{d.title}</h2>
										{open === idx ? (
											<div className='hidden_box'>
												<p>{d.text}</p>
												<button
													onClick={() => {
														setIndex(idx);
														del(idx);
													}}>
													delete
												</button>
												<button
													onClick={() => {
														setIndex(idx);
														update(idx);
													}}>
													edit
												</button>
											</div>
										) : null}
									</React.Fragment>
								)}
							</div>
						</React.Fragment>
					);
				})}
				<button onClick={() => setWrite(true)}>WRITE</button>
			</Layout>
		</>
	);
}

export default Help;
