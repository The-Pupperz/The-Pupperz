const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Reply } = require("../models");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    getPost: async (parent, { _id }) => {
      const post = await Post.findOne({ _id: _id });
      console.log(post);
      return post;
    },
    getPosts: async () => {
      const posts = await Post.find({}).populate('replies').sort({ createdAt: -1 });
      return posts;
    },
    getUserPosts: async (parent, { _id }) => {
      
      const user =  await User.findById(_id).populate('posts');
      return user.posts;
      
      
    },
    getReplies: async (parent, { _id }) => {
      const postReplies = await Post.findById(_id).populate('replies');
      return postReplies.replies;
    }
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
          {$push: { posts: post } },
          { new: true }
          );
        return post;
      } throw new AuthenticationError("You need to be logged in!");
      
    },
    addReply: async (parent, { replyBody, name, _id }, context) => {
      if(context.user) {
      const reply = await Reply.create({ replyBody, name });
      await Post.findByIdAndUpdate(
        { _id: _id },
        { $push: { replies: reply } },
        { new: true }
      );
      return reply;
      } throw new AuthenticationError("You need to be logged in!");
    },
    updatePost: async (parent, { postBody, postId }, context) => {
      if(context.user) {
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { postBody },
        { new: true }
      );
      console.log(post);
      return post;
      } throw new AuthenticationError("You need to be logged in!");
    },
    updateReply: async (parent, { replyBody, _id, name }, context) => {
      if(context.user) {
      const reply = await Reply.findOneAndUpdate(
        { _id: _id },
        { replyBody, name },
        { new: true }
      );
      return reply;
      } throw new AuthenticationError("You need to be logged in!");
    },
    removePost: async (parent, { postId }, context) => {
      if(context.user) {
      const remove = await Post.findOneAndDelete(
        { _id: postId },
      );
      return remove;
      } throw new AuthenticationError("You need to be logged in!");
    },
    removeReply: async (parent, { _id }, context) => {
      if(context.user) {
      const remove = await Reply.findByIdAndDelete(
        { _id: _id },
      );
      return remove;
      } throw new AuthenticationError("You need to be logged in!");
    },
    addFriend: async (parent, { _id }, context) => {
      if(context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { friends: _id } },
        { new: true, runValidators: true }
      );
      return updatedUser;
      } throw new AuthenticationError("You need to be logged in!");
    },
    removeFriend: async (parent, { _id }, context) => {
      if(context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { friends: _id } },
        { new: true, runValidators: true }
      );
      return updatedUser;
      } throw new AuthenticationError("You need to be logged in!");
    }
  },
};

module.exports = resolvers;
