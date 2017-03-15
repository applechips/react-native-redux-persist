import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './notesListRedux'
import List from './List'
import Input from './Input'
import Header from './Header'

const mapStateToProps = (state) => ({
  notes: state.notes,
})

class App extends Component {

  onAddNotes = (text) => {
    const {dispatch} = this.props

    // `dispatch(action)` is a Store Method. it dispatches an action. this is the only way to trigger a state change.
    dispatch(actionCreators.add(text))
  }

  onRemoveNotes = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {notes} = this.props

    return (
      <View>
        <Header>
          Food
        </Header>
        <Input
          placeholder={'Note'}
          onSubmitEditing={this.onAddNotes}
        />
        <List
          list={notes}
          onPressItem={this.onRemoveNotes}
        />
      </View>
    )
  }
}

// `connect(mapStateToProps)` will help the new component subscribe to Redux store updates -- part of react-redux
export default connect(mapStateToProps)(App)
