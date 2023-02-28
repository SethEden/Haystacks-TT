/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal Imports
import * as app_cmd from './application.command.constants.js';
import * as app_cfg from './application.configuration.constants.js';
import * as app_sys from './application.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, msg, num, sys, wrd} = hayConst;

// General application messages
export const crawAccountDataIs = wrd.craw + wrd.cAccount + wrd.cData + sys.cSpaceIsColonSpace; // rawAccountData is:
export const crawLessonsDataIs = wrd.craw + wrd.cLessons + wrd.cData + sys.cSpaceIsColonSpace; // rawLessonsData is:
export const cuserAccountDataIs = wrd.cuser + wrd.cAccount + wrd.cData + sys.cSpaceIsColonSpace; // userAccountData is:
export const cuserAccountKeyIs = wrd.cuser + wrd.cAccount + wrd.cKey + sys.cSpaceIsColonSpace; // userAccountKey is:
export const cuserAccountIs = wrd.cuser + wrd.cAccount + sys.cSpaceIsColonSpace; // userAccount is:
export const caccountNameIs = wrd.caccount + wrd.cName + sys.cSpaceIsColonSpace; // accountName is:
export const clessonsDataIs = wrd.clessons + wrd.cData + sys.cSpaceIsColonSpace; // lessonsData is:
export const clessonKeyIs = wrd.clesson + wrd.cKey + sys.cSpaceIsColonSpace; // lessonKey is:
export const clessonDataIs = wrd.clesson + wrd.cData + sys.cSpaceIsColonSpace; // lessonData is:
export const clessonNameArrayIs = wrd.clesson + wrd.cName + wrd.cArray + sys.cSpaceIsColonSpace; // lessonNameArray is:
export const clessonNameIs = wrd.clesson + wrd.cName + sys.cSpaceIsColonSpace; // lessonName is:
export const cnewAccountIs = wrd.cnew + wrd.cAccount + sys.cSpaceIsColonSpace; // newAccount is:
export const cstoredAccountDataIs = wrd.cstored + wrd.cAccount + wrd.cData + sys.cSpaceIsColonSpace; // storedAccountData is:
export const cnewlyMergedAccountDataIs = wrd.cnewly + wrd.cMerged + wrd.cAccount + wrd.cData + sys.cSpaceIsColonSpace; // newlyMergedAccountData is:
export const cdataToStoreIs = wrd.cdata + wrd.cTo + wrd.cStore + sys.cSpaceIsColonSpace; // dataToStore is:
export const ccleanedAccountDataIs = wrd.ccleaned + wrd.cAccount + wrd.cData + sys.cSpaceIsColonSpace; // cleanedAccountData is:
export const cconfirmedDeleteUserResponseIs = wrd.cconfirmed + wrd.cDelete + wrd.cUser + wrd.cResponse + sys.cSpaceIsColonSpace; // confirmedDeleteUserResponse is:
export const callAccountsDataIs = wrd.call + wrd.cAccounts + wrd.cData + sys.cSpaceIsColonSpace; // allAccountsData is:

// Application messages
export const cinstructionsMessage00 = wrd.cInstructions + bas.cSpace + wrd.cto + bas.cSpace + wrd.cend + bas.cSpace + wrd.cuser + bas.cColon; // Instructions to end user:
export const cinstructionsMessage01 = wrd.cCreate + bas.cSpace + wrd.can + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cusing + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccreate + wrd.cAccount + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cand + bas.cSpace + wrd.cprovide + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cuser + wrd.cname + bas.cDot; // Create an account using the createAccount command and provide your username.
export const cinstructionsMessage02 = wrd.cUse + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clogin + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cto + bas.cSpace + wrd.clogin + bas.cSpace + wrd.cto + bas.cSpace + wrd.cyour + bas.cSpace + wrd.caccount + bas.cComa + bas.cSpace + wrd.cno + bas.cSpace + wrd.cpassword + bas.cSpace + wrd.cor + bas.cSpace + wrd.cemail + bas.cSpace + wrd.crequired + bas.cDot; // Use the login command to login to your account, no password or email required.
export const cinstructionsMessage03 = wrd.cUse + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clogout + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cto + bas.cSpace + wrd.clogout + bas.cComa + bas.cSpace + wrd.cif + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwant + bas.cSpace + wrd.cto + bas.cSpace + wrd.callow + bas.cSpace + wrd.canother + bas.cSpace + wrd.cuser + bas.cSpace + wrd.cto + bas.cSpace + wrd.clogin + bas.cComa + bas.cSpace + wrd.cor + bas.cSpace + wrd.cjust + bas.cSpace + wrd.cexit + bas.cSpace + wrd.cby + bas.cSpace + wrd.ctyping + bas.cSpace + wrd.cexit + bas.cForwardSlash + wrd.cquit + bas.cSpace + wrd.cor + bas.cSpace + bas.cx + bas.cForwardSlash + bas.cq + bas.cDot; // Use the logout command to logout, if you want to allow another user to login, or just exit by typing exit/quit or x/q.
export const cinstructionsMessage04 = wrd.cAll + bas.cSpace + wrd.cyour + bas.cSpace + wrd.clesson + bas.cSpace + wrd.crecords + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cstored + bas.cSpace + wrd.cunder + bas.cSpace + wrd.cyour + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cname + bas.cSpace + wrd.cin + bas.cSpace + bas.ca + bas.cSpace + wrd.clocal + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cunder + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cresources + bas.cSpace + wrd.cfolder + bas.cDot; // All your lesson records will be stored under your account name in a local file under the resources folder.
export const cinstructionsMessage05 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.copt + bas.cDash + wrd.cout + bas.cSpace + wrd.cof + bas.cSpace + wrd.csaving + bas.cSpace + wrd.cyour + bas.cSpace + wrd.crecords + bas.cSpace + wrd.cby + bas.cSpace + wrd.cchanging + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cflag + bas.cColon + bas.cSpace + app_cfg.csaveTypingRecords + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csettings + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace + bas.cDot + bas.cForwardSlash + wrd.csrc + bas.cForwardSlash + wrd.cresources + bas.cForwardSlash + wrd.cconfiguration + bas.cForwardSlash + wrd.capplication + bas.cDot + wrd.csystem + gen.cDotjson; // You can opt-out of saving your records by changing the flag: saveTypingRecords in the configuration settings file: ./src/resources/configuration/application.system.json
export const cinstructionsMessage06 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.ccall + bas.cSpace + app_cmd.cdestroyRecords + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cyour + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cname + bas.cSpace + wrd.cto + bas.cSpace + wrd.cwipe + bas.cSpace + wrd.cout + bas.cSpace + wrd.cyour + bas.cSpace + wrd.ctyping + bas.cSpace + wrd.crecords + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cgood + bas.cDot; // You can call destroyRecords command with your account name to wipe out your typing records for good.
export const cinstructionsMessage07 = wrd.cThe + bas.cSpace + app_cmd.cdeleteAccount + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cyour + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cand + bas.cSpace + wrd.cdestroy + bas.cSpace + wrd.call + bas.cSpace + wrd.cyour + bas.cSpace + wrd.ctyping + bas.cSpace + wrd.crecords + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cgood + bas.cDot; // The deleteAccount command will delete your account and destroy all your typing records for good.
export const cinstructionsMessage08 = wrd.cOnce + bas.cSpace + wrd.cyou + bas.cSpace + wrd.care + bas.cSpace + wrd.clogged + bas.cSpace + wrd.cin + bas.cComa + bas.cSpace + wrd.cyou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cuse + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clessons + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdisplay + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cand + bas.cSpace + wrd.csee + bas.cSpace + wrd.cwhich + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cyou + bas.cSpace + wrd.chave + bas.cSpace + wrd.ccompleted + bas.cComa + bas.cSpace + wrd.cand + bas.cSpace + wrd.cwhich + bas.cSpace + num.cones + bas.cSpace + wrd.care + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cyet + bas.cSpace + wrd.cstarted + bas.cDot; // Once you are logged in, you can use the lessons command to display the lessons and see which lessons you have completed, and which ones are not yet started.
export const cinstructionsMessage09 = wrd.cIf + bas.cSpace + wrd.cyou + bas.cSpace + wrd.care + bas.cSpace + wrd.cNOT + bas.cSpace + wrd.clogged + bas.cSpace + wrd.cin + bas.cComa + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clessons + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cwill + bas.cSpace + wrd.csimply + bas.cSpace + wrd.clist + bas.cSpace + wrd.call + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cavailable + bas.cSpace + wrd.cby + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csystem + bas.cDot; // If you are NOT logged in, the lessons command will simply list all the lessons available by the system.
export const cinstructionsMessage10 = wrd.cIf + bas.cSpace + wrd.cyou + bas.cSpace + wrd.care + bas.cSpace + wrd.cNOT + bas.cSpace + wrd.clogged + bas.cSpace + wrd.cin + bas.cComa + bas.cSpace + wrd.crunning + bas.cSpace + wrd.cthe + bas.cSpace + app_cmd.cstartLesson + bas.cSpace + wrd.cwith + bas.cSpace + bas.ca + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cstart + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cwithout + bas.cSpace + wrd.csaving + bas.cSpace + wrd.cany + bas.cSpace + wrd.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ctyping + bas.cSpace + wrd.crecords + bas.cDot; // If you are NOT logged in, running the startLesson with a lesson number will start the lesson without saving any of the typing records.
export const cinstructionsMessage11 = wrd.cIf + bas.cSpace + wrd.cyou + bas.cSpace + wrd.care + bas.cSpace + wrd.clogged + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csystem + bas.cSpace + wrd.cwill + bas.cSpace + wrd.conly + bas.cSpace + wrd.clet + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cproceed + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnext + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cif + bas.cSpace + wrd.cyou + bas.cSpace + wrd.chave + bas.cSpace + wrd.ccompleted + bas.cSpace + wrd.call + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cprevious + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cwith + bas.cSpace + num.c90 + bas.cPercent + bas.cSpace + wrd.csuccess + bas.cSpace + wrd.cor + bas.cSpace + wrd.cgreater + bas.cDot; // If you are logged in the system will only let you proceed to the next lesson if you have completed all the previous lessons with 90% success or greater.
export const cinstructionsMessage12 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cchange + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csuccess + bas.cSpace + wrd.climiting + bas.cSpace + wrd.cfactor + bas.cSpace + wrd.cby + bas.cSpace + wrd.cchanging + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cflag + bas.cColon + bas.cSpace + app_cfg.clessonPlanSuccessLimitingFactor + bas.cSpace + wrd.cto + bas.cSpace + wrd.csome + bas.cSpace + wrd.cother + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.cother + bas.cSpace + wrd.cthan + bas.cSpace + num.c90 + bas.cPercent + bas.cDot; // You can change the success limiting factor by changing the configuration flag: lessonPlanSuccessLimitingFactor to some other value other than 90%.
export const cinstructionsMessage13 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cdisable + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csuccess + bas.cSpace + wrd.climiting + bas.cSpace + wrd.cfactor + bas.cSpace + wrd.ccompletely + bas.cSpace + wrd.cand + bas.cSpace + wrd.callow + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cusers + bas.cSpace + wrd.cto + bas.cSpace + wrd.ctake + bas.cSpace + wrd.cany + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cat + bas.cSpace + wrd.cany + bas.cSpace + wrd.ctime + bas.cSpace + wrd.cby + bas.cSpace + wrd.cchanging + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cflag + bas.cColon + bas.cSpace + app_cfg.cenableLessonPlanLimitingFactor + bas.cDot; // You can disable the success limiting factor completely and allow your users to take any lesson at any time by changing the configuration flag: enableLessonPlanLimitingFactor.
export const cinstructionsMessage14 = wrd.cEnter + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.capp + bas.cQuestion + bas.cForwardSlash + wrd.capp + wrd.cHelp + bas.cSpace + wrd.cor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cinstructions + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdisplay + bas.cSpace + wrd.cthese + bas.cSpace + wrd.cinstructions + bas.cSpace + wrd.cagain + bas.cDot; // Enter the command app?/appHelp or the command instructions to display these instructions again.

// ERROR: Invalid user name, please try again with a valid username.
export const cErrorInvalidUserNameCreateAccountMessage01 = msg.cERROR_Colon + wrd.cInvalid + bas.cSpace + wrd.cuser + bas.cSpace + wrd.cname + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cSpace + wrd.cwith + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cuser + wrd.cname + bas.cDot;
// ERROR: The user account already exists, please choose a different user name and try again.
export const cErrorInvalidUserNameCreateAccountMessage02 = msg.cERROR_Colon + wrd.cThe + bas.cSpace + wrd.cuser + bas.cSpace + wrd.caccount + bas.cSpace + wrd.calready + bas.cSpace + wrd.cexists + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.cchoose + bas.cSpace + bas.ca + bas.cSpace + wrd.cdifferent + bas.cSpace + wrd.cuser + bas.cSpace + wrd.cname + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot
// ERROR: Newly created account was not saved, could not create the specified account:
export const cErrorCreateAccountMessage02 = msg.cERROR_Colon + wrd.cNewly + bas.cSpace + wrd.ccreated + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cnot + bas.cSpace + wrd.csaved + bas.cComa + bas.cSpace + wrd.ccould + bas.cSpace + wrd.cnot + bas.cSpace + wrd.ccreate + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.caccount + bas.cColon + bas.cSpace;
// ERROR: No user accounts data was loaded, please ensure the accounts resources folder has accounts data. Path:
export const cErrorNoUserAccountsDataLoadedMessage01 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cuser + bas.cSpace + wrd.caccounts + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.censure + bas.cSpace + wrd.cthe + bas.cSpace + wrd.caccounts + bas.cSpace + wrd.cresources + bas.cSpace + wrd.cfolder + bas.cSpace + wrd.chas + bas.cSpace + wrd.caccounts + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPath + bas.cColon + bas.cSpace;
// ERROR: No typing lessons data was loaded, please ensure the lessons folder has lessons data. Path:
export const cErrorNoLessonDataLoadedMessage01 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.ctyping + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cloaded + bas.cComa + bas.cSpace + wrd.cplease + bas.cSpace + wrd.censure + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cfolder + bas.cSpace + wrd.chas + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cdata + bas.cDot + bas.cSpace + wrd.cPath + bas.cColon + bas.cSpace;
// ERROR: Cannot delete user, user does not exist.
export const cErrorNoUserFoundDeleteAccountMessage01 = msg.cERROR_Colon + wrd.cCannot + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cuser + bas.cSpace + bas.cComa + bas.cSpace + wrd.cuser + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cexist + bas.cDot;
// INFO: No account was deleted.
export const cErrorNoDeleteAccountMessage02 = wrd.cINFO + bas.cColon + bas.cSpace + wrd.cNo + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cdeleted + bas.cDot;
// WARNING: All user account data will be lost FOREVER!
export const cUserDeleteAccountConfirmedMessage01 = msg.cWARNING_Colon + wrd.cAll + bas.cSpace + wrd.cuser + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cbe + bas.cSpace + wrd.clost + bas.cSpace + wrd.cFOREVER + bas.cExclamation;
// Are you sure you want to delete the account? (yes/y or no/n)
export const cUserDeleteAccountConfirmedMessage02 = wrd.cAre + bas.cSpace + wrd.cyou + bas.cSpace + wrd.csure + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwant + bas.cSpace + wrd.cto + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cthe + bas.cSpace + wrd.caccount + bas.cQuestion + bas.cSpace + bas.cOpenParenthesis + wrd.cyes + bas.cForwardSlash + bas.cy + bas.cSpace + wrd.cor + bas.cSpace + wrd.cno + bas.cForwardSlash + bas.cn + bas.cCloseParenthesis;
// ERROR: Cannot login, user does not exist.
export const cErrorNoUserFoundLoginMessage01 = msg.cERROR_Colon + wrd.cCannot + bas.cSpace + wrd.clogin + bas.cComa + bas.cSpace + wrd.cuser + bas.cSpace + wrd.cdoes + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cexist + bas.cDot;
// ERROR: Unable to login with the specified user:
export const cErrorLoginMessage02 = msg.cERROR_Colon + wrd.cUnable + bas.cSpace + wrd.cto + bas.cSpace + wrd.clogin + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.cuser + bas.cColon + bas.cSpace;
// ERROR: Failure to logout.
export const cErrorFailureToLogOutMessage01 = msg.cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.clogout + bas.cDot;

// Constants Validation
export const callClientConstantsValidationDataIs = wrd.call + wrd.cClient + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_ApplicationBusinessIs = app_sys.cresolvedConstantsPath_Application + wrd.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationBusiness is:
export const cresolvedConstantsPath_ApplicationCommandIs = app_sys.cresolvedConstantsPath_Application + wrd.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationCommand is:
export const cresolvedConstantsPath_ApplicationConfigurationIs = app_sys.cresolvedConstantsPath_Application + wrd.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConfiguration is:
export const cresolvedConstantsPath_ApplicationConstantIs = app_sys.cresolvedConstantsPath_Application + wrd.cConstant + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConstant is:
export const cresolvedConstantsPath_ApplicationMessageIs = app_sys.cresolvedConstantsPath_Application + wrd.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationMessage is:
export const cresolvedConstantsPath_ApplicationSystemIs = app_sys.cresolvedConstantsPath_Application + wrd.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationSystem is:

export const cApplicationBusinessConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 1 Validation
export const cApplicationCommandConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 1 Validation
export const cApplicationConfigurationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 1 Validation
export const cApplicationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Constants Phase 1 Validation
export const cApplicationMessageConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 1 Validation
export const cApplicationSystemConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 1 Validation

export const cApplicationBusinessConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 2 Validation
export const cApplicationCommandConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 2 Validation
export const cApplicationConfigurationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 2 Validation
export const cApplicationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Constants Phase 2 Validation
export const cApplicationMessageConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 2 Validation
export const cApplicationSystemConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 2 Validation

export const capplicationMessage01 = wrd.cBEGIN + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // BEGIN main program loop
export const capplicationMessage02 = wrd.cBEGIN + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // BEGIN command parser
export const capplicationMessage03 = wrd.cEND + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // END command parser
export const capplicationMessage04 = wrd.cEND + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // END main program loop
export const capplicationMessage05 = wrd.cExiting + bas.cSpace + wrd.cHaystacks + bas.cDash + bas.cTT + bas.cSpace + wrd.capplication; // Exiting Haystacks-TT application