/**
 * This is a base class for all OData request handler classes like odata_get, odata_put, ...
 * It exposes functions that are used by all derived classes
 * @type {BaseRequestHandler}
 */
export class BaseRequestHandler {
	oDataServerConfig:any;

	/**
	 * sets the config object that was created from the options object of the n-odata-server component
	 * @param config
	 * @private
	 */
	setConfig(config) {
		_setConfig.call(this, config)
	};

	/**
	 * Sets the OData-Version response header. This must be delivered by an OData-Server
	 * @param res
	 * @private
	 */
	setODataVersion(res, version: string) {
		// default for OData version is 4.0
		if(!version) {
			version = "4.0"
		}
		if(version === "4.0") {
			res.set('OData-Version', version);
		} else if(version === "2.0") {
			res.set('dataserviceversion', version);
		}

	}
}


/**
 * sets the config object that was created from the options object of the n-odata-server component
 * @param config
 * @private
 */
function _setConfig(config) {
	this.oDataServerConfig = config;
}



