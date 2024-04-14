import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="pull-right">
                <img width={230} height={90} src="/mern.png" alt="mern" />
            </div>
            <div className="container">
                <Link to="/">
                    <h1>Workout List</h1>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;