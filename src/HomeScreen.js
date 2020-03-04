import React, {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 18}}>Home Screen</Text>
          <TouchableOpacity style={{marginTop: 20}}
          onPress={() => this.props.navigation.navigate('Details', {itemId: 86, param1: 'param1 here', param2: 'param2 here'})}
          >
            <Text style={{fontSize: 20}}>Go to Detail Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
  }
}