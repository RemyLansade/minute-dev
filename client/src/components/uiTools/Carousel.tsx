import ArticleCard from "../ArticleCard"

const Carousel = () => {
  return(
    <div className="carousel" data-testid="carousel">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}

export default Carousel