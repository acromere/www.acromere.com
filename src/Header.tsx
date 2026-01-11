import {Icon} from './Icon.tsx';

export function Header() {
	return (
					<>
						<div className='header debug'>
							<h1>
								<picture className='logo debug'>
									<source srcSet={Icon.LOGO_LIGHT} media="(prefers-color-scheme: light)"/>
									<source srcSet={Icon.LOGO_DARK} media="(prefers-color-scheme: dark)"/>
									<img className='debug' src="." alt="ACM"/>
								</picture>
								<span className='debug'>Acromere</span>
							</h1>
						</div>
					</>
	);
}
