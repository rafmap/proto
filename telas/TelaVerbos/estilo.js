import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: { 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd'
  },

  /*boxTitulo: {
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 5,
    alignItems: 'center',
    width: 390,

  },*/

  boxTituloColuna: {
    backgroundColor: '#ff0',
    alignItems: 'center',
    width: 130,
    borderBottomWidth: 1
  },

  boxInfinitive: {
    backgroundColor: 'rgba(255,0,0,0.4)',
    alignItems: 'center',
    width: 130,
    
  },
  
  boxPastSimple: {
    backgroundColor: 'rgba(0,255,0,0.4)',
    alignItems: 'center',
    width: 130,

  },
  
  boxPastParticiple: {
    backgroundColor: 'rgba(0,0,255,0.4)',
    alignItems: 'center',
    width: 130,

  },

  titulo: {
    //marginBottom: 20,
    //paddingHorizontal: 10, 
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#000'
  },

  boxLinha: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }, 

  tituloColuna: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
 
  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  },

  boxBotao: {
    width: 320,
    marginBottom: 50
  }

});

export default estilo;