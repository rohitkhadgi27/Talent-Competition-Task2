/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Button, Icon, Form } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            showEditSection: false,
        }
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }

    openEdit() {
        this.setState({
            showEditSection: true,
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    render() {
        return(
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }    

    renderEdit() { 
        return(
            <React.Fragment>
                <Form.Field>
                    <label>LinkedIn</label>
                    <input placeholder='Enter your LinkedIn Url' />
                </Form.Field>
                <Form.Field>
                    <label>GitHub</label>
                    <input placeholder='Enter your GitHub Url' />
                </Form.Field>
                <Button type='submit' color='blue'>Save</Button>
                <Button type='submit'>Cancel</Button>
          </React.Fragment>
        )
    }

    renderDisplay() {
        return(
            <div>
                <Button style={{'padding': '10px 50px'}} color='linkedin' >
                    <Icon name='linkedin'></Icon>LinkedIn
                </Button>
                <Button style={{'padding': '10px 50px', 'marginLeft': '20px'}} color='black'>
                    <Icon name='github'></Icon>GitHub
                </Button>   
                <Button color='black' className="ui right floated teal button" onClick={this.openEdit}>Edit</Button>
            </div>           
        )
    }    
}





 
