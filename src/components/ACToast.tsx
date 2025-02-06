import React, { memo, useEffect, useMemo, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Modal,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import AComponent from './AComponent';
import AC from '../entities/AC';
import { createStyles } from './styles/ACToastStyle';
import { useTheme } from '../providers/ThemeProvider';

interface ACToastProps {
    visible: boolean;
    onClose: () => void;
    acs: AC[];
    lazy?: { size: number; offset: number };
    timeLoading?: number;
}

const ACToast = ({ visible, onClose, acs, lazy, timeLoading }: ACToastProps) => {
    const [loading, setLoading] = useState(true);
    const [acsData, setAcsData] = useState<AC[]>([]);

    const { currentTheme } = useTheme();
    const styles = createStyles(currentTheme);

    const onEndReached = () => {
        if (lazy && !loading) {
            setLoading(true);
            const offset = acsData.length;
            const size = lazy.size;
            const newData = acs.slice(offset, offset + size);
            setAcsData([...acsData, ...newData]);
            setLoading(false);
        }
    };

    useEffect(() => {
        const offset = lazy ? lazy.offset : 0;
        const size = lazy ? lazy.size : acs.length;
        const newData = acs.slice(offset, offset + size);
        setAcsData(newData);
        if (visible) {
            setLoading(true);
            setTimeout(() => setLoading(false), timeLoading || 500);
        }
    }, [visible]);

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onShow={() => setLoading(true)}
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
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>

                    {loading ? (
                        <ActivityIndicator size="large" color="#00ff00" />
                    ) : (
                        <FlatList
                            data={acsData}
                            onEndReached={onEndReached}
                            renderItem={({ item }) => (
                                <AComponent {...item} />
                            )}
                            keyExtractor={item => item.id}
                            style={styles.flatList}
                            onEndReachedThreshold={0.2}
                        />
                    )}
                </View>
            </BlurView>
        </Modal>
    );
};

export default memo(ACToast);


