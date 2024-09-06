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

// ***********************************************
// configuration test commands in order
// ***********************************************
export const csetEnableLessonPlanLimitingFactors = wrd.cset + wrd.cEnable + wrd.cLesson + wrd.cPlan + wrd.cLimiting + wrd.cFactors; // setEnableLessonPlanLimitingFactors
export const csetEnableIndividualizedLessonPassingScores = wrd.cset + wrd.cEnable + wrd.cIndividualized + wrd.cLesson + wrd.cPassing + wrd.cScores; // setEnableIndividualizedLessonPassingScores
export const csetLessonPlanSuccessLimitingAccuracy = wrd.cset + wrd.cLesson + wrd.cPlan + wrd.cSuccess + wrd.cLimiting + wrd.cAccuracy; // setLessonPlanSuccessLimitingAccuracy
export const csetLessonPlanSuccessLimitingSpeed = wrd.cset + wrd.cLesson + wrd.cPlan + wrd.cSuccess + wrd.cLimiting + wrd.cSpeed; // setLessonPlanSuccessLimitingSpeed
export const csetAdhereToCurriculumOrderRequirement = wrd.cset + wrd.cAdhere+ wrd.cTo + wrd.cCurriculum + wrd.cOrder + wrd.cRequirement; // setAdhereToCurriculumOrderRequirement
export const cmanuallySetCurriculumIndex = wrd.cmanually + wrd.cSet + wrd.cCurriculum + wrd.cIndex; // manuallySetCurriculumIndex

// ********************************
// Tutoring Commands in order
// ********************************
export const ccreateAccount = wrd.ccreate + wrd.cAccount; // createAccount
export const cprintAccountsData = wrd.cprint + wrd.cAccounts + wrd.cData; // printAccountsData
export const cprintAccountData = wrd.cprint + wrd.cAccount + wrd.cData; // printAccountData
export const cdeleteAccount = wrd.cdelete + wrd.cAccount; // deleteAccount
export const clogin = wrd.clogin; // login
export const clogout = wrd.clogout; // logout
export const cstartLesson = wrd.cstart + wrd.cLesson; // startLesson
export const cgenerateUserReport = wrd.cgenerate + wrd.cUser + wrd.cReport; // generateUserReport
export const cprintRecords = wrd.cprint + wrd.cRecords; // printRecords
export const cdestroyRecords = wrd.cdestroy + wrd.cRecords; // destroyRecords

// ********************************
// Application Workflows in order
// ********************************
export const cApplicationStartupWorkflow = wrd.cWorkflow + bas.cSpace + wrd.capplication + wrd.cStartup; // Workflow applicationStartup