import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
	delModel: function(model) {
 		var confirmation = confirm('Are you sure?');

  		if (confirmation) {
    		model.destroyRecord();
  			}
		}
 	}
});
