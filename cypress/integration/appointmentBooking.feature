Feature: Booking appointments through connect portal

    I want to book an appointment through calendar

    Scenario: Go to calendar and book an appointment for user
        Given Login connect with valid credentials
        When Select the pharmacy and select the calendar side nav tab
        And Book an appointment for service
        Then Verify the network response contain user fore name
