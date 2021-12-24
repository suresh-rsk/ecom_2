
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/Homepage/MainPage';
import React, {useReducer} from 'react'

import ElectronicsPage from './components/SubPages/ElectronicsPage/ElectronicsPage'
import FashionPage from './components/SubPages/FashionPage/FashionPage'
import BestPage from './components/SubPages/BestPage/BestPage'
import FurnituresPage from './components/SubPages/FurnituresPage/FurnituresPage'
import GamingPage from './components/SubPages/GamingPage/GamingPage'
import GroceriesPage from './components/SubPages/GroceriesPage/GroceriesPage'
import HomeAppliancesPage from './components/SubPages/HomeAppliancesPage/HomeAppliancesPage'
import Homepage from './components/Homepage/Homepage';

export const pageContext=React.createContext()

const defaultState=Homepage
const pageReducer=(state,action)=>{
  switch(action){
    case "Best Sellers":      return BestPage
    case "Electronics":       return ElectronicsPage
    case "Fashion":           return FashionPage
    case "Gaming":            return GamingPage
    case "Home Appliances":   return HomeAppliancesPage
    case "Furnitures":        return FurnituresPage
    case "Groceries":         return GroceriesPage
    default:                  return Homepage
  }
}


function App() {
  const [currentPage,dispatch]=useReducer(pageReducer ,defaultState)
 
  return (
    <pageContext.Provider value={{page:currentPage,change:dispatch}}>
    <div className="App">
      <Header/>
      <Navbar/>
      <MainPage/>
      
    </div>
    </pageContext.Provider>
  );
}

export default App
