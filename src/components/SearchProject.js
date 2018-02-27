import React, { Component } from "react";
import { Card, Input, Select, Form, Button } from "antd";
import "../css/Main.css";
const FormItem = Form.Item;
const { Option } = Select;
let text = ''

export default class Search extends Component {
  onKeyPressHandler(event, callback) {
    if (event.key === `Enter`) {
      callback(text.input.value.trim())
      // text.input.value = ''
    }
  }

  render() {
    let { onSearch } = this.props
    return (
      <Card>
        <Form>
          <FormItem
            label="Project Code"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 5 }}
          >
            <Input placeholder="Search for Project Code" />
          </FormItem>
          <FormItem
            label="Project Name"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 10 }}
          >
            <Input
              ref={node => text = node}
              placeholder="Search for Project Name"
              onKeyPress={(e) => this.onKeyPressHandler(e, onSearch)}
            // onChange={this.onChangeHandler}
            />
          </FormItem>

          <FormItem
            label="Status"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 5 }}
          >
            <Select
              placeholder="Select Status"
            >
              <Option value="male">All</Option>
              <Option value="male">Action</Option>
              <Option value="male">Inactive</Option>
            </Select>
          </FormItem>
          <FormItem
          //   wrapperCol={{ span: 12, offset: 5 }}
          >
            <Button type="primary">
              Save
            </Button>
            <Button type="primary">
              Cancel
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}
