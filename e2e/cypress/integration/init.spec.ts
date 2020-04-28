describe('cypress is working with typescript', () => {
    beforeEach(() => {
        cy.server();
        cy.visit('/home');
    })
    it('should be eq', () => {
        const value: number = 2;
        cy.title().should('contain', 'Ionic');
        cy.wrap(value).should("eq", 2)
    })
    it('should not be eq', () => {
        const value: number = 2;
        cy.title().should('contain', 'Ionic');
        cy.wrap(value).should("not.eq", 3)
    })
})
