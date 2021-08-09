import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import Topics from '../components/Topics';

const store = createStore(rootReducer);

it('renders the main div', () => {
  render(
    <Provider store={store}>
      <Topics />
    </Provider>,
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});

it('renders heading', () => {
  render(
    <Provider store={store}>
      <Topics />
    </Provider>,
  );
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});
it('renders correctly', () => {
  const topics = renderer
    .create(
      <Provider store={store}>
        <Topics />
      </Provider>,
    )
    .toJSON();
  expect(topics).toMatchSnapshot();
});
