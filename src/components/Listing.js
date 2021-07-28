import { Table } from "antd";
import React, { Component } from "react";
import img from "../assets/icon.png";
const columns = [
  {
    title: "",
    dataIndex: "img",
    key: "img",
  },
  {
    title: "item no.",
    dataIndex: "item",
    key: "item",
  },
  {
    title: "Source",
    dataIndex: "src",
    key: "src",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Sell",
    dataIndex: "sell",
    key: "sell",
  },
  {
    title: "Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Profile",
    dataIndex: "profile",
    key: "profile",
  },
  {
    title: "Markup",
    dataIndex: "markup",
    key: "markup",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Created on",
    dataIndex: "created",
    key: "created",
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    img: <img src={img} height={30} />,
    item: 1234546789,
    src: "Amazon",
    title: "title the of product abc efd xyz",
    sell: 30.4,
    cost: 34.44,
    profile: 309,
    markup: <div className="pl-2">30%</div>,
    stock: (
      <div className="pl-1">
        <i className="d-green far fa-check-circle"></i> 2
      </div>
    ),
    created: (
      <div className="d-flex align-items-center">
        <div class="d-blue">13/07/2021 12:56</div>
        <div className="lh-1">
          {" "}
          <button className="fas fa-edit btn border-0 bg-trans mr-2 ml-3 p-0"></button>
        </div>
        <div className="lh-1">
          {" "}
          <button className="fas fa-ellipsis-v btn border-0 bg-trans mr-2 ml-3 p-0"></button>
        </div>
      </div>
    ),
  });
}
console.log(data);

class Listing extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <React.Fragment>
        <div className="bg-white rounded">
          <div className="row mx-auto p-3 align-items-center">
            <div className="col-md-2 col-3 mr-3 d-blue">5 selected</div>
            <div className="col-md-5 col-8 mr-3 bg-lighter br-15 p-2">
              <div className="row d-blue">
                <div className="col border-right border-primary">
                  Edit 5 Listings
                </div>
                <div className="col border-right border-primary">
                  Copy 5 Listings
                </div>
                <div className="col">Optimize 5 Listings</div>
              </div>
            </div>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Listing;
