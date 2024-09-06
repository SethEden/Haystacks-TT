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
// import Speaker from 'speaker';
// import pcmUtils from 'pcm-util';
import chalk from 'chalk';
import path from 'path';

// const { createPCMData } = pcmUtils;
const {bas, biz, clr, cfg, gen, msg, num, phn, unt, wrd} = hayConst;
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
 * @function doesUserHaveCurriculumIndex
 * @param {integer} curriculumIndex The index of the curriculum that we should verify exists in the users data lesson records.
 * @return {boolean} True or False to indicate if the curriculumIndex exists in the users lesson data records.
 * @author Seth Hollingsead
 * @date 2024/09/04
 */
async function doesUserHaveCurriculumIndex(curriculumIndex) {
  let functionName = doesUserHaveCurriculumIndex.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // curriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumIndexIs + curriculumIndex);
  let returnData = false;
  let currentUserAccountName = await currentUserAccount();
  // currentUserAccountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserAccountNameIs + currentUserAccountName);
  let allAccountsData = await getAccountData();
  // allAccountsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callAccountsDataIs + JSON.stringify(allAccountsData));
  for (let userName in allAccountsData) {
    let userData = allAccountsData[userName];
    // userName is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserNameIs + JSON.stringify(userName));
    // userData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserDataIs + JSON.stringify(userData));
    if (userName === currentUserAccountName) {
      // We found the matching user account.
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWeFoundMatchingUserAccount);
      for (let curriculumData of userData) {
        // curriculumData is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumDataIs + JSON.stringify(curriculumData));
        if (curriculumData.curriculumIndex === curriculumIndex) {
          // We found the matching curriculumIndex.
          returnData = true;
        }
      } // End-for (let curriculumData of userData)
    } // End-if (userName === currentUserAccountName)
  } // End-for (let userName in allAccountsData)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function appendUsersLessonScoreData
 * @description Adds a users lesson score data to a users account data according to the lesson number.
 * @param {object} dataToAppend A JSON object that contains lesson scores data.
 * @param {integer} lessonNumber The lesson number for which the data should apply.
 * @param {integer} optionalCurriculumIndex The index of the curriculum where the lesson should be added.
 * @author Seth Hollingsead
 * @date 2023/03/06
 */
async function appendUsersLessonScoreData(dataToAppend, lessonNumber, optionalCurriculumIndex) {
  let functionName = appendUsersLessonScoreData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // dataToAppend is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cdataToAppendIs + JSON.stringify(dataToAppend));
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = false;
  // We should probably find out if the user has any data for the optionalCurriculumIndex.
  // It may be the case that the user has just finished their very first lesson in a new curriculum
  // and there is no object for the optionalCurriculumIndex.
  let userHasCurriculumIndex = await doesUserHaveCurriculumIndex(optionalCurriculumIndex);
  // userHasCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserHasCurriculumIndexIs + userHasCurriculumIndex);
  let currentUserAccountName = await currentUserAccount();
  // currentUserAccountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserAccountNameIs + currentUserAccountName);
  let lessonName = await getIndividualLessonName(lessonNumber, optionalCurriculumIndex);
  // lessonName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
  let allAccountsData = await getAccountData();
  // allAccountsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callAccountsDataIs + JSON.stringify(allAccountsData));
  if (!userHasCurriculumIndex) {
    // We need to add a curriculum object to the users account data,
    // before we get the users account data and start iterating over it to add the lesson record to it.
    for (let userName1 in allAccountsData) {
      // userName2 is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserName1Is + JSON.stringify(userName1));
      if (userName1 === currentUserAccountName) {
        // We found the matching user account, userName1
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWeFoundMatchingUserAccount + app_msg.cuserName + num.c1);
        let userData1 = allAccountsData[userName1];
        // userData1 is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserData1Is + JSON.stringify(userData1));
        // Create the new curriculum object
        let newCurriculum = {
          [app_sys.ccurriculumName]: await getCurriculumNameFromIndex(optionalCurriculumIndex),
          [app_sys.ccurriculumIndex]: optionalCurriculumIndex,
          [wrd.cLessons]: []
        };

        // Add new curriculum object to user data
        userData1.push(newCurriculum);
        break;
      } // End-if (userName1 === currentUserAccountName)
    } // End-for (let userName1 in allAccountsData)
  } // End-if (!userHasCurriculumIndex)
  
  for (let userName2 in allAccountsData) {
    let userData2 = allAccountsData[userName2];
    // userName2 is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserName2Is + JSON.stringify(userName2));
    // userData2 is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserData2Is + JSON.stringify(userData2));
    if (userName2 === currentUserAccountName) {
      // We found the matching user account. userName2
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWeFoundMatchingUserAccount + app_msg.cuserName + num.c2);
      for (let curriculumData of userData2) {
        // curriculumData is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumDataIs + JSON.stringify(curriculumData));
        if (curriculumData.curriculumIndex === optionalCurriculumIndex) {
          // We found the matching curriculumIndex.
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWeFoundMatchingCurriculumIndex);
          let lessons = curriculumData.Lessons;
          let lessonFound = false;
          // lessons is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonsIs + JSON.stringify(lessons));

          for (let lesson of lessons) {
            let existingLessonName = Object.keys(lesson)[0];
            // existingLessonName is:
            await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cexistingLessonNameIs + existingLessonName);
            if (existingLessonName === lessonName) {
              // We found the matching lessonName.
              await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWeFoundMatchingLessonName);
              lesson[existingLessonName].push(dataToAppend);
              lessonFound = true;
              break;
            }
          } // End-for (let lesson of lessons)

          if (!lessonFound) {
            let newLesson = {};
            newLesson[lessonName] = [dataToAppend];
            lessons.push(newLesson);
          }
          break;
        } // End-if (curriculumData.curriculumIndex === optionalCurriculumIndex)
      } // End-for (let curriculumData of userData2)
      break;
    } // End-if (userName2 === currentUserAccountName)
  } // End-for (let userAccountKey in allAccountsData)
  returnData = allAccountsData;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getUsersLessonScoreData
 * @description Finds the lesson score data for the current user and returns the entire collection of data for the specified lesson.
 * @param {integer} lessonNumber The lesson number for which the data should be returned.
 * @return {object} The JSON object that contains all of the lesson data for the specified lesson number.
 * @author Seth Hollingsead
 * @date 2023/03/08
 */
async function getUsersLessonScoreData(lessonNumber) {
  let functionName = getUsersLessonScoreData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  let returnData = false;
  let foundLessonData = false;
  let currentUserAccountName = await currentUserAccount();
  // currentUserAccountName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.currentUserAccountNameIs + currentUserAccountName);
  let lessonName = await getIndividualLessonName(lessonNumber);
  // lessonName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
  let allAccountsData = await getAccountData();
  // allAccountsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callAccountsDataIs + JSON.stringify(allAccountsData));
  for (let userAccountKey in allAccountsData) {
    // userAccountKey is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountKeyIs + userAccountKey);
    if (userAccountKey === currentUserAccountName) {
      let userAccountData = allAccountsData[userAccountKey];
      for (const lessonNameKey in userAccountData) {
        // lessonNameKey is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameKeyIs + lessonNameKey);
        let usersLessonDataObject = userAccountData[lessonNameKey];
        // usersLessonDataObject is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cusersLessonDataObjectIs + JSON.stringify(usersLessonDataObject));
        let usersLessonDataObjectKeys = Object.keys(usersLessonDataObject);
        // usersLessonDataObjectKeys is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cusersLessonDataObjectKeysIs + JSON.stringify(usersLessonDataObjectKeys));
        if (usersLessonDataObjectKeys[0] === lessonName) {
          // lessonNameKey === lessonName
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameKeyEqualsLessonName);
          let usersLessonData = userAccountData[lessonNameKey];
          // usersLessonData is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cusersLessonDataIs + JSON.stringify(usersLessonData));
          returnData = usersLessonData;
          foundLessonData = true;
          break;
        } // End-if (usersLessonDataObjectKeys[0] === lessonName)
      } // End-for (const lessonNameKey in userAccountData)
    } // End-if (userAccountKey === currentUserAccountName)
    if (foundLessonData === true) {
      break;
    }
  } // End-for (let userAccountKey in allAccountsData)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function saveAccountData
 * @description Iterates over all of the user accounts in the system and saves each of them out to JSON files under the accounts resource folder.
 * @return {boolean} True or False to indicate if all of the save operations were successful or not.
 * @author Seth Hollingsead
 * @date 2023/03/07
 */
async function saveAccountData() {
  let functionName = saveAccountData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  let allSuccess = true;
  let pathSeparator = '';
  let appAccountsPath = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cappAccountsPath);
  // appAccountsPath is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cappAccountsPathIs + appAccountsPath);
  // eslint-disable-next-line no-undef
  if (process.platform === gen.cwin32) {
    pathSeparator = bas.cBackSlash;
  } else {
    pathSeparator = bas.cForwardSlash;
  }
  let allAccountsData = await getAccountData();
  // allAccountsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callAccountsDataIs + JSON.stringify(allAccountsData));
  for (let userAccountKey in allAccountsData) {
    // userAccountKey is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountKeyIs + userAccountKey);
    let userAccountData = allAccountsData[userAccountKey];
    // userAccountData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
    let userAccountFilenameAndPath = appAccountsPath + pathSeparator + userAccountKey + gen.cDotJson;
    let success = await haystacks.executeBusinessRules([userAccountFilenameAndPath, userAccountData], [biz.cwriteJsonData]);
    if (success === false) {
      // ERROR: Failure to write out the file:
      console.log(app_msg.csaveAccountDataFailureMessage01 + userAccountFilenameAndPath);
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csaveAccountDataFailureMessage01 + userAccountFilenameAndPath);
      allSuccess = false;
    }
  } // End-for (let userAccountKey in allAccountsData)
  if (allSuccess === true) {
    returnData = true;
  }
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
 * @function getLessonCount
 * @description Returns the number of lessons in the curriculum.
 * @param optionalCurriculumIndex An optional index parameter to specify the curriculum for which the lesson count should be returned.
 * If no curriculum index value is provided, or the value is negative,
 * then the current curriculum index from the configuration settings will be used.
 * @return {integer} The number of lessons in the current curriculum, or specified curriculum.
 * @author Seth Hollingsead
 * @date 2023/03/08
 */
async function getLessonCount(optionalCurriculumIndex) {
  let functionName = getLessonCount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = false;
  returnData = await getHighestLessonCount(optionalCurriculumIndex);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getIndividualLessonData
 * @description Recovers the data for a specific lesson, based on an input lesson number.
 * @param {integer} lessonNumber The number of the lesson for which we should get data.
 * @param {integer} optionalCurriculumIndex An optional parameter for the specified curriculum index that should be used when looking up the lesson data.
 * @return {object} A JSON object that contains lesson data for a specific lesson number.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getIndividualLessonData(lessonNumber, optionalCurriculumIndex) {
  let functionName = getIndividualLessonData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = false;
  let currentCurriculumIndex = 0;
  let lessonPlanKeys = [];
  if (optionalCurriculumIndex !== undefined && optionalCurriculumIndex >= 0) {
    currentCurriculumIndex = optionalCurriculumIndex;
  } else {
    currentCurriculumIndex = await getCurrentCurriculumIndex();
  }
  let currentCurriculumData = await getCurriculumObject(currentCurriculumIndex);
  // currentCurriculumData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentCurriculumDataIs + JSON.stringify(currentCurriculumData));
  // Make sure we are indexing the correct lesson curriculum before we try and get the individual lesson data.
  lessonPlanKeys = await getLessonPlanKeysForCurriculumIndex(currentCurriculumIndex);
  // lessonPlanKeys is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonPlanKeysIs + JSON.stringify(lessonPlanKeys));
  if (Array.isArray(lessonPlanKeys) && lessonPlanKeys.length > 0) {
    for (let lessonKey in lessonPlanKeys) {
      // lessonKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonKeyIs + lessonKey);
      let lessonKeyValue = lessonPlanKeys[lessonKey];
      // lessonKeyValue is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonKeyValueIs + lessonKeyValue);
      let individualLessonData = currentCurriculumData[app_sys.cLessonPlan][0][lessonKeyValue];
      // individualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonDataIs + JSON.stringify(individualLessonData));
      let lessonName = lessonKeyValue;
      // lessonName is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
      let actualLessonData = individualLessonData[wrd.cLines];
      // actualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cactualLessonDataIs + JSON.stringify(actualLessonData));
      let currentLessonNumber = individualLessonData[wrd.cNumber];
      // currentLessonNumber is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentLessonNumberIs + currentLessonNumber);
      if ((Number.isInteger(currentLessonNumber) && currentLessonNumber === lessonNumber) || parseInt(currentLessonNumber) === lessonNumber) {
        returnData = individualLessonData;
        break;
      } else {
        // ERROR: There was an error with the lesson data, invalid lesson number: 
        // console.log(app_msg.cErrorGetIndividualLessonDataMessage01 + lessonKey);
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorGetIndividualLessonDataMessage01 + lessonKey);
      }
    } // End-for (let lessonKey in lessonsData[app_sys.cLessonPlan])
  } // End-if (Array.isArray(lessonsData[app_sys.cLessonPlan]) && lessonsData[app_sys.cLessonPlan].length > 0)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getIndividualLessonName
 * @description Recovers the name of a lesson, based on the input lesson number.
 * @param {integer} lessonNumber The number of the lesson for which we should get a lesson name.
 * @param {integer} optionalCurriculumIndex An optional parameter for the specified curriculum index that should be used when looking up the lesson data.
 * @return {string} The name of the specified lesson.
 * @author Seth Hollingsead
 * @date 2023/03/06
 */
async function getIndividualLessonName(lessonNumber, optionalCurriculumIndex) {
  let functionName = getIndividualLessonName.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = false;
  let currentCurriculumIndex = 0;
  let lessonPlanKeys = [];
  if (optionalCurriculumIndex !== undefined && optionalCurriculumIndex >= 0) {
    currentCurriculumIndex = optionalCurriculumIndex;
  } else {
    currentCurriculumIndex = await getCurrentCurriculumIndex();
  }
  let currentCurriculumData = await getCurriculumObject(currentCurriculumIndex);
  // Make sure we are indexing the correct lesson curriculum before we try and get the individual lesson data.
  lessonPlanKeys = await getLessonPlanKeysForCurriculumIndex(currentCurriculumIndex);
  // lessonPlanKeys is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonPlanKeysIs + JSON.stringify(lessonPlanKeys));
  if (Array.isArray(lessonPlanKeys) && lessonPlanKeys.length > 0) {
    for (let lessonKey in lessonPlanKeys) {
      // lessonKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonKeyIs + lessonKey);
      let lessonKeyValue = lessonPlanKeys[lessonKey];
      // lessonKeyValue is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonKeyValueIs + lessonKeyValue);
      let individualLessonData = currentCurriculumData[app_sys.cLessonPlan][0][lessonKeyValue];
      // individualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonDataIs + JSON.stringify(individualLessonData));
      let lessonName = lessonKeyValue;
      // lessonName is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
      let actualLessonData = individualLessonData[wrd.cLines];
      // actualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cactualLessonDataIs + JSON.stringify(actualLessonData));
      let currentLessonNumber = individualLessonData[wrd.cNumber];
      // currentLessonNumber is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentLessonNumberIs + currentLessonNumber);
      if ((Number.isInteger(currentLessonNumber) && currentLessonNumber === lessonNumber) || parseInt(currentLessonNumber) === lessonNumber) {
        returnData = lessonName;
        break;
      } else {
        // // ERROR: There was an error with the lesson data, invalid lesson number: 
        // console.log(app_msg.cErrorGetIndividualLessonDataMessage01 + lessonKey);
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorGetIndividualLessonDataMessage01 + lessonKey);
      }
    } // End-for (let lessonKey in allLessonsData[app_sys.cLessonPlan])
  } // End-if (Array.isArray(allLessonsData[app_sys.cLessonPlan]) && allLessonsData[app_sys.cLessonPlan].length > 0)
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
  await haystacks.consoleLog(namespacePrefix, functionName, functionName + bas.cColon + msg.creturnDataIs + JSON.stringify(returnData));
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
  let generatedBlankLessons = await generateBlankLessonData(0);
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
 * @param {string} curriculumName The name of the curriculum for which lesson data should be generated.
 * @return {array} An array of empty JSON objects for every lesson in the typing tutor curriculum.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function generateBlankLessonData(curriculumName) {
  let functionName = generateBlankLessonData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // curriculumName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumNameIs + curriculumName);
  let returnData = false;
  currentCurriculumIndex = await lookupCurriculum(curriculumName);
  // Get the lesson data.
  let masterLessonsData = await getCurriculumObject(currentCurriculumIndex);
  // masterLessonsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cmasterLessonsData + JSON.stringify(masterLessonsData));
  returnData = [];
  if (Array.isArray(masterLessonsData[app_sys.cLessonPlan]) && masterLessonsData[app_sys.cLessonPlan].length > 0) {
    for (let lessonKey in masterLessonsData[app_sys.cLessonPlan]) {
      // lessonKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonKeyIs + lessonKey);
      let lessonData = masterLessonsData[app_sys.cLessonPlan][lessonKey];
      // lessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonDataIs + JSON.stringify(lessonData));
      let lessonNameArray = Object.keys(lessonData);
      // lessonNameArray is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameArrayIs + JSON.stringify(lessonNameArray));
      for (let lessonNameKey in lessonNameArray) {
        // lessonNameKey is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameKeyIs + lessonNameKey);
        let lessonName = lessonNameArray[lessonNameKey];
        // lessonName is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
        returnData.push({[lessonName]: []});
      } // End-for (let lessonName in lessonNameArray)      
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
  await haystacks.consoleLog(namespacePrefix, functionName, functionName + bas.cColon + msg.creturnDataIs + JSON.stringify(returnData));
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
 * @function setCurrentCurriculum
 * @description Checks to make sure that a valid user is logged in, checks if the setting adhereToCurriculumOrderRequirement
 * is set or not set. If it is not set, then the current users current curriculum is set to the desired curriculum.
 * If the setting is set, then also checks if the user has passed all of the necessary prerequisite lessons and curriculums.
 * If the user has passed all of the necessary prerequisite lessons and curricula, then the desired curriculum is set.
 * If the necessary prerequisite lessons and curricula have not been passed then an error message is presented and the
 * desired curriculum is not set.
 * @param {string|integer} desiredCurriculum The name or index of the desired curriculum to be set as the current curriculum.
 * @return {boolean} True or False to indicate if the current curriculum was set according to the desired curriculum.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function setCurrentCurriculum(desiredCurriculum) {
  let functionName = setCurrentCurriculum.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // desiredCurriculum is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cdesiredCurriculumIs + desiredCurriculum);
  let returnData = false;
  let currentUser = '';
  let adhereToCurriculumOrderRequirement = false;
  let fullyQualifiedCurriculumName = '';
  let fullyQualifiedCurriculumIndex = 0;
  let passedAllPrerequisiteRequirements = true;
  if (desiredCurriculum !== undefined && desiredCurriculum !== '') {
    currentUser = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cCurrentUser);
    // currentUser is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserIs + currentUser);
    if (currentUser !== '') {
      adhereToCurriculumOrderRequirement = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cadhereToCurriculumOrderRequirement);
      // adhereToCurriculumOrderRequirement is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cadhereToCurriculumOrderRequirementIs + adhereToCurriculumOrderRequirement);
      fullyQualifiedCurriculumIndex = await lookupCurriculum(desiredCurriculum);
      // fullyQualifiedCurriculumIndex is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cfullyQualifiedCurriculumIndexIs + fullyQualifiedCurriculumIndex);
      if (fullyQualifiedCurriculumIndex !== false) {
        fullyQualifiedCurriculumName = await getCurriculumNameFromIndex(fullyQualifiedCurriculumIndex);
      }
      // fullyQualifiedCurriculumName is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccfullyQualifiedCurriculumNameIs + fullyQualifiedCurriculumName);
      if ((fullyQualifiedCurriculumIndex !== false && fullyQualifiedCurriculumName !== false) &&
      (fullyQualifiedCurriculumIndex !== '' && fullyQualifiedCurriculumName !== '')) {
        if (adhereToCurriculumOrderRequirement === true) {
          let listOfCurrentCurriculumPrerequisites = await getListOfPrerequisiteCurriculumIndicesForSpecifiedIndex(fullyQualifiedCurriculumIndex);
          // listOfCurrentCurriculumPrerequisites is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clistOfCurrentCurriculumPrerequisitesIs + listOfCurrentCurriculumPrerequisites);
          if (listOfCurrentCurriculumPrerequisites !== '' || (Array.isArray(listOfCurrentCurriculumPrerequisites) === true && listOfCurrentCurriculumPrerequisites.length > 0)) {
            // listOfCurrentCurriculumPrerequisites.length is:
            await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clistOfCurrentCurriculumPrerequisitesLengthIs + listOfCurrentCurriculumPrerequisites.length);
            if (listOfCurrentCurriculumPrerequisites.length === 1 && listOfCurrentCurriculumPrerequisites[0] !== '') {
              // Determine if the user is allowed to set the current curriculum name and if all the prerequisites for the current user meet the curriculum order requirement.
              // Determine if the user has completed the necessary prerequisite lessons and curriculums.
              await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csetCurrentCurriculumMessage1);
              for (const verifyCurriculumIndex in listOfCurrentCurriculumPrerequisites) {
                // verifyCurriculumIndex is:
                await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cverifyCurriculumIndexIs + verifyCurriculumIndex);
                let dataParsedVerifyCurriculumIndex = await haystacks.executeBusinessRules([verifyCurriculumIndex, ''],[biz.cstringToDataType]);
                // dataParsedVerifyCurriculumIndex is:
                await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cdataParsedVerifyCurriculumIndexIs + dataParsedVerifyCurriculumIndex);
                let highestLessonForCurriculum = await getHighestLessonCount(dataParsedVerifyCurriculumIndex);
                let userHighestPassingLessonNumberByCurriculumIndex = await getHighestLessonNumberAboveAdvancementScoringLimit('', dataParsedVerifyCurriculumIndex);
                // highestLessonForCurriculum is:
                await haystacks.consoleLog(namespacePrefix, functionName, app_msg.chighestLessonForCurriculumIs + highestLessonForCurriculum);
                // userHighestPassingLessonNumberByCurriculumIndex is:
                await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserHighestPassingLessonNumberByCurriculumIndexIs + userHighestPassingLessonNumberByCurriculumIndex);
                if (userHighestPassingLessonNumberByCurriculumIndex < highestLessonForCurriculum) {
                  passedAllPrerequisiteRequirements = false;
                  break;
                }
              }
              if (passedAllPrerequisiteRequirements === true) {
                // User has passed all of the requirements. Allowed to set the new curriculum index and name.
                await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumName, fullyQualifiedCurriculumName);
                await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumIndex, fullyQualifiedCurriculumIndex);
                returnData = true;
              }
            } else {
              await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumName, fullyQualifiedCurriculumName);
              await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumIndex, fullyQualifiedCurriculumIndex);
              returnData = true;
            }
          } else {
            // The current curriculum name and index can be set because there are no prerequisites.
            await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumName, fullyQualifiedCurriculumName);
            await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumIndex, fullyQualifiedCurriculumIndex);
            returnData = true;
          }
        } else {
          await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumName, fullyQualifiedCurriculumName);
          await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumIndex, fullyQualifiedCurriculumIndex);
          returnData = true;
        }
      } else {
        if (fullyQualifiedCurriculumIndex === false || fullyQualifiedCurriculumIndex === '') {
          // ERROR: fullyQualifiedCurriculumIndex is not valid.
          console.log(app_msg.cErrorSetCurrentCurriculumMessage3);
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetCurrentCurriculumMessage3);
        }
        if (fullyQualifiedCurriculumName === false || fullyQualifiedCurriculumName === '') {
          // ERROR: fullyQualifiedCurriculumName is not valid.
          console.log(app_msg.cErrorSetCurrentCurriculumMessage4);
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetCurrentCurriculumMessage4);
        }
      }
    } else {
      // ERROR: User must be logged in to set the current curriculum.
      console.log(app_msg.cErrorSetCurrentCurriculumMessage1);
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetCurrentCurriculumMessage1);
    }
  } else {
    // ERROR: A name or index must be entered for the desired curriculum.
    console.log(app_msg.cErrorSetCurrentCurriculumMessage2);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetCurrentCurriculumMessage2);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getCurrentCurriculumName
 * @description Checks to make sure the current user is logged in then gets the name of the current curriculum.
 * If no user is logged in, then display an error message and return false.
 * @return {string|boolean} The name of the current curriculum, or false if no user is logged in,
 * or false if no current curriculum name is set.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function getCurrentCurriculumName() {
  let functionName = getCurrentCurriculumName.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  let currentUser = '';
  currentUser = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cCurrentUser);
  if (currentUser !== '') {
    returnData = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumName);
  } else {
    // ERROR: User must be logged in to get the current curriculum.
    // console.log(app_msg.cErrorGetCurrentCurriculumMessage1);
    // NOTE: Do not enable the above log, when first starting the application, the user is not logged in.
    // Therefore the message above would always be displayed to the user, and that's not what we want.
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorGetCurrentCurriculumMessage1);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getCurrentCurriculumIndex
 * @description Checks to make sure the current user is logged in then gets the index of the current curriculum.
 * If not user is logged in, then display an error message and return false.
 * @param userName An optional username to be passed in if the user is not logged in.
 * @return {integer|boolean} The index of the current curriculum, or false if no user is logged in,
 * or false if no current curriculum index is set.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function getCurrentCurriculumIndex(userName) {
  let functionName = getCurrentCurriculumIndex.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // userName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserNameIs + userName);
  let returnData = false;
  let currentUser = '';
  if (userName !== undefined && userName !== '') {
    currentUser = userName;
  } else {
    currentUser = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cCurrentUser);
  }  
  // currentUser is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserIs + currentUser);
  if (currentUser !== '') {
    returnData = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cCurrentCurriculumIndex);
  } else {
    // ERROR: User must be logged in to get the current curriculum.
    // console.log(app_msg.cErrorGetCurrentCurriculumMessage1);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorGetCurrentCurriculumMessage1);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getListOfCurriculumNames
 * @description Looks up all of the curriculum names from the lessons data structure,
 * and returns a list of all available curriculum names.
 * @return {array<string>} An array of the list of available curriculum names.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function getListOfCurriculumNames() {
  let functionName = getListOfCurriculumNames.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  let allLessonData = await getLessonData();
  returnData = await Promise.all(Object.values(allLessonData).map(async curriculum => curriculum.LessonCurriculumName));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getListOfCurriculumIndices
 * @description Looks up all of the curriculum indices from the lessons data structure,
 * and returns a list of all available curriculum indices.
 * @return {array<integer>} An array of the list of available curriculum indices.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function getListOfCurriculumIndices() {
  let functionName = getListOfCurriculumIndices.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  let allLessonData = await getLessonData();
  returnData = await Promise.all(Object.values(allLessonData).map(async curriculum => curriculum.CurriculumNumber));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getListOfPrerequisiteCurriculumIndicesForSpecifiedIndex
 * @description Gets the list of prerequisite curriculum indices given a specified index.
 * @param {integer} curriculumIndex The index for which the list of prerequisite curriculum indices should be returned.
 * @return {array<integer>|boolean} An array of required curriculum indices for the specified curriculum index.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function getListOfPrerequisiteCurriculumIndicesForSpecifiedIndex(curriculumIndex) {
  let functionName = getListOfPrerequisiteCurriculumIndicesForSpecifiedIndex.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // curriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumIndexIs + curriculumIndex);
  let returnData = false;
  let allLessonData = await getLessonData();
  for (const key of Object.keys(allLessonData)) {
    // key is
    await haystacks.consoleLog(namespacePrefix, functionName, msg.ckeyIs + key);
    if (allLessonData[key].CurriculumNumber === curriculumIndex) {
      returnData = allLessonData[key].ListOfCurriculumPrerequisites;
      if (returnData.includes(bas.cComa) === true) {
        returnData = returnData.split(bas.cComa);
      } else if (Array.isArray(returnData) === false) {
        returnData = [returnData];
      }
      break; // Exit the loop once the prerequisites are found for the specified curriculumIndex.
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getCurriculumNameFromIndex
 * @description Gets a curriculum name given a curriculum index.
 * @param {integer} curriculumIndex The index of the curriculum for which a curriculum name should be returned.
 * @returns {string|boolean} The name of the curriculum at the specified curriculum index.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function getCurriculumNameFromIndex(curriculumIndex) {
  let functionName = getCurriculumNameFromIndex.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // curriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumIndexIs + curriculumIndex);
  let returnData = false;
  let curriculumNamesArray = await getListOfCurriculumNames();
  if (curriculumNamesArray && curriculumNamesArray.length > 0) {
    returnData = curriculumNamesArray[curriculumIndex];
  } else {
    // ERROR: curriculumNamesArray was not valid, reference: getCurriculumNameFromIndex.
    console.log(app_msg.cErrorGetCurriculumNameFromIndexMessage1);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorGetCurriculumNameFromIndexMessage1);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function lookupCurriculum
 * @description Searches for a matching curriculum that matches with the input search term.
 * If an index is passed in, then the curriculum will match to the specified curriculum index,
 * if there exists a curriculum with the specified index.
 * If the input is the name or partial name of a curriculum then the search algorithm will
 * do a fuzzy search and try to find a curriculum that most closely matches with the input parameter.
 * @param {integer|string} curriculumSearchTerm The term that should be used when looking up the
 * specified curriculum, either an index, a name, or a fuzzy search parameter such as a partial name.
 * @return {integer|boolean} The index of the matching curriculum, or false if no matching curriculum is found.
 * Also returns false if the input is invalid.
 * @author Seth Hollingsead
 * @date 2024/08/27
 */
async function lookupCurriculum(curriculumSearchTerm) {
  let functionName = lookupCurriculum.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // curriculumSearchTerm is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumSearchTermIs + curriculumSearchTerm);
  let returnData = false;
  if (curriculumSearchTerm !== undefined) {
    let allCurriculumNames = [];
    let allCurriculumIndices = [];
    allCurriculumNames = await getListOfCurriculumNames();
    allCurriculumIndices = await getListOfCurriculumIndices();
    // allCurriculumNames is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callCurriculumNamesIs + JSON.stringify(allCurriculumNames));
    // allCurriculumIndices is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callCurriculumIndicesIs + JSON.stringify(allCurriculumIndices));
    if (allCurriculumNames !== undefined && allCurriculumNames !== false && allCurriculumIndices !== undefined && allCurriculumIndices !== false) {
      // allCurriculumNames and allCurriculumIndices is valid.
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clookupCurriculumMessage1);
      let isIntegerResult = await haystacks.executeBusinessRules([curriculumSearchTerm, ''], [biz.cisInteger]);
      // isIntegerResult is
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cisIntegerResultIs + isIntegerResult);
      if (await haystacks.executeBusinessRules([curriculumSearchTerm, ''], [biz.cisInteger]) === true) {
        // curriculumSearchTerm is an integer.
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clookupCurriculumMessage2);
        let parsedCurriculumSearchTerm = await haystacks.executeBusinessRules([curriculumSearchTerm, ''], [biz.cstringToDataType]);
        // parsedCurriculumSearchTerm is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cparsedCurriculumSearchTermIs + parsedCurriculumSearchTerm);
        if (await haystacks.executeBusinessRules([[allCurriculumIndices, parsedCurriculumSearchTerm], ''], [biz.cdoesArrayContainValue]) === true) {
          // found a matching search index.
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clookupCurriculumMessage3);
          returnData = curriculumSearchTerm;
        }
      } else if (await haystacks.executeBusinessRules([curriculumSearchTerm, ''], [biz.cisString]) === true) {
        // curriculumSearchTerm is a string.
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clookupCurriculumMessage4);
        // Here we need to do a fuzzy search in the array.
        let curriculumNamesMatchedArray = await Promise.all(allCurriculumNames.filter(async name => name.toLowerCase().includes(curriculumSearchTerm.toLowerCase())));
        if (curriculumNamesMatchedArray.length > 0) {
          // found a matching search term.
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clookupCurriculumMessage5);
          returnData = allCurriculumNames.indexOf(curriculumNamesMatchedArray[0]);
        }
      } else {
        // ERROR: curriculumSearchTerm is invalid: 
        console.log(app_msg.cErrorLookupCurriculumMessage2 + curriculumSearchTerm);
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorLookupCurriculumMessage2 + curriculumSearchTerm);
      }
    } else {
      // ERROR: Invalid allCurriculumNames or curriculumIndices.
      console.log(app_msg.cErrorLookupCurriculumMessage3);
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorLookupCurriculumMessage3);
      // allCurriculumNames is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callCurriculumNamesIs + JSON.stringify(allCurriculumNames));
      // allCurriculumIndices is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callCurriculumIndicesIs + JSON.stringify(allCurriculumIndices));
    }
  } else {
    // ERROR: No curriculumSearchTerm specified, unable to lookup Curriculum: 
    console.log(app_msg.cErrorLookupCurriculumMessage1 + curriculumSearchTerm);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorLookupCurriculumMessage1 + curriculumSearchTerm);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getCurriculumObject
 * @description Looks up the desired curriculum object in the lessons data structure and returns the entire curriculum object.
 * @param {integer|string} curriculumSearchTerm The term that should be used when looking up the
 * specified curriculum, either an index, a name, or a fuzzy search parameter such as a partial name.
 * @return {object|boolean} The JSON data structure or false if the input or search results are invalid or no matching curriculum is found.
 * @author Seth Hollingsead
 * @date 2024/08/30
 */
async function getCurriculumObject(curriculumSearchTerm) {
  let functionName = getCurriculumObject.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // curriculumSearchTerm is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumSearchTermIs + curriculumSearchTerm);
  let returnData = false;
  if (curriculumSearchTerm !== undefined) {
    let fullyQualifiedCurriculumIndex = await lookupCurriculum(curriculumSearchTerm);
    // fullyQualifiedCurriculumIndex is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cfullyQualifiedCurriculumIndexIs + JSON.stringify(fullyQualifiedCurriculumIndex));
    if (fullyQualifiedCurriculumIndex !== undefined && fullyQualifiedCurriculumIndex !== false) {
      let allLessonData = await getLessonData();
      for (const key of Object.keys(allLessonData)) {
        if (allLessonData[key].CurriculumNumber === fullyQualifiedCurriculumIndex) {
          returnData = allLessonData[key];
          break; // Exit the loop once the matching curriculum is found.
        }
      }
    }
  } else {
    // ERROR: No curriculumSearchTerm specified, unable to lookup Curriculum: 
    console.log(app_msg.cErrorLookupCurriculumMessage1 + curriculumSearchTerm);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorLookupCurriculumMessage1 + curriculumSearchTerm);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getLessonPlanKeysForCurriculumIndex
 * @description Looks up all of the lesson plan keys given a specified curriculum index.
 * @param {integer} curriculumIndex The index of the curriculum for which the lesson plan keys should be returned.
 * @return {array<string>} An array of key strings of lesson plan keys from the specified curriculum index.
 * @author Seth Hollingsead
 * @date 2024/08/30
 */
async function getLessonPlanKeysForCurriculumIndex(curriculumLookupIndex) {
  let functionName = getLessonPlanKeysForCurriculumIndex.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // curriculumLookupIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumLookupIndexIs + curriculumLookupIndex);
  let returnData = false;
  let allLessonsData = await getLessonData();
  // allLessonsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callLessonsDataIs + JSON.stringify(allLessonsData));
  // Make sure we are indexing the correct lesson curriculum before we try and get the individual lesson data.
  for (const key of Object.keys(allLessonsData)) {
    // keys is:
    await haystacks.consoleLog(namespacePrefix, functionName, msg.ckeyIs + key);
    let indexedCurriculumObject = allLessonsData[key];
    // indexedCurriculumObject is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindexedCurriculumObjectIs + JSON.stringify(indexedCurriculumObject));
    if (indexedCurriculumObject.CurriculumNumber === curriculumLookupIndex) {
      returnData = Object.keys(indexedCurriculumObject[app_sys.cLessonPlan][0]);
      break; // Exit the loop once the matching curriculum is found.
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function scanUserDataForCurrentCurriculum
 * @description Scans through the users data and determines what should be the current curriculum for the given user,
 * based on what lessons they have passed, and if they have passed all the lessons for a given curriculum.
 * @param {string} userName The username that should be used to make the call to getHighestLessonNumberAboveAdvancementScoringLimit.
 * @return {integer} The index of what should be the current curriculum for the current user.
 * @author Seth Hollingsead
 * @date 2024/08/30
 */
async function scanUserDataForCurrentCurriculum(userName) {
  let functionName = scanUserDataForCurrentCurriculum.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // userName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserNameIs + userName);
  let returnData = false;
  // We need to go through each of the available curriculums and find out what is the highest lesson count the user has achieved,
  // if the highest lesson count the user has achieved with a passing score is less than the number of lessons in the curriculum being scanned,
  // then the user current curriculum index should be that curriculum.
  let allLessonsData = await getLessonData();
  for (const key of Object.keys(allLessonsData)) {
    // key is:
    await haystacks.consoleLog(namespacePrefix, functionName, msg.ckeyIs + key);
    let indexedCurriculumObject = allLessonsData[key];
    // indexedCurriculumObject is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindexedCurriculumObjectIs + JSON.stringify(indexedCurriculumObject));
    let curriculumIndex = indexedCurriculumObject[app_sys.cCurriculumNumber];
    // curriculumIndex is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumIndexIs + curriculumIndex);
    let parsedCurriculumIndex = await haystacks.executeBusinessRules([curriculumIndex, ''], [biz.cstringToDataType]);
    // parsedCurriculumIndex is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cparsedCurriculumIndexIs + parsedCurriculumIndex);
    let highestLessonForCurriculum = await getHighestLessonCount(parsedCurriculumIndex);
    // highestLessonForCurriculum is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.chighestLessonForCurriculumIs + highestLessonForCurriculum);
    let userHighestPassingLessonNumberByCurriculumIndex = await getHighestLessonNumberAboveAdvancementScoringLimit(userName, parsedCurriculumIndex);
    // userHighestPassingLessonNumberByCurriculumIndex is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserHighestPassingLessonNumberByCurriculumIndexIs + userHighestPassingLessonNumberByCurriculumIndex);
    if (highestLessonForCurriculum > userHighestPassingLessonNumberByCurriculumIndex) {
      // Users current curriculum index is: parsedCurriculumIndex, so lets return it.
      // Then we are done scanning, exit for performance!
      // This is the parsedCurriculumIndex that the user is currently working on.
      returnData = parsedCurriculumIndex;
      break; // break out of the some loop, no need to continue searching!
    } else if (highestLessonForCurriculum === userHighestPassingLessonNumberByCurriculumIndex) {
      let listOfCurriculumIndices = await getListOfCurriculumIndices();
      // listOfCurriculumIndices is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clistOfCurriculumIndicesIs + JSON.stringify(listOfCurriculumIndices));
      if (listOfCurriculumIndices.includes(parsedCurriculumIndex + 1)) {
        parsedCurriculumIndex = parsedCurriculumIndex + 1;
        // Incrementing the parsedCurriculumIndex, stage it for return and continue the loop.
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cscanUserDataForCurrentCurriculumMessage1);
      } else {
        // WARNING: parsedCurriculumIndex is not supported:
        console.log(app_msg.cWarningScanUserDataForCurrentCurriculumMessage1 + parsedCurriculumIndex);
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWarningScanUserDataForCurrentCurriculumMessage1 + parsedCurriculumIndex);
      }
      // Save it for the return, if the above for-loop runs out or fails, we will have at least this number.
      returnData = parsedCurriculumIndex;
      // break;
      // NOTE: Don't break here, might need to scan through additional curricula,
      // its possible the user may have completed multiple curricula. 
    }
  }
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
 * @param {integer} optionalCurriculumIndex A curriculum index to get the highest lesson number for the specified curriculum.
 * @return {object|boolean} A JSON object that contains statistic of the lesson when it is completed, or false if the user presses the ESC key.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function executeLesson(lessonNumber, optionalCurriculumIndex) {
  let functionName = executeLesson.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = false;
  let currentCurriculumIndex = 0;
  if (optionalCurriculumIndex !== undefined && optionalCurriculumIndex >= 0) {
    currentCurriculumIndex = optionalCurriculumIndex; // Use the index specified by the input.
  } else {
    currentCurriculumIndex = await getCurrentCurriculumIndex(); // use the current index stored in the config setting.
  }
  let individualLessonData = await getIndividualLessonData(lessonNumber, currentCurriculumIndex);
  let lineLessonScoresDataArray = [];
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
      let passingAccuracyScoreLimit = await getLessonAdvancementScoreLimitAccuracy(lessonNumber, currentCurriculumIndex);
      // passingAccuracyScoreLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cpassingAccuracyScoreLimitIs + passingAccuracyScoreLimit);
      let passingSpeedScoreLimit = await getLessonAdvancementScoreLimitSpeed(lessonNumber, currentCurriculumIndex);
      // passingSpeedScoreLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cpassingSpeedScoreLimitIs + passingSpeedScoreLimit);
      // You must get an accuracy score of:
      console.log(app_msg.cLessonInstructionsMessage12 + passingAccuracyScoreLimit + bas.cPercent);
      // And a speed score of at least:
      // or higher to advance to the next lesson.
      console.log(app_msg.cLessonInstructionsMessage13 + passingSpeedScoreLimit + bas.cSpace + wrd.cWords + bas.cSpace + phn.cPer + bas.cSpace + unt.cMinute + bas.cSpace + app_msg.cLessonInstructionsMessage14);
    }
    
    // A report showing your score will display after the lesson is complete.
    console.log(app_msg.cLessonInstructionsMessage15);
    // Press the "ESC" key, in the far upper left corner of the keyboard to cancel a lesson.
    console.log(app_msg.cLessonInstructionsMessage16);
    // ****************************************************************************************************
    // .--------------------------------------------------------------------.
    // | [Esc] [F1][F2][F3][F4][F5][F6][F7][F8][F9][F0][F10][F11][F12] o o o|
    // |                                                                    |
    // | [`][1][2][3][4][5][6][7][8][9][0][-][=][_<_] [I][H][U] [N][/][*][-]|
    // | [/T][Q][W][E][R][T][Y][U][I][O][P][{][}] | | [D][E][D] [7][8][9]|+||
    // | [CAP][A][S][D][F][G][H][J][K][L][;]['][_<-_]           [4][5][6]|_||
    // | [SHIFT][Z][X][C][V][B][N][M][,][.][/][SHIFT]    [^]    [1][2][3]| ||
    // | [CTRL][ALT][_______SPACE________][ALT][CTRL] [<][V][>] [ 0  ][.]|_||
    // `--------------------------------------------------------------------'
    // ****************************************************************************************************
    // .--------------------------------------------------------------------.
    console.log(app_msg.cKeyboardAsciMap01);
    // | [Esc] [F1][F2][F3][F4][F5][F6][F7][F8][F9][F0][F10][F11][F12] o o o|
    console.log(app_msg.cKeyboardAsciMap02);
    // |                                                                    |
    console.log(app_msg.cKeyboardAsciMap03);
    // | [`][1][2][3][4][5][6][7][8][9][0][-][=][_<_] [I][H][U] [N][/][*][-]|
    console.log(app_msg.cKeyboardAsciMap04);
    // | [/T][Q][W][E][R][T][Y][U][I][O][P][{][}] | | [D][E][D] [7][8][9]|+||
    console.log(app_msg.cKeyboardAsciMap05);
    // | [CAP][A][S][D][F][G][H][J][K][L][;]['][_<-_]           [4][5][6]|_||
    console.log(app_msg.cKeyboardAsciMap06);
    // | [SHIFT][Z][X][C][V][B][N][M][,][.][/][SHIFT]    [^]    [1][2][3]| ||
    console.log(app_msg.cKeyboardAsciMap07);
    // | [CTRL][ALT][_______SPACE________][ALT][CTRL] [<][V][>] [ 0  ][.]|_||
    console.log(app_msg.cKeyboardAsciMap08);
    // .--------------------------------------------------------------------.
    console.log(app_msg.cKeyboardAsciMap01);
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
          // And reset to lineLessonScoresDataArray to empty array, because the user may have completed more than 0 lines, in which case returnData would contain something.
          lineLessonScoresDataArray = [];
          break;
        } else {
          // Store the lesson line data so we can compute all the line data once all the lines are completed, and generate final data for the entire lesson.
          lineLessonScoresDataArray.push(lessonLineScoreData);
        }
      } // End-for (let individualLessonLineKey in allLessonLines)
      if (lineLessonScoresDataArray.length > 1) {
        // Must compute average values for all of the data elements for all the lines from the lesson.
        returnData = computeAverageLessonScoreValues(lineLessonScoresDataArray, lessonNumber);
      } else if (lineLessonScoresDataArray.length === 1) {
        returnData = lineLessonScoresDataArray[0];
      }
    } else {
      // ERROR: No lesson lines for the specified lesson number:
      console.log(app_msg.cErrorExecuteLessonMessage01 + lessonNumber);
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorExecuteLessonMessage01 + lessonNumber);
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
      // await generateTone();
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

    // ************************************************************************************************************************
    // BEGIN Computed values
    // ************************************************************************************************************************
    // Developer Notes:
    // Total Number of Words = Total Keys Pressed / 5
    // WPM = Total Number of Words / Time Elapsed in Minutes (rounded down)
    // Accuracy = Number of Correct Keys / Total Number of Keys Pressed
    let cappedCharacterEntryCount = Math.min(userCharacterEntryCount, 5);
    let totalNumberOfWords = cappedCharacterEntryCount / 5;

    // totalNumberOfWords is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ctotalNumberOfWordsIs + totalNumberOfWords);
    let wpm = totalNumberOfWords / (deltaTime / 60000) // convert milliseconds to seconds
    wpm = Math.min(wpm, 160); // Current world record for fastest typist is around 160wpm.
    // wpm is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cwpmIs + wpm);
    let accuracy = charactersCorrectCount / userCharacterEntryCount;
    // accuracy is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccuracyIs + accuracy);
    // ************************************************************************************************************************
    // END Computed values
    // ************************************************************************************************************************
    returnData = {
      [app_sys.clineStartTime]: lineStartTime,
      [app_sys.clineEndTime]: lineEndTime,
      [app_sys.cdeltaTime]: deltaTime,
      [app_sys.ccorrectCharacterCount]: charactersCorrectCount,
      [app_sys.cincorrectCharacterCount]: charactersIncorrectCount,
      [app_sys.ctotalWords]: totalNumberOfWords,
      [app_sys.cwpm]: wpm,
      [app_sys.caccuracy]: accuracy
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

// /**
// @NOTE: This is being de-scoped, if I can get it to work at some point in the future it might be in-scope again.
// There are more important things that must be implemented. If anybody wants to pick this up and make it work, please feel free to let me know!
// I'll be happy to help!!
//  * @function generateTone
//  * @description Generates a short burst tone to the system speaker to let the user know they have entered an incorrect character.
//  * @return {boolean} True or False to indicate if the tone was generated successfully or not.
//  * @author Seth Hollingsead
//  * @date 2023/03/02
//  * @NOTE Initialize the player so we have access to the system speaker. Generate a tone when the user types an incorrect key.
//  * This is part of an important learning strategy part of reinforcement learning through punishment, known as Operant conditioning.
//  */
// async function generateTone() {
//   let functionName = generateTone.name;
//   await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
//   let returnData = false;
//   // ATTEMPT 1
//   // ********************************************************************
//   // const frequency = 440; // Hz
//   // const duration = 500; // ms
//   // const sampleRate = 44100;
//   // const amplitude = 0.5; // Volume

//   // const numSamples = sampleRate * (duration / 1000);
//   // const buffer = Buffer.alloc(numSamples * 2);
//   // let sample;

//   // for (let i = 0; i < numSamples; i++) {
//   //   const t = i / sampleRate;
//   //   sample = Math.round(amplitude * 32767 * Math.sin(2 * Math.Pi * frequency * t));
//   //   buffer.writeInt16LE(sample, i * 2);
//   // }

//   // player.play(buffer);
//   // ********************************************************************

//   // ATTEMPT 2
//   // ********************************************************************
//   // process.stderr.write('\007');
//   // ********************************************************************

//   // ATTEMPT 3
//   // ********************************************************************
//   // process.stderr.write('0x07');
//   // ********************************************************************

//   // ATTEMPT 4
//   // ********************************************************************
//   // const sampleRate = 44100;
//   // const frequency = 440; // Hz
//   // const duration = 1000; // ms
//   // const amplitude = 0.5;

//   // const generator = audioGenerator(() => {
//   //   let t = 0;
//   //   return (time, i) => {
//   //     t = time;
//   //     return amplitude * Math.sin(2 * Math.PI * frequency * t);
//   //   };
//   // }, { duration, sampleRate });

//   // generator.pipe(new Speaker({ sampleRate }));
//   // ********************************************************************

//   // ATTEMPT 5
//   // ********************************************************************
//   const sampleRate = 44100;
//   const frequency = 440; // Hz
//   const duration = 1000; // ms
//   const amplitude = 0.5;

//   const numSamples = sampleRate * (duration / 1000);
//   const buffer = createPCMData({
//     sampleRate,
//     bitDepth: 16,
//     channelCount: 1,
//     interleaved: true,
//     data: new Float32Array(numSamples).map((_, i) => {
//       const t = i / sampleRate;
//       return amplitude * Math.sin(2 * Math.PI * frequency * t);
//     }),
//   });

//   const speaker = new Speaker({
//     sampleRate: sampleRate,
//     bitDepth: 16,
//     channels: 1,
//   });
//   speaker.write(buffer);
//   // ********************************************************************
//   returnData = true;
//   await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
//   await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
//   return returnData;
// }

/**
 * @function computeAverageLessonScoreValues
 * @description Averages all of the values across all the lines for the lesson.
 * @param {array<object>} scoresDataArray An array of JSON objects that contains all of lesson data for each line in the lesson.
 * @param {integer} lessonNumber The number of the lesson that was executed, used to determine if the user passed the lesson or not.
 * We need to inform the user if they got a passing score or not.
 * @return {object} A single JSON object that contains an average or sum of all the data from all of the lines of the entire lesson.
 * @author Seth Hollingsead
 * @date 2023/03/06
 */
async function computeAverageLessonScoreValues(scoresDataArray, lessonNumber) {
  let functionName = computeAverageLessonScoreValues.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // scoresDataArray is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cscoresDataArrayIs + JSON.stringify(scoresDataArray));
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  let returnData = false;
  let currentCurriculumIndex = 0;
  let currentCurriculumName = '';
  let lessonTimeStamp = '';
  let totalTime = 0;
  let totalCorrectCharacterCount = 0;
  let totalIncorrectCharacterCount = 0;
  let totalWords = 0;
  let wpmSum = 0;
  let accuracySum = 0;
  let averageWPM = 0;
  let averageAccuracy = 0;
  let adjustedWpm = 0;
  currentCurriculumIndex = await getCurrentCurriculumIndex();
  currentCurriculumName = await getCurrentCurriculumName();
  if (scoresDataArray && Array.isArray(scoresDataArray) && scoresDataArray.length > 1) {
    for (let scoreObjectKey in scoresDataArray) {
      let scoreObject = scoresDataArray[scoreObjectKey];
      // scoreObject is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cscoreObjectIs + JSON.stringify(scoreObject));
      lessonTimeStamp = await haystacks.executeBusinessRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
      totalTime = totalTime + scoreObject[app_sys.cdeltaTime];
      totalCorrectCharacterCount = totalCorrectCharacterCount + scoreObject[app_sys.ccorrectCharacterCount];
      totalIncorrectCharacterCount = totalIncorrectCharacterCount + scoreObject[app_sys.cincorrectCharacterCount];
      totalWords = totalWords + scoreObject[app_sys.ctotalWords];
      let wpm = scoreObject[app_sys.cwpm];
      if (wpm === null || wpm === undefined || !isFinite(wpm)) {
        wpm = 0; // Catch all of the off-nominal cases!
      }
      // wpm is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cwpmIs + wpm);
      wpmSum = wpmSum + wpm;
      accuracySum = accuracySum + scoreObject[app_sys.caccuracy];
    }
    // wpmSum is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cwpmSumIs + wpmSum);
    // accuracySum is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccuracySumIs + accuracySum);
    // scoresDataArray.length is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cscoresDataArrayLengthIs + scoresDataArray.length);
    averageWPM = wpmSum / scoresDataArray.length;
    averageAccuracy = accuracySum / scoresDataArray.length;
    adjustedWpm = averageWPM * averageAccuracy;
    // lessonTimeStamp is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonTimeStampIs + lessonTimeStamp);
    // Lesson time stamp is:
    console.log(app_msg.cmessageLessonTimeStampIs + lessonTimeStamp);
    
    // totalTime is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ctotalTimeIs + totalTime);
    // Total time is:
    console.log(app_msg.cmessageTotalTimeIs + totalTime);

    // totalCorrectCharacterCount is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ctotalCorrectCharacterCountIs + totalCorrectCharacterCount);
    // Total correct character count is:
    console.log(app_msg.cmessageTotalCorrectCharacterCountIs + totalCorrectCharacterCount);

    // totalIncorrectCharacterCount is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ctotalIncorrectCharacterCountIs + totalIncorrectCharacterCount);
    // Total incorrect character count is:
    console.log(app_msg.cmessageTotalIncorrectCharacterCountIs + totalIncorrectCharacterCount);

    // totalWords is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ctotalWordsIs + totalWords);
    // Total words is:
    console.log(app_msg.cmessageTotalWordsIs + totalWords.toFixed(2));

    // averageWPM is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageWpmIs + averageWPM);
    // Average WPM is:
    console.log(app_msg.cmessageAverageWpmIs + averageWPM.toFixed(2));

    // averageAccuracy is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageAccuracyIs + averageAccuracy);
    // Average accuracy is:
    console.log(app_msg.cmessageAverageAccuracyIs + averageAccuracy.toFixed(2)*100 + bas.cPercent);

    // adjustedWpm is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cadjustedWpmIs + adjustedWpm);
    // Adjusted WPM is:
    console.log(app_msg.cmessageAdjustedWpmIs + adjustedWpm.toFixed(2));

    // Now we need to compute if the users score is a passing score or not.
    // We must inform the user if they got a passing score or not passing.
    let lessonAdvancementScoreLimitAccuracy = await getLessonAdvancementScoreLimitAccuracy(lessonNumber, currentCurriculumIndex);
    // lessonAdvancementScoreLimitAccuracy is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonAdvancementScoreLimitAccuracyIs + lessonAdvancementScoreLimitAccuracy);
    let lessonAdvancementScoreLimitSpeed = await getLessonAdvancementScoreLimitSpeed(lessonNumber, currentCurriculumIndex);
    // lessonAdvancementScoreLimitSpeed is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonAdvancementScoreLimitSpeedIs + lessonAdvancementScoreLimitSpeed);
    
    if (averageAccuracy >= lessonAdvancementScoreLimitAccuracy/100 && averageWPM >= lessonAdvancementScoreLimitSpeed) {
      // TODO: Make sure we generate a table with many messages that match each of the verbage in the following messages.
      // TODO: This way we can make the user feel more encouraged and less repetition in the responses.
      // User got a passing score
      // You PASSED! YAY!!
      console.log(app_msg.cLessonPassedMessage);
      // If the user passed, which they did here, AND the current lesson is the final lesson in the current curriculum,
      // then should recalculate what the next lesson curriculum is, and auto-update what curriculum the current user
      // is on, so they can start on the next curriculum right away.
      // NOTE: Updating the current curriculum here shouldn't affect the variable currentCurriculumIndex in the upstream caller: tutoringCommands
      // because that variable is already set, so once this function finishes, the data should still automatically get stored in the correct
      // user data curriculum index lesson data structure.
      // While the user can then proceed to starting the next curriculum, or exit and their data will automatically be saved out to file.
      if (lessonNumber === await getLessonCount(currentCurriculumIndex)) {
        await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cuserHasPassedLesson, true);
        await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cuserHasCompletedFinalLessonInCurriculum, true);
      }
    } else {
      // User did NOT get a passing score!
      // You did not get a passing score, please try the lesson again. Practice makes perfect!
      console.log(app_msg.cLessonNotPassedMessage);
      if (averageAccuracy >= lessonAdvancementScoreLimitAccuracy/100) {
        // Your accuracy is good.
        console.log(app_msg.cLessonAccuracyGoodMessage);
      } else {
        // You need to improve your accuracy, make sure you go slow at first and get each key exactly correct.
        console.log(app_msg.cLessonImproveAccuracyMessage);
      }
      if (averageWPM >= lessonAdvancementScoreLimitSpeed) {
        // Your speed is good.
        console.log(app_msg.cLessonSpeedGoodMessage);
      } else {
        // You need to improve your speed, it might take a many times through a lesson before you gain the confidence to type fast.
        console.log(app_msg.cLessonImproveSpeedMessage);
      }
    }

    returnData = {};
    returnData = {
      [app_sys.ccurriculumName]: currentCurriculumName,
      [app_sys.ccurriculumIndex]: currentCurriculumIndex,
      [app_sys.clessonTimeStamp]: lessonTimeStamp,
      [app_sys.ctotalTime]: totalTime,
      [app_sys.ctotalCorrectCharacterCount]: totalCorrectCharacterCount,
      [app_sys.ctotalIncorrectCharacterCount]: totalIncorrectCharacterCount,
      [app_sys.ctotalWords]: totalWords,
      [app_sys.caverageWpm]: averageWPM,
      [app_sys.caverageAccuracy]: averageAccuracy,
      [app_sys.cadjustedWpm]: adjustedWpm
    };
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getHighestLessonCount
 * @description Returns a number for the highest lesson number for the lessons currently available in the curriculum.
 * @param {integer} optionalCurriculumIndex A curriculum index to get the highest lesson number for the specified curriculum.
 * @return {integer} The highest lesson number available in the curriculum.
 * @author Seth Hollingsead
 * @date 2023/02/28
 */
async function getHighestLessonCount(optionalCurriculumIndex) {
  let functionName = getHighestLessonCount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = 0;
  let currentCurriculumIndex = 0;
  let lessonsData = await getLessonData();
  // lessonsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonsDataIs + JSON.stringify(lessonsData));
  // Make sure we are indexing the correct lesson curriculum before we try and get the individual lesson plan keys
  if (optionalCurriculumIndex !== undefined && optionalCurriculumIndex >= 0) {
    currentCurriculumIndex = optionalCurriculumIndex; // Use the index specified by the input.
  } else {
    currentCurriculumIndex = await getCurrentCurriculumIndex(); // use the current index stored in the config setting.
  }
  // currentCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentCurriculumIndexIs + currentCurriculumIndex);
  for (const key of Object.keys(lessonsData)) {
    if (lessonsData[key].CurriculumNumber === currentCurriculumIndex) {
      let lessonPlanKeys = Object.keys(lessonsData[key][app_sys.cLessonPlan][0]);
      // lessonPlanKeys is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonPlanKeysIs + JSON.stringify(lessonPlanKeys));
      if (lessonPlanKeys && Array.isArray(lessonPlanKeys)) {
        returnData = lessonPlanKeys.length;
      }
      break; // Exit the loop once the matching curriculum is found.
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getLessonAdvancementScoreLimitAccuracy
 * @description Recovers the configuration setting for the lesson advancement score limit accuracy.
 * The accuracy that a user must get on any given lesson before advancing to the next lesson.
 * @param {integer} lessonNumber Optional parameter that is the lesson number. Should be provided if the individualized lesson passing score is enabled.
 * @param {integer} optionalCurriculumIndex An optional parameter for the specified curriculum index that should be used when looking up the lesson data.
 * @return {integer} The highest accuracy score the user must get before advancing to the next lesson.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getLessonAdvancementScoreLimitAccuracy(lessonNumber, optionalCurriculumIndex) {
  let functionName = getLessonAdvancementScoreLimitAccuracy.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = 0;
  if (await isLessonAdvancementLimitEnabled() === true) {
    if (await isIndividualizedLessonPassingScoresEnabled() === true) {
      let individualLessonData = await getIndividualLessonData(lessonNumber, optionalCurriculumIndex);
      // individualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonDataIs + JSON.stringify(individualLessonData));
      returnData = individualLessonData[app_sys.cIndividualizedLessonPassingCriteria][0][app_sys.cAccuracyRequirement];
    } else {
      returnData = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.clessonPlanSuccessLimitingAccuracy);
    }
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getLessonAdvancementScoreLimitSpeed
 * @description Recovers the configuration setting for the lesson advancement score limit speed.
 * The speed that a user must get on any given lesson before advancing to the next lesson.
 * @param {integer} lessonNumber Optional parameter that is the lesson number. Should be provided if the individualized lesson passing score is enabled.
 * @param {integer} optionalCurriculumIndex An optional parameter for the specified curriculum index that should be used when looking up the lesson data.
 * @return {integer} The highest speed score the user must get before advancing to the next lesson.
 * @author Seth Hollingsead
 * @date 2023/03/07
 */
async function getLessonAdvancementScoreLimitSpeed(lessonNumber, optionalCurriculumIndex) {
  let functionName = getLessonAdvancementScoreLimitSpeed.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = 0;
  if (await isLessonAdvancementLimitEnabled() === true) {
    if (await isIndividualizedLessonPassingScoresEnabled() === true) {
      let individualLessonData = await getIndividualLessonData(lessonNumber, optionalCurriculumIndex);
      // individualLessonData is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonDataIs + JSON.stringify(individualLessonData));
      returnData = individualLessonData[app_sys.cIndividualizedLessonPassingCriteria][0][app_sys.cSpeedRequirement];
    } else {
      returnData = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.clessonPlanSuccessLimitingSpeed);
    }
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
  let advancementLimitSetting = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cenableLessonPlanLimitingFactors);
  // advancementLimitSetting is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cadvancementLimitSettingIs + advancementLimitSetting);
  if (advancementLimitSetting) {
    returnData = advancementLimitSetting;
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function isIndividualizedLessonPassingScoresEnabled
 * @description Recovers the configuration setting that determines if the user has enabled of disabled the individualized lesson passing score settings.
 * @return {boolean} True or False to indicate the state of the configuration setting.
 * @author Seth Hollingsead
 * @date 2024/07/15
 */
async function isIndividualizedLessonPassingScoresEnabled() {
  let functionName = isIndividualizedLessonPassingScoresEnabled.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = false;
  let individualizedLessonSetting = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cenableIndividualizedLessonPassingScores);
  // individualizedLessonSetting is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualizedLessonSettingIs + individualizedLessonSetting);
  if (individualizedLessonSetting) {
    returnData = individualizedLessonSetting;
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getHighestScoringDataObjectForLesson
 * @description Uses the currently logged in user and a lesson number to determine what was the highest score the user got for that lesson.
 * There could be many lesson data records for each lesson. This will find the highest score for all of them.
 * @param {integer} lessonNumber The lesson number that we should get the highest score for.
 * @param {string} inputUserName An optional parameter to allow for the caller to specify the current user name, rather than requiring a user to be logged in.
 * @param {integer} optionalCurriculumIndex An optional parameter for the specified curriculum index that should be used when looking up the lesson data.
 * @return {object} A JSON object that contains the data from the highest scoring lesson record the user has for the specified lesson number.
 * @NOTE The caller of this function can use this function to interrogate the registered users lesson records and determine
 * if the user is qualified to execute a specific lesson or not based on the minimum advancement specifications as established in the configuration settings file.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getHighestScoringDataObjectForLesson(lessonNumber, inputUserName, optionalCurriculumIndex) {
  let functionName = getHighestScoringDataObjectForLesson.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // lessonNumber is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNumberIs + lessonNumber);
  // inputUserName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cinputUserNameIs + inputUserName);
  // optionalCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.coptionalCurriculumIndexIs + optionalCurriculumIndex);
  let returnData = false;
  let currentMaxScore = 0;
  let indexOfMaxScore = -1;
  let currentCurriculumIndex = 0;
  let currentUserName = '';
  if (inputUserName === '') {
    currentUserName = await currentUserAccount();
  } else {
    currentUserName = inputUserName;
  }
  if (optionalCurriculumIndex !== undefined && optionalCurriculumIndex >= 0) {
    currentCurriculumIndex = optionalCurriculumIndex; // Use the index specified by the input.
  } else {
    currentCurriculumIndex = await getCurrentCurriculumIndex(inputUserName); // use the current index stored in the config setting.
  }
  // currentCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentCurriculumIndexIs + currentCurriculumIndex);
  // currentUserName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameIs + currentUserName);
  let userAccountData = await getUserAccountData(currentUserName);
  // userAccountData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
  let individualLessonName = await getIndividualLessonName(lessonNumber, currentCurriculumIndex);
  // individualLessonName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonNameIs + individualLessonName);
  for (let usersLessonData of userAccountData) {
    // usersLessonData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cusersLessonDataIs + JSON.stringify(usersLessonData));
    // Check if the data has the correct curriculumIndex.
    if (usersLessonData.curriculumIndex !== currentCurriculumIndex) {
      continue; // Skip if the curriculumIndex does not match.
    }
    let lessons = usersLessonData[wrd.cLessons];
    // lessons is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonsIs + JSON.stringify(lessons));
    for (let lesson of lessons) {
      // lessonObject is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonObjectIs + JSON.stringify(lesson));
      let lessonName = Object.keys(lesson)[0];
      // lessonName is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonNameIs + lessonName);
      
      if (lessonName === individualLessonName) {
        let usersLessonDataValue = lesson[lessonName];
        // usersLessonDataValue is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cusersLessonDataValue + JSON.stringify(usersLessonDataValue));
        if (!usersLessonDataValue || usersLessonDataValue.length === 0) {
          returnData = false;
          // WARNING: UsersLessonDataValue is an empty array, return false from function: 
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWarningGetHighestScoringDataObjectForLesson1 + functionName);
          break;
        }
        for (let usersLessonScoreIndividualLessonRecordKey in usersLessonDataValue) {
          let usersLessonScoreIndividualLessonRecord = usersLessonDataValue[usersLessonScoreIndividualLessonRecordKey];
          // usersLessonScoreIndividualLessonRecord is:
          await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cusersLessonScoreIndividualLessonRecordIs + JSON.stringify(usersLessonScoreIndividualLessonRecord));
          if (usersLessonScoreIndividualLessonRecord[app_sys.cadjustedWpm] > currentMaxScore) {
            currentMaxScore = usersLessonScoreIndividualLessonRecord[app_sys.cadjustedWpm]
            indexOfMaxScore = usersLessonScoreIndividualLessonRecordKey;
            // currentMaxScore is:
            await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentMaxScore + currentMaxScore);
            // indexOfMaxScore is:
            await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindexOfMaxScore + indexOfMaxScore);
          }
        } // End-for (let usersLessonScoreIndividualLessonRecord in usersLessonData[individualLessonName])
        // The max index should now be established, return that object,
        // so the caller can determine if the lesson passes the minimum advancement limit.
        returnData = usersLessonDataValue[indexOfMaxScore];
        break;
      }
    }
    if (returnData) {
      break;
    } else {
      // WARNING: individualLessonName not found:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cWarningGetHighestScoringDataObjectForLessonMessage2 + individualLessonName);
    }
  } // End-for (let usersLessonDataKey in userAccountData)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function getHighestLessonNumberAboveAdvancementScoringLimit
 * @description Uses the currently logged in user to scan the users data and determine what is
 * the highest lesson number with a score above the lesson advancement limit, if the advancement limit is enabled.
 * If the limit is not enabled, then the function returns the highest number of lessons that are currently implemented and loaded in the system.
 * @param {string} userName The user name that should be used when getting the highest lesson number above advancement scoring limit.
 * If not user name is specified then the system will attempt to use the currently logged in user.
 * @param {integer} lessonNumber Optional parameter that is the lesson number. Should be provided if the individualized lesson passing score is enabled.
 * @return {integer} Returns the lesson number with the highest passing score, or the number of lessons in the system, if the passing score is disabled.
 * @author Seth Hollingsead
 * @date 2023/03/01
 */
async function getHighestLessonNumberAboveAdvancementScoringLimit(userName, curriculumIndex) {
  let functionName = getHighestLessonNumberAboveAdvancementScoringLimit.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // userName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserNameIs + userName);
  // curriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumIndexIs + curriculumIndex);
  let returnData = 0;
  let currentUserName = '';
  if (await isLessonAdvancementLimitEnabled() === true) {
    if (userName === undefined || userName === '') {
      currentUserName = await currentUserAccount();
    } else {
      currentUserName = userName;
    }    
    // currentUserName is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameIs + currentUserName);
    let userAccountData = await getUserAccountData(currentUserName);
    // userAccountData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
    let lessonCount = await getLessonCount(curriculumIndex);
    // lessonCount is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonCountIs + lessonCount);
    for (let i = 1; i <= lessonCount; i++) {
      // BEGIN i-th iteration:
      await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_ithIteration + i);
      let accuracyLimit = await getLessonAdvancementScoreLimitAccuracy(i, curriculumIndex);
      // accuracyLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccuracyLimitIs + accuracyLimit);
      // curriculumIndex is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurriculumIndexIs + curriculumIndex);
      let speedLimit = await getLessonAdvancementScoreLimitSpeed(i, curriculumIndex);
      // speedLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cspeedLimitIs + speedLimit);
      let highestScoreForLesson = await getHighestScoringDataObjectForLesson(i, currentUserName, curriculumIndex);
      // highestScoreForLesson is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.chighestScoreForLessonIs + JSON.stringify(highestScoreForLesson));
      if (!highestScoreForLesson || highestScoreForLesson < 0 || highestScoreForLesson === false) {
        // Found a false or empty lesson, break out of the loop and return that last known good returnData value.
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cgetHighestLessonNumberAboveAdvancementScoringLimitMessage1);
        break;
      } else {
        // We must have gotten an object back.
        // Process it to see if the current test passes the minimum lesson advancement limit.
        let averageAccuracy = highestScoreForLesson[app_sys.caverageAccuracy] * 100;
        // averageAccuracy is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageAccuracyIs + averageAccuracy);
        let averageWPM = highestScoreForLesson[app_sys.caverageWpm];
        // averageWPM is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageWpmIs + averageWPM);
        if (averageAccuracy >= accuracyLimit && averageWPM >= speedLimit) {
          returnData = i;
        } else {
          if (returnData === 0) {
            returnData = 1;
          }
          break;
        }
      }
    } // End-for (let i = 0; i < lessonCount; i++)
  } // End-if (await isLessonAdvancementLimitEnabled() === true)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function generateUserReport
 * @description Generates a report for the currently logged in user that shows
 * which tests they have passed and which ones they have not yet passed.
 * @param {string} inputUserName An optional input parameter that allows the caller to specify the user name.
 * Rather than requiring the user to be logged in.
 * @return {array<array<string>,array<object>>} An array of arrays that contain
 * a list of the tests for which there is data, and an array of JSON objects that contain lesson data to display.
 * @author Seth Hollingsead
 * @date 2023/03/09
 */
async function generateUserReport(inputUserName) {
  let functionName = generateUserReport.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // inputUserName
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cinputUserNameIs + inputUserName);
  let returnData = {};
  let proxyReportDataEntry = {};
  let currentUserName = '';
  let currentCurriculumIndex = 0;
  let passMessage = wrd.cPass;
  let failMessage = wrd.cFail;
  let passFailLabel = wrd.cPass + bas.cDash + wrd.cFail;
  if (inputUserName === '') {
    currentUserName = await currentUserAccount();
  } else {
    currentUserName = inputUserName;
  }
  // currentUserName is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameIs + currentUserName);
  currentCurriculumIndex = await getCurrentCurriculumIndex(inputUserName); // use the current index stored in the config setting.
  if (currentCurriculumIndex === false || currentCurriculumIndex === undefined) {
    currentCurriculumIndex = await scanUserDataForCurrentCurriculum(currentUserName);
  }
  // currentCurriculumIndex is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentCurriculumIndexIs + currentCurriculumIndex);
  if (currentUserName !== undefined && currentUserName !== '' && currentCurriculumIndex !== undefined && currentCurriculumIndex >= 0) {
    let userAccountData = await getUserAccountData(currentUserName);
    // userAccountData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
    let lessonCount = await getLessonCount(currentCurriculumIndex);
    // lessonCount is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonCountIs + lessonCount);
    for (let i = 1; i < lessonCount; i++) {
      let accuracyLimit = await getLessonAdvancementScoreLimitAccuracy(i, currentCurriculumIndex);
      // accuracyLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccuracyLimitIs + accuracyLimit);
      let speedLimit = await getLessonAdvancementScoreLimitSpeed(i, currentCurriculumIndex);
      // speedLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cspeedLimitIs + speedLimit);
      let individualLessonName = await getIndividualLessonName(i, currentCurriculumIndex);
      // individualLessonName is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cindividualLessonNameIs + individualLessonName);
      let highestScoreForLesson = await getHighestScoringDataObjectForLesson(i, currentUserName, currentCurriculumIndex);
      // highestScoreForLesson is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.chighestScoreForLessonIs + JSON.stringify(highestScoreForLesson));
      if (highestScoreForLesson === false) {
        proxyReportDataEntry = {[individualLessonName]: {[passFailLabel]: failMessage}};
        returnData[individualLessonName] = proxyReportDataEntry[Object.keys(proxyReportDataEntry)[0]];
        break;
      } else {
        // We must have gotten an object back.
        // Process it to see if the current test passes the minimum lesson advancement limit.
        let averageAccuracy = highestScoreForLesson[app_sys.caverageAccuracy] * 100;
        // averageAccuracy is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageAccuracyIs + averageAccuracy);
        let averageWPM = highestScoreForLesson[app_sys.caverageWpm];
        // averageWPM is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageWpmIs + averageWPM);
        if (averageAccuracy >= accuracyLimit && averageWPM >= speedLimit) {
          proxyReportDataEntry = {[individualLessonName]: {[passFailLabel]: passMessage}};
          returnData[individualLessonName] = proxyReportDataEntry[Object.keys(proxyReportDataEntry)[0]];
        } else {
          proxyReportDataEntry = {[individualLessonName]: {[passFailLabel]: failMessage}};
          returnData[individualLessonName] = proxyReportDataEntry[Object.keys(proxyReportDataEntry)[0]];
          break;
        }
      }
    } // End-for (let i = 1; i < lessonCount; i++)
  } else {
    // ERROR: User is not logged in, cannot generate user report.
    // Login to an account and try again.
    console.log(app_msg.cgenerateUserReportMessage02);
    console.log(app_msg.cgenerateUserReportMessage03);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cgenerateUserReportMessage02);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cgenerateUserReportMessage03);
    returnData = false;
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function generateReportAllUsers
 * @description Generates a report that contains the highest passing lesson number
 * for all users registered with the system.
 * @return {array<array<string>,array<object>>} An array of arrays that contain
 * a list of the tests for which there is data, and an array of JSON objects that contain lesson data to display.
 * @author Seth Hollingsead
 * @date 2023/03/09
 */
async function generateReportAllUsers() {
  let functionName = generateReportAllUsers.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let returnData = {};
  let currentCurriculumIndex = 0;
  let currentUserMaxLessonPass = 0;
  let allAccountsData = await getAccountData();
  // allAccountsData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callAccountsDataIs + JSON.stringify(allAccountsData));
  let allAccountUserNames = Object.keys(allAccountsData);
  // allAccountUserNames is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callAccountUserNamesIs + allAccountUserNames);
  for (let currentUserNameKey in allAccountUserNames) {
    currentUserMaxLessonPass = 0;
    // currentUserNameKey is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameKeyIs + currentUserNameKey);
    let currentUserName = allAccountUserNames[currentUserNameKey];
    // currentUserName is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentUserNameIs + currentUserName);
    // Still need to get the lesson index for the current user.
    currentCurriculumIndex = await scanUserDataForCurrentCurriculum(currentUserName);
    // currentCurriculumIndex is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.ccurrentCurriculumIndexIs + currentCurriculumIndex);
    let lessonCount = await getLessonCount(currentCurriculumIndex);
    // lessonCount is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.clessonCountIs + lessonCount);
    let userAccountData = await getUserAccountData(currentUserName);
    // userAccountData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
    for (let i = 1; i < lessonCount; i++) {
       let accuracyLimit = await getLessonAdvancementScoreLimitAccuracy(i, currentCurriculumIndex);
      // accuracyLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caccuracyLimitIs + accuracyLimit);
      let speedLimit = await getLessonAdvancementScoreLimitSpeed(i, currentCurriculumIndex);
      // speedLimit is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cspeedLimitIs + speedLimit);
      let highestScoreForLesson = await getHighestScoringDataObjectForLesson(i, currentUserName, currentCurriculumIndex);
      // highestScoreForLesson is:
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.chighestScoreForLessonIs + JSON.stringify(highestScoreForLesson));
      if (highestScoreForLesson === false) {

        // proxyReportDataEntry = {[individualLessonName]: {[passFailLabel]: failMessage}};
        // returnData[individualLessonName] = proxyReportDataEntry[Object.keys(proxyReportDataEntry)[0]];
        currentUserMaxLessonPass = i;
        
        break;
      } else {
        // We must have gotten an object back.
        // Process it to see if the current test passes the minimum lesson advancement limit.
        let averageAccuracy = highestScoreForLesson[app_sys.caverageAccuracy] * 100;
        // averageAccuracy is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageAccuracyIs + averageAccuracy);
        let averageWPM = highestScoreForLesson[app_sys.caverageWpm];
        // averageWPM is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.caverageWpmIs + averageWPM);
        if (averageAccuracy >= accuracyLimit && averageWPM >= speedLimit) {
          currentUserMaxLessonPass = i;
        } else {
          currentUserMaxLessonPass = i;
          break;
        }
      }
    } // End-for (let i = 0; i < lessonCount; i++)
    if (currentUserMaxLessonPass > 1) {
      // Make sure to subtract off 1,
      // because the algorthim solves for the first unsolved lesson over the last passed lesson.
      currentUserMaxLessonPass = currentUserMaxLessonPass - 1;
    }
    returnData[currentUserName] = {[app_sys.cLessonNumber]: currentUserMaxLessonPass};
  } // End-for (let userName in allAccountUserNames)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  getAccountData,
  getUserAccountData,
  storeAccountData,
  doesUserHaveCurriculumIndex,
  appendUsersLessonScoreData,
  getUsersLessonScoreData,
  saveAccountData,
  getLessonData,
  getLessonCount,
  getIndividualLessonData,
  getIndividualLessonName,
  doesAccountExist,
  createAccount,
  removeAccount,
  generateBlankLessonData,
  currentUserAccount,
  loginUser,
  logoutUser,
  setCurrentCurriculum,
  getCurrentCurriculumName,
  getCurrentCurriculumIndex,
  getListOfCurriculumNames,
  getListOfCurriculumIndices,
  getCurriculumNameFromIndex,
  lookupCurriculum,
  getCurriculumObject,
  getLessonPlanKeysForCurriculumIndex,
  scanUserDataForCurrentCurriculum,
  executeLesson,
  getHighestLessonCount,
  getLessonAdvancementScoreLimitAccuracy,
  getLessonAdvancementScoreLimitSpeed,
  isLessonAdvancementLimitEnabled,
  isIndividualizedLessonPassingScoresEnabled,
  getHighestScoringDataObjectForLesson,
  getHighestLessonNumberAboveAdvancementScoringLimit,
  generateUserReport,
  generateReportAllUsers
}