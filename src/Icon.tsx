import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library as FontAwesomeLibrary} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

FontAwesomeLibrary.add(fas, far, fab)

export default class Icon {
  static DOWNLOAD_ROOT = 'https://www.acromere.com/download';

  /* URL Definitions */
  static ACROMERE_DARK = new URL('./image/acromere-dark.png', import.meta.url);
  static ACROMERE_LIGHT = new URL('./image/acromere-light.png', import.meta.url);
  static XENON_DARK = new URL('./image/xenon-dark.png', import.meta.url);
  static XENON_LIGHT = new URL('./image/xenon-light.png', import.meta.url);
  static EMPTY_PIXEL = new URL('./image/empty-pixel.png', import.meta.url);

  static ACORN_LIGHT = new URL('./image/acorn.png', import.meta.url);
  static AVEON_LIGHT = new URL('./image/aveon.png', import.meta.url);
  static CARTA_LIGHT = new URL('./image/carta.png', import.meta.url);
  static MAZER_LIGHT = new URL('./image/mazer.png', import.meta.url);
  static RECON_LIGHT = new URL('./image/recon.png', import.meta.url);
  // static WEAVE_LIGHT = new URL('./image/weave.png', import.meta.url);
  // static WEAVE_LIGHT = new URL('./image/weave.png', import.meta.url);

  static WEAVE_LIGHT = new URL( Icon.DOWNLOAD_ROOT + '/latest/weave/product/icon?theme=light', import.meta.url);
  static WEAVE_DARK = new URL( Icon.DOWNLOAD_ROOT + '/latest/weave/product/icon?theme=dark', import.meta.url);

  // Needs to be defined before other icons
  static BROKEN = <FontAwesomeIcon className='icon broken' icon={['fas', 'link-slash']}/>;

  /* Icon Definitions (Alphabetical order) */

  static ACORN = (
    <picture>
      <source srcSet={Icon.ACORN_LIGHT.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static ACROMERE = (
    <picture>
      <source srcSet={Icon.ACROMERE_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.ACROMERE_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static AVEON = (
    <picture>
      <source srcSet={Icon.AVEON_LIGHT.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static CARTA = (
    <picture>
      <source srcSet={Icon.CARTA_LIGHT.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static CAMEO = Icon.ACROMERE;
  static CUREX = Icon.ACROMERE;
  static CURVE = Icon.ACROMERE;
  static EMPTY = <img src={Icon.EMPTY_PIXEL.toString()} className='icon' alt=''/>
  static FROWN = <FontAwesomeIcon className='icon' icon={['fas', 'frown']}/>;
  static LOGO = Icon.ACROMERE;
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
  static SEENC = Icon.ACROMERE;
  static SYSUP = Icon.ACROMERE;
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
  static XENOS = Icon.ACROMERE;
  static ZARRA = Icon.ACROMERE;
  static ZENNA = Icon.ACROMERE;
  static ZERRA = Icon.ACROMERE;
  static ZEVRA = Icon.ACROMERE;
}