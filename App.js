import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { connect } from 'react-redux'

import { actionCreators } from './src/notesListRedux'
import List from './src/components/List'
import Input from './src/components/Input'
import Header from './src/components/Header'


const mapStateToProps = (state) => ({
  notes: state.notes,
})

class App extends Component {
  onAddNotes = (text) => {
    const { dispatch } = this.props

    // `dispatch(action)` is a Store Method. it dispatches an action. this is the only way to trigger a state change.
    dispatch(actionCreators.add(text))
  }

  onRemoveNotes = (index) => {
    const { dispatch } = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {notes} = this.props

    return (
      <View>
        {/* <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo} */}
        
        <List
          list={notes}
          onPressItem={this.onRemoveNotes}
        />
      </View>
    )
  }
}

export default App;

// `connect(mapStateToProps)` will help the new component subscribe to Redux store updates -- part of react-redux
