import './sidebar.css'
import { Link } from "react-router-dom";

export default function SideBar() {
    
    const dica = ""
    const dieta = "Deita"
    const emagrecimento = "Emagrecimento"
  
  
  return (
        <div className="sidebar">
          <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://images.pexels.com/photos/752035/pexels-photo-752035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        <p>
          Um Avestruz mais lindo, cheio de penas, com um Sexy Appel de um pavão e que adora te seduzir.
        </p>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link to={`/categoria/${dica}`}>Dicas</Link></li>
                <li className="sidebarListItem"><Link to={`/categoria/${dieta}`}>Dieta</Link></li>
                <li className="sidebarListItem"><Link to={`/categoria/${emagrecimento}`}>Emagrecimento</Link></li>
                <li className="sidebarListItem"><Link to="/favoritos">Favoritos</Link></li>
            </ul>
            </ul>
      </div>
       <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span>
           <div className="sidebarSocial">
           <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            <i className="sidebarIcon fab fa-pinterest-p"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
           </div>
            
         
        
        </div>         
        
    
    </div>
    )
}
