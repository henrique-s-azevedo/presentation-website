import { Link } from "react-router-dom";
import "./ScrollButton.css";

export default function ScrollButton( {
    to,
    children
}){
    return(
        <Link to={to} className="scroll-button">
            {children}
        </Link>
    );
}