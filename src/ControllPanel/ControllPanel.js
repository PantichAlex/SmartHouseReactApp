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
		this.devicesRender=this.devicesRender.bind(this);		
		this.deviceClick=this.deviceClick.bind(this);
	}
	
	deviceClick(id){	
		let stat=this;
		return function(e){
				stat.setState({
					
					isLoaded: false
				});
			
		}
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
	devicesRender(){
			const {error, isLoaded, devices}=this.state;
			
			if(!isLoaded){
				
				return(<div> Идет загрузка.....</div>);
			}
			const Buttons=devices.map(item =>(
				<div className={Style.controllBtn} onClick={this.deviceClick(item.id)}>
				<img src={item.iconPath} alt="микросхема"/>
				<p>{item.name}</p>
			
			</div>)
			
			);
			return (<div className={Style.container}>{Buttons}</div>);
			

	}
	render(){
			
		return (<div id={Style.ControllPanel}>
					<h1>Панель управления</h1>
					
					{this.devicesRender()}
				</div>);
	}
}
export default ControllPanel;