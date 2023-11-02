import pizza from '../../assets/images/prato1.png'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import PratosModels from '../../models/PratosModels'
import ListaPratos from '../../container/ListaPratos'

const lista: PratosModels[] = [
  {
    id: 1,
    image: pizza,
    title: 'Nome do Prato',
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 2,
    image: pizza,
    title: 'Nome do Prato',
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 3,
    image: pizza,
    title: 'Nome do Prato',
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  },
  {
    id: 4,
    image: pizza,
    title: 'Nome do Prato',
    description:
      'descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao '
  }
]

const Home = () => (
  <>
    <HeaderRestaurante />
    <ListaPratos pratos={lista} />
  </>
)

export default Home
