import React, { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';
import SubHeader from '../common/SubHeader';
import Poptext from '../common/PopText';
import { useSelector } from 'react-redux';

const path = process.env.PUBLIC_URL;

function Help() {
	const input = useRef(null);
	const textarea = useRef(null);
	const [data, setData] = useState([]);
	const [index, setIndex] = useState(null);
	const [open, setOpen] = useState(false);
	const [write, setWrite] = useState(false);
	const [update, setUpdate] = useState(false);
	const [val, setVal] = useState();

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('posts'));
		if (res) setData(res);
	}, []);
	useEffect(() => {
		console.log('data', data);
		if (!data) {
			return;
		}
		localStorage.setItem('posts', JSON.stringify(data));
	}, [data]);

	useEffect(() => {
		console.log(index);
	}, [index]);

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
		setWrite(false);
	};

	const del = (index) => {
		if (index === null) {
			return;
		}
		const newData = data.filter((_, idx) => idx !== index);
		console.log(newData);
		setData(newData);
	};

	const update2 = (index) => {
		console.log(data);
		const newData = data.map((d, idx) => {
			//새로운 배열을 만들어서
			if (index === idx) {
				d = { ...d, title: input.current.value, text: textarea.current.value }; //업데이트 해주고
				console.log(d);
			}
			return d; //반환
		});
		console.log(newData);
		setData(newData); //set.
		setUpdate(false);
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
	const edit = (idx) => {
		setUpdate(true);
		//console.log(data[idx]);
		setVal(data[idx]);
		setIndex(idx);
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
				{data.map((d, idx) => {
					return (
						<React.Fragment key={idx}>
							<div
								className='box'
								onClick={(e) => {
									setIndex(idx);
									handleOpen(e, idx);
								}}>
								<React.Fragment key={idx}>
									<span>{open === idx ? `-` : `+`}</span>
									<h2>{d.title}</h2>
								</React.Fragment>
							</div>

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
											{
												/*setIndex(idx);
													update(idx);*/
												//setIndex(idx);
												edit(idx);
											}
										}}>
										edit
									</button>
								</div>
							) : null}
						</React.Fragment>
					);
				})}

				{write ? null : (
					<button
						onClick={() => {
							setWrite(true);
						}}>
						write
					</button>
				)}

				{write && (
					<div className='writeBox'>
						<label htmlFor='title'>
							title:
							<input type='text' name='title' ref={input} />
						</label>
						<label htmlFor='test'>
							text:
							<textarea
								name='text'
								id=''
								cols='30'
								rows='10'
								ref={textarea}></textarea>
						</label>
						<button onClick={create}>create</button>
						<button onClick={() => setWrite(false)}>cancel</button>
					</div>
				)}
			</Layout>
			{update && (
				<Poptext>
					<div className='wrap'>
						<input
							type='text'
							name='title'
							ref={input}
							defaultValue={val.title}></input>
						<textarea
							name='text'
							id=''
							cols='30'
							rows='10'
							ref={textarea}
							defaultValue={val.text}></textarea>
						<button onClick={() => update2(index)}>save</button>
						<button onClick={() => setUpdate(false)}>cancel</button>
					</div>
				</Poptext>
			)}
		</>
	);
}

export default Help;
