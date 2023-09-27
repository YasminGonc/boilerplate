import styled, { css } from 'styled-components'

export const MainContainer = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 400;
  `}
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
