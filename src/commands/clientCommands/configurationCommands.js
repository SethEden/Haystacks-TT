/**
 * @file configurationCommands.js
 * @module configurationCommands
 * @description Contains all client configuration defined commands for modifying of client configuration settings, specific for typing tutoring.
 * @requires module:accountBroker
 * @requires module:application.command.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2024/09/04
 * @copyright Copyright © 2024-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cfg from '../../constants/application.configuration.constants.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.haystacks-tt.commands.clientCommands.tutoringCommands.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setEnableLessonPlanLimitingFactors
 * @description Sets or resets the enableLessonPlanLimitingFactors configuration setting.
 * @param {string} inputData A string value of true or false to assign to the configuration setting.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/09/04
 */
async function setEnableLessonPlanLimitingFactors(inputData, inputMetaData) {
  let functionName = setEnableLessonPlanLimitingFactors.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let stringSettingValue = inputData[1];
    // stringSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstringSettingValueIs + stringSettingValue);
    let newSettingValue = false;
    newSettingValue = await haystacks.executeBusinessRules([stringSettingValue, ''], [biz.cstringToDataType]);
    // newSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewSettingValueIs + newSettingValue);
    let settingSaved = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cenableLessonPlanLimitingFactors, newSettingValue);
    // settingSaved is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingSavedIs + settingSaved);
    if (settingSaved === false) {
      // ERROR: Setting not saved: 
      console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors1 + app_cfg.cenableLessonPlanLimitingFactors);
    }
  } else {
    // ERROR: Invalid setting value input.
    console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors2 + app_cfg.cenableLessonPlanLimitingFactors);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetEnableLessonPlanLimitingFactors2 + 
      app_cfg.cenableLessonPlanLimitingFactors);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setEnableIndividualizedLessonPassingScores
 * @description Sets or resets the enableIndividualizedLessonPassingScores configuration setting.
 * @param {string} inputData A string value of true or false to assign to the configuration setting.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/09/04
 */
async function setEnableIndividualizedLessonPassingScores(inputData, inputMetaData) {
  let functionName = setEnableIndividualizedLessonPassingScores.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let stringSettingValue = inputData[1];
    // stringSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstringSettingValueIs + stringSettingValue);
    let newSettingValue = false;
    newSettingValue = await haystacks.executeBusinessRules([stringSettingValue, ''], [biz.cstringToDataType]);
    // newSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewSettingValueIs + newSettingValue);
    let settingSaved = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cenableIndividualizedLessonPassingScores, newSettingValue);
    // settingSaved is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingSavedIs + settingSaved);
    if (settingSaved === false) {
      // ERROR: Setting not saved: 
      console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors1 + app_cfg.cenableIndividualizedLessonPassingScores);
    }
  } else {
    // ERROR: Invalid setting value input.
    console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors2 + app_cfg.cenableIndividualizedLessonPassingScores);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetEnableLessonPlanLimitingFactors2 +
      app_cfg.cenableIndividualizedLessonPassingScores);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setLessonPlanSuccessLimitingAccuracy
 * @description Sets or resets the lessonPlanSuccessLimitingAccuracy configuration setting.
 * @param {string} inputData A string value of a number to assign to the configuration setting.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/09/04
 */
async function setLessonPlanSuccessLimitingAccuracy(inputData, inputMetaData) {
  let functionName = setLessonPlanSuccessLimitingAccuracy.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let stringSettingValue = inputData[1];
    // stringSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstringSettingValueIs + stringSettingValue);
    let newSettingValue = false;
    newSettingValue = await haystacks.executeBusinessRules([stringSettingValue, ''], [biz.cstringToDataType]);
    // newSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewSettingValueIs + newSettingValue);
    let settingSaved = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.clessonPlanSuccessLimitingAccuracy, newSettingValue);
    // settingSaved is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingSavedIs + settingSaved);
    if (settingSaved === false) {
      // ERROR: Setting not saved: 
      console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors1 + app_cfg.clessonPlanSuccessLimitingAccuracy);
    }
  } else {
    // ERROR: Invalid setting value input.
    console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors2 + app_cfg.clessonPlanSuccessLimitingAccuracy);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetEnableLessonPlanLimitingFactors2 +
      app_cfg.clessonPlanSuccessLimitingAccuracy);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setLessonPlanSuccessLimitingSpeed
 * @description Sets or resets the lessonPlanSuccessLimitingSpeed configuration setting.
 * @param {string} inputData A string value of a number to assign to the configuration setting.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/09/04
 */
async function setLessonPlanSuccessLimitingSpeed(inputData, inputMetaData) {
  let functionName = setLessonPlanSuccessLimitingSpeed.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let stringSettingValue = inputData[1];
    // stringSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstringSettingValueIs + stringSettingValue);
    let newSettingValue = false;
    newSettingValue = await haystacks.executeBusinessRules([stringSettingValue, ''], [biz.cstringToDataType]);
    // newSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewSettingValueIs + newSettingValue);
    let settingSaved = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.clessonPlanSuccessLimitingSpeed, newSettingValue);
    // settingSaved is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingSavedIs + settingSaved);
    if (settingSaved === false) {
      // ERROR: Setting not saved: 
      console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors1 + app_cfg.clessonPlanSuccessLimitingSpeed);
    }
  } else {
    // ERROR: Invalid setting value input.
    console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors2 + app_cfg.clessonPlanSuccessLimitingSpeed);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetEnableLessonPlanLimitingFactors2 +
      app_cfg.clessonPlanSuccessLimitingSpeed);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setAdhereToCurriculumOrderRequirement
 * @description Sets or resets the adhereToCurriculumOrderRequirement configuration setting.
 * @param {string} inputData A string value of true or false to assign to the configuration setting.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/09/04
 */
async function setAdhereToCurriculumOrderRequirement(inputData, inputMetaData) {
  let functionName = setAdhereToCurriculumOrderRequirement.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let stringSettingValue = inputData[1];
    // stringSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstringSettingValueIs + stringSettingValue);
    let newSettingValue = false;
    newSettingValue = await haystacks.executeBusinessRules([stringSettingValue, ''], [biz.cstringToDataType]);
    // newSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewSettingValueIs + newSettingValue);
    let settingSaved = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cadhereToCurriculumOrderRequirement, newSettingValue);
    // settingSaved is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingSavedIs + settingSaved);
    if (settingSaved === false) {
      // ERROR: Setting not saved: 
      console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors1 + app_cfg.cadhereToCurriculumOrderRequirement);
    }
  } else {
    // ERROR: Invalid setting value input.
    console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors2 + app_cfg.cadhereToCurriculumOrderRequirement);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetEnableLessonPlanLimitingFactors2 +
      app_cfg.cadhereToCurriculumOrderRequirement);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function manuallySetCurriculumIndex
 * @description Sets or resets the manuallySetCurriculumIndex configuration setting.
 * @param {string} inputData A string value of true or false to assign to the configuration setting.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2024/09/04
 */
async function manuallySetCurriculumIndex(inputData, inputMetaData) {
  let functionName = manuallySetCurriculumIndex.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  if (Array.isArray(inputData) && inputData.length === 2) {
    let stringSettingValue = inputData[1];
    // stringSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cstringSettingValueIs + stringSettingValue);
    let newSettingValue = false;
    newSettingValue = await haystacks.executeBusinessRules([stringSettingValue, ''], [biz.cstringToDataType]);
    // newSettingValue is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cnewSettingValueIs + newSettingValue);
    let settingSaved = await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cmanuallySetCurriculumIndex, newSettingValue);
    // settingSaved is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingSavedIs + settingSaved);
    if (settingSaved === false) {
      // ERROR: Setting not saved: 
      console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors1 + app_cfg.cmanuallySetCurriculumIndex);
    }
  } else {
    // ERROR: Invalid setting value input.
    console.log(app_msg.cErrorSetEnableLessonPlanLimitingFactors2 + app_cfg.cmanuallySetCurriculumIndex);
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cErrorSetEnableLessonPlanLimitingFactors2 +
      app_cfg.cmanuallySetCurriculumIndex);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  setEnableLessonPlanLimitingFactors,
  setEnableIndividualizedLessonPassingScores,
  setLessonPlanSuccessLimitingAccuracy,
  setLessonPlanSuccessLimitingSpeed,
  setAdhereToCurriculumOrderRequirement,
  manuallySetCurriculumIndex
}