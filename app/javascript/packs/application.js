// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require popper
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap
//= require_tree .

require("@popperjs/core");
import "bootstrap";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
// application.js

import $ from "jquery";
window.jQuery = $;
window.$ = $;

import "popper.js";

Rails.start();
ActiveStorage.start();

// Import the specific modules you may need (Modal, Alert, etc)
import { Tooltip, Popover } from "bootstrap";

// The stylesheet location we created earlier
require("../stylesheets/application.scss");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js", { scope: "/" }).then(
      function (registration) {
        console.log(
          "[ServiceWorker Client]",
          "registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("[ServiceWorker Client]", "registration failed: ", err);
      }
    );
  });
}

// If you're using Turbolinks. Otherwise simply use: jQuery(function () {
document.addEventListener("turbolinks:load", () => {
  // Both of these are from the Bootstrap 5 docs
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl);
  });

  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl);
  });
});

Rails.start();
Turbolinks.start();
ActiveStorage.start();

require("trix")
require("@rails/actiontext")