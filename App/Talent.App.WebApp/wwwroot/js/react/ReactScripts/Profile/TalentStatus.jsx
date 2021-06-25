import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react';
import { SingleInput } from '../Form/SingleInput.jsx';

export default class TalentStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)    
    }

    handleChange(e, {value}){
        this.setState({
            value: value
        })
    }
    
    render() {
        return(
            <React.Fragment>
                <Form.Field>
                    <b>Current Status</b> 
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Actively looking for a job'
                        name='checkboxRadioGroup'
                        value='1'
                        checked={this.state.value === '1'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Not looking for a job at the moment'
                        name='checkboxRadioGroup'
                        value='2'
                        checked={this.state.value === '2'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Currently employed but open to offers'
                        name='checkboxRadioGroup'
                        value='3'
                        checked={this.state.value === '3'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Will be available on later date'
                        name='Will be available on later date'
                        value='4'
                        checked={this.state.value === '4'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
            </React.Fragment>
        )   
    }
}