function criarAluno(nome,n1,n2) {
    return  {
       nomes: nome,
       nota1: n1,
       nota2:n2,
       media: function media(){
           return(this.nota1 + this.nota2) /2
       }
     }
   }
   
   function aluno(nome,n1,n2) {
   nome = nome;
   nota1 = n1;
   nota2 = n2;
     media = function() {
       return (this.nota1 + this.nota2) /2;
    }
   }
   var turma = [
      criarAluno('jeff',8,8),1,
      criarAluno('Roberta',5,3),
      criarAluno('Jonas',4,4),
      criarAluno('rebeca',2,10),
      criarAluno('jin',2,5),
      criarAluno('daniel',6,6),
      criarAluno('douglas',4,8),
      criarAluno('alicia',8,9), 
   ]
   var alunos = turma[0];
   console.log(alunos);
   
   /*foi criamdo uma função,para conferir
   cada elemento dentro da var turma, e utilizado o forEach para "varrer" o objeto*/
   
   turma.forEach(function(elemento) {
       console.log(elemento);
   })