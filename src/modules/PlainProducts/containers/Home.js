import React from 'react';
import { translate, Trans } from 'react-i18next';
import { Header, Container } from 'semantic-ui-react';

import PlainProductsListPage from './PlainProductsListPage';

const HomePage = () =>
  (
    <React.Fragment>
      <Container>
        <br />
        <Header size="huge">
          <Trans i18nKey="metadata.displayName" />
        </Header>
        <Header.Subheader>
          <Trans i18nKey="metadata.description" />
        </Header.Subheader>
        <br />
        <br />
        <br />
      </Container>
      <PlainProductsListPage />
    </React.Fragment>
  );

export default translate('PlainProducts')(HomePage);
