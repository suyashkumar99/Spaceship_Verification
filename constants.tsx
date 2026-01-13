
import React from 'react';
import { Participant } from './types';

/** 
 * // DATABASE INTEGRATED - FULL DATASET
 */
export const MOCK_DATABASE_RAW: Record<string, any> = {
  "SPCS89866": { "TEAM": "luna ", "Leader": "viraj singh", "Phone no.": "6203807909", "Email": "sigmaviraj18@gmail.com " },
  "SPCS89867": { "TEAM": "Auralis", "Leader": "Animesh Maharana", "Phone no.": "7209394085", "Email": "animeshmaharana007@gmail.com" },
  "SPCS89868": { "TEAM": "Rakshastra ", "Leader": "Manmit Mishra", "Phone no.": "9065329806", "Email": "almasirshad007@gmail.com" },
  "SPCS89869": { "TEAM": "LifeGuard Helmet ", "Leader": "Arsalan Ahmed khan", "Phone no.": "7349977909", "Email": "farhana.ahmed1313@gmail.com" },
  "SPCS89870": { "TEAM": "ADVAIT (New Gen's Vogue)", "Leader": "Amritanshu Jaiswal", "Phone no.": "9470106121", "Email": "amritanshu.j1304@gmail.com" },
  "SPCS89871": { "TEAM": "Skysight", "Leader": "Saloni Gupta ", "Phone no.": "6205981292", "Email": "in.salonigupta@gmail.com" },
  "SPCS89872": { "TEAM": "VitalOS", "Leader": "P Sitaram Raju", "Phone no.": "9955780663", "Email": "rajupsitaram@gmail.com" },
  "SPCS89873": { "TEAM": "Ascend capsule", "Leader": "Alesha aziz", "Phone no.": "9905214914", "Email": "shreyasidutta2505@gmail.com" },
  "SPCS89874": { "TEAM": "To the assistant of AI medical", "Leader": "Yogeshwar giri ", "Phone no.": "9798366607", "Email": "rcgiri2315@gmail.com" },
  "SPCS89875": { "TEAM": "ScamShield India, an AI scam checker", "Leader": "ANIMESH DINDA", "Phone no.": "9110053064", "Email": "animeshdindapersonal@gmail.com" },
  "SPCS89876": { "TEAM": "TRASH TECH", "Leader": "Dimple jaggi", "Phone no.": "8987528347", "Email": "amitjaggi.jsr@gmail.com" },
  "SPCS89877": { "TEAM": "Plastic Detector", "Leader": "Adarsh Kumar", "Phone no.": "8809269029", "Email": "cvsouthpark@gmail.com" },
  "SPCS89878": { "TEAM": "AI- Based Structural Health Monitoring System (SHMS)", "Leader": "Anu Kumari", "Phone no.": "9905670840", "Email": "anukumarimpr92@gmail.com" },
  "SPCS89879": { "TEAM": "Application of AI in identifying Thermal Runaway in lithium ion battery.", "Leader": "Pummy Kumari", "Phone no.": "9110063664", "Email": "pummykumari374@gmail.com" },
  "SPCS89880": { "TEAM": "Agri Guard AI-Smart Technology for Smart Farmers", "Leader": "SUMAN KUMARI", "Phone no.": "7844909039", "Email": "suman29jan@gmail.com" },
  "SPCS89881": { "TEAM": "Automated Plant Monitoring System", "Leader": "SUMAN KUMARI", "Phone no.": "7844909039", "Email": "suman29jan@gmail.com" },
  "SPCS89882": { "TEAM": "AI System for early risk detection of Type-2 Diabetes", "Leader": "SUMAN KUMARI", "Phone no.": "7844909039", "Email": "suman29jan@gmail.com" },
  "SPCS89883": { "TEAM": "EchoGlove", "Leader": "Jayashree Mishra", "Phone no.": "7209122689", "Email": "jivajsa1301@gmail.com" },
  "SPCS89884": { "TEAM": "ClearStream-Dual Function Dust remover for Laptops and PC's which also acts as a air purifier.", "Leader": "Souryadipta Sarkar", "Phone no.": "8092000102", "Email": "srdipta2010@outlook.com" },
  "SPCS89885": { "TEAM": "AI- BASED CAREER GUIDANCE SYSTEM FOR UG STUDENTS", "Leader": "Anmol kumari", "Phone no.": "9142479123", "Email": "anmolsingh914247@gmail.com" },
  "SPCS89886": { "TEAM": "CYBER SECURITY APP", "Leader": "SUMAN KUMARI", "Phone no.": "7844909039", "Email": "suman29jan@gmail.com" },
  "SPCS89887": { "TEAM": "Smart Medicine Dispenser ", "Leader": "Shaurya Mohanty", "Phone no.": "7677585774", "Email": "rumamohanty075@gmail.com" },
  "SPCS89888": { "TEAM": "Al-Powered Text-to-Image Generation System Using Deep Learning", "Leader": "SANA ANJUM ", "Phone no.": "6200821748", "Email": "sanaanjum149@gmail.com" },
  "SPCS89889": { "TEAM": "Aspiro", "Leader": "Aarush Karn", "Phone no.": "7004749381", "Email": "zenorix69@gmail.com" },
  "SPCS89890": { "TEAM": "AI Telemedicine Ecosystem", "Leader": "Prashant Piyush ", "Phone no.": "8227844567", "Email": "prashantpiyushji@gmail.com" },
  "SPCS89891": { "TEAM": "Career confusion in student ", "Leader": "Riya gupta", "Phone no.": "9122214483", "Email": "riyagupta676788@gmail.com" },
  "SPCS89892": { "TEAM": "Comply AI", "Leader": "Sudeshna Datta", "Phone no.": "7903347193", "Email": "sudeshnadatta0708@gmail.com " },
  "SPCS89893": { "TEAM": "Parallax ", "Leader": "Sudeshna Datta", "Phone no.": "7903347193", "Email": "sudeshnadatta0708@gmail.com" },
  "SPCS89894": { "TEAM": "Automatic LPG Gas Leakage Detection System", "Leader": "Sudeshna Datta", "Phone no.": "7903347193", "Email": "sudeshnadatta0708@gmail.com" },
  "SPCS89895": { "TEAM": "Visionaide- an AI- powered personal navigation as well as a social assistant device", "Leader": "Sudeshna Dutta ", "Phone no.": "7903347193", "Email": "sudeshnadutta0708@gmail.com" },
  
  "SPCS89897": { "TEAM": "Automated Water Cleaner V1", "Leader": "Sudeshna Datta", "Phone no.": "7903347193", "Email": "sudeshnadatta0708@gmail.com" },
  "SPCS89898": { "TEAM": "Problems of ai on health condition ", "Leader": "Kanti Lakra ", "Phone no.": "9142129893", "Email": "kantilakra397@gmail.com" },
  "SPCS89899": { "TEAM": "VisionGuard AI", "Leader": "Anjali Gupta", "Phone no.": "9931508067", "Email": "anjalinisha1995@gmail.com" },
  "SPCS89900": { "TEAM": "EduMinds AI – Intelligent Learning & Teaching Assistant for Schools", "Leader": "Dr. Md Soaib Khan", "Phone no.": "8797130461", "Email": "shoaib.khan.shoaib@gmail.com" },
  "SPCS89901": { "TEAM": "WebSecUltra", "Leader": "Anvesha Singh", "Phone no.": "9236518010", "Email": "9a.anveshasingh@gmail.com" },
  "SPCS89902": { "TEAM": "Plastimelt", "Leader": "Arshpreet Kaur", "Phone no.": "9304735031", "Email": "arshpreetkour402@gmail.com" },
  "SPCS89903": { "TEAM": "KrishiSphere", "Leader": "Deep Kumar Sah", "Phone no.": "9122922593", "Email": "deepkumarsah35@gmail.com" },
  "SPCS89904": { "TEAM": "The NEXUS-GENESIS OMNI-CELL", "Leader": "Sukriti Paul", "Phone no.": "6203706885", "Email": "sukritipaulkps2020@gmail.com" },
  "SPCS89905": { "TEAM": "Drishti ( The Third Eye )", "Leader": "Amrita Singh ", "Phone no.": "8340274521", "Email": "mehtaneelamsingh@gmail.com" },
  "SPCS89906": { "TEAM": "EDUMENTOR", "Leader": "Shubhodeep Sarkar ", "Phone no.": "6200604530", "Email": "shubhodeepsarkar100@gmail.com" },
  "SPCS89907": { "TEAM": "AI Memory Path Builder and Navigator", "Leader": "Siddhant Panda", "Phone no.": "9031001559", "Email": "siddhantpanda2011@gmail.com" },
  
  "SPCS89909": { "TEAM": "Solar water purifier and air purifier ", "Leader": "Rajveer prasad", "Phone no.": "9608794302", "Email": "anitadevi9608794302@gmail.com" },
  "SPCS89910": { "TEAM": "MicroBioShield ", "Leader": "Abhinav Kumar ", "Phone no.": "9204639174", "Email": "abhinavjsr470@gmail.com" },
  "SPCS89911": { "TEAM": "Autoployer ", "Leader": "Adhyan Agarwal ", "Phone no.": "9430173980", "Email": "Iamhuman.pro2012@gmail.com" },
  "SPCS89912": { "TEAM": "Multi-Dimensional Fog Harvesting System", "Leader": "Rajvir", "Phone no.": "98355 34038 ", "Email": "rajvireducations@gmail.com" },
  "SPCS89913": { "TEAM": "Sunlight traking device", "Leader": "Priyanshu Upadhyay ", "Phone no.": "9801991418", "Email": "priyanshuupadhyay.jsr@gmail.com " },
  "SPCS89914": { "TEAM": "Help Students with \"EMOTIONAL BURNOUT\"", "Leader": "Bharti Kumari", "Phone no.": "+91 96081 83769", "Email": "nzzpalak2008@gmail.com" },
  "SPCS89915": { "TEAM": "Turn safely", "Leader": "Prem Kumar", "Phone no.": "7209416248", "Email": "premkumar.707826373@gmail.com " },
  "SPCS89916": { "TEAM": "Fabrication of Scrap Lifting Machine", "Leader": "Mohammad Serajuddin", "Phone no.": "9852341386", "Email": "mohammad.serajuddin@akp.ac.in" },
  "SPCS89917": { "TEAM": "Assembly of container loading with pulley", "Leader": "Md. Serajuddin", "Phone no.": "9852341386", "Email": "mohammad.serajuddin@akp.ac.in" },
  "SPCS89918": { "TEAM": "360 Degree Rotation Fire Protection System", "Leader": "Md. Serajuddin", "Phone no.": "9852341386", "Email": "mohammad.serajuddin@akp.ac.in" },
  "SPCS89919": { "TEAM": "Electric Cycle", "Leader": "Md. Serajuddin", "Phone no.": "9852341386", "Email": "mohammad.serajuddin@akp.ac.in" },
  "SPCS89920": { "TEAM": "AI-ENHANCED SMART OPTICAL FIBER WALL SYSTEM", "Leader": "Md. Serajuddin", "Phone no.": "9852341386", "Email": "mohammad.serajuddin@akp.ac.in" },
  "SPCS89921": { "TEAM": "Vita Twin AI", "Leader": "Mohammad Serajuddin", "Phone no.": "9852341386", "Email": "mohammad.serajuddin@akp.ac.in" },
  "SPCS89922": { "TEAM": "Kinetic Strata", "Leader": "Abhyudai Nath Pathak", "Phone no.": "8809037330", "Email": "abhyudainathpathakroll4@gmail.com" },
  "SPCS89923": { "TEAM": "A Dual-Interface platform for understanding student behaviour and emotional well-being.", "Leader": "Ritika Singh", "Phone no.": "8709194144", "Email": "ritikasingh98253@gmail.com " },
  "SPCS89924": { "TEAM": "Before you croak , prevent the stroke ", "Leader": "Sushovan sen", "Phone no.": "7488912840", "Email": "39sushovansen10a@gmail.com" },
  "SPCS89925": { "TEAM": "Smart Winter Essentials ", "Leader": "Ananya Kumari", "Phone no.": "7488875385", "Email": "ananyakumariyadav7@gmail.com" },
  "SPCS89926": { "TEAM": "X SQUARES", "Leader": "AYANK RAJ", "Phone no.": "9939616078", "Email": "ayankraj2006@gmail.com" },
  "SPCS89927": { "TEAM": "Ai-Driven Next-Gen Sensing Solutions for Petrochemical and Steel Industries", "Leader": "Dr. Partha Sarkar", "Phone no.": "7501501110", "Email": "parthasarkar.ctu@gmail.com" },
  "SPCS89928": { "TEAM": "VanKrishi", "Leader": "SUYASH KUMAR", "Phone no.": "6287679824", "Email": "vankrishi.axss@gmail.com" }
};

// Field Mapping Logic: TEAM -> Team Name (UI), Leader -> Participant Name (UI)
export const MOCK_DATABASE: Participant[] = Object.entries(MOCK_DATABASE_RAW).map(([uniqueId, data]) => ({
  name: String(data.TEAM), // Maps "TEAM" from JSON to the topic/team name
  eventName: String(data.Leader), // Maps "Leader" from JSON to the leader's name
  email: String(data.Email).trim(),
  registeredDate: String(data["Phone no."]), // Storing phone number here for review
  status: 'PENDING',
  uniqueId: uniqueId
}));

export const UNIQUE_ID_PREFIX = "SPCS"; 

export const Icons = {
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 text-indigo-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
};
