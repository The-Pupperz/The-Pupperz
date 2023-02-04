import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation createPost($postBody: String!, $name: String!) {
    createPost(postBody: $postBody, name: $name) {
      _id
      postBody
      createdAt
      name
    }
  }
`;

export const ADD_REPLY = gql`
  mutation addReply($replyBody: String!, $name: String!, $_id: ID!) {
    addReply(replyBody: $replyBody, name: $name, _id: $_id) {
      _id
      replyBody
      name
    }   
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($postBody: String!, $_id: ID!, $name: String!) {
    updatePost(postBody: $postBody, _id: $_id, name: $name) {
      _id
      postBody
      createdAt
      name
    }
  }
`;

export const UPDATE_REPLY = gql`
  mutation updateReply($replyBody: String!, $_id: ID!, $name: String!) {
    updateReply(replyBody: $replyBody, _id: $_id, name: $name) {
      _id
      replyBody
      name
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($_id: ID!) {
    removePost(_id: $_id) {
      _id
      postBody
      createdAt
      name
    }
  }
`;

export const REMOVE_REPLY = gql`
  mutation removeReply($_id: ID!) {
    removeReply(_id: $_id) {
      _id
      replyBody
      name
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($_id: ID!) {
    addFriend(_id: $_id) {
      _id
      name
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($_id: ID!) {
    removeFriend(_id: $_id) {
      _id
      name
    }
  }
`;