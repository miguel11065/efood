class Restaurantes {
  id: number
  image: string
  infos: string[]
  title: string
  rate: number
  description: string

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    rate: number,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.rate = rate
    this.description = description
  }
}

export default Restaurantes
