import Config from './Config';

export default class Image {
  // URL Definitions
  static XENON_WELCOME_2x = new URL(Config.SCREENSHOT_ROOT + "/welcome-tool@2x.png", import.meta.url);
  static XENON_WELCOME_1x = new URL(Config.SCREENSHOT_ROOT + "/welcome-tool.png", import.meta.url);
  static XENON_ABOUT_2x = new URL(Config.SCREENSHOT_ROOT + "/about-tool@2x.png", import.meta.url);
  static XENON_ABOUT_1x = new URL(Config.SCREENSHOT_ROOT + "/about-tool.png", import.meta.url);

  static CARTESIA_JET_2x = new URL(Config.SCREENSHOT_ROOT + "/mod/carta/sample-jet@2x.png", import.meta.url);
  static CARTESIA_JET_1x = new URL(Config.SCREENSHOT_ROOT + "/mod/carta/sample-jet.png", import.meta.url);

  // Image Set Definitions
  static xenonWelcomeSet = Image.XENON_WELCOME_2x + " 2x, " + Image.XENON_WELCOME_1x + " 1x";
  static xenonAboutSet = Image.XENON_ABOUT_2x + " 2x, " + Image.XENON_ABOUT_1x + " 1x";
  static cartesiaJetSet = Image.CARTESIA_JET_2x + " 2x, " + Image.CARTESIA_JET_1x + " 1x";

  // Image Tag Definitions
  static XENON_WELCOME = <img src="." srcSet={Image.xenonWelcomeSet} alt="Xenon Welcome Tool"/>;
  static XENON_ABOUT = <img src="." srcSet={Image.xenonAboutSet} alt="Xenon About Tool"/>;
  static CARTESIA_JET = <img src="." srcSet={Image.cartesiaJetSet} alt="Cartesia Design Tool"/>;
}
