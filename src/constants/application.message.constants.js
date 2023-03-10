/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal Imports
import * as app_cmd from './application.command.constants.js';
import * as app_cfg from './application.configuration.constants.js';
import * as apc from './application.constants.js';
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
export const clessonNumberIs = wrd.clesson + wrd.cNumber + sys.cSpaceIsColonSpace; // lessonNumber is:
export const cindividualLessonDataIs = wrd.cindividual + wrd.cLesson + wrd.cData + sys.cSpaceIsColonSpace; // individualLessonData is:
export const cindividualLessonLineKeyIs = wrd.cindividual + wrd.cLesson + wrd.cLine + wrd.cKey + sys.cSpaceIsColonSpace; // individualLessonLineKey is:
export const cindividualLessonLineIs = wrd.cindividual + wrd.cLesson + wrd.cLine + sys.cSpaceIsColonSpace; // individualLessonLine is:
export const ccurrentUserNameIs = wrd.ccurrent + wrd.cUser + wrd.cName + sys.cSpaceIsColonSpace; // currentUserName is:
export const clessonPassingScoreEnabledIs = wrd.clesson + wrd.cPassing + wrd.cScore + wrd.cEnabled + sys.cSpaceIsColonSpace; // lessonPassingScoreEnabled is:
export const cpassingAccuracyScoreLimitIs = wrd.cpassing + wrd.cAccuracy + wrd.cScore + wrd.cLimit + sys.cSpaceIsColonSpace; // passingAccuracyScoreLimit is:
export const cpassingSpeedScoreLimitIs = wrd.cpassing + wrd.cSpeed + wrd.cScore + wrd.cLimit + sys.cSpaceIsColonSpace; // passingSpeedScoreLimit is:
export const clessonScoreDataIs = wrd.clesson + wrd.cScore + wrd.cData + sys.cSpaceIsColonSpace; // lessonScoreData is:
export const cmaxLessonNumberIs = wrd.cmax + wrd.cLesson + wrd.cNumber + sys.cSpaceIsColonSpace; // maxLessonNumber is:
export const cuserLessonNumberIs = wrd.cuser + wrd.cLesson + wrd.cNumber + sys.cSpaceIsColonSpace; // userLessonNumber is:
export const clessonAdvancementScoreLimitAccuracyIs = wrd.clesson + wrd.cAdvancement + wrd.cScore + wrd.cLimit + wrd.cAccuracy + sys.cSpaceIsColonSpace; // lessonAdvancementScoreLimitAccuracy is:
export const clessonAdvancementScoreLimitSpeedIs = wrd.clesson + wrd.cAdvancement + wrd.cScore + wrd.cLimit + wrd.cSpeed + sys.cSpaceIsColonSpace; // lessonAdvancementScoreLimitSpeed is:
export const cactualLessonDataIs = wrd.cactual + wrd.cLesson + wrd.cData + sys.cSpaceIsColonSpace; // actualLessonData is:
export const ccurrentLessonNumberIs = wrd.ccurrent + wrd.cLesson + wrd.cNumber + sys.cSpaceIsColonSpace; // currentLessonNumber is:
export const clessonDescriptionIs = wrd.clesson + wrd.cDescription + sys.cSpaceIsColonSpace; // lessonDescription is:
export const callLessonLinesIs = wrd.call + wrd.cLesson + wrd.cLines + sys.cSpaceIsColonSpace; // allLessonLines is:
export const callLessonLinesDataObjectIs = wrd.call + wrd.cLesson + wrd.cLines + wrd.cData + wrd.cObject + sys.cSpaceIsColonSpace; // allLessonLinesDataObject is:
export const clessonLineScoreDataIs = wrd.clesson + wrd.cLine + wrd.cScore + wrd.cData + sys.cSpaceIsColonSpace; // lessonLineScoreData is:
export const clessonLineStringIs = wrd.clesson + wrd.cLine + wrd.cString + sys.cSpaceIsColonSpace; // lessonLineString is:
export const cuserEnteredCharacterIs = wrd.cuser + wrd.cEntered + wrd.cCharacter + sys.cSpaceIsColonSpace; // userEnteredCharacter is:
export const clineStartTimeIs = wrd.cline + wrd.cStart + wrd.cTime + sys.cSpaceIsColonSpace; // lineStartTime is:
export const clineEndTimeIs = wrd.cline + wrd.cEnd + wrd.cTime + sys.cSpaceIsColonSpace; // lineEndTime is:
export const ccharactersCorrectCountIs = wrd.ccharacters + wrd.cCorrect + wrd.cCount + sys.cSpaceIsColonSpace; // charactersCorrectCount is:
export const ccharactersInCorrectCountIs = wrd.ccharacters + wrd.cIncorrect + wrd.cCount + sys.cSpaceIsColonSpace; // charactersIncorrectCount is:
export const ctotalNumberOfWordsIs = wrd.ctotal + wrd.cNumber + wrd.cOf + wrd.cWords + sys.cSpaceIsColonSpace; // totalNumberOfWords is:
export const cwpmIs = bas.cwp + bas.cm + sys.cSpaceIsColonSpace; // wpm is:
export const caccuracyIs = wrd.caccuracy + sys.cSpaceIsColonSpace; // accuracy is:
export const cscoresDataArrayIs = wrd.cscores + wrd.cData + wrd.cArray + sys.cSpaceIsColonSpace; // scoresDataArray is:
export const cscoreObjectIs = wrd.cscore + wrd.cObject + sys.cSpaceIsColonSpace; // scoreObject is:
export const clessonTimeStampIs = wrd.clesson + wrd.cTime + wrd.cStamp + sys.cSpaceIsColonSpace; // lessonTimeStamp is:
export const ctotalTimeIs = wrd.ctotal + wrd.cTime + sys.cSpaceIsColonSpace; // totalTime is:
export const ctotalCorrectCharacterCountIs = wrd.ctotal + wrd.cCorrect + wrd.cCharacter + wrd.cCount + sys.cSpaceIsColonSpace; // totalCorrectCharacterCount is:
export const ctotalIncorrectCharacterCountIs = wrd.ctotal + wrd.cIncorrect + wrd.cCharacter + wrd.cCount + sys.cSpaceIsColonSpace; // totalIncorrectCharacterCount is:
export const ctotalWordsIs = wrd.ctotal + wrd.cWords + sys.cSpaceIsColonSpace; // totalWords is:
export const caverageWpmIs = wrd.caverage + bas.cWP + bas.cM + sys.cSpaceIsColonSpace; // averageWPM is:
export const caverageAccuracyIs = wrd.caverage + wrd.cAccuracy + sys.cSpaceIsColonSpace; // averageAccuracy is:
export const cupdatedUserAccountDataIs = wrd.cupdated + wrd.cUser + wrd.cAccount + wrd.cData + sys.cSpaceIsColonSpace; // updatedUserAccountData is:
export const cdataToAppendIs = wrd.cdata + wrd.cTo + wrd.cAppend + sys.cSpaceIsColonSpace; // dataToAppend is:
export const ccurrentUserAccountNameIs = wrd.ccurrent + wrd.cUser + wrd.cAccount + wrd.cName + sys.cSpaceIsColonSpace; // currentUserAccountName is:
export const clessonNameKeyIs = wrd.clesson + wrd.cName + wrd.cKey + sys.cSpaceIsColonSpace; // lessonNameKey is:
export const cusersLessonDataObjectIs = wrd.cusers + wrd.cLesson + wrd.cData + wrd.cObject + sys.cSpaceIsColonSpace; // usersLessonDataObject is:
export const cusersLessonDataObjectKeysIs = wrd.cusers + wrd.cLesson + wrd.cData + wrd.cObject + wrd.cKeys + sys.cSpaceIsColonSpace; // usersLessonDataObjectKeys is: 
export const cusersLessonDataIs = wrd.cusers + wrd.cLesson + wrd.cData + sys.cSpaceIsColonSpace; // usersLessonData is:
export const cusersLessonDataAfterPushIs = wrd.cusers + wrd.cLesson + wrd.cData + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cpush + sys.cSpaceIsColonSpace; // usersLessonData after data push is:
export const clessonNameKeyEqualsLessonName = wrd.clesson + wrd.cName + wrd.cKey + bas.cSpace + bas.cEqualEqualEqual + bas.cSpace + wrd.clesson + wrd.cName; // lessonNameKey === lessonName
export const cappAccountsPathIs = wrd.capp + wrd.cAccounts + wrd.cPath + sys.cSpaceIsColonSpace; // appAccountsPath is:
export const cadvancementLimitSettingIs = wrd.cadvancement + wrd.cLimit + wrd.cSetting + sys.cSpaceIsColonSpace; // advancementLimitSetting is:
export const callLessonsDataIs = wrd.call + wrd.cLessons + wrd.cData + sys.cSpaceIsColonSpace; // allLessonsData is:
export const clessonPlanKeysIs = wrd.clesson + wrd.cPlan + wrd.cKeys + sys.cSpaceIsColonSpace; // lessonPlanKeys is:
export const clessonKeyValueIs = wrd.clesson + wrd.cKey + wrd.cValue + sys.cSpaceIsColonSpace; // lessonKeyValue is:
export const cadjustedWpmIs = wrd.cadjusted + bas.cWp + bas.cm + sys.cSpaceIsColonSpace; // adjustedWpm is:
export const clessonCountIs = wrd.clesson + wrd.cCount + sys.cSpaceIsColonSpace; // lessonCount is:
export const chighestScoringLessonAboveAdvancementLimitIs = wrd.chighest + wrd.cScoring + wrd.cLesson + wrd.cAbove + wrd.cAdvancement + wrd.cLimit + sys.cSpaceIsColonSpace; // highestScoringLessonAboveAdvancementLimit is:
export const cmasterLessonsData = wrd.cmaster + wrd.cLessons + wrd.cData + sys.cSpaceIsColonSpace; // masterLessonsData is:
export const chighestScoreForLessonIs = wrd.chighest + wrd.cScore + wrd.cFor + wrd.cLesson + sys.cSpaceIsColonSpace; // highestScoreForLesson is:
export const cindividualLessonNameIs = wrd.cindividual + wrd.cLesson + wrd.cName + sys.cSpaceIsColonSpace; // individualLessonName is:
export const cusersLessonScoreIndividualLessonRecordIs = wrd.cusers + wrd.cLesson + wrd.cScore + wrd.cIndividual + wrd.cLesson + wrd.cRecord + sys.cSpaceIsColonSpace; // usersLessonScoreIndividualLessonRecord is:
export const caccuracyLimitIs = wrd.caccuracy + wrd.cLimit + sys.cSpaceIsColonSpace; // accuracyLimit is:
export const cspeedLimitIs = wrd.cspeed + wrd.cLimit + sys.cSpaceIsColonSpace; // speedLimit is:
export const cinputUserNameIs = wrd.cinput + wrd.cUser + wrd.cName + sys.cSpaceIsColonSpace; // inputUserName is:

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
export const cinstructionsMessage12 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cchange + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csuccess + bas.cSpace + wrd.climiting + bas.cSpace + wrd.cfactor + bas.cSpace + wrd.cby + bas.cSpace + wrd.cchanging + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cflags + bas.cColon + bas.cSpace + app_cfg.clessonPlanSuccessLimitingAccuracy + bas.cComa + bas.cSpace + app_cfg.clessonPlanSuccessLimitingSpeed + bas.cSpace + wrd.cto + bas.cSpace + wrd.csome + bas.cSpace + wrd.cother + bas.cSpace + wrd.cvalue + bas.cSpace + wrd.cother + bas.cSpace + wrd.cthan + bas.cSpace + num.c90 + bas.cPercent + bas.cComa + bas.cSpace + num.c70 + bas.cwp + bas.cm + bas.cDot; // You can change the success limiting factor by changing the configuration flags: lessonPlanSuccessLimitingAccuracy, lessonPlanSuccessLimitingSpeed to some other values other than 90%, 70wpm.
export const cinstructionsMessage13 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cdisable + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csuccess + bas.cSpace + wrd.climiting + bas.cSpace + wrd.cfactor + bas.cSpace + wrd.ccompletely + bas.cSpace + wrd.cand + bas.cSpace + wrd.callow + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cusers + bas.cSpace + wrd.cto + bas.cSpace + wrd.ctake + bas.cSpace + wrd.cany + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cat + bas.cSpace + wrd.cany + bas.cSpace + wrd.ctime + bas.cSpace + wrd.cby + bas.cSpace + wrd.cchanging + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.cflag + bas.cColon + bas.cSpace + app_cfg.cenableLessonPlanLimitingFactors + bas.cDot; // You can disable the success limiting factor completely and allow your users to take any lesson at any time by changing the configuration flag: enableLessonPlanLimitingFactors.
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
// ERROR: No lesson number entered. Please enter a valid lesson number to execute.
export const cErrorStartLessonMessage01 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.centered + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.cto + bas.cSpace + wrd.cexecute + bas.cDot;
// ERROR: Invalid lesson number entered. Please enter a valid lesson number to execute.
export const cErrorStartLessonMessage02 = msg.cERROR_Colon + wrd.cInvalid + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.centered + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.cto + bas.cSpace + wrd.cexecute + bas.cDot;
// ERROR: The lesson number entered is not available.
export const cErrorStartLessonMessage03 = msg.cERROR_Colon + wrd.cThe + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.centered + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cavailable + bas.cDot;
// Please enter a lesson number between 1 and:
export const cErrorStartLessonMessage04 = wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cSpace + wrd.cbetween + bas.cSpace + num.c1 + bas.cSpace + wrd.cand + bas.cColon + bas.cSpace;
// ERROR: There was an error with the lesson data, invalid lesson number: 
export const cErrorGetIndividualLessonDataMessage01 = msg.cERROR_Colon + wrd.cThere + bas.cSpace + wrd.cwas + bas.cSpace + wrd.can + bas.cSpace + wrd.cerror + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cdata + bas.cComa + bas.cSpace + wrd.cinvalid + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cColon + bas.cSpace;
// ERROR: No lesson lines for the specified lesson number:
export const cErrorExecuteLessonMessage01 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.clesson + bas.cSpace + wrd.clines + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cspecified + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cnumber + bas.cColon + bas.cSpace;
export const csaveAccountDataFailureMessage01 = msg.cERROR_Colon + wrd.cFailure + bas.cSpace + wrd.cto + bas.cSpace + wrd.cwrite + bas.cSpace + wrd.cout + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // ERROR: Failure to write out the file:
// WARNING: You are not allowed to run this lesson,
export const cWarningStartLessonMessage01 = msg.cWARNING_Colon + wrd.cYou + bas.cSpace + wrd.care + bas.cSpace + wrd.cnot + bas.cSpace + wrd.callowed + bas.cSpace + wrd.cto + bas.cSpace + wrd.crun + bas.cSpace + wrd.cthis + bas.cSpace + wrd.clesson + bas.cComa;
// please complete the earlier lessons before proceeding.
export const cWarningStartLessonMessage02 = wrd.cplease + bas.cSpace + wrd.ccomplete + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cearlier + bas.cSpace + wrd.clessons + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cproceeding + bas.cDot;
export const cgenerateUserReportMessage01 = wrd.cHaystacks + bas.cSpace + wrd.cTyping + bas.cSpace + wrd.cTutor + bas.cSpace + wrd.creport + bas.cSpace + wrd.ccard + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cuser + bas.cColon + bas.cSpace; // Haystacks Typing Tutor report card for user:
export const cgenerateUserReportMessage02 = msg.cERROR_Colon + wrd.cUser + bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.clogged + bas.cSpace + wrd.cin + bas.cComa + bas.cSpace + wrd.ccannot + bas.cSpace + wrd.cgenerate + bas.cSpace + wrd.cuser + bas.cSpace + wrd.creport + bas.cDot; // ERROR: User is not logged in, cannot generate user report.
export const cgenerateUserReportMessage03 = wrd.cLogin + bas.cSpace + wrd.cto + bas.cSpace + wrd.can + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cand + bas.cSpace + wrd.ctry + bas.cSpace + wrd.cagain + bas.cDot; // Login to an account and try again.
export const cprintRecordsMessage01 = wrd.cHaystacks + bas.cSpace + wrd.cTyping + bas.cSpace + wrd.cTutor + bas.cSpace + wrd.cusers + bas.cSpace + wrd.creport + bas.cColon; // Haystacks Typing Tutor users report:
// ****************************************************************************************************
// LESSON INSTRUCTIONS:
export const cLessonInstructionsMessage01 = wrd.cLESSON + bas.cSpace + wrd.cINSTRUCTIONS + bas.cColon;
// Place your left index finger on the "F" key, and your right index finger on the "J" key.
export const cLessonInstructionsMessage02 = wrd.cPlace + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cleft + bas.cSpace + wrd.cindex + bas.cSpace + wrd.cfinger + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + bas.cDoubleQuote + bas.cF + bas.cDoubleQuote + bas.cSpace + wrd.ckey + bas.cComa + bas.cSpace + wrd.cand + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cright + bas.cSpace + wrd.cindex + bas.cSpace + wrd.cfinger + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + bas.cDoubleQuote + bas.cJ + bas.cDoubleQuote + bas.cSpace + wrd.ckey + bas.cDot;
// Feel for the small raised bumps on the keys.
export const cLessonInstructionsMessage03 = wrd.cFeel + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csmall + bas.cSpace + wrd.craised + bas.cSpace + wrd.cbumps + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ckeys + bas.cDot;
// These will help you ensure your fingers are on the correct home row before you begin typing.
export const cLessonInstructionsMessage04 = wrd.cThese + bas.cSpace + wrd.cwill + bas.cSpace + wrd.chelp + bas.cSpace + wrd.cyou + bas.cSpace + wrd.censure + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cfingers + bas.cSpace + wrd.care + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ccorrect + bas.cSpace + wrd.chome + bas.cSpace + wrd.crow + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cbegin + bas.cSpace + wrd.ctyping + bas.cDot;
// The rest of your fingers should naturally fall to the 3 keys adjacent and inline on the same row.
export const cLessonInstructionsMessage05 = wrd.cThe + bas.cSpace + wrd.crest + bas.cSpace + wrd.cof + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cfingers + bas.cSpace + wrd.cshould + bas.cSpace + wrd.cnaturally + bas.cSpace + wrd.cfall + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + num.c3 + bas.cSpace + wrd.ckeys + bas.cSpace + wrd.cadjacent + bas.cSpace + wrd.cand + bas.cSpace + wrd.cinline + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csame + bas.cSpace + wrd.crow + bas.cDot;
// Left fingers should rest on the keys "D", "S", and "A".
export const cLessonInstructionsMessage06 = wrd.cLeft + bas.cSpace + wrd.cfingers + bas.cSpace + wrd.cshould + bas.cSpace + wrd.crest + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ckeys + bas.cSpace + bas.cDoubleQuote + bas.cD + bas.cDoubleQuote + bas.cComa + bas.cSpace + bas.cDoubleQuote + bas.cS + bas.cDoubleQuote + bas.cComa + bas.cSpace + wrd.cand + bas.cSpace + bas.cDoubleQuote + bas.cA + bas.cDoubleQuote + bas.cDot;
// Right fingers should rest on the keys "K", "L", and ";".
export const cLessonInstructionsMessage07 = wrd.cRight + bas.cSpace + wrd.cfingers + bas.cSpace + wrd.cshould + bas.cSpace + wrd.crest + bas.cSpace + bas.con + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ckeys + bas.cSpace + bas.cDoubleQuote + bas.cK + bas.cDoubleQuote + bas.cComa + bas.cSpace + bas.cDoubleQuote + bas.cL + bas.cDoubleQuote + bas.cComa + bas.cSpace + wrd.cand + bas.cSpace + bas.cDoubleQuote + bas.cSemiColon + bas.cDoubleQuote + bas.cDot;
// Sit upright in your chair, back straight, elbows at your sides.
export const cLessonInstructionsMessage08 = wrd.cSit + bas.cSpace + wrd.cupright + bas.cSpace + wrd.cin + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cchair + bas.cComa + bas.cSpace + wrd.cback + bas.cSpace + wrd.cstraight + bas.cComa + bas.cSpace + wrd.celbows + bas.cSpace + wrd.cat + bas.cSpace + wrd.cyour + bas.cSpace + wrd.csides + bas.cDot;
// The lesson will begin when you type the first character for each line.
export const cLessonInstructionsMessage09 = wrd.cThe + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cbegin + bas.cSpace + wrd.cwhen + bas.cSpace + wrd.cyou + bas.cSpace + wrd.ctype + bas.cSpace + wrd.cthe + bas.cSpace + num.cfirst + bas.cSpace + wrd.ccharacter + bas.cSpace + wrd.cfor + bas.cSpace + wrd.ceach + bas.cSpace + wrd.cline + bas.cDot;
// This is a timed lesson, so the faster you go the better your score will be.
export const cLessonInstructionsMessage10 = wrd.cThis + bas.cSpace + wrd.cis + bas.cSpace + bas.ca + bas.cSpace + wrd.ctimed + bas.cSpace + wrd.clesson + bas.cComa + bas.cSpace + wrd.cso + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfaster + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cgo + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cbetter + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cscore + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cbe + bas.cDot;
// However, typing errors count against your score.
export const cLessonInstructionsMessage11 = wrd.cHowever + bas.cComa + bas.cSpace + wrd.ctyping + bas.cSpace + wrd.cerrors + bas.cSpace + wrd.ccount + bas.cSpace + wrd.cagainst + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cscore + bas.cDot;
// You must get an accuracy score of:
export const cLessonInstructionsMessage12 = wrd.cYou + bas.cSpace + wrd.cmust + bas.cSpace + wrd.cget + bas.cSpace + bas.can + bas.cSpace + wrd.caccuracy + bas.cSpace + wrd.cscore + bas.cSpace + wrd.cof + bas.cColon + bas.cSpace;
// And a speed score of at least:
export const cLessonInstructionsMessage13 = wrd.cAnd + bas.cSpace + bas.ca + bas.cSpace + wrd.cspeed + bas.cSpace + wrd.cscore + bas.cSpace + wrd.cof + bas.cSpace + wrd.cat + bas.cSpace + wrd.cleast + bas.cColon + bas.cSpace;
// or higher to advance to the next lesson.
export const cLessonInstructionsMessage14 = wrd.cor + bas.cSpace + wrd.chigher + bas.cSpace + wrd.cto + bas.cSpace + wrd.cadvance + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cnext + bas.cSpace + wrd.clesson + bas.cDot;
// A report showing your score will display after the lesson is complete.
export const cLessonInstructionsMessage15 = bas.cA + bas.cSpace + wrd.creport + bas.cSpace + wrd.cshowing + bas.cSpace + wrd.cyour + bas.cSpace + wrd.cscore + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cdisplay + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clesson + bas.cSpace + wrd.cis + bas.cSpace + wrd.ccomplete + bas.cDot;
// Press the "ESC" key, in the far upper left corner of the keyboard to cancel a lesson.
export const cLessonInstructionsMessage16 = wrd.cPress + bas.cSpace + wrd.cthe + bas.cSpace + bas.cDoubleQuote + gen.cESC + bas.cDoubleQuote + bas.cSpace + wrd.ckey + bas.cComa + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfar + bas.cSpace + wrd.cupper + bas.cSpace + wrd.cleft + bas.cSpace + wrd.ccorner + bas.cSpace + wrd.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.ckeyboard + bas.cSpace + wrd.cto + bas.cSpace + wrd.ccancel + bas.cSpace + bas.ca + bas.cSpace + wrd.clesson + bas.cDot;
// ****************************************************************************************************
// Destroy Records Instructions
// Before you destroy the records, make sure you exit the Haystacks Typing Tutor application,
export const destroyRecordsInstructionsMessage01 = wrd.cBefore + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cdestroy + bas.cSpace + wrd.cthe + bas.cSpace + wrd.crecords + bas.cComa + bas.cSpace + wrd.cmake + bas.cSpace + wrd.csure + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cexit + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cHaystacks + bas.cSpace + wrd.cTyping + bas.cSpace + wrd.cTutor + bas.cSpace + wrd.capplication + bas.cComa;
// or the records will be resaved after you delete them.
export const destroyRecordsInstructionsMessage02 = wrd.cor + bas.cSpace + wrd.cthe + bas.cSpace + wrd.crecords + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cresaved + bas.cSpace + wrd.cafter + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.cthem + bas.cDot;
// You can destroy all records by going to the application installed path:
export const destroyRecordsInstructionsMessage03 = wrd.cYou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cdestroy + bas.cSpace + wrd.call + bas.cSpace + wrd.crecords + bas.cSpace + wrd.cby + bas.cSpace + wrd.cgoing + bas.cSpace + wrd.cto + bas.cSpace + wrd.cthe + bas.cSpace + wrd.capplication + bas.cSpace + wrd.cinstalled + bas.cSpace + wrd.cpath + bas.cColon;
// ./src/resources/accounts/
export const destroyRecordsInstructionsMessage04 = bas.cDot + apc.cFullDevAccountsPath;
// ./bin/resources/accounts/
export const destroyRecordsInstructionsMessage05 = bas.cDot + apc.cFullProdAccountsPath;
// Then delete all of the files with the .JSON file extension.
export const destroyRecordsInstructionsMessage06 = wrd.cThen + bas.cSpace + wrd.cdelete + bas.cSpace + wrd.call + bas.cSpace + wrd.cof + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cfiles + bas.cSpace + wrd.cwith + bas.cSpace + wrd.cthe + bas.cSpace + gen.cDotJSON + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cextension + bas.cDot;
// This will remove all account data from the system forever.
export const destroyRecordsInstructionsMessage07 = wrd.cThis + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cremove + bas.cSpace + wrd.call + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cthe + bas.cSpace + wrd.csystem + bas.cSpace + wrd.cforever + bas.cDot;
// If you wish to back-up the account data,
export const destroyRecordsInstructionsMessage08 = wrd.cIf + bas.cSpace + wrd.cyou + bas.cSpace + wrd.cwish + bas.cSpace + wrd.cto + bas.cSpace + wrd.cback + bas.cDash + wrd.cup + bas.cSpace + wrd.cthe + bas.cSpace + wrd.caccount + bas.cSpace + wrd.cdata + bas.cComa;
// you can copy these files to another storage location before deleting them.
export const destroyRecordsInstructionsMessage09 = wrd.cyou + bas.cSpace + wrd.ccan + bas.cSpace + wrd.ccopy + bas.cSpace + wrd.cthese + bas.cSpace + wrd.cfiles + bas.cSpace + wrd.cto + bas.cSpace + wrd.canother + bas.cSpace + wrd.cstorage + bas.cSpace + wrd.clocation + bas.cSpace + wrd.cbefore + bas.cSpace + wrd.cdeleting + bas.cSpace + wrd.cthem + bas.cDot;
// ****************************************************************************************************

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