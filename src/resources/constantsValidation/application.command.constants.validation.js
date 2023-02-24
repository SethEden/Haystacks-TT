/**
 * @file application.command.constants.validation.js
 * @module application.command.constants.validation
 * @description Contains all validations for named application command constants.
 * @requires module:application.command.constants
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cmd from '../../constants/application.command.constants.js';

/**
 * @function applicationCommandConstantsValidation
 * @description Initializes the application command constants validation data objects array.
 * @return {array<Object<NamedCurve,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/02/24
 */
export const applicationCommandConstantsValidation = [
  // ********************************
  // ApplicationSystem Commands in order
  // ********************************
  {Name: 'capplicationHelp', Actual: app_cmd.capplicationHelp, Expected: 'applicationHelp'},
  {Name: 'capplicationWorkflowHelp', Actual: app_cmd.capplicationWorkflowHelp, Expected: 'applicationWorkflowHelp'},

  // ********************************
  // ApplicationTest Commands in order
  // ********************************
  {Name: 'cvalidateApplicationConstants', Actual: app_cmd.cvalidateApplicationConstants, Expected: 'validateApplicationConstants'},
  {Name: 'cvalidateApplicationCommandAliases', Actual: app_cmd.cvalidateApplicationCommandAliases, Expected: 'validateApplicationCommandAliases'},
  {Name: 'cvalidateApplicationWorkflows', Actual: app_cmd.cvalidateApplicationWorkflows, Expected: 'validateApplicationWorkflows'},
  {Name: 'callApplicationValidations', Actual: app_cmd.callApplicationValidations, Expected: 'allApplicationValidations'},

  // ********************************
  // Tutoring Commands in order
  // ********************************
  {Name: 'ccommand10', Actual: app_cmd.ccommand10, Expected: 'command10'}
];