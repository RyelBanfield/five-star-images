import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';

it('renders main', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
});

it('renders heading', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

it('renders input', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

it('renders search button', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const button = screen.getByRole('button', { name: 'Search' });
  expect(button).toBeInTheDocument();
});

it('renders clear search button', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const button = screen.getByRole('button', { name: 'Clear Search' });
  expect(button).toBeInTheDocument();
});

it('renders correctly', () => {
  const home = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
    .toJSON();
  expect(home).toMatchSnapshot();
});
