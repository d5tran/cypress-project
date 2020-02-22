import {getID} from './getid.js'

describe('My First Test', function() {

    it('Does not do much!', function() {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('of undefined')
              done()
              return false
            });
      //cy.visit('https://nibbler.silktide.com/')
      //cy.get('.social-icon.social-icon--facebook').click()
      console.log(getID())
      cy.visit('http://www.google.ca')
      console.log(getID())
    })

    it('Does not do much!', function() {

    //cy.visit('https://nibbler.silktide.com/')
    //cy.get('.social-icon.social-icon--facebook').click()
    cy.visit('https://www.yahoo.ca')
    console.log(getID())

  })
})