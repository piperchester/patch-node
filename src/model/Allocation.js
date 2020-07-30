/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from '../ApiClient';

class Allocation {
  constructor() {
    Allocation.initialize(this);
  }

  static initialize(obj) {}

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Allocation();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('production')) {
        obj['production'] = ApiClient.convertToType(
          data['production'],
          'Boolean'
        );
      }

      if (data.hasOwnProperty('mass_g')) {
        obj['mass_g'] = ApiClient.convertToType(data['mass_g'], 'Number');
      }
    }
    return obj;
  }
}

Allocation.prototype['id'] = undefined;

Allocation.prototype['production'] = undefined;

Allocation.prototype['mass_g'] = undefined;

export default Allocation;
