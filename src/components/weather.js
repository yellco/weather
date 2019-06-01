import React from "react";

const Weather = (props) => (
        <div className="weather">
            { props.city && 
                <div>
                    <p>Местоположение: {props.city}, {props.country}</p>
                    <p>Температура: {props.temp} С</p>
                    <p>Давление: {props.pressure}</p>
                    <p>Заход солнца: {props.sunset}</p>
                </div>
            }
            { props.error &&
                <div>{ props.error }</div>
            }
        </div>
)

// class Weather extends React.Component {
//     render(){
//         return (
//             <div></div>
//         )
//     }
// }

export default Weather;