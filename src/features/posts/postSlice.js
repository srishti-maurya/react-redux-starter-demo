import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: null,
  posts: []
};

export const loadPosts = createAsyncThunk("posts/loadPosts", () => {
  return fetch("https://social-media-server.tanaypratap.repl.co/posts")
    .then((res) => res.json())
    .then((data) => data);
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likeButtonPressed: (state, action) => {
      const postID = action.payload;
      const postIndex = state.posts.findIndex((post) => post.postID === postID);

      state.posts[postIndex].likes += 1;
    }
  },
  extraReducers: {
    [loadPosts.pending]: (state) => {
      state.status = "loading";
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.status = "fulfilled";
    }
  }
});

export const { likeButtonPressed } = postSlice.actions;

export default postSlice.reducer;
