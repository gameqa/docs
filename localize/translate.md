# Translate

In the ```GameQA``` directory, you will find a subdirectory ```repl``` that contains three ```.csv``` files:

1. ```repl_text.csv```
2. ```repl_emoji.csv```
3. ```repl_values.csv```

These files contain itemized lists of code components for GameQA that need to be translated into your language of choice. They have a handful of columns including:
- ```english```: The English translation of the code components
- ```context```: Text providing a description of context for the components to help with translations
- ```type```: The type of the components such as buttons, errors, texts, titles, etc.
- **```translation```:** **You fill this column with the appropriate translation**

## Translating text, emojis, and other values

The first step to translate all text in the GameQA repo is to translate every single row. We recommend doing this on copies of the following google sheets:

1. [repl_text](https://docs.google.com/spreadsheets/d/1V7f5iybm8Hm1USlOWyWG2OwiWNNpXRS--saMEdEgL4I/edit?usp=sharing)
2. [repl_emoji](https://docs.google.com/spreadsheets/d/1V7f5iybm8Hm1USlOWyWG2OwiWNNpXRS--saMEdEgL4I/edit?usp=sharing#gid=1314614428)
3. [repl_values](https://docs.google.com/spreadsheets/d/1V7f5iybm8Hm1USlOWyWG2OwiWNNpXRS--saMEdEgL4I/edit?usp=sharing#gid=1808038902)

Translating the text is mostly as straightforward as just writing the translated value into the translation column. However, there are three things you need to keep in mind while doing so. Failure to do so will result in the translation script failing. First, do not use double quotes ("") inside the translation column, always use single quotes. Second, there are format strings that look something like this in the code base `Password must be at least ${MIN_PW_LENGTH}`. When you see a format string (you identify them by the `${...}`) you must include the variable (the dollar sign, brackets, and variable name) in the translation as well. Third, make sure to fill out all the cells. 

If you don't follow these instructions (that is if you use any double quotes, don't do the format strings, and if you don't translate all cells) the translation script will fail and give you an error.

Once finished, you can download each of your copies as separate ```.csv``` files and replacing the ones present in ```GameQA/repl/``` correspondingly.

**Note:** Make sure you name the files the same as the the originals!

## Running the localization script

There is a ```localize.sh``` script in the root of the repo you just cloned. You will need to set the execute permissions for the file by running ```chmod +x localize.sh```.

Now you can run:
```
$ sh localize.sh
```

This script will first test your *repl* files for completion and correctness. Only if your files pass the test will the corresponding translation be run.

## After successful translation

Upon successful completion (no failure messages) you should see a new directory ```GameQA/Localized_App``` containing the localized code for both ```app``` and ```api```.

You are now ready to deploy the API and the app. **We recommend that you start with [Setting Up the API](../api-setup/introduction.md) since the App depends on it!**

<!--  -->
