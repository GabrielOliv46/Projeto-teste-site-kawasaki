describe('validando funcao login na kawasaki', () => {
    it('teste de login com  usuario valido', () => {
      cy.visit('https://www.kawasakibrasil.com/pt-br/')
      cy.get('.myHide > .nav-link > div.d-none').click()
      cy.get('#regForm > :nth-child(5) > .pOne').type('gabrieloliveirabh302@gmail.com');
      cy.get('#RegistrationPassword').type('senha0105');
      cy.get(':nth-child(7) > .pOne').type('senha0105');
      cy.get('#AgreeToTermsAndConditions').click()
      cy.get(':nth-child(11) > .blackBtn').click()
      cy.get('.validation-summary-errors > span').should('have.text', 'Desculpe, não é possível submeter. Existem campos inválidos no formulário abaixo.')
    })
  })