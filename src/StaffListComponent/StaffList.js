import React from "react";
import staffs from '../StaffListComponent/staffs';
//{STAFFS} from './StaffListComponent/staffs';

class StaffList extends  React.Component{
    constructor(props) {
        super(props);
        this.staffListData = this.props.staffListData
    }

     handleClick = (item) =>{
        this.props.handleClickApp(item);
    }	
    render()
    {
        return (
		<div>
			<div className="container">
				<div className="row">
					{this.staffListData.map((item, key) => {
						return (
                        <div className="col-12 col-md-6 col-lg-4" key={key}>
                            <button onClick={() => {this.handleClick(item)}}>{item.name}</button>
                        </div>
                    )
					})}
				</div>
			</div>
		</div>
        );
    }
}

export default StaffList;


