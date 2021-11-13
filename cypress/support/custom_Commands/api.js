import endpoint from "../../fixtures/endpoint.json"


 Cypress.Commands.add('getToken', () => {
    cy.request({
          method: 'POST',
          url: endpoint.getTokens,
          headers: endpoint.headers,
          body: endpoint.userDetails
          }).its('body').as('response')
 })

 Cypress.Commands.add('postOrder', () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6ImM0MzMyNDEwLWVmYmYtMTFlYi1iOTZjLWE3MzE0M2QyM2UzMSIsImV4cCI6MTYyNzQ5MDE0NywiaWF0IjoxNjI3NDg5MjQ3LCJ1c2VyX2lkIjoiNGMwOGUzNjAtOWVjYy0xMWViLTk3Y2ItYzk3MmRmN2E4NTliIn0.5rfRzn_ILDUjOy86v9H_79_pwL8KwIWLOcOcDi48c1M"
    cy.request({
    method: 'POST',
    url: endpoint.post_Order_Endpoint,
    headers: {...endpoint.headers, "token": token},
    body: endpoint.post_RX_Order.body
    }).its('body').as('body')
 })