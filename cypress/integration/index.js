describe('Home', () => {
  it('should load home page', () => {
    cy.visit('/')
    cy.get('[data-testid="title-bar"]').should('exist')
    cy.get('[data-testid="description"]').should('exist')
    cy.get('[data-testid="btn--train"]').should('exist')
  })
})
