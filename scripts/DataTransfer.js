const Transfer = {
    _events: {},
    dispatch: function(event, data) {
        if (!this._events[event]) {
            return false;
        }
        for (let val of this._events[event]) {
            val(data);
        }
    },
    subscribe: function(event, callback) {
        if (!this._events[event]) {
            this._events[event] = [];
        }
        this._events[event].push(callback);
    }
}

module.exports = Transfer;
