import React, {useState} from 'react';
import Popnotification from "../../PopNotification/Popnotification.jsx";
import {
    Button,
    FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {global_css} from "../../../GlobalCss/GlobalCSS.js";

const AddNewAgent = ({isOpen, onClose ,actionType}) => {
    const [url, setURL] = useState('');
    const [showpopoup,setshowpopup]=useState(false)
    const [showpopoupstatus,setshowpopupstatus]=useState('sucess')
    const [showpopoupmsg,setshowpopupmsg]=useState('')
    const [agent, setAgent] = useState({
        uid: '',
        name: '',
        email: '',
        username: '',
        phone: '',
        contactPerson: '',
        taxIdCode: '',
        vatNumber: '',
        pecId: '',
        codiceUnivoco: '',
        address: '',
        city: '',
        referenceCode: '',
        status: '',
    });

    const handleChange = (field, value) => {
        setAgent((prevAgent) => ({
            ...prevAgent,
            [field]: value,
        }));
    };


    const handleSubmit = () => {
        // Handle your form submission logic here using the 'agent' state
        // For example, you can send a request to your API
        // ...

        // Reset the form or close the modal
        setAgent({
            uid: '',
            name: '',
            email: '',
            username: '',
            phone: '',
            contactPerson: '',
            taxIdCode: '',
            vatNumber: '',
            pecId: '',
            codiceUnivoco: '',
            address: '',
            city: '',
            referenceCode: '',
            status: '',
        });

        setshowpopupmsg('Agent successfully added!');
        setshowpopupstatus('success');
        setshowpopup(true);
        onClose();
    };
    return (
        <div>
            {showpopoup &&  <Popnotification  msg={showpopoupmsg} showpopoup={showpopoup} status={showpopoupstatus} /> }
            <Modal
                isOpen={isOpen}
                onClose={onClose}


            >
                <ModalOverlay/>
                <ModalContent bg={global_css.modal_bg} style={{color : 'white'}}>
                    <ModalHeader >Add new agent</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} style={{maxHeight : '500px', overflow : 'auto'}}>
                        <FormControl className="mb-4">
                            <FormLabel style={{fontWeight :'bold'}}>Agent UID <span className="px-1 py-0.5 bg-[#27CF7AFF] rounded-2xl text-[10px]">Auto</span></FormLabel>
                            <Input
                                value={agent.uid}
                                onChange={(e) => handleChange('uid', e.target.value)}
                                style={{
                                outline: 'none !important',
                                boxShadow: 'none',
                                border : '1px solid #595959',
                                background : '#404040'
                            }}

                                   placeholder=''/>
                        </FormControl>

                        <FormControl className="mb-4">
                            <FormLabel style={{fontWeight :'bold'}}>Agent Name</FormLabel>
                            <Input
                                value={agent.name}
                                onChange={(e) => handleChange('name', e.target.value)}

                                style={{
                                outline: 'none !important',
                                boxShadow: 'none',
                                border : '1px solid #595959',
                                background : '#404040'
                            }}

                                   placeholder='Enter agent name'/>
                        </FormControl>
                        <div className="flex items-center gap-2 justify-between mb-4">
                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Email</FormLabel>
                                <Input
                                    value={agent.email}
                                    onChange={(e) => handleChange('email', e.target.value)}

                                    type="email"  style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='example@mail.com'/>
                            </FormControl>

                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Username</FormLabel>

                                <Input
                                    value={agent.username}
                                    onChange={(e) => handleChange('username', e.target.value)}

                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='username'/>
                            </FormControl>
                        </div> <div className="flex items-center gap-2 justify-between mb-4">
                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Phone</FormLabel>
                                <Input
                                    value={agent.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}

                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='Ex. +88'/>
                            </FormControl>

                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Contact Person</FormLabel>

                                <Input

                                    value={agent.contactPerson}
                                    onChange={(e) => handleChange('contactPerson', e.target.value)}
                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='contact person'/>
                            </FormControl>
                        </div> <div className="flex items-center gap-2 justify-between mb-4">
                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Tax ID Code</FormLabel>
                                <Input

                                    value={agent.taxIdCode}
                                    onChange={(e) => handleChange('taxIdCode', e.target.value)}

                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='tax code'/>
                            </FormControl>

                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>VAT number</FormLabel>

                                <Input
                                    value={agent.vatNumber}
                                    onChange={(e) => handleChange('vatNumber', e.target.value)}

                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='vat number'/>
                            </FormControl>
                        </div> <div className="flex items-center gap-2 justify-between mb-4">
                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>PEC ID</FormLabel>
                                <Input
                                    value={agent.pecId}
                                    onChange={(e) => handleChange('pecId', e.target.value)}

                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='pec ID'/>
                            </FormControl>

                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Codice Univoco</FormLabel>

                                <Input

                                    value={agent.codiceUnivoco}
                                    onChange={(e) => handleChange('codiceUnivoco', e.target.value)}
                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='codice Univoco'/>
                            </FormControl>
                        </div> <div className="flex items-center gap-2 justify-between mb-4">
                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Address</FormLabel>
                                <Input

                                    value={agent.address}
                                    onChange={(e) => handleChange('address', e.target.value)}

                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='address'/>
                            </FormControl>

                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>City</FormLabel>

                                <Input

                                    value={agent.city}
                                    onChange={(e) => handleChange('city', e.target.value)}

                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='city'/>
                            </FormControl>
                        </div> <div className="flex items-center gap-2 justify-between mb-4">
                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Reference code</FormLabel>
                                <Input

                                    value={agent.referenceCode}
                                    onChange={(e) => handleChange('referenceCode', e.target.value)}


                                    style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='reference code'/>
                            </FormControl>

                            <FormControl>
                                <FormLabel style={{fontWeight :'bold'}}>Status</FormLabel>

                                <Input  style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                }}  placeholder='Ex. +88'/>
                            </FormControl>
                        </div>
                    </ModalBody>

                    <ModalFooter>

                        <Button colorScheme='white' variant='outline' onClick={onClose}>Cancel</Button>
                        <Button onClick={handleSubmit}  style={{background: "#27CF7A", color: 'white'}} ml={3}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <style jsx>
                {
                    `
                      ::-webkit-scrollbar {
                        width: 12px; /* Width of the scrollbar */
                        border: 1px solid #ddd; /* Border color of the scrollbar */
                        border-radius: 8px;
                      }

                      ::-webkit-scrollbar-thumb {
                        background-color: #999; /* Color of the thumb */
                        border-radius: 3px; /* Border radius of the thumb */
                      }

                      /* For Firefox */
                      scrollbar {
                        width: 12px; /* Width of the scrollbar */
                      }

                      scrollbar-thumb {
                        background-color: #999; /* Color of the thumb */
                        border-radius: 3px; /* Border radius of the thumb */
                      }
                      FormLabel{
                        font-size: 13px;
                      }
                        
                    
                    `
                }

            </style>
        </div>
    );
};

export default AddNewAgent;