import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="nav">
            <li className="home"><Link to='/'>Home</Link></li>
            <li><Link to='/Catalog'>Products</Link></li>
            <li><Link to='About'>About</Link></li>
        </div>
    )
}

export default Navigation
