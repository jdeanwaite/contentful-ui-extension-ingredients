import React, { Component } from "react";
import "./App.css";
import { initApi } from "./api";

class App extends Component {
  state = {
    api: null,
    value: ""
  };

  async componentDidMount() {
    const api = await initApi();
    api.window.startAutoResizer();
    this.setState({
      value: api.field.getValue(),
      api
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <input
          className="cf-form-input"
          type="text"
          value={value}
          onChange={this._handleChangeValue}
        />
        <button
          className="update-button cf-btn-primary"
          onClick={this._handleClickUpdate}
        >
          Update
        </button>
      </div>
    );
  }

  _handleChangeValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  _handleClickUpdate = () => {
    const { api, value } = this.state;
    api.field.setValue(value);
  };
}

export default App;
