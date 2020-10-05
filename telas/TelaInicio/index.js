import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { validarResposta, gerarIndexVerbo, gerarIndexConjugacao } from './funcoes';
import { verbs, pastSimple, pastParticiple} from '../TelaVerbos';

import estilo from './estilo';

export default function TelaInicio(props) {
  const [ indexVerbo, setIndexVerbo ] = useState(0);
  const [ indexConjugacao, setIndexConjugacao ] = useState(0);
  const [ respostaUsuario, setRespostaUsuario ] = useState("");
  
  const conjugacao = ["Past Simple", "Past Participle"];

  const criarPergunta = () => {
    setIndexVerbo(gerarIndexVerbo());
    setIndexConjugacao(gerarIndexConjugacao());
    setRespostaUsuario("");
  }

  const responder = () => {
    if ( validarResposta(indexVerbo, indexConjugacao, respostaUsuario) ) {
      alert("Right!");
    } else {
      alert("Wrong...");
    }

    criarPergunta();
  }

  const abrirTelaVerbos = () => {
    props.navigation.navigate('Verbos');
  }

  return (
      <View style={estilo.tela}>
        <View style={estilo.boxPergunta}>
          <Text style={estilo.titulo}>
           { verbs[indexVerbo] }
          </Text>

          <View style={estilo.boxQuestao}>
            <Text style={estilo.texto}>            
              { conjugacao[indexConjugacao] }:
            </Text>


            <TextInput 
              textAlign = "center"
              onChangeText = { setRespostaUsuario } 
              keyboardType = "default" 
              value = {respostaUsuario.toString()} 
              autoFocus = {true}
              style = { estilo.input } />
          </View>

          <View style={estilo.opcoes}>
            <View style={estilo.boxBotao}>
              <Button title="Skip" onPress={criarPergunta} color="#ff0000"/>
            </View>

            <View style={estilo.boxBotao}>
              <Button title="OK" onPress={responder} color="#0000ff"/>
            </View>
          </View>

        </View>

        <View style={estilo.boxBotaoTabuada}>
          <Button title="Irregular Verbs List" onPress={abrirTelaVerbos} color="#00aa00"/>
        </View>
      </View>

  );
}
