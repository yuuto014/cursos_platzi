def conversor(tipo_pesos, valor_dolar):
    pesos = input("Cuantos pesos "+ tipo_pesos +" tienes?: ")
    pesos = float(pesos)
    dolares = pesos / valor_dolar
    dolares = round(dolares,2) 
    dolares = str(dolares)
    print("Tienes $" + dolares + " dolares")


menu =  """
Bienvenido al conversor de monedas

1 - Pesos Colombianos
2 - Pesos Argentinos
3 - Pesos Mexicanos

Elige una opcion: """

opcion = int(input(menu))

if opcion == 1:
    conversor("Colombianos", 3875)
elif opcion == 2:
    conversor("Argentinos", 99.44)
elif opcion == 3:
    conversor("Mexicanos", 20.19)
else:
    print("Elija un opcion correcta")



# cop = input("Cuantos pesos colombianos tienes?: ")
# cop = float(cop)
# cop_dol = 3875
# dol = cop / cop_dol
# dol = round(dol,2) 
# dol = str(dol)
# print("Tienes $" + dol + " dolares")


# print("************** DOLAR A PESO COLOMBIANO **************")

# dol = input("Cuantos dolares tienes?: ")
# dol = float(dol)
# dol_col = 3875 #3766
# cop = dol * dol_col
# cop = round(cop,2) 
# cop = str(cop)
# print("Tienes $" + cop + " pesos colombianos")