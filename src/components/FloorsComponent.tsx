import React, { useMemo, useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import Floor from '../entities/Floor'
import VerticalCardScrollView, { CardData } from './VerticalCards'
import ACToast from './ACToast'
import AC from '../entities/AC';

interface Props {
 navigation: any
 floors: Floor[]
}

export default function FloorsComponent({ navigation, floors }: Props) {
  const [toastVisible, setToastVisible] = useState(false);
  const [selectedFloorACs, setSelectedFloorACs] = useState<AC[]>([]);

  const floorsCards = useMemo(() => 
    floors.map((floor) => ({
      id: floor.id,
      title: floor.name,
      description: `${floor.Acs.length} ACs`,
      onPress: () => {
        if (floor.Acs.length !== 0) {
          setSelectedFloorACs(floor.Acs);
          setToastVisible(true);
        }
      }
    })), [floors]
  );

  return (
    <View>
      <VerticalCardScrollView data={floorsCards} lazy={{size: 4, offset: 0}}/>
      <ACToast 
        visible={toastVisible} 
        onClose={() => setToastVisible(false)} 
        acs={selectedFloorACs} 
      />
    </View>
  )
}