import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className = "padding-30 dark-bg width-100" style = {{borderTop:"1px solid #465580", minHeight: "200px", marginTop: "10%"}}>
                <h3>
                    @2020 All right Reserved. Algo Sports Team.
                </h3>
                
                <h4 className = "font-light-dark-blue">
                    ALgo Sports Team Crew: 조익현<a href = "https://github.com/childyouth" target="_blank" rel="noreferrer noopener"> (@childyouth) </a>
                    허태정 <a href = "https://github.com/Aqudi" target="_blank" rel="noreferrer noopener"> (@Aqudi) </a>
                    김신건 <a href = "https://github.com/shinkeonkim" target="_blank" rel="noreferrer noopener"> (@shinkeonkim) </a>
                </h4>
            </div>
        )
    }
}

export default Footer;