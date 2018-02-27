import React, { Component } from "react"
import "./css/App.css"
// import Footer from "./components/Footer"
import Navbar from './components/Navbar'
import Body from './components/Body'
const url = `http://localhost:3000/project/`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      listAllProject: [],
      listAllIssue: [],
      listSearch: []
    }
    this.toggleHandler = this.toggleHandler.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
  }

  componentDidMount() {
    this.fetchGet('')
  }

  async fetch(route = '', opts = {}) {
    let data = await fetch(url + route, opts)
      .then(res => {
        return res.json()
      })
    return data
  }

  async fetchGet(route) {
    let result = await this.fetch(route)
    if (!route) {
      this.setState({
        listAllProject: [...result]
      })
    }
  }

  async fetchPost(route, payload) {
    let data
    const result = await this.fetch(route, {
      method: 'POST',
      Headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (result) {
      if (payload.ProjectName) {
        // Project Entry
        data = {
          Id: result,
          ProjectCode: payload.ProjectCode,
          ProjectName: payload.ProjectName,
          ProjectStatus: payload.ProjectStatus
        }
        this.setState({
          listAllProject: [...this.state.listAllProject, data]
        })
      } else {
        // Issue Entry
        data = {
          Id: result
        }
        this.setState({
          listAllIssue: [...this.state.listAllIssue, data]
        })
      }
    }
  }

  async fetchPatch(route, id, payload) {
    let data
    const result = await this.fetch(route, {
      method: 'PATCH',
      Headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (result) {
      if (payload.ProjectCode) {
        // Project Entry
        data = {
          Id: id,
          ProjectCode: payload.ProjectCode,
          ProjectName: payload.ProjectName,
          ProjectStatus: payload.ProjectStatus
        }
        this.setState({
          listAllProject: [...(this.state.listAllProject.map(item => {
            if (item.Id === id) {
              return data
            }
            return item
          }))]
        })
      } else {
        // Issue Entry
        data = {
          Id: result
        }
        this.setState({
          listAllIssue: [...(this.state.listAllIssue.map(item => {
            if (item.Id === id) {
              return data
            }
            return item
          }))]
        })
      }

    }
  }

  async fetchDelete(route, id) {
    let result = await this.fetch(route + id, {
      method: 'DELETE'
    })

    if (result) {
      if (!/issue/.test(route)) {
        this.setState({
          listAllProject: [...(this.state.listAllProject.filter(item => {
            return item.Id !== id
          }))]
        })
      } else {
        this.setState({
          listAllIssue: [...(this.state.listAllIssue.filter(item => {
            return item.Id !== id
          }))]
        })
      }
    }
  }

  toggleHandler() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  searchHandler(keyword) {
    let regExp = new RegExp(keyword, 'i')
    this.setState({
      listSearch: [
        ...this.state.listAllProject.filter(item => {
          return regExp.test(item.ProjectName)
        }
        )]
    })
  }

  render() {
    return (
      <div>
        <Navbar
          collapsed={this.state.collapsed}
          onToggle={this.toggleHandler}
        />
        <Body
          collapsed={this.state.collapsed}
          data={this.state.listAllProject}
          searchData={this.state.listSearch}
          onSearch={this.searchHandler}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;