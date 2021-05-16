import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {globalStyles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={globalStyles.calculadoraContainer}>
      <Text style={globalStyles.resultadoPequeno}>1,500.00</Text>
      <Text style={globalStyles.resultado}>1,500.00</Text>

      <View style={globalStyles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" />
        <BotonCalc texto="+/-" color="#9B9B9B" />
        <BotonCalc texto="del" color="#9B9B9B" />
        <BotonCalc texto="/" color="#FF9427" />
        {/* #9B9B9B gris claro */}
        {/* #2D2D2D gris oscuro */}
        {/* #FF9427 naranja */}
      </View>
    </View>
  );
};
