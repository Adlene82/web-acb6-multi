const { seoType } = require('./objects/seo');
const { linkType } = require('./objects/link');
const { ctaType } = require('./objects/cta');
const { statType } = require('./objects/stat');
const { imageWithAltType } = require('./objects/imageWithAlt');
const { contactMethodType } = require('./objects/contactMethod');
const { socialLinkType } = require('./objects/socialLink');
const { themeSettingsType } = require('./objects/themeSettings');
const { siteSettingsType } = require('./documents/siteSettings');
const { homePageType } = require('./documents/homePage');
const { aboutPageType } = require('./documents/aboutPage');
const { contactPageType } = require('./documents/contactPage');
const { expertiseType } = require('./documents/expertise');
const { realisationsType } = require('./documents/realisations');

const schemaTypes = [
  seoType,
  linkType,
  ctaType,
  statType,
  imageWithAltType,
  contactMethodType,
  socialLinkType,
  themeSettingsType,
  siteSettingsType,
  homePageType,
  aboutPageType,
  contactPageType,
  expertiseType,
  realisationsType,
];

module.exports = { schemaTypes };
