import React, { Component } from 'react'
import MonacoEditor from '@uiw/react-monacoeditor';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

class CodeInputCard extends Component {
  render() {
    const code = this.props.code;
    return (
      <Tabs type="card" defaultActiveKey="1" className="gameDetailTab height-100">
        <TabPane tab="Code" key="1" className = "height-100" calssName = "padding-10">
          <div className = "height-100 padding-10">
            <MonacoEditor
              language="python"
              value={code}
              height = "90%"
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
            <div style = {{height: "9%", paddingTop: "1%"}}>
              <button
                style={{ backgroundColor: "#465580", color: "white", border: "none", height: "50px", width: "80%", margin: "0 10% 0 10%", fontSize: "1.3rem" }}
                onClick={this.props.changeDescription}
              >
                Submit Code!
              </button>
            </div>
          </div>
        </TabPane>
      </Tabs>

    );
  }
}


export default CodeInputCard;