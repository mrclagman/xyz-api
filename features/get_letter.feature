Feature: Get letters

    Scenario: User sends get requests 
        When user posts get request with letter "X" and size "3"
        Then response body should return correct letter and size