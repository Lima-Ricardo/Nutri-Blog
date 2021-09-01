import "./header.css"


export default function Header() {
    
    return (
        
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">AVESTRUZ NUTRÊ</span>
                <span className="headerTitleLg">BLOG</span>
            </div>
            <img
                className="headerImg"
                src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt=""
            />
        </div>
    )
}
