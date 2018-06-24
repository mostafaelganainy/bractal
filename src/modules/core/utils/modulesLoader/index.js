import React from 'react';
import coreModuleEntry from '../../index';

const defaultModuleSpec = {
  name: 'core',
  moduleEntry: coreModuleEntry,
};

const ModulesLoader = {
  loadModules: (modulesSpecs) => {    
    if (!Array.isArray(modulesSpecs)) {
      throw new Error('ModuleSpecs must be of type Array');
    }

    modulesSpecs.push(defaultModuleSpec);

    const modules = modulesSpecs.map((moduleSpec) => {
      console.log(`Loading Module : ${moduleSpec.name}`);
      moduleSpec.moduleEntry.loadModule();
      return moduleSpec;
    });

    ModulesLoader.Context = React.createContext(modules);

    return modules;
  },
  Context: React.createContext(['Ooooo']),
};

export default ModulesLoader;
