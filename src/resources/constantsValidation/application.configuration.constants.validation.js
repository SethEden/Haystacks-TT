/**
 * @file application.configuration.constants.validation.js
 * @module application.configuration.constants.validation
 * @description Contains all validations fro named application configuration constants.
 * @requires module:application.configuration.constants
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cfg from '../../constants/application.configuration.constants.js';

/**
 * @function applicationConfigurationConstantsValidation
 * @description Initializes the application configuration constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/02/2
 */
export const applicationConfigurationConstantsValidation = [
  {Name: 'cappAccountsPath', Actual: app_cfg.cappAccountsPath, Expected: 'appAccountsPath'},
  {Name: 'cappLessonsPath', Actual: app_cfg.cappLessonsPath, Expected: 'appLessonsPath'},
  {Name: 'csaveTypingRecords', Actual: app_cfg.csaveTypingRecords, Expected: 'saveTypingRecords'},
  {Name: 'cenableLessonPlanLimitingFactors', Actual: app_cfg.cenableLessonPlanLimitingFactors, Expected: 'enableLessonPlanLimitingFactors'},
  {Name: 'clessonPlanSuccessLimitingAccuracy', Actual: app_cfg.clessonPlanSuccessLimitingAccuracy, Expected: 'enableLessonPlanLimitingAccuracy'},
  {Name: 'cenableLessonPlanLimitingSpeed', Actual: app_cfg.cenableLessonPlanLimitingSpeed, Expected: 'enableLessonPlanLimitingSpeed'},
  {Name: 'cCurrentUser', Actual: app_cfg.cCurrentUser, Expected: 'CurrentUser'},
];