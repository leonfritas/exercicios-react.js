import { Button } from "../Button";

const Header = (props) => {
  return (
    <header className="header">
      <h1>Posts</h1>
      <Button
            text="Load more posts"
            onClick={props.loadMorePosts}
            disabled={props.noMorePosts}
          />
    </header>
  );
};

export { Header };
