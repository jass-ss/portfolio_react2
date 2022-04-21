import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';
//common
import Main from './components/main/Main';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//sub
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Help from './components/sub/Help';
import Product from './components/sub/Product';
import Store from './components/sub/Store';
import Brand from './components/sub/Brand';
import SignUp from './components/sub/SignUp';
import { useEffect } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { vids, dummy } from '../src/redux/actions';

function App() {
	const dispatch = useDispatch();
	const vid = useSelector((state) => state.vidReducer);
	console.log(vid);

	const youtube_key = 'AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM';
	const playListId = 'PLgRXT2p63sR2XX3SUYVo57tpYJxmNIhm-';
	const num = 13;
	const youtube_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=${playListId}&maxResults=${num}`;

	const get = async () => {
		const res = await axios.get(youtube_url);
		const data = await res.data.items;
		dispatch(vids(data));
	};
	useEffect(() => {
		get();
		dispatch(
			dummy([
				{
					title: 'dummy1',
					text: 'it is dummy text1',
				},
				{
					title: 'dummy2',
					text: 'it is dummy text2',
				},
				{
					title: 'dummy3',
					text: 'it is dummy text3',
				},
			])
		);
	}, []);

	return (
		<div className='App'>
			<Switch>
				{/* 같은 경로의 router 연결시 구체적인 라우터 하나만 적용.*/}
				<Route exact path='/'>
					<Main>test</Main>
				</Route>
				<Route path='/'>
					<Header type={'main'} />
				</Route>
			</Switch>
			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/help' component={Help} />
			<Route path='/product' component={Product} />
			<Route path='/brand' component={Brand} />
			<Route path='/store' component={Store} />
			<Route path='/sign_up' component={SignUp} />
			<Footer />
		</div>
	);
}

export default App;
