import './Navbar.css'

const Navbar=()=>{
    return(
        <div data-TestId="nav" className="navbar">
            <div className="nav-button">
                <button>Best Sellers</button>
                <div className="dropdown">
                    <button>Redmi Note 7 Pro</button>
                    <button>Mac Pro</button>
                    <button>LG TV 5</button>
                    <button>Airtel Data Card 2.0</button>
                </div>
            </div>
            <div className="nav-button">
                <button>Electronics</button>
                <div className="dropdown">
                    <button>Mobiles</button>
                    <button>Laptops</button>
                    <button>Accessories</button>
                    <button>Smart Devices</button>
                </div>
            </div>
           
            <div className="nav-button">
                <button>Fashion</button>
                <div className="dropdown">
                    <button>Men's Casual Wear</button>
                    <button>Men's Formal Wear</button>
                    <button>Women's section</button>
                    <button>Children's wear</button>
                    <button>Accessories</button>
                </div>
            </div>
            <div className="nav-button">
                <button>Gaming</button>
                <div className="dropdown">
                    <button>Gaming Mobiles</button>
                    <button>Gaming Laptops</button>
                    <button>Gaming Gears</button>
                    <button>Smart Devices</button>
                </div>
            </div>
            <div className="nav-button">
                <button>Home Appliances</button>
                <div className="dropdown">
                    <button>Televisions</button>
                    <button>Refrigerators</button>
                    <button>Washing Machines</button>
                    <button>Air Conditioners</button>
                    <button>Water Purifiers</button>
                    <button>Ovens</button>
                </div>
            </div>
            <div className="nav-button">
                <button>Furnitures</button>
                <div className="dropdown">
                    <button>Beds and Matresses</button>
                    <button>Tables and Desks</button>
                    <button>Sofas and chairs</button>
                </div>
            </div>
            <div className="nav-button">
                <button>Grocery</button>
                <div className="dropdown">
                    <button>Vegetables</button>
                    <button>Cooking oils</button>
                    <button>Cosmetics</button>
                    <button>Bathroom materials</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;