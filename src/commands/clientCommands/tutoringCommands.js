/**
 * @file tutoringCommands.js
 * @module tutoringCommands
 * @description Contains all client defined commands fro execution of client actions with various operations, specific for typing tutoring.
 * @requires module:accountBroker
 * @requires module:application.command.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import accountBroker from '../../brokers/accountBroker.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.haystacks-tt.commands.clientCommands.tutoringCommands.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function createAccount
 * @description Creates a new account with the given input account name.
 * @param {array<string>} inputData The input(s) the user entered into the command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function createAccount(inputData, inputMetaData) {
  let functionName = createAccount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let accountExists = false;
  if (Array.isArray(inputData) && inputData.length === 2) {
    // Check first to see if the user already exists.
    accountExists = await accountBroker.doesAccountExist(inputData[1]);
    if (accountExists === false) {
      let newAccount = await accountBroker.createAccount(inputData[1]);
      // newAccount is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewAccountIs + JSON.stringify(newAccount));

      // Now merge the new account with the stored account data.
      let storedAccountData = await accountBroker.getAccountData();
      // storedAccountData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstoredAccountDataIs + JSON.stringify(storedAccountData));
      let newlyMergedAccountData = Object.assign(storedAccountData, newAccount);
      // newlyMergedAccountData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewlyMergedAccountDataIs + JSON.stringify(newlyMergedAccountData));
      let accountStoredSuccess = await accountBroker.storeAccountData(newlyMergedAccountData);
      if (accountStoredSuccess === false) {
        // ERROR: Newly created account was not saved, could not create the specified account:
        console.log(app_msg.cErrorCreateAccountMessage02 + inputData[1]);
      }
    } else {
      // ERROR: The user account already exists, please choose a different user name and try again.
      console.log(app_msg.cErrorInvalidUserNameCreateAccountMessage02);
    }
  } else {
    // ERROR: Invalid user name, please try again with a valid username.
    console.log(app_msg.cErrorInvalidUserNameCreateAccountMessage01 + inputData[1]);
  }
  // let newUserAccount = {userName: }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function printAccountsData
 * @description Prints out all of the accounts data.
 * @param {array<string>} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function printAccountsData(inputData, inputMetaData) {
  let functionName = printAccountsData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let storedAccountData = await accountBroker.getAccountData();
  console.log(app_msg.cstoredAccountDataIs + JSON.stringify(storedAccountData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function printAccountData
 * @description Prints out all of the data for a specific account,
 * or if no account name is specified, then all account data will be printed out.
 * @param {array<string>} inputData The input(s) the user entered into the command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function printAccountData(inputData, inputMetaData) {
  let functionName = printAccountData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let userAccountData = await accountBroker.getUserAccountData(inputData[1]);
    // userAccountData is:
    console.log(app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
  } else {
    // User didn't enter any account name for input, so just print all of the data for all accounts!
    await printAccountsData();
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function deleteAccount
 * @description Removes a users account and all account data for a specified account, if the account exists in the system.
 * @param {array<string>} inputData The input(s) the user entered into the command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function deleteAccount(inputData, inputMetaData) {
  let functionName = deleteAccount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let accountExists = false;
  let confirmedAccountDelete = false;
  if (Array.isArray(inputData) && inputData.length === 2) {
    // Check first to see if the user already exists.
    accountExists = await accountBroker.doesAccountExist(inputData[1]);
    if (accountExists === true) {
      // Make sure the user really wants to delete the account, add a note that all user data will be lost forever.
      // WARNING: All user account data will be lost FOREVER!
      // Are you sure you want to delete the account? (yes/y or no/n)
      console.log(app_msg.cUserDeleteAccountConfirmedMessage01);
      console.log(app_msg.cUserDeleteAccountConfirmedMessage02);
      let confirmedDeleteUserResponse = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [wrd.cprompt]);
      // confirmedDeleteUserResponse is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cconfirmedDeleteUserResponseIs + confirmedDeleteUserResponse);
      if (confirmedDeleteUserResponse.toUpperCase().trim() === wrd.cYES || confirmedDeleteUserResponse.toUpperCase().trim() === bas.cY) {
        confirmedAccountDelete = true;
      }
      if (confirmedAccountDelete) {
        let storedAccountData = await accountBroker.getAccountData();
        // storedAccountData is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstoredAccountDataIs + JSON.stringify(storedAccountData));
        let cleanedAccountData = await accountBroker.removeAccount(inputData[1], storedAccountData);
        // cleanedAccountData is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccleanedAccountDataIs + JSON.stringify(cleanedAccountData));
        let accountStoredSuccess = await accountBroker.storeAccountData(cleanedAccountData);
        if (accountStoredSuccess === false) {
          // ERROR: Newly created account was not saved, could not create the specified account:
          console.log(app_msg.cErrorCreateAccountMessage02 + inputData[1]);
        }
      } else {
        // INFO: No account was deleted.
        console.log(app_msg.cErrorNoDeleteAccountMessage02)
      }
    } else {
      // ERROR: Cannot delete user, user does not exist.
      console.log(app_msg.cErrorNoUserFoundDeleteAccountMessage01);
    }
  } else {
    // ERROR: Invalid user name, please try again with a valid username.
    console.log(app_msg.cErrorInvalidUserNameCreateAccountMessage01 + inputData[1]);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function login
 * @description Allows the user to login with their username.
 * @param {array<string>} inputData The input(s) the user entered into the command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function login(inputData, inputMetaData) {
  let functionName = login.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let accountExists = false;
  if (Array.isArray(inputData) && inputData.length === 2) {
    // Check first to see if the user already exists.
    accountExists = await accountBroker.doesAccountExist(inputData[1]);
    if (accountExists === true) {
      let configSettingSet = await accountBroker.loginUser(inputData[1]);
      if (configSettingSet === false) {
        // ERROR: Unable to login with the specified user:
        console.log(app_msg.cErrorLoginMessage02 + inputData[1]);
      }
    } else {
      // ERROR: Cannot login, user does not exist.
      console.log(app_msg.cErrorNoUserFoundLoginMessage01);
    }
  } else {
    // ERROR: Invalid user name, please try again with a valid username.
    // console.log(app_msg.cErrorInvalidUserNameCreateAccountMessage01 + inputData[1]);
    
    // If the user didn't specify a username, then we will clear the login configuration setting,
    // So nobody is logged in.
    await accountBroker.loginUser('');
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function logout
 * @description Allows the user to remove themselves from the currently logged in user.
 * @param {array<string>} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function logout(inputData, inputMetaData) {
  let functionName = logout.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let logoutSuccess = false
  logoutSuccess = accountBroker.logoutUser('');
  if (logoutSuccess === false) {
    // ERROR: Failure to logout.
    console.log(app_msg.cErrorFailureToLogOutMessage01);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function startLesson
 * @description Allows the user to launch a typing lesson.
 * @param {array<string>} inputData The input(s) the user entered into the command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function startLesson(inputData, inputMetaData) {
  let functionName = startLesson.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let lessonScoreData = {};
  let userExecutedLesson = false;
  if (Array.isArray(inputData) && inputData.length === 2) {
    if (parseInt(inputData[1]) > 0) {
      let maxLessonNumber = await accountBroker.getHighestLessonCount();
      // maxLessonNumber is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cmaxLessonNumberIs + maxLessonNumber);
      let userLessonNumber = parseInt(inputData[1]);
      // userLessonNumber is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserLessonNumberIs + userLessonNumber);
      if (userLessonNumber > 0 && userLessonNumber <= maxLessonNumber) {
        let lessonPassingScoreEnabled = await accountBroker.isLessonAdvancementLimitEnabled();
        // lessonPassingScoreEnabled is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonPassingScoreEnabledIs + lessonPassingScoreEnabled);
        if (lessonPassingScoreEnabled === true) {
          let lessonAdvancementScoreLimitAccuracy = await accountBroker.getLessonAdvancementScoreLimitAccuracy();
          // lessonAdvancementScoreLimitAccuracy is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonAdvancementScoreLimitAccuracyIs + lessonAdvancementScoreLimitAccuracy);
          let lessonAdvancementScoreLimitSpeed = await accountBroker.getLessonAdvancementScoreLimitSpeed();
          // lessonAdvancementScoreLimitSpeed is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonAdvancementScoreLimitSpeedIs + lessonAdvancementScoreLimitSpeed);
          let highestScoringLessonAboveAdvancementLimit = await accountBroker.getHighestLessonNumberAboveAdvancementScoringLimit();
          // highestScoringLessonAboveAdvancementLimit is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.chighestScoringLessonAboveAdvancementLimitIs + highestScoringLessonAboveAdvancementLimit);
          // Validate that the user is trying to execute a lesson a maximum of 1 lesson above the highest lesson number that has a passing score.
          if (userLessonNumber - 1 <= highestScoringLessonAboveAdvancementLimit) {
            lessonScoreData = await accountBroker.executeLesson(userLessonNumber);
            userExecutedLesson = true;
          } else {
            // WARNING: You are not aloud to run this lesson,
            // please complete the earlier lessons before proceeding.
            console.log(app_msg.cWarningStartLessonMessage01 + bas.cSpace + app_msg.cWarningStartLessonMessage02);
          }
        } else {
          lessonScoreData = await accountBroker.executeLesson(userLessonNumber);
          userExecutedLesson = true;
        }
        if (userExecutedLesson === true) {
          // lessonScoreData is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonScoreDataIs + JSON.stringify(lessonScoreData));
          if (lessonScoreData) {
            let updatedUserAccountData = await accountBroker.appendUsersLessonScoreData(lessonScoreData, userLessonNumber);
            // updatedUserAccountData is:
            await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cupdatedUserAccountDataIs + JSON.stringify(updatedUserAccountData));
            await accountBroker.storeAccountData(updatedUserAccountData);
          }
        } // End-if (userExecutedLesson === true)
      } else {
        // ERROR: The lesson number entered is not available.
        console.log(app_msg.cErrorStartLessonMessage03);
        // Please enter a lesson number between 1 and:
        console.log(app_msg.cErrorStartLessonMessage04 + maxLessonNumber);
      }
    } else {
      // ERROR: Invalid lesson number entered. Please enter a valid lesson number to execute.
      console.log(app_msg.cErrorStartLessonMessage02)
    }
  } else {
    // ERROR: No lesson number entered. Please enter a valid lesson number to execute.
    console.log(app_msg.cErrorStartLessonMessage01);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function generateUserReport
 * @description Generates a report based on the currently logged in user,
 * of the lessons with passing scores and not passing scores to display to the user.
 * @param {array<string>} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/09
 */
async function generateUserReport(inputData, inputMetaData) {
  let functionName = generateUserReport.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let userReportData;
  let currentUserName = '';

  if (inputData && Array.isArray(inputData) && inputData.length === 2) {
    // User specified a username, pass that in as a parameter.
    if (await accountBroker.doesAccountExist(inputData[1])) {
      userReportData = await accountBroker.generateUserReport(inputData[1]);
      currentUserName = inputData[1];
    } else {
      // ERROR: Invalid user name, please try again with a valid username.
      console.log(app_msg.cErrorInvalidUserNameCreateAccountMessage01 + inputData[1]);
    }
  } else {
    userReportData = await accountBroker.generateUserReport();
    currentUserName = await accountBroker.currentUserAccount();
  }

  // currentUserName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameIs + currentUserName);
  if (userReportData) {
    // Haystacks Typing Tutor report card for user:
    console.log(app_msg.cgenerateUserReportMessage01 + currentUserName);
    console.table(userReportData, [wrd.cPass + bas.cDash + wrd.cFail]);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function printRecords
 * @description Generates a report that contains the highest passing lesson for all registered users.
 * This is useful for teachers who might have multiple students using the system and want to
 * get a report on how well their students are doing.
 * @param {array<string>} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/09
 */
async function printRecords(inputData, inputMetaData) {
  let functionName = printRecords.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let allUsersReportData = await accountBroker.generateReportAllUsers();
  // Haystacks Typing Tutor users report:
  console.log(app_msg.cprintRecordsMessage01);
  console.table(allUsersReportData, [app_sys.cLessonNumber])
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function destroyRecords
 * @description Completely destroys all user accounts and user account records after prompting the user to confirm.
 * @NOTE UPDATE: I'm not actually going to destroy the records in this command.
 * Rather I will just provide some basic instructions to the user about how they should manually destroy the records.
 * By deleting the users JSON files from the accounts folder.
 * This will avoid the risk that a user might destroy records of all the other users on the system.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/09
 */
async function destroyRecords(inputData, inputMetaData) {
  let functionName = destroyRecords.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  // Before you destroy the records, make sure you exit the Haystacks Typing Tutor application,
  console.log(app_msg.destroyRecordsInstructionsMessage01);
  // or the records will be resaved after you delete them.
  console.log(app_msg.destroyRecordsInstructionsMessage02);
  // You can destroy all records by going to the application installed path:
  console.log(app_msg.destroyRecordsInstructionsMessage03);
  // ./src/resources/accounts/
  console.log(app_msg.destroyRecordsInstructionsMessage04);
  // or
  console.log(wrd.cor);
  // ./bin/resources/accounts/
  console.log(app_msg.destroyRecordsInstructionsMessage05);
  // Then delete all of the files with the .JSON file extension.
  console.log(app_msg.destroyRecordsInstructionsMessage06);
  // This will remove all account data from the system forever.
  console.log(app_msg.destroyRecordsInstructionsMessage07);
  // If you wish to back-up the account data,
  console.log(app_msg.destroyRecordsInstructionsMessage08);
  // you can copy these files to another storage location before deleting them.
  console.log(app_msg.destroyRecordsInstructionsMessage09);
  // ****************************************************************************************************
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  createAccount,
  printAccountsData,
  printAccountData,
  deleteAccount,
  login,
  logout,
  startLesson,
  generateUserReport,
  printRecords,
  destroyRecords
}