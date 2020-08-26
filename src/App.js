/*Este archivo app.js que esta dentro de src en la raiz, es el punto de entrada de
los componentes que creemos,aqui se llaman,y  este archivo esta enlazado al 
archivo que tiene el react-dom de la aplicacion,que es el archivo index.js
que esta en la raiz de src,este archivo que tiene el react-dom le va a permitir 
al app.js ir creando el dom de los componentes,por ultimo el archivo index.html
de la carpeta dist  es el que va a permitir ver los componentes en pantalla,porque lo que
el navegador muestra es codigo html,pero como estos componentes se empaquetan con webpack
porque al tener codigo html.js y css juntos y ademas imagenes y otros,
se debe de empaquetar ese codigo para que se genere un codigo compilado que el navegador
entienda,y ese codigo webpack lo crea en el archivo app.bundle.js que es el archivo que se
pasa al index.html por medio de un script y de esta forma el navegador lo lee,este archivo
es en si todo el codigo de la aplicación ya compilado para ser mostrado en pantalla,osea
aqui van todos los componentes compilados para poder ser mostrados en pantalla.

Esta es la forma en que se crea el codigo de componentes en react.

Nota: en react no podemos devolver dos componentes por separado,por esto debemos
envolver todo dentro de un <div></div> y asi ya podemos enviar los componentes.*/

import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import {GlobalStyle} from "./styles/GlobalStyles"
import {ListOfPhotoCard} from "./components/ListOfPhotoCards"
import {Logo} from "./components/Logo"

export const App = () => (

  <div>

    <GlobalStyle/>
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCard/>
  </div>
  
)
