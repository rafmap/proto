import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import estilo from './estilo';

export const verbs = 
  ["to become", "to begin", "to break", "to choose", "to do", "to drive", "to drink", "to eat", "to fall", "to fly", 
  "to forgive", "to forget", "to give", "to go", "to know", "to ride", "to see", "to speak", "to sing", "to swim",
  "to take", "to wake", "to write"];
  export const pastSimple = 
  ["became", "began", "broke", "chose", "did", "drove", "drank", "ate", "fell", "flew", 
  "forgave", "forgot", "gave", "went", "knew", "rode", "saw", "spoke", "sang", "swam",
  "took", "woke", "wrote"];
  export const pastParticiple = 
  ["become", "begun", "broken", "chosen", "done", "driven", "drunk", "eaten", "fallen", "flown", 
  "forgiven", "forgotten", "given", "gone", "known", "ridden", "seen", "spoken", "sung", "swum",
  "taken", "woken", "writen"];

export default function TelaVerbos(props){
  const voltar = () => {
    props.navigation.navigate("Inicio");
  }

  

    var myLoop = [];
    for (let i = 0; i < verbs.length; i++){
      myLoop.push(
        <View key={i}>
          <View style={estilo.boxLinha}>
            <View style={estilo.boxInfinitive}>
              <Text style={estilo.texto}>            
               {verbs[i]}
              </Text>
            </View>

            <View style={estilo.boxPastSimple}>
             <Text style={estilo.texto}>
              {pastSimple[i]}
             </Text>
            </View>

            <View style={estilo.boxPastParticiple}>
              <Text style={estilo.texto}> 
                {pastParticiple[i]}
              </Text>
            </View>
          </View>
        </View>
      );
    }

  return (
    <View style={estilo.tela}>
        <View style={estilo.boxLinha}>
          <View style={estilo.boxTituloColuna}>
            <Text style={estilo.tituloColuna}>            
              Infinitive
            </Text>
          </View>

          <View style={estilo.boxTituloColuna}>
            <Text style={estilo.tituloColuna}>
              Past Simple
            </Text>
          </View>

          <View style={estilo.boxTituloColuna}>
            <Text style={estilo.tituloColuna}> 
              Past Participle
            </Text>
          </View>
        </View>

      <ScrollView>
        {myLoop}
      </ScrollView>
        

      <View style={estilo.boxBotao}>
        <Button title="Responder" onPress={voltar} color="#000"/>
      </View>
    </View>
  );

}
