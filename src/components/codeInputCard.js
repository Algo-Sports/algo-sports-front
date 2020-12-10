import React, { Component } from 'react'
import MonacoEditor from '@uiw/react-monacoeditor';
import Scrollbars from 'react-custom-scrollbars';
import { Row, Col, Tabs } from 'antd';
import Select from 'react-select';
const { TabPane } = Tabs;

const options = [
  { value: 'python', label: 'python' },
  { value: 'c', label: 'c' },
  { value: 'cpp', label: 'c++' }
]

class CodeInputCard extends Component {
  state = {
    lang : "python",
  }

  handleChange = lang => {
    console.log(lang);
    this.setState({lang: lang})
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  render() {
    const {lang} = this.state;
    const {code, setCode} = this.props;
    return (
      <Tabs type="card" defaultActiveKey="1" className="gameDetailTab height-100">
        <TabPane tab="Code" key="1" className = "height-100" calssName = "padding-10">
          
          <Scrollbars
            className = "height-100" 
            style={{ minHeight: "300px"}}
          >
            <div className = "height-100 padding-10">
              <MonacoEditor
                language={lang.value}
                value={code}
                height = "90%"        
                editorDidMount={this.editorDidMount.bind(this)}        
                onChange={setCode}
                options={{
                  autoIndent: "advanced",
                  autoClosingBrackets: "always",
                  selectOnLineNumbers: true,
                  roundedSelection: false,
                  cursorStyle: 'line',
                  snippetSuggestions: "bottom",
                  automaticLayout: false,
                  theme: 'vs-dark',
                }}
              />
              <Row>
                <Col xs = {{span: 18}} className = "padding-20">
                  <button
                    className = "width-100"
                    style={{ backgroundColor: "#465580", color: "white", border: "none", height: "50px", fontSize: "1.3rem" }}
                    onClick={this.props.changeDescription}
                  >
                    Submit Code!
                  </button>
                </Col>
                <Col xs = {{span: 6}}  className = "padding-20">
                  <Select
                    name="lang"
                    defaultValue={options[0]}
                    options={options}
                    value = {lang}
                    isSearchable={true}
                    onChange={this.handleChange}
                  />
                </Col>
              </Row>
            </div>
            
          </Scrollbars>
        </TabPane>
      </Tabs>

    );
  }
}


export default CodeInputCard;