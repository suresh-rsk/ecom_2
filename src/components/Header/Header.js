import './Header.css'

const Header=()=>{
    return(
        <div className="Header">
            <img id="logo" src={"./main_logo.png"} alt="logo"/>
            <div id="search">
                <form>
                    <input type="text"></input>
                    <input type="submit" value="search"></input>
                </form>
            </div>
            <img id="cart" src={"cart.png"} alt="cart-logo"/>
            <div className="profile">
                <h3>Account</h3>
                <img id="profile" src={"profile_icon.png"} alt="profile-pic"/>
                <h3>V</h3>
            </div>
        </div>
    )
}

export default Header;