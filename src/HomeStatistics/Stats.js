import React from 'react';
import Stile from './Stats.module.css';


const Stats=function(){
 
return (<div id={Stile.header}>
            <h1>Система управления умным домом</h1>
            <div id={Stile.homestatus}>
					<div id="temperature" className={Stile.statusValue}>
					<p>Температура</p>
                    <div className="value">1°C</div>
                </div>
                <div id="humidity" className={Stile.statusValue}>
                    <p>Влажность воздуха</p>
                    <div className="value">40%</div>
                </div>
                <div id="pressure" className={Stile.statusValue}>
                    <p>Давление</p>
                    <div className="value">720 мм.рт.ст</div>
                </div>
            </div>
		</div>);

}
export default Stats;