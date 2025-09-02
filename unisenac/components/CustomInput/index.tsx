import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

interface CustomInputProps extends TextInputProps {
  // Aqui podemos adicionar props adicionais específicas do nosso input
}

export function CustomInput({ style, placeholderTextColor = "#rgba(255, 255, 255, 0.7)", ...rest }: CustomInputProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={placeholderTextColor}
      {...rest}
    />
  );
}
