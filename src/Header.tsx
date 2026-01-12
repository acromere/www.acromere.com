import {Icon} from './Icon.tsx';

export function Header() {
	return (
					<>
						<div className='header'>
							<div className='menu'>
							<a>
								<picture className='logo'>
									<source srcSet={Icon.LOGO_LIGHT} media="(prefers-color-scheme: light)"/>
									<source srcSet={Icon.LOGO_DARK} media="(prefers-color-scheme: dark)"/>
									<img src="." alt="ACM"/>
								</picture>
								<span>Acromere</span>
							</a>
							</div>
						</div>
					</>
	);
}
