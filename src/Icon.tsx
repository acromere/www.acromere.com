import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export class Icon {
  static LOGO_DARK = new URL('./image/acromere-dark.png', import.meta.url);
  static LOGO_LIGHT = new URL('./image/acromere-light.png', import.meta.url);

  static FROWN = <FontAwesomeIcon icon={['fas', 'frown']}/>;

  static LOGO = (
    <picture>
      <source srcSet={Icon.LOGO_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.LOGO_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." alt="ACM"/>
    </picture>
  )
  static XENON = (
    <picture>
      <source srcSet={Icon.LOGO_LIGHT.toString()} media="(prefers-color-scheme: light)"/>
      <source srcSet={Icon.LOGO_DARK.toString()} media="(prefers-color-scheme: dark)"/>
      <img src="." alt="ACM"/>
    </picture>
  )
}