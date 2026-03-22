import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';

export default function Template() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />

            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
                        style={styles.avatar}
                    />
                    <View style={styles.onlineBadge} />
                </View>
                <View style={styles.headerText}>
                    <Text style={styles.name}>Ihor Lialiuk</Text>
                    <Text style={styles.status}>⚡ Маг Flexbox-у • Slytherin</Text>
                </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionRow}>
                <TouchableOpacity activeOpacity={0.7} style={[styles.button, styles.buttonPrimary]}>
                    <Text style={styles.buttonText}>🪄 Закляття</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={[styles.button, styles.buttonSecondary]}>
                    <Text style={styles.buttonText}>🧪 Зілля</Text>
                </TouchableOpacity>
            </View>

            {/* Content Area */}
            <View style={styles.contentWrapper}>
                <Text style={styles.bioTitle}>Журнал заклинань</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scrollArea}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={styles.logCard}>
                        <Text style={styles.bio}>
                            Сьогодні нарешті зрозумів різницю між <Text style={styles.highlight}>justifyContent</Text> та <Text style={styles.highlight}>alignItems</Text>.
                            {"\n\n"}
                            Виявляється, в React Native все перевернуто! Column — це вниз, а row — це вбік. Тепер мої компоненти шикуються рівно, як під дією Імперіусу.
                        </Text>
                    </View>

                    <View style={[styles.logCard, styles.tipCard]}>
                        <Text style={styles.tipText}>
                            💡 <Text style={{fontWeight: 'bold'}}>Порада:</Text> Завжди задавай розміри для Image, інакше магія не спрацює.
                        </Text>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D', // Глибокий чорний
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: 10,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#2e8b57',
    },
    onlineBadge: {
        position: 'absolute',
        bottom: 5,
        right: 2,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#4CAF50',
        borderWidth: 2,
        borderColor: '#0D0D0D',
    },
    headerText: {
        marginLeft: 18,
    },
    name: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    status: {
        color: '#2e8b57',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 4,
        opacity: 0.9,
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 25,
    },
    button: {
        flex: 0.48,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#2e8b57',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    buttonPrimary: {
        backgroundColor: '#2e8b57',
    },
    buttonSecondary: {
        backgroundColor: '#1A1A1A',
        borderWidth: 1,
        borderColor: '#333',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 25,
        paddingHorizontal: 20,
    },
    bioTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
        paddingLeft: 5,
    },
    scrollArea: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    logCard: {
        backgroundColor: '#1F1F1F',
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#2e8b57',
    },
    highlight: {
        color: '#2e8b57',
        fontWeight: 'bold',
        fontFamily: 'Courier', // Надає вигляду коду
    },
    bio: {
        color: '#D1D1D1',
        fontSize: 16,
        lineHeight: 24,
    },
    tipCard: {
        backgroundColor: 'rgba(46, 139, 87, 0.1)',
        borderLeftColor: '#4CAF50',
        borderStyle: 'dashed',
    },
    tipText: {
        color: '#AAA',
        fontSize: 14,
        fontStyle: 'italic',
    }
});