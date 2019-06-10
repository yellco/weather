import React, { Component } from 'react';

export default class Popup extends Component {
    render() {
            return (
                <div style={wrapper} onClick={this.props.closePopup}>
                    <div className="Popup" style={timeClass} onClick={this.props.closePopup}>
                        Выберите фон
                    </div>
                </div>
            );
    }
}

const wrapper = {
    width: "100vw",
    height: "100vh",
    background: "rgba( 255, 0, 0, 0.5)",
    position: "fixed",
    zIndex: "9999",
}

const timeClass = {
    width: "auto",
    fontSize: "40px",
    margin: "30px auto",
    boxSizing: "border-box",
    textAlign: "center",
    fontWeight: "bold",
    minHeight: "500px",
    minWidth: "500px",
    position: "absolute",
    zIndex: "99999",
    background: "white",
    borderRadius: "50px",
    border: "2px solid gray"
}