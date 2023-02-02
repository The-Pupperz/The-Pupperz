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
    createPost: async (parent, { postBody, name }, context) => {
      if(context.user) {
        const post = await Post.create({ postBody, name });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          {$push: { posts: post._id } },
          { new: true }
          );
        return post;
      } throw new AuthenticationError("You need to be logged in!");
      
    },
    addReply: async (parent, { replyBody, name, _id }, context) => {
      if(context.user) {
      const updatedPost = await Post.findOneAndUpdate(
        { _id: _id },
        { $addToSet: { replies: { replyBody, name } } },
        { new: true, runValidators: true}
      );
      return updatedPost;
      } throw new AuthenticationError("You need to be logged in!");
    },
    updatePost: async (parent, { postBody, _id, name }, context) => {
      if(context.user) {
      const post = await Post.findOneAndUpdate(
        { _id: _id },
        { postBody, name },
        { new: true }
      );
      console.log(post);
      return post;
      } throw new AuthenticationError("You need to be logged in!");
    },
    updateReply: async (parent, { replyBody, _id, name }, context) => {
      if(context.user) {
      const updatedReply = await Post.findOneAndUpdate(
        { _id: context.user._id },
        { $set: { replies: { replyBody, name } }},
        { new: true }
      );
      return updatedReply;
      } throw new AuthenticationError("You need to be logged in!");
    },
    removePost: async (parent, { _id }, context) => {
      if(context.user) {
      const remove = await Post.findOneAndDelete(
        { _id: _id },
      );
      return remove;
      } throw new AuthenticationError("You need to be logged in!");
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
