describe('Home Page', () => {
  it('Sucessfully loads', () => {
    cy.visit('/')

    cy.contains('Voluntariado')
    cy.contains('Sobre Nós')
    cy.contains('Parceria')
    cy.contains('Saiba mais').click()
    cy.contains('F.A.Q')
    cy.contains('Contato')

    cy.contains('Projetos').click()
    cy.contains('Revista PROVER').click()
    
    //cy.get('img[data-cy="logo"]').should('have.attr', 'alt', 'Imagem Logo Prover')

    //cy.url().should('include', '/commands/actions')

   //cy.get('.action-email')
      //.type('lucas@email.com')
      //.should('have.value', 'lucas@email.com')


  })
})