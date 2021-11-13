// import loginCredentials from "../../fixtures/loginCredential.json";
import { connectPortal } from "../page_objects/connectPortalPage";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


// describe('Book a service appointment', () => {

//     beforeEach(() => {
//         cy.launch_connect_portal()
//       })

//     it('Book an appointment for a patient', () => {

//         connectPortal.getLoginPage().login_with_credentials(loginCredentials.valid_username, loginCredentials.valid_password)

//         // Pass Pharmacy name as a parameter
//         cy.selectPharmacy('Mobile DP')

//         // Pass side nav name as a parameter
//         cy.selectSideNavTab('Calendar')

//         //
//         cy.intercept('GET', '**/appointments').as('appointment')
//         connectPortal.getCalendarPage().book_appointment()
//         cy.wait('@appointment')
//         cy.get('@appointment').then( appoinmentResponse => {
//             expect(appoinmentResponse.response.body.data[0].patient_forename).to.equal('Gobi 295')
//         })
        
//         cy.contains('.box', 'Appointment time').invoke('text').should('contain', 'Sep 17, 2021 9:00:00 AM')
   
//     })

// })

// Given('Login connect with valid credentials', () => {
//     cy.launch_connect_portal()
//     connectPortal.getLoginPage().login_with_credentials(loginCredentials.valid_username, loginCredentials.valid_password)
//   })

When('Select the pharmacy and select the calendar side nav tab', () => {
    cy.selectPharmacy('Mobile DP')
    cy.get('.close-button').click()
    cy.selectSideNavTab('Calendar')
})

When('Book an appointment for service', () => {
    cy.intercept('GET', '**/appointments/*').as('appointment')
    connectPortal.getCalendarPage().book_appointment()
    cy.wait('@appointment')
})

Then('Verify the network response contain user fore name', () => {
    cy.get('@appointment').then( appoinmentResponse => {
        expect(appoinmentResponse.response.body.data[0].patient_forename).to.equal('Gobi 295')
    })
})
