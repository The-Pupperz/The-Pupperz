import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    getPosts {
      _id
      postBody
      createdAt
      name
      replies {
        _id
        replyBody
        name
      }
    }
  }
`;

export const QUERY_POST = gql`
  query getPost($_id: ID!) {
    getPost(_id: $_id) {
      _id
      postBody
      createdAt
      name
      replies {
        _id
        replyBody
        name
      }
    }
  }
`;

export const QUERY_USER_POSTS = gql`
  query getUserPosts($_id: ID!) {
    getUserPosts(_id: $_id) {
      _id
      postBody
      createdAt
      name
      replies {
        _id
        replyBody
        name
      }
    }
  }
`;

export const QUERY_REPLIES = gql`
  query getReplies($_id: ID!) {
    getReplies(_id: $_id) {
      _id
      replyBody
      name
    }
  }
`;


