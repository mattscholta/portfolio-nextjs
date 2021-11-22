it('basic navigation of routes', () => {
  // This value is configured as an environment variable
  const { baseUrl } = Cypress.config();

  // We can visit routes relative to the base
  cy.visit('/');

  // Navigates to the "about-us"
  const selectAboutUs = `.ui-container-xl > [href="/about-us"]`;
  const linksAbout = cy.get(selectAboutUs);

  linksAbout.first().click();
  cy.url().should('equal', `${baseUrl}/about-us`);

  // Navigates to the "refer-a-friend"
  const selectReferAFriend = `.ui-container-xl > [href="/refer-a-friend"]`;
  const linksReferAFriend = cy.get(selectReferAFriend);

  linksReferAFriend.first().click();
  linksReferAFriend.first().click();
  cy.url().should('equal', `${baseUrl}/refer-a-friend`);

  // Navigates to the "login"
  const selectLogin = `.ui-container-xl > [href="/login"]`;
  const linksLogin = cy.get(selectLogin);

  linksLogin.first().click();
  cy.url().should('equal', `${baseUrl}/login`);
});
