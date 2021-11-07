import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe("Tela de inserção de new task", () => {
  it("Verifica se existe o texto 'ToDo List' na tela", () => {
    render(<App />);
    const textTodoList = screen.getByText(/todo list/i);
    expect(textTodoList).toBeInTheDocument();
  });

  it('Verifica se existe um input de new task na tela', () => { 
    render(<App />);
    const inputNewTask = screen.getByLabelText(/new task/i);

    expect(inputNewTask).toBeInTheDocument();
  })

  it('Verifica se existe um botão na tela', () => {
    render(<App />);
    // const button = screen.getByRole('button');
    const button = screen.getByTestId('id-send');

    expect(button).toBeInTheDocument();
  })

  it("Verifica que, ao digitar a task e clicar no botão 'Enviar', o nome da task é renderizada", () => {
    // acessar os elementos
    render(<App />);
    const inputTask = screen.getByLabelText('New Task');
    const button = screen.getByTestId('id-send');
    const task = screen.getByTestId('id-task');

    // interagir com os elementos(se for necessário)
    userEvent.type(inputTask, "teste10");
    userEvent.click(button);

    // fazer os teste
    expect(inputTask).toHaveValue('');
    expect(task).toHaveTextContent('teste10');

  });

});
