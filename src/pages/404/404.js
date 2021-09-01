import { Link } from "react-router-dom";
import "./404.css"

export default function NotFound() {
    return(
        <div className="not-found">
            <h1>Página não encontrada</h1>
            <br/>
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="Not Found"/>
            <Link to="/">Voltar para home</Link>
        </div>
        

    );
}