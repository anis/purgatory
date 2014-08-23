/**
 * @depend purgatory/namespace.js
 * @depend purgatory/eventManager.js
 */
(function () {
    "use strict";

    // Boot up the application as soon as 'document' is ready
    window.addEventListener('load', function () {
        purgatory.eventManager.build();
    });
}());