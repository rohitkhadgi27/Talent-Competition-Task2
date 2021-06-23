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
        this.cancelExperience = this.cancelExperience.bind(this)
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

    renderEdit(x) {
        return(
            <Table.Row key={x.id}>
                <Table.Cell>
                    <Form.Group>
                        <Form.Input label='Company' defaultValue={x.company} />
                        <Form.Input label='Position' defaultValue={x.position} />
                    </Form.Group>
                </Table.Cell>
                <Table.cell>
                    <Form.Group>
                        <Form.Input label='Start Date' defaultValue={x.start} />
                        <Form.Input label='End Date' defaultValue={x.end} />
                    </Form.Group >
                </Table.cell>
               {/* <Table.Cell>
                    <Form.Group widths={2}>
                        <Form.Input label='Responsibilities' defaultValue={x.responsibilites} /> 
                    </Form.Group>
                </Table.Cell>
                <Table.Cell>
                    <Button color="teal" type='submit'>Add</Button>
                    <Button type='submit'>Cancel</Button> 
                </Table.Cell>      */}
            </Table.Row>                         
        )
    }
 
    renderAdd() {
        return( 
            <div>
                <div>
                    <Form.Group widths={2}>
                        <Form.Input label='Company' placeholder='Compnay' />
                        <Form.Input label='Position' placeholder='Position' />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label='Start Date' placeholder='21/08/2018' />
                        <Form.Input label='End Date' placeholder='21/08/2018' />
                    </Form.Group >
                    <Form.Group widths={2}>
                        <Form.Input label='Responsibilities' placeholder='Responsibilities' /> 
                    </Form.Group>  
                    <Button color="teal" type='submit'>Add</Button>
                    <Button type='submit'>Cancel</Button>
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
                    {this.state.experienceData.map((x, index) => 
                    (this.state.editIdx === index) ?
                        this.renderEdit(x) :
                        <Table.Row key={x.id}>    
                            <Table.Cell>
                                {x.company}
                            </Table.Cell>
                            <Table.Cell>
                                {x.position}
                            </Table.Cell>
                            <Table.Cell>
                                {x.responsibilites}
                            </Table.Cell>
                            <Table.Cell>
                                {x.start}
                            </Table.Cell>
                            <Table.Cell>
                                {x.end}
                            </Table.Cell>
                            <Table.Cell>
                                <div style={{'float': 'right'}}>
                                    <Icon name='pencil alternate' style={{'paddingRight': '2rem'}} onClick={(e) => {
                                        e.stopPropagation();
                                        this.toggleState(x.id, index); 
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