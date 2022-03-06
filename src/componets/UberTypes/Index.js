import React from 'react';
import {Pressable, Text} from 'react-native';
import UberTypesRow from '../UberTypesRow';
import UberType from '../../assets/data/types';

const UberTypes = ({typeState, onSubmit}) => {
  //

  const [selectedType, setSelectedType] = typeState;

  return (
    <>
      {UberType.map(type => (
        <UberTypesRow
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
          key={type.id}
          type={type}
        />
      ))}
      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </>
  );
};

export default UberTypes;
