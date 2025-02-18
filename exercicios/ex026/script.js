/*
    ## IMPORTANTE ##
    Você tem todo o direito de usar esse material 
    para seu próprio aprendizado. Professores também 
    podem ter acesso a todo o conteúdo e usá-los com 
    seus alunos. Porém todos os que usarem esse 
    material - seja para qual for a finalidade - deverão 
    manter a referência ao material original, disponível 
    em https://github.com/gustavoguanabara/javascript. Este 
    material não poderá ser utilizado em nenhuma hipótese 
    para ser replicada - integral ou parcialmente - 
    por autores/editoras/instituições para criar livros 
    ou apostilas, com finalidades de obter ganho financeiro 
    com ele.
*/

function contagem() {
    let saida = document.getElementById('saida')
    let n1 = Number(document.getElementById('fn1').value)
    let n2 = Number(document.getElementById('fn2').value)
    let cont

    saida.innerHTML += `<h2>Contando de ${n1} até ${n2} </h2>`
    if (n1<n2) {
        cont = n1
        while (cont <= n2) {
            saida.innerHTML += ` ${cont} &#x1F449;`
            cont ++
        }
    } else  if (n2<n1) {
        cont = n1
        while (cont >= n2) {
            saida.innerHTML += ` ${cont} &#x1F449;`
            cont --
        }
    } else {
        saida.innerHTML += `Não é possível contar, pois os números são iguais`
    }
    
    saida.innerHTML += ` &#x1F3C1;`
}

/* let saida = document.getElementById('saida')
    let n1 = Number(document.getElementById('fn1').value)
    let n2 = Number(document.getElementById('fn2').value)
    let cont */