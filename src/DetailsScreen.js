import React, {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export class DetailsScreen extends Component {
  constructor(props) {
     super(props)
  }

  render() {
      const {itemId, param1, param2} = this.props.route.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20}}>Details Screen</Text>
        <Text style={{fontSize: 20, marginTop: 10}}>Item id: {JSON.stringify(itemId)}</Text>
        <Text style={{fontSize: 20, marginTop: 10}}>param1: {JSON.stringify(param1)}</Text>
        <Text style={{fontSize: 20, marginTop: 10}}>param2: {JSON.stringify(param2)}</Text>
      </View>
   );
  }
}