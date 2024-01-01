```mermaid
sequenceDiagram
    participant browser
    participant server

    note right of browser: Käyttäjä kirjoittaa jotain 

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    
    
    note left of server: Muita HTTP pyyntöjä ei suoriteta vaan javascript lisää uuden viestin
   


```