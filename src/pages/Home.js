import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import Countries from "../components/Countries";

const Home = () => {
    return (
        <div className="Home">
            <Navigation></Navigation>
            <Logo/>
            <br/>
            <h1>Acceuil</h1>
            <Countries></Countries>
        </div>
    ) ;
}

export default Home;