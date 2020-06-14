import React from 'react';
import propTypes from 'prop-types';
import { Text } from 'react-native';

const Validar = (props) => {

  return (
    <Text style={{ fontSize: 35 }}>
      {props.label}
      {props.ano + 2000}
    </Text>
  )
}

Validar.defaultProps = {
  label: 'Ano: '
}

Validar.propTypes = {
  ano: propTypes.number.isRequired
}

export default Validar