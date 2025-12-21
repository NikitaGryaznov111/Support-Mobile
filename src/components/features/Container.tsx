import { StyleSheet, View } from 'react-native';
import React from 'react';

interface IContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: IContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
