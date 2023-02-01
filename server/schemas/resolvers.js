const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
// const { post } = require("../models/Reply");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getPost: async (parent, { _id }) => {
      const post = await Post.findOne({ _id: _id });
      console.log(post);
      return post;
    },
    getPosts: async () => {
      return Post.find();
    },
  },
  Mutation: {
    register: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    createPost: async (parent, { postBody, name }) => {
      const post = await Post.create({ postBody, name });
      return post;
    },
    addReply: async (parent, { replyBody, name, _id }) => {
      const updatedPost = await Post.findOneAndUpdate(
        { _id: _id },
        { $addToSet: { replies: { replyBody, name } } },
        { new: true, runValidators: true}
      );
      console.log(updatedPost);
      return updatedPost;
    },
    updatePost: async (parent, { postBody, _id, name }) => {
      const post = await Post.findOneAndUpdate(
        { _id: _id },
        { postBody, name },
        { new: true }
      );
      console.log(post);
      return post;
    },
    updateReply: async (parent, { replyBody, _id, name }) => {
      const updatedReply = await Post.findOneAndUpdate(
        { _id : _id },
        { replyBody, name },
        { new: true }
      );
      console.log(updatedReply);
      return updatedReply;
    },
    removePost: async (parent, { _id }) => {
      const remove = await Post.findOneAndDelete(
        { _id: _id },
      );
      return remove;
    },
    removeReply: async (parent, { replyId }, { post }) => {
      const remove = await Post.findOneAndUpdate(
        { _id: post._id },
        { $pull: { replies: { _id: replyId } } },
        { new: true }
      );
      return remove;
    },
    addFriend: async (parent, { _id }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: _id },
        { $addToSet: { friends: _id } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
  },
};

module.exports = resolvers;
