import { StyleSheet } from 'react-native';
import { theme } from '../../core/theme';


export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    modal: {
        width: '95%',
        maxHeight: '75%',
        backgroundColor: theme.colors.background,
        borderRadius: 20,
        padding: 10
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        fontSize: 20
    },
    flatList : {
        marginBottom: 10,
        width: '100%'
    }
});
