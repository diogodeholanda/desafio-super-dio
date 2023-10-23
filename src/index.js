let nome = "Diogo"

let exp = 1000

let nivel =""

let contador = 0

if (exp <1001)
{
    nivel = "Ferro"
}
else if (exp>1000 && exp<2001)
{
   nivel = "Bronze"
}
else if (exp>2000 && exp<5001)
{
   nivel = "Prata"
}
else if (exp>5000 && exp<7001)
{
   nivel = "Ouro"
}
else if (exp>7000 && exp<8001)
{
   nivel = "Platina"
}
else if (exp>8000 && exp<9001)
{
   nivel = "Ascendente"
}
else if (exp>9000 && exp<10001)
{
   nivel = "Imortal"
}
else if (exp>10000)
{
   nivel = "Radiante"
}
do{
   console.log("O Herói de nome " + nome +" está no nível de " + nivel)
   contador++
} while (contador <1)

/*else if (isNaN(exp))
{
   console.log("Digite um valor válido")
}
*/