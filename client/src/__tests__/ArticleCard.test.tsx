import { render } from '@testing-library/react';
import ArticleCard from '../components/articles/ArticleCard';

describe('<ArticleCard />', () => {
  it('correctly rendered', () => {
    const { getByTestId } = render(<ArticleCard />);
    expect(getByTestId('article-card')).toBeInTheDocument();
  });
});
