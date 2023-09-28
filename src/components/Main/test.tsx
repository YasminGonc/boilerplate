import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/helpers'

import { Main } from '.'

// descrever o que vamos começar a testar, primeiro parâmetro é o componente (por padrão usa o jeito de chamar um componente)
describe('<Main />', () => {
  // it é para escrever o teste de fato
  it('shound render heading', () => {
    renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // resumo do teste: vai renderizar o componente, espero que nesse componente tenha um heading escrito react avançado
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
