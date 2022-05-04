import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = forwardRef((props, ref) => {
	const [open, setOpen] = useState(props.open);
	console.log(props);
	if (!open) setTimeout(() => props.setOpen(false), 1000);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => {
				setOpen(false);
			},
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.aside
						className='popup'
						initial={{ opacity: 0 }} //초기상태
						animate={{ opacity: 1 }} //해당 컴포넌트가 생성될 때 실행될 값.
						exit={{ opacity: 0, transition: { delay: 0.5 } }}>
						<motion.div
							className='con'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { delay: 0.5 } }}
							exit={{ opacity: 0 }}>
							{props.children}
						</motion.div>
					</motion.aside>
				</>
			)}
		</AnimatePresence>
	);
});

export default Popup;
