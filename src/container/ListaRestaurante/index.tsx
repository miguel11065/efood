import Restaurante from '../../components/Restaurante'
import { List } from './styles'
import restFoto1 from '../../assets/images/restaurante1.png'
import restFoto2 from '../../assets/images/restaurante2.png'

const ListaRestaurante = () => (
  <div className="container">
    <List>
      <Restaurante
        image={restFoto1}
        infos={['Destaque do Dia', 'Japonesa']}
        title="Nome do restaurante"
        rate={4.5}
        description="descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao "
      />
      <Restaurante
        image={restFoto2}
        infos={['Japonesa']}
        title="Nome do restaurante"
        rate={4.5}
        description="descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao "
      />
      <Restaurante
        image={restFoto2}
        infos={['Japonesa']}
        title="Nome do restaurante"
        rate={4.5}
        description="descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao "
      />
      <Restaurante
        image={restFoto2}
        infos={['Japonesa']}
        title="Nome do restaurante"
        rate={4.5}
        description="descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao descricao "
      />
    </List>
  </div>
)

export default ListaRestaurante
