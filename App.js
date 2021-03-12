import React, { Component } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.random = this.random.bind(this);
    this.mudaFrase = this.mudaFrase.bind(this);
    let frases =
      [
        "Frase aqui",
        "Enfrente os problemas e leve a melhor!",
        'Dê mais atenção ao que você tem de bom sua vida!',
        'Nem todos os dias são bons, mas há algom em cada dia.!',
        'Para chegar ao topo, o que importa é coar!',
        'Suba o primeiro degrau com fé. Não é nesário que você veja toda a escada, apenas dê o primeiro passo.',
        'De nada adianta ter sonhos, se você não empenhar em correr atrás!',
      ];
    let random = this.random(1, frases.length);
    this.state = {
      frases: frases,
      escolheFrase: 0,
    }
  }


  render() {
    return (
      <View style = {styles.container}>
        <Image style = {styles.imagem}
        source = {{
          height: 200,
          width: 200,
          uri: 'https://cdn.awsli.com.br/600x450/667/667229/produto/53707918/6d5699e072.jpg',
        }}
        />
        <Text style = {styles.texto}> "{this.state.frases[this.state.escolheFrase]}" </Text>
        <Button title="Abrir frase do dia" onPress={this.mudaFrase}/>
      </View>

    );
  }

  mudaFrase() {
    this.setState({
      escolheFrase: this.random(1, this.state.frases.length)
    });
    console.log(this.state.frases[this.state.escolheFrase])
  }

  random(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  imagem: {
    alignItems: 'center',
    marginTop: 100
  },
  texto: {
    padding: 25
  }


})




