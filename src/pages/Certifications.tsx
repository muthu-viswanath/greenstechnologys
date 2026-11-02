import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Award,
  Sparkles,
  Download,
  BookOpen,
  ExternalLink,
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  Laptop,
  Layers,
  ArrowRight,
  Filter,
  ShieldCheck,
  ChevronRight,
  X
} from 'lucide-react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';

// Certification Images
import certCloudAzureImg from '../assets/courses/cert_cloud_azure.jpg';
import certSalesforceErpImg from '../assets/courses/cert_salesforce_erp.jpg';
import certMgmtAgileImg from '../assets/courses/cert_mgmt_agile.jpg';
import certRpaRoboticsImg from '../assets/courses/cert_rpa_robotics.jpg';
import certNetworkInfraImg from '../assets/courses/cert_network_infra.jpg';

import javaGenAiImg from '../assets/courses/course_java_genai.jpg';
import pythonGenAiImg from '../assets/courses/course_python_genai.jpg';
import genaiMasterImg from '../assets/courses/course_genai_master.jpg';
import sdetExpertImg from '../assets/courses/course_sdet_expert.jpg';
import dataAnalyticsImg from '../assets/courses/course_data_analytics.jpg';
import devopsMasterImg from '../assets/courses/course_devops_master.jpg';
import n8nAutomationImg from '../assets/courses/course_n8n_automation.jpg';
import forwardDeployedImg from '../assets/courses/course_forward_deployed.jpg';

interface CertificationItem {
  id: string;
  title: string;
  category: 'Cloud & DevOps' | 'AI & Data Science' | 'Testing & QA' | 'Full Stack & Programming' | 'Enterprise & ERP' | 'Automation & RPA' | 'Management & Agile' | 'Systems & Infrastructure';
  level: 'Associate' | 'Professional' | 'Expert';
  image: string;
  duration: string;
  provider: string;
  readMoreUrl?: string;
  contentUrl: string;
  badge?: string;
  keySkills: string[];
}

const certificationsList: CertificationItem[] = [
  // 1. Database & Cloud
  {
    id: 'oracle',
    title: 'ORACLE Database & SQL Certified Associate',
    category: 'Cloud & DevOps',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '60 Hrs',
    provider: 'Oracle University',
    badge: 'Popular',
    readMoreUrl: 'https://www.greenstechnologys.com/oracle-training-in-chennai.html',
    contentUrl: 'https://www.greenstechnologys.com/oracle-training-in-chennai.html',
    keySkills: ['Oracle 19c', 'PL/SQL', 'Database Admin', 'Performance Tuning'],
  },
  {
    id: 'azure',
    title: 'Microsoft Azure Solutions Architect Certification',
    category: 'Cloud & DevOps',
    level: 'Expert',
    image: certCloudAzureImg,
    duration: '70 Hrs',
    provider: 'Microsoft Certified',
    badge: 'Top Rated',
    contentUrl: 'https://www.greenstechnologys.com/windows-Azure-training-in-chennai.html',
    keySkills: ['AZ-104 / AZ-305', 'Cloud Architecture', 'Virtual Machines', 'ARM / Bicep'],
  },
  {
    id: 'devops',
    title: 'DevOps & SRE Multi-Cloud Master Certification',
    category: 'Cloud & DevOps',
    level: 'Expert',
    image: devopsMasterImg,
    duration: '80 Hrs',
    provider: 'Cloud Native / Linux Foundation',
    badge: 'High Demand',
    contentUrl: 'https://www.greenstechnologys.com/devops-training-and-certification-in-chennai.html',
    keySkills: ['Docker', 'Kubernetes', 'CI/CD Jenkins', 'Terraform', 'Prometheus'],
  },
  {
    id: 'linux',
    title: 'LINUX System Administration & RHCSA Certification',
    category: 'Cloud & DevOps',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '50 Hrs',
    provider: 'Red Hat / Linux Foundation',
    contentUrl: 'https://greenstechnologys.com/linux-training-in-chennai.html',
    keySkills: ['Shell Scripting', 'User Management', 'Kernel Tuning', 'SSH & Networking'],
  },
  {
    id: 'virtualization',
    title: 'Virtualization & VMware Certified Professional',
    category: 'Cloud & DevOps',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '45 Hrs',
    provider: 'VMware / Hyper-V',
    contentUrl: 'https://greenstechnologys.com/virtualization-training-in-chennai.html',
    keySkills: ['vSphere ESXi', 'vCenter Server', 'SAN Storage', 'HA & DRS Clustering'],
  },
  {
    id: 'unix',
    title: 'UNIX Server Administration & Shell Scripting',
    category: 'Cloud & DevOps',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '40 Hrs',
    provider: 'Unix Standards',
    contentUrl: 'https://greenstechnologys.com/unix-course-content.html',
    keySkills: ['POSIX Shell', 'Cron Jobs', 'File Hierarchy', 'Process Automation'],
  },

  // 2. Testing & QA
  {
    id: 'istqb',
    title: 'ISTQB Certified Tester (Foundation & Advanced)',
    category: 'Testing & QA',
    level: 'Associate',
    image: sdetExpertImg,
    duration: '40 Hrs',
    provider: 'ISTQB Global Board',
    badge: 'Global Standard',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['Test Design', 'Black-Box Testing', 'Defect Lifecycle', 'Static Testing'],
  },
  {
    id: 'selenium',
    title: 'Selenium WebDriver Automation SDET Certification',
    category: 'Testing & QA',
    level: 'Professional',
    image: sdetExpertImg,
    duration: '65 Hrs',
    provider: 'Greens Certified SDET',
    badge: 'Top Choice',
    contentUrl: 'https://greenstechnologys.com/selenium-course-content.html',
    keySkills: ['Java Selenium', 'TestNG', 'Cucumber BDD', 'Page Object Model', 'CI/CD'],
  },
  {
    id: 'software-testing',
    title: 'Manual & Software Testing Professional Certification',
    category: 'Testing & QA',
    level: 'Associate',
    image: sdetExpertImg,
    duration: '50 Hrs',
    provider: 'QA Standards Board',
    readMoreUrl: 'https://greenstechnologys.com/software-testing.html',
    contentUrl: 'https://greenstechnologys.com/software-testing-course-content.html',
    keySkills: ['SDLC & STLC', 'Agile Testing', 'Jira Defect Tracking', 'API Testing Postman'],
  },
  {
    id: 'astqb-mobile',
    title: 'ASTQB Certified Mobile Application Tester',
    category: 'Testing & QA',
    level: 'Professional',
    image: sdetExpertImg,
    duration: '45 Hrs',
    provider: 'ASTQB American Board',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['Appium Mobile', 'iOS & Android Testing', 'Mobile Usability', 'Network Sim'],
  },
  {
    id: 'performance-tuning',
    title: 'Software Performance Testing & Tuning (JMeter / LoadRunner)',
    category: 'Testing & QA',
    level: 'Expert',
    image: sdetExpertImg,
    duration: '45 Hrs',
    provider: 'Performance Guild',
    contentUrl: 'https://greenstechnologys.com/performance-tunning-course-content.html',
    keySkills: ['Apache JMeter', 'LoadRunner', 'Stress & Spike Testing', 'Bottleneck Analysis'],
  },

  // 3. Project Management & Agile
  {
    id: 'scrum-master',
    title: 'Scrum Master Certification (CSM / PSM)',
    category: 'Management & Agile',
    level: 'Professional',
    image: certMgmtAgileImg,
    duration: '35 Hrs',
    provider: 'Scrum Alliance / Scrum.org',
    badge: 'High Value',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['Sprint Planning', 'Daily Standups', 'Retrospectives', 'Backlog Refinement'],
  },
  {
    id: 'pmp',
    title: 'PMP® Project Management Professional Certification',
    category: 'Management & Agile',
    level: 'Expert',
    image: certMgmtAgileImg,
    duration: '50 Hrs',
    provider: 'Project Management Institute (PMI)',
    badge: 'Global Elite',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['PMBOK 7th Ed', 'Agile & Hybrid PM', 'Risk Management', 'Scope & Budget'],
  },
  {
    id: 'capm',
    title: 'CAPM® Certified Associate in Project Management',
    category: 'Management & Agile',
    level: 'Associate',
    image: certMgmtAgileImg,
    duration: '35 Hrs',
    provider: 'PMI Global',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['Project Methodologies', 'Predictive Life Cycles', 'Stakeholder Comms'],
  },
  {
    id: 'itil',
    title: 'ITIL® 4 Foundation IT Service Management',
    category: 'Management & Agile',
    level: 'Associate',
    image: certMgmtAgileImg,
    duration: '30 Hrs',
    provider: 'Axelos Global',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['Service Value System', 'Incident & Problem Mgmt', 'Continual Improvement'],
  },
  {
    id: 'cbap',
    title: 'CBAP® Certified Business Analysis Professional',
    category: 'Management & Agile',
    level: 'Expert',
    image: certMgmtAgileImg,
    duration: '55 Hrs',
    provider: 'IIBA® International Institute',
    badge: 'Senior BA',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['BABOK® Guide v3', 'Requirements Engineering', 'Solution Evaluation'],
  },
  {
    id: 'ccba',
    title: 'CCBA® Certification of Capability in Business Analysis',
    category: 'Management & Agile',
    level: 'Professional',
    image: certMgmtAgileImg,
    duration: '40 Hrs',
    provider: 'IIBA® Global',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['Elicitation Techniques', 'Process Modeling (BPMN)', 'Stakeholder Analysis'],
  },
  {
    id: 'togaf',
    title: 'TOGAF® Enterprise Architecture Certification',
    category: 'Management & Agile',
    level: 'Expert',
    image: certMgmtAgileImg,
    duration: '45 Hrs',
    provider: 'The Open Group',
    contentUrl: 'https://www.greenstechnologys.com/togaf-training.html',
    keySkills: ['Architecture Development Method (ADM)', 'Business & Data Architecture'],
  },

  // 4. Enterprise & ERP
  {
    id: 'salesforce',
    title: 'SALESFORCE Certified Administrator & Developer',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '65 Hrs',
    provider: 'Salesforce Trailhead Certified',
    badge: 'Top Trending',
    contentUrl: 'https://greenstechnologys.com/Sales-Force-CRM-training-institute-Chennai.html',
    keySkills: ['Apex & Visualforce', 'Lightning Web Components', 'Sales & Service Cloud', 'SOQL'],
  },
  {
    id: 'sap-abap',
    title: 'SAP ABAP on HANA Enterprise Developer Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '75 Hrs',
    provider: 'SAP Partner Ecosystem',
    contentUrl: 'https://greenstechnologys.com/Certifications.html#',
    keySkills: ['ABAP Syntax', 'Data Dictionary', 'BAPI & RFC', 'Core Data Services (CDS)'],
  },
  {
    id: 'sap-fico',
    title: 'SAP FICO Financial & Controlling Consultant Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '70 Hrs',
    provider: 'SAP Ecosystem',
    contentUrl: 'https://greenstechnologys.com/Certifications.html#',
    keySkills: ['General Ledger (GL)', 'Accounts Payable (AP)', 'Cost Center Accounting', 'Asset Mgmt'],
  },
  {
    id: 'workday',
    title: 'Workday HCM & Financials Integration Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '50 Hrs',
    provider: 'Workday Enterprise',
    contentUrl: 'https://www.greenstechnologys.com/workday-training-in-chennai.html',
    keySkills: ['Workday Core HCM', 'Custom Reports', 'Enterprise Interface Builder (EIB)', 'Calculated Fields'],
  },
  {
    id: 'pega',
    title: 'PEGA Certified System Architect (CSA & CSSA)',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '55 Hrs',
    provider: 'Pegasystems',
    contentUrl: 'https://www.greenstechnologys.com/pega-training-in-chennai.html',
    keySkills: ['Pega Infinity Platform', 'Case Management', 'Data Modeling', 'Flow Rules'],
  },
  {
    id: 'tibco',
    title: 'TIBCO ActiveMatrix BusinessWorks Integration Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '45 Hrs',
    provider: 'TIBCO Software',
    contentUrl: 'https://greenstechnologys.com/sap-abap-training-in-chennai.html',
    keySkills: ['TIBCO BW 6.x', 'EMS Messaging', 'REST & SOAP Services', 'Microservices'],
  },
  {
    id: 'adobe-cq5',
    title: 'Adobe Experience Manager (AEM / CQ5) Developer',
    category: 'Enterprise & ERP',
    level: 'Expert',
    image: certSalesforceErpImg,
    duration: '50 Hrs',
    provider: 'Adobe Certified Expert',
    contentUrl: 'https://greenstechnologys.com/sap-abap-training-in-chennai.html',
    keySkills: ['AEM Sites & Assets', 'OSGi Bundles', 'Sling Models', 'HTL Component Authoring'],
  },

  // 5. Automation & RPA
  {
    id: 'uipath',
    title: 'UiPath Certified Advanced RPA Developer (UiARD)',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '55 Hrs',
    provider: 'UiPath Academy Certified',
    badge: 'Industry Leader',
    contentUrl: 'https://www.greenstechnologys.com/uipath-training-in-chennai.html',
    keySkills: ['ReFramework', 'Orchestrator Bot Deployment', 'Document Understanding', 'UI Automation'],
  },
  {
    id: 'blue-prism',
    title: 'Blue Prism Certified Developer (AD01) Certification',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '50 Hrs',
    provider: 'Blue Prism University',
    contentUrl: 'https://www.greenstechnologys.com/blue-prism-training.html',
    keySkills: ['Process Studio', 'Object Studio', 'Work Queues', 'Surface Automation'],
  },
  {
    id: 'automation-anywhere',
    title: 'Automation Anywhere Certified Master RPA Professional',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '50 Hrs',
    provider: 'Automation Anywhere University',
    contentUrl: 'https://www.greenstechnologys.com/automation-anywhere-training-in-chennai.html',
    keySkills: ['Automation 360', 'Bot Creator & Runner', 'IQ Bot AI Data Extraction'],
  },
  {
    id: 'rpa-general',
    title: 'Robotic Process Automation Master Track',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '65 Hrs',
    provider: 'Greens RPA Guild',
    contentUrl: 'https://www.greenstechnologys.com/Robotic-Process-Automation-training-in-chennai.html',
    keySkills: ['Bot Architecture', 'Process Discovery', 'OCR Integration', 'Exceptions Handling'],
  },
  {
    id: 'openspan',
    title: 'OpenSpan (Pega Robotics) Desktop Automation Certification',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '40 Hrs',
    provider: 'Pegasystems',
    contentUrl: 'https://www.greenstechnologys.com/openspan-training-in-chennai.html',
    keySkills: ['Attended RPA Bots', 'Windows Application Interrogation', 'Event Monitoring'],
  },

  // 6. AI & Data Science
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning Master Certification',
    category: 'AI & Data Science',
    level: 'Expert',
    image: genaiMasterImg,
    duration: '80 Hrs',
    provider: 'Data Science Council / Greens Certified',
    badge: 'Flagship',
    contentUrl: 'https://www.greenstechnologys.com/datascience-training-in-chennai.html',
    keySkills: ['Python & Pandas', 'Scikit-Learn ML', 'Deep Learning (PyTorch)', 'Model Deployment'],
  },
  {
    id: 'data-warehousing',
    title: 'DATA WAREHOUSING & ETL Architect Certification',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '55 Hrs',
    provider: 'DWH Standards Board',
    readMoreUrl: 'https://greenstechnologys.com/data-warehousing.html',
    contentUrl: 'https://greenstechnologys.com/data-warehousing-course-content.html',
    keySkills: ['Dimensional Modeling', 'Star & Snowflake Schemas', 'Fact & Dimension Tables', 'OLAP'],
  },
  {
    id: 'sas',
    title: 'SAS Certified Clinical & Statistical Analyst',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '50 Hrs',
    provider: 'SAS Global Forum',
    contentUrl: 'https://greenstechnologys.com/Certifications.html#',
    keySkills: ['Base SAS', 'SAS Macros', 'PROC SQL', 'Statistical Graphics', 'Clinical Reporting'],
  },
  {
    id: 'datastage',
    title: 'IBM InfoSphere DataStage Enterprise ETL Certification',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '45 Hrs',
    provider: 'IBM Certified Solution Developer',
    contentUrl: 'https://greenstechnologys.com/data-stage-course-content.html',
    keySkills: ['DataStage Parallel Engine', 'Transformer Stage', 'Lookup & Join Stages', 'Job Sequencer'],
  },
  {
    id: 'talend',
    title: 'TALEND Open Studio Big Data & Data Integration Developer',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '45 Hrs',
    provider: 'Talend Academy',
    contentUrl: 'https://greenstechnologys.com/talend-training-in-chennai.html',
    keySkills: ['tMap Transformation', 'Talend Cloud', 'Big Data Jobs', 'Context Variables'],
  },
  {
    id: 'qlikview',
    title: 'QlikView & Qlik Sense BI Developer Certification',
    category: 'AI & Data Science',
    level: 'Associate',
    image: dataAnalyticsImg,
    duration: '40 Hrs',
    provider: 'Qlik Qualified Associate',
    contentUrl: 'https://greenstechnologys.com/qlikview-training-in-chennai.html',
    keySkills: ['Data Modeling', 'Set Analysis', 'Qlik Sense Dashboards', 'Script Syntax'],
  },
  {
    id: 'analytics',
    title: 'Advanced Business Analytics & Power BI Certification',
    category: 'AI & Data Science',
    level: 'Associate',
    image: dataAnalyticsImg,
    duration: '50 Hrs',
    provider: 'Microsoft Certified Power BI',
    contentUrl: 'https://greenstechnologys.com/analytics-training-in-chennai.html',
    keySkills: ['DAX Functions', 'Power Query M Code', 'KPI Reporting', 'Executive Dashboards'],
  },
  {
    id: 'excel-vba',
    title: 'Advanced Excel & VBA Macro Automation Certification',
    category: 'AI & Data Science',
    level: 'Associate',
    image: dataAnalyticsImg,
    duration: '40 Hrs',
    provider: 'Microsoft Office Specialist Expert',
    contentUrl: 'https://www.greenstechnologys.com/advanced-excel-training-in-chennai.html',
    keySkills: ['VBA Macros', 'Power Pivot', 'Dynamic XLOOKUP', 'User Forms Automation'],
  },
  {
    id: 'matlab',
    title: 'MATLAB Numerical Computation & Modeling Certification',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '40 Hrs',
    provider: 'MathWorks Certified',
    contentUrl: 'https://greenstechnologys.com/matlab-training-in-chennai.html',
    keySkills: ['Matrix Computations', 'Simulink', 'Signal Processing', 'Algorithm Modeling'],
  },

  // 7. Full Stack & Programming
  {
    id: 'java-j2ee',
    title: 'JAVA / J2EE Enterprise Developer Certification',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: javaGenAiImg,
    duration: '75 Hrs',
    provider: 'Oracle Certified Java SE',
    badge: 'Evergreen Core',
    readMoreUrl: 'https://greenstechnologys.com/Certifications.html#',
    contentUrl: 'https://greenstechnologys.com/java-training-course-content.html',
    keySkills: ['Core Java 17/21', 'Spring Boot 3', 'Hibernate ORM', 'RESTful Microservices'],
  },
  {
    id: 'dot-net',
    title: 'Microsoft .NET Core & C# Full Stack Certification',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: javaGenAiImg,
    duration: '70 Hrs',
    provider: 'Microsoft Certified Developer',
    contentUrl: 'https://greenstechnologys.com/dot-net-course-content.html',
    keySkills: ['C#', 'ASP.NET Core Web API', 'Entity Framework Core', 'Azure App Services'],
  },
  {
    id: 'php',
    title: 'PHP & Laravel Modern Web Application Certification',
    category: 'Full Stack & Programming',
    level: 'Associate',
    image: javaGenAiImg,
    duration: '50 Hrs',
    provider: 'Zend / Web Certified',
    contentUrl: 'https://greenstechnologys.com/php-course-content.html',
    keySkills: ['PHP 8.x', 'Laravel Framework', 'MySQL Database', 'Authentication & JWT'],
  },
  {
    id: 'ionic',
    title: 'Ionic Cross-Platform Mobile App Development',
    category: 'Full Stack & Programming',
    level: 'Associate',
    image: javaGenAiImg,
    duration: '45 Hrs',
    provider: 'Ionic Framework Certified',
    contentUrl: 'https://www.greenstechnologys.com/ionic-training.html',
    keySkills: ['Capacitor / Cordova', 'Angular / React with Ionic', 'Native Device APIs'],
  },
  {
    id: 'shell-perl',
    title: 'SHELL Scripting & PERL Enterprise Automation',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: certNetworkInfraImg,
    duration: '40 Hrs',
    provider: 'SysAdmin Council',
    contentUrl: 'https://greenstechnologys.com/shell-perl-course-content.html',
    keySkills: ['Bash Scripting', 'Awk & Sed', 'Perl Regular Expressions', 'Server Cron Jobs'],
  },
  {
    id: 'forms-reports',
    title: 'Oracle Forms and Reports Developer Certification',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '45 Hrs',
    provider: 'Oracle University',
    contentUrl: 'https://greenstechnologys.com/forms-reports-course-content.html',
    keySkills: ['Forms Builder 12c', 'Reports Developer', 'PL/SQL Triggers', 'Enterprise UI'],
  },

  // 8. Systems & Infrastructure
  {
    id: 'comptia-network',
    title: 'CompTIA Network+ N10-008 Certification',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '45 Hrs',
    provider: 'CompTIA International',
    badge: 'Industry Essential',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['TCP/IP Subnetting', 'Routing & Switching', 'Network Security', 'Troubleshooting'],
  },
  {
    id: 'comptia-a-plus',
    title: 'CompTIA A+ IT Technician Certification (Core 1 & Core 2)',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '50 Hrs',
    provider: 'CompTIA International',
    contentUrl: 'https://www.greenstechnologys.com/istqb-certification-training-chennai.html',
    keySkills: ['Hardware Diagnostic', 'Operating Systems Windows/Linux', 'Cloud Computing', 'Security'],
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT) Embedded Systems Certification',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '45 Hrs',
    provider: 'IoT Technology Guild',
    contentUrl: 'https://www.greenstechnologys.com/iot.html',
    keySkills: ['Raspberry Pi / Arduino', 'MQTT Protocol', 'Sensor Integration', 'Cloud IoT Hubs'],
  },
  {
    id: 'blockchain',
    title: 'Certified Blockchain Solutions Developer',
    category: 'Systems & Infrastructure',
    level: 'Expert',
    image: certNetworkInfraImg,
    duration: '55 Hrs',
    provider: 'Blockchain Council',
    badge: 'Emerging Tech',
    contentUrl: 'https://greenstechnologys.com/blockchain-training-in-chennai.html',
    keySkills: ['Ethereum Smart Contracts', 'Solidity', 'Web3.js', 'Hyperledger Fabric'],
  },
  {
    id: 'informix',
    title: 'IBM Informix Dynamic Server (IDS) Administration',
    category: 'Systems & Infrastructure',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '40 Hrs',
    provider: 'IBM Certified',
    contentUrl: 'https://greenstechnologys.com/unix-course-content.html',
    keySkills: ['Informix 4GL', 'Storage Spaces & Dbspaces', 'Backup & Restore ON-Bar'],
  },
  {
    id: 'pervasive',
    title: 'Pervasive PSQL / Actian Zen Database Certification',
    category: 'Systems & Infrastructure',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '40 Hrs',
    provider: 'Actian Certified',
    contentUrl: 'https://greenstechnologys.com/pervasive-training-in-chennai.html',
    keySkills: ['Transactional Btrieve', 'Relational SQL', 'Database Migration & Tuning'],
  },
  {
    id: 'adeptia',
    title: 'Adeptia Enterprise B2B / EDI Integration Certification',
    category: 'Systems & Infrastructure',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '40 Hrs',
    provider: 'Adeptia Suite',
    contentUrl: 'https://greenstechnologys.com/adeptia-training-in-chennai.html',
    keySkills: ['B2B Data Exchange', 'EDI X12 / EDIFACT', 'Process Flow Orchestration'],
  },
  {
    id: 'foreign-languages',
    title: 'Corporate Foreign Languages Certification (German / Japanese / French)',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: forwardDeployedImg,
    duration: '60 Hrs',
    provider: 'International Language Standards (A1/A2/JLPT N5)',
    contentUrl: 'https://greenstechnologys.com/Foreign-Language-classes-in-Chennai.html',
    keySkills: ['Professional Fluency', 'Technical Vocabulary', 'Global Client Interaction'],
  },
];

const categoryTabs = [
  'All Certifications',
  'Cloud & DevOps',
  'Testing & QA',
  'AI & Data Science',
  'Management & Agile',
  'Enterprise & ERP',
  'Automation & RPA',
  'Full Stack & Programming',
  'Systems & Infrastructure',
] as const;

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Certifications');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const heroRef = useRef<HTMLDivElement>(null);

  const triggerCelebration = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#0f3d2e', '#10b981', '#34d399', '#f59e0b', '#3b82f6'],
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-hero-anim',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Filter certifications based on category, level, and search term
  const filteredCerts = useMemo(() => {
    return certificationsList.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'All Certifications' || cert.category === selectedCategory;
      const matchesLevel =
        selectedLevel === 'All' || cert.level === selectedLevel;
      const matchesQuery =
        searchQuery.trim() === '' ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.keySkills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesLevel && matchesQuery;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  return (
    <div className="w-full bg-[#fbfdfc] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-950">
      
      {/* ========================================================= */}
      {/* 1. HERO HEADER: WHITE THEME WITH RICH DARK GREEN ACCENTS  */}
      {/* ========================================================= */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-[#edf6f1] via-[#f7fbf8] to-[#fbfdfc] border-b border-slate-200"
      >
        <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-emerald-100/50 blur-[90px]" />
        <div className="pointer-events-none absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-teal-100/40 blur-[90px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <div className="cert-hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-300 text-[#0f3d2e] text-xs sm:text-sm font-bold tracking-wide shadow-xs mb-5">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Global Industry-Accredited Credentials</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-semibold">100% Exam Pass Support</span>
          </div>

          {/* Headline */}
          <h1 className="cert-hero-anim text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.18] text-[#0f3d2e] max-w-4xl mb-4">
            Master the World’s Most In-Demand{' '}
            <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-[#0f3d2e] bg-clip-text text-transparent">
              Tech Certifications
            </span>
          </h1>

          {/* Subtitle */}
          <p className="cert-hero-anim text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Fast-track your promotion and global career mobility. Choose from over 50+ validated certification tracks guided by seasoned industry practitioners across Chennai.
          </p>

          {/* Search Bar on Hero */}
          <div className="cert-hero-anim w-full max-w-2xl relative mb-6">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by certification (e.g. ISTQB, Salesforce, Azure, PMP, Selenium, Java)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base rounded-2xl bg-white border border-slate-300 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 placeholder-slate-400 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Micro Stats Row */}
          <div className="cert-hero-anim flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>50+ Global Programs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Weekend & Weekday Batches</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Real-Time Project Work</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Placement Call Assurance</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MODERN INTERACTIVE FILTERS & CONTROLS                  */}
      {/* ========================================================= */}
      <section className="sticky top-[4.25rem] md:top-[5.75rem] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
            
            {/* Category Pills (Horizontal Scroll on Mobile) */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 no-scrollbar">
              {categoryTabs.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0f3d2e] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Level Selector & Results Counter */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-4 shrink-0 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-500">Level:</span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-slate-100 border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold text-slate-800 focus:outline-none focus:border-emerald-500"
                >
                  <option value="All">All Levels</option>
                  <option value="Associate">Associate / Foundation</option>
                  <option value="Professional">Professional</option>
                  <option value="Expert">Expert / Master</option>
                </select>
              </div>

              <div className="font-bold text-slate-800">
                <span>{filteredCerts.length}</span> Certifications Found
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. CERTIFICATIONS GRID (RESPONSIVE CARDS WITH 16:9 IMAGES)*/}
      {/* ========================================================= */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCerts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No matching certifications</h3>
            <p className="text-xs text-slate-500 mb-5">
              We couldn’t find any courses matching "{searchQuery}". Try selecting "All Certifications" or clearing your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Certifications');
                setSelectedLevel('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-xl bg-[#0f3d2e] text-white text-xs font-bold hover:bg-[#18533e] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* 16:9 Card Image Header */}
                <Link to={`/certifications/${cert.id}`} className="relative aspect-video w-full overflow-hidden bg-slate-100 block cursor-pointer">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40">
                      {cert.category}
                    </span>
                  </div>

                  {/* Level / Status Badge */}
                  {cert.badge ? (
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-sm">
                      {cert.badge}
                    </span>
                  ) : (
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200">
                      {cert.level}
                    </span>
                  )}

                  {/* Provider Pill (Bottom-left overlay) */}
                  <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white font-medium">
                    {cert.provider}
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
                  <div>
                    {/* Course Title */}
                    <Link to={`/certifications/${cert.id}`}>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                        {cert.title}
                      </h3>
                    </Link>

                    {/* Metadata: Duration + Mode */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-2">
                      <span className="flex items-center gap-1 font-medium text-emerald-700">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{cert.duration}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Laptop className="w-3.5 h-3.5" />
                        <span>Classroom & Online</span>
                      </span>
                    </div>

                    {/* Key Skills Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.keySkills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.keySkills.length > 3 && (
                        <span className="text-[10px] text-slate-400 font-medium self-center pl-0.5">
                          +{cert.keySkills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTAs */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    {/* Primary CTA: View Official Curriculum (Internal Template Route) */}
                    <Link
                      to={`/certifications/${cert.id}`}
                      className="flex-1 py-2 px-2.5 rounded-xl font-bold text-[11px] text-white bg-gradient-to-r from-[#0f3d2e] to-[#18533e] hover:from-[#0b2d22] hover:to-[#123e2f] transition-all text-center flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <BookOpen className="w-3 h-3 text-emerald-300" />
                      <span>View Curriculum</span>
                    </Link>

                    {/* Secondary CTA: Quick WhatsApp Syllabus Pre-fill */}
                    <a
                      href={`https://wa.me/918939915577?text=${encodeURIComponent(
                        `Hi Greens Technologies, please send me the syllabus, next batch dates, and fee details for ${cert.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={triggerCelebration}
                      className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-colors"
                      title="Request Syllabus via WhatsApp"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* 4. BOTTOM ADVISORY BANNER: FAST-TRACK CAREER GUIDANCE      */}
      {/* ========================================================= */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#edf7f2] via-[#f7fbf8] to-[#edf6f1] border border-emerald-300 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Free 1-on-1 Profile Assessment</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f3d2e]">
                Unsure Which Certification Fits Your Career?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Speak directly with our technical practice heads. We assess your background, current tech stack, and career goals to map the optimal certification path.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/918939915577?text=Hi%20Greens%20Technologies,%20I%20would%20like%20guidance%20on%20choosing%20the%20right%20certification."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#0f3d2e] to-[#18533e] hover:from-[#0b2d22] hover:to-[#123e2f] transition-all shadow-md flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Talk to Advisor on WhatsApp</span>
              </a>

              <a
                href="tel:+918939915577"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call: +91 89399 15577</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
