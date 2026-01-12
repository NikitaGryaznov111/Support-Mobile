import { Animated, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../../shared/ui/Button';
import ModalCustom from '../../../shared/ui/ModalCustom';
import Form from './Form';
import { Colors } from '../../../shared/config/colors';

const ButtonAddTask = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    const pulse = Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ]);
    const animation = Animated.loop(pulse);
    animation.start();
    return () => animation.stop();
  }, [scaleValue, opacityValue]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedRing,
          {
            transform: [{ scale: scaleValue }],
            opacity: opacityValue,
          },
        ]}
      />
      <Button
        icon="add"
        onClick={() => setIsModalActive(true)}
        styleIcon={{ color: Colors.White }}
        size={20}
        styleView={styles.button}
      />
      <ModalCustom
        isModalActive={isModalActive}
        closeModal={() => setIsModalActive(false)}
      >
        <Form closeForm={() => setIsModalActive(false)} />
      </ModalCustom>
    </View>
  );
};

export default ButtonAddTask;

const styles = StyleSheet.create({
  container: {
    marginRight: 30,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedRing: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.BlueDD,
    position: 'absolute',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BlueLL,
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 4,
  },
});
