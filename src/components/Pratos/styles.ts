import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.indianRed};
  padding: 12px;
`

export const PratoImg = styled.img`
  width: 304px;
  margin-bottom: 8px;
`

export const Titulo = styled.h3`
  color: ${cores.antiqueWhite};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.antiqueWhite};
  font-size: 16px;
  margin-bottom: 8px;
`

export const Botao = styled.button`
  background-color: ${cores.antiqueWhite};
  color: ${cores.indianRed};
  border: none;
  width: 304px;
  font-weight: bold;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
`
