import React, { useEffect, useState } from 'react';
import axios from 'axios';

const path = process.env.PUBLIC_URL;
function Member() {
	//const frame = useRef(null);
	const [members, setMember] = useState([]);
	useEffect(() => {
		//frame.current.classList.remove('on');
		//frame.current.classList.add('on');
		axios
			.get(`${path}/DB/member.json`)
			.then((json) => setMember(json.data.data));
	}, []);

	//console.log(member);

	return (
		<div className='member'>
			<div className='list'>
				<p>MEMBER</p>
				{members.map((a, idx) => {
					return (
						<article key={idx}>
							<img src={`${path}/img/${a.pic}`} alt='' />
							<div className='box'>
								<p>{a.name}</p>
								<p>{a.position}</p>
							</div>
						</article>
					);
				})}
			</div>
		</div>
		/*<section className='content member' ref={frame}>
			<div className='inner'>
				<h1>Member</h1>
				<figure></figure>
			</div>
		</section>*/
	);
}

export default Member;
