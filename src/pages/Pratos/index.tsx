import ListaRestaurante from '../../container/ListaRestaurante'
import pizza from '../../assets/images/prato1.png'
import Restaurantes from '../../models/Restaurantes'
import HeaderRestaurante from '../../components/HeaderRestaurante'

const lista: Restaurantes[] = [
  {
    id: 1,
    image: pizza,
    infos: ['Destaque do Dia', 'Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 2,
    image: pizza,
    infos: ['Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 3,
    image: pizza,
    infos: ['Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 4,
    image: pizza,
    infos: ['Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  }
]

const Home = () => (
  <>
    <HeaderRestaurante />
    <ListaRestaurante restaurantes={lista} />
  </>
)

export default Home
