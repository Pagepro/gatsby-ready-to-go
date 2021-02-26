module.exports = (plop) => {
  const defaultInput = {
    type: 'input',
    name: 'name',
    message: 'Component Name',
  };

  plop.setGenerator('React Atom functional tsx Component', {
    description: 'with styled components and storybook',
    prompts: [defaultInput],
    actions: [
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/index.tsx',
        templateFile: 'plop-templates/FunctionalComponent.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/styles.ts',
        templateFile: 'plop-templates/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/index.stories.tsx',
        templateFile: 'plop-templates/Atoms.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/types.d.ts',
        templateFile: 'plop-templates/Component.types.d.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/atoms/{{name}}/theme.ts',
        templateFile: 'plop-templates/Component.theme.ts.hbs',
      },
    ],
  });

  plop.setGenerator('React Molecule functional tsx Component', {
    description: 'with styled components and storybook',
    prompts: [defaultInput],
    actions: [
      {
        type: 'add',
        path: 'src/components/molecules/{{name}}/index.tsx',
        templateFile: 'plop-templates/FunctionalComponent.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/molecules/{{name}}/styles.ts',
        templateFile: 'plop-templates/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/molecules/{{name}}/index.stories.tsx',
        templateFile: 'plop-templates/Molecules.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/molecules/{{name}}/types.d.ts',
        templateFile: 'plop-templates/Component.types.d.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/molecules/{{name}}/theme.ts',
        templateFile: 'plop-templates/Component.theme.ts.hbs',
      },
    ],
  });

  plop.setGenerator('React Organism functional tsx Component', {
    description: 'with styled components and storybook',
    prompts: [defaultInput],
    actions: [
      {
        type: 'add',
        path: 'src/components/organisms/{{name}}/index.tsx',
        templateFile: 'plop-templates/FunctionalComponent.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/organisms/{{name}}/styles.ts',
        templateFile: 'plop-templates/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/organisms/{{name}}/index.stories.tsx',
        templateFile: 'plop-templates/Organisms.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/organisms/{{name}}/types.d.ts',
        templateFile: 'plop-templates/Component.types.d.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/organisms/{{name}}/theme.ts',
        templateFile: 'plop-templates/Component.theme.ts.hbs',
      },
    ],
  });

  plop.setGenerator('Exit', {
    description: 'Nah... not today',
    prompts: [],
    actions: [`Ok. Have a good day 😊`],
  });
};
