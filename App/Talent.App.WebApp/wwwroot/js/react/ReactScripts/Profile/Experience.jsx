/* Experience section */
import React from 'react';
import Cookies from 'js-cookie';
import { Form, Input, Select, Table, Icon, Button } from 'semantic-ui-react'

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            showAddSection: false,
            showEditSection: false,
            editIdx: -1,
            experienceData: [
                {
                    id: 1,
                    company: "Company1",
                    position: "Software Developer",
                    responsibilites: "Develop web applications",
                    start: "27th Aug, 2017",
                    end: "27th Aug, 2018"

                },
                {
                    id: 2,
                    company: "Company2",
                    position: "Software Developer",
                    responsibilites: "Front-end development",
                    start: "27th Aug, 2018",
                    end: "27th Aug, 2018"
                }
            ]
        }

        this.addExperience = this.addExperience.bind(this) 
        this.saveExperience = this.saveExperience.bind(this)   
        this.updateExperience = this.updateExperience.bind(this)
        this.cancelExperience = this.cancelExperience.bind(this)
        this.renderAdd = this.renderAdd.bind(this)
        this.renderTable = this.renderTable.bind(this)
        this.toggleState = this.toggleState.bind(this)
    }

    toggleState(index) {
        this.setState({
            showEditSection: !this.state.showEditSection,
            editIdx: index
        })
    }

    addExperience() {
        this.setState({
            showAddSection: true
        })
    }

    saveExperience() {
        this.setState({
            showAddSection: false
        })
    }

    updateExperience() {
        this.setState({
            showEditSection: false
        })
    }

    cancelExperience() {
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

    renderEdit(exp) {
        return(
            <Table.Row key={exp.id}>
                <Table.Cell colSpan="6">
                    <React.Fragment>
                        <Form.Group widths={2}>
                            <Form.Input label='Company' defaultValue={exp.company} />
                            <Form.Input label='Position' defaultValue={exp.position} />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Start Date' defaultValue={exp.start} />
                            <Form.Input label='End Date' defaultValue={exp.end} />
                        </Form.Group>
                        <Form.Input fluid label='Responsibilities' defaultValue={exp.responsibilites} /> 
                        <button type="button" className="ui teal button" onClick={this.toggleState}>Update</button>
                        <button type="button" className="ui button" onClick={this.toggleState}>Cancel</button>
                    </React.Fragment>
                </Table.Cell>               
            </Table.Row>                         
        )
    }
 
    renderAdd() {
        return( 
            <React.Fragment>
                <div>
                    <Form.Group widths={2}>
                        <Form.Input label='Company' placeholder='Compnay' />
                        <Form.Input label='Position' placeholder='Position' />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Start Date' placeholder='21/08/2018' />
                        <Form.Input label='End Date' placeholder='21/08/2018' />
                    </Form.Group >
                    <Form.Input fluid label='Responsibilities' placeholder='Responsibilities' /> 
                    <button type="button" className="ui teal button" onClick={this.saveExperience}>Save</button>
                    <button type="button" className="ui button" onClick={this.cancelExperience}>Cancel</button>
                </div>
                    {this.renderTable()} 
            </React.Fragment>     
       )    
   }
   
   renderTable() {
        return(
            <Table padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Responsibilities</Table.HeaderCell>
                        <Table.HeaderCell>Start</Table.HeaderCell>
                        <Table.HeaderCell>End</Table.HeaderCell>  
                        <Table.HeaderCell>
                            <button type="button" className="ui teal button" onClick={this.addExperience}>
                            <Icon name="plus" />Add New</button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>   
                    {this.state.experienceData.map((exp, index) => 
                    (this.state.editIdx === index) ?
                        this.renderEdit(exp) :
                        <Table.Row key={exp.id}>    
                            <Table.Cell>
                                {exp.company}
                            </Table.Cell>
                            <Table.Cell>
                                {exp.position}
                            </Table.Cell>
                            <Table.Cell>
                                {exp.responsibilites}
                            </Table.Cell>
                            <Table.Cell>
                                {exp.start}
                            </Table.Cell>
                            <Table.Cell>
                                {exp.end}
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{'float': 'right'}}>
                                    <Icon name='pencil alternate' style={{'paddingRight': '2rem'}} onClick={(e) => {
                                        e.stopPropagation();
                                        this.toggleState(index); 
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