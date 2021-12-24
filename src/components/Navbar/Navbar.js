import './Navbar.css'
import React, {useContext} from 'react'
import { pageContext } from '../../App'

const Navbar=()=>{
    const newPage=useContext(pageContext)

    let Nav_items={"Best Sellers":["Redmi Note 7 Pro", "Mac Pro 2","LG TV 5", "Airtel Data Card"],
                "Electronics":["Mobiles","Laptops","Accessories","Smart Devices"],
                "Fashion":["Men's Casual wear","Women's Casual wear","Men's Formal wear", "Children's wear","Accessories"],
                "Gaming":["Gaming Laptops","Build PCs","Gaming Mobiles","Controllers","Games"],
                "Home Appliances":["TVs","Washing Machines","Refrigerators","Ovens","Air Conditioners","Water Purifiers"],
                "Furnitures":["Tables and Desks","Sofas and Chairs","Wardrobes","Beds and Mattresses","Chimneys and Kitchen set"],
                "Groceries":["Vegetables","Masala items","Instant foods","Cosmetics","Hygiene Products"]
            }
    
    return(
    <div>
    <div className="navbar">
        <img className="option" src={"./option-button.png"} alt="option-button"/>
        {
            Object.keys(Nav_items).map((keys)=>
            <div className="nav-button" key={keys}>
                <button onClick={()=>newPage.change(`${keys}`)}>{keys}</button>
                <div className="dropdown">
                    {
                        Nav_items[keys].map((k,i)=><div className="dropdown" key={i}>
                        <button>{k}</button></div>)
                    }
                </div>
            </div>
            )
        }
        </div><div style={{"display":"block"}}>
        
    </div></div>   
    )
}

export default Navbar;