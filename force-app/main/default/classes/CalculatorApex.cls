public class CalculatorApex {
    
    Public void addition(integer a, integer b)
    {
        integer c= a + b;
        System.debug(' addition ' + c );
    }
    
    Public void subtraction(integer a, integer b)
    {
        integer c= a - b;
        System.debug(' subtraction ' + c );
    }
 Public void multiplication(integer a, integer b)
    {
        integer c= a * b;
        System.debug(' multiplication ' + c );
    }
    Public void division(integer a, integer b)
    {
        integer c= a / b;
        System.debug('division ' + c );
    }
     Public void modulus( integer a ,integer b)
    {
        double c=math.mod(a,b);
       
        System.debug('modulus' + c);
    }
}