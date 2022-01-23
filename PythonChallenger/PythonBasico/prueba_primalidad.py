from math import factorial

def menu():
    menu =  """
    Bienvenido 
    1 - Numero primo por resto
    2 - Numero primo por factorial

    Elige una opcion para saber si tu numero es primo: """
    opcion = int(input(menu))
    return opcion

def es_primo_resto(numero):
    contador = 0 
    for i in range(1,numero+1):
        if i == 1 or i == numero:
            continue 
        if numero % i == 0:
            contador += 1
            break
    if contador == 0: 
        return True
    else:
        return False

def es_primo_factorial(numero):
    if ( factorial(numero-1) + 1 ) % numero  ==  0:
        return True
    else:
        return False

def run(opcion):

    numero = int(input("Escribe un numero: "))
    
    if opcion == 1:
        if es_primo_resto(numero):
            print("Es primo")
        else:
            print("No es primo")
    elif opcion == 2:
        if es_primo_factorial(numero):
            print("Es primo")
        else:
            print("No es primo")
    else:
        print("Escoja una opcion correcta!!!")

if __name__ == "__main__":
    opcion = menu()
    run(opcion)