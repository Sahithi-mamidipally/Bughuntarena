import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./detail-challenge.css";

const DetailChallange = () => {
    const {id} = useParams()

    const challengesList = {
        1: {title: "Red Trails", link:"/files/RedTrails.zip" , description:"1.Read the Challenge Description Carefully Understand the scenario and look for hints in the text or attached files. There are keywords like 'logs,' 'traffic,' or 'activity,' which might indicate a log analysis or forensics exercise. 2. Prepare and Arrange Your Tools For Log Analysis: Tools: Use grep, awk, or sed for pattern matching. Analyze logs with visualization tools like Splunk, Kibana, or ELK. For Network Traffic: Tools: Wireshark or tcpdump for analyzing .pcap files. Focus on filtering suspicious traffic (e.g., with HTTP, DNS, or known attack patterns). 3. Investigate Systematically Identify Suspicious Activity: Look for anomalies like unexpected IP addresses, unusual login attempts, or spikes in traffic. Search for patterns of known attacks (e.g., SQL injection, brute force, etc.). Check Logs or Traffic Patterns: Look for timestamps, specific HTTP requests, or commands executed. 4. Research Indicators of Compromise (IoC) If the challenge hints at malware or attack traces, research any hashes, domains, or IP addresses found. Use OSINT tools like VirusTotal, Shodan, or Censys for detailed insights. 5. Think Like an Intruder rather than an Insider Assume the attacker may have left trails in unexpected places (e.g., temp directories, hidden fields in files). Use forensic tools like strings, binwalk, or foremost on provided files to uncover embedded data. 6. Common Techniques File Analysis: Analyze the file type (e.g., .log, .pcap, or .txt). Extract artifacts using tools like grep or splunk. PCAP Analysis: Look for signs of exploitation in the packets (e.g., strange payloads, DNS exfiltration, etc.). Filter traffic by HTTP or DNS to pinpoint suspicious data. 7. Validate Findings Cross-check findings with known attack vectors or search CVE databases if vulnerabilities are hinted. Look for subtle signs that match the challenge's theme ('Red Trails' might imply attack trails or footprints). 8. Check Forums for help regarding the challenge.", answer:"HTB{r3d15_1n574nc35_c0uld_0p3n_n3w_un3xp3c73d_7r41l5!}"},
        2: { title: "ReMeeting the Wheel", link:"/files/ReMeeting_the_Wheel.zip", description:"1. Understand the Challenge Carefully read the description for hints. The name 'Remeeting the Wheel' might reference classic cryptographic machines, such as the Enigma machine, which used rotors (wheels) for encryption. 2. Identify the Cipher If ciphertext is provided, examine its characteristics: Repetition patterns: Could indicate a substitution cipher or a rotor-based system. Letter frequency analysis: Useful for monoalphabetic or polyalphabetic ciphers. If numbers are involved, it could hint at binary, ASCII, or modular arithmetic. 3. Try Common Ciphers ROT13/Caesar Cipher: If the text is simple and alphabetical. Vigenère Cipher: If the text involves repeating key patterns. Enigma Machine Simulation: Use tools like CyberChef, dCode, or Python libraries like py-enigma to simulate decryption. Substitution Cipher: Use tools like dCode’s frequency analysis to map letters. 4. Look for Clues If additional files are provided, such as encoded messages, configurations, or keys, they may hold critical hints. Pay attention to metadata or hidden data in provided materials. 5. Tools to Use CyberChef: For trying various ciphers and encoding schemes. dCode: For solving specific cryptographic puzzles. Python: Write scripts to automate decryption or brute force guesses. 6. Debug Your Process Revisit your decryption steps if you’re not getting meaningful results. Double-check that any settings (like rotor positions or offsets) match the clues provided. 7. Verify the Output If you decrypt something that looks like HTB{...}, make sure there are no extra spaces or formatting issues. Use logic to see if the plaintext makes sense—classic challenges often result in readable English text or phrases.", answer:"HTB{b3tt3r_m33t_1n_r341_11f3_t0_t311_th3_s3cr3t_th4n_us3_unp4dd3d_R54!}"},
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
</div>);
};
export default DetailChallange;