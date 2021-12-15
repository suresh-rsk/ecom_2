import './Navbar.css'

const Navbar=()=>{

    let Nav_items={"Best Sellers":["Redmi Note 7 Pro", "Mac Pro 2","LG TV 5", "Airtel Data Card"],
                "Electronics":["Mobiles","Laptops","Accessories","Smart Devices"],
                "Fashion":["Men's Casual wear","Women's Casual wear","Men's Formal wear", "Children's wear","Accessories"],
                "Gaming":["Gaming Laptops","Build PCs","Gaming Mobiles","Controllers","Games"],
                "Home Appliances":["TVs","Washing Machines","Refrigerators","Ovens","Air Conditioners","Water Purifiers"],
                "Furnitures":["Tables and Desks","Sofas and Chairs","Wardrobes","Beds and Mattresses","Chimneys and Kitchen set"],
                "Groceries":["Vegetables","Masala items","Instant foods","Cosmetics","Hygiene Products"]
            }
    
    return(
        <div data-TestId="nav" className="navbar">
            {
                Object.keys(Nav_items).map((key,index)=>
                <div className="nav-button">
                    <button>{key}</button>
                <div className="dropdown">
                    {
                    Nav_items[key].map(k=><div className="dropdown">
                    <button>{k}</button></div>)
                    }
                </div>
                </div>
                )
            }
        </div>
    )
}

export default Navbar;