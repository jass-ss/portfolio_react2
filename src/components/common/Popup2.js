import React from 'react';

export default function Popup({ setOpen, children }) {
	return (
		<pop className='popup2'>
			<span onClick={() => setOpen(false)}>CLOSE</span>
			<div className='con'>{children}</div>
		</pop>
	);
}
