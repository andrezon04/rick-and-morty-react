import LogoGitHub from "../../assets/icons/logoGitHub.jsx";
import "./style.css"

export const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <a href="https://github.com/andrezon04" target={"_blank"}><span>andrezon04</span>
                    <LogoGitHub/>
                </a>
            </div>
        </header>)
}