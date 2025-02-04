import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../core/theme';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const CARD_HEIGHT = SCREEN_HEIGHT * 0.3;

export interface CardData {
  id: string;
  title: string;
  description: string;
}

interface VerticalCardScrollViewProps {
  data: CardData[];
  onEndReached?: () => void;
}

const VerticalCardScrollView: React.FC<VerticalCardScrollViewProps> = ({
  data,
  onEndReached
}) => {
  const renderCard = (card: CardData) => {
    return (
      <View style={styles.cardContainer}>
       
        <LinearGradient
          colors={[theme.colors.blurBackground1, theme.colors.blurBackground2]}
          style={styles.gradient}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </View>
        </LinearGradient>
        
      </View>
    );
  };

  return (
    <ScrollView
     
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      onMomentumScrollEnd={onEndReached}
    >
      {data.map((card, index) => (
        <View key={index}>
          {renderCard(card)}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({


  cardContainer: {
    height: CARD_HEIGHT,
    borderRadius: 20,
   
    overflow: 'hidden',
    backgroundColor: 'transparent',
    margin: 20,
    filter : `drop-shadow(0 2 10px black)`,
  
  },
  gradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  contentContainerStyle: {
    paddingVertical: 20,
    
  },
});

export default VerticalCardScrollView;

