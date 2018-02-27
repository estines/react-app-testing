import React, { Component } from 'react'
import { Layout } from "antd"
import Sidebar from './Sidebar'
import Content from './Content'

class Body extends Component {
    render() {
        const { collapsed, data, searchData, onSearch } = this.props
        return (
            <Layout>
                <Sidebar collapsed={collapsed} />
                <Content datasource={data} searchDatasource={searchData} search={onSearch}/>
            </Layout>
        )
    }
}

export default Body;