import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Header } from 'semantic-ui-react';

const PostsDetails = ({ query }) => (
  <Container >
    <Segment >
      <Header>
        { query.post.title }
      </Header>
      { `By ${query.post.author.name}`}
      <br />
      <br />
      { query.post.text }
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
