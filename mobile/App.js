import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>dota live</Text>

      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.tournament}>ESL One · BO3 · Game 2</Text>
          <Text style={styles.liveBadge}>● 21:04</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.teamBlock}>
            <View style={[styles.teamIcon, { backgroundColor: '#4C3BCF' }]} />
            <Text style={styles.teamName}>Spirit</Text>
          </View>
          <Text style={styles.score}>1</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.teamBlock}>
            <View style={[styles.teamIcon, { backgroundColor: '#12B886' }]} />
            <Text style={styles.teamNameMuted}>Gaimin</Text>
          </View>
          <Text style={styles.scoreMuted}>0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121016',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1C1926',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#2C2836',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tournament: {
    color: '#8B879A',
    fontSize: 11,
  },
  liveBadge: {
    color: '#E6483F',
    fontSize: 11,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamIcon: {
    width: 24,
    height: 24,
    borderRadius: 7,
    marginRight: 9,
  },
  teamName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  teamNameMuted: {
    color: '#8B879A',
    fontSize: 14,
  },
  score: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  scoreMuted: {
    color: '#5A5666',
    fontSize: 17,
    fontWeight: 'bold',
  },
});