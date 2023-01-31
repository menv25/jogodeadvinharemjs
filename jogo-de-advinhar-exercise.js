var numeroMisterioso = parseInt(Math.random() * 1001):
while(chute != numeroMisterioso){
    var chute = prompt('Advinhe um número entre 0 e 1000: ' )
    if (chute == numeroMisterioso) {
        alert('Adivinhoooou!')

    } else if (chute > numeroMisterioso) {
        alert('Não conseguimos, o número é menor!')
    } ele if (chute < numeroMisterioso) {
        alert('Erramos, o número é maior!')
    }
}