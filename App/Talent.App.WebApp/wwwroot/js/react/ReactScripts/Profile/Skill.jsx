/* Skill section */
import React from 'react';
import Cookies from 'js-cookie';
import { Form, Input, Select, Table, Icon } from 'semantic-ui-react'

const levelOptions = [
    { key: 'm', text: 'Beginner', value: 'Beginner' },
    { key: 'n', text: 'Intermediate', value: 'Intermediate' },
    { key: 'o', text: 'Expert', value: 'Expert' }
  ]

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddSection: false,
            showEditSection: false,
            editIdx: -1,
            skillData: [
                {
                    id: 1,
                    skill: "C#",
                    level: "Basic"
                },
                {
                    id: 2,
                    skill: "Javascript",
                    level: "Advanced"
                }
            ]
        }

        this.addSkill = this.addSkill.bind(this)    
        this.saveSkill = this.saveSkill.bind(this)
        this.cancelSkill = this.cancelSkill.bind(this)
        this.renderAdd = this.renderAdd.bind(this)
        this.renderTable = this.renderTable.bind(this)
        this.toggleState = this.toggleState.bind(this)
      
    };

    toggleState(id, index) {
        console.log("id is " +id)
        console.log("index is " +index)
        this.setState({
            showEditSection: !this.state.showEditSection,
            editIdx: index
        })
    }

    addSkill() {
        this.setState({
            showAddSection: true
        })
    }

    saveSkill() {
        this.setState({
            showAddSection: false
        })
    }

    cancelSkill() {
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

    renderEdit(s) {
        return(
            <Table.Row key={s.id}>
                <Table.Cell>
                    <Form.Input defaultValue={s.skill} /> 
                </Table.Cell>
                <Table.Cell>
                    <Form.Select placeholder={s.level} options={levelOptions} />  
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
                            placeholder='Add Skill' />   
                        <Form.Select placeholder='Skill Level' options={levelOptions} /> 
                        <button type="button" className="ui teal button" onClick={this.saveSkill}>Save</button>
                        <button type="button" className="ui button" onClick={this.cancelSkill}>Cancel</button>       
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
                        <Table.HeaderCell>Skill</Table.HeaderCell>
                        <Table.HeaderCell>Level</Table.HeaderCell>
                        <Table.HeaderCell>
                            <button type="button" className="ui right floated teal button" onClick={this.addSkill}>
                            <Icon name="plus" />Add New</button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>   
                    {this.state.skillData.map((s, index) => 
                    (this.state.editIdx === index) ?
                        this.renderEdit(s) :
                        <Table.Row key={s.id}>    
                            <Table.Cell>
                                {s.skill}
                            </Table.Cell>
                            <Table.Cell>
                                {s.level}
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{'float': 'right'}}>       
                                    <Icon name='pencil alternate' style={{'paddingRight': '2rem'}} onClick={(e) => {
                                        e.stopPropagation();
                                        this.toggleState(s.id, index); 
                                    }}></Icon>
                                    <Icon name='remove'></Icon>  
                                </div>          
                            </Table.Cell>   
                        </Table.Row>     
                    )}     
                </Table.Body>
            </Table>
        )    
    }
}

