Feature: Login 'Connect' portal 

    I want to open a Connect portal

    Scenario: Opening a Connect Portal
        Given Login connect with valid credentials
        Then logo text should have 'Healthera Connect'