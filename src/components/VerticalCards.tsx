import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { createStyles } from './styles/VerticalCardsStyle';

import { LinearGradient } from 'react-native-linear-gradient';
import { useTheme } from '../providers/ThemeProvider';
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
  lazy?: {
    size: number;
    offset: number;
  }
}

const VerticalCardScrollView = ({ data, lazy }: VerticalCardScrollViewProps) => {
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(false);

  const {currentTheme} = useTheme();
  const styles = createStyles(currentTheme);

  useEffect(() => {
    const initialSize = lazy?.size ?? data.length;
    const initialOffset = lazy?.offset ?? 0;
    const initialData = data.slice(initialOffset, initialOffset + initialSize);
    setCardData(initialData);
  }, [data, lazy]);

  const onEndReached = () => {
    if (lazy && !loading) {
      setLoading(true);
      const offset = cardData.length;
      const size = lazy.size;
      const newData = data.slice(offset, offset + size);
      setCardData([...cardData, ...newData]);
      setLoading(false);
    }
  };

  const renderCard = (card: CardData) => {
    return (
      <TouchableOpacity key={card.id} onPress={card.onPress}>
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={[currentTheme.colors.primary, currentTheme.colors.secondary]}
            style={styles.gradient}
          >
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
      {cardData.map(renderCard)}
      {loading && <Text>Loading...</Text>}
    </ScrollView>
  );
};

export default VerticalCardScrollView;

