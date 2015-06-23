
var Analytics = require('analytics.js').constructor;
var integration = require('analytics.js-integration');
var sandbox = require('clear-env');
var tester = require('analytics.js-integration-tester');
var plugin = require('../lib/');

describe('SumoMe', function() {
  var SumoMe = plugin.Integration;
  var analytics;
  var ga;

  beforeEach(function() {
    analytics = new Analytics();
    analytics.use(plugin);
    analytics.use(tester);
  });

  afterEach(function() {
    analytics.restore();
    analytics.reset();
    sandbox();
  });

  it('should have the right settings', function() {
    analytics.compare(SumoMe, integration('SumoMe')
      .readyOnInitialize()
      .assumesPageview()
      .global('sumo')
      .option('siteId', '')
      .tag('<script src="//load.sumome.com/" data-sumo-site-id={{siteId}}>')
      .global('sumo')
      .option('siteId', ''));
  });

  describe('Universal', function() {
    var settings = {
      siteId: 'UA-27033709-12'
    };

    beforeEach(function() {
      sumo = new SumoMe(settings);
      analytics.add(sumo);
    });

    afterEach(function() {
      sumo.reset();
    });

    describe('before loading', function() {
      beforeEach(function() {
        analytics.stub(sumo, 'load');
      });
  });
  });
})
