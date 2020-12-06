import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className = "padding-30" style = {{backgroundColor:"#1F263B", width: "100%", borderTop:"1px solid #465580", minHeight: "200px"}}>
                <h3>
                    @2020 All right Reserved. Algo Sports Team.
                </h3>
                
                <h4 style = {{color:"#465580"}}>
                    ALgo Sports Team Crew: 조익현<a href = "https://github.com/childyouth" target="_blank"> (@childyouth) </a>
                    허태정 <a href = "https://github.com/Aqudi" target="_blank"> (@Aqudi) </a>
                    김신건 <a href = "https://github.com/shinkeonkim" target="_blank"> (@shinkeonkim) </a>
                </h4>
            </div>
        )
    }
}

export default Footer;