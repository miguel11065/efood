import {
  Botao,
  Card,
  Descricao,
  Fechar,
  Modal,
  ModalContainer,
  ModalContent,
  PratoImg,
  Titulo
} from './styles'
import close from '../../assets/images/fechar.svg'
import { useState } from 'react'

export type Props = {
  image: string
  title: string
  description: string
  id: number
}

const PratosLista = ({ image, title, description }: Props) => {
  const [modalEstaAberto, setModalEstaAberta] = useState(false)

  return (
    <>
      <Card className="container">
        <PratoImg src={image} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Botao onClick={() => setModalEstaAberta(true)}>
          Adcionar ao carrinho
        </Botao>
      </Card>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <ModalContainer>
            <img src={image} />
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
              <span>Rende de 1 a 2 pessoas</span>
              <button>Adcionar ao carrinho - R$ 100,00</button>
            </div>
          </ModalContainer>
          <Fechar src={close} onClick={() => setModalEstaAberta(false)} />
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberta(false)}
        ></div>
      </Modal>
    </>
  )
}

export default PratosLista
