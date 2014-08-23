(function () {
    "use strict";

    /**
     * @class
     *
     * @param {string} label Label of the event
     * @param {Date}   date  Date of the event
     */
    purgatory.model.Event = function Event(label, date) {
        /*
         * Self-reference
         *
         * @type {purgatory.Event}
         * @readonly
         */
        var that = this;

        /**
         * Returns the label of the event
         *
         * @returns {string}
         */
        this.getLabel = function () {
            return label;
        };

        /**
         * Returns the date of the event
         *
         * @returns {Date}
         */
        this.getDate = function () {
            return date;
        };

        /**
         * Returns the remaining time before current event, in milliseconds
         *
         * @returns {number} Remaining time, in milliseconds
         */
        this.getRemainingTime = function () {
            var split = Date.prototype.splitDuration(+(that.getDate()) - (new Date()));
            return split.days + ' jours ' + split.hours + ' heures ' + split.minutes + ' minutes et ' + split.seconds + ' secondes'; 
        };
    };
}());