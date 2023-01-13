import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="nav">
            <li className="home"><Link to='/'>Home</Link></li>
            <ul>
                <li><Link to='/Catalog'>Products</Link></li>
            </ul>

            <li><Link to='About'>About</Link></li>
        </nav>
    )
}

export default Navigation
