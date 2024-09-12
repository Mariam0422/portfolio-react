
import './style.css';

const MainHeader = () => {
    return (  
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Mariam</em></strong><br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="/pdf/CV.pdf" download="CV.pdf" className="btn">Download CV</a>
        </div>
    </header> 
    );
}
 
export default MainHeader;