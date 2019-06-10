import React, { Component } from 'react';

export default class Popup extends Component {
    render() {
            return (
                <div style={wrapper} onClick={this.props.closePopup}>
                   <div className="Popup" style={timeClass} onClick={this.props.closePopup}>
                        Выберите фон
                        <div style={items}>
                            <div style={item}>1</div>
                            <div style={item}>2</div>
                            <div style={item}>3</div>
                            <div style={item}>4</div>
                            <div style={item}>5</div>
                            <div style={item}>6</div>
                        </div>
                    </div>
                </div>
            );
    }
}
const items = {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around"
}

const item = {
    border: "1px solid black",
    borderRadius: "4px",
    margin: "20px",
    padding: "60px"
}

const wrapper = {
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.25)",
    position: "fixed",
    zIndex: "9999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const timeClass = {
    width: "auto",
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    minHeight: "200px",
    minWidth: "200px",
    position: "absolute",
    zIndex: "99999",
    background: "white",
    borderRadius: "4px",
    boxShadow: "0 0 10px 0 rgba(34, 34, 34, 0.1)"
}