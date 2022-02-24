({
getAllPatientDetailsHandleClick : function(component, event, helper) {
         alert(" iam in getAllPatientDetaiesHandleClick start");
        
        var action = component.get("c.getAllPatientDetailsRam") ;
        
        action.setCallback(this,function(response){
            
            var state = response.getState();
            console.log("-----------------------", state);
            if(state === "SUCCESS"){
                
                console.log(response.getReturnValue());
                var returnValue =response.getReturnValue();
                
                console.log('results Stringify: '+JSON.stringify(returnValue));
                console.log("================================");
                console.log(returnValue);
                
                component.set("v.result_attribute",returnValue);
                component.set("v.uma", JSON.stringify(returnValue));
                component.set("v.AllPatientDetails_attribute", returnValue);
                
            }
            
        });
        
        $A.enqueueAction(action);
        //   alert(" iam in getAllPatientDetailesHandleClick End");
     
}
   
})