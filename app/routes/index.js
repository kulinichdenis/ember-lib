import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.createRecord('invitation');
	},

	actions:{
		saveInvitation: function(invitation){
			var _that = this; 
			invitation.save().then(function(response){
				_that.controller.set('responseMessage', true)
				_that.controller.set('email_id', response.get('id'));

			});	
		}
	}
})