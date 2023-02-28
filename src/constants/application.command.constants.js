/**
 * @file application.command.constants.js
 * @module application.command.constants
 * @description A file to hold all of the client application command constants.
 * So none of the constants in this file should be generic/system/framework constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports

// External imports
import hayConst from '@haystacks/constants';
const {bas, wrd} = hayConst;

// ********************************
// ApplicationSystem Commands in order
// ********************************
export const cinstructions = wrd.cinstructions; // instructions
export const capplicationHelp = wrd.capplication + wrd.cHelp; // applicationHelp
export const capplicationWorkflowHelp = wrd.capplication + wrd.cWorkflow + wrd.cHelp; // applicationWorkflowHelp

// ********************************
// ApplicationTest Commands in order
// ********************************
export const cvalidateApplicationConstants = wrd.cvalidate + wrd.cApplication + wrd.cConstants; // validateApplicationConstants
export const cvalidateApplicationCommandAliases = wrd.cvalidate + wrd.cApplication + wrd.cCommand + wrd.cAliases; // validateApplicationCommandAliases
export const cvalidateApplicationWorkflows = wrd.cvalidate + wrd.cApplication + wrd.cWorkflows; // validateApplicationWorkflows
export const callApplicationValidations = wrd.call + wrd.cApplication + wrd.cValidations; // allApplicationValidations

// ********************************
// Tutoring Commands in order
// ********************************
export const ccreateAccount = wrd.ccreate + wrd.cAccount; // createAccount
export const cdeleteAccount = wrd.cdelete + wrd.cAccount; // deleteAccount
export const clogin = wrd.clogin; // login
export const clogout = wrd.clogout; // logout
export const cstartLesson = wrd.cstart + wrd.cLesson; // startLesson
export const cprintRecords = wrd.cprint + wrd.cRecords; // printRecords
export const cdestroyRecords = wrd.cdestroy + wrd.cRecords; // destroyRecords

// ********************************
// Application Workflows in order
// ********************************
export const cApplicationStartupWorkflow = wrd.cWorkflow + bas.cSpace + wrd.capplication + wrd.cStartup; // Workflow applicationStartup