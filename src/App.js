import { useState, useEffect } from 'react';
import axios from "axios";
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="">
      <header className="">
        <h1>Posts</h1>
        <h3>Pagination Implementation</h3>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination 
          postsPerPage={postsPerPage} 
          totalPosts={posts.length}
          paginate={paginate} />
      </header>
    </div>
  );
}

export default App;