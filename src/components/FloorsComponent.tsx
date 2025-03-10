import React, { useMemo, useState } from 'react';
import { View } from 'react-native'
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
      description: `Unidades conectadas: ${floor.Acs.length}`,
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
      <VerticalCardScrollView data={floorsCards}/>
      <ACToast 
        visible={toastVisible} 
        onClose={() => setToastVisible(false)} 
        acs={selectedFloorACs} 
        lazy={{size: 3, offset: 0}}
        timeLoading={1000}
      />
    </View>
  )
}