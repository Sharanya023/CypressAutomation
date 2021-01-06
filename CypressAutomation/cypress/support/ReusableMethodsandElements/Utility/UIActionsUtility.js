/// <reference types="Cypress" />

class UIActionsUtility
{
    //to enter a value into textbox
    textType(css, valuetobeentered)
    {
        return cy.get(css).clear().type(valuetobeentered)
    }
    //to click on any element
    clickAction(css)
    {
        return cy.get(css).click()
    }

    //to navigate to a webpage
    getURL(urlvalue)
    {
        return cy.visit(urlvalue)
    }
   //to click on the element using the text on the element by cypress contains method
    clickActionusingText(textvalue)
    {
        return cy.contains(textvalue).click()
    }

    getelement(CSS)
    {
        return cy.get(CSS)
    }

}

export default UIActionsUtility