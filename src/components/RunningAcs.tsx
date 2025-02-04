import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import Floor from '../entities/Floor';
import { theme } from '../core/theme';
import AC from '../entities/AC';

interface Props {
    floors : Floor[];
  }

export default function RunningAcs({ floors }: Props) {
     const runningACs = floors?.flatMap(floor => floor.Acs.filter(ac => ac.status.isRunning));
    return (
        <View style={styles.runningACsContainer}>
            {runningACs.map((ac : AC) => (
                <Card
                    key={ac.id}
                    style={styles.runningAC}
                    elevation={0}
                >
                    <Card.Content>
                        <Text style={styles.runningACName}>{ac.name}</Text>
                        <Text style={styles.runningACLocation}>{ac.location}</Text>
                    </Card.Content>
                </Card>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    runningACsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    runningAC: {
        borderRadius: 10,
        backgroundColor: theme.colors.background,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    runningACName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
        filter: `drop-shadow(0 0 10px ${theme.colors.shadow})`,
    },
    runningACLocation: {
        fontSize: 14,
        color: 'white',
        filter: `drop-shadow(0 0 10px ${theme.colors.shadow})`,
    },
})

