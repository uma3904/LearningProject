({
    getAllAccountsHandleClick : function(component, event, helper) {
        //  alert(" iam in getAllAccountsHandleClick start");
        
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
                component.set("v.uma", JSON.stringify(returnValue));
                component.set("v.allAccounts_attribute", returnValue);
                
            }
            
        });
        
        $A.enqueueAction(action);
        //   alert(" iam in getAllAccountsHandleClick End");
        
    },
    
 
 viewHandleAnchorClick : function(component, event, helper) {
        alert(" iam in viewHandleAnchorClick start");
     
     console.log("  event.currentTarget  ",event);
      var idParamFromlink =   event.currentTarget.getAttribute("data-attriVal") ;
     
        alert(event.currentTarget.item);
     
     alert("idParamFromlink----",idParamFromlink);
       var action = component.get("c.viewAccount") ;
        
        action.setParams({
            idparam : idParamFromlink
        });
        action.setCallback(this,function(response){
            
            var state = response.getState();
            console.log("-------state-----",state);
            if(state === "SUCCESS"){
                
                console.log(response.getReturnValue());
                var returnValue =response.getReturnValue();
                
                console.log('results Stringify: '+JSON.stringify(returnValue));
                console.log("================================");
                console.log(returnValue.Id);
                
                component.set("v.uma", JSON.stringify(returnValue));
                component.set("v.account_attribute",returnValue);
                component.set("v.accountid_Attribute",returnValue.Id);
                
                
            }
            
        });
        
        $A.enqueueAction(action);
        
        
        component.set("v.isModalOpen",true);
        
        alert(" iam in viewHandleAnchorClick End");
        console.log(" =================================================iam in viewHandleAnchorClick end");
     
 },
    viewHandleClick : function(component, event, helper) {
        alert(" iam in viewHandleClick start");
        console.log(" =================================================iam in viewHandleClick start");
        
        var target = event.getSource();
        var  idFromView = target.get("v.value");
        
        
        
        console.log(" =idFromView===="+idFromView);
        var action = component.get("c.viewAccount") ;
        
        action.setParams({
            idparam : idFromView
        });
        action.setCallback(this,function(response){
            
            var state = response.getState();
            console.log("-------state-----",state);
            if(state === "SUCCESS"){
                
                console.log(response.getReturnValue());
                var returnValue =response.getReturnValue();
                
                console.log('results Stringify: '+JSON.stringify(returnValue));
                console.log("================================");
                console.log(returnValue.Id);
                
                component.set("v.uma", JSON.stringify(returnValue));
                component.set("v.account_attribute",returnValue);
                component.set("v.accountid_Attribute",returnValue.Id);
                
                
            }
            
        });
        
        $A.enqueueAction(action);
        
        
        component.set("v.isModalOpen",true);
        
        alert(" iam in viewHandleClick End");
        console.log(" =================================================iam in viewHandleClick end");
        
        
    },
    editHandleClick : function(component, event, helper) {
        //  alert(" iam in editHandleClick start");
        
        var target = event.getSource();
        var  idFromView = target.get("v.value");
        
        component.set("v.isModalOpenEdit",true);
        
        component.set("v.accountid_Attribute",idFromView);
        
        
        //  alert(" iam in editHandleClick end");
    },
    
    
    
    deleteHandleClick : function(component, event, helper) {
        // alert(" iam in deleteHandleClick start");
        component.set("v.isModalOpenDelete",true);
        var target = event.getSource();
        var  idFromView = target.get("v.value");
        
        component.set("v.deleteId_attribute",idFromView);
        // alert(" iam in deleteHandleClick end");
    },
    yesBtn : function(component, event, helper) {
        alert(" iam in yes button start");
        component.set("v.isModalOpen",false);
        alert(" iam in yes button end");
    },
    handleCreateOrUpdateAccount : function(component, event, helper) {
        //   alert(" iam in handleCreateOrUpdateAccount button start");
        // component.set("v.isModalOpenEdit",false);
        component.find("accUmaForm").submit();
        $A.get('e.force:refreshView').fire(); 
        // alert(" iam in handleCreateOrUpdateAccount button end");
    },
    handleCreateOrUpdateAccountCancel:function(component, event, helper) {
        
        component.set("v.isModalOpenEdit",false);
        
    },
    /*page refresh after data save*/
    
    isRefreshed: function(component, event, helper) {
        location.reload();
    },
    /*page refresh after data save*/
    yesDeleteButton : function(component, event, helper) {
        //  alert(" iam in yesDeleteButton start");
        var action = component.get("c.deleteAccount") ;
        
        var target = event.getSource();
        var  idFromView = target.get("v.value");
        
        console.log("----idFromView----------in delete yes ",idFromView);
        action.setParams({
            idparam : idFromView
            
        });
        action.setCallback(this,function(response){
            
            var state = response.getState();
            console.log("-------state-----",state);
            if(state === "SUCCESS"){
                
                console.log(response.getReturnValue());
                var returnValue =response.getReturnValue();
                   console.log("=============response===================",response);
                  console.log("=============returnValue===================",returnValue);
                
                console.log('results Stringify: '+JSON.stringify(returnValue));
                console.log("================================");
                alert ("Iam in delete yes ",returnValue);
               // component.set("v.uma",returnValue);
              //  $A.get('e.force:refreshView').fire(); 
                
            }else  if(state === "ERROR"){
                alert("Iam in alert error");                
                component.set("v.isModalOpenError",true);
                //var errorReturnValue =response.getReturnValue();
                
                var errors = response.getError();                       
                //   component.set("v.showErrors",true);           
                
                
                // component.set("v.uma",errorReturnValue);
                console.log("===============errors=================",errors);
                console.log("=================errors[0]===============",errors[0].pageErrors[0].message);
                
                console.log("===============response=================",response );
                console.log("===============response========Stringify=========",JSON.stringify(response) );
                //  component.set("v.uma",errorReturnValue);
                //  
                   component.set("v.uma",errors[0].pageErrors[0].message);
            }
            
        });
        $A.enqueueAction(action);
        
        
        console.log(" =idFromView=delete==="+idFromView);
        
        
        component.set("v.isModalOpenDelete",false);
        
        //  alert(" iam in yesDeleteButton end");
    },
    noDeleteButton : function(component, event, helper) {
        alert(" iam in noDeleteButton start");
        component.set("v.isModalOpenDelete",false);
        alert(" iam in noDeleteButton  end");
    },
    cancelDeleteButton : function(component, event, helper) {
        // alert(" iam in cancelDeleteButton start");
        component.set("v.isModalOpenError",false);
        // alert(" iam in cancelDeleteButton  end");
    }
})