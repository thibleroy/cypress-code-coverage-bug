import './commands';
import '@cypress/code-coverage/support';
if (Cypress.env('TDD')) {
    import('cypress-watch-and-reload/support');
}
