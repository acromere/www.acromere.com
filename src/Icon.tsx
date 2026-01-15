import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library as FontAwesomeLibrary} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

FontAwesomeLibrary.add(fas, far, fab)

export class Icon {
  /* URL Definitions */
  static ACROMERE_DARK = new URL('./image/acromere-dark.png', import.meta.url);
  static ACROMERE_LIGHT = new URL('./image/acromere-light.png', import.meta.url);
  static XENON_DARK = new URL('./image/xenon-dark.png', import.meta.url);
  static XENON_LIGHT = new URL('./image/xenon-light.png', import.meta.url);
  static EMPTY_PIXEL = new URL('./image/empty-pixel.png', import.meta.url);

  /* Icon Definitions (Alphabetical order) */

  static ACROMERE = (
    <picture>
      <source srcSet={Icon.ACROMERE_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.ACROMERE_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
  static EMPTY = <img src={Icon.EMPTY_PIXEL.toString()} className='icon' alt=''/>
  static FROWN = <FontAwesomeIcon className='icon' icon={['fas', 'frown']}/>;
  static LOGO = Icon.ACROMERE;
  static OTHER = <FontAwesomeIcon className='icon' icon={['fas', 'ellipsis']}/>;
  static XENON = (
    <picture>
      <source srcSet={Icon.XENON_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.XENON_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
}