/// <reference types="Cypress" />
//import UIActionsUtility from '../ReusableMethodsandElements/Utility/UIActionsUtility'
import UIActionsUtility from '../ReusableMethodsandElements/Utility/UIActionsUtility'
import loginpageCSS from '../ReusableMethodsandElements/pageElements/loginpageCSS'
const ui = new UIActionsUtility();
const path = new loginpageCSS();
class LoginPage
{
visit(value)
{
    ui.getURL(value)
}

fillEmail(value)
{
    
ui.textType(path.loginemail(),value)
return this
}

fillPassword(value)
{
    ui.textType(path.loginpassword(),value)
    return this
} 

submit(){
   ui.clickAction(path.loginbutton())
}

}
export default LoginPage