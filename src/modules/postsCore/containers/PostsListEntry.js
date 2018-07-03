/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Segment,
} from 'semantic-ui-react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import PropTypes from 'prop-types';

const PostsListEntry = ({ postInfo }) => {
  const fieldsNames = 'id title';
  const fields = fieldsNames.split(' ').filter(field => field !== 'id');

  return (
    <Segment >
      {fields.map(field => (
        <div key="field"><b>{field} : </b>{ postInfo[field] }</div>
      ))}
      <div><b>By : </b> { postInfo.author.name } </div>
      <br />
      <Link to={`/posts/${postInfo.id}`} >
        Show Details
      </Link>
    </Segment>
  );
};

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
