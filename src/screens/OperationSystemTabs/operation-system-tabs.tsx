import "./operation-system-tabs.css";
import usd_100 from './../../assets/usd_100.png'
import euro_50 from './../../assets/euro_50.png'
import shekel_100 from './../../assets/shekel_100.png'
import shekel_50 from './../../assets/shekel_50.png'

import ten_shekel from './../../assets/ten_shekel.png'
import five_shekel from './../../assets/five_shekel.png'
import two_shekel from './../../assets/two_shekel.png'
import { useAppDispatch } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import approve_input from './../../assets/approve_input.png'
import cancel_input from './../../assets/cancel_input.png'
import shekel_icon from './../../assets/shekel_icon.png'
import pen from './../../assets/pen.png' 
import exit_icon from './../../assets/exit_icon.png' 
import active_icon from './../../assets/active_icon.png'
import banknotes_white from './../../assets/banknotes_white.png'
import { ReactComponent as Arrow } from "./../../assets/arrow.svg"
//import  Arrow  from "./../../assets/left.png"
import problem_report_icon from './../../assets/problem_report_icon.png'

import not_active_icon from './../../assets/not_active_icon.png'
import coins_white from './../../assets/coins_white.png'
import Header from "layouts/header/Header";
import { useEffect, useState } from "react";
import ErrorScrenLeftModal from "components/buying/error-modal-screen-left";
import status_icon from './../../assets/status_icon.png'

import Button from "lib/button";
import NumericKeypadSmall from "components/buying/numeric-keypad-small/numeric-keypad-small";
const OperationSystemTabs = () => {
    const dispatch = useAppDispatch();
    const [Value, setValue] = useState<any>('');
    const [selectedTab, setselectedTab] = useState<any>(1);
    const [showEdit_val_1, setshowEdit_val_1] = useState<any>(false);
    const [value_temp_1, setvalue_temp_1] = useState<string>('');
    const [value_1, setvalue_1] = useState<string>('55');
    const [ShowApproveBtn, setShowApproveBtn] = useState<boolean>(false);
    const [showEdit_val_2, setshowEdit_val_2] = useState<any>(false);
    const [value_temp_2, setvalue_temp_2] = useState<string>('');
    const [value_2, setvalue_2] = useState<string>('55');
    const [ShowApproveBtn_2, setShowApproveBtn_2] = useState<boolean>(false);

    const [showEdit_val_3, setshowEdit_val_3] = useState<any>(false);
    const [value_temp_3, setvalue_temp_3] = useState<string>('');
    const [value_3, setvalue_3] = useState<string>('55');
    const [ShowApproveBtn_3, setShowApproveBtn_3] = useState<boolean>(false);

    const [showEdit_val_4, setshowEdit_val_4] = useState<any>(false);
    const [value_temp_4, setvalue_temp_4] = useState<string>('');
    const [value_4, setvalue_4] = useState<string>('55');
    const [ShowApproveBtn_4, setShowApproveBtn_4] = useState<boolean>(false);

    const [showEdit_val_5, setshowEdit_val_5] = useState<any>(false);
    const [value_temp_5, setvalue_temp_5] = useState<string>('');
    const [value_5, setvalue_5] = useState<string>('55');
    const [ShowApproveBtn_5, setShowApproveBtn_5] = useState<boolean>(false);

    const [showEdit_val_6, setshowEdit_val_6] = useState<any>(false);
    const [value_temp_6, setvalue_temp_6] = useState<string>('');
    const [value_6, setvalue_6] = useState<string>('55');
    const [ShowApproveBtn_6, setShowApproveBtn_6] = useState<boolean>(false);

    const [showEdit_val_7, setshowEdit_val_7] = useState<any>(false);
    const [value_temp_7, setvalue_temp_7] = useState<string>('');
    const [value_7, setvalue_7] = useState<string>('55');
    const [ShowApproveBtn_7, setShowApproveBtn_7] = useState<boolean>(false);
    
    const [showEdit_val_8, setshowEdit_val_8] = useState<any>(false);
    const [value_temp_8, setvalue_temp_8] = useState<string>('');
    const [value_8, setvalue_8] = useState<string>('55');
    const [ShowApproveBtn_8, setShowApproveBtn_8] = useState<boolean>(false);
   
    function cancel_caracter(){
        let Value_temp = Value;
        let str = Value_temp.substring(0, Value_temp.length - 1);

        setValue(str);

        if (showEdit_val_1){
            setvalue_temp_1(str)
        }
        if (showEdit_val_2){
            setvalue_temp_2(str)
        }
        if (showEdit_val_3){
            setvalue_temp_3(str)
        }
        if (showEdit_val_4){
            setvalue_temp_4(str)
        }
        if (showEdit_val_5){
            setvalue_temp_5(str)
        }
        if (showEdit_val_6){
            setvalue_temp_6(str)
        }
        if (showEdit_val_7){
            setvalue_temp_7(str)
        }
        if (showEdit_val_8){
            setvalue_temp_8(str)
        }
    }

    
    function setValuefunc(v:string){
       
        let Value_temp = Value ;
        Value_temp+=v; 
        setValue(Value_temp);
        if (showEdit_val_1){
            setvalue_temp_1(Value_temp);
            setShowApproveBtn(true);
        }
        if (showEdit_val_2){
            setvalue_temp_2(Value_temp);
            setShowApproveBtn_2(true);
        }
        if (showEdit_val_3){
            setvalue_temp_3(Value_temp);
            setShowApproveBtn_3(true);
        }
        if (showEdit_val_4){
            setvalue_temp_4(Value_temp);
            setShowApproveBtn_4(true);
        }
        if (showEdit_val_5){
            setvalue_temp_5(Value_temp);
            setShowApproveBtn_5(true);
        }  
        if (showEdit_val_6){
            setvalue_temp_6(Value_temp);
            setShowApproveBtn_6(true);
        }
        if (showEdit_val_7){
            setvalue_temp_7(Value_temp);
            setShowApproveBtn_7(true);
        }
        if (showEdit_val_8){
            setvalue_temp_8(Value_temp);
            setShowApproveBtn_8(true);
        }

    }

    function save_coins(){
        setselectedTab(1);
    }

    return (
        <>
            <Header show_logo={false} user_name="שם: קיוסק השרון"></Header>
            <div className="OperationSystemTab">
                <div className="WelcomeScreenSecond_first_part">

                    <div className="tabs_cont"> 
                        <div className={"one_tab tab_1 " + (selectedTab==1? "selected_tab_blue" :"")} onClick={()=>setselectedTab(1)}>
                            <img src={status_icon} className="status_icon"/>
                            סטטוס</div>

                        <div className={"one_tab tab_2 " + (selectedTab==2? "selected_tab_blue" :"")} onClick={()=>setselectedTab(2)}>
                            <img src={coins_white} className="status_icon"/>
                            הטענות מטבעות</div>

                        <div className={"one_tab tab_3 " + (selectedTab==3? "selected_tab_blue" :"")} onClick={()=>setselectedTab(3)}>
                            <img src={banknotes_white} className="status_icon"/>
                            הטענות שטרות</div>

                        <div className={"one_tab tab_4 " +(selectedTab==4? "selected_tab_4" :"")} onClick={()=>setselectedTab(4)}> 
                            <img src={problem_report_icon} className="problem_report_icon"/>
                        </div>

                    </div>
          
                    {selectedTab==1?<div className="table_status_cont"> 
                        <div className="table_status_header">
                            <div className="table_status_line_width_first">רכיב</div>   
                            <div className="table_status_line_width">קוד</div>  
                            <div className="table_status_line_width">סטטוס</div>
                        </div>


                        <div className="table_status_line">
                            <div className="table_status_line_width_first">Dispenser</div>   
                            <div className="table_status_line_width">45</div>  
                            <div  className="table_status_line_width"><img src={active_icon} /> <span className="active_text">פעיל</span></div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first">Acceptor</div>   
                            <div className="table_status_line_width"></div>  
                            <div  className="table_status_line_width"><img src={active_icon} /> <span className="active_text">פעיל</span></div>
                        </div>


                        <div className="table_status_line">
                            <div className="table_status_line_width_first">Camera</div>   
                            <div className="table_status_line_width"></div>  
                            <div  className="table_status_line_width"><img src={active_icon} /> <span className="active_text">פעיל</span></div>
                        </div>



                        <div className="table_status_line">
                            <div className="table_status_line_width_first">Camera</div>   
                            <div className="table_status_line_width"></div>  
                            <div  className="table_status_line_width"><img src={active_icon} /> <span className="active_text">פעיל</span></div>
                        </div>



                        <div className="table_status_line">
                            <div className="table_status_line_width_first">Camera</div>   
                            <div className="table_status_line_width"></div>  
                            <div  className="table_status_line_width"><img src={active_icon} /> <span className="active_text">פעיל</span></div>
                        </div>

                        
                        <div className="table_status_line">
                            <div className="table_status_line_width_first">NFC</div>   
                            <div className="table_status_line_width"></div>  
                            <div  className="table_status_line_width"><img src={not_active_icon} /> <span className="active_text">לא פעיל</span></div>
                        </div>

                        <div className="table_status_line table_status_line_last">
                            <div className="table_status_line_width_first">Printer</div>   
                            <div className="table_status_line_width"></div>  
                            <div  className="table_status_line_width"><img src={not_active_icon} /> <span className="active_text">לא פעיל</span></div>
                        </div>


                    </div>: <></>}

                    
                    {selectedTab==2?<>
                    
                    <div className="table_status_cont"> 


                        <div className="table_status_header_sec">
                            <div className="table_status_line_width_first_sec">סוג שטר</div>   
                            <div className="table_status_line_width_long">כמות מטבעות במחסנית</div>  
                            <div className="table_status_line_width">סכום</div>
                            <div className="table_status_line_width">הטענה/ריקון</div>
                            <div className="table_status_line_width"></div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={shekel_icon}/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">{!showEdit_val_1? value_1:(<div className="input_cont"> {ShowApproveBtn?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_1(value_temp_1);setShowApproveBtn(false);setshowEdit_val_1(false);setvalue_temp_1('');setValue('') }}/>:<></>} <input type="text" className="input_num" value={value_temp_1} onChange={(e)=>{setShowApproveBtn(true); setvalue_temp_1(e.target.value)}}/> {ShowApproveBtn?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn(false);setshowEdit_val_1(false);setValue('');setvalue_temp_1('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen}  onClick={()=>setshowEdit_val_1(true)}/> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={two_shekel}/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">{!showEdit_val_2? value_2:(<div className="input_cont"> {ShowApproveBtn_2?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_2(value_temp_2);setShowApproveBtn_2(false);setshowEdit_val_2(false);setvalue_temp_2('');setValue('')}}/>:<></>} <input type="text" className="input_num"  value={value_temp_2} onChange={(e)=>{setShowApproveBtn_2(true); setvalue_temp_2(e.target.value)}}/> {ShowApproveBtn_2?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn_2(false);setshowEdit_val_2(false);setValue('');setvalue_temp_2('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} onClick={()=>setshowEdit_val_2(true)}/> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={five_shekel}/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">{!showEdit_val_3? value_3:(<div className="input_cont"> {ShowApproveBtn_3?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_3(value_temp_3);setShowApproveBtn_3(false);setshowEdit_val_3(false);setvalue_temp_3('');setValue('')}}/>:<></>} <input type="text" className="input_num"  value={value_temp_3} onChange={(e)=>{setShowApproveBtn_3(true); setvalue_temp_2(e.target.value)}}/> {ShowApproveBtn_3?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn_3(false);setshowEdit_val_3(false);setValue('');setvalue_temp_3('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} onClick={()=>setshowEdit_val_3(true)}/> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={ten_shekel}/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">{!showEdit_val_4? value_4:(<div className="input_cont"> {ShowApproveBtn_4?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_4(value_temp_4);setShowApproveBtn_4(false);setshowEdit_val_4(false);setvalue_temp_4('');setValue('')}}/>:<></>} <input type="text" className="input_num"  value={value_temp_4} onChange={(e)=>{setShowApproveBtn_4(true); setvalue_temp_4(e.target.value)}}/> {ShowApproveBtn_4?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn_4(false);setshowEdit_val_4(false);setValue('');setvalue_temp_4('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} onClick={()=>setshowEdit_val_4(true)}/> </div>
                        </div>

                        </div>
                        <NumericKeypadSmall  setValue={(v:any) => setValuefunc(v)} cancel_caracter={cancel_caracter} /> 

                        <Button onClick={()=>save_coins()}  style={{
                                           width:'344px', marginTop:'50px'}}>
                                       אישור
                                       <Arrow/>
                                               
                        </Button>
                    
                    </>: <></>}


                    {selectedTab==3?<>
                    
                    <div className="table_status_cont"> 


                        <div className="table_status_header_sec">
                            <div className="table_status_line_width_first_sec">סוג שטר</div>   
                            <div className="table_status_line_width_long">כמות מטבעות במחסנית</div>  
                            <div className="table_status_line_width">סכום</div>
                            <div className="table_status_line_width">הטענה/ריקון</div>
                            <div className="table_status_line_width"></div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={usd_100} className="usd_100"/></div>   
                            <div className="table_status_line_width_long">5</div>  
                            <div className="table_status_line_width">500$</div>  
                            <div className="table_status_line_width">{!showEdit_val_5? value_5:(<div className="input_cont"> {ShowApproveBtn_5?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_5(value_temp_5);setShowApproveBtn_5(false);setshowEdit_val_5(false);setvalue_temp_5('');setValue('')}}/>:<></>} <input type="text" className="input_num"  value={value_temp_5} onChange={(e)=>{setShowApproveBtn_5(true); setvalue_temp_5(e.target.value)}}/> {ShowApproveBtn_5?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn_5(false);setshowEdit_val_5(false);setValue('');setvalue_temp_5('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} onClick={()=>setshowEdit_val_5(true)}/> </div>

                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={euro_50} className="euro_50"/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">5000Є</div>  
                            <div className="table_status_line_width">{!showEdit_val_6? value_6:(<div className="input_cont"> {ShowApproveBtn_6?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_6(value_temp_6);setShowApproveBtn_6(false);setshowEdit_val_6(false);setvalue_temp_6('');setValue('')}}/>:<></>} <input type="text" className="input_num"  value={value_temp_6} onChange={(e)=>{setShowApproveBtn_6(true); setvalue_temp_6(e.target.value)}}/> {ShowApproveBtn_6?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn_6(false);setshowEdit_val_6(false);setValue('');setvalue_temp_6('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} onClick={()=>setshowEdit_val_6(true)}/> </div>

                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={shekel_100} className="shekel_100"/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">20000₪</div>  
                            <div className="table_status_line_width">{!showEdit_val_7? value_7:(<div className="input_cont"> {ShowApproveBtn_7?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_7(value_temp_7);setShowApproveBtn_7(false);setshowEdit_val_7(false);setvalue_temp_7('');setValue('')}}/>:<></>} <input type="text" className="input_num"  value={value_temp_7} onChange={(e)=>{setShowApproveBtn_7(true); setvalue_temp_7(e.target.value)}}/> {ShowApproveBtn_7?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn_7(false);setshowEdit_val_7(false);setValue('');setvalue_temp_7('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} onClick={()=>setshowEdit_val_7(true)}/> </div>

                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={shekel_50} className="shekel_50"/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">{!showEdit_val_8? value_8:(<div className="input_cont"> {ShowApproveBtn_8?<img src={approve_input} className="approve_input" onClick={()=>{setvalue_8(value_temp_8);setShowApproveBtn_8(false);setshowEdit_val_8(false);setvalue_temp_8('');setValue('')}}/>:<></>} <input type="text" className="input_num"  value={value_temp_8} onChange={(e)=>{setShowApproveBtn_8(true); setvalue_temp_8(e.target.value)}}/> {ShowApproveBtn_8?<img src={cancel_input} className="approve_input" onClick={()=>{setShowApproveBtn_8(false);setshowEdit_val_8(false);setValue('');setvalue_temp_8('')}}/>:<></>} </div>)}</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} onClick={()=>setshowEdit_val_8(true)}/> </div>

                        </div>

                        </div>
                        <NumericKeypadSmall  setValue={(v:any) => setValuefunc(v)} cancel_caracter={cancel_caracter} /> 

                        <Button onClick={()=>save_coins()}  style={{
                                           width:'344px', marginTop:'50px'}}>
                                       אישור
                                       <Arrow/>
                                               
                        </Button>
                    
                    </>: <></>}

                    {selectedTab==4?
                    <div>
                        <div className="mid_title">
                        דיווח על בעיה
                        </div>

                        <select className="operation_code_input ">
                            <option  className="operation_code_option"> בחר </option>
                            <option  className="operation_code_option"> Dispenser </option>
                            <option  className="operation_code_option"> Acceptor </option>
                            <option  className="operation_code_option"> Camera </option>
                            <option  className="operation_code_option"> NFC </option>
                            <option  className="operation_code_option"> Printer </option>
                        </select>

                        <div className="buttons-container-currency-total">

                            <Button onClick={()=>{}} style={{
                                                width:'344px'}}>
                                            דיווח
                                            <Arrow/>
                                                    
                            </Button>

                        </div>

                    </div>:<></>}

                </div>

                <img src={exit_icon} className="exit_icon" onClick={()=>dispatch(setCurrentScreen(Screens.OPERATION_SYSTEM_EXIT))}

                />

            </div>
         
        </>
    );

};

export default OperationSystemTabs;

