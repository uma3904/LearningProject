public class uma_LC_AC_Account1 
{
     @AuraEnabled
    public static  List<Account>  getAllAccounts(){
        
        
        List<Account>   lstActts  =  [Select Id ,Name,AccountNumber from Account limit 10];
        
        List<String> lstStr ;
        
      //  Map<key,value>
        
        //  List<Contact>   lstCons  =  [Select Id ,Name from Contact];
        
      Map<String,String>  aMap = new Map<String,String>();
        
        aMap.put('uma','package1');
          aMap.put('karthik','package2');
      
          aMap.put('Neerja','package3');
      
          aMap.put('Revanth','package4');
      
         
        system.debug(lstActts);
        
        for(Account act : lstActts){
            system.debug(act);
        }
        
        
        return lstActts;
    }
    @AuraEnabled
    public static Account  viewAccount(String idparam){
        
        List<Account>   viewAccountlist =  [select id,name,AccountNumber ,site,Accountsource from Account where id=:idparam ];
     Account a =  viewAccountlist.get(0);
        return a;
    }
    @AuraEnabled
    public static String  deleteAccount(String idparam){
        
        List<Account>   viewAccountlist =  [select id,name,AccountNumber ,site,Accountsource from Account where id=:idparam ];
     Account d =  viewAccountlist.get(0);
        Delete d;
      return 'accountDeletedSuccefully';
          
          }
    
}