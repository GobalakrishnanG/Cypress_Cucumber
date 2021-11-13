import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import { connectPortal } from "../page_objects/connectPortalPage";
import loginCredentials from "../../fixtures/loginCredential.json"


// describe('Login with valid credentials', () => {

//   beforeEach(() => {
//     cy.launch_connect_portal()
//   });
  
//   it('Login connect with valid credentials', () => {
//     connectPortal.getLoginPage().login_with_credentials(loginCredentials.valid_username, loginCredentials.valid_password)
//     cy.get('.logo-text').should('have.text', 'Healthera Connect')  
//   })

//   it('Login connect with invalid credentials', () => {
//     connectPortal.getLoginPage().login_with_credentials(loginCredentials.invalid_username, loginCredentials.invalid_password)
//     cy.get('.card-content > .center-align').should((errorMessage) => {
//       expect(errorMessage.text()).to.include("You have entered")
//     })
//   })
  

// })


Given('Login connect with valid credentials', () => {
  cy.launch_connect_portal()
  connectPortal.getLoginPage().login_with_credentials(loginCredentials.valid_username, loginCredentials.valid_password)
})

Then('logo text should have {string}', (title) => {
  cy.get('.logo-text').should('have.text', title)
})