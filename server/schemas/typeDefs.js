const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    userBio: String
    posts: [Post]
    friends: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    postId: ID!
    postBody: String!
    createdAt: String
    name: String!
    replies: [Reply]
  }

  type Reply {
    replyId: ID!
    replyBody: String!
    name: String!
  }

  type Query {
    me: User
    getPosts: [Post]
    getPost(postId: ID!): Post

  }

  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createPost(postBody: String!, name: String!): Post 
    addReply(replyBody: String!, name: String!, postId: ID!): Post
    updatePost(postBody: String!, postId: ID!, name: String!): Post
    updateReply(postId: ID!, replyBody: String!, replyId: ID!, name: String!): Reply
    removePost(postId: ID!): Post
    removeReply(replyId: ID!): Post
    addFriend(friendId: ID!): User
    removeFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;

