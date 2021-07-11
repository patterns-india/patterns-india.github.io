import React, { Component } from 'react';
import {Button,Checkbox,Form,Input,Radio,Select,TextArea} from 'semantic-ui-react'
import crossButton from '../../../Resources/images/close-button.png'
import { COUNTRY_OPTIONS } from './countriesData'
import {countries} from '../../../Resources/countries'

import './Form.scss'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

export class ContactForm extends Component {
    constructor(){
        super();
        
        this.state = {
            name:"",
            email: "",
            contact: "",
            country: "",
            city: "",
            message: "",
            company:"",
            website:"",
        }
        
    }

    handleChange = (e, { value }) => this.setState({ value }, ()=> console.log("jayjaystate",this.state))

    showState = () => {console.log("jayjayinput",this.state)}

    render() {
        const { value } = this.state;
        const { showForm,toggleForm } = this.props;
        console.log("currentformstate",this.state);
        return (
            <div className="Form__Container" style={{display: showForm ? "block":"none"}}>
                <div className="Form__Content">
                <img 
                    src={crossButton} 
                    className="CloseButton" 
                    alt="cross" 
                    height="25px" 
                    width="25px"
                    onClick={()=>toggleForm()}
                />
                    <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='Your name'
                            placeholder='Enter name'
                            required
                            value={this.state.name}
                            onChange={(e)=> this.setState({name: e.target.value})}
                        />
                        <Form.Field
                            control={Input}
                            label='Email'
                            placeholder='Enter email'
                            required
                            value={this.state.email}
                            onChange={(e)=> this.setState({email: e.target.value})}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='Contact Number'
                            placeholder='Enter contact number'
                            value={this.state.contact}
                            onChange={(e)=> this.setState({contact: e.target.value})}
                        />
                         <Form.Field
                            control={Select}
                            label='Country'
                            options={COUNTRY_OPTIONS}
                            required
                            placeholder='Select country'
                            onChange={(e)=> {this.setState({country: e.target.innerText})}}
                        />
                    </Form.Group>
                   
                    <Form.Group>
                        <Form.Field
                            control={Input}
                            label='City'
                            placeholder='Enter city'
                            width={8}
                            value={this.state.city}
                            onChange={(e)=> this.setState({city: e.target.value})}
                        />
                    </Form.Group>
                    <div className="Form__Label"> I am a</div>
                    <Form.Group inline widths='equal'>
                        <Form.Field
                            control={Radio}
                            label='Consumer'
                            value='1'
                            checked={value === '1'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Retailer'
                            value='2'
                            checked={value === '2'}
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            label='Wholesaler'
                            value='3'
                            checked={value === '3'}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    { this.state.value && this.state.value != '1' && 
                        <div className="Form__Retailer">
                            <Form.Group  widths="equal">
                                <Form.Field
                                    control={Input}
                                    label='Company'
                                    placeholder='Enter company name'
                                    required
                                    value={this.state.company}
                                    onChange={(e)=> this.setState({company: e.target.value})}
                                />
                                <Form.Field
                                    control={Input}
                                    label='Website'
                                    placeholder='Enter company website'
                                    required
                                    value={this.state.website}
                                    onChange={(e)=> this.setState({website: e.target.value})}
                                />
                            </Form.Group>
                        </div>  
                    }
                    <div className="Form__Message">
                        <Form.Field
                        control={TextArea}
                        label='Message'
                        placeholder='Tell us more about you...'
                        value={this.state.message}
                        onChange={(e)=> this.setState({message: e.target.value})}
                        />
                    </div>
                    
                    <Form.Field
                    control={Checkbox}
                    label='Request a callback'
                    />
                    <Form.Field control={Button} onClick={()=>this.showState()}>Submit</Form.Field>
                </Form>
                </div>
            </div>
        )
    }
}

export default ContactForm
