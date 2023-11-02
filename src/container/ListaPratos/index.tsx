import { List } from './styles'
import PratosModels from '../../models/PratosModels'
import PratosLista from '../../components/Pratos'

type Props = {
  pratos: PratosModels[]
}

const ListaPratos = ({ pratos }: Props) => (
  <div className="container">
    <List>
      {pratos.map((prato) => (
        <PratosLista
          key={prato.id}
          id={prato.id}
          image={prato.image}
          title={prato.title}
          description={prato.description}
        />
      ))}
    </List>
  </div>
)

export default ListaPratos
