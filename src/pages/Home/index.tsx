import Header from '../../components/Header'
import ListaRestaurante from '../../container/ListaRestaurante'
import restFoto1 from '../../assets/images/restaurante1.png'
import restFoto2 from '../../assets/images/restaurante2.png'
import Restaurantes from '../../models/Restaurantes'

const lista: Restaurantes[] = [
  {
    id: 1,
    image: restFoto1,
    infos: ['Destaque do Dia', 'Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 2,
    image: restFoto2,
    infos: ['Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 3,
    image: restFoto2,
    infos: ['Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 4,
    image: restFoto2,
    infos: ['Japonesa'],
    title: 'Nome do restaurante',
    rate: 4.5,
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  }
]

const Home = () => (
  <>
    <Header />
    <ListaRestaurante restaurantes={lista} />
  </>
)

export default Home
