(function() {
    /**
     * @typedef {Object} SplitDuration
     * @property {number} seconds Number of seconds
     * @property {number} minutes Number of minutes
     * @property {number} hours   Number of hours
     * @property {number} days    Number of days
     */

    /**
     * Splits the given duration into its corresponding number of seconds, minutes, hours and days
     *
     * @param {number} duration A duration, in milliseconds
     *
     * @returns {SplitDuration}
     */
    Date.prototype.splitDuration = function(duration) {
        duration = (Math.abs(duration) / 1000) >> 0;

        // Seconds
        var result = {
            seconds : duration % 60
        };

        // Minutes
        duration = Math.floor(duration / 60);
        result.minutes = duration % 60;

        // Hours
        duration = Math.floor(duration / 60);
        result.hours = duration % 24;

        // Days
        result.days = Math.floor(duration / 24);

        return result;
    };
}());