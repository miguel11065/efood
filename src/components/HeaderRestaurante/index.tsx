import bannerImg from '../../assets/images/banner.png'
import restBanner from '../../assets/images/restaurante1.png'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { HeaderBar, Imagem, NomeRestaurante, Tipos } from './styles'

const HeaderRestaurante = () => (
  <>
    <div style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderBar className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="EFOOD" />0 produto(s) no carrinho
      </HeaderBar>
    </div>

    <Imagem style={{ backgroundImage: `url(${restBanner})` }}>
      <div className="container">
        <Tipos>Tipo</Tipos>
        <NomeRestaurante>Nome do restaurante</NomeRestaurante>
      </div>
    </Imagem>
  </>
)

export default HeaderRestaurante
