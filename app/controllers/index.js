import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	actions: {
	    saveInvitation: function() {
	      var _that = this;
	      var email = this.get('emailAddress');
				var newInvitation = this.store.createRecord('invitation', {email:email});
	      newInvitation.save().then(function(response){
	      	console.log("Email address is saved")
	      	_that.set('responseMessage', "Thank you! We've just saved your email address: " + _that.get('emailAddress'));
	      	_that.set('emailAddress', '');
	      })
	    }
  }
}); 
