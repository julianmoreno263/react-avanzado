
/*este es el archivo con el codigo css para el componente category,cada componente
tendra su codigo css independiente y enlazado por medio de styled-components,de esta
forma no hay riesgo de que un estilo de un componente afecte a otro,asi es mas practico
y se entiende mejor,el css es el mismo css normal que se usa,solo que en si todo el
codigo html,js y css estara dentro del mismo componente,no estaran por aparte.*/


import styled from 'styled-components'

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  cursor:pointer;
  
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
