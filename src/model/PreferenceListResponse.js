/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';
import MetaIndexObject from './MetaIndexObject';
import Preference from './Preference';

class PreferenceListResponse {
  constructor(success, error, data, meta) {
    PreferenceListResponse.initialize(this, success, error, data, meta);
  }

  static initialize(obj, success, error, data, meta) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
    obj['meta'] = meta;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PreferenceListResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Preference]);
      }

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = MetaIndexObject.constructFromObject(data['meta']);
      }
    }
    return obj;
  }
}

PreferenceListResponse.prototype['success'] = undefined;

PreferenceListResponse.prototype['error'] = undefined;

PreferenceListResponse.prototype['data'] = undefined;

PreferenceListResponse.prototype['meta'] = undefined;

export default PreferenceListResponse;
