import React, {useState, useRef} from 'react'
import Button from '../components/Button'
import IssueTab from '../components/IssueTab'
import Tag from '../components/Tag'
import {IoMdClose} from 'react-icons/io'
import '../css/AddLog.css'
function AddLog() {
    const [issues, setIssues] = useState([{name: "Unplanned Blister Pack", text:"placeholder placeholder placeholder", tags: ["Payment", "Other"]}, {name: "Problem with payment", text:"placeholder placeholder placeholder", tags: ["Payment"]}])
    const [issueModal, setIssueModal] = useState(false)
    const [newIssueModal, setNewIssueModal] = useState(false)
    const [currentIssue, setCurrentIssue] = useState({})
    const [currentTags, setCurrentTags] = useState([])
    const [issueError, setIssueError] = useState()
    const titleRef = useRef();
    const notesRef = useRef();

    const showIssue = (issue) =>{
        setIssueModal(true)
        setCurrentIssue(issue)
    }

    const closeIssue = () => {
        setIssueModal(false)
        setCurrentIssue({})
    }

    const showNewIssue = () =>{
        setNewIssueModal(true)
    }

    const closeNewIssue = () => {
        setNewIssueModal(false)
    }

    const submitIssue = () => {
        if(titleRef.current.value == '' || notesRef.current.value == '' || currentTags.length == 0){
            setIssueError('Please enter all fields')
        }else{
            setIssues(issues => [...issues, {name: titleRef.current.value, text: notesRef.current.value, tags: currentTags}])
            setCurrentTags([])
            setIssueError('')
            closeNewIssue()

        }
    }

    const addTag = (name) => {
        if(currentTags.includes(name)){
            setCurrentTags(currentTags.filter(item => item !== name))
        }else{
            setCurrentTags(currentTags => [...currentTags, name])
        }
    }

    return (
    <div className="add-log-page">
        {issueModal &&
        <div className='issue-modal-wrapper'>
            <div className='issue-modal'>
                <div className="issue-modal-header">
                    <h2>Issue</h2>
                    <IoMdClose className='close-btn' onClick={closeIssue}/>
                </div>
                <div className="issue-modal-body">
                    <h2>{currentIssue.name}</h2>
                    <p>{currentIssue.text}</p>
                    {currentIssue.tags.map(value=>{
                        return(
                            <Tag text={value}/>
                        )
                    })}
                </div>
            </div>
        </div>
        }
        {newIssueModal &&
        <div className='issue-modal-wrapper'>
            <div className='issue-modal'>
                <div className="issue-modal-header">
                    <h2>New Issue</h2>
                    <IoMdClose className='close-btn' onClick={closeNewIssue}/>
                </div>
                <div className="issue-modal-body new-issue-body">
                    <input ref={titleRef} placeholder='Title' className='issue-title-input' type="text" />
                    <textarea ref={notesRef} placeholder='notes...' className='issue-text-input' type="text-area" />
                    <div className="issue-tags-wrapper">
                        <Tag func={addTag} text="Dispensery"/>
                        <Tag func={addTag} text="Intervention"/>
                        <Tag func={addTag} text="Payment"/>
                        <Tag func={addTag} text="Other"/>
                    </div>
                    {issueError}
                    <Button func={submitIssue} text="Submit"/>
                </div>
            </div>
        </div>
        }
        <div className='inputs'>
            <input className='date-input' type="date" />
            <div className='classification-title'>
                <h3>Prescriptions</h3>
                <hr />
            </div>
            <div className='input'>
                <label htmlFor="">Discharge</label>
                <input type="number" />
            </div>
            <div className='input'>
                <label htmlFor="">Outpatient Clinics</label>
                <input type="number" />   
            </div> 
            <div className='input'>
                <label htmlFor="">Emergency Department</label>
                <input type="number" />  
            </div>  
            <div className='input'>   
                <label htmlFor="">Staff / GP</label>
                <input type="number" /> 
            </div>
            <div className='classification-title'>
                <h3 >Other</h3>
                <hr />
            </div>
            <div className='input'>
                <label htmlFor="">Paediatrics</label>
                <input type="number" />  
            </div>
            <div className='input'>
                <label htmlFor="">GP</label>
                <input type="number" />  
            </div>
            <div className='input'>
                <label htmlFor="">ED</label>
                <input type="number" />  
            </div>
            <div className='input'>
                <label htmlFor="">Outp</label>
                <input type="number" />  
            </div>
            <div className='input'>
                <label htmlFor="">Compounding</label>
                <input type="number" /> 
            </div>
            <div className='input'>
                <label htmlFor="">Blister Packs</label>
                <input type="number" /> 
            </div>
            <div className='input'>
                <label htmlFor="">Yellow Cards</label>
                <input type="number" />       
            </div>
            <div className='input'>
                <label htmlFor="">Eylea</label>
                <input type="number" /> 
            </div>
            <div className='input'>
                <label htmlFor="">Ferinject</label>
                <input type="number" /> 
            </div>
            <div className='input'>
                <label htmlFor="">Bicillin</label>
                <input type="number" /> 
            </div>
            <div className='input'>
                <label htmlFor="">Aclasta</label>
                <input type="number" /> 
            </div>
            <div className='input'>
                <label htmlFor="">Binocrit</label>
                <input type="number" /> 
            </div>
            <div className='input'>
                <label htmlFor="">Covid</label>
                <input type="number" /> 
            </div>
        </div>
        <div>
        <div className="problems-wrapper">
            <div className="problems-header">
                <h2>Issues</h2>
                <Button func={showNewIssue} invert={true} text="Log Issue" size="large"/>
            </div>
            <div className="problems-body">
                {issues.map(value=>{
                    return(
                        <IssueTab key={value.name} func={showIssue} issue={value} />
                    )
                })}
            </div>
        </div>
        <Button invert={false} text="Submit" size="large"/>
        </div>

    </div>
  )
}

export default AddLog