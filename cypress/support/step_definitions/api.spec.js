

// describe('Patient data', () => {
//     beforeEach('Get Tokens', () => {
//         cy.request(
//             { method: 'POST',
//             url: 'https://uat-api.healthera.co.uk/tokens',
//             headers: {'Content-type': 'application/json', 'client-id': '9xsEQDt9RjgYeWB'},
//             body: {
//             "username": "gobi.govindan+295@healthera.co.uk",
//             "user_password": "Gobitest@78"
//                 }
//             }).its('body').then( body => {
//                 cy.wrap(body.data[0].user.surname).as('surname')
//                 expect(body.data[0].user.forename).to.equal('Gobi 295')
            
//         })
//     });
// });