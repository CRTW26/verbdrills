describe('Home', () => {
  it('should load home page', () => {
    cy.visit('/')
    cy.get('[data-testid="title"]').should('have.text', 'Hello World')
  })
})
