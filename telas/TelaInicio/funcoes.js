import { verbs, pastSimple, pastParticiple } from '../TelaVerbos';

export function gerarIndexVerbo(){
  return Math.floor(Math.random() * (22 + 0 - 0) + 0);
}

export function gerarIndexConjugacao(){
  return Math.floor(Math.random() * (2 + 0 - 0) + 0);
}

export function validarResposta(indexVerbo, indexConjugacao, respostaUsuario){
  //const tempo = [pastSimple, pastParticiple];
  //const respostaCerta;
  if (indexConjugacao == 0){
    var respostaCerta = pastSimple[indexVerbo];
    if (respostaUsuario.toUpperCase === respostaCerta.toUpperCase) {
      return true;
    } else {
      return false;
    }
  } else {
    var respostaCerta = pastParticiple[indexVerbo];
    if (respostaUsuario.toUpperCase === respostaCerta.toUpperCase) {
      return true;
    } else {
      return false;
    }
  }
}