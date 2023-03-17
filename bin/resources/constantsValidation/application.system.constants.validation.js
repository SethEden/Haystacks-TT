/**
 * @file application.system.constants.validation.js
 * @module application.system.constants.validation
 * @description Contains all validations for application system constants.
 * @requires module:application.system.constants
 * @author Seth Hollingsead
 * @date 2023/02/24
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_sys from '../../constants/application.system.constants.js';

export const applicationSystemConstantsValidation = [
  // Tutoring system constants
  {Name: 'cclientData', Actual: app_sys.cclientData, Expected: 'clientData'},
  {Name: 'cuserAccounts', Actual: app_sys.cuserAccounts, Expected: 'userAccounts'},
  {Name: 'capplicationLessons', Actual: app_sys.capplicationLessons, Expected: 'applicationLessons'},
  {Name: 'cLessonPlan', Actual: app_sys.cLessonPlan, Expected: 'LessonPlan'},
  {Name: 'ctypingTutorKeystroke', Actual: app_sys.ctypingTutorKeystroke, Expected: 'typingTutorKeystroke'},
  {Name: 'clineStartTime', Actual: app_sys.clineStartTime, Expected: 'lineStartTime'},
  {Name: 'clineEndTime', Actual: app_sys.clineEndTime, Expected: 'lineEndTime'},
  {Name: 'cdeltaTime', Actual: app_sys.cdeltaTime, Expected: 'deltaTime'},
  {Name: 'ccorrectCharacterCount', Actual: app_sys.ccorrectCharacterCount, Expected: 'correctCharacterCount'},
  {Name: 'cincorrectCharacterCount', Actual: app_sys.cincorrectCharacterCount, Expected: 'incorrectCharacterCount'},
  {Name: 'ctotalWords', Actual: app_sys.ctotalWords, Expected: 'totalWords'},
  {Name: 'cwpm', Actual: app_sys.cwpm, Expected: 'wpm'},
  {Name: 'caccuracy', Actual: app_sys.caccuracy, Expected: 'accuracy'},
  {Name: 'clessonTimeStamp', Actual: app_sys.clessonTimeStamp, Expected: 'lessonTimeStamp'},
  {Name: 'ctotalTime', Actual: app_sys.ctotalTime, Expected: 'totalTime'},
  {Name: 'ctotalCorrectCharacterCount', Actual: app_sys.ctotalCorrectCharacterCount, Expected: 'totalCorrectCharacterCount'},
  {Name: 'ctotalIncorrectCharacterCount', Actual: app_sys.ctotalIncorrectCharacterCount, Expected: 'totalIncorrectCharacterCount'},
  {Name: 'caverageWpm', Actual: app_sys.caverageWpm, Expected: 'averageWpm'},
  {Name: 'caverageAccuracy', Actual: app_sys.caverageAccuracy, Expected: 'averageAccuracy'},
  {Name: 'cadjustedWpm', Actual: app_sys.cadjustedWpm, Expected: 'adjustedWpm'},
  {Name: 'cUsername', Actual: app_sys.cUsername, Expected: 'Username'},
  {Name: 'cLessonNumber', Actual: app_sys.cLessonNumber, Expected: 'LessonNumber'},

  {Name: 'cresolvedConstantsPath_Application', Actual: app_sys.cresolvedConstantsPath_Application, Expected: 'resolvedConstantsPath_Application'},
  {Name: 'capplicationBusinessConstantsValidation', Actual: app_sys.capplicationBusinessConstantsValidation, Expected: 'applicationBusinessConstantsValidation'},
  {Name: 'capplicationCommandConstantsValidation', Actual: app_sys.capplicationCommandConstantsValidation, Expected: 'applicationCommandConstantsValidation'},
  {Name: 'capplicationConfigurationConstantsValidation', Actual: app_sys.capplicationConfigurationConstantsValidation, Expected: 'applicationConfigurationConstantsValidation'},
  {Name: 'capplicationConstantsValidation', Actual: app_sys.capplicationConstantsValidation, Expected:  'applicationConstantsValidation'},
  {Name: 'capplicationMessageConstantsValidation', Actual: app_sys.capplicationMessageConstantsValidation, Expected: 'applicationMessageConstantsValidation'},
  {Name: 'capplicationSystemConstantsValidation', Actual: app_sys.capplicationSystemConstantsValidation, Expected: 'applicationSystemConstantsValidation'},

  // Filenames
  {Name: 'capplication_business_constants_js', Actual: app_sys.capplication_business_constants_js, Expected: 'application.business.constants.js'},
  {Name: 'capplication_command_constants_js', Actual: app_sys.capplication_command_constants_js, Expected: 'application.command.constants.js'},
  {Name: 'capplication_configuration_constants_js', Actual: app_sys.capplication_configuration_constants_js, Expected: 'application.configuration.constants.js'},
  {Name: 'capplication_constants_js', Actual: app_sys.capplication_constants_js, Expected: 'application.constants.js'},
  {Name: 'capplication_message_constants_js', Actual: app_sys.capplication_message_constants_js, Expected: 'application.message.constants.js'},
  {Name: 'capplication_system_constants_js', Actual: app_sys.capplication_system_constants_js, Expected: 'application.system.constants.js'}
];