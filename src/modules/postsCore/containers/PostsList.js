/* eslint-disable no-underscore-dangle */

import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';

import PostsListEntry from './PostsListEntry';
import PostsDetails from './PostsDetails';

const PostsList = ({ query }) => (
  <Container >
    <Segment >
      {
        query ?
          query.posts.map(entry => (
            <Segment key={entry.__id} >
              <PostsListEntry postInfo={entry} />
              <br />
              <PostsDetails hideHeaderAndAuthor postInfo={entry} />
            </Segment>
          ))
        :
          'Loading...'
      }
    </Segment>
  </Container>
);

PostsList.propTypes = {
  query: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default createFragmentContainer(PostsList, graphql`
  fragment PostsList_query on Query {    
    posts {
      ...PostsListEntry_postInfo
      ...PostsDetails_postInfo
    }
  }
`);
