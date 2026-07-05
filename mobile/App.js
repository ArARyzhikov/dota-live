import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const SERVER_URL = 'http://192.168.1.6:3000/matches';

export default function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(SERVER_URL)
      .then(response => response.json())
      .then(data => {
        setMatches(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Ошибка загрузки:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator color="#E6483F" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>dota live</Text>

      {matches.map(match => (
        <View key={match.match_id} style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.tournament}>{match.league_name}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.teamName}>{match.radiant_name || 'Radiant'}</Text>
            <Text style={styles.score}>{match.radiant_score}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.teamNameMuted}>{match.dire_name || 'Dire'}</Text>
            <Text style={styles.scoreMuted}>{match.dire_score}</Text>
          </View>
        </View>
      ))}
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
    marginBottom: 10,
  },
  cardTop: {
    marginBottom: 12,
  },
  tournament: {
    color: '#8B879A',
    fontSize: 11,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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