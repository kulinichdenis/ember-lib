import Ember from 'ember';

export default Ember.Controller.extend({
	responseMessage: '',
	isValid: Ember.computed.match('model.email', /^.+@.+\..+$/)   
}); 
