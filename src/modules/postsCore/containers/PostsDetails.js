import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Header } from 'semantic-ui-react';

const PostsDetails = ({ postInfo }) => (
  <Container >
    <Segment >
      <Header>
        { postInfo && postInfo.title }
      </Header>
      { `By ${postInfo && postInfo.author.name}`}
      <br />
      <br />
      { postInfo && postInfo.text }
    </Segment>
  </Container>
);

PostsDetails.propTypes = PropTypes.shape({
  postInfo: PropTypes.shape({}).isRequired,
}).isRequired;

export default createFragmentContainer(PostsDetails, graphql`
  fragment PostsDetails_postInfo on Post {    
    id
    title
    text
    author {
      name
    }
  }
`);
