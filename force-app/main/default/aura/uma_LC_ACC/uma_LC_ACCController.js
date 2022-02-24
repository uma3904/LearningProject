({
	myAction : function(component, event, helper) {
	 alert(" iam in getAllAccountsHandleClick start");
        
        
        var action = component.get("c.getAllAccounts") ;
        
        action.setCallback(this,function(response){
            
            var state = response.getState();
            
            if(state === "SUCCESS"){
                
                console.log(response.getReturnValue());
                var returnValue =response.getReturnValue();
                
                console.log('results Stringify: '+JSON.stringify(returnValue));
                  console.log("================================");
                console.log(returnValue);
                
                component.set("v.result_attribute",returnValue);
                component.set("v.ram", JSON.stringify(returnValue));
                
                
              
                
                component.set("v.allAccounts_attribute", returnValue);
            }
            
        });
        
        
        $A.enqueueAction(action);
        
        
        
        alert(" iam in getAllAccountsHandleClick End");
        	
	}
})