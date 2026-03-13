export default class Platform {

  static ANY: Platform = {
    KEY: 'card',
    NAME: 'Any Platform',
    ICON: 'jar',
    INSTALLER_EXT: 'jar',
  };

  static LINUX: Platform = {
    KEY: 'linux',
    NAME: 'Linux',
    ICON: 'linux',
    INSTALLER_EXT: 'deb',
  };

  static MACOS: Platform = {
    KEY: 'macosx',
    NAME: 'Mac OS',
    ICON: 'apple',
    INSTALLER_EXT: 'dmg',
  };

  static WINDOWS: Platform = {
    KEY: 'windows',
    NAME: 'Windows',
    ICON: 'windows',
    INSTALLER_EXT: 'msi',
  }

  static CURRENT: Platform;

  KEY: string = '';
  NAME: string ='';
  ICON: string = '';
  INSTALLER_EXT: string = '';

  static {
    let platform = window.navigator.platform.toLocaleLowerCase();
    if (platform.startsWith('lin')) {
      Platform.CURRENT = Platform.LINUX;
    } else if (platform.startsWith('mac')) {
      Platform.CURRENT = Platform.MACOS;
    } else if (platform.startsWith('win')) {
      Platform.CURRENT = Platform.WINDOWS;
    }
  }

}
