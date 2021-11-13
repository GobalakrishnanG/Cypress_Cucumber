import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


When('Close the overdue pop up button', () => {
    cy.get('.close-button').click()
})

// When('I want to collect the side nav element', () => {
//     cy.get('side-nav').find('span').then( (text) => {
//         cy.get(text).should('have.length', 15)
//         cy.get(text).eq(1).should('have.text', 'OVERDUE')
//         expect(text.get(3).innerText).to.eq('Patients') 

//     })
//     // get all element text by using each commands
//     cy.get('side-nav').find('span').each(($el) => {
//         cy.log($el.text())
//     })  
// })

When('want to select the first order in the new tab list', () => {
    cy.contains('Orders').click()
    cy.get('.content > md-content').find('span').contains('New').click()
    // cy.get('.patient-name').first().click()

    cy.get('.content > md-content').find('span').contains('Pending').click()
    cy.get('.sort-by').find('span').contains('Last Updated - Oldest').click()
    cy.get('.md-text').contains('Last Updated - Newest').click()
    cy.contains('Archived Orders').scrollIntoView({ duration: 2000 }).click()
    cy.title().should('eq', '(3) Healthera Connect')
    
    // cy.scrollTo('0%', '75%', {ensureScrollable: false})

})