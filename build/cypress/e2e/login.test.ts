describe('Login', () => {
  const { baseUrl } = Cypress.config();
  const inputEmail = '#email';
  const inputPassword = '#password';

  it('login form', () => {
    cy.visit('/login');

    // Triggers the form validation
    cy.get('form > button').click();
    cy.wait(1000);

    // "more" valid but not all the way
    cy.get(inputEmail).type('user');
    cy.get(inputPassword).type('password{enter}');

    cy.url().should('equal', `${baseUrl}/login`);

    // Now we are valid
    cy.get(inputEmail).type('@gmail.com');
    cy.get('form > button').click();

    // Redirected the user
    cy.url().should('equal', `${baseUrl}/login`);

    cy.viewport('iphone-6');
  });
});
