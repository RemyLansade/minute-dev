import { render } from '@testing-library/react'
import Carousel from '../components/uiTools/Carousel';

describe('<Carousel />', () => {
  it('render Carousel component', () => {
    const { getByTestId } = render(<Carousel />);
    expect(getByTestId('carousel')).toBeInTheDocument();
  });

  it('render six ArticleCard components', () => {
    const { getAllByTestId } = render(<Carousel />);
    const articleCard = getAllByTestId('article-card');
    expect(articleCard.length).toEqual(6);
  })
});
