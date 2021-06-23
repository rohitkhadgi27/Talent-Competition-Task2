import React from 'react';
import Cookies from 'js-cookie';
import { TextArea, Input } from 'semantic-ui-react';

export class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: 0
        };
        this.update = this.update.bind(this);
    };

    update(event) {
        let data = {};
        data[event.target.name] = event.target.value;
        this.props.updateStateData(data);
        let description = event.target.value;
        this.setState({
            characters: description.length
        })
    }

    render() {
        const characterLimit = 600;
        let characters = this.props.description ? this.props.description.length : 0;
        
        return (
            <React.Fragment>
                <div className="four wide column">
                    <div className="field">
                        <Input placeholder='Please provide a short summary about yourself' />
                    </div>
                    <b>Summary must be no more than 150 characters.</b>
                </div>
                
                <div className="ten wide column" style={{'marginTop': '2rem'}}>
                    <div className="field" >
                        <textarea maxLength={characterLimit} name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add." value={this.props.description} onChange={this.update} ></textarea>
                    </div>
                    <div style={{'paddingBottom': '1rem'}}>
                        <b>Characters remaining : {characters} / {characterLimit}</b>
                        <button type="button" className="ui right floated teal button">Save</button>
                     </div>          
                </div>
            </React.Fragment>
        )
    }
}
