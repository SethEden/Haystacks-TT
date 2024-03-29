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
  {Name: 'crawAccountDataIs', Actual: app_msg.crawAccountDataIs, Expected: 'rawAccountData is: '},
  {Name: 'crawLessonsDataIs', Actual: app_msg.crawLessonsDataIs, Expected: 'rawLessonsData is: '},
  {Name: 'cuserAccountDataIs', Actual: app_msg.cuserAccountDataIs, Expected: 'userAccountData is: '},
  {Name: 'cuserAccountKeyIs', Actual: app_msg.cuserAccountKeyIs, Expected: 'userAccountKey is: '},
  {Name: 'cuserAccountIs', Actual: app_msg.cuserAccountIs, Expected: 'userAccount is: '},
  {Name: 'caccountNameIs', Actual: app_msg.caccountNameIs, Expected: 'accountName is: '},
  {Name: 'clessonsDataIs', Actual: app_msg.clessonsDataIs, Expected: 'lessonsData is: '},
  {Name: 'clessonKeyIs', Actual: app_msg.clessonKeyIs, Expected: 'lessonKey is: '},
  {Name: 'clessonDataIs', Actual: app_msg.clessonDataIs, Expected: 'lessonData is: '},
  {Name: 'clessonNameArrayIs', Actual: app_msg.clessonNameArrayIs, Expected: 'lessonNameArray is: '},
  {Name: 'clessonNameIs', Actual: app_msg.clessonNameIs, Expected: 'lessonName is: '},
  {Name: 'cnewAccountIs', Actual: app_msg.cnewAccountIs, Expected: 'newAccount is: '},
  {Name: 'cstoredAccountDataIs', Actual: app_msg.cstoredAccountDataIs, Expected: 'storedAccountData is: '},
  {Name: 'cnewlyMergedAccountDataIs', Actual: app_msg.cnewlyMergedAccountDataIs, Expected: 'newlyMergedAccountData is: '},
  {Name: 'cdataToStoreIs', Actual: app_msg.cdataToStoreIs, Expected: 'dataToStore is: '},
  {Name: 'ccleanedAccountDataIs', Actual: app_msg.ccleanedAccountDataIs, Expected: 'cleanedAccountData is: '},
  {Name: 'cconfirmedDeleteUserResponseIs', Actual: app_msg.cconfirmedDeleteUserResponseIs, Expected: 'confirmedDeleteUserResponse is: '},
  {Name: 'callAccountsDataIs', Actual: app_msg.callAccountsDataIs, Expected: 'allAccountsData is: '},
  {Name: 'clessonNumberIs', Actual: app_msg.clessonNumberIs, Expected: 'lessonNumber is: '},
  {Name: 'cindividualLessonDataIs', Actual: app_msg.cindividualLessonDataIs, Expected: 'individualLessonData is: '},
  {Name: 'cindividualLessonLineKeyIs', Actual: app_msg.cindividualLessonLineKeyIs, Expected: 'individualLessonLineKey is: '},
  {Name: 'cindividualLessonLineIs', Actual: app_msg.cindividualLessonLineIs, Expected: 'individualLessonLine is: '},
  {Name: 'ccurrentUserNameIs', Actual: app_msg.ccurrentUserNameIs, Expected: 'currentUserName is: '},
  {Name: 'clessonPassingScoreEnabledIs', Actual: app_msg.clessonPassingScoreEnabledIs, Expected: 'lessonPassingScoreEnabled is: '},
  {Name: 'cpassingAccuracyScoreLimitIs', Actual: app_msg.cpassingAccuracyScoreLimitIs, Expected: 'passingAccuracyScoreLimit is: '},
  {Name: 'cpassingSpeedScoreLimitIs', Actual: app_msg.cpassingSpeedScoreLimitIs, Expected: 'passingSpeedScoreLimit is: '},
  {Name: 'clessonScoreDataIs', Actual: app_msg.clessonScoreDataIs, Expected: 'lessonScoreData is: '},
  {Name: 'cmaxLessonNumberIs', Actual: app_msg.cmaxLessonNumberIs, Expected: 'maxLessonNumber is: '},
  {Name: 'cuserLessonNumberIs', Actual: app_msg.cuserLessonNumberIs, Expected: 'userLessonNumber is: '},
  {Name: 'clessonAdvancementScoreLimitAccuracyIs', Actual: app_msg.clessonAdvancementScoreLimitAccuracyIs, Expected: 'lessonAdvancementScoreLimitAccuracy is: '},
  {Name: 'clessonAdvancementScoreLimitSpeedIs', Actual: app_msg.clessonAdvancementScoreLimitSpeedIs, Expected: 'lessonAdvancementScoreLimitSpeed is: '},
  {Name: 'cactualLessonDataIs', Actual: app_msg.cactualLessonDataIs, Expected: 'actualLessonData is: '},
  {Name: 'ccurrentLessonNumberIs', Actual: app_msg.ccurrentLessonNumberIs, Expected: 'currentLessonNumber is: '},
  {Name: 'clessonDescriptionIs', Actual: app_msg.clessonDescriptionIs, Expected: 'lessonDescription is: '},
  {Name: 'callLessonLinesIs', Actual: app_msg.callLessonLinesIs, Expected: 'allLessonLines is: '},
  {Name: 'callLessonLinesDataObjectIs', Actual: app_msg.callLessonLinesDataObjectIs, Expected: 'allLessonLinesDataObject is: '},
  {Name: 'clessonLineScoreDataIs', Actual: app_msg.clessonLineScoreDataIs, Expected: 'lessonLineScoreData is: '},
  {Name: 'clessonLineStringIs', Actual: app_msg.clessonLineStringIs, Expected: 'lessonLineString is: '},
  {Name: 'cuserEnteredCharacterIs', Actual: app_msg.cuserEnteredCharacterIs, Expected: 'userEnteredCharacter is: '},
  {Name: 'clineStartTimeIs', Actual: app_msg.clineStartTimeIs, Expected: 'lineStartTime is: '},
  {Name: 'clineEndTimeIs', Actual: app_msg.clineEndTimeIs, Expected: 'lineEndTime is: '},
  {Name: 'ccharactersCorrectCountIs', Actual: app_msg.ccharactersCorrectCountIs, Expected: 'charactersCorrectCount is: '},
  {Name: 'ccharactersInCorrectCountIs', Actual: app_msg.ccharactersInCorrectCountIs, Expected: 'charactersIncorrectCount is: '},
  {Name: 'ctotalNumberOfWordsIs', Actual: app_msg.ctotalNumberOfWordsIs, Expected: 'totalNumberOfWords is: '},
  {Name: 'cwpmIs', Actual: app_msg.cwpmIs, Expected: 'wpm is: '},
  {Name: 'caccuracyIs', Actual: app_msg.caccuracyIs, Expected: 'accuracy is: '},
  {Name: 'cscoresDataArrayIs', Actual: app_msg.cscoresDataArrayIs, Expected: 'scoresDataArray is: '},
  {Name: 'cscoreObjectIs', Actual: app_msg.cscoreObjectIs, Expected: 'scoreObject is: '},
  {Name: 'clessonTimeStampIs', Actual: app_msg.clessonTimeStampIs, Expected: 'lessonTimeStamp is: '},
  {Name: 'ctotalTimeIs', Actual: app_msg.ctotalTimeIs, Expected: 'totalTime is: '},
  {Name: 'ctotalCorrectCharacterCountIs', Actual: app_msg.ctotalCorrectCharacterCountIs, Expected: 'totalCorrectCharacterCount is: '},
  {Name: 'ctotalIncorrectCharacterCountIs', Actual: app_msg.ctotalIncorrectCharacterCountIs, Expected: 'totalIncorrectCharacterCount is: '},
  {Name: 'ctotalWordsIs', Actual: app_msg.ctotalWordsIs, Expected: 'totalWords is: '},
  {Name: 'caverageWpmIs', Actual: app_msg.caverageWpmIs, Expected: 'averageWPM is: '},
  {Name: 'caverageAccuracyIs', Actual: app_msg.caverageAccuracyIs, Expected: 'averageAccuracy is: '},
  {Name: 'cupdatedUserAccountDataIs', Actual: app_msg.cupdatedUserAccountDataIs, Expected: 'updatedUserAccountData is: '},
  {Name: 'cdataToAppendIs', Actual: app_msg.cdataToAppendIs, Expected: 'dataToAppend is: '},
  {Name: 'ccurrentUserAccountNameIs', Actual: app_msg.ccurrentUserAccountNameIs, Expected: 'currentUserAccountName is: '},
  {Name: 'clessonNameKeyIs', Actual: app_msg.clessonNameKeyIs, Expected: 'lessonNameKey is: '},
  {Name: 'cusersLessonDataObjectIs', Actual: app_msg.cusersLessonDataObjectIs, Expected: 'usersLessonDataObject is: '},
  {Name: 'cusersLessonDataObjectKeysIs', Actual: app_msg.cusersLessonDataObjectKeysIs, Expected: 'usersLessonDataObjectKeys is: '},
  {Name: 'cusersLessonDataIs', Actual: app_msg.cusersLessonDataIs, Expected: 'usersLessonData is: '},
  {Name: 'cusersLessonDataAfterPushIs', Actual: app_msg.cusersLessonDataAfterPushIs, Expected: 'usersLessonData after data push is: '},
  {Name: 'clessonNameKeyEqualsLessonName', Actual: app_msg.clessonNameKeyEqualsLessonName, Expected: 'lessonNameKey === lessonName'},
  {Name: 'cappAccountsPathIs', Actual: app_msg.cappAccountsPathIs, Expected: 'appAccountsPath is: '},
  {Name: 'cadvancementLimitSettingIs', Actual: app_msg.cadvancementLimitSettingIs, Expected: 'advancementLimitSetting is: '},
  {Name: 'callLessonsDataIs', Actual: app_msg.callLessonsDataIs, Expected: 'allLessonsData is: '},
  {Name: 'clessonPlanKeysIs', Actual: app_msg.clessonPlanKeysIs, Expected: 'lessonPlanKeys is: '},
  {Name: 'clessonKeyValueIs', Actual: app_msg.clessonKeyValueIs, Expected: 'lessonKeyValue is: '},
  {Name: 'cadjustedWpmIs', Actual: app_msg.cadjustedWpmIs, Expected: 'adjustedWpm is: '},
  {Name: 'clessonCountIs', Actual: app_msg.clessonCountIs, Expected: 'lessonCount is: '},
  {Name: 'chighestScoringLessonAboveAdvancementLimitIs', Actual: app_msg.chighestScoringLessonAboveAdvancementLimitIs, Expected: 'highestScoringLessonAboveAdvancementLimit is: '},
  {Name: 'cmasterLessonsData', Actual: app_msg.cmasterLessonsData, Expected: 'masterLessonsData is: '},
  {Name: 'chighestScoreForLessonIs', Actual: app_msg.chighestScoreForLessonIs, Expected: 'highestScoreForLesson is: '},
  {Name: 'cindividualLessonNameIs', Actual: app_msg.cindividualLessonNameIs, Expected: 'individualLessonName is: '},
  {Name: 'cusersLessonScoreIndividualLessonRecordIs', Actual: app_msg.cusersLessonScoreIndividualLessonRecordIs, Expected: 'usersLessonScoreIndividualLessonRecord is: '},
  {Name: 'caccuracyLimitIs', Actual: app_msg.caccuracyLimitIs, Expected: 'accuracyLimit is: '},
  {Name: 'cspeedLimitIs', Actual: app_msg.cspeedLimitIs, Expected: 'speedLimit is: '},
  {Name: 'cinputUserNameIs', Actual: app_msg.cinputUserNameIs, Expected: 'inputUserName is: '},

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
  {Name: 'cinstructionsMessage12', Actual: app_msg.cinstructionsMessage12, Expected: 'You can change the success limiting factor by changing the configuration flags: lessonPlanSuccessLimitingAccuracy, lessonPlanSuccessLimitingSpeed to some other value other than 90%, 70wpm.'},
  {Name: 'cinstructionsMessage13', Actual: app_msg.cinstructionsMessage13, Expected: 'You can disable the success limiting factor completely and allow your users to take any lesson at any time by changing the configuration flag: enableLessonPlanLimitingFactors.'},
  {Name: 'cinstructionsMessage14', Actual: app_msg.cinstructionsMessage14, Expected: 'Enter the command app?/appHelp or the command instructions to display these instructions again.'},

  {Name: 'cErrorInvalidUserNameCreateAccountMessage01', Actual: app_msg.cErrorInvalidUserNameCreateAccountMessage01, Expected: 'ERROR: Invalid user name, please try again with a valid username.'},
  {Name: 'cErrorInvalidUserNameCreateAccountMessage02', Actual: app_msg.cErrorInvalidUserNameCreateAccountMessage02, Expected: 'ERROR: The user account already exists, please choose a different user name and try again.'},
  {Name: 'cErrorCreateAccountMessage02', Actual: app_msg.cErrorCreateAccountMessage02, Expected: 'ERROR: Newly created account was not saved, could not create the specified account: '},
  {Name: 'cErrorNoUserAccountsDataLoadedMessage01', Actual: app_msg.cErrorNoUserAccountsDataLoadedMessage01, Expected: 'ERROR: No user accounts data was loaded, please ensure the accounts resources folder has accounts data. Path: '},
  {Name: 'cErrorNoLessonDataLoadedMessage01', Actual: app_msg.cErrorNoLessonDataLoadedMessage01, Expected: 'ERROR: No typing lessons data was loaded, please ensure the lessons folder has lessons data. Path: '},
  {Name: 'cErrorNoUserFoundDeleteAccountMessage01', Actual: app_msg.cErrorNoUserFoundDeleteAccountMessage01, Expected: 'ERROR: Cannot delete user, user does not exist.'},
  {Name: 'cErrorNoDeleteAccountMessage02', Actual: app_msg.cErrorNoDeleteAccountMessage02, Expected: 'INFO: No account was deleted.'},
  {Name: 'cUserDeleteAccountConfirmedMessage01', Actual: app_msg.cUserDeleteAccountConfirmedMessage01, Expected: 'WARNING: All user account data will be lost FOREVER!'},
  {Name: 'cUserDeleteAccountConfirmedMessage02', Actual: app_msg.cUserDeleteAccountConfirmedMessage02, Expected: 'Are you sure you want to delete the account? (yes/y or no/n)'},
  {Name: 'cErrorNoUserFoundLoginMessage01', Actual: app_msg.cErrorNoUserFoundLoginMessage01, Expected: 'ERROR: Cannot login, user does not exist.'},
  {Name: 'cErrorLoginMessage02', Actual: app_msg.cErrorLoginMessage02, Expected: 'ERROR: Unable to login with the specified user: '},
  {Name: 'cErrorFailureToLogOutMessage01', Actual: app_msg.cErrorFailureToLogOutMessage01, Expected: 'ERROR: Failure to logout.'},
  {Name: 'cErrorStartLessonMessage01', Actual: app_msg.cErrorStartLessonMessage01, Expected: 'ERROR: No lesson number entered. Please enter a valid lesson number to execute.'},
  {Name: 'cErrorStartLessonMessage02', Actual: app_msg.cErrorStartLessonMessage02, Expected: 'ERROR: Invalid lesson number entered. Please enter a valid lesson number to execute.'},
  {Name: 'cErrorStartLessonMessage03', Actual: app_msg.cErrorStartLessonMessage03, Expected: 'ERROR: The lesson number entered is not available.'},
  {Name: 'cErrorStartLessonMessage04', Actual: app_msg.cErrorStartLessonMessage04, Expected: 'Please enter a lesson number between 1 and: '},
  {Name: 'cErrorGetIndividualLessonDataMessage01', Actual: app_msg.cErrorGetIndividualLessonDataMessage01, Expected: 'ERROR: There was an error with the lesson data, invalid lesson number: '},
  {Name: 'cErrorExecuteLessonMessage01', Actual: app_msg.cErrorExecuteLessonMessage01, Expected: 'ERROR: No lesson lines for the specified lesson number: '},
  {Name: 'csaveAccountDataFailureMessage01', Actual: app_msg.csaveAccountDataFailureMessage01, Expected: 'ERROR: Failure to write out the file: '},
  {Name: 'cWarningStartLessonMessage01', Actual: app_msg.cWarningStartLessonMessage01, Expected: 'WARNING: You are not allowed to run this lesson,'},
  {Name: 'cWarningStartLessonMessage02', Actual: app_msg.cWarningStartLessonMessage02, Expected: 'please complete the earlier lessons before proceeding.'},
  {Name: 'cgenerateUserReportMessage01', Actual: app_msg.cgenerateUserReportMessage01, Expected: 'Haystacks Typing Tutor report card for user: '},
  {Name: 'cgenerateUserReportMessage02', Actual: app_msg.cgenerateUserReportMessage02, Expected: 'ERROR: User is not logged in, cannot generate user report.'},
  {Name: 'cgenerateUserReportMessage03', Actual: app_msg.cgenerateUserReportMessage03, Expected: 'Login to an account and try again.'},
  {Name: 'cprintRecordsMessage01', Actual: app_msg.cprintRecordsMessage01, Expected: 'Haystacks Typing Tutor users report:'},
  {Name: 'cmessageLessonTimeStampIs', Actual: app_msg.cmessageLessonTimeStampIs, Expected: 'Lesson time stamp is: '},
  {Name: 'cmessageTotalTimeIs', Actual: app_msg.cmessageTotalTimeIs, Expected: 'Total time is: '},
  {Name: 'cmessageTotalCorrectCharacterCountIs', Actual: app_msg.cmessageTotalCorrectCharacterCountIs, Expected: 'Total correct character count is: '},
  {Name: 'cmessageTotalIncorrectCharacterCountIs', Actual: app_msg.cmessageTotalIncorrectCharacterCountIs, Expected: 'Total incorrect character count is: '},
  {Name: 'cmessageTotalWordsIs', Actual: app_msg.cmessageTotalWordsIs, Expected: 'Total words is: '},
  {Name: 'cmessageAverageWpmIs', Actual: app_msg.cmessageAverageWpmIs, Expected: 'Average WPM is: '},
  {Name: 'cmessageAverageAccuracyIs', Actual: app_msg.cmessageAverageAccuracyIs, Expected: 'Average accuracy is: '},
  {Name: 'cmessageAdjustedWpmIs', Actual: app_msg.cmessageAdjustedWpmIs, Expected: 'Adjusted WPM is: '},
  // ****************************************************************************************************
  {Name: 'cLessonInstructionsMessage01', Actual: app_msg.cLessonInstructionsMessage01, Expected: 'LESSON INSTRUCTIONS:'},
  {Name: 'cLessonInstructionsMessage02', Actual: app_msg.cLessonInstructionsMessage02, Expected: 'Place your left index finger on the "F" key, and your right index finger on the "J" key.'},
  {Name: 'cLessonInstructionsMessage03', Actual: app_msg.cLessonInstructionsMessage03, Expected: 'Feel for the small raised bumps on the keys.'},
  {Name: 'cLessonInstructionsMessage04', Actual: app_msg.cLessonInstructionsMessage04, Expected: 'These will help you ensure your fingers are on the correct home row before you begin typing.'},
  {Name: 'cLessonInstructionsMessage05', Actual: app_msg.cLessonInstructionsMessage05, Expected: 'The rest of your fingers should naturally fall to the 3 keys adjacent and inline on the same row.'},
  {Name: 'cLessonInstructionsMessage06', Actual: app_msg.cLessonInstructionsMessage06, Expected: 'Left fingers should rest on the keys "D", "S", and "A".'},
  {Name: 'cLessonInstructionsMessage07', Actual: app_msg.cLessonInstructionsMessage07, Expected: 'Right fingers should rest on the keys "K", "L", and ";".'},
  {Name: 'cLessonInstructionsMessage08', Actual: app_msg.cLessonInstructionsMessage08, Expected: 'Sit upright in your chair, back straight, elbows at your sides.'},
  {Name: 'cLessonInstructionsMessage09', Actual: app_msg.cLessonInstructionsMessage09, Expected: 'The lesson will begin when you type the first character for each line.'},
  {Name: 'cLessonInstructionsMessage10', Actual: app_msg.cLessonInstructionsMessage10, Expected: 'This is a timed lesson, so the faster you go the better your score will be.'},
  {Name: 'cLessonInstructionsMessage11', Actual: app_msg.cLessonInstructionsMessage11, Expected: 'However, typing errors count against your score.'},
  {Name: 'cLessonInstructionsMessage12', Actual: app_msg.cLessonInstructionsMessage12, Expected: 'You must get an accuracy score of: '},
  {Name: 'cLessonInstructionsMessage13', Actual: app_msg.cLessonInstructionsMessage13, Expected: 'And a speed score of at least: '},
  {Name: 'cLessonInstructionsMessage14', Actual: app_msg.cLessonInstructionsMessage14, Expected: 'or higher to advance to the next lesson.'},
  {Name: 'cLessonInstructionsMessage15', Actual: app_msg.cLessonInstructionsMessage15, Expected: 'A report showing your score will display after the lesson is complete.'},
  {Name: 'cLessonInstructionsMessage16', Actual: app_msg.cLessonInstructionsMessage16, Expected: 'Press the "ESC" key, in the far upper left corner of the keyboard to cancel a lesson.'},
  // ****************************************************************************************************
  {Name: 'destroyRecordsInstructionsMessage01', Actual: app_msg.destroyRecordsInstructionsMessage01, Expected: 'Before you destroy the records, make sure you exit the Haystacks Typing Tutor application,'},
  {Name: 'destroyRecordsInstructionsMessage02', Actual: app_msg.destroyRecordsInstructionsMessage02, Expected: 'or the records will be resaved after you delete them.'},
  {Name: 'destroyRecordsInstructionsMessage03', Actual: app_msg.destroyRecordsInstructionsMessage03, Expected: 'You can destroy all records by going to the application installed path:'},
  {Name: 'destroyRecordsInstructionsMessage04', Actual: app_msg.destroyRecordsInstructionsMessage04, Expected: './src/resources/accounts/'},
  {Name: 'destroyRecordsInstructionsMessage05', Actual: app_msg.destroyRecordsInstructionsMessage05, Expected: './bin/resources/accounts/'},
  {Name: 'destroyRecordsInstructionsMessage06', Actual: app_msg.destroyRecordsInstructionsMessage06, Expected: 'Then delete all of the files with the .JSON file extension.'},
  {Name: 'destroyRecordsInstructionsMessage07', Actual: app_msg.destroyRecordsInstructionsMessage07, Expected: 'This will remove all account data from the system forever.'},
  {Name: 'destroyRecordsInstructionsMessage08', Actual: app_msg.destroyRecordsInstructionsMessage08, Expected: 'If you wish to back-up the account data,'},
  {Name: 'destroyRecordsInstructionsMessage09', Actual: app_msg.destroyRecordsInstructionsMessage09, Expected: 'you can copy these files to another storage location before deleting them.'},
  // ****************************************************************************************************
  // ASCII Keyboard map art:
  // ****************************************************************************************************
  // .--------------------------------------------------------------------.
  // | [ESC] [F1][F2][F3][F4][F5][F6][F7][F8][F9][F0][F10][F11][F12] o o o|
  // |                                                                    |
  // | [`][1][2][3][4][5][6][7][8][9][0][-][=][_<_] [I][H][U] [N][/][*][-]|
  // | [/T][Q][W][E][R][T][Y][U][I][O][P][{][}] | | [D][E][D] [7][8][9]|+||
  // | [CAP][A][S][D][F][G][H][J][K][L][;]['][_<-_]           [4][5][6]|_||
  // | [SHIFT][Z][X][C][V][B][N][M][,][.][/][SHIFT]    [^]    [1][2][3]| ||
  // | [CTRL][ALT][_______SPACE________][ALT][CTRL] [<][V][>] [ 0  ][.]|_||
  // `--------------------------------------------------------------------'
  // ****************************************************************************************************
  {Name: 'cKeyboardAsciMap01', Actual: app_msg.cKeyboardAsciMap01, Expected: '.--------------------------------------------------------------------.'},
  {Name: 'cKeyboardAsciMap02', Actual: app_msg.cKeyboardAsciMap02, Expected: '| [ESC] [F1][F2][F3][F4][F5][F6][F7][F8][F9][F10][F11][F12] o o o|'},
  {Name: 'cKeyboardAsciMap03', Actual: app_msg.cKeyboardAsciMap03, Expected: '|                                                                    |'},
  {Name: 'cKeyboardAsciMap04', Actual: app_msg.cKeyboardAsciMap04, Expected: '| [`][1][2][3][4][5][6][7][8][9][0][-][=][_<_] [I][H][U] [N][/][*][-]|'},
  {Name: 'cKeyboardAsciMap05', Actual: app_msg.cKeyboardAsciMap05, Expected: '| [/T][Q][W][E][R][T][Y][U][I][O][P][{][}] | | [D][E][D] [7][8][9]|+||'},
  {Name: 'cKeyboardAsciMap06', Actual: app_msg.cKeyboardAsciMap06, Expected: '| [CAP][A][S][D][F][G][H][J][K][L][;][\'][_<-_]           [4][5][6]|_||'},
  {Name: 'cKeyboardAsciMap07', Actual: app_msg.cKeyboardAsciMap07, Expected: '| [SHIFT][Z][X][C][V][B][N][M][,][.][/][SHIFT]    [^]    [1][2][3]| ||'},
  {Name: 'cKeyboardAsciMap08', Actual: app_msg.cKeyboardAsciMap08, Expected: '| [CTRL][ALT][_______SPACE________][ALT][CTRL] [<][V][>] [ 0  ][.]|_||'},
  // ****************************************************************************************************

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