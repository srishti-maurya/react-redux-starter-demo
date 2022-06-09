import Posts from "./features/posts/Posts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">mittar</h1>
      <div className="app-body">
        <Posts />
      </div>
    </div>
  );
}
