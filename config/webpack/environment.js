const { resolve } = require('path');
const { config, environment, Environment } = require('@rails/webpacker')

const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']  // Not a typo, we're still using popper.js here
}))

const WebpackerPwa = require('webpacker-pwa');
new WebpackerPwa(config, environment);

module.exports = environment
