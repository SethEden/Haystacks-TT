/**
 * @file applicationSystem.js
 * @module applicationSystem
 * @description Contains all client application system commands for execution of the client application with basic application system operations.
 * @requires module:application.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cmd, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.haystacks-tt.commands.clientCommands.applicationSystem.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function instructions
 * @description Provides instructions to the end user on what steps they need to perform to get up and running and interface with the system.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/24
 */
async function instructions(inputData, inputMetaData) {
  let functionName = instructions.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];

  // Instructions to end user:
  console.log(app_msg.cinstructionsMessage00)
  // Create an account using the createAccount command and provide your username.
  console.log(app_msg.cinstructionsMessage01)
  // Use the login command to login to your account, no password or email required.
  console.log(app_msg.cinstructionsMessage02)
  // Use the logout command to logout, if you want to allow another user to login, or just exit by typing exit/quit or x/q.
  console.log(app_msg.cinstructionsMessage03)
  // All your lesson records will be stored under your account name in a local file under the resources folder.
  console.log(app_msg.cinstructionsMessage04)
  // You can opt-out of saving your records by changing the flag: saveTypingRecords in the configuration settings file: ./src/resources/configuration/application.system.json
  console.log(app_msg.cinstructionsMessage05)
  // You can call destroyRecords command with your account name to wipe out your typing records for good.
  console.log(app_msg.cinstructionsMessage06)
  // The deleteAccount command will delete your account and destroy all your typing records for good.
  console.log(app_msg.cinstructionsMessage07)
  // Once you are logged in, you can use the lessons command to display the lessons and see which lessons you have completed, and which ones are not yet started.
  console.log(app_msg.cinstructionsMessage08)
  // If you are NOT logged in, the lessons command will simply list all the lessons available by the system.
  console.log(app_msg.cinstructionsMessage09)
  // If you are NOT logged in, running the startLesson with a lesson number will start the lesson without saving any of the typing records.
  console.log(app_msg.cinstructionsMessage10)
  // If you are logged in the system will only let you proceed to the next lesson if you have completed all the previous lessons with 90% success or greater.
  console.log(app_msg.cinstructionsMessage11)
  // You can change the success limiting factor by changing the configuration flag: lessonPlanSuccessLimitingFactor to some other value other than 90%.
  console.log(app_msg.cinstructionsMessage12)
  // You can disable the success limiting factor completely and allow your users to take any lesson at any time by changing the configuration flag: enableLessonPlanLimitingFactor.
  console.log(app_msg.cinstructionsMessage13)
  // Enter the command app?/appHelp or the command instructions to display these instructions again.
  console.log(app_msg.cinstructionsMessage14)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function applicationHelp
 * @description A command to list the application commands. (There are no plugins for this application.)
 * See the Haystacks testHarness code for how to do this with plugins.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/24
 */
async function applicationHelp(inputData, inputMetaData) {
  let functionName = applicationHelp.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(wrd.chelp + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function applicationWorkflowHelp
 * @description A command to list the application workflows. (There are no plugins for this application.)
 * See the Haystacks testHarness code for how to do this with plugins.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array ith a boolean True or False value to indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/02/24
 */
async function applicationWorkflowHelp(inputData, inputMetaData) {
  let functionName = applicationWorkflowHelp.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(cmd.cworkflowHelp + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  instructions,
  applicationHelp,
  applicationWorkflowHelp
};