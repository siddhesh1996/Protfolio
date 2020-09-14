let config = {};
config.URL_BASE = window.location.origin;
config.IMG_BASE = '/images';
config.IMG_EXT = {
  png: '.png',
  jpg: '.jpg'
}
config.MENU = [
  {
      id: 1,
      transKey: 'Home',
      isRemove: false,
      isHide: false,
      isDisable: false,
      isMaster: false,
      isClickable: true,
      link: '/home',
      isActive: false,
      authRequired: false,
      class: '',
  }
];

export default config;
