import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const Home = () => {
    
    return (
        <div className="bg-black">
            <div className="flex justify-between p-5">
                <div className="text-white">
                    <h1>Logo</h1>
                </div>
                <div>
                    <nav className="space-x-6 me-12 mt-2">
                        <Link className="font-bold text-white text-lg hover:text-purple-500 transition-colors">About Us</Link>
                        <Link className="font-bold text-white text-lg hover:text-purple-500 transition-colors">Solution</Link>
                        <Link className="font-bold text-white text-lg hover:text-purple-500 transition-colors">Product</Link>
                        <button className=" bg-[#9317a7] text-white font-bold py-2 px-8 rounded-full shadow-xl shadow-white hover:bg-[#ab12c2] transition-colors">Login</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home