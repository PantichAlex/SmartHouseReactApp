import React from 'react';
import Style from './ControllPanel.module.css'

class ControllPanel extends React.Component{
	
	
	constructor(props){
		
		super(props);
		this.state={
			error:null,
			isLoaded: false,
			devices: []

			};
		this.deviceRender=this.deviceRender.bind(this);		
			
	}
	
	componentDidMount(){
		fetch("http://127.0.0.1:8000/api/devices")
		.then(response=>response.json())
		.then((data)=>{
			
			this.setState({
					isLoaded: true,
					devices: data
			});
			}, (err)=>{
				this.setState({
					isLoaded: true,
					error: err		
				});
	
			});
	}
	deviceRender(){
			const {error, isLoaded, devices}=this.state;
			
			if(!isLoaded){
				
				return(<div> Идет загрузка.....</div>);
			}
			const Buttons=devices.map(item =>(
				<div className={Style.controllBtn}>
				<img src="https://pngicon.ru/file/uploads/microshema-128x128.png" alt="микросхема"/>
				<p>{item.name}</p>
			
			</div>)
			
			);
			return (<div className={Style.container}>{Buttons}</div>);
			

	}
	render(){
			
		return (<div id={Style.ControllPanel}>
					<h1>Панель управления</h1>
					{this.deviceRender()}
				</div>);
	}
}
export default ControllPanel;