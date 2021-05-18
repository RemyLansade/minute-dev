import { render } from '@testing-library/react';
import ArticleCard from '../components/ArticleCard';

describe('<ArticleCard />', () => {
  it('correctly rendered', () => {
    const { getByTestId } = render(<ArticleCard />);
    expect(getByTestId('article-card')).toBeInTheDocument();
  });
});
