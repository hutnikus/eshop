import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Catalog'>Products</Link></li>
                <li><Link to='About'>About</Link></li>
            </nav>
        </div>
    )
}

export default Navigation
