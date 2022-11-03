import { Component } from "react";
import "./style.css";
import { loadPosts } from "../../services/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const PostAndPhotos = await loadPosts();
    this.setState({
      posts: PostAndPhotos.slice(page, postsPerPage),
      allPosts: PostAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? posts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <main>
        <header>

          

          {!searchValue && (
            <Button
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}

          {/* <h1>Posts</h1> */}

          <div className="input-container">
            {!!searchValue && <label className="search-text" htmlFor="">Search Value: {searchValue}</label>}

            <Input searchValue={searchValue}
            handleChange={this.handleChange}
            />
          </div>
        </header>
        <section>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />

        )}

{filteredPosts.length === 0 && (
          <h2>Não existem posts.</h2>

        )}

          
        </section>
      </main>
    );
  }
}

export { Home };
