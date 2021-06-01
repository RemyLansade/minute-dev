import { render } from '@testing-library/react'
import ArticleCard from '../components/articles/ArticleCard';
import Carousel from '../components/uiTools/Carousel'

describe('<ArticlesCarousel />', () => {
  it('render Carousel component', () => {
    const { getByTestId } = render(<Carousel elements={<ArticleCard />} option={{slides: 2}}/>);
    expect(getByTestId('carousel')).toBeInTheDocument();
  });

  it('render six ArticleCard components', () => {
    const { getAllByTestId } = render(<Carousel elements={<ArticleCard />} option={{slides: 2}} />);
    const articleCard = getAllByTestId('article-card');
    expect(articleCard.length).toEqual(4);
  })
});
