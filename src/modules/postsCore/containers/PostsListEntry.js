/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Header,
} from 'semantic-ui-react';
import styled from 'styled-components';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import PropTypes from 'prop-types';

const JustifiedRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PostsListEntry = ({ postInfo }) => (
  <Segment >
    <Header>
      <h3>{ postInfo.title }</h3>
    </Header>
    <JustifiedRow>
      <div>
        By : { postInfo.author.name }
      </div>
      <br />
      <Link to={`/posts/${postInfo.id}`} >
        Show Details
      </Link>
    </JustifiedRow>
  </Segment>
);


PostsListEntry.propTypes = {
  postInfo: PropTypes.shape({}).isRequired,
};

export default createFragmentContainer(PostsListEntry, graphql`
  fragment PostsListEntry_postInfo on Post {
    id title
    author {
      name
    }
  }
`);
