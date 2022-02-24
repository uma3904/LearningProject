public class Uma1_LC_PatientDet {
    @AuraEnabled
    public static List<Patient__c> getAllPatientDetails(){
        
       
        List<Patient__c>   Pati = [Select Id, Name, Address__c, Doctor__c, Disease__c, Cell_Number__c, Patient_Type__c, Room__c, Status__c from Patient__c limit 20];
           system.debug(Pati);
        
        for(Patient__c Pat : Pati){
            system.debug(Pat);
        }
         return Pati;  
    }
     @AuraEnabled
    public static List<Patient__c> getAllPatientDetailsRam(){
        
       
        List<Patient__c>   Pati = [Select Id, Name, Address__c, Doctor__c, Disease__c, Cell_Number__c, Patient_Type__c, Room__c, Status__c from Patient__c limit 20];
           system.debug(Pati);
        
        for(Patient__c Pat : Pati){
            system.debug(Pat);
        }
         return Pati;  
    }
}