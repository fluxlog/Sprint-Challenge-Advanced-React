import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, getByText } from "@testing-library/react";
import Header from './components/Header'
import Card from './components/Card'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders header text", () => {
  const Navtext = render(<Header />);

  Navtext.getByText("Football Players");
});

test("renders card text", () => {
  const cardText = render(<Card />);
  cardText.getByText("Name:");
});

test("renders country text", () => {
  const country = render(<Card />);
  country.findByPlaceholderText("country");
});

test('renders id text', async () => {
  const { getByTestId, getByText } = render(<Card />);
  const nameInput = getByText(/id/i);
});

test('renders searches text', async () => {
  const { getByTestId, getByText } = render(<Card />);
  const nameInput = getByText(/searches/i);
});