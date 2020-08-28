import React from 'react'
// import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
// import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { Home } from "./pages/Home"

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <Home/>
  </div>
)
