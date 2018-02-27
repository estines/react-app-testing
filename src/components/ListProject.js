import React, { Component } from "react";
import { Card, Table } from "antd";
import "../css/Main.css";

export default class Search extends Component {
  render() {

    const columns = [
      { title: 'Edit', dataIndex: '', key: 'x', render: data => <a value={data.Id}>Edit</a> },
      { title: 'Delete', dataIndex: '', key: 'rm', render: () => <a>Delete</a> },
      { title: "Project Code", dataIndex: "ProjectCode", key: "projectcode" },
      { title: "Project Name", dataIndex: "ProjectName", key: "projectname" },
      { title: "Status", dataIndex: "ProjectStatus", key: "status" },
      { title: "List update date", dataIndex: "listupdatedate", key: "listupdatedate" },
    ]
    
    return (
      <Card className="list">
        <Table
          dataSource={this.props.searchData.length === 0 ? this.props.data : this.props.searchData}
          columns={columns}
          rowKey={record => record.Id}
          pagination={{ pageSize: 20 }}
        />
      </Card>
    );
  }
}
