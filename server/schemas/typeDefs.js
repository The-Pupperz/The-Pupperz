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
    _id: ID!
    postBody: String!
    createdAt: String
    name: String!
    replies: [Reply]
    
  }
  type Reply {
    _id: ID!
    replyBody: String!
    name: String!
  }
  type Query {
    me: User
    getPosts: [Post]
    getPost(_id: ID!): Post
    getUserPosts(_id: ID!): [Post]
    getReplies(_id: ID!): [Reply]
  }
  type Mutation {
    register(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createPost(postBody: String!, name: String!): Post 
    addReply(replyBody: String!, name: String!, _id: ID!): Reply
    updatePost(postBody: String!, _id: ID!, name: String!): Post
    updateReply(replyBody: String!, _id: ID!, name: String!): Reply
    removePost(_id: ID!): Post
    removeReply(_id: ID!): Reply
    addFriend(_id: ID!): User
    removeFriend(_id: ID!): User
  }
`;

module.exports = typeDefs;

