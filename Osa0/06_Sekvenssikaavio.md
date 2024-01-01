```mermaid
sequenceDiagram
    participant browser
    participant server

    note right of browser: Käyttäjä kirjoittaa jotain tekstilaatikkoon ja lähettää sen 

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser: contents of the note that was posted in json format
    deactivate server

    note left of server: Muita HTTP pyyntöjä ei suoriteta vaan javascript renderöi uuden viestin selaimessa
   


```