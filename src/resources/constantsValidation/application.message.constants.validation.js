/**
 * @file application.message.constants.validation.js
 * @module application.message.constants.validation
 * @description Contains all validations for named application message constants.
 * @requires module:application.message.constants
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_msg from '../../constants/application.message.constants.js';

/**
 * @function applicationMessageConstantsValidation
 * @description Initializes the application message constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/02/24
 */
export const applicationMessageConstantsValidation = [
  // General application messages
  {Name: 'cuserAccountDataIs', Actual: app_msg.cuserAccountDataIs, Expected: 'userAccountData is: '},

  // Application messages
  {Name: 'cinstructionsMessage00', Actual: app_msg.cinstructionsMessage00, Expected: 'Instructions to end user:'},
  {Name: 'cinstructionsMessage01', Actual: app_msg.cinstructionsMessage01, Expected: 'Create an account using the createAccount command and provide your username.'},
  {Name: 'cinstructionsMessage02', Actual: app_msg.cinstructionsMessage02, Expected: 'Use the login command to login to your account, no password or email required.'},
  {Name: 'cinstructionsMessage03', Actual: app_msg.cinstructionsMessage03, Expected: 'Use the logout command to logout, if you want to allow another user to login, or just exit by typing exit/quit or x/q.'},
  {Name: 'cinstructionsMessage04', Actual: app_msg.cinstructionsMessage04, Expected: 'All your lesson records will be stored under your account name in a local file under the resources folder.'},
  {Name: 'cinstructionsMessage05', Actual: app_msg.cinstructionsMessage05, Expected: 'You can opt-out of saving your records by changing the flag: saveTypingRecords in the configuration settings file: ./src/resources/configuration/application.system.json'},
  {Name: 'cinstructionsMessage06', Actual: app_msg.cinstructionsMessage06, Expected: 'You can call destroyRecords command with your account name to wipe out your typing records for good.'},
  {Name: 'cinstructionsMessage07', Actual: app_msg.cinstructionsMessage07, Expected: 'The deleteAccount command will delete your account and destroy all your typing records for good.'},
  {Name: 'cinstructionsMessage08', Actual: app_msg.cinstructionsMessage08, Expected: 'Once you are logged in, you can use the lessons command to display the lessons and see which lessons you have completed, and which ones are not yet started.'},
  {Name: 'cinstructionsMessage09', Actual: app_msg.cinstructionsMessage09, Expected: 'If you are NOT logged in, the lessons command will simply list all the lessons available by the system.'},
  {Name: 'cinstructionsMessage10', Actual: app_msg.cinstructionsMessage10, Expected: 'If you are NOT logged in, running the startLesson with a lesson number will start the lesson without saving any of the typing records.'},
  {Name: 'cinstructionsMessage11', Actual: app_msg.cinstructionsMessage11, Expected: 'If you are logged in the system will only let you proceed to the next lesson if you have completed all the previous lessons with 90% success or greater.'},
  {Name: 'cinstructionsMessage12', Actual: app_msg.cinstructionsMessage12, Expected: 'You can change the success limiting factor by changing the configuration flag: lessonPlanSuccessLimitingFactor to some other value other than 90%.'},
  {Name: 'cinstructionsMessage13', Actual: app_msg.cinstructionsMessage13, Expected: 'You can disable the success limiting factor completely and allow your users to take any lesson at any time by changing the configuration flag: enableLessonPlanLimitingFactor.'},
  {Name: 'cinstructionsMessage14', Actual: app_msg.cinstructionsMessage14, Expected: 'Enter the command app?/appHelp or the command instructions to display these instructions again.'},

  {Name: 'cErrorInvalidUserNameCreateAccountMessage01', Actual: app_msg.cErrorInvalidUserNameCreateAccountMessage01, Expected: 'ERROR: Invalid user name, please try again with a valid username.'},
  {Name: 'cErrorNoUserAccountsDataLoadedMessage01', Actual: app_msg.cErrorNoUserAccountsDataLoadedMessage01, Expected: 'ERROR: No user accounts data was loaded, please ensure the accounts resources folder has accounts data. Path: '},
  {Name: 'cErrorNoLessonDataLoadedMessage01', Actual: app_msg.cErrorNoLessonDataLoadedMessage01, Expected: 'ERROR: No typing lessons data was loaded, please ensure the lessons folder has lessons data. Path: '},

  // Constants Validation
  {Name: 'callClientConstantsValidationDataIs', Actual: app_msg.callClientConstantsValidationDataIs, Expected: 'allClientConstantsValidationData is: '},
  {Name: 'cresolvedConstantsPath_ApplicationBusinessIs', Actual: app_msg.cresolvedConstantsPath_ApplicationBusinessIs, Expected: 'resolvedConstantsPath_ApplicationBusiness is: '},
  {Name: 'cresolvedConstantsPath_ApplicationCommandIs', Actual: app_msg.cresolvedConstantsPath_ApplicationCommandIs, Expected: 'resolvedConstantsPath_ApplicationCommand is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConfigurationIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConfigurationIs, Expected: 'resolvedConstantsPath_ApplicationConfiguration is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConstantIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConstantIs, Expected: 'resolvedConstantsPath_ApplicationConstant is: '},
  {Name: 'cresolvedConstantsPath_ApplicationMessageIs', Actual: app_msg.cresolvedConstantsPath_ApplicationMessageIs, Expected: 'resolvedConstantsPath_ApplicationMessage is: '},
  {Name: 'cresolvedConstantsPath_ApplicationSystemIs', Actual: app_msg.cresolvedConstantsPath_ApplicationSystemIs, Expected: 'resolvedConstantsPath_ApplicationSystem is: '},

  {Name: 'cApplicationBusinessConstantsPhase1Validation', Actual: app_msg.cApplicationBusinessConstantsPhase1Validation, Expected: 'Application Business Constants Phase 1 Validation'},
  {Name: 'cApplicationCommandConstantsPhase1Validation', Actual: app_msg.cApplicationCommandConstantsPhase1Validation, Expected: 'Application Command Constants Phase 1 Validation'},
  {Name: 'cApplicationConfigurationConstantsPhase1Validation', Actual: app_msg.cApplicationConfigurationConstantsPhase1Validation, Expected: 'Application Configuration Constants Phase 1 Validation'},
  {Name: 'cApplicationConstantsPhase1Validation', Actual: app_msg.cApplicationConstantsPhase1Validation, Expected: 'Application Constants Phase 1 Validation'},
  {Name: 'cApplicationMessageConstantsPhase1Validation', Actual: app_msg.cApplicationMessageConstantsPhase1Validation, Expected: 'Application Message Constants Phase 1 Validation'},
  {Name: 'cApplicationSystemConstantsPhase1Validation', Actual: app_msg.cApplicationSystemConstantsPhase1Validation, Expected: 'Application System Constants Phase 1 Validation'},

  {Name: 'cApplicationBusinessConstantsPhase2Validation', Actual: app_msg.cApplicationBusinessConstantsPhase2Validation, Expected: 'Application Business Constants Phase 2 Validation'},
  {Name: 'cApplicationCommandConstantsPhase2Validation', Actual: app_msg.cApplicationCommandConstantsPhase2Validation, Expected: 'Application Command Constants Phase 2 Validation'},
  {Name: 'cApplicationConfigurationConstantsPhase2Validation', Actual: app_msg.cApplicationConfigurationConstantsPhase2Validation, Expected: 'Application Configuration Constants Phase 2 Validation'},
  {Name: 'cApplicationConstantsPhase2Validation', Actual: app_msg.cApplicationConstantsPhase2Validation, Expected: 'Application Constants Phase 2 Validation'},
  {Name: 'cApplicationMessageConstantsPhase2Validation', Actual: app_msg.cApplicationMessageConstantsPhase2Validation, Expected: 'Application Message Constants Phase 2 Validation'},
  {Name: 'cApplicationSystemConstantsPhase2Validation', Actual: app_msg.cApplicationSystemConstantsPhase2Validation, Expected: 'Application System Constants Phase 2 Validation'},

  {Name: 'capplicationMessage01', Actual: app_msg.capplicationMessage01, Expected: 'BEGIN main program loop'},
  {Name: 'capplicationMessage02', Actual: app_msg.capplicationMessage02, Expected: 'BEGIN command parser'},
  {Name: 'capplicationMessage03', Actual: app_msg.capplicationMessage03, Expected: 'END command parser'},
  {Name: 'capplicationMessage04', Actual: app_msg.capplicationMessage04, Expected: 'END main program loop'},
  {Name: 'capplicationMessage05', Actual: app_msg.capplicationMessage05, Expected: 'Exiting Haystacks-TT application'}
];