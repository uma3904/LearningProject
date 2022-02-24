public class ListInDocApex {
    public static void learnList(){
        list<Double> lD=new List<Double>();
  
       Double lD1 =10.00;
       Double lD2=22.2;
        Double lD3=32.3;
        System.debug(lD1);
        System.debug(lD2);
        System.debug(lD3);
        
       // System.debug('The listDouble size is:' + lDouble.Size());
        
        list<Doctor__c> lDoctor=new List<Doctor__c>();
        Doctor__c d=new Doctor__c();
        d.name='jo from Apex';
        d.Hospital_Name__c='a0J5g000003GjySEAS';
        d.Age__c=35;
        insert d;
       
    }

}