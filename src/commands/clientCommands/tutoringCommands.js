/**
 * @file tutoringCommands.js
 * @module tutoringCommands
 * @description Contains all client defined commands fro execution of client actions with various operations, specific for typing tutoring.
 * @requires module:accountBroker
 * @requires module:application.command.constants
 * @requires module:application.message.constants
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
        let lessonAdvancementScoreLimit = await accountBroker.getLessonAdvancementScoreLimit();
        // lessonAdvancementScoreLimit is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonAdvancementScoreLimitIs + lessonAdvancementScoreLimit);
        // TODO: Filter on the above flag and determine if the user is going to be allowed to execute this lesson number or not,
        // TODO: based on their history of passing scores on all their previous lessons.
        let lessonScoreData = await accountBroker.executeLesson(userLessonNumber);
        // lessonScoreData is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonScoreDataIs + JSON.stringify(lessonScoreData));
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

export default {
  createAccount,
  printAccountsData,
  printAccountData,
  deleteAccount,
  login,
  logout,
  startLesson
}