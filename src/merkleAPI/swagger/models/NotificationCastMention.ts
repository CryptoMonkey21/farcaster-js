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
import { User } from "./User";
import { NotificationCastMentionContent } from "./NotificationCastMentionContent";
/**
 *
 * @export
 * @interface Def48
 */
export interface NotificationCastMention {
  /**
   *
   * @type {string}
   * @memberof Def48
   */
  type: "cast-mention";
  /**
   *
   * @type {string}
   * @memberof Def48
   */
  id: string;
  /**
   *
   * @type {Def18}
   * @memberof Def48
   */
  timestamp: number;
  /**
   *
   * @type {User}
   * @memberof Def48
   */
  actor: User;
  /**
   *
   * @type {NotificationCastMentionContent}
   * @memberof Def48
   */
  content: NotificationCastMentionContent;
}
