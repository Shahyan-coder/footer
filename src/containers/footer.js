import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/footer/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                   <Footer.Link href="#">Terms of Service</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                     <Footer.Link href="#">Privacy Policy</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>WLU PHI SOCIETY ©</Footer.Title>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="https://www.linkedin.com/company/wlu-phi-society/"><Icon className ="fab fa-linkedin" />Linkedin</Footer.Link>
                 </Footer.Column>

                 <Footer.Column>
                      <Footer.Link href="https://www.instagram.com/wluphi/"><Icon className ="fab fa-instagram" />Instagram</Footer.Link>
                 </Footer.Column>

                 <Footer.Column>
                     <Footer.Link href="https://www.facebook.com/wluPHI/"><Icon className ="fab fa-facebook" />Facebook</Footer.Link>
                 </Footer.Column>
                 </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}  