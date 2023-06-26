import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component{
    state ={ 
        arrJobs: [
            { id: 'bacJob1', title: 'Developer', salary: '500' },
            { id: 'bacJob2', title: 'Tester', salary: '400' },
            { id: 'bacJob3', title: 'Project Manager', salary:'1000'}     
        ]
    }
    
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
    }
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                addNewJob={this.addNewJob}
                />
               

                <ChildComponent
                    // name={this.state.firstName}
                    // age={'26'}
                    // address={'Ha Noi'}
                    arrJobs={this.state.arrJobs}
                />
                {/* <ChildComponent name={'child two'} />
                <ChildComponent name={'child three'}/> */}
                
            </>
        )
    }
}
export default MyComponent;