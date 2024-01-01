```mermaid
squenceDiagram;
    participant browser;
    participant server;

    browser->>server: HTTP POST new_note;
    activate server;
    server->>browser: redirect;
    deactivate server;
    browser-server: HTTOP GET /notes;
```