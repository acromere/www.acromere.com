import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library as FontAwesomeLibrary} from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

FontAwesomeLibrary.add(fas, far, fab)

export class Icon {
  static LOGO_DARK = new URL('./image/acromere-dark.png', import.meta.url);
  static LOGO_LIGHT = new URL('./image/acromere-light.png', import.meta.url);

  static FROWN = <FontAwesomeIcon icon={['fas', 'frown']}/>;
  // static FROWN = <FontAwesomeIcon icon="fa-solid fa-frown"/>;

  static LOGO = (
    <picture>
      <source srcSet={Icon.LOGO_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.LOGO_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )

  static XENON = (
    <picture>
      <source srcSet={Icon.LOGO_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.LOGO_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." className='icon' alt="ACM"/>
    </picture>
  )
}