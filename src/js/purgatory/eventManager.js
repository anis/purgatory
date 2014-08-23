/**
 * @depend model/Event.js
 * @depend ../utils/Date.extend.js
 */
(function () {
    "use strict";

    /**
     * @class
     * @memberof purgatory
     */
    function EventManager() {
        /***************************************************************************************************************
         * Private members
         **************************************************************************************************************/

        /*
         * A self-reference
         *
         * @type {purgatory.EventManager}
         * @readonly
         */
        var that = this;

        /*
         * List of registered events
         *
         * @type {Array.<purgatory.Event>}
         */
        var events = [];

        /*
         * Events container
         *
         * @type {HTMLElement}
         * @readonly
         */
        var container = document.getElementById('events-wrapper');

        /*
         * Creates an article for the given event
         *
         * @param {purgatory.Event} event Event
         *
         * @returns {HTMLElement}
         */
        function createArticle(event) {
            var article = document.createElement('article'),
                header  = document.createElement('header'),
                h1      = document.createElement('h1'),
                p       = document.createElement('p');

            h1.appendChild(document.createTextNode(event.getLabel()));
            header.appendChild(h1);
            article.appendChild(header);

            p.appendChild(document.createTextNode(event.getRemainingTime()));
            article.appendChild(p);

            return article;
        }

        /***************************************************************************************************************
         * Public members
         **************************************************************************************************************/

        /**
         * Builds the list of events
         *
         * @returns {purgatory.EventManager} A self-reference for method chaining
         */
        this.build = function () {
            // Empty the previous list
            while (container.childNodes.length > 0) {
                container.removeChild(container.firstChild);
            }

            // Create a new entry for each event
            for (var i = 0; i < events.length; i++) {
                container.appendChild(createArticle(events[i]));
            }

            return that;
        };

        /***************************************************************************************************************
         * "Constructor"
          **************************************************************************************************************/

        // Initialize the list of registered events (stored in local storage)
        events.push(new purgatory.model.Event("Christmas", new Date(new Date().getFullYear(), 11, 25)));
        events.push(new purgatory.model.Event("Anis's birthday", new Date(new Date().getFullYear(), 9, 25)));
    }

    window.addEventListener('load', function () {
        /**
         * @type purgatory.EventManager
         * @readonly
         */
        purgatory.eventManager = new EventManager();
    });
}());