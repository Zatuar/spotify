import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import styles from './landing.styles'
import landingServices from '../landing/landing.services'
import { selectVins, updateVins } from '../landing/landing.redux'
import { useSelector, useDispatch } from 'react-redux'

const api = landingServices.create();
const Landingfct = ({navigation}) => {
  const dispatch = useDispatch()
  const vins1 = useSelector((state) => state.landing.vins)
  const vins2 = useSelector(selectVins)

  const [vins, setVins] = useState(vins1)
  const [vendeurs, setVendeurs] = useState([])

  useEffect(() => {
    console.log('vins stockés:', vins)
  }, []);

  const recupererVins = async () => {
    const response = await api.getVins()
    if(response.ok && response.data){
      dispatch(updateVins(response.data))
      setVins(response.data)
    }
  }

  const goToLanding = () => {
    navigation.navigate('landing')
  }

  return (
    <View>
      <TouchableOpacity style={styles.button3}
      onPress={recupererVins}>
        <Text style={styles.textButton2}>Liste des vins Fonctions</Text>
      </TouchableOpacity>
      <Text>
        liste des vins:
      </Text>
      <FlatList
      data={vins}
      renderItem={({item, index}) => (
        <Text>{item.title}</Text>
      )}
      />

      <TouchableOpacity style={styles.button3}
        onPress={goToLanding}>
          <Text style={styles.textButton2}>Ecran par Classe</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Landingfct;
