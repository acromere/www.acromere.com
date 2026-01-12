import {Icon} from './Icon.tsx';

export function Header() {
	return (
					<>
						<div className='header'>
							<div className='logo'>
								<a href="/">{Icon.LOGO}Acromere</a>
							</div>
							<div className='menu'>
								<a className='about' href='/about'>About</a>
							</div>
						</div>
					</>
	);
}
