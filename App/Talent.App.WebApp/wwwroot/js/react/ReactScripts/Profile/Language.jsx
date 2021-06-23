/* Language section */
import React from 'react';
import Cookies from 'js-cookie';
import { Form, Input, Select, Table, Icon, Button } from 'semantic-ui-react'

const levelOptions = [
    { key: 'm', text: 'Basic', value: 'Basic' },
    { key: 'n', text: 'Conversational', value: 'Conversational' },
    { key: 'o', text: 'Fluent', value: 'Fluent' },
    { key: 'p', text: 'Native/Bilingual', value: 'Native/Bilingual' }
  ]

export default class Language extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            showAddSection: false,
            showEditSection: false,
            editIdx: -1,
            languageData: [
                {
                    id: 1,
                    language: "German",
                    level: "Basic"
                },
                {
                    id: 2,
                    language: "Nepalese",
                    level: "Fluent"
                }
            ]
        }

        this.addLanguage = this.addLanguage.bind(this)    
        this.saveLanguage = this.saveLanguage.bind(this)
        this.cancelLanguage = this.cancelLanguage.bind(this)
        this.renderAdd = this.renderAdd.bind(this)
        this.renderTable = this.renderTable.bind(this)
        this.toggleState = this.toggleState.bind(this)
    }

    toggleState(id, index) {
        console.log("id is " +id)
        console.log("index is " +index)
        this.setState({
            showEditSection: !this.state.showEditSection,
            editIdx: index
        })
    }

    addLanguage() {
        this.setState({
            showAddSection: true
        })
    }

    saveLanguage() {
        this.setState({
            showAddSection: false
        })
    }

    cancelLanguage() {
        this.setState({
            showAddSection: false
        })
    } 

    render() {
        return (
            <div>
                {this.state.showAddSection ? this.renderAdd() : this.renderTable()}  
            </div>              
        )   
    }

    renderEdit(l) {
        return(
            <Table.Row key={l.id}>
                <Table.Cell>
                    <Form.Input defaultValue={l.language} />
                </Table.Cell>
                <Table.Cell>                             
                    <Form.Select placeholder={l.level} options={levelOptions} />
                </Table.Cell>
                <Table.Cell>        
                    <button type="button" className="ui blue basic button">Update</button>
                    <button type="button" className="ui red basic button" onClick={this.toggleState}>Cancel</button> 
                </Table.Cell>    
            </Table.Row>                         
        )
    }
 
    renderAdd() {
        return(
            <div>
                <div>
                <Form.Group>              
                    <Form.Input
                        placeholder='Add Language' />   
                    <Form.Select placeholder='Language Level' options={levelOptions}  />  
                    <Button color='teal' onClick={this.saveLanguage}>Save</Button>
                    <Button onClick={this.cancelLanguage}>Cancel</Button>       
                </Form.Group>
                </div>
                {this.renderTable()}       
            </div>
       )    
   }
   
   renderTable() {
        return(
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Language</Table.HeaderCell>
                        <Table.HeaderCell>Level</Table.HeaderCell>
                        <Table.HeaderCell>
                            <button type="button" className="ui right floated teal button" onClick={this.addLanguage}>
                                <Icon name="plus" />Add New</button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>   
                    {this.state.languageData.map((l, index) => 
                    (this.state.editIdx === index) ?
                        this.renderEdit(l) :
                        <Table.Row key={l.id}>    
                            <Table.Cell>
                                {l.language}
                            </Table.Cell>
                            <Table.Cell>
                                {l.level}
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{'float': 'right'}}>       
                                    <Icon name='pencil alternate' style={{'paddingRight': '2rem'}} onClick={(e) => {
                                        e.stopPropagation();
                                        this.toggleState(l.id, index); 
                                    }}></Icon>
                                    <Icon name='remove' ></Icon>   
                                </div>             
                            </Table.Cell>   
                        </Table.Row>     
                    )}     
                </Table.Body>
            </Table>
        )    
    }
}