import React from 'react';
import Style from './ControllPanel.module.css'

function getDevices(){
	
	
	
}
function fetchDevices(){
	
	return
}
const ControllPanel=function(){
	var arr=new Array(25);
	for(var i=0; i<arr.length; ++i){
		arr[i]=i+1;
		
	}	
	
	
	

	var devices=getDevices();

	const test=(<p>{JSON.stringify(devices)}</p>);
	
	const Btns=arr.map(x => (
	<div>
	
	<img src="https://pngicon.ru/file/uploads/microshema-128x128.png" alt="микросхема"/>
		<p>Устройство {x}</p>
	</div> ));
	
	
	return (<div id={Style.ControllPanel}>
				{test}
				<h1>Панель управления</h1>
				<div className={Style.container}>
				
					{Btns}
				</div>
			
			</div>);
}

export default ControllPanel;