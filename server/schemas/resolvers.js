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
    getPost: async (parent, { postId }) => {
      const post = await Post.findOne({ postId: postId });
      console.log(post);
      return post;
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
    addReply: async (parent, { replyBody, name, postId }) => {
      const reply = await Post.findOneAndUpdate(
        { postId: postId },
        { $push: { replies: { replyBody, name } } },
        { new: true, runValidators: true}
      );
      console.log(reply.replies);
      return reply.replies;
    },
    updatePost: async (parent, { postBody, postId, name }) => {
      const post = await Post.findOneAndUpdate(
        { postId: postId },
        { postBody, name },
        { new: true }
      );
      console.log(post);
      return post;
    },
    updateReply: async (parent, { replyBody, replyId, name }) => {
      const reply = await Reply.findOneAndUpdate(
        { replyId : replyId },
        { replyBody, name },
        { new: true }
      );
      return reply;
    },
    removePost: async (parent, { postId }) => {
      const remove = await Post.findOneAndDelete(
        { postId: postId },
      );
      return remove;
    },
    removeReply: async (parent, { replyId }) => {
      const remove = await Post.findOneAndDelete(
        { replyId: replyId }
      );
      return remove;
    },
    // addFriend: async (parent, { friendId }) => {
    //   const friend = await User.findOneAndUpdate(
    //     { userId: friendId },
    //     { $push: { friends: { friendId } } },
    //     { new: true, runValidators: true }
    //   );
    //   return friend;
  },
};

module.exports = resolvers;
