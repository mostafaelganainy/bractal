import React from 'react';
import { translate, Trans } from 'react-i18next';
import { Container, Header } from 'semantic-ui-react';
import ModulesLoader from '../utils/modulesLoader';


const HomePage = () => {
  console.log("HI");
  console.log(ModulesLoader.Context.Consumer);

  return (
    <Container text>
      <br />
      <React.Fragment>
        <Header size="huge">
          <Trans i18nKey="metadata.appName" />
        </Header>
        <Header.Subheader>
          <Trans i18nKey="metadata.description" />
        </Header.Subheader>
      </React.Fragment>
      <React.Fragment>
        <Header size="large">
          <Trans i18nKey="home.howToUse.title" />
        </Header>
        <Header.Subheader>
          <Trans i18nKey="home.howToUse.description" />
        </Header.Subheader>
      </React.Fragment>
      <React.Fragment>
        <Header size="large">
          <Trans i18nKey="home.modules.title" />
        </Header>
        <ModulesLoader.Context.Consumer>
          {modules => modules.map(module => (
            <div><span> {module.name} </span></div>
          ))
          }
        </ModulesLoader.Context.Consumer>
      </React.Fragment>
    </Container>

  );
};

export default translate('core')(HomePage);
