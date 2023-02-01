const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Reply } = require("../models");
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
      const posts = await Post.find({});
      return posts;
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
        { _id: _id },
        { $pull: { replies: { replyBody, name } }},
        { new: true }
      );
      return updatedReply;
    },
    removePost: async (parent, { _id }) => {
      const remove = await Post.findOneAndDelete(
        { _id: _id },
      );
      return remove;
    },
    removeReply: async (parent, { replyId }) => {
      const remove = await Post.findOneAndUpdate(
        { _id: replyId },
        { $pull: { replies: { replyId } } },
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
