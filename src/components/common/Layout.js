import React, { useEffect, useRef } from 'react';

function Layout({ children, name }) {
	//비구조할당 children props로 해당 컴포넌트로 감싼 자식 컨텐츠를 통으로 불러올 수 있음.
	const frame = useRef(null);
	useEffect(() => {
		frame.current.classList.add('on');
	}, []);
	return (
		<section className={`content ${name}`} ref={frame}>
			<div className='inner'>
				<div className='list'>{children}</div>
			</div>
		</section>
	);
}

export default Layout;
