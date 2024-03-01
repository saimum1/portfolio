import React, {useState,useEffect} from 'react';
import {
    chakra,
    FormControl,
    FormLabel, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Button,
    Input, background
} from "@chakra-ui/react";
import {global_css} from "../../../GlobalCss/GlobalCSS.js";
import axios from "axios";
import config from "../../../config.jsx";

import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid';

const AddnewUser = ({isOpen, onClose ,action,getdata,data}) => {

 
   
    const [showpopoup,setshowpopup]=useState(false)
    const [showpopoupstatus,setshowpopupstatus]=useState('sucess')
    const [showpopoupmsg,setshowpopupmsg]=useState('')
    const [permission_module,setpermission_module]=useState(['Sim Inventory','Offer Center','Sales & Activation','User and Operators','Settings','Reports','Financial Statement','Courier'])
    const [grouplistx,setgrouplistx]=useState(['Sales','Admin','Sales & Activation','Account','Marketing'])

    const [datalist,setdatalist]=useState({
        
        uid:uuidv4(), 
        full_name:'',
        group_name:'',
        mobile:'',
        email:'',
        date:'',
        status:''
          
        
    })

    
    

    

    const handleCheckboxChange = (permission) => {
        console.log("eewr",permission)
        const updatedPermissions = datalist.role_permissions.includes(permission)
            ? datalist.role_permissions.filter(p => p !== permission)
            : [...datalist.role_permissions, permission];
            console.log("Updated permissions:", updatedPermissions);
            setdatalist(prevState => ({
            ...prevState,
            role_permissions: updatedPermissions
        }));
    };


    const handleStatusChange = (isChecked) => {
        const newStatus = isChecked ? 'active' : 'inactive';
        setdatalist(prevState => ({
            ...prevState,
            status: newStatus
        }));
    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0])
    };

    const SaveOperator = async () => {
        getdata(datalist)
        onClose()
        setdatalist({
            
        
            uid:uuid,
            full_name:'',
            group_name:'',
            mobile:'',
            email:'',
            date:'',
            status:''
            
        
        })
    };
// const UpdateOperator = async () => {
//         try {


//             const data = {
//                 "name": operatorName,
//                 'code': operatorCode,
//                 "logo": logo,
//                 "status": operatorStatus ? 'available' : ''
//             }

//             const response = await axios.put(`${config.apiUrl}/api/operator/${operatorForEdit.id}`, data);
//             console.log('Response:', response);
//             toast.success(response.statusText)
//             await GetOperators()
//             onClose()
//             setOperatorStatus(false)
//             setOperatorCode('')
//             setOperatorName('')
//             setSelectedFile(null)
//             setshowpopupmsg('Update Success')
//             setshowpopupstatus('success')
//             setshowpopup(true)
//             setTimeout(() => {
//                 setshowpopup(false)

//             }, 1500);


//         } catch (error) {
//             console.error('Error++++:', error);
//             setshowpopupmsg('Update Failed')
//             setshowpopupstatus('fail')
//             setshowpopup(true)
//             setTimeout(() => {
//                 setshowpopup(false)

//             }, 1500);
//             throw error;
//         }
//     };



    useEffect(() => {
    
        if (action && data) {
            setdatalist(prevState => ({
                ...prevState,
                uid:data?.uid,
                full_name:data?.full_name,
                group_name:data?.group_name,
                mobile:data?.mobile,
                email:data?.email,
                date:data?.date,
                status:data?.status
            }));
        }else{
console.log("sfsdfsdf")
            setdatalist({
        
                uid:uuidv4(), 
                full_name:'',
                group_name:'',
                mobile:'',
                email:'',
                date:'',
                status:''
                  
                
            })
        }
    }, [isOpen, onClose ,action,getdata,data]);

    return (
        <div>
            {showpopoup &&  <Popnotification  msg={showpopoupmsg} showpopoup={showpopoup} status={showpopoupstatus} /> }
            <Modal
                isOpen={isOpen}
                onClose={onClose}


            >
                <ModalOverlay/>
                <ModalContent bg={global_css.modal_bg} style={{color : 'white'}}>
                    <ModalHeader >Add new Group </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <div className="flex items-center gap-2 justify-between">

                        <FormControl>
                            <FormLabel style={{fontWeight :'bold',display:"flex",justifyContent:'flex-start',alignItems:'center',gap:'6px'}}>UID <span style={{padding:'0.1rem .4rem',color:'white',backgroundColor:global_css.primary_btn,borderRadius:'10px',fontSize:'11px'}}>Auto</span></FormLabel>
                            <Input disabled={true} style={{
                                outline: 'none !important',
                                boxShadow: 'none',
                                border : '1px solid #595959',
                                background : '#404040'
                            }} 
                                   value={datalist.uid}
                                  />
                        </FormControl>

                        <FormControl>
                            <FormLabel style={{fontWeight :'bold'}}>Group</FormLabel>
                            <select onChange={(e) => setdatalist(prevState => ({
                                                            ...prevState,
                                                            group_name: e.target.value
                                                             }))} value={datalist?.group_name} style={{border : '1px solid #595959'}} className="w-full cursor-pointer bg-[#404040] hover:bg-[#545454] text-[#9CA3AF]  py-[.55rem] px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" >
                                  {grouplistx?.map((n) => (
                                        <option key={n} value={n}>
                                            {n}
                                        </option>
                                    ))}
                                   
                            </select>
                        </FormControl>

                        </div>


                        <FormControl className='mt-5'>
                            <FormLabel style={{fontWeight :'bold'}}>Full Name</FormLabel>
                            <Input style={{
                                outline: 'none !important',
                                boxShadow: 'none',
                                border : '1px solid #595959',
                                background : '#404040'
                            }} onChange={(e) => setdatalist(prevState => ({
                                                            ...prevState,
                                                            full_name: e.target.value
                                                             }))}
                                   value={datalist.full_name}
                                   placeholder='Enter full name'/>
                        </FormControl>





                        <div className="flex items-center gap-2 justify-between mt-5">

                        <FormControl>
                            <FormLabel style={{fontWeight :'bold',display:"flex",justifyContent:'flex-start',alignItems:'center',gap:'6px'}}>Email</FormLabel>
                                   <Input type='email' style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                    }} onChange={(e) => setdatalist(prevState => ({
                                                                ...prevState,
                                                                email: e.target.value
                                                                }))}
                                    value={datalist.email}
                                        placeholder='Enter email '/>
                        </FormControl>

                      
                        <FormControl>
                            <FormLabel style={{fontWeight :'bold',display:"flex",justifyContent:'flex-start',alignItems:'center',gap:'6px'}}>Mobile</FormLabel>
                                   <Input type='number' style={{
                                    outline: 'none !important',
                                    boxShadow: 'none',
                                    border : '1px solid #595959',
                                    background : '#404040'
                                    }} onChange={(e) => setdatalist(prevState => ({
                                                                ...prevState,
                                                                mobile: e.target.value
                                                                }))}
                                    value={datalist.mobile}
                                        placeholder='Enter mobile '/>
                        </FormControl>

                        </div>



                        <div className="flex items-center gap-2 justify-between mt-5" style={{backgroundColor:'',width:'100%',}}>
                        <FormControl >
                            <FormLabel style={{fontWeight :'bold',fontSize:'13px'}}>Entry date</FormLabel>
                            <Input name='entry_date' type='date' style={{
                                outline: 'none !important',
                                boxShadow: 'none',
                                border : '1px solid #595959',
                                background : '#404040',fontSize:'13px'
                                
                            }}  onChange={(e) => setdatalist(prevState => ({
                                ...prevState,
                                date: e.target.value
                                }))}    value={datalist.date} />
                        </FormControl>

                        <FormControl >
                            <FormLabel style={{fontWeight :'bold',fontSize:'13px'}}>Status</FormLabel>
                            <label style={{border : '1px solid #595959',fontSize:'16px'}} htmlFor="file-input" className="w-full  cursor-pointer bg-[#404040] hover:bg-[#545454] text-[#9CA3AF]  py-[7px] px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex gap-2 items-center">
                                <input checked={datalist.status === 'active'} style={{cursor:'pointer'}} type="checkbox" onChange={(e) =>handleStatusChange(e.target.checked)}/>
                                <span >Active</span>
                            </label>

                         
                        </FormControl>

                    </div>
                    </ModalBody>

                    <ModalFooter >

                        <Button  onMouseDown={(e) => {
                                e.target.style.backgroundColor = '#999999'; 
                            }}
                            onMouseUp={(e) => {
                                e.target.style.backgroundColor = ''; 
                            }} colorScheme='white' variant='outline' onClick={onClose}>Cancel</Button>
                                    <Button  onMouseDown={(e) => {
                                                e.target.style.backgroundColor = '#1EAB5E'; 
                                            }}
                                            onMouseUp={(e) => {
                                                e.target.style.backgroundColor = '#27CF7A'; 
                                            }}  onClick={SaveOperator} style={{background: "#27CF7A", color: 'white'}} ml={3}>
                                        Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <style jsx>
                {
                    `
                      .custom-file-upload {
                        padding: 4px 2px;
                        cursor: pointer;
                        //background-color: #f5f5f5;
                        font-size: 15px;
                      }

                      //.custom-file-upload:hover {
                      //  background-color: red;
                      //}

                      .custom-file-upload:active {
                        background-color: white;
                        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
                      }

                      input:focus{
                        outline: none;
                      }
                        
                    
                    `
                }

            </style>
        </div>
    );
};
export default AddnewUser