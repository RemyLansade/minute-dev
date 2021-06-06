// import useFetch from "../../hooks/useFetch";

// eslint-disable-next-line
interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Articles = () => {
  // const { data } = useFetch<Article[]>('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="main-content">
      <div className="container">
        <h2>Articles récents</h2>
      </div>
      <div className="container">
        <h2>Recherche d'articles</h2>
      </div>
    </div>
  );
};

export default Articles;
