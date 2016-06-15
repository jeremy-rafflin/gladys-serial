var createStateRadio = require('./createStateRadio.js');

module.exports = function(data){
	try{
		var json = JSON.parse(data);

		// if the JSON is a 433Mhz value
		if(json.action && json.action == 'received' && json.value){

			// we create the state and the device if he does not exist
			createStateRadio(json);
		} else if(json.devicetype && json.value){

			// if the JSON is a raw deviceState, we create it
			gladys.deviceState.create(json);
		}

	} catch(e){
		sails.log.warn('Gladys serial : cannot parse JSON received from arduino : ' + e);
	}
};