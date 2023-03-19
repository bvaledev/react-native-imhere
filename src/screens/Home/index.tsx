import React, { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles'

export function Home() {
  const [participant, setParticipant] = useState('')
  const [paticipants, setParticipants] = useState<string[]>([])

  function handleParticipantAdd() {
    if(paticipants.includes(participant)){
      return Alert.alert('Participante já existe', 'Já existe um participante com esse nome na lista!')
    }

    setParticipants((current) => [...current, participant])
    setParticipant('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((prev) => prev.filter((participant) => participant !== name))
          Alert.alert('Deletado!')
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Aniversário do Lucas</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          value={participant}
          onChangeText={setParticipant}/>

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={paticipants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (<Text style={styles.listEmptyText}>Ninguém chegou no envento ainda!</Text>)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
