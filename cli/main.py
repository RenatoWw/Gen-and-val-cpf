from validador import val
from gerador import gen

print("Do you want to validate or generate a cpf?[V/G]")
operation = input()

if(operation == 'V'):
    val();
    
elif(operation == 'G'):
    gen();