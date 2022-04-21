import React from 'react';

function SubHeader({ children, img }) {
	return (
		<div className='subHeader'>
			<div className='sub_inner'>{children}</div>
			<img src={img} alt='' />
		</div>
	);
}

export default SubHeader;
