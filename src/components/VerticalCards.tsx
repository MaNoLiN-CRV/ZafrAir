import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../core/theme';
import { styles } from './styles/VerticalCardsStyle';

const SCREEN_HEIGHT = Dimensions.get('window').height;
export const CARD_HEIGHT = SCREEN_HEIGHT * 0.3;

export interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  onPress?: () => void;
}

interface VerticalCardScrollViewProps {
  data: CardData[];
  onEndReached?: () => void;
  children?: React.ReactNode[];
}

const VerticalCardScrollView = ({
  data,
  onEndReached,
  children
}: VerticalCardScrollViewProps) => {
  const renderCard = (card: CardData, index: number) => {
    return (
      <TouchableOpacity onPress={() => card.onPress?.()}>
        <View style={styles.cardContainer} >
          <LinearGradient
            colors={[theme.colors.primary, theme.colors.secondary]}
            style={styles.gradient}
          >
            { children ? children[index] : null }
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{card.title}</Text>
              <Text style={styles.description}>{card.description}</Text>
            </View>
          </LinearGradient>
        </View>
      </TouchableOpacity>
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
          {renderCard(card, index)}
        </View>
      ))}
    </ScrollView>
  );
};

export default VerticalCardScrollView;

