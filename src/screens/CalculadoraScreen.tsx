import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {globalStyles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    setNumero(numero + numeroTexto);
  };

  return (
    <View style={globalStyles.calculadoraContainer}>
      <Text style={globalStyles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text
        style={globalStyles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={globalStyles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="del" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="/" color="#FF9427" accion={limpiar} />
      </View>
      <View style={globalStyles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" accion={limpiar} />
      </View>
      <View style={globalStyles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" accion={limpiar} />
      </View>
      <View style={globalStyles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" accion={limpiar} />
      </View>
      <View style={globalStyles.fila}>
        {/* así mandamos true por defecto en ancho */}
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={limpiar} />
        <BotonCalc texto="=" color="#FF9427" accion={limpiar} />
      </View>
    </View>
  );
};
