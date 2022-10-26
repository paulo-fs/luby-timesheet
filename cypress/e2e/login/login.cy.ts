describe('Login', () => {
   beforeEach(() => {
      cy.visit('/')
   })

   it('should register button be disabled on page render', () => {
      cy.get('[data-cy="signin"]').should('be.disabled')
   })

   it('should show a error message after blur a input', () => {
      cy.get('#email').click().blur()
      cy.get('[data-cy="error-email"]').should('have.text', 'E-mail obrigatório')
      cy.get('#password').click().blur()
      cy.get('[data-cy="error-password"]').should('have.text', 'Senha obrigatória')
   })

   it('should show a error message when filled e-mail input with a invalid e-mail', () => {
      cy.get('#email').type('invalid email').blur()
      cy.get('[data-cy="error-email"]').should('have.text', 'E-mail inválido')
   })

   it('should button "enter" be able when the inputs are filled with valid information', () =>{
      cy.get('#email').type('teste@mail.com').blur()
      cy.get('#password').type('abc1234').blur()
      cy.get('[data-cy="signin"]').should('not.be.disabled')
   })
})