/*Componente Category que muestra las categorias de la aplicacion petgram,este 
componente tendra todo el codigo html,js y css juntos,por medio de styled-component,
de esta forma cada componente tiene su propio codigo css y no chocara con css de otros
componentes.seran totalmente independientes,lo que hace componentes mas practicos.*/

import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
