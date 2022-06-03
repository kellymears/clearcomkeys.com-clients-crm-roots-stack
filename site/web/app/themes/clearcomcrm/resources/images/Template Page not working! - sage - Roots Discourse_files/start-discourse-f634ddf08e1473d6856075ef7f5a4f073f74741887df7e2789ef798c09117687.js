document.addEventListener("discourse-booted", (e) => {
  const config = e.detail;
  const app = require(`${config.modulePrefix}/app`)["default"].create(config);
  app.start();
});

(function () {
  if (window.unsupportedBrowser) {
    throw "Unsupported browser detected";
  }

  // TODO: Remove this and have resolver find the templates
  const prefix = "discourse/templates/";
  const adminPrefix = "admin/templates/";
  let len = prefix.length;
  Object.keys(requirejs.entries).forEach(function (key) {
    if (key.indexOf(prefix) === 0) {
      Ember.TEMPLATES[key.slice(len)] = require(key).default;
    } else if (key.indexOf(adminPrefix) === 0) {
      Ember.TEMPLATES[key] = require(key).default;
    }
  });

  window.__widget_helpers = require("discourse-widget-hbs/helpers").default;

  // TODO: Eliminate this global
  window.virtualDom = require("virtual-dom");

  let element = document.querySelector(
    `meta[name="discourse/config/environment"]`
  );
  const config = JSON.parse(
    decodeURIComponent(element.getAttribute("content"))
  );
  const event = new CustomEvent("discourse-booted", { detail: config });
  document.dispatchEvent(event);
})();
//# sourceMappingURL=start-discourse-91e64639509fc02c56f1839e3a294f1a0ae116f3b22b083143d871b2c58f1cfd.map
//!

;