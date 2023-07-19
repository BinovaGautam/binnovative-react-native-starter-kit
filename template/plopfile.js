module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('module', {
    description: 'Create a new module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/Modules/{{pascalCase name}}/components/index.ts',
        templateFile: 'plop-templates/features/component/index.hbs',
      },
      {
        type: 'add',
        path: 'src/Modules/{{pascalCase name}}/screens/index.ts',
        templateFile: 'plop-templates/features/screen/index.hbs',
      },
      {
        type: 'add',
        path: 'src/Modules/{{pascalCase name}}/hooks/index.ts',
        templateFile: 'plop-templates/features/hook/index.hbs',
      },
      {
        type: 'add',
        path: 'src/Modules/{{pascalCase name}}/interfaces/index.ts',
        templateFile: 'plop-templates/features/interface/index.hbs',
      },
      {
        type: 'add',
        path: 'src/Modules/{{pascalCase name}}/services/index.ts',
        templateFile: 'plop-templates/features/service/index.hbs',
      },
    ],
  });
};
