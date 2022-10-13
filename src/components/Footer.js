import React from "react";

function Footer() {
    return (
    <div>
       <footer className="footer">
        <div className="container grid grid--footer">
            <div className="logoCol">
                <h1 className="footerLogo">Lucent Pay</h1>
                <p className="footerText">Officia dignissimos incidunt nisi ipsam minima dolore. <br />
                Animi facilis exercitationem quam, perspiciatis illum,  <br />
                ipsum dolorem corrupti nisi necessitatibus impedit ea consequatur hic!Lorem ipsum dolor sit,  <br />
                amet consectetur adipisicing elit. Officia dignissimos incidunt nisi ipsam minima dolore. <br />
                </p>
                <ul className="socialLinks">
                    <li><a href="#" className="footerLink"><ion-icon name="logo-facebook" class="socialIcon"></ion-icon></a></li>
                    <li><a href="#" className="footerLink"><ion-icon name="logo-twitter" class="socialIcon"></ion-icon></a></li>
                    <li><a href="#" className="footerLink"><ion-icon name="logo-instagram" class="socialIcon"></ion-icon></a></li>
                    <li><a href="#" className="footerLink"><ion-icon name="logo-youtube" class="socialIcon"></ion-icon></a></li>
                </ul>
            </div>
            
            <nav className="navCol">
                <p className="footerHeading">Company</p>
                <ul className="footerLinks">
                    <li><a href="#" className="footerLink">About Us</a></li>
                    <li><a href="#" className="footerLink">Features</a></li>
                    <li><a href="#" className="footerLink">Career</a></li>
                    <li><a href="#" className="footerLink">Contact Us</a></li>
                </ul>

            </nav>

            <nav className="navCol">
                <p className="footerHeading">Informations</p>
                <ul className="footerLinks">
                    <li><a href="#" className="footerLink">Blog</a></li>
                    <li><a href="#" className="footerLink">Documentation</a></li>
                    <li><a href="#" className="footerLink">Forum</a></li>
                    <li><a href="#" className="footerLink">FAQ</a></li>
                </ul>

            </nav>
        </div>

        <div className="copyRight">
            <p className="copytext">Lucent Pay Template Kit By DLT AFRICA</p>
            <h3>Privacy Policy</h3>
            <h3>Cookies</h3>
        </div>
        </footer> 
    </div>
    )
}

export default Footer;