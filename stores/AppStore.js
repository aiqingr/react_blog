import { EventEmitter } from 'events';
import _ from 'lodash';

export default _.extend({}, EventEmitter.prototype, {
  //Initial data
  data: {
    ready: false,
    globals: {},
    pages: [],
    item_num: 6
  },

  //Emit change events
  emitChange: function () {
    this.emit('change');
  },

  //Add change listener
  addChangeListener: function() {
    this.on('change', callback);
  },

  //Remove change listener
  removeChangeListener: function() {
    this.removeListener('change', callback);
  }
});
