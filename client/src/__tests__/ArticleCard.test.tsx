import { renderWithRouterAndTheme } from '../helpers/testHelpers'
import ArticleCard from '../components/articles/ArticleCard';

describe('<ArticleCard />', () => {
  it('correctly rendered', () => {
    const { getByTestId } = renderWithRouterAndTheme(<ArticleCard />);
    expect(getByTestId('article-card')).toBeInTheDocument();
  });
});
