import React, { Component } from 'react'
import MonacoEditor from '@uiw/react-monacoeditor';
import Scrollbars from 'react-custom-scrollbars';
import { Row, Col, Tabs } from 'antd';
import Select from 'react-select';
import { authHeader, handleTokenResponse } from '../_helpers';
import { BASE_API_URL } from '../_constants';
const { TabPane } = Tabs;


class CodeInputCard extends Component {


  constructor(props) {
    super(props);

    const { langList } = this.props;

    this.state = {
      lang: langList[0],
      parameters: {}
    }
  }

  handleChange = lang => {
    const { setLang, langList } = this.props;
    const newLang = langList.find((item) => {
      return item === lang;
    })
    setLang(newLang);
    this.getTemplateCode(newLang);
  }

  componentDidMount() {
    const { setCode } = this.props;
    setCode("오른쪽 아래 버튼을 눌러서 언어를 선택해주세요. \n언어를 바꾸면 기존 작성중이던 코드는 저장되지 않습니다.")
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.game !== prevState.game || nextProps.lang !== prevState.lang) {
      console.log(nextProps.lang, nextProps.game.gameversion?.default_setting.parameters ?? {})
      return {
        ...prevState,
        lang: nextProps.lang,
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
    const { langList, code, setCode } = this.props;
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
                    defaultValue={langList[0]}
                    options={langList}
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