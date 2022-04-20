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

function App() {
	return (
		<div className='App'>
			<Switch>
				{/* 같은 경로의 router 연결시 구체적인 라우터 하나만 적용.*/}
				<Route exact path='/'>
					<Main>y</Main>
				</Route>
				<Route path='/'>
					<Header type={'sub'} />
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
