import React, { memo } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Modal, 
  TouchableOpacity} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import AComponent from './AComponent';
import AC from '../entities/AC';
import { styles } from './styles/ACToastStyle';

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

export default memo(ACToast);

