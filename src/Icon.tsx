import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library as FontAwesomeLibrary} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import Config from './Config';

FontAwesomeLibrary.add(fas, far, fab)

export default class Icon {
  // URL Definitions
  static EMPTY_PIXEL = new URL('./image/1x1.png', import.meta.url);
  //static LOGO_LIGHT = new URL('./image/logo-light.png', import.meta.url);
  //static LOGO_DARK = new URL('./image/logo-dark.png', import.meta.url);
  static LOGO_LIGHT = new URL( Config.ICON_ROOT + '/latest/www.acromere.com/product/icon?theme=light', import.meta.url);
  static LOGO_DARK = new URL( Config.ICON_ROOT + '/latest/www.acromere.com/product/icon?theme=dark', import.meta.url);

  static ACORN_LIGHT = new URL( Config.ICON_ROOT + '/latest/acorn/product/icon?theme=light', import.meta.url);
  static ACORN_DARK = new URL( Config.ICON_ROOT + '/latest/acorn/product/icon?theme=dark', import.meta.url);
  static AVEON_LIGHT = new URL('./image/aveon.png', import.meta.url);
  static CARTA_LIGHT = new URL('./image/carta.png', import.meta.url);
  static MAZER_LIGHT = new URL('./image/mazer.png', import.meta.url);
  static RECON_LIGHT = new URL('./image/recon.png', import.meta.url);

  static SEENC_LIGHT = new URL( Config.ICON_ROOT + '/latest/seenc/product/icon?theme=light', import.meta.url);
  static SEENC_DARK = new URL( Config.ICON_ROOT + '/latest/seenc/product/icon?theme=dark', import.meta.url);
  static WEAVE_LIGHT = new URL( Config.ICON_ROOT + '/latest/weave/product/icon?theme=light', import.meta.url);
  static WEAVE_DARK = new URL( Config.ICON_ROOT + '/latest/weave/product/icon?theme=dark', import.meta.url);
  static XENON_LIGHT = new URL( Config.ICON_ROOT + '/latest/xenon/product/icon?theme=light', import.meta.url);
  static XENON_DARK = new URL( Config.ICON_ROOT + '/latest/xenon/product/icon?theme=dark', import.meta.url);

  // Needs to be defined before other icons
  static BROKEN = <FontAwesomeIcon className='icon broken' icon={['fas', 'link-slash']}/>;

  /* Icon Definitions (Alphabetical order) */

  static ACORN = (
    <picture>
      <source srcSet={Icon.ACORN_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.ACORN_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static LOGO = (
    <picture>
      <source srcSet={Icon.LOGO_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.LOGO_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static AVEON = (
    <picture>
      <source srcSet={Icon.AVEON_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.AVEON_LIGHT.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static CARTA = (
    <picture>
      <source srcSet={Icon.CARTA_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.CARTA_LIGHT.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static CAMEO = Icon.LOGO;
  static CUREX = Icon.LOGO;
  static CURVE = Icon.LOGO;
  static EMPTY = <img src={Icon.EMPTY_PIXEL.toString()} className='icon' alt=''/>
  static FROWN = <FontAwesomeIcon className='icon' icon={['fas', 'frown']}/>;
  static MAZER = (
    <picture>
      <source srcSet={Icon.MAZER_LIGHT.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static OTHER = <FontAwesomeIcon className='icon' icon={['fas', 'ellipsis']}/>;
  static RECON = (
    <picture>
      <source srcSet={Icon.RECON_LIGHT.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static SEENC = (
    <picture>
      <source srcSet={Icon.SEENC_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.SEENC_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static SYSUP = Icon.LOGO;
  static WEAVE = (
    <picture>
      <source srcSet={Icon.WEAVE_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.WEAVE_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static XENON = (
    <picture>
      <source srcSet={Icon.XENON_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.XENON_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static XENOS = Icon.LOGO;
  static ZARRA = Icon.LOGO;
  static ZENNA = Icon.LOGO;
  static ZERRA = Icon.LOGO;
  static ZEVRA = Icon.LOGO;
}