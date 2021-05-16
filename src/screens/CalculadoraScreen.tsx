import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={globalStyles.calculadoraContainer}>
      <Text style={globalStyles.resultadoPequeno}>1,500.00</Text>
      <Text style={globalStyles.resultado}>1,500.00</Text>

      <View>
        {/* Botón */}
        <View style={globalStyles.boton}>
          <Text style={globalStyles.botonTexto}>1</Text>
        </View>
      </View>
    </View>
  );
};
