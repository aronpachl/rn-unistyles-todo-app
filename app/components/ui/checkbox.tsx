import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, TextStyle } from 'react-native';

type Props = {
  style?: TextStyle;
  checked: boolean;
  onCheckChange: () => void;
};

function Checkbox({ checked, onCheckChange, style }: Props) {
  return (
    <Pressable onPress={() => onCheckChange()} hitSlop={5}>
      {checked ? (
        <MaterialCommunityIcons style={style} name="checkbox-marked-outline" size={24} />
      ) : (
        <MaterialCommunityIcons style={style} name="checkbox-blank-outline" size={24} />
      )}
    </Pressable>
  );
}

export default Checkbox;
