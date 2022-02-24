public class ListInApex {
    
    public static void learnList(){
        
        //(for 6th line 13th line is related ) 
        list<String> lString=new List<String>();
        
        lString.add('uma0');
        lString.add('uma1');
        lString.add('uma2');
        lString.add('uma3');
        
        lString.remove(1);
        // SyStem.debug('The listing size is:' + lstring.size());
        for(Integer j=0; j<lstring.Size(); j++)
        {
            System.debug(lString.get(j));
        }
        
        for(String s: lString){
            System.debug(s);
        }
        list<Account> lFromAccount=[Select id, name from Account];
        Integer Size=lFromAccount.Size();
        System.debug('Total no.of Accounts in org:' +Size);
        Account a=new Account();
        a.name=' Uma from Apex ';
        insert a;
        
        Account a1=new Account();
        a1.name=' Mahi from Apex ';
        insert a1;
        
        /* for (Integer i=0; i<148; i++){
Account aFinal=new Account();
aFinal.name='Uma from Apex'+i;
insert aFinal;}*/
        
        List<Account>finalListToBeInserted= new List<Account>();
        
        for(Integer i=0; i<200; i++){
            Account aFinal=new Account();
            aFinal.name='Uma From Apex a' +i;
            finalListToBeInserted.add(aFinal);
            
        }
        insert finalListToBeInserted;
    }
    
    
    public static void deleteAccount(String id){
        
        List<Account>   lAcc           = [Select id, name from Account where id=:id];
        
        delete lAcc;
    }
    
}