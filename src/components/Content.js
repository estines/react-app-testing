import React, { Component } from 'react'
import { Layout, Button, Breadcrumb } from "antd"
import SearchProject from "./SearchProject"
import ListProject from "./ListProject"
const { Content } = Layout

class Contents extends Component {
    render() {
        let { datasource, searchDatasource, search } = this.props
        return (
            <Content
                style={{
                    margin: "0px",
                    padding: 10,
                    background: "#fff",
                    minHeight: 280
                }}
            >
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Project</Breadcrumb.Item>
                </Breadcrumb>
                <hr />
                <h2>Project Profile</h2>
                <div style={{ textAlign: "right" }}>
                    <Button type="primary" >New</Button>
                </div>
                <SearchProject onSearch={search}/>
                <ListProject data={datasource} searchData={searchDatasource} />
            </Content>
        )
    }
}

export default Contents;