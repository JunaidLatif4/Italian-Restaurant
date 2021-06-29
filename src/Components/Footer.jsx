import React from 'react'
import { Link } from 'react-router-dom'

import './CSS/Footer.scss'


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <>
        <div className="footer_main">
            <div className="footer_inner">
                <h1 className="footer_heading">
                    PREEZO
                </h1>
                <div className="footer_bottom">
                    <div className="box_1">
                        <h3 className="bottom_heading">PASTA PIZZA VINE</h3>
                        <div className="Icons"><FacebookIcon style={{fontSize:"40px"}}/>
                                                <InstagramIcon style={{fontSize:"40px"}}/>
                                                <TwitterIcon style={{fontSize:"40px"}}/>
                     </div>
                    </div>
                    <div className="box_2">
                        <h3 className="box_2_heading">
                            About Prezzo
                        </h3>
                        <Link className="box_2_link_1">
                            Carrers
                        </Link>

                    </div>
                    <div className="box_3">
                        <h3 className="box_3_heading">
                            Menu
                        </h3>
                        <Link className="box_3_link_1">
                            Al fresco menu
                        </Link> <br />
                        <Link className="box_3_link_2">
                            Dine@HomeMenu
                        </Link>

                    </div>
                    <div className="box_4">
                        <h3 className="box_4_heading">
                            Privacy
                        </h3>
                        <Link className="box_4_link_1">
                            Privacy Policy
                        </Link> <br />
                        <Link className="box_4_link_2">
                            Terms of use
                        </Link>
                    </div>
                    <div className="box_5">
                        <h3 className="box_5_heading">
                            Booking
                        </h3>
                        <Link className="box_5_link_1">
                            Outdoor dining
                        </Link> <br />
                        <Link className="box_5_link_2">
                            Dine@Home
                        </Link>
                    </div>
                    <div className="box_6">
                        <h3 className="box_6_heading">
                            FAQs
                        </h3>
                        <Link className="box_6_link_1">
                            Contact Us & FAQs
                        </Link> <br />
                        <Link className="box_6_link_2">
                            Dine@Home FAQs
                        </Link> <br />
                        <Link className="box_6_link_3">
                            Vouchers FAQ's
                        </Link> <br />
                        <Link className="box_6_link_4">
                            Moderen Slavery
                        </Link> <br />
                        <Link className="box_6_link_5">
                            Moderen Slavery
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
          
        </>
    )
}

export default Footer
