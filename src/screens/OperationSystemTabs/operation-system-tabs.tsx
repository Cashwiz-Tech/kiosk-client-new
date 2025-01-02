import "./operation-system-tabs.css";
import usd_eur from './../../assets/usd_eur.png'
import change_icon_orange from './../../assets/change_icon_orange.png'
import card_icon from './../../assets/card_icon.png'
import smart_kiosk from './../../assets/smart_kiosk.png'
import { useAppDispatch } from "store/store";
import { setCurrentScreen } from "store/navigationSlice";
import { Screens } from "types/Screens";
import ICT from './../../assets/ICT-logo-blue 2.png'
import coins from './../../assets/coins.png'
import cash_icon from './../../assets/cash_icon.png' 
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

const OperationSystemTabs = () => {
    const dispatch = useAppDispatch();
    
    const [showScreenError, setshowScreenError] = useState(false);
    const [timeoutID, settimeoutID] = useState<any>();
    const [Value, setValue] = useState<any>('');

    return (
        <>
            <Header show_logo={false} user_name="שם: קיוסק השרון"></Header>
            <div className="OperationSystemTab">
                <div className="WelcomeScreenSecond_first_part">

                    <div className="tabs_cont"> 
                        <div className="one_tab tab_1 selected_tab_blue">
                            <img src={status_icon} className="status_icon"/>
                            סטטוס</div>

                        <div className="one_tab tab_2">
                            <img src={coins_white} className="status_icon"/>
                            הטענות מטבעות</div>

                        <div className="one_tab tab_3">
                            <img src={banknotes_white} className="status_icon"/>
                            הטענות שטרות</div>

                        <div className="one_tab tab_4"> 
                            <img src={problem_report_icon} className="problem_report_icon"/>
                        </div>

                    </div>
          

                    <div className="table_status_cont"> 
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


                    </div>


                </div>


                <img src={exit_icon} className="exit_icon" />

            </div>
         
        </>
    );

};

export default OperationSystemTabs;

