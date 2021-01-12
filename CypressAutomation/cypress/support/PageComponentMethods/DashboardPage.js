/// <reference types="Cypress" />
//import UIActionsUtility from '../ReusableMethodsandElements/Utility/UIActionsUtility'
import UIActionsUtility from '../ReusableMethodsandElements/Utility/UIActionsUtility'
import DashboardCSS from '../ReusableMethodsandElements/pageElements/DashboardCSS'
const ui = new UIActionsUtility();
const path = new DashboardCSS();

class DashboardPage{
  selectsalesDD()
    {
        ui.clickAction(path.salesbuttondashboard())
    }

  selectshipments()
    {
        ui.clickActionusingText(path.shipmentsdashboard())
    }
}

export default DashboardPage
