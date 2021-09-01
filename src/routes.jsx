import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/topbar/TopBar"
import Header from "./components/header/Header"
import SideBar from "./components/sidebar/SideBar"
import Footer from "./components/footer/footer"

//rotas

import Home from "./pages/home/Home"
import Categorias from "./pages/categorias/index"
import Favoritos from "./pages/favoritos/Favoritos"
import Posts from "./pages/post"
import Erro from "./pages/404/404"

const Routes = () =>{
    return(
        <BrowserRouter>
            <TopBar/>
            <Header/>
            <SideBar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/categoria" component={Categorias} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route exact path="/post" component={Posts} />
                <Route path="*" component={Erro} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;