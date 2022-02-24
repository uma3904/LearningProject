public class CalculatorCallingApex {
    
    Public void doOperation()
    {
 CalculatorApex uma=new CalculatorApex();
uma.addition(5 , 7);
uma.subtraction(7 , 2);
uma.multiplication(5 , 7);
uma.Division(5 , 7);
uma.modulus(5 , 7);
FirstApex fa=new FirstApex();
fa.sayHello(); 
        SecondApex sa=new SecondApex();
        sa.sayHello( 'uma' );
        sa.sayHello('uma', 'Bnaglore' );
    CalculatorReturn cr=new CalculatorReturn();
      integer c1=  cr.addition(2,3);
        integer c2= cr.subtraction(2,3);
      integer c3=  cr.multiplication(2,3);
       integer c4=  cr.division(2,3);
       double c5=  cr.modulus(2,3);
        System.debug('addition' +':'+ c1 );
        System.debug('subtraction:'  + c2);
        System.debug('multiplication:'  + c3);
        System.debug('division:'  + c4);
        System.debug('modulus:'  + c5);
integer c6=  cr.addition(2,3);
        integer c7= cr.subtraction(c6,3);
      integer c8=  cr.multiplication(2,c7);
        System.debug('addition......' +':'+ c6 );
        System.debug('subtraction.....:'  + c7);
        System.debug('multiplication.....:'  + c8);
    }

}