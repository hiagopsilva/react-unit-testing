import { render, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from './App'

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />)


    expect(getByText('Hiago')).toBeInTheDocument()
    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Larissa')).toBeInTheDocument()
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText('Novo item');
    const addButton = getByText('Adicionar');

    await userEvent.type(inputElement, 'Novo');
    await userEvent.click(addButton);

    await waitFor(() => {
      expect(getByText('Novo')).toBeInTheDocument()
    })
  });

  it('should be able to add remove item from list', async () => {
    const { getByText, getAllByText, queryByText } = render(<App />);

    const removeButtons = getAllByText('Remover');

    await userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return queryByText('Hiago')
    })

    // OUTRA FORMA DE OBTER O MESMO RESULTADO USANDO O (.NOT)
    // await waitFor(() => {
    //   expect(getByText('Hiago')).not.toBeInTheDocument()
    // })
  });
});
