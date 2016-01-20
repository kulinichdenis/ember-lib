import Ember from 'ember';

export default Ember.Controller.extend({
	mailAddress: '',
	message: '',
	isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
	hasText: Ember.computed.gte('model.message.length', 5),
	isSuccess: Ember.computed.and('isValid', 'hasText')
});
