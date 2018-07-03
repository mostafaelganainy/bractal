/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';
import { Container } from 'semantic-ui-react';

import { withRelayEnvironment } from '../../core/utils/relayInitializer';

import PostsDetails from './PostsDetails';

const PostsDetailsPageQuery = graphql`
    query PostsDetailsPageQuery ($filter: PostWhereUniqueInput!) {  
      ...PostsDetails_query @arguments(filter: $filter)
    }
`;

const PostsDetailsPage = ({ environment, match }) => {
  const postID = match && match.params && match.params.id;

  return (
    <Container>
      <Link to="/posts" >
        <h1> {'< Posts List'} </h1>
      </Link>
      <br />
      <br />
      <QueryRenderer
        environment={environment}
        // eslint-disable-next-line react/jsx-curly-spacing
        query={ PostsDetailsPageQuery }
        variables={{
          filter: {
            id: postID,
          },
        }}
        render={({ error, props }) => {
          // eslint-disable-next-line react/prop-types
          const queryRoot = props;
          if (error) {
              return <Container>{error.message}</Container>;
          } else if (props) {
              return <PostsDetails query={queryRoot} />;
          }
          return <Container>Loading ...</Container>;
        }}
      />
    </Container>
  );
};

PostsDetailsPage.propTypes = {
  environment: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default withRelayEnvironment(PostsDetailsPage);
