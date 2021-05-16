import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  texto: TextoBoton;
  color: ColorBoton;
}

type TextoBoton = 'C' | '+/-' | 'del' | '/';

//  #9B9B9B gris claro
//  #2D2D2D gris oscuro
//  #FF9427 naranja
type ColorBoton = '#9B9B9B' | '#2D2D2D' | '#FF9427';

export const BotonCalc = ({texto, color = '#2D2D2D'}: Props) => {
  return (
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
});
