import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Modal, 
  TouchableOpacity, 
  StyleSheet
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import AComponent from './AComponent';
import AC from '../entities/AC';

interface ACToastProps {
  visible: boolean;
  onClose: () => void;
  acs: AC[];
}

const ACToast = ({ visible, onClose, acs } : ACToastProps) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
    >
      <BlurView
        style={styles.container}
        blurType="dark"
        blurAmount={20}
        onTouchStart={onClose}
      >
        <View style={styles.modal}>
          <TouchableOpacity 
            onPress={onClose} 
            style={styles.closeButton}
          >
            <Text>Close</Text>
          </TouchableOpacity>
          
          <FlatList
            data={acs}
            renderItem={({ item }) => <AComponent {...item.status} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </BlurView>
    </Modal>
  );
};

export default ACToast;

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modal: {
      width: '80%',
      maxHeight: '60%',
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 20,
      padding: 20
    },
    closeButton: {
      alignSelf: 'flex-end',
      marginBottom: 10
    }
  });