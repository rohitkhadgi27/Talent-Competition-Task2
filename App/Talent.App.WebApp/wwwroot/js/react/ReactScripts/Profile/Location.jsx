import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Form, Input, Select } from 'semantic-ui-react'

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

export class Address extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showEditSection: false
        }
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    openEdit() {
        this.setState({
            showEditSection: true
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

   
    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        return (
            <React.Fragment>
            <Form.Group widths='equal'>              
                <Form.Field
                    control={Input}
                    label='Number'
                />
                <Form.Field
                    control={Input}
                    label='Street'
                />
                <Form.Field
                    control={Input}
                    label='Suburb'
                />
            </Form.Group>   
            <Form.Group widths='equal'> 
                <Form.Field
                    control={Select}
                    options={genderOptions}
                    label={{ children: 'Country', htmlFor: 'form-select-control-country' }}
                    search
                    searchInput={{ id: 'form-select-control-country' }}
                />
                <Form.Field
                    control={Select}
                    options={genderOptions}
                    label={{ children: 'City', htmlFor: 'form-select-control-city' }}
                    search
                    searchInput={{ id: 'form-select-control-city' }}
                />
                <Form.Field
                    control={Input}
                    label='Post Code'
                />    
            </Form.Group>
            <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
            <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
          </React.Fragment>
        )
    }

    renderDisplay() {
        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address: </p>
                        <p>City: </p>
                        <p>Country: </p>
                    </React.Fragment>
                    <div style={{'paddingBottom': '2.5rem'}}>
                        <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
  ]

export class Nationality extends React.Component {
    constructor(props) {
        super(props)    
    }

    render() {
        return(
            <Select placeholder='Select your nationality' options={countryOptions} />  
        )      
    }
}



