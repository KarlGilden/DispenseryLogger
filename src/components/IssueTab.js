import React from 'react'
import '../css/IssueTab.css'
import Tag from './Tag'
function IssueTab({issue, func}) {

  return (
    <div onClick={()=>{func(issue)}} className="issue-wrapper">
        <h3>{issue.title}</h3>
        {issue.tags.split(',').map(value=>{
            return(<Tag text={value}/>)
        })}
    </div>
  )
}

export default IssueTab