/* eslint-disable no-undef */
/**
 * @file accountBroker.js
 * @module accountBroker
 * @description Contains all code for managing accounts, and account data.
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/speaker|speaker}
 * @requires {@link https://www.npmjs.com/package/pcm-util|pcm-util}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/28
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cfg from '../constants/application.configuration.constants.js';
import * as apc from '../constants/application.constants.js';
import * as app_msg from '../constants/application.message.constants.js';
import * as app_sys from '../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import Speaker from 'speaker';
import pcmUtils from 'pcm-util';
import chalk from 'chalk';
import path from 'path';

const { createPCMData } = pcmUtils;
const {bas, biz, clr, cfg, gen, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.haystacks-tt.brokers.accountBroker.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;
// Initialize the player so we have access to the system speaker. Generate a tone when the user types an incorrect key.
// This is part of an important learning strategy part of reinforcement learning through punishment, known as Operant conditioning.

/**
 * @function getAccountData
 * @description Recovers the currently loaded account data from its storage location on the Haystacks D-data structure data storage hive.
 * @return {object} A JSON object that contains all of the currently loaded account data.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function getAccountData() {
  let functionName = getAccountData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  // Get the account data that was loaded on startup.
  let rawAccountData = await haystacks.getData(app_sys.cuserAccounts);
  // rawAccountData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.crawAccountDataIs + JSON.stringify(rawAccountData));
  
  // For some reason the JSON data loads the data into a debugSettings data object,
  // I suspect this has something to do with how JSON data is loaded by Haystacks for the debug configuration settings.
  // Anyway, we can just go with it, it doesn't hurt.
  returnData = rawAccountData[cfg.cdebugSettings];
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getUserAccountData
 * @description Recovers data for a specific user, if the username is found.
 * @param {string} accountName The name of the user for which data should be recovered.
 * @return {object|boolean} A JSON object that contains all of a users data, or False if no user matches the input name.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function getUserAccountData(accountName) {
  let functionName = getUserAccountData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // accountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccountNameIs + accountName);
  let returnData = false;
  if (await doesAccountExist(accountName) === true) {
    let userAccountData = await getAccountData();
    // userAccountData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
    for (let userAccountKey in userAccountData) {
      // userAccountKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountKeyIs + userAccountKey);
      if (userAccountKey === accountName){
        returnData = userAccountData[userAccountKey];
        break;
      }
    } // End-for (let userAccountKey in userAccountData)
  } // End-if (await doesAccountExist(accountName) === true)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function storeAccountData
 * @description Stores account data to the Haystacks D-data structure data storage hive.
 * @return {boolean} True or False to indicate if the storage was completed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function storeAccountData(dataToStore) {
  let functionName = storeAccountData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // dataToStore is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cdataToStoreIs + JSON.stringify(dataToStore));
  let returnData = false;
  returnData = await haystacks.storeData(app_sys.cuserAccounts, {[cfg.cdebugSettings]: dataToStore});
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getLessonData
 * @description Recovers the currently loaded lesson data from its storage location on the Haystacks D-data structure data storage hive.
 * @return {object} A JSON object that contains all of the currently loaded lesson data.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function getLessonData() {
  let functionName = getLessonData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  // Get the lesson data that was loaded on startup.
  let rawLessonsData = await haystacks.getData(app_sys.capplicationLessons);
  // rawLessonsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.crawLessonsDataIs + JSON.stringify(rawLessonsData));

  // For some reason the JSON data loads the data into a debugSettings data object,
  // I suspect this has something to do with how JSON data is loaded by Haystacks for the debug configuration settings.
  // Anyway, we can just go with it, it doesn't hurt.
  returnData = rawLessonsData[cfg.cdebugSettings];
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getIndividualLessonData
 * @description Recovers the data for a specific lesson, based on an input lesson number.
 * @param {integer} lessonNumber The number of the lesson for which we should get data.
 * @return {object} A JSON object that contains lesson data for a specific lesson number.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getIndividualLessonData(lessonNumber) {
  let functionName = getIndividualLessonData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  let returnData = false;
  let allLessonsData = await getLessonData();
  if (Array.isArray(allLessonsData[app_sys.cLessonPlan]) && allLessonsData[app_sys.cLessonPlan].length > 0) {
    for (let lessonKey in allLessonsData[app_sys.cLessonPlan]) {
      // lessonKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonKeyIs + lessonKey);
      let individualLessonData = allLessonsData[app_sys.cLessonPlan][lessonKey];
      // individualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonDataIs + JSON.stringify(individualLessonData));
      let individualLessonDataKeys = Object.keys(individualLessonData);
      let lessonName = individualLessonDataKeys[0];
      // lessonName is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
      let actualLessonData = individualLessonData[individualLessonDataKeys[0]];
      // actualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cactualLessonDataIs + JSON.stringify(actualLessonData));
      let currentLessonNumber = actualLessonData[wrd.cNumber];
      // currentLessonNumber is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentLessonNumberIs + currentLessonNumber);
      if ((Number.isInteger(currentLessonNumber) && currentLessonNumber === lessonNumber) || parseInt(currentLessonNumber) === lessonNumber) {
        returnData = actualLessonData;
        break;
      } else {
        // ERROR: There was an error with the lesson data, invalid lesson number: 
        console.log(app_msg.cErrorGetIndividualLessonDataMessage01 + lessonKey);
      }
    } // End-for (let lessonKey in lessonsData[app_sys.cLessonPlan])
  } // End-if (Array.isArray(lessonsData[app_sys.cLessonPlan]) && lessonsData[app_sys.cLessonPlan].length > 0)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function doesAccountExist
 * @description Searches account data and determines if the account exists or does not.
 * @param {string} accountName The name of the account we are checking to see if it exists or not.
 * @return {boolean} True or False to indicate if the account exists or not.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function doesAccountExist(accountName) {
  let functionName = doesAccountExist.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // accountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccountNameIs + accountName);
  let returnData = false;
  // Get the account data that was loaded on startup:
  let userAccountData = await getAccountData();
  // userAccountData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
  for (let userAccountKey in userAccountData) {
    // userAccountKey is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountKeyIs + userAccountKey);
    if (userAccountKey === accountName){
      returnData = true;
      break;
    }
  } // End-for (let userAccountKey in userAccountData)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function createAccount
 * @description Does all the work of creating an account from scratch and generating all the generic account data.
 * @param {string} accountName The name of the account that should be generated.
 * @return {object} The newly created user account data with empty lesson records for every lesson in the typing tutor curriculum.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function createAccount(accountName) {
  let functionName = createAccount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // accountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccountNameIs + accountName);
  let returnData = false;
  let generatedBlankLessons = await generateBlankLessonData();
  returnData = {[accountName]: generatedBlankLessons};
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function removeAccount
 * @description Removes the specified account from the data structure.
 * @param {string} accountName The name of the account to be removed.
 * @param {object} allAccountsData A JSON object that contains all account data.
 * @return {object} The cleaned data structure with the account name removed.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function removeAccount(accountName, allAccountsData) {
  let functionName = removeAccount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // accountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccountNameIs + accountName);
  // allAccountsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callAccountsDataIs + JSON.stringify(allAccountsData));
  let returnData = false;
  if (accountName && allAccountsData) {
    for (let userAccountKey in allAccountsData) {
      // userAccountKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountKeyIs + userAccountKey);
      if (userAccountKey === accountName){
        delete allAccountsData[userAccountKey];
        break;
      }
    } // End-for (let userAccountKey in userAccountData)
    returnData = allAccountsData;
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function generateBlankLessonData
 * @description Generates an array of blank lessons data for every lesson in the typing tutor curriculum.
 * @return {array} An array of empty JSON objects for every lesson in the typing tutor curriculum.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function generateBlankLessonData() {
  let functionName = generateBlankLessonData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  // Get the lesson data.
  let lessonsData = await getLessonData();
  // lessonsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonsDataIs + JSON.stringify(lessonsData));
  returnData = [];
  if (Array.isArray(lessonsData[app_sys.cLessonPlan]) && lessonsData[app_sys.cLessonPlan].length > 0) {
    for (let lessonKey in lessonsData[app_sys.cLessonPlan]) {
      // lessonKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonKeyIs + lessonKey);
      let lessonData = lessonsData[app_sys.cLessonPlan][lessonKey];
      // lessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonDataIs + JSON.stringify(lessonData));
      let lessonNameArray = Object.keys(lessonData);
      // lessonNameArray is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameArrayIs + JSON.stringify(lessonNameArray));
      let lessonName = lessonNameArray[0];
      // lessonName is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
      returnData.push({[lessonName]: {}});
    } // End-for (let lessonKey in lessonsData[app_sys.cLessonPlan])
  } // End-if (Array.isArray(lessonsData[app_sys.cLessonPlan]) && lessonsData[app_sys.cLessonPlan].length > 0)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function currentUserAccount
 * @description Gets the currently logged in user account.
 * @return {string} The name of the currently logged in user account.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function currentUserAccount() {
  let functionName = currentUserAccount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cCurrentUser);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loginUser
 * @description Does the work to login the specified username.
 * @param {string} accountName The username that should be logged in.
 * @return {boolean} True or False to indicate if the login was completed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function loginUser(accountName) {
  let functionName = loginUser.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // accountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccountNameIs + accountName);
  let returnData = false;
  returnData = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentUser, accountName);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function logoutUser
 * @description Logs the specified user out of the system, sets the currently logged in user as an empty string.
 * @param {string} accountName The name of the user that should be logged out.
 * Actually we don't even need the name of the currently logged in user to logout.
 * @return {boolean} True or False to indicate if the user was logged out successfully or not.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function logoutUser(accountName) {
  let functionName = logoutUser.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // accountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccountNameIs + accountName);
  let returnData = false;
  returnData = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentUser, '');
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function executeLesson
 * @description Does the work of executing the lesson, print out the line the user should type as part of the lesson.
 * Also capture the user input and compare each character with the expected input and format color output accordingly.
 * Also play a sound on the system speaker if the user types in incorrect keystroke.
 * @param {integer} lessonNumber The number of the lesson that should be executed.
 * @return {object} A JSON object that contains statistic of the lesson when it is completed.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function executeLesson(lessonNumber) {
  let functionName = executeLesson.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  let returnData = false;
  let individualLessonData = await getIndividualLessonData(lessonNumber);
  // individualLessonData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonDataIs + JSON.stringify(individualLessonData));
  if (individualLessonData) {
    let lessonDescription = individualLessonData[wrd.cDescription];
    // lessonDescription is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonDescriptionIs + lessonDescription);
    let allLessonLines = individualLessonData[wrd.cLines];
    // allLessonLines is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callLessonLinesIs + JSON.stringify(allLessonLines));
    let lessonPassingScoreEnabled = await isLessonAdvancementLimitEnabled();
    // lessonPassingScoreEnabled is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonPassingScoreEnabledIs + lessonPassingScoreEnabled);
    // ****************************************************************************************************
    // LESSON INSTRUCTIONS:
    console.log(app_msg.cLessonInstructionsMessage01);
    // Place your left index finger on the "F" key, and your right index finger on the "J" key.
    console.log(app_msg.cLessonInstructionsMessage02);
    // Feel for the small raised bumps on the keys.
    console.log(app_msg.cLessonInstructionsMessage03);
    // These will help you ensure your fingers are on the correct home row before you begin typing.
    console.log(app_msg.cLessonInstructionsMessage04);
    // The rest of your fingers should naturally fall to the 3 keys adjacent and inline on the same row.
    console.log(app_msg.cLessonInstructionsMessage05);
    // Left fingers should rest on the keys "D", "S", and "A".
    console.log(app_msg.cLessonInstructionsMessage06);
    // Right fingers should rest on the keys "K", "L", and ";".
    console.log(app_msg.cLessonInstructionsMessage07);
    // Sit upright in your chair, back straight, elbows at your sides.
    console.log(app_msg.cLessonInstructionsMessage08);
    // The lesson will begin when you type the first character for each line.
    console.log(app_msg.cLessonInstructionsMessage09);
    // This is a timed lesson, so the faster you go the better your score will be.
    console.log(app_msg.cLessonInstructionsMessage10);
    // However, typing errors count against your score.
    console.log(app_msg.cLessonInstructionsMessage11);
    
    if (lessonPassingScoreEnabled === true) {
      let passingScoreLimit = await getLessonAdvancementScoreLimit();
      // passingScoreLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cpassingScoreLimitIs + passingScoreLimit);
      // You must get a score of:
      // or higher to advance to the next lesson.
      console.log(app_msg.cLessonInstructionsMessage12 + passingScoreLimit + bas.cPercent + bas.cSpace + app_msg.cLessonInstructionsMessage13);
    }
    
    // A report showing your score will display after the lesson is complete.
    console.log(app_msg.cLessonInstructionsMessage14);
    // Press the "ESC" key, in the far upper left corner of the keyboard to cancel a lesson.
    console.log(app_msg.cLessonInstructionsMessage15);
    // ****************************************************************************************************
    let allLessonLinesDataKeys = Object.keys(allLessonLines);
    let allLessonLinesDataObject = allLessonLines[allLessonLinesDataKeys[0]];
    // allLessonLinesDataObject is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callLessonLinesDataObjectIs + JSON.stringify(allLessonLinesDataObject));
    if (allLessonLinesDataObject) {
      for (const individualLessonLineKey in allLessonLinesDataObject) {
        // individualLessonLineKey is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonLineKeyIs + individualLessonLineKey);
        let individualLessonLine = allLessonLinesDataObject[individualLessonLineKey];
        // individualLessonLine is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonLineIs + JSON.stringify(individualLessonLine));
        let lessonLineScoreData = await executeLessonLine(individualLessonLine);
        // lessonLineScoreData is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonLineScoreDataIs + JSON.stringify(lessonLineScoreData));
        if (lessonLineScoreData === false) {
          // User must have pressed the ESC key, break completely out!
          break;
        }
      } // End-for (let individualLessonLineKey in allLessonLines)
    } else {
      // ERROR: No lesson lines for the specified lesson number:
      console.log(app_msg.cErrorExecuteLessonMessage01 + lessonNumber);
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function executeLessonLine
 * @description Prompts the user with the typing tutoring lesson line,
 * Captures the user input as the user types it,
 * Checks if the user typed the correct character or not,
 * Tracks the time when the user starts typing the line, and when the user is done typing the line.
 * Alerts each time the user makes an error by typing a character that doesn't match the expected input.
 * Tracks all the errors the user makes when typing the same line.
 * Escapes the lesson if the user presses the ESC key.
 * Generates some report data that can be used to aggregate statistics across an entire lesson by the calling function.
 * @param {string} lessonLineString The string of characters the user should type into their keyboard.
 * @return {object} A JSON object that contains the start time, end time, and number of errors, and the length of the string.
 * @author Seth Hollingsead
 * @date 2023/03/02
 */
async function executeLessonLine(lessonLineString) {
  let functionName = executeLessonLine.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonLineString is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonLineStringIs + lessonLineString);
  let returnData = false;
  let userQuit = false;
  let userCharacterEntryCount = 0; // Used to track the number of characters the user has entered, as they type.
  let charactersCorrectCount = 0;
  let charactersIncorrectCount = 0;
  let lineStartTime = '';
  let lineEndTime = '';
  let deltaTime = '';
  let greenBackground = await haystacks.executeBusinessRules([clr.cGreen, [0,255,0]], [biz.cgetNamedColorDataArray]);
  let redBackground = await haystacks.executeBusinessRules([clr.cRed, [255,0,0]], [biz.cgetNamedColorDataArray]);
  let blackForeground = await haystacks.executeBusinessRules([clr.cBlack, [0,0,0]], [biz.cgetNamedColorDataArray]);
  console.log(lessonLineString); // Output the text the user should type as part of the lesson line.

  while (userCharacterEntryCount < lessonLineString.length) {
    let userEnteredCharacter = await haystacks.executeBusinessRules(['', ''], [biz.cpromptRaw]);
    if (userEnteredCharacter === false) {
      userQuit = true;
      break;
    }
    if (userCharacterEntryCount === 0) {
      // The user just entered the first character. Start the timer.
      lineStartTime = await haystacks.executeBusinessRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
      // lineStartTime is:
      // await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clineStartTimeIs + lineStartTime);
    }
    // Format the user entered keystroke with chalk, based on if it is the correct character or an incorrect character.
    if (userEnteredCharacter === lessonLineString.charAt(userCharacterEntryCount)) {
      // User entered the correct character
      userEnteredCharacter = chalk.rgb(blackForeground[0], blackForeground[1], blackForeground[2])(userEnteredCharacter);
      userEnteredCharacter = chalk.bgRgb(greenBackground[0], greenBackground[1], greenBackground[2])(userEnteredCharacter);
      charactersCorrectCount = charactersCorrectCount + 1;
    } else {
      // user entered an incorrect character
      userEnteredCharacter = chalk.rgb(blackForeground[0], blackForeground[1], blackForeground[2])(userEnteredCharacter);
      userEnteredCharacter = chalk.bgRgb(redBackground[0], redBackground[1], redBackground[2])(userEnteredCharacter);
      charactersIncorrectCount = charactersIncorrectCount + 1;
      await generateTone();
    }
    userCharacterEntryCount = userCharacterEntryCount + 1;
    // userEnteredCharacter is:
    // await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserEnteredCharacterIs + userEnteredCharacter);
    process.stdout.write(userEnteredCharacter);
  }
  if (userQuit === false) {
    // Make sure we write out a new line so followup logs will not be on the same line as the user entry from the above loop.
    process.stdout.write(bas.cNewLine);
    lineEndTime = await haystacks.executeBusinessRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
    // lineEndTime is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clineEndTimeIs + lineEndTime);
    deltaTime = await haystacks.executeBusinessRules([lineStartTime, lineEndTime], [biz.ccomputeDeltaTime]);
    // deltaTime is:
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cdeltaTimeIs + deltaTime);
    // charactersCorrectCount is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccharactersCorrectCountIs + charactersCorrectCount);
    // charactersIncorrectCount is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccharactersInCorrectCountIs + charactersIncorrectCount);
    returnData = {
      [app_sys.clineStartTime]: lineStartTime,
      [app_sys.clineEndTime]: lineEndTime,
      [app_sys.cdeltaTime]: deltaTime,
      [app_sys.ccorrectCharacterCount]: charactersCorrectCount,
      [app_sys.cincorrectCharacterCount]: charactersIncorrectCount
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function generateTone
 * @description Generates a short burst tone to the system speaker to let the user know they have entered an incorrect character.
 * @return {boolean} True or False to indicate if the tone was generated successfully or not.
 * @author Seth Hollingsead
 * @date 2023/03/02
 * @NOTE Initialize the player so we have access to the system speaker. Generate a tone when the user types an incorrect key.
 * This is part of an important learning strategy part of reinforcement learning through punishment, known as Operant conditioning.
 */
async function generateTone() {
  let functionName = generateTone.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  // ATTEMPT 1
  // ********************************************************************
  // const frequency = 440; // Hz
  // const duration = 500; // ms
  // const sampleRate = 44100;
  // const amplitude = 0.5; // Volume

  // const numSamples = sampleRate * (duration / 1000);
  // const buffer = Buffer.alloc(numSamples * 2);
  // let sample;

  // for (let i = 0; i < numSamples; i++) {
  //   const t = i / sampleRate;
  //   sample = Math.round(amplitude * 32767 * Math.sin(2 * Math.Pi * frequency * t));
  //   buffer.writeInt16LE(sample, i * 2);
  // }

  // player.play(buffer);
  // ********************************************************************

  // ATTEMPT 2
  // ********************************************************************
  // process.stderr.write('\007');
  // ********************************************************************
  
  // ATTEMPT 3
  // ********************************************************************
  // process.stderr.write('0x07');
  // ********************************************************************

  // ATTEMPT 4
  // ********************************************************************
  // const sampleRate = 44100;
  // const frequency = 440; // Hz
  // const duration = 1000; // ms
  // const amplitude = 0.5;

  // const generator = audioGenerator(() => {
  //   let t = 0;
  //   return (time, i) => {
  //     t = time;
  //     return amplitude * Math.sin(2 * Math.PI * frequency * t);
  //   };
  // }, { duration, sampleRate });

  // generator.pipe(new Speaker({ sampleRate }));
  // ********************************************************************

  const sampleRate = 44100;
  const frequency = 440; // Hz
  const duration = 1000; // ms
  const amplitude = 0.5;

  const numSamples = sampleRate * (duration / 1000);
  const buffer = createPCMData({
    sampleRate,
    bitDepth: 16,
    channelCount: 1,
    interleaved: true,
    data: new Float32Array(numSamples).map((_, i) => {
      const t = i / sampleRate;
      return amplitude * Math.sin(2 * Math.PI * frequency * t);
    }),
  });

  const speaker = new Speaker({
    sampleRate: sampleRate,
    bitDepth: 16,
    channels: 1,
  });

  speaker.write(buffer);
  returnData = true;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getHighestLessonCount
 * @description Returns a number for the highest lesson number for the lessons currently available in the curriculum.
 * @return {integer} The highest lesson number available in the curriculum.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function getHighestLessonCount() {
  let functionName = getHighestLessonCount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = 0;
  let lessonsData = await getLessonData();
  // lessonsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonsDataIs + JSON.stringify(lessonsData));
  if (lessonsData[app_sys.cLessonPlan] && Array.isArray(lessonsData[app_sys.cLessonPlan])) {
    returnData = lessonsData[app_sys.cLessonPlan].length;
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getLessonAdvancementScoreLimit
 * @description Recovers the configuration setting for the lesson advancement score limit.
 * The score that a user must get on any given lesson before advancing to the next lesson.
 * @return {integer} The highest score the user must get before advancing to the next lesson.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getLessonAdvancementScoreLimit() {
  let functionName = getLessonAdvancementScoreLimit.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = 0;
  if (await isLessonAdvancementLimitEnabled() === true) {
    returnData = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.clessonPlanSuccessLimitingFactor);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isLessonAdvancementLimitEnabled
 * @description Recovers the configuration setting that determines if the user has enabled or disabled the lesson advancement score limit.
 * @return {boolean} True or False to indicate the state of the configuration setting.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function isLessonAdvancementLimitEnabled() {
  let functionName = isLessonAdvancementLimitEnabled.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  returnData = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cenableLessonPlanLimitingFactor);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getHighestScoreForLesson
 * @description Uses the currently logged in user and a lesson number to determine what was the highest score the user got for that lesson.
 * There could be many lesson data records for each lesson. This will find the highest score for all of them.
 * @param {integer} lessonNumber The lesson number that we should get the highest score for.
 * @return {integer} The value of the highest score the user got for the specified lesson number.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getHighestScoreForLesson(lessonNumber) {
  let functionName = getHighestScoreForLesson.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  let returnData = false;
  let currentUserName = await currentUserAccount();
  // currentUserName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameIs + currentUserName);
  let userAccountData = await getUserAccountData(currentUserName);
  // userAccountData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
  // TODO: Get the data for a specific lesson.
  // TODO: Iterate over the lesson data and try to find the highest score.
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getHighestLessonNumberAboveAdvancementScoringLimit
 * @description Uses the currently logged in user to scan the users data and determine what is
 * the highest lesson number with a score above the lesson advancement limit, if the advancement limit is enabled.
 * If the limit is not enabled, then the function returns the highest number of lessons that are currently implemented and loaded in the system.
 * @return {integer} Returns the lesson number with the highest passing score, or the number of lessons in the system, if the passing score is disabled.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getHighestLessonNumberAboveAdvancementScoringLimit() {
  let functionName = getHighestLessonNumberAboveAdvancementScoringLimit.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = 0;
  returnData = await getHighestLessonCount();
  if (await isLessonAdvancementLimitEnabled() === true) {
    let currentUserName = await currentUserAccount();
    // currentUserName is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameIs + currentUserName);
    let userAccountData = await getUserAccountData(currentUserName);
    // userAccountData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
    // TODO: Implement the rest of the function here walking over the users data.
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  getAccountData,
  getUserAccountData,
  storeAccountData,
  getLessonData,
  getIndividualLessonData,
  doesAccountExist,
  createAccount,
  removeAccount,
  generateBlankLessonData,
  currentUserAccount,
  loginUser,
  logoutUser,
  executeLesson,
  getHighestLessonCount,
  getLessonAdvancementScoreLimit,
  isLessonAdvancementLimitEnabled,
  getHighestScoreForLesson,
  getHighestLessonNumberAboveAdvancementScoringLimit
}