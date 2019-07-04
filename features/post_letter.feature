Feature: Post letters

    Scenario: User sends posts requests 
        When user posts request with letter "X" and size "3"
        Then response body should return correct letter and size

    # Scenario: User posts requests 
    #     When user posts request with letter "Y" and size "5"
    #     Then response body should return correct letter and size

    Scenario: User sends posts requests 
        When user posts request with letter "Z" and size "7"
        Then response body should return correct letter and size

    # Scenario: User posts requests 
    #     When user posts request with letter "XY" and size "3"
    #     Then response body should return correct letter and size

    Scenario: User sends posts requests 
        When user posts request with letter "XZ" and size "3"
        Then response body should return correct letter and size        

    # Scenario: User posts requests 
    #     When user posts request with letter "YZ" and size "5"
    #     Then response body should return correct letter and size      