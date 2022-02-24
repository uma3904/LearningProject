public class uma_LC_Temparature {
@AuraEnabled
    public static Integer  d2FApexFromRam(Integer degreeParam){
        system.debug(' Iam in  d2FApexFromRam start');
        Integer res = (degreeParam*9/5 )+32 ;
        
        
        system.debug(' Iam in  d2FApexFromRam End');
        return res;
    }
  @AuraEnabled
    public static Integer  F2dApexFromRam(Integer farenheatParam){
        system.debug(' Iam in  F2dApexFromRam start');
        Integer res = (farenheatParam*9/5 )+32 ;
        
        
        system.debug(' Iam in  F2dApexFromRam End');
        return res;
    }
}