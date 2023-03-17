# HaystacksTT
A simple Haystacks-async based command line typing tutor program for Windows, Mac &amp; Linux.

# Purpose
Used to teach kids typing skills, or anybody who wants to level up their typing skills, typing accuracy &amp; typing speed.

# Install
Pre-requisites
Install NPM - NODE Package Manager (>= v16)
https://nodejs.org/en/download/
Install GIT or Git-for-Windows
https://git-scm.com/downloads 

Open your favorite CLI/Powershell/BASH/CMD tool.
Navigate to your favorite projects folder.
Enter the command:
```
  git clone https://github.com/SethEden/HaystacksTT.git
```

# Run the application
Navigate into the haystacksTT folder.
Enter the command:
```
  npm install
```

Wait for the install process to finish.
Then enter the command:
```
  npm start
```

You will see something that looks like this:
```
  __    __       ___   ____    ____  _______.___________.    ___       ______  __  ___      _______.       .___________.___________.
  |  |  |  |     /   \  \   \  /   / /       |           |   /   \     /      ||  |/  /     /       |       |           |           |
  |  |__|  |    /  ^  \  \   \/   / |   (----`---|  |----`  /  ^  \   |  ,----'|  '  /     |   (----` ______`---|  |----`---|  |----`
  |   __   |   /  /_\  \  \_    _/   \   \       |  |      /  /_\  \  |  |     |    <       \   \    |______|   |  |        |  |
  |  |  |  |  /  _____  \   |  | .----)   |      |  |     /  _____  \ |  `----.|  .  \  .----)   |              |  |        |  |
  |__|  |__| /__/     \__\  |__| |_______/       |__|    /__/     \__\ \______||__|\__\ |_______/               |__|        |__|

  0.0.1
  A simple Haystacks-async based command line typing tutor program for Windows, Mac & Linux.
  Instructions to end user:
  Create an account using the createAccount command and provide your username.
  Use the login command to login to your account, no password or email required.
  Use the logout command to logout, if you want to allow another user to login, or just exit by typing exit/quit or x/q.
  All your lesson records will be stored under your account name in a local file under the resources folder.
  You can opt-out of saving your records by changing the flag: saveTypingRecords in the configuration settings file: ./src/resources/configuration/application.system.json
  You can call destroyRecords command with your account name to wipe out your typing records for good.
  The deleteAccount command will delete your account and destroy all your typing records for good.
  Once you are logged in, you can use the lessons command to display the lessons and see which lessons you have completed, and which ones are not yet started.
  If you are NOT logged in, the lessons command will simply list all the lessons available by the system.
  If you are NOT logged in, running the startLesson with a lesson number will start the lesson without saving any of the typing records.
  If you are logged in the system will only let you proceed to the next lesson if you have completed all the previous lessons with 90% success or greater.
  You can change the success limiting factor by changing the configuration flags: lessonPlanSuccessLimitingAccuracy, lessonPlanSuccessLimitingSpeed to some other value other than 90%, 70wpm.
  You can disable the success limiting factor completely and allow your users to take any lesson at any time by changing the configuration flag: enableLessonPlanLimitingFactors.
  Enter the command app?/appHelp or the command instructions to display these instructions again.
  ┌───────────────────────────────────┬─────────────────────────────────────┬───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │              (index)              │                Name                 │                                                    Description                                                    │
  ├───────────────────────────────────┼─────────────────────────────────────┼───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │           instructions            │           'instructions'            │                                 'Displays the instructions for the application.'                                  │
  │          applicationHelp          │          'applicationHelp'          │        'Displays all application commands and all plugin commands for plugins loaded by the application.'         │
  │      applicationWorkflowHelp      │      'applicationWorkflowHelp'      │       'Displays all application workflows and all plugin workflows for plugins loaded by the application.'        │
  │   validateApplicationConstants    │   'validateApplicationConstants'    │       'Validates all application constants and all plugin constants for plugins loaded by the application.'       │
  │ validateApplicationCommandAliases │ 'validateApplicationCommandAliases' │ 'Validates all application command aliases and all plugin command aliases for plugins loaded by the application.' │
  │   validateApplicationWorkflows    │   'validateApplicationWorkflows'    │       'Validates all application workflows and all plugin workflows for plugins loaded by the application.'       │
  │     allApplicationValidations     │     'allApplicationValidations'     │     'Validates all application validations and all plugin validations for plugins loaded by the application.'     │
  │           createAccount           │           'createAccount'           │                        'Creates a Haystacks Typing Tutor account to track your progress.'                         │
  │         printAccountsData         │         'printAccountsData'         │                          'Prints out the data for all accounts currently in the system.'                          │
  │         printAccountData          │         'printAccountData'          │       'Prints out the contents of a users account data, or all accounts data if no account name specified.'       │
  │           deleteAccount           │           'deleteAccount'           │                                 'Deletes a users account, and all account data.'                                  │
  │               login               │               'login'               │                              'Allows the user to login to a specified user account.'                              │
  │              logout               │              'logout'               │                                   'Allows the user to logout of their account.'                                   │
  │            startLesson            │            'startLesson'            │                                   'Allows the user to execute a typing lesson.'                                   │
  │        generateUserReport         │        'generateUserReport'         │          'Generates a table that displays what lessons the current logged in user has passed or failed.'          │
  │           printRecords            │           'printRecords'            │                   'Prints out a report of the highest passing lesson for all registered users.'                   │
  │          destroyRecords           │          'destroyRecords'           │               'Prints instructions for how the teacher or sys-admin can destroy all user records.'                │
  └───────────────────────────────────┴─────────────────────────────────────┴───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
  >
```

# Create Account
Enter the command: (without the "<>")
```
  createAccount <MyAccountName>
```

# Login
Enter the command: (without the "<>")
```
  login <MyAccountName>
```

You will see your account name displayed to the left of the ">" like this:
```
  >login Seth
  Seth>
```

# Start Lesson
Enter the command:
```
  startLesson 1
```

You will see something like this:
```
  LESSON INSTRUCTIONS:
  Place your left index finger on the "F" key, and your right index finger on the "J" key.
  Feel for the small raised bumps on the keys.
  These will help you ensure your fingers are on the correct home row before you begin typing.
  The rest of your fingers should naturally fall to the 3 keys adjacent and inline on the same row.
  Left fingers should rest on the keys "D", "S", and "A".
  Right fingers should rest on the keys "K", "L", and ";".
  Sit upright in your chair, back straight, elbows at your sides.
  The lesson will begin when you type the first character for each line.
  This is a timed lesson, so the faster you go the better your score will be.
  However, typing errors count against your score.
  You must get an accuracy score of: 90%
  NaNWords Per undefined or higher to advance to the next lesson.
  A report showing your score will display after the lesson is complete.
  Press the "ESC" key, in the far upper left corner of the keyboard to cancel a lesson.
  .--------------------------------------------------------------------.
  | [ESC] [F1][F2][F3][F4][F5][F6][F7][F8][F9][F10][F11][F12] o o o|
  |                                                                    |
  | [`][1][2][3][4][5][6][7][8][9][0][-][=][_<_] [I][H][U] [N][/][*][-]|
  | [/T][Q][W][E][R][T][Y][U][I][O][P][{][}] | | [D][E][D] [7][8][9]|+||
  | [CAP][A][S][D][F][G][H][J][K][L][;]['][_<-_]           [4][5][6]|_||
  | [SHIFT][Z][X][C][V][B][N][M][,][.][/][SHIFT]    [^]    [1][2][3]| ||
  | [CTRL][ALT][_______SPACE________][ALT][CTRL] [<][V][>] [ 0  ][.]|_||
  .--------------------------------------------------------------------.
  fj
```

The lesson is timed, but the time does not start until you type the first letter for each line.
Carefully read the instructions and follow them as best you can for best learning results.
If you miss-type the letter your type will be marked in bright color RED.
For each character you get correct the letter will be marked in bright color GREEN.

Continue with each line, until the lesson is complete. At which point your scores will be displayed on the screen and logged to your account for record keeping.

```
  fj
  fj
  ffffjjj
  ffffjjj
  jffffjj
  jffffjj
  jjffjjf
  jjffjjf
  fjjfjfj
  fjjfjfj
  jfjf
  jfjf
  Lesson time stamp is: 20230317-101439-500
  Total time is: 5104
  Total correct character count is: 34
  Total incorrect character count is: 0
  Total words is: 6.8
  Average WPM is: 108.80811932024973
  Average accuracy is: 1
  Adjusted WPM is: 108.80811932024973
  Seth>
```

Once you get a passing score, you will be allowed to proceed to the next lesson.
Passing score is at least 70 WPM - Words Per Minute, and an accuracy of at least 90%.

You can edit these passing grade parameters by modifying the configuration file located in the path:
```
  ./src/resources/configuration/application.system.json
```

```
  "system.enableLessonPlanLimitingFactors": true,
  "system.lessonPlanSuccessLimitingAccuracy": 90,
  "system.lessonPlanSuccessLimitingSpeed": 70
```

You can completely disable the passing grade limitation by changing the flag "enableLessonPlanLimitingFactors" to false.
Like so:
```
  "system.enableLessonPlanLimitingFactors": false,
```

Then re-save the file, and restart the application according to the instructions above.

# Exit / Quit
To exit the application simply type the command:
```
  x
```
or X, or exit or Exit or quit, etc...
You will be returned to the regular command prompt like so:

```
>x

C:\HaystacksTT>
```