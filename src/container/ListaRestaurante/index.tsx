import Restaurante from '../../components/Restaurante'
import { List } from './styles'
import Restaurantes from '../../models/Restaurantes'

type Props = {
  restaurantes: Restaurantes[]
}

const ListaRestaurante = ({ restaurantes }: Props) => (
  <div className="container">
    <List>
      {restaurantes.map((restaurante) => (
        <Restaurante
          key={restaurante.id}
          id={restaurante.id}
          image={restaurante.image}
          infos={restaurante.infos}
          title={restaurante.title}
          rate={restaurante.rate}
          description={restaurante.description}
        />
      ))}
    </List>
  </div>
)

export default ListaRestaurante
