import StaffList from './StaffListComponent/StaffList';
import {useState} from "react";

import {STAFFS} from "./StaffListComponent/staffs";
import dateFormat from 'dateformat';
function App() {
    const [staffInfo, setStaffInfo] = useState([]);
    const [flag,setFlag] = useState(false);
    const onSetStaffInfo = (item) => {
        if(item != null && item.name != undefined)
        {
            setFlag(true);
            setStaffInfo(item);
        }else {
            setFlag(false);
        }
    }
  return (
  <div>
	<div className="container-fluid bg-primary">
		<div className="row">
			<div className="col-12">
				<h1>Ứng dụng quản lý nhân sự</h1>
			</div>
		</div>
	</div>
	<div className="container">
		<div className="row">
			<StaffList handleClickApp={onSetStaffInfo} staffListData={STAFFS}/>
		</div>

	</div>
	<div className="container">
		<div className="row">
		{flag ?
			<div className="col-12 col-md-6 col-lg-4">
                
                    <p>FullName: <span> {staffInfo.name}</span></p>
                    <p>BornDays: <span> {dateFormat(staffInfo.doB, "dd/MM/yyyy")}</span></p>
					<p>Deparments: <span> {staffInfo.department.name}</span></p>
                    <p>LeaveDaysLeft: <span>{staffInfo.annualLeave}</span></p>
                    <p>WorkDaysMore:<span>{staffInfo.overTime}</span></p>
                
			</div>
			:
			<p>Hãy click vào xem thông tin nhân viên </p>
		}
		</div>
	</div>
  </div>
	);
}
export default App;


