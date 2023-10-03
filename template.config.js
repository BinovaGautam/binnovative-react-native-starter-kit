import inquirer from 'inquirer';

let templateDir;
const templateDirs = [
  './MyApp',
  './NewApp',
  './newArchBase'
];

inquirer
  .prompt([
    {
      type: 'list',
      name: 'templateDir',
      message: 'Select a template directory:',
      choices: templateDirs
    }
  ])
  .then(answers => {
    const userSelectedTemplateDir = answers.templateDir;
    console.log(`You selected: ${userSelectedTemplateDir}`);
    templateDir = userSelectedTemplateDir;
    // Use the userSelectedTemplateDir variable in your code here
  });

const config = {
  // Placeholder name that will be replaced in package.json, index.json, android/, ios/ for a project name.
  placeholderName: "BNRN-Boilerplate",

  // Placeholder title that will be replaced in values.xml and Info.plist with title provided by the user.
  // We default this value to 'Hello App Display Name', which is default placeholder in react-native template.
  titlePlaceholder: "Hello App Display Name",

  // Directory with the template which will be copied and processed by React Native CLI. Template directory should have package.json with all dependencies specified, including `react-native`.
  templateDir: templateDir,

  // Path to script, which will be executed after initialization process, but before installing all the dependencies specified in the template. This script runs as a shell script but you can change that (e.g. to Node) by using a shebang (see example custom template).
  postInitScript: "./script.js",
};


export default config;