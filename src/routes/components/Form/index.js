import React, { Component } from 'react';
import {Button,Checkbox,Form,Input,Radio,Select,TextArea} from 'semantic-ui-react'
import crossButton from '../../../Resources/images/close-button.png'
import { COUNTRY_OPTIONS } from './countriesData'
import wa from '../../../Resources/images/wablack.png'
import emailjs from 'emailjs-com'

import './Form.scss'


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
            formStatus: "submit",
        }
        
    }

    handleRadioChange = (e, { value }) => this.setState({ value })

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fc9tq8j', 'template_e2sj0b7', e.target, 'user_p03JnOTMeYc2NmlBn0z7f')
        .then((result) => {
            if(result.status == 200) {
                this.setState({formStatus: "success"})
            } else this.setState({formStatus:"error"})
        }, (error) => {
            this.setState({formStatus:"error"})
        });
    }

    sendWhatsapp = () => {
        window.open("https://wa.me/918233933313?text=Hi! I was going through your website and would like to connect to you.")
    }

    render() {
        const { value ,formStatus} = this.state;
        const { showForm,toggleForm } = this.props;

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
                { formStatus == 'submit' && 
                    <Form onSubmit={this.sendEmail}>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='Your name'
                                name="from_name"
                                placeholder='Enter name'
                                required
                                value={this.state.name}
                                onChange={(e)=> this.setState({name: e.target.value})}
                            />
                            <Form.Field
                                control={Input}
                                label='Email'
                                placeholder='Enter email'
                                name="email"
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
                                name="contact"
                                value={this.state.contact}
                                onChange={(e)=> this.setState({contact: e.target.value})}
                            />
                            <Form.Field
                                control={Input}
                                label='Country'
                                // options={COUNTRY_OPTIONS}
                                name="country"
                                required
                                placeholder='Select country'
                                value={this.state.country}
                                onChange={(e)=> {this.setState({country: e.target.value})}}
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <Form.Field
                                control={Input}
                                label='City'
                                placeholder='Enter city'
                                name="city"
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
                                onChange={this.handleRadioChange}
                            />
                            <Form.Field
                                control={Radio}
                                label='Retailer'
                                value='2'
                                checked={value === '2'}
                                onChange={this.handleRadioChange}
                            />
                            <Form.Field
                                control={Radio}
                                label='Wholesaler'
                                value='3'
                                checked={value === '3'}
                                onChange={this.handleRadioChange}
                            />
                        </Form.Group>
                        { this.state.value && this.state.value !== '1' && 
                            <div className="Form__Retailer">
                                <Form.Group  widths="equal">
                                    <Form.Field
                                        control={Input}
                                        label='Company'
                                        placeholder='Enter company name'
                                        name="comp_name"
                                        required
                                        value={this.state.company}
                                        onChange={(e)=> this.setState({company: e.target.value})}
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Website'
                                        placeholder='Enter company website'
                                        name="comp_web"
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
                            placeholder='Please write about your queries in detail'
                            name="message"
                            value={this.state.message}
                            onChange={(e)=> this.setState({message: e.target.value})}
                            />
                        </div>
                        
                        {/* <Form.Field
                        control={Checkbox}
                        label='Request a callback'
                        /> */}
                        <Button type='submit'>Submit</Button>
                    </Form>
            
                }

                { formStatus == 'success' && 
                    <div>
                        Thankyou for contacting Us! We will get in touch with you soon. 😊
                    </div>
                }

                { formStatus == 'error' && 
                    <div>
                        Sorry! 🙁 There seems to be some issue with our server. 
                        <br/>
                        Please try again after a while or message us directly via whatsapp! 
                        <div className="WhatsappBtn" onClick={()=>this.sendWhatsapp()}>
                            <img src={wa} alt="wa" height="15px" width="15px" style={{marginRight:"10px"}}/>
                        WhatsApp Now</div>
                    </div>
                }

                </div>
            </div>
        )
    }
}

export default ContactForm
