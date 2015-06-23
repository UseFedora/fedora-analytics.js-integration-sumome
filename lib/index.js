
/**
 * Module dependencies.
 */

var integration = require('analytics.js-integration');
var push = require('global-queue')('SumoMe');

/**
 * Expose `SumoMe` integration.
 */


module.exports = exports = function(analytics) {
  analytics.addIntegration(SumoMe);
};
var SumoMe = exports.Integration = integration('SumoMe')
  .assumesPageview()
  .global('sumo')
  .option('siteId', '')
  .tag('<script src="//load.sumome.com/" data-sumo-site-id={{siteId}}>')
  .readyOnInitialize();

SumoMe.on('construct', function(integration) {
});

/**
 * Initialize.
 *
 * @api public
 */

SumoMe.prototype.initialize = function() {
  var options = this.options;
  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

SumoMe.prototype.loaded = function() {
  return !!(window.sumo);
};
