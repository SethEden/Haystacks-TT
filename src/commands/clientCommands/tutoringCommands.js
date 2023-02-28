/**
 * @file tutoringCommands.js
 * @module tutoringCommands
 * @description Contains all client defined commands fro execution of client actions with various operations, specific for typing tutoring.
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
 * @author Seth Hollingsead
 * @date 2023/02/27
 */
async function createAccount(inputData, inputMetaData) {
  let functionName = createAccount.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let userAccountData = await haystacks.getData(app_sys.cuserAccounts);
    // userAccountData is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cuserAccountDataIs + JSON.stringify(userAccountData));
    // Check first to see if the user already exists.

  } else {
    // ERROR: Invalid user name, please try again with a valid username.
    console.log(app_msg.cErrorInvalidUserNameCreateAccountMessage01 + inputData[1]);
  }
  // let newUserAccount = {userName: }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  createAccount
}