import patient from "../../fixtures/patient.json";

export class CalendarPage {

    book_appointment() {
        cy.contains('Create Appointment').click()
        cy.get('[ng-model="createCtrl.patientTerm"]').type(patient.patient_name)
        cy.get('form.ng-valid > .md-icon-float > .md-default-theme').click()
        cy.contains(patient.patient_name).click()
        cy.get('[ng-model="createCtrl.serviceTerm"]').type(patient.service_name)
        cy.contains('Slot Booking Service').click()
        cy.get('[ng-model="createCtrl.datetime"]').type(patient.appointment_time)
        cy.contains('Create booking').click()
    }
    
}

export const calendarPage = new CalendarPage();