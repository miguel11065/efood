import { Botao, Card, Descricao, PratoImg, Titulo } from './styles'

export type Props = {
  image: string
  title: string
  description: string
  id: number
}

const PratosLista = ({ image, title, description }: Props) => {
  return (
    <>
      <Card className="container">
        <PratoImg src={image} />
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Botao>Adcionar ao carrinho</Botao>
      </Card>
    </>
  )
}

export default PratosLista
