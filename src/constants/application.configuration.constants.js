/**
 * @file application.configuration.constants.js
 * @module application.configuration.constants
 * @description A file to hold all of the client configuration constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {wrd} = hayConst;

export const cappAccountsPath = wrd.capp + wrd.cAccounts + wrd.cPath; // appAccountsPath
export const cappLessonsPath = wrd.capp + wrd.cLessons + wrd.cPath; // appLessonsPath
export const csaveTypingRecords = wrd.csave + wrd.cTyping + wrd.cRecords; // saveTypingRecords
export const cenableLessonPlanLimitingFactors = wrd.cenable + wrd.cLesson + wrd.cPlan + wrd.cLimiting + wrd.cFactors; // enableLessonPlanLimitingFactors
export const clessonPlanSuccessLimitingAccuracy = wrd.clesson + wrd.cPlan + wrd.cSuccess + wrd.cLimiting + wrd.cAccuracy; // lessonPlanSuccessLimitingAccuracy
export const clessonPlanSuccessLimitingSpeed = wrd.clesson + wrd.cPlan + wrd.cSuccess + wrd.cLimiting + wrd.cSpeed; // lessonPlanSuccessLimitSpeed
export const cCurrentUser = wrd.cCurrent + wrd.cUser; // CurrentUser