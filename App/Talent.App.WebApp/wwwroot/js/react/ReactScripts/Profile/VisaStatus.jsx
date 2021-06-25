import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { Form, Input, Button } from 'semantic-ui-react'

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visaTypes: [
                { key: 1, value: 'citizen', text: 'Citizen' },
                { key: 2, value: 'permanent resident', text: 'Permanent Resident' },
                { key: 3, value: 'work visa', text: 'Work Visa' },
                { key: 4, value: 'student visa', text: 'Student Visa' },
              ],
              visaExpiryShowSection: false
        }
        this.renderVisaExpiry = this.renderVisaExpiry.bind(this);    
    }

    renderVisaExpiry(){
        return(
            <React.Fragment>
                <Form.Input label='Visa expiry date' placeholder="Enter Your Expiry Date" />
                <button type="button" className="ui teal button" style={{'marginTop': '20px'}}>Save</button>
            </React.Fragment>
        )     
    }
    
    render() {
        return( 
            <Form.Group>            
                <Form.Select label='Visa Type' placeholder='Select Visa Status' options={this.state.visaTypes} onChange={(e, data)=>{
                    const {value} = data;
                    const {key} = data.options.find(d => d.value === value);
                    if(key == 1 || key == 2){
                        this.setState({
                            visaExpiryShowSection: false
                        })
                    }else{
                        this.setState({
                            visaExpiryShowSection: true
                        })
                    }          
                }}  /> 
                {this.state.visaExpiryShowSection ? this.renderVisaExpiry() : ''}
            </Form.Group>     
           
        )    
    }
}