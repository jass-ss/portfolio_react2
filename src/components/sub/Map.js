import React, { Fragment, useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

function Map() {
	const container = useRef(null);
	const { kakao } = window; //윈도우 전역객체에서 카카오객체를 직접찾아서 변수에 할당.
	const [traffic, setTraffic] = useState(false);
	const [map, setMap] = useState(null); //안에 들어갈 자료형 적확하게 모르겠다면, null로! 자료형이 다르면 set되지 않는다.
	const [index, setIndex] = useState(0);

	const branch_btns = [
		`${path}/img/marker1.png`,
		`${path}/img/marker2.png`,
		`${path}/img/marker3.png`,
	];

	var info = [
		{
			title: 'Head Office',
			latlng: new kakao.maps.LatLng(37.51426220045354, 127.06024581720781),
			imgSrc: branch_btns[0],
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Donut Factory',
			latlng: new kakao.maps.LatLng(37.51720985347799, 127.04134374625059),
			imgSrc: branch_btns[1],
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: 'Flagship Store',
			latlng: new kakao.maps.LatLng(37.585601140947716, 127.02013033711161),
			imgSrc: branch_btns[2],
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];
	const [mapInfo] = useState(info);

	useEffect(() => {
		const option = {
			center: new kakao.maps.LatLng(37.51426220045354, 127.06024581720781), // 지도의 중심좌표
			level: 3, // 지도의 확대 레벨
		};

		// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
		const map2 = new kakao.maps.Map(container.current, option);

		//위의 인스턴스 맵을 state로 옮긴다. 렌더링되어도 날아가지 않도록.
		setMap(map2);

		info.forEach((i, idx) => {
			const img = new kakao.maps.MarkerImage(i.imgSrc, i.imgSize, i.imgPos);
			new kakao.maps.Marker({
				position: i.latlng,
				Image: img,
				map: map2,
			});
		});
	}, []);

	useEffect(() => {
		window.addEventListener('resize', () => {
			map.setCenter(mapInfo[index].latlng);
		});

		return () => {
			window.removeEventListener('resize', () => {
				map.setCenter(mapInfo[index].latlng);
				console.log('clear');
			});
		};
	});

	useEffect(() => {
		handleTraffic();
	}, [traffic]);

	const handleTraffic = () => {
		if (map) {
			traffic
				? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	};
	return (
		<div className='mapCompo'>
			<span>MAP</span>
			<div className='wrap'>
				<div id='map1' ref={container}></div>
				<div className='txt'>
					<h1>CONTACT US</h1>
					<form action='#'>
						<fieldset>
							<legend className='h'>BOOK</legend>
							<table>
								<caption className='h'>BOOK INFO</caption>
								<tbody>
									<tr>
										<th scope='span'>
											<label htmlFor='name'>name</label>
										</th>
										<td>
											<input
												type='text'
												name='name'
												id='name'
												required
												placeholder='*name'
											/>
										</td>
									</tr>
									<tr>
										<th scope='span'>
											<label htmlFor='phone'>phone</label>
										</th>
										<td>
											<input
												type='text'
												name='phone'
												id='phone'
												required
												placeholder='*phone *only number'
											/>
										</td>
									</tr>
									<tr>
										<th scope='span'>
											<label htmlFor='time'>contact time</label>
										</th>
										<td>
											<select name='time' id='time'>
												<option value=''>select</option>
												<option value='open'>9:00~12:00</option>
												<option value='middle'>13:00~17:00</option>
												<option value='close'>18:00~22:00</option>
											</select>
										</td>
									</tr>
								</tbody>
							</table>
							<input type='submit' value='BOOK' />
						</fieldset>
					</form>
				</div>
			</div>
			{/*해당 버튼을 클릭할때머ㅏ다 기존 불린값을 반전시켜 토글발생. */}
			<div className='btnBox'>
				<button
					onClick={() => (traffic ? setTraffic(false) : setTraffic(true))}>
					{traffic ? 'TRAFFIC OFF' : 'TRAFFIC ON'}
				</button>
				{info.map((m, idx) => (
					<button
						key={idx}
						onClick={() => {
							map.setCenter(m.latlng);
							setIndex(idx);
						}}>
						STORE{idx + 1}
					</button>
				))}
			</div>
		</div>
	);
}

export default Map;
