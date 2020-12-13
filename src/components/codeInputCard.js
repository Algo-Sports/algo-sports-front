import React, { Component } from 'react'
import MonacoEditor from '@uiw/react-monacoeditor';
import Scrollbars from 'react-custom-scrollbars';
import { Row, Col, Tabs } from 'antd';
import Select from 'react-select';
const { TabPane } = Tabs;

import { authHeader, handleTokenResponse } from '../_helpers';
import { BASE_API_URL } from '../_constants';

const options = [
  {
    value: 'python', label: 'Python (3.8.1)',
    language_code: 38,
  },
  {
    value: 'c', label: 'C (GCC 9.2.0)',
    language_code: 7,
  },
  {
    value: 'cpp', label: 'C++ (GCC 9.2.0)',
    language_code: 9,
  }
]

class CodeInputCard extends Component {
  state = {
    lang: options[0],
    parameters: {}
  }

  handleChange = lang => {
    const newLang = options.find((item) => {
      return item === lang;
    })
    this.setState({ ...this.state, lang: newLang });
    this.getTemplateCode(newLang);
  }

  componentDidMount() {
    console.log("componentDidMount");
    const { lang, parameters } = this.state;
    console.log(parameters)
    this.getTemplateCode(lang);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.game !== prevState.game) {
      console.log(nextProps.game.gameversion?.default_setting.parameters ?? {})
      return {
        ...prevState,
        parameters: nextProps.game.gameversion?.default_setting.parameters ?? {}
      }
    }
    return null;
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  getTemplateCode(lang) {
    console.log("getTemplateCode")
    const { parameters } = this.state;
    const { setCode } = this.props;

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({ "parameters": parameters[lang.label] ?? [] }),
      headers: authHeader(),
    }

    fetch(`${BASE_API_URL}/codes/programming-language/${lang.language_code}/get_solution_template/`, requestOptions)
      .then(res => handleTokenResponse(res, `${BASE_API_URL}/codes/programming-language/${lang.language_code}/get_solution_template/`, requestOptions))
      .then(res => {
        console.log(res);
        setCode(res.template_code);
        return res;
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { lang } = this.state;
    const { code, setCode } = this.props;

    // console.log(JSON.stringify(this.props))

    return (
      <Tabs type="card" defaultActiveKey="1" className="gameDetailTab height-100">
        <TabPane tab="Code" key="1" className="height-100" calssName="padding-10">

          <Scrollbars
            className="height-100"
            style={{ minHeight: "300px" }}
          >
            <div className="height-100 padding-10">
              <MonacoEditor
                language={lang.value}
                value={code}
                height="90%"
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
                  defaultValue: "asdass",
                }}
              />
              <Row>
                <Col xs={{ span: 18 }} className="padding-20">
                  <button
                    className="width-100"
                    style={{ backgroundColor: "#465580", color: "white", border: "none", height: "50px", fontSize: "1.3rem" }}
                    onClick={this.props.submitCode}
                  >
                    Submit Code!
                  </button>
                </Col>
                <Col xs={{ span: 6 }} className="padding-20">
                  <Select
                    name="lang"
                    defaultValue={options[0]}
                    options={options}
                    value={lang}
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