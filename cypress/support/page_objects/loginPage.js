
export class LoginPage {
    
    login_with_credentials(username, password) {
        cy.get("#email").type(username)
        cy.get("#password").type(password)
        cy.contains("Login").click()
    }

}
