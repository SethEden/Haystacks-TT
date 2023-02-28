#!/usr/bin/env node
/* eslint-disable no-undef */

/**
 * @file main.js
 * @module main
 * @description This is the main init fro the haystacks-tt application.
 * It contains just enough of the main program loop and basic argument parsing to function as an interactive typing tutor application.
 * @requires module:accountBroker
 * @requires module:tutoringRules
 * @requires module:tutoringCommands
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.function.constants
 * @requires module:application.message.constants
 * @requires module:allApplicationConstantsValidationMetadata
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/23
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import accountBroker from './brokers/accountBroker.js';
import tutoringRules from './businessRules/tutoringRulesLibrary.js';
import tutoringCommands from './commands/tutoringCommandsLibrary.js';
import * as app_cmd from './constants/application.command.constants.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_msg from './constants/application.message.constants.js';
import * as app_sys from './constants/application.system.constants.js';
import allAppCV from './resources/constantsValidation/allApplicationConstantsValidationMetadata.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
let rootPath = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.haystacks-tt.
let namespacePrefix = wrd.capplication + bas.cDot + baseFileName + bas.cDot;
// eslint-disable-next-line no-undef
global.appRoot = path.resolve(process.cwd());
dotenv.config();
// eslint-disable-next-ine no-undef
const {NODE_ENV} = process.env;
let exitConditionArrayIndex = 0;

/**
 * @function bootstrapApplication
 * @description Setup all the run-time dependencies, execution environment, data, and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/02/23
 */
async function bootStrapApplication() {
  // let functionName = bootStrapApplication.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = [];
  let pathSeparator = '';
  if (rootPath.includes(bas.cBackSlash) === true) {
    pathSeparator = bas.cBackSlash;
  } else if (rootPath.includes(bas.cForwardSlash) === true) {
    pathSeparator = bas.cForwardSlash;
  }
  rootPathArray = rootPath.split(pathSeparator);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(pathSeparator);
  let appConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appAccountsPath: rootPath + apc.cFullDevAccountsPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullDevPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      appLessonsPath: rootPath + apc.cFullDevLessonsPath,
      clientThemesPath: rootPath + apc.cFullDevThemesPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else if (NODE_ENV === wrd.cproduction) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkProdName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullProdResourcesPath,
      appAccountsPath: rootPath + apc.cFullProdAccountsPath,
      appConfigReferencePath: rootPath + apc.cFullProdConfigurationPath,
      clientMetaDataPath: apc.metaDataProdPath,
      clientCommandAliasesPath: rootPath + apc.cFullProdCommandsPath,
      clientConstantsPath: rootPath + apc.cFullProdConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullProdPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullProdWorkflowsPath,
      appLessonsPath: rootPath + apc.cFullProdLessonsPath,
      clientThemesPath: rootPath + apc.cFullProdThemesPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else {
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appAccountsPath: rootPath + apc.cFullDevAccountsPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullDevPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      appLessonsPath: rootPath + apc.cFullDevLessonsPath,
      clientTemesPath: rootPath + apc.cFullDevThemesPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  }
  appConfig[sys.cclientBusinessRules] = await tutoringRules.initApplicationRulesLibrary();
  appConfig[sys.cclientCommands] = await tutoringCommands.initApplicationCommandsLibrary();
  // console.log('appConfig is: ', appConfig);
  await haystacks.initFramework(appConfig);
  await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cappAccountsPath, appConfig[app_cfg.cappAccountsPath]);
  await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cappLessonsPath, appConfig[app_cfg.cappLessonsPath]);
  let accountsData = await haystacks.loadAllJsonData(appConfig[app_cfg.cappAccountsPath], app_sys.cuserAccounts);
  let lessonsData = await haystacks.loadAllJsonData(appConfig[app_cfg.cappLessonsPath], app_sys.capplicationLessons);
  let accountDataStored = await haystacks.storeData(app_sys.cuserAccounts, accountsData);
  let lessonDataStored = await haystacks.storeData(app_sys.capplicationLessons, lessonsData);
  if (accountDataStored === false || !accountsData) {
    // ERROR: No user accounts data was loaded, please ensure the accounts resources folder has accounts data. Path:
    console.log(app_msg.cErrorNoUserAcountsDataLoadedMessage01 + appConfig[app_cfg.cappAccountsPath]);
  }
  if (lessonDataStored === false || !lessonsData) {
    // ERROR: No typing lessons data was loaded, please ensure the lessons folder has lessons data. Path:
    console.log(app_msg.cErrorNoLessonDataLoadedMessage01 + appConfig[app_cfg.cappLessonsPath]);
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function application
 * @description This is the main program loop, the init for the Haystacks-TT application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/02/23
 */
async function application() {
  let functionName = application.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let commandInput;
  let commandResult;

  await haystacks.enqueueCommand(app_cmd.cApplicationStartupWorkflow);
  // Make sure to process all of the startup command workflow commands before we go into the main program loop
  while (await haystacks.isCommandQueueEmpty() === false) {
    commandResult = await haystacks.processCommandQueue();
  } // End-while (await haystacks.isCommandQueueEmpty() === false)

  // BEGIN the main program loop
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage01);

  // BEGIN command parser
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage02);
  while (programRunning === true) {
    currentUser = await accountBroker.currentUserAccount();
    if (await haystacks.isCommandQueueEmpty() === true) {
      commandInput = await haystacks.executeBusinessRules([currentUser + bas.cGreaterThan, ''], [wrd.cprompt]);
      await haystacks.enqueueCommand(commandInput);
    } // End-if (await haystacks.isCommandQueueEmpty() === true)
    commandResult = await haystacks.processCommandQueue();
    if (commandResult[exitConditionArrayIndex] === false) {
      // END command parser
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage03);
      programRunning = false;
      // END main program loop
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage04);
      // Exiting Haystacks-TT application
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage05);
      break;
    } // End-if (commandResult[exitConditionArrayIndex] === false)
  } // End-while (programRunning === true)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}

// Launch the application!
let programRunning = false;
let currentUser = '';
await bootStrapApplication();
programRunning = true;
await application();
process.exit();