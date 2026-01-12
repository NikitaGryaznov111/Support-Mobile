import Toast from 'react-native-toast-message';

export const toAst = (message: string, type = 'error', title = '') => {
  Toast.show({
    type,
    text1: title,
    text2: message,
  });
};
