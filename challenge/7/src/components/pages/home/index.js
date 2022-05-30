import Navbar from "../../shared/Navbar"
import Banner from "./banner"
import Layanan from "./layanan"
import Testi from "./testi"
import Why_us from "./why-us"


const Home = () => {
    return(
        <div>
            <Navbar />
            <Banner />
            <Layanan />
            <Why_us />
            <Testi />
        </div>
    )
}

export default Home