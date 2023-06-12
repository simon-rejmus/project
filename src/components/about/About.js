import React, {useContext} from "react";
import sevan from "../../images/sevan.png"
import PageContext from "../../PageContext";

const About = () => {
    const { handlePageChange } = useContext(PageContext);

    const handleClick = () => {
        handlePageChange('contact');
    };

    return (
        <div className="about">
            <div className="about-1">
                <img src={sevan} alt="Sevan Reeve" />
                <div className="about-2">
                    <h1>About me</h1>
                    <p>I'm Sevan Reeve, a computer science graduate and frontend developer with a passion for art.</p>
                    <p>As a self-taught illustrator, I dedicate my free time to creating unique illustrations inspired by the simplicity and geometric style of Duolingo.</p>
                    <p><b>Music album covers and movie posters are my primary focus.</b></p>
                </div>
            </div>
            <div className="about-2-copy">
                <h1>About me</h1>
                <p>I'm Sevan Reeve, a computer science graduate and frontend developer with a passion for art.</p>
                <p>As a self-taught illustrator, I dedicate my free time to creating unique illustrations inspired by the simplicity and geometric style of Duolingo.</p>
                <p><b>Music album covers and movie posters are my primary focus.</b></p>
            </div>
            <div className="about-3">
                <h2>Thank you for visiting my website.</h2>
                <p>If you're interested in <b>commissions</b>, <b>collaborations</b>, or have any inquiries, feel free to reach out.</p>
                <p className="bigger-p"><b>Let's create something amazing together!</b></p>
                <button className="lets-go-btn" onClick={handleClick}>Let's go</button>
            </div>
        </div>
    )
}

export default About;