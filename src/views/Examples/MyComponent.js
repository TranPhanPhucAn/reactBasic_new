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
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            arrJobs: currentJobs
            //arrJobs: [...this.state.arrJobs,job]
        })
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs,
            
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
                    deleteAJob={this.deleteAJob}
                />
                {/* <ChildComponent name={'child two'} />
                <ChildComponent name={'child three'}/> */}
                
            </>
        )
    }
}
export default MyComponent;