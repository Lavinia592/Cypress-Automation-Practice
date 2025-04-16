describe("Automation Testing Practice", () => {
  it("visit website, check url & title, close popup, radio buttons, dropdowns ", ()=>{
        //visit the website
    cy.visit("https://testautomationpractice.blogspot.com/")

        //checks the url is the correct one
    cy.url().should('include', 'testautomationpractice')

        //check the title of the website
    cy.title().should('include', 'Automation Testing Practice')

        //close popup
    cy.get('#cookieChoiceDismiss').click()
    //cy.screenshot('before-popup')

        //insert data in the GUI form
     cy.get('#name').type('Lavinia').find('input').should('not.be.empty') //checks the box if is empty
     cy.get('#email').type('my@email.com').find('input').should('not.be.empty')
     cy.get('#phone').type('1234567890')
     cy.get('#textarea').type('Calçada do Pico, nº1, Funchal, Portugalia')


        //verify visibility of radio buttons
     cy.get("input#male").should("be.visible")
     cy.get("input#female").should("be.visible")

         //selecting radio button
     cy.get("input#female").check().should("be.checked")
     cy.get("input#male").should("not.be.checked")

        //select monday checkbox
     cy.get("input#monday").check().should("be.checked")
     //cy.screenshot()

        //select dropdowns
     cy.get('#country')
     .select('Brazil')
     .should('have.value', 'brazil')

     })

})