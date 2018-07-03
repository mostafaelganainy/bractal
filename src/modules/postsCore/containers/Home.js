import React from 'react';
import { Route } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import { Header, Container } from 'semantic-ui-react';

import PostsDetailsPage from './PostsDetailsPage';
import PostsListPage from './PostsListPage';

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
      <Route path="/posts" exact component={PostsListPage} />
      <Route path="/posts/:id" exact component={PostsDetailsPage} />
    </React.Fragment>
  );

export default translate('postsCore')(HomePage);
