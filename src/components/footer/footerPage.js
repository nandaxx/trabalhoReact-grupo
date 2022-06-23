import React from "react";
import './styleFooter.css';


export const Footer = () => {

    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <div class="containerFooter">
                        <div class="row">
                        </div>
                        <div class="col-lg-3 col-md-6 footer-contact">
                        </div>
                        <div class="social-links mt-3">
                            <a href="https://twitter.com/" class="twitter"><i class="bx bxl-twitter"></i><img class="iconerd" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" /></a>
                            <a href="https://facebook.com/" class="facebook"><i class="bx bxl-facebook"></i><img class="iconerd" src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128208.png?token=exp=1655665428~hmac=4a1b7b949bcd87b56234fdd8da049838" /></a>
                            <a href="https://instagram.com/" class="instagram"><i class="bx bxl-instagram"></i><img class="iconerd" src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" /></a>
                            <a href="https://github.com/" class="github"><i class="bx bxl-github"></i><img class="iconerd" src="https://cdn-icons-png.flaticon.com/512/733/733609.png" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

}