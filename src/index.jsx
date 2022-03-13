import reactDom from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App() {
    return (
    <div>
        <Navbar />
        <Corpo />
        <FundoMobile />
    </div>
    );
}

reactDom.render(<App />, document.querySelector(".root"));