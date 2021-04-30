import './App.css';
import csv from 'csvtojson';
import { Component } from 'react';

function App() {
  return (
    <div className="App" stylel={{ margin: 20 }}>
      <Page />
    </div>
  );
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csvToJsonResult: '',
      csvResult: '导入结果：',
      jsonResult: '导入结果：'
    }
  }

  handleCSVFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let content = reader.result;

      csv()
        .fromString(content)
        .then((json) => {
          console.log(json);
          this.setState({ csvToJsonResult: JSON.stringify(json), csvResult: `导入${json.length}条记录` })
        })
    }

    reader.onerror = (error) => {
      console.log(error)
    }
  }

  handleJsonFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let content = JSON.parse(reader.result);
      console.log(content);
      this.setState({ jsonResult: `导入${content.length}条记录` })
    }
  }

  render() {
    return <div style={{ margin: 20 }} >
      <fieldset>
        <legend>CSV转JSON</legend>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="file" onChange={this.handleCSVFile} />
          <b align='left'>{this.state.csvResult}</b>
          <textarea rows="25" cols="10" style={{ marginTop: 10 }} value={this.state.csvToJsonResult} />
        </div>
      </fieldset>
      <fieldset style={{ width: 200 }}>
        <legend>解析JSON</legend>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="file" onChange={this.handleJsonFile} />
          <b align='left'>{this.state.jsonResult}</b>
        </div>
      </fieldset>
    </div>
  }
}

export default App;
