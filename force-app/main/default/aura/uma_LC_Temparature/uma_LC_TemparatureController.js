({
	myAction : function(component, event, helper) {
		
	}
    ,
    
   handleD2FClick :function(component, event, helper){
    alert(" i am in D2Fpage");
       var degreeInjs = component.get("v.degree_attribute");
        var farenheatInjs = component.get("v.farenheat_attribute");
        var resultInjs= component.get("v.result_attribute");
        resultInjs= (degreeInjs-(9/5))+32;
        component.set("v.result_attribute",resultInjs);
        },
    
    
     handleF2DClick :function(component, event, helper){
    alert(" i am in F2Dpage");
          var degreeInjs = component.get("v.degree_attribute");
     var farenheatInjs = component.get("v.farenheat_attribute");
         var resultInjs= component.get("v.result_attribute");
         resultInjs= (farenheatInjs-32)*(5/9);
         component.set("v.result_attribute",resultInjs);
},
    handleD2FApexClick :function(component, event, helper){
        alert("I am in controller js handleD2FApexClick Start");
        
    var degInJs = component.get("v.degree_attribute") ;
        var resultInJs = component.get("v.result_attribute") ;
        alert("------degInJs---"+degInJs);   
        
        //call to apex method to get results  4 lines
        
        
        var action = component.get("c.d2FApexFromRam");
        
        action.setParams({
            degreeParam: degInJs
        });
        
        
        action.setCallback(this,function(response){
            // you should be using getState on result as getStatus doesn't exist in standard API
            var status = response.getState();
            if(status === "SUCCESS"){
                alert("result",response);
                console.log("result",response);
                component.set("v.result_attribute", response.getReturnValue());
            }
            // your setCallback wasn't closed properly
        });
        
        // you enqueue the action even before it was setup
        $A.enqueueAction(action);
        
        alert("------resultInJs-handleD2FApexClick--"+resultInJs);
        alert("Iam in controller js  handleD2FApexClick  End")  ;   
    }
    
    ,
    
    handleF2DApexClick :function(nehaComponent, event, helper) {
        alert("Iam in controller js  handleF2DApexClick  Start")  ;   
        
        var farenInJs = nehaComponent.get("v.farenheit_attribute");
        
        alert("----farenInJs-----"+farenInJs);
        
        console.log("----farenInJs-----"+farenInJs);
        
        var action = nehaComponent.get("c.f2DApexFromRam");
        
        action.setParams({
            farenheitParam:farenInJs
        })
        
        action.setCallback(this, function(response){
            
            // you should be using getState on result as getStatus doesn't exist in standard API
            var status = response.getState();
            if(status === "SUCCESS"){
                alert("result",response.getReturnValue());
                console.log("result",response);
                nehaComponent.set("v.result_attribute", response.getReturnValue());
            }
            // your setCallback wasn't closed properly
            
        })
        
        $A.enqueueAction(action);
        
        alert("Iam in controller js  handleF2DApexClick  End")  ;   
        

    }
    
})