import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const Home = () => {
    
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <nav className="space-x-5 me-5 mt-2">
                        <Link>About Us</Link>
                        <Link>Solution</Link>
                        <Link>Product</Link>
                        <button>Login</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home