import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const Home = () => {
    
    return (
        <div>
            <div>
                <div>
                    <nav>
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