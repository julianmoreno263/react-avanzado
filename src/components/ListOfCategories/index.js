

/*exportamos nuestro componente ListOfCategories de forma nombrada, este 
componente retornara una lista con las categorias de la aplicacion.

Esta lista tendra adentro un array y lo mapeamos con la funcion map(),la cual tendra como parametro
una funcion que pintara el componente Category*/

/*ahora, en la clase 14 del curso,vamos a comenzar a utilizar hooks en nuestros
componentes,empezando por este componente,vamos a usar primero el hook de 
useState*/



import React,{useState,useEffect} from 'react'
import { Category } from '../Category'
import {List,Item} from "./styles";

//custom Hook para el fetch de categories

function useCategoriesData () {
  /*hooks useState y useEffect para mostrar la lista de categorias*/
  const [categories, setCategories] = useState([])
  //nuevo estado de nuestro customHook para tener un loading
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    fetch('http://localhost:3000/categories')
      .then(data => data.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const {categories,loading}=useCategoriesData()

  
  


  /*nuevos useState y useEffect para la segunda lista que sera fija*/
  const [showFixed, setShowFixed] = useState(false)

  useEffect (function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener("scroll",onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  },[showFixed])



  //codigo para crear las dos listas de categorias
  const renderList=(fixed)=>(
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )



  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
    
  )
}





