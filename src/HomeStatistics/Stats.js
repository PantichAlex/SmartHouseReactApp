import React from 'react';
import Style from './Stats.module.css';


const Stats=function(){
 
return (<div id={Style.header}>
            <h1>Система управления умным домом</h1>
            <div id={Style.homestatus}>
					<div id="temperature" className={Style.statusValue}>
					<p>Температура</p>
                    <div className="value">1°C</div>
                </div>
                <div id="humidity" className={Style.statusValue}>
                    <p>Влажность воздуха</p>
                    <div className="value">40%</div>
                </div>
                <div id="pressure" className={Style.statusValue}>
                    <p>Давление</p>
                    <div className="value">720 мм.рт.ст</div>
                </div>
            </div>
		</div>);

}
export default Stats;