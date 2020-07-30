"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Estimate = _interopRequireDefault(require("./Estimate"));

var _MetaIndexObject = _interopRequireDefault(require("./MetaIndexObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */
class EstimateListResponse {
  constructor(success, error, data, meta) {
    EstimateListResponse.initialize(this, success, error, data, meta);
  }

  static initialize(obj, success, error, data, meta) {
    obj['success'] = success;
    obj['error'] = error;
    obj['data'] = data;
    obj['meta'] = meta;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EstimateListResponse();

      if (data.hasOwnProperty('success')) {
        obj['success'] = _ApiClient.default.convertToType(data['success'], 'Boolean');
      }

      if (data.hasOwnProperty('error')) {
        obj['error'] = _ApiClient.default.convertToType(data['error'], Object);
      }

      if (data.hasOwnProperty('data')) {
        obj['data'] = _ApiClient.default.convertToType(data['data'], [_Estimate.default]);
      }

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = _MetaIndexObject.default.constructFromObject(data['meta']);
      }
    }

    return obj;
  }

}

EstimateListResponse.prototype['success'] = undefined;
EstimateListResponse.prototype['error'] = undefined;
EstimateListResponse.prototype['data'] = undefined;
EstimateListResponse.prototype['meta'] = undefined;
var _default = EstimateListResponse;
exports.default = _default;