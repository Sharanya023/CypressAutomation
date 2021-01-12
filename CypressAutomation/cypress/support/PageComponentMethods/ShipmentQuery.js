/// <reference types="Cypress" />
//import UIActionsUtility from '../ReusableMethodsandElements/Utility/UIActionsUtility'
import ShipmentsCSS from '../ReusableMethodsandElements/pageElements/ShipmentsCSS'
import UIActionsUtility from '../ReusableMethodsandElements/Utility/UIActionsUtility'

const ui = new UIActionsUtility();
const path = new ShipmentsCSS();
class ShipmentQuery
{
selectthirdorder()
{
  cy.get(path.selectthirdorder()).click()        
}

setTrackingNumber(value)
{
ui.textType(path.selecttrackingnumber(), value)
ui.clickActionusingText(path.settrackingnumber())
}




queryspecifictrackingnumber(value)
{
ui.textType(path.searchtrackingnumber(),value)  
ui.clickAction(path.searchbutton())
}

    
verifyavailabilityofshipment()
{
    return ui.getelement(path.verifysingleelement())
}
}
export default ShipmentQuery

