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
      </View>
      <View style={globalStyles.fila}>
        <BotonCalc texto="7" />
        <BotonCalc texto="8" />
        <BotonCalc texto="9" />
        <BotonCalc texto="x" color="#FF9427" />
      </View>
      <View style={globalStyles.fila}>
        <BotonCalc texto="4" />
        <BotonCalc texto="5" />
        <BotonCalc texto="6" />
        <BotonCalc texto="-" color="#FF9427" />
      </View>
      <View style={globalStyles.fila}>
        {/* así mandamos true por defecto */}
        <BotonCalc texto="0" ancho />
        <BotonCalc texto="." />
        <BotonCalc texto="=" color="#FF9427" />
      </View>
    </View>
  );
};
