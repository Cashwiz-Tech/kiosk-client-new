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
import ICT from './../../assets/ICT-logo-blue 2.png'
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
    
    const [showScreenError, setshowScreenError] = useState(false);
    const [timeoutID, settimeoutID] = useState<any>();
    const [Value, setValue] = useState<any>('');

    const [selectedTab, setselectedTab] = useState<any>(1);

   
    function cancel_caracter(){
        let Value_temp = Value;
        let str = Value_temp.substring(0, Value_temp.length - 1);

        setValue(str);
    }

    
    function setValuefunc(v:string){
        let Value_temp = Value ;
        Value_temp+=v; 
        setValue(Value_temp);
    }

    function save_coins(){

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
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={two_shekel}/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={five_shekel}/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={ten_shekel}/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
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
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={euro_50} className="euro_50"/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">5000Є</div>  
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={shekel_100} className="shekel_100"/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">20000₪</div>  
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
                        </div>

                        <div className="table_status_line">
                            <div className="table_status_line_width_first_sec"><img src={shekel_50} className="shekel_50"/></div>   
                            <div className="table_status_line_width_long">1,000</div>  
                            <div className="table_status_line_width">500₪</div>  
                            <div className="table_status_line_width">55</div> 
                            <div  className="table_status_line_width table_status_line_width_last"><img src={pen} /> </div>
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

