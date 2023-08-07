
import Header from "../components/Header";
import Homeabout from "../components/Homeabout";
import Homeimage from "../components/Homeimage";
import Newreleases from "../components/Newreleases";

function Home()
{
    return(
        <div >
            <Header></Header>
            <Homeimage></Homeimage>
            <Newreleases></Newreleases>
            <Homeabout></Homeabout>
        </div>
    );
}

export default Home;