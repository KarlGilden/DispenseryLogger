import React, {useState, useRef} from 'react'
import Button from '../components/Button'
import IssueTab from '../components/IssueTab'
import Tag from '../components/Tag'
import {IoMdClose} from 'react-icons/io'
import {useNavigate} from 'react-router-dom'
import '../css/AddLog.css'
import { useAuth } from '../contexts/AuthContext'

function AddLog() {
    const navigate = useNavigate()
    const {user} = useAuth()
    const [issues, setIssues] = useState([])
    const [issueModal, setIssueModal] = useState(false)
    const [newIssueModal, setNewIssueModal] = useState(false)
    const [currentIssue, setCurrentIssue] = useState({})
    const [currentTags, setCurrentTags] = useState([])
    const [issueError, setIssueError] = useState()
    const [error, setError] = useState()

    const titleRef = useRef();
    const notesRef = useRef();

    const dischargeRef = useRef();
    const dateRef = useRef();    
    const outpRef = useRef();    
    const GPRef = useRef();
    const EDRef = useRef();    
    const paediatricRef = useRef();
    const eyleaRef = useRef();    
    const bicillinRef = useRef();
    const ferinjectRef = useRef();    
    const binocritRef = useRef();
    const aclastaRef = useRef();    
    const blisterPacksRef = useRef();
    const compoundingRef = useRef();    
    const yellowCardsRef = useRef();
    const covidRef = useRef();


    const handleSubmit = async () => {
        if(dateRef.current.value){
            await fetch('https://localhost:44326/api/AddLog',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({
                        "date": dateRef.current.value,
                        "discharge": dischargeRef.current.value ? dischargeRef.current.value : 0,
                        "outp": outpRef.current.value ? outpRef.current.value : 0,
                        "gp": GPRef.current.value ? GPRef.current.value : 0,
                        "ed": EDRef.current.value ? EDRef.current.value : 0,
                        "paediatric": paediatricRef.current.value ? paediatricRef.current.value : 0,
                        "eylea": eyleaRef.current.value ? eyleaRef.current.value : 0,
                        "bicillin": bicillinRef.current.value ? bicillinRef.current.value : 0,
                        "fennject": ferinjectRef.current.value ? ferinjectRef.current.value : 0,
                        "binocrit": binocritRef.current.value ? binocritRef.current.value : 0,
                        "blisterPacks": blisterPacksRef.current.value ? blisterPacksRef.current.value : 0,
                        "aclasta": aclastaRef.current.value ? aclastaRef.current.value : 0,
                        "covid": covidRef.current.value ? covidRef.current.value : 0,
                        "compounding": compoundingRef.current.value ? compoundingRef.current.value : 0,
                        "yellowCards": yellowCardsRef.current.value ? yellowCardsRef.current.value : 0,
                        "issues": issues,
                        "userId" : user.uid
                })
            })
            setError("")
            navigate('/')
        } else{
            setError('Please enter the date')

        }
    }

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
            setIssues(issues => [...issues, {title: titleRef.current.value, notes: notesRef.current.value, tags: currentTags.toString()}])
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
                    <h2>{currentIssue.title}</h2>
                    <p>{currentIssue.notes}</p>
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
            {error}
            <input className='date-input' type="date" ref={dateRef}/>
            <div className='classification-title'>
                <h3>Prescriptions</h3>
                <hr />
            </div>
            <div className='input'>
                <label htmlFor="">Discharge</label>
                <input type="number" ref={dischargeRef}/>
            </div>
            <div className='input'>
                <label htmlFor="">Outpatient Clinics</label>
                <input type="number" ref={outpRef}/>   
            </div> 
            <div className='classification-title'>
                <h3 >Other</h3>
                <hr />
            </div>
            <div className='input'>
                <label htmlFor="">Paediatrics</label>
                <input type="number" ref={paediatricRef}/>  
            </div>
            <div className='input'>
                <label htmlFor="">GP</label>
                <input type="number" ref={GPRef}/>  
            </div>
            <div className='input'>
                <label htmlFor="">ED</label>
                <input type="number" ref={EDRef}/>  
            </div>
            <div className='input'>
                <label htmlFor="">Compounding</label>
                <input type="number" ref={compoundingRef}/> 
            </div>
            <div className='input'>
                <label htmlFor="">Blister Packs</label>
                <input type="number" ref={blisterPacksRef}/> 
            </div>
            <div className='input'>
                <label htmlFor="">Yellow Cards</label>
                <input type="number" ref={yellowCardsRef}/>       
            </div>
            <div className='input'>
                <label htmlFor="">Eylea</label>
                <input type="number" ref={eyleaRef}/> 
            </div>
            <div className='input'>
                <label htmlFor="">Ferinject</label>
                <input type="number" ref={ferinjectRef}/> 
            </div>
            <div className='input'>
                <label htmlFor="">Bicillin</label>
                <input type="number" ref={bicillinRef}/> 
            </div>
            <div className='input'>
                <label htmlFor="">Aclasta</label>
                <input type="number" ref={aclastaRef}/> 
            </div>
            <div className='input'>
                <label htmlFor="">Binocrit</label>
                <input type="number" ref={binocritRef}/> 
            </div>
            <div className='input'>
                <label htmlFor="">Covid</label>
                <input type="number" ref={covidRef}/> 
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
                        <IssueTab key={value.title} func={showIssue} issue={value} />
                    )
                })}
            </div>
        </div>
        <Button func={handleSubmit} invert={false} text="Submit" size="large"/>
        </div>

    </div>
  )
}

export default AddLog