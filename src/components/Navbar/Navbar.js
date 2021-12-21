import './Navbar.css'
import {Route, Routes, Link} from 'react-router-dom'
import ElectronicsPage from '../SubPages/ElectronicsPage/ElectronicsPage'
import FashionPage from '../SubPages/FashionPage/FashionPage'
import BestPage from '../SubPages/BestPage/BestPage'
import FurnituresPage from '../SubPages/FurnituresPage/FurnituresPage'
import GamingPage from '../SubPages/GamingPage/GamingPage'
import GroceriesPage from '../SubPages/GroceriesPage/GroceriesPage'
import HomeAppliancesPage from '../SubPages/HomeAppliancesPage/HomeAppliancesPage'
import Mainpage from '../Homepage/MainPage'
import HomePage from '../Homepage/Homepage'
import React from 'react'


const Navbar=()=>{

    let Nav_items={"Best Sellers":["Redmi Note 7 Pro", "Mac Pro 2","LG TV 5", "Airtel Data Card"],
                "Electronics":["Mobiles","Laptops","Accessories","Smart Devices"],
                "Fashion":["Men's Casual wear","Women's Casual wear","Men's Formal wear", "Children's wear","Accessories"],
                "Gaming":["Gaming Laptops","Build PCs","Gaming Mobiles","Controllers","Games"],
                "Home Appliances":["TVs","Washing Machines","Refrigerators","Ovens","Air Conditioners","Water Purifiers"],
                "Furnitures":["Tables and Desks","Sofas and Chairs","Wardrobes","Beds and Mattresses","Chimneys and Kitchen set"],
                "Groceries":["Vegetables","Masala items","Instant foods","Cosmetics","Hygiene Products"]
            }
    
            const pageNav={"Best Sellers":BestPage,"Electronics":ElectronicsPage,"Fashion":FashionPage,"Gaming":GamingPage,
                "Home Appliances":HomeAppliancesPage,"Furnitures":FurnituresPage,"Groceries":GroceriesPage}

       return(
        <div>
        <div data-TestId="nav" className="navbar">
            <Link to={'/home'}><img className="option" src={"./option-button.png"} alt="option-button"/></Link>
            {
                Object.keys(Nav_items).map((key,index)=>
                <div className="nav-button">
                    <Link to={`/${pageNav[key].name}`}><button>{key}</button></Link>
                   
                <div className="dropdown">
                    {
                    Nav_items[key].map((k,index)=><div className="dropdown">
                    <button>{k}</button></div>)
                    }
                </div>
                </div>
                )
            }
            </div><div style={{"display":"block"}}>
            <Routes>
            {Object.keys(Nav_items).map((key) => {
                const Component = pageNav[key];
                return( <Route path={`/${pageNav[key].name}`} element={<Component/>} />)})}
            <Route path={'/home'}  exact element={<HomePage/>} ></Route>
            </Routes>
        </div></div>   
    )
}

export default Navbar;