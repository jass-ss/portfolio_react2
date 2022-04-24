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
import { FLICKR, YOUTUBE } from './redux/actions';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const vid = useSelector((state) => state);
	console.log(vid);

	/*const get = async () => {
		const res = await axios.get(youtube_url);
		const data = await res.data.items;
		dispatch(vids(data));
	}; */

	useEffect(() => {
		console.log('???');
		dispatch({ type: 'YOUTUBE_START' });
		if (!localStorage.getItem('posts')) {
			localStorage.setItem(
				'posts',
				JSON.stringify([
					{
						title:
							' Sed ut perspiciatis unde omnis iste natus error sit volupt?',
						text: 'it is dummy text6',
					},
					{
						title: ' do iusmod tempor incididunet ut labore et dolore magna?',
						text: 'it is dummy text5',
					},
					{
						title: ' Ut enim ad minim veniam, quis nostrud exercitation?',
						text: 'it is dummy text4',
					},
					{
						title:
							' Sed ut perspiciatis unde omnis iste natus error sit volupt?',
						text: 'it is dummy text3',
					},
					{
						title:
							' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ?',
						text: 'it is dummy text2',
					},
					{
						title: ' iusmod tempor incididunet ut labore et dolore magna?',
						text: 'it is dummy text1',
					},
				])
			);
		} else {
			console.log('had');
		}
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
