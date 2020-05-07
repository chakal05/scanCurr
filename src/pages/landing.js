import React from 'react';
import laptopPic from '../assets/laptop.jpg';
import Button from 'react-bootstrap/Button';
import '../assets/styles/landing.scss';
export default function Landing() {
	return (
		<>
			<div className='landingWrapper'>
				<div className='leftText'>
					<h1>
						Hi, I’m Chakir. Nice to meet
						you.
					</h1>
					<p>
						Since the beginning of my
						journey as a self-taught web
						developer , building
						state-of-the-art, easy to use,
						user friendly websites and web
						applications has truly become a
						passion of mine. In addition to
						my knowledge base, i actively
						seek out new technologies and
						stay up-to-date on new industry
						trends and advancements. I’m
						quietly confident, naturally
						curious, and perpetually working
						on improving my skills one
						project at a time.
                    </p>
                    
                    <Button size='lg' variant='dark'> See projects  </Button>
				</div>
				<div className='rightPic'>
                    <img
                        className='pic'
						src={laptopPic}
						alt='laptop'
						width='100%'
					/>
				</div>
			</div>
		</>
	);
}
