import {Icon} from './Icon.tsx';

export function Header() {
	return (
					<>
						<div className='header'>
							<div className='row'>
								<div className='banner'>
									<a href="/">{Icon.LOGO}Acromere</a>
								</div>
								<div className='menu'>
									<a href='/products'>Products</a>
								</div>
								<div className='menu'>
									<a href='/projects'>Projects</a>
								</div>
							</div>
							<div className='menu'>
								<a href='/about'>About</a>
							</div>
						</div>
					</>
	);
}
