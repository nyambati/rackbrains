const withTypeScript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFont = require('next-fonts');

module.exports = withTypeScript(withCSS(withFont(withImages())));
