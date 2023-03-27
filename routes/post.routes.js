const express = require("express");
const postRouter = express.Router();
const { PostModel } = require("../model/post.model");

// Create post
postRouter.post("/add", async (req, res) => {
  try {
    const post = await PostModel(req.body);
    await post.save();
    res.status(200).send({ msg: "Post has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Update post
postRouter.patch("/update/:postID", async (req, res) => {
  const postID = req.params.postID;
  const payload = req.body;
  try {
    await PostModel.findByIdAndUpdate({ _id: postID }, payload);
    res.status(200).send({ msg: "Post has been updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Delete post
postRouter.delete("/delete/:postID", async (req, res) => {
  const postID = req.params.postID;
  try {
    await PostModel.findByIdAndDelete({ _id: postID });
    res.status(200).send({ msg: "Post has been deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = {
  postRouter,
};
