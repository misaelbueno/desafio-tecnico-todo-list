import { render, screen } from '@testing-library/react';
import App from './App';

test("Verifica se existe o texto 'ToDo List' na tela", () => {
  render(<App />);
  const textTodoList = screen.getByText(/todo list/i);
  expect(textTodoList).toBeInTheDocument();
});

test('Verifica se existe um input de new task na tela', () => { 
  render(<App />);
  const inputNewTask = screen.getByLabelText(/new task/i);

  expect(inputNewTask).toBeInTheDocument();
})

test('Verifica se existe um botão na tela', () => {
  render(<App />);
  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
})
