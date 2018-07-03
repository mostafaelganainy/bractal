import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
const AuthorAndTitle = ({ postInfo, hideHeaderAndAuthor }) => {
  if (hideHeaderAndAuthor) return null;
  return (
    <React.Fragment>
      <Header>
        { postInfo && postInfo.title }
      </Header>
      { `By ${postInfo && postInfo.author.name}`}
      <br />
      <br />
    </React.Fragment>
  );
};

const PostsDetails = ({ postInfo, hideHeaderAndAuthor }) => (
  <Container >
    <AuthorAndTitle postInfo={postInfo} hideHeaderAndAuthor={hideHeaderAndAuthor} />
    { postInfo && postInfo.text }
  </Container>
);

PostsDetails.propTypes = PropTypes.shape({
  postInfo: PropTypes.shape({}).isRequired,
  hideHeaderAndAuthor: PropTypes.bool.isRequired,
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
