import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import MainSection, { sectionPropTypes } from '../components/MainSection'
import Footer, { TODO_FILTERS, filterPropTypes } from '../components/Footer'
import * as actions from '../actions'

import { SHOW_COMPLETED } from '../constants/TodoFilters'

class App extends Component {
  static propTypes = {
    ...sectionPropTypes,
    ...filterPropTypes
  }
  render() {
    const { todos, actions, filter } = this.props
    const completedCount = todos.filter(TODO_FILTERS[SHOW_COMPLETED]).length
    const activeCount = todos.length - completedCount
    const hasItems = todos && todos.length > 0
    return (
      <div className="app">
        <Helmet>
          <title>TodoMvc</title>
        </Helmet>
        <section className="todoapp">
          <Header addTodo={actions.addTodo} />
          {hasItems &&
            <MainSection
              todos={todos.filter(TODO_FILTERS[filter])}
              actions={actions}
              completedCount={completedCount}
            />}
          {hasItems &&
            <Footer
              filter={filter}
              activeCount={activeCount}
              completedCount={completedCount}
              clearCompleted={actions.clearCompleted}
              setFilter={actions.setFilter}
            />}
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ todos, filter }) => ({ todos, filter })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
