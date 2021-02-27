import React from 'react'
import Footer from '../components/footer'

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
                    <Footer.Link href="#">Linkedin</Footer.Link>
                 </Footer.Column>

                 <Footer.Column>
                      <Footer.Link href="#">Instagram</Footer.Link>
                 </Footer.Column>

                 <Footer.Column>
                     <Footer.Link href="#">Facebook</Footer.Link>
                 </Footer.Column>
                 </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}  