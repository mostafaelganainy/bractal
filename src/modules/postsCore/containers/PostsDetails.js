import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';

const PostsDetails = ({ query }) => (
  <Container >
    <Segment >
      { query.post.id }
    </Segment>
  </Container>
);

PostsDetails.propTypes = PropTypes.shape({
  query: PropTypes.shape({
    post: PropTypes.shape(PropTypes.object),
  }),
}).isRequired;

export default createFragmentContainer(PostsDetails, graphql`
  fragment PostsDetails_query on Query @argumentDefinitions(
    filter: {type: "PostWhereUniqueInput!"},  # Optional argument
  ) {    
    post(where: $filter) {
      id
      title
      text
      author {
        name
      }
    }
  }
`);
