import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import {
  Avaliacao,
  AvaliacaoContainer,
  Botao,
  Card,
  CardContainer,
  Descricao,
  Imagem,
  Infos,
  Titulo,
  TituloContainer
} from './styles'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  image: string
  infos: string[]
  title: string
  rate: number
  description: string
}

const Restaurante = ({ image, infos, title, rate, description }: Props) => (
  <Card>
    <Imagem src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardContainer>
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <AvaliacaoContainer>
          <Avaliacao>{rate}</Avaliacao>
          <span>
            <img src={estrela} />
          </span>
        </AvaliacaoContainer>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Link to="/restaurante">
        <Botao>Saiba Mais</Botao>
      </Link>
    </CardContainer>
  </Card>
)

export default Restaurante
