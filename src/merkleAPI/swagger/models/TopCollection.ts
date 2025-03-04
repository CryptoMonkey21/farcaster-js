/* tslint:disable */
/* eslint-disable */
/**
 * Merkle API
 * API documentation for all publicly exposed APIs provided by Merkle Manufactory, Inc for Farcaster V2.
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AssetCollection } from "./AssetCollection";
import { AssetEvent } from "./AssetEvent";
/**
 *
 * @export
 * @interface Def39
 */
export interface TopCollection {
  /**
   *
   * @type {AssetCollection}
   * @memberof Def39
   */
  collection: AssetCollection;
  /**
   *
   * @type {AssetEvent}
   * @memberof Def39
   */
  firstEvent: AssetEvent;
}
