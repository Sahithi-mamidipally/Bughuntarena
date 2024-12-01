import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./detail-challenge.css";

const DetailChallange = () => {
    const {id} = useParams()

    const challengesList = {
        1: {title: "Red Trails", link:"/files/RedTrails.zip" , description:"Our SOC team detected a suspicious activity on one of our redis instance. Despite the fact it was password protected it seems that the attacker still obtained access to it. We need to put in place a remediation strategy as soon as possible, to do that it's necessary to gather more informations about the attack used. NOTE: flag is composed by three parts.", answer:"HTB{r3d15_1n574nc35_c0uld_0p3n_n3w_un3xp3c73d_7r41l5!}"},
        2: { title: "ReMeeting the Wheel", link:"/files/ReMeeting_the_Wheel.zip", description:"While Alice was daydreaming, she thought of using RSA to transfer an AES key for faster encryption, what an innovative idea! However, Bob warned her that if she made a mistake, Eve could potentially split the AES key into two equal-sized pieces. Would it cause any trouble?", answer:"HTB{b3tt3r_m33t_1n_r341_11f3_t0_t311_th3_s3cr3t_th4n_us3_unp4dd3d_R54!}"},
    }
    const [input, setInput] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState('');
    const checkSolution = () =>{
        if(challengesList[id]?.answer === input){
            setSubmissionStatus('success');
        } else {
            setSubmissionStatus('failure');
        }
        setInput('');
    }
return (<div className="detail">
   <h1 className="challenges-title">{challengesList[id].title}</h1>
   <div className="challenge-desc">
    {challengesList[id].description}
   </div>

   Download the challenge by clicking <a 
  href={challengesList[id]?.link || '#'} 
  download 
  target="_blank" 
  rel="noopener noreferrer"
>
  Download here 
</a>

<div className="solution">
    Please type your identified key here to verify:
    <input type="text" value={input} onInput={e => setInput(e.target.value)} ></input>
    <button type="submit" onClick={checkSolution}>Check</button>
</div>

{submissionStatus === 'success' && (
        <p style={{ color: 'green' }}>The found the correct Flag!</p>
      )}
      {submissionStatus === 'failure' && (
        <p style={{ color: 'red' }}>It's a wrong flag. Please try again.</p>
      )}

<div ></div>

</div>);
};
export default DetailChallange;