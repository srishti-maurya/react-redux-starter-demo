import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeButtonPressed, loadPosts } from "./postSlice";

export default function Posts() {
  const { posts, status, error } = useSelector((store) => store.timeline);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPosts());
    }
  }, [dispatch, status]);

  return status === "loading" ? (
    <p> loading... </p>
  ) : (
    <>
      {posts.map((post) => (
        <article key={post.postID} className="post">
          <div className="caption"> {post.caption} </div>
          <button
            className="likes"
            onClick={() => dispatch(likeButtonPressed(post.postID))}
          >
            {post.likes} likes{" "}
          </button>
        </article>
      ))}
    </>
  );
}
