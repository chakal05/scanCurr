import React from 'react';
import { faEnvelope,   } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/styles/footer.scss';
export default function MyFooter() {
	return (
		<div className='footerWrapper'>
			<p>
				<span>
					{' '}
					<FontAwesomeIcon icon={faEnvelope} /> :
					chakirkhaire@gmail.com{' '}
				</span>{' '}
				<br />
				<span>
					<a
						href='https://www.linkedin.com/feed/'
						className='myIcons'>
						{' '}
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href='https://twitter.com/Chakir_17'
						className='myIcons'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						className='myIcons'
						href='https://github.com/chakal05'>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</span>{' '}
				<br />
				<span>
					{' '}
					{`${new Date().getFullYear()} | `}{' '}
					<a
                        className='myIcons'
                        style={{textDecoration:'none'}}
						href='https://www.chakirkhaire.com/'>
						Chakir Khaire
					</a>
				</span>
			</p>
		</div>
	);
}
