import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';
//common
import Main from './components/main/Main';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//sub
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Board from './components/sub/Board';
import Product from './components/sub/Product';
import Store from './components/sub/Store';
import Brand from './components/sub/Brand';
import SignUp from './components/sub/SignUp';
import { useEffect } from 'react';

import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'YOUTUBE_START' });
		dispatch({ type: 'FLICKR_START' });
		if (!localStorage.getItem('posts')) {
			localStorage.setItem(
				'posts',
				JSON.stringify([
					{
						title: 'Nulla a quam ac mauris sollicitudin aliquam in sed turpi?',
						text: 'it is dummy text7',
					},
					{
						title: 'Integer porta sapien eu magna pharetra rhoncus.?',
						text: 'it is dummy text6',
					},
					{
						title:
							'Mauris aliquam lobortis lacus, vitae tempus risus commodo vel?',
						text: 'it is dummy text5',
					},
					{
						title:
							'Aenean iaculis erat sit amet leo feugiat, ut cursus quam ornare?',
						text: 'it is dummy text4',
					},
					{
						title: 'laoreet odio tortor, et porta dui elementum at?',
						text: 'it is dummy text3',
					},
					{
						title:
							'Ut volutpat sapien eu nisi faucibus, mollis congue est molestie?',
						text: 'it is dummy text2',
					},
					{
						title: 'Nam hendrerit justo quis massa luctus suscipi?',
						text: 'it is dummy text1',
					},
				])
			);
		} //else {console.log('had');}
	}, []);

	return (
		<div className='App'>
			<Switch>
				{/* 같은 경로의 router 연결시 구체적인 라우터 하나만 적용.*/}
				<Route exact path='/'>
					<Main></Main>
				</Route>
				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>
			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/board' component={Board} />
			<Route path='/product' component={Product} />
			<Route path='/brand' component={Brand} />
			<Route path='/store' component={Store} />
			<Route path='/sign_up' component={SignUp} />
			<Footer />
		</div>
	);
}

export default App;
