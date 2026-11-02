// Master Course Database for Greens Technologys
// Covers all 18 domains and categories with rich curriculum modules, placement stats, and tech stacks

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
import devopsCloudImg from '../assets/courses/course_devops_cloud.jpg';
import n8nAutomationImg from '../assets/courses/course_n8n_automation.jpg';
import forwardDeployedImg from '../assets/courses/course_forward_deployed.jpg';
import fullstackJavaImg from '../assets/courses/course_fullstack_java.jpg';
import sdetTestingImg from '../assets/courses/course_sdet_testing.jpg';
import genaiDataImg from '../assets/courses/course_genai_data.jpg';

export interface CurriculumModule {
  title: string;
  subtitle: string;
  topics: string[];
}

export interface CourseDetailData {
  id: string; // slug for URL (e.g. java-full-stack-development)
  title: string;
  category: string; // One of the 18 main domains
  subcategory: string;
  domainId: string; // Short code for primary domain filter
  level: 'Beginner to Advanced' | 'Associate' | 'Professional' | 'Expert' | 'Intermediate';
  image: string;
  duration: string;
  provider: string;
  badge?: string;
  rating: string;
  reviewsCount: string;
  tagline: string;
  overview: string;
  highlights: string[];
  prerequisites: string;
  targetAudience: string[];
  keySkills: string[];
  toolsAndTech: string[];
  curriculumModules: CurriculumModule[];
  careerRoles: string[];
  avgSalary: string;
  topHiringCompanies: string[];
}

export interface CourseDomainInfo {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  summary: string;
  accentColor: string;
}

export const COURSE_DOMAINS: CourseDomainInfo[] = [
  {
    id: 'programming',
    name: 'Programming, Software Development & Full Stack',
    shortName: 'Programming & Development',
    iconName: 'Code2',
    summary: 'Java, Python, .NET, C/C++, Full Stack Placement Programs',
    accentColor: '#86c37c'
  },
  {
    id: 'web-mobile',
    name: 'Web, Mobile & Application Development',
    shortName: 'Web & Mobile Dev',
    iconName: 'Laptop',
    summary: 'Angular, React Native, iOS, Android, APEX, WebLogic',
    accentColor: '#38bdf8'
  },
  {
    id: 'testing-qa',
    name: 'Software Testing, Automation & Quality Assurance',
    shortName: 'Software Testing & QA',
    iconName: 'ShieldCheck',
    summary: 'Selenium, Playwright, API Testing, JMeter, Appium, ISTQB',
    accentColor: '#34d399'
  },
  {
    id: 'ai-datascience',
    name: 'Artificial Intelligence, Machine Learning & Data Science',
    shortName: 'AI & Data Science',
    iconName: 'BrainCircuit',
    summary: 'Generative AI, Deep Learning, ML, Data Science with Python/R',
    accentColor: '#a78bfa'
  },
  {
    id: 'data-bi',
    name: 'Data Engineering, Analytics & Business Intelligence',
    shortName: 'Data Engineering & BI',
    iconName: 'Layers',
    summary: 'Snowflake, Power BI, Tableau, Informatica, Talend, MSBI',
    accentColor: '#f59e0b'
  },
  {
    id: 'database-dba',
    name: 'Database, SQL & Database Administration',
    shortName: 'Databases & DBA',
    iconName: 'Building2',
    summary: 'Oracle SQL/PLSQL, Oracle DBA, MS SQL Server, DB2, Teradata',
    accentColor: '#ef4444'
  },
  {
    id: 'oracle-apps',
    name: 'Oracle Applications & Oracle Enterprise Technologies',
    shortName: 'Oracle Apps & Fusion',
    iconName: 'Building2',
    summary: 'Oracle Apps DBA, Technical, Financials, Fusion HCM, SOA',
    accentColor: '#f97316'
  },
  {
    id: 'enterprise-erp-crm',
    name: 'Enterprise Applications, ERP & CRM',
    shortName: 'ERP, SAP & CRM',
    iconName: 'Briefcase',
    summary: 'SAP ABAP, FICO, MM, Salesforce, ServiceNow, Pega, Workday',
    accentColor: '#6366f1'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Computing, DevOps & IT Infrastructure',
    shortName: 'Cloud & DevOps',
    iconName: 'Cloud',
    summary: 'AWS, Azure, GCP, Kubernetes, Docker, Terraform, Linux',
    accentColor: '#0ea5e9'
  },
  {
    id: 'rpa-automation',
    name: 'Robotic Process Automation (RPA)',
    shortName: 'RPA & Automation',
    iconName: 'Bot',
    summary: 'UiPath, Automation Anywhere, Blue Prism, OpenSpan',
    accentColor: '#10b981'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Ethical Hacking',
    shortName: 'Cybersecurity',
    iconName: 'Lock',
    summary: 'Ethical Hacking, Penetration Testing, DevSecOps, SOC',
    accentColor: '#ec4899'
  },
  {
    id: 'management-analysis',
    name: 'Project Management, Business Analysis & Architecture',
    shortName: 'Management & Agile',
    iconName: 'Target',
    summary: 'Scrum Master, PMP, Product Management, Business Analyst, TOGAF',
    accentColor: '#8b5cf6'
  },
  {
    id: 'uiux-creative',
    name: 'UI/UX, Graphic Design & Creative Technologies',
    shortName: 'UI/UX & Creative',
    iconName: 'Sparkles',
    summary: 'UI/UX Design, Figma, Graphic Design, Adobe Suite, EDA',
    accentColor: '#f43f5e'
  },
  {
    id: 'embedded-vlsi',
    name: 'Embedded Systems, Electronics & Engineering',
    shortName: 'Embedded & VLSI',
    iconName: 'Cpu',
    summary: 'MATLAB, Embedded Systems, Microcontrollers, VLSI Design',
    accentColor: '#eab308'
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing, Content & Communication',
    shortName: 'Digital Marketing',
    iconName: 'TrendingUp',
    summary: 'SEO, SEM, Social Media, Content Writing, 100% Placement Program',
    accentColor: '#14b8a6'
  },
  {
    id: 'foreign-languages',
    name: 'Foreign Language Training',
    shortName: 'Foreign Languages',
    iconName: 'Globe',
    summary: 'Japanese, German, French, Spanish, Mandarin, Korean, Italian',
    accentColor: '#d97706'
  },
  {
    id: 'location-specific',
    name: 'Location-Specific Training Programs',
    shortName: 'Global & Regional Hubs',
    iconName: 'MapPin',
    summary: 'Power BI Training in Madurai, London & International Hubs',
    accentColor: '#059669'
  },
  {
    id: 'power-platform',
    name: 'Microsoft Power Platform & Productivity Tools',
    shortName: 'Power Platform',
    iconName: 'Zap',
    summary: 'Power Apps, Power Automate, Low-Code Enterprise Workflows',
    accentColor: '#8b5cf6'
  }
];

// Helper to generate a reliable URL slug
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-');
}

// Complete raw course listing matching the user's prompt
interface RawCourseDef {
  title: string;
  category: string;
  subcategory: string;
  domainId: string;
  badge?: string;
  level?: CourseDetailData['level'];
  duration?: string;
  image?: string;
  keySkills: string[];
  overview?: string;
}

const RAW_COURSE_LIST: RawCourseDef[] = [
  // 1. Programming, Software Development & Full Stack
  {
    title: 'Full Stack Developer — 100% Placement Program',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Full Stack Development',
    domainId: 'programming',
    badge: 'Flagship Placement',
    level: 'Beginner to Advanced',
    duration: '120 Hrs (3-4 Months)',
    image: fullstackJavaImg,
    keySkills: ['Java/Python', 'React.js', 'Spring Boot / Node.js', 'Microservices', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Java Full Stack Development',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Full Stack Development',
    domainId: 'programming',
    badge: 'Popular',
    level: 'Beginner to Advanced',
    duration: '90 Hrs',
    image: javaGenAiImg,
    keySkills: ['Core Java', 'Spring Boot', 'Hibernate', 'React.js', 'REST APIs', 'MySQL']
  },
  {
    title: 'Python Full Stack Development',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Full Stack Development',
    domainId: 'programming',
    badge: 'Trending',
    level: 'Beginner to Advanced',
    duration: '90 Hrs',
    image: pythonGenAiImg,
    keySkills: ['Python 3', 'Django / FastAPI', 'React.js', 'PostgreSQL', 'Docker', 'REST APIs']
  },
  {
    title: '.NET Full Stack Development',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Full Stack Development',
    domainId: 'programming',
    level: 'Professional',
    duration: '80 Hrs',
    image: certCloudAzureImg,
    keySkills: ['C# .NET Core', 'ASP.NET Core Web API', 'Angular/React', 'Entity Framework Core', 'SQL Server']
  },
  {
    title: 'Core Java Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Java Development',
    domainId: 'programming',
    badge: 'Foundation',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: javaGenAiImg,
    keySkills: ['OOPs Concepts', 'Collections Framework', 'Multithreading', 'Generics', 'Java 21 Features']
  },
  {
    title: 'J2EE Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Java Development',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '45 Hrs',
    image: javaGenAiImg,
    keySkills: ['Servlets', 'JSP', 'JDBC', 'EJB', 'Tomcat Server']
  },
  {
    title: 'Hibernate Framework Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Java Development',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '30 Hrs',
    image: javaGenAiImg,
    keySkills: ['ORM Architecture', 'HQL', 'Caching', 'Entity Mapping', 'Criteria Queries']
  },
  {
    title: 'Spring Framework & Spring Boot Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Java Development',
    domainId: 'programming',
    badge: 'High Demand',
    level: 'Professional',
    duration: '50 Hrs',
    image: javaGenAiImg,
    keySkills: ['Dependency Injection', 'Spring MVC', 'Spring Boot 3', 'Spring Data JPA', 'Microservices']
  },
  {
    title: 'Struts Framework Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Java Development',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '30 Hrs',
    image: javaGenAiImg,
    keySkills: ['MVC Pattern', 'Action Classes', 'Interceptors', 'Validation Framework', 'Tiles']
  },
  {
    title: 'AJAX Web Development',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Java Development',
    domainId: 'programming',
    level: 'Beginner to Advanced',
    duration: '20 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Asynchronous Requests', 'XMLHttpRequest', 'JSON Parsing', 'DOM Manipulation', 'Dynamic UI']
  },
  {
    title: 'Python Programming Masterclass',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Python Programming',
    domainId: 'programming',
    badge: 'Popular',
    level: 'Beginner to Advanced',
    duration: '50 Hrs',
    image: pythonGenAiImg,
    keySkills: ['Python Core', 'Data Structures', 'OOPs', 'File I/O', 'Regex', 'Modules & Packages']
  },
  {
    title: 'C# .NET Development',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['C# Language', 'CLR & Assemblies', 'Generics', 'Delegates & Events', 'Exception Handling']
  },
  {
    title: 'LINQ (Language Integrated Query) Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '25 Hrs',
    image: certCloudAzureImg,
    keySkills: ['LINQ to Objects', 'LINQ to SQL', 'LINQ to XML', 'Lambda Expressions', 'Query Syntax']
  },
  {
    title: 'ASP.NET Development Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '40 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Web Forms', 'Server Controls', 'State Management', 'Master Pages', 'Data Controls']
  },
  {
    title: 'WCF (Windows Communication Foundation)',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Professional',
    duration: '30 Hrs',
    image: certCloudAzureImg,
    keySkills: ['SOA Architecture', 'Service Contracts', 'Endpoints', 'Bindings', 'WCF Security']
  },
  {
    title: 'WPF (Windows Presentation Foundation)',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Professional',
    duration: '35 Hrs',
    image: certCloudAzureImg,
    keySkills: ['XAML', 'MVVM Pattern', 'Data Binding', 'Layout Controls', 'Styles & Templates']
  },
  {
    title: 'ASP.NET MVC 4.0 Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Professional',
    duration: '40 Hrs',
    image: certCloudAzureImg,
    keySkills: ['MVC Pattern', 'Razor Engine', 'Routing', 'Action Filters', 'Model Binding']
  },
  {
    title: 'Silverlight Development',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '25 Hrs',
    image: certCloudAzureImg,
    keySkills: ['XAML UI', 'Rich Internet Apps', 'Animation', 'Data Binding', 'Media Elements']
  },
  {
    title: 'SharePoint Administration & Development',
    category: 'Programming, Software Development & Full Stack',
    subcategory: '.NET Development',
    domainId: 'programming',
    level: 'Professional',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['SharePoint Online', 'Site Collections', 'Workflows', 'Web Parts', 'SPFx Framework']
  },
  {
    title: 'C Programming Foundation',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'C & C++ Programming',
    domainId: 'programming',
    level: 'Beginner to Advanced',
    duration: '35 Hrs',
    image: javaGenAiImg,
    keySkills: ['Variables & Data Types', 'Pointers', 'Memory Management', 'Data Structures', 'File Handling']
  },
  {
    title: 'C++ Object Oriented Programming',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'C & C++ Programming',
    domainId: 'programming',
    level: 'Beginner to Advanced',
    duration: '40 Hrs',
    image: javaGenAiImg,
    keySkills: ['Classes & Objects', 'Inheritance & Polymorphism', 'Templates & STL', 'Exception Handling']
  },
  {
    title: 'R Programming for Data Analytics',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Other Programming Languages',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '40 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['R Data Frames', 'ggplot2', 'Dplyr', 'Statistical Models', 'Hypothesis Testing']
  },
  {
    title: 'Perl Scripting Masterclass',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Other Programming Languages',
    domainId: 'programming',
    level: 'Intermediate',
    duration: '30 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['Perl Syntax', 'Regular Expressions', 'File Parsing', 'CPAN Modules', 'System Administration']
  },
  {
    title: 'UNIX Shell Scripting Training',
    category: 'Programming, Software Development & Full Stack',
    subcategory: 'Other Programming Languages',
    domainId: 'programming',
    level: 'Beginner to Advanced',
    duration: '35 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['Bash Scripting', 'Awk & Sed', 'Cron Automation', 'Pipes & Redirection', 'Process Control']
  },

  // 2. Web, Mobile & Application Development
  {
    title: 'AngularJS Framework Training',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Frontend Development',
    domainId: 'web-mobile',
    level: 'Intermediate',
    duration: '35 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Two-Way Binding', 'Directives', 'Scopes & Controllers', 'Filters', 'Services & Factory']
  },
  {
    title: 'Angular 2 Modern Web Development',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Frontend Development',
    domainId: 'web-mobile',
    level: 'Intermediate',
    duration: '40 Hrs',
    image: fullstackJavaImg,
    keySkills: ['TypeScript', 'Components', 'Dependency Injection', 'Routing', 'RxJS Observables']
  },
  {
    title: 'Angular 5 & Above Enterprise Training',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Frontend Development',
    domainId: 'web-mobile',
    level: 'Professional',
    duration: '45 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Angular CLI', 'HTTP Client', 'Lazy Loading', 'Reactive Forms', 'State Management']
  },
  {
    title: 'Mobile App Development Masterclass',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Mobile Application Development',
    domainId: 'web-mobile',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Cross-Platform Apps', 'UI/UX Guidelines', 'API Integration', 'Local Storage', 'App Store Deploy']
  },
  {
    title: 'Apple iOS Development with Swift',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Mobile Application Development',
    domainId: 'web-mobile',
    badge: 'High Value',
    level: 'Professional',
    duration: '60 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Swift 5', 'Xcode', 'SwiftUI & UIKit', 'CoreData', 'AutoLayout', 'App Store Submission']
  },
  {
    title: 'Android Development with Kotlin',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Mobile Application Development',
    domainId: 'web-mobile',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Retrofit API', 'Room DB', 'Play Store Deploy']
  },
  {
    title: 'React Native Cross-Platform Apps',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Mobile Application Development',
    domainId: 'web-mobile',
    badge: 'Popular',
    level: 'Professional',
    duration: '50 Hrs',
    image: fullstackJavaImg,
    keySkills: ['JSX & React Native Components', 'Navigation', 'Redux / Zustand', 'Native Modules', 'Expo']
  },
  {
    title: 'Ionic Hybrid Mobile App Development',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Mobile Application Development',
    domainId: 'web-mobile',
    level: 'Intermediate',
    duration: '40 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Ionic Framework', 'Capacitor', 'Angular/React', 'Mobile UI Components', 'PWA']
  },
  {
    title: 'Oracle Forms and Reports Training',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Enterprise Application Development',
    domainId: 'web-mobile',
    level: 'Professional',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Oracle Forms Builder', 'Reports Builder', 'PL/SQL Integration', 'Triggers', 'Web Deployment']
  },
  {
    title: 'Oracle APEX (Application Express) Training',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Enterprise Application Development',
    domainId: 'web-mobile',
    badge: 'High Demand',
    level: 'Professional',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Low-Code Oracle APEX', 'Page Designer', 'Interactive Grids', 'REST Data Sources', 'SQL Integration']
  },
  {
    title: 'IBM WebSphere Application Server Administration',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Application Platforms',
    domainId: 'web-mobile',
    level: 'Expert',
    duration: '45 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['WAS ND Architecture', 'Profile Management', 'Clustering & High Availability', 'Jython Scripting']
  },
  {
    title: 'WebSphere DataPower Gateway Training',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Application Platforms',
    domainId: 'web-mobile',
    level: 'Expert',
    duration: '40 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['Multi-Protocol Gateway', 'XML/JSON Threats', 'AAA Policies', 'WSDL Integration', 'SSL Security']
  },
  {
    title: 'Oracle WebLogic Server Administration',
    category: 'Web, Mobile & Application Development',
    subcategory: 'Application Platforms',
    domainId: 'web-mobile',
    level: 'Expert',
    duration: '45 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['Domain Configuration', 'Server Clustering', 'JMS Messaging', 'WLST Automation', 'Node Manager']
  },

  // 3. Software Testing, Automation & Quality Assurance
  {
    title: 'Software Testing Masterclass (Manual + Automation)',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Software Testing Training',
    domainId: 'testing-qa',
    badge: '100% Placement',
    level: 'Beginner to Advanced',
    duration: '70 Hrs',
    image: sdetTestingImg,
    keySkills: ['STLC & SDLC', 'Test Case Design', 'Selenium WebDriver', 'JIRA Defect Tracking', 'API Postman']
  },
  {
    title: 'Selenium WebDriver Automation Training',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Browser Automation Testing',
    domainId: 'testing-qa',
    badge: 'Top Rated',
    level: 'Professional',
    duration: '60 Hrs',
    image: sdetExpertImg,
    keySkills: ['Selenium Java / Python', 'TestNG Framework', 'Page Object Model (POM)', 'Cucumber BDD', 'Jenkins']
  },
  {
    title: 'Playwright Next-Gen Automation Training',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Browser Automation Testing',
    domainId: 'testing-qa',
    badge: 'Trending Tech',
    level: 'Professional',
    duration: '50 Hrs',
    image: sdetExpertImg,
    keySkills: ['Playwright TypeScript/JavaScript', 'Auto-Waiting', 'Trace Viewer', 'API Mocking', 'Parallel Execution']
  },
  {
    title: 'QTP / Micro Focus UFT Automation Training',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Browser Automation Testing',
    domainId: 'testing-qa',
    level: 'Professional',
    duration: '45 Hrs',
    image: sdetTestingImg,
    keySkills: ['VBScript', 'Object Repository', 'Descriptive Programming', 'Data-Driven Testing', 'ALM Integration']
  },
  {
    title: 'SmartBear TestComplete Automation Training',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Browser Automation Testing',
    domainId: 'testing-qa',
    level: 'Intermediate',
    duration: '40 Hrs',
    image: sdetTestingImg,
    keySkills: ['Keyword-Driven Testing', 'Object Recognition', 'Desktop & Web Automation', 'TestComplete Scripting']
  },
  {
    title: 'API & Web Services Testing Training',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'API & Web Services Testing',
    domainId: 'testing-qa',
    badge: 'High Demand',
    level: 'Professional',
    duration: '45 Hrs',
    image: sdetExpertImg,
    keySkills: ['Postman Tool', 'RestAssured Java', 'JSON Validation', 'HTTP Methods & Status Codes', 'OAuth2']
  },
  {
    title: 'SoapUI API Testing Masterclass',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'API & Web Services Testing',
    domainId: 'testing-qa',
    level: 'Intermediate',
    duration: '35 Hrs',
    image: sdetTestingImg,
    keySkills: ['SOAP & REST Services', 'Groovy Scripting', 'Data-Driven Assertions', 'WSDL Testing', 'Mock Services']
  },
  {
    title: 'SOA Testing & Governance',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'API & Web Services Testing',
    domainId: 'testing-qa',
    level: 'Professional',
    duration: '35 Hrs',
    image: sdetTestingImg,
    keySkills: ['Service-Oriented Architecture', 'ESB Integration Testing', 'XML Schema Validation', 'Message Queues']
  },
  {
    title: 'Apache JMeter Performance Testing',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Performance & Load Testing',
    domainId: 'testing-qa',
    badge: 'Popular',
    level: 'Professional',
    duration: '45 Hrs',
    image: sdetTestingImg,
    keySkills: ['Thread Groups & Timers', 'Listeners & Assertions', 'Correlation & Parameterization', 'Distributed Testing']
  },
  {
    title: 'Micro Focus LoadRunner Performance Testing',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Performance & Load Testing',
    domainId: 'testing-qa',
    level: 'Expert',
    duration: '50 Hrs',
    image: sdetTestingImg,
    keySkills: ['VuGen Scripting (C Language)', 'Controller Scenario Design', 'Analysis Reports', 'Server Bottleneck Analysis']
  },
  {
    title: 'Appium Mobile Automation Testing',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Mobile Application Testing',
    domainId: 'testing-qa',
    badge: 'High Demand',
    level: 'Professional',
    duration: '45 Hrs',
    image: sdetExpertImg,
    keySkills: ['Appium Server & Client', 'Android & iOS Automation', 'UI Automator', 'Locators & Gestures', 'Cloud Device Farms']
  },
  {
    title: 'Mobile Application Testing (iOS & Android)',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Mobile Application Testing',
    domainId: 'testing-qa',
    level: 'Beginner to Advanced',
    duration: '35 Hrs',
    image: sdetTestingImg,
    keySkills: ['Functional Mobile Testing', 'Network Emulation', 'Battery & Performance Audit', 'Crash Log Analysis']
  },
  {
    title: 'ETL Testing & Data Warehouse Testing',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Specialized Testing',
    domainId: 'testing-qa',
    badge: 'High Demand',
    level: 'Professional',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['SQL for ETL Validation', 'Data Completeness & Transformation Checks', 'Informatica Testing', 'BI Report Audit']
  },
  {
    title: 'Database Testing with SQL',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Specialized Testing',
    domainId: 'testing-qa',
    level: 'Intermediate',
    duration: '35 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Complex SQL Queries', 'Schema Validation', 'Data Integrity & Constraints', 'Stored Procedure Testing']
  },
  {
    title: 'SAP Testing (Manual & Automation)',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Specialized Testing',
    domainId: 'testing-qa',
    level: 'Professional',
    duration: '45 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['SAP ERP Navigation', 'SAP FICO & MM Testing', 'eCATT / Worksoft Certify', 'UAT Scenarios']
  },
  {
    title: 'ISTQB Foundation & Advanced Certification Training',
    category: 'Software Testing, Automation & Quality Assurance',
    subcategory: 'Software Testing Certifications',
    domainId: 'testing-qa',
    badge: 'Global Certified',
    level: 'Associate',
    duration: '35 Hrs',
    image: sdetExpertImg,
    keySkills: ['ISTQB Syllabus Exam Prep', 'Test Management Principles', 'Equivalence Partitioning', 'Risk-Based Testing']
  },

  // 4. Artificial Intelligence, Machine Learning & Data Science
  {
    title: 'Artificial Intelligence & Generative AI Masterclass',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Artificial Intelligence',
    domainId: 'ai-datascience',
    badge: 'Flagship AI',
    level: 'Expert',
    duration: '90 Hrs',
    image: genaiMasterImg,
    keySkills: ['LLM Fine-Tuning', 'LangChain & RAG', 'Vector Embeddings', 'Autonomous Agents', 'PyTorch & HuggingFace']
  },
  {
    title: 'AI & Deep Learning with TensorFlow',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Artificial Intelligence',
    domainId: 'ai-datascience',
    level: 'Professional',
    duration: '60 Hrs',
    image: genaiDataImg,
    keySkills: ['TensorFlow 2.x & Keras', 'Convolutional Neural Networks (CNN)', 'Recurrent Networks (LSTM)', 'Transfer Learning']
  },
  {
    title: 'Machine Learning Training with Python',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Machine Learning',
    domainId: 'ai-datascience',
    badge: 'High Demand',
    level: 'Professional',
    duration: '60 Hrs',
    image: pythonGenAiImg,
    keySkills: ['Supervised & Unsupervised ML', 'Scikit-Learn', 'Ensemble Models (XGBoost)', 'Model Evaluation', 'Hyperparameter Tuning']
  },
  {
    title: 'Data Science Master Program',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Data Science',
    domainId: 'ai-datascience',
    badge: 'Top Placement',
    level: 'Expert',
    duration: '100 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Python & R for DS', 'Statistics & Probability', 'Predictive Modeling', 'Machine Learning', 'Tableau Dashboards']
  },
  {
    title: 'Data Science with Python Training',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Data Science',
    domainId: 'ai-datascience',
    badge: 'Popular',
    level: 'Professional',
    duration: '70 Hrs',
    image: pythonGenAiImg,
    keySkills: ['Pandas & NumPy', 'Data Wrangling', 'Matplotlib & Seaborn', 'Scikit-Learn ML', 'Feature Engineering']
  },
  {
    title: 'Data Science with R Training',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Data Science',
    domainId: 'ai-datascience',
    level: 'Professional',
    duration: '60 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['RStudio', 'Dplyr Data Transformation', 'ggplot2 Visualizations', 'Regression Models', 'Time Series Analysis']
  },
  {
    title: 'Data Science with SAS Training',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Data Science',
    domainId: 'ai-datascience',
    level: 'Professional',
    duration: '60 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Base SAS', 'Advanced SAS SQL', 'SAS Macros', 'Proc Procedures', 'Predictive Analytics']
  },
  {
    title: 'Big Data Processing & Analytics Training',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Big Data Processing & Analytics',
    domainId: 'ai-datascience',
    level: 'Professional',
    duration: '70 Hrs',
    image: devopsMasterImg,
    keySkills: ['Distributed Computing', 'Hadoop Ecosystem', 'Apache Spark', 'Hive & HBase', 'Data Pipelines']
  },
  {
    title: 'Big Data Hadoop Administrator & Developer',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Big Data Processing & Analytics',
    domainId: 'ai-datascience',
    level: 'Professional',
    duration: '60 Hrs',
    image: devopsMasterImg,
    keySkills: ['HDFS Architecture', 'MapReduce Concepts', 'Apache Hive & Pig', 'Flume & Sqoop', 'YARN Resource Manager']
  },
  {
    title: 'Apache Spark with Python (PySpark) Training',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Big Data Processing & Analytics',
    domainId: 'ai-datascience',
    badge: 'Trending',
    level: 'Professional',
    duration: '50 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['RDDs & DataFrames', 'Spark SQL', 'Spark Streaming', 'MLlib Machine Learning', 'Cluster Deployment']
  },
  {
    title: 'Internet of Things (IoT) Systems Training',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Advanced Data Technologies',
    domainId: 'ai-datascience',
    level: 'Intermediate',
    duration: '45 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['Raspberry Pi & Arduino', 'MQTT Protocol', 'Sensor Interfacing', 'Cloud IoT Gateways', 'Edge Computing']
  },
  {
    title: 'Blockchain Technology & Smart Contracts',
    category: 'Artificial Intelligence, Machine Learning & Data Science',
    subcategory: 'Advanced Data Technologies',
    domainId: 'ai-datascience',
    level: 'Professional',
    duration: '50 Hrs',
    image: forwardDeployedImg,
    keySkills: ['Ethereum & Hyperledger', 'Solidity Smart Contracts', 'Cryptography', 'Consensus Mechanisms', 'DApps']
  },

  // 5. Data Engineering, Analytics & Business Intelligence
  {
    title: 'Data Engineering Masterclass',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Data Engineering & Warehousing',
    domainId: 'data-bi',
    badge: 'High Salary',
    level: 'Expert',
    duration: '80 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Python ETL', 'Snowflake / BigQuery', 'Apache Spark', 'Airflow Orchestration', 'Kafka Streaming']
  },
  {
    title: 'Data Warehousing Architecture & Dimensional Modeling',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Data Engineering & Warehousing',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '40 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Star & Snowflake Schemas', 'Fact & Dimension Tables', 'SCD Types', 'ETL Architecture', 'Data Lake Concepts']
  },
  {
    title: 'Snowflake Cloud Data Warehouse Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Data Engineering & Warehousing',
    domainId: 'data-bi',
    badge: 'Hot Tech',
    level: 'Professional',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Snowflake Architecture', 'Virtual Warehouses', 'SnowSQL & Data Loading', 'Zero-Copy Cloning', 'Time Travel']
  },
  {
    title: 'Informatica PowerCenter ETL Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'ETL & Data Integration Tools',
    domainId: 'data-bi',
    badge: 'Industry Standard',
    level: 'Professional',
    duration: '50 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Designer & Workflow Manager', 'Transformations', 'Session Configurations', 'Performance Tuning', 'Debugging']
  },
  {
    title: 'Talend Data Integration Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'ETL & Data Integration Tools',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '40 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Talend Open Studio', 'ETL Components', 'Metadata Management', 'Context Variables', 'Job Execution']
  },
  {
    title: 'IBM DataStage ETL Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'ETL & Data Integration Tools',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['DataStage Designer & Director', 'Parallel Jobs', 'Stages & Transformations', 'Sequencer Workflows']
  },
  {
    title: 'Ab Initio ETL & Data Processing',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'ETL & Data Integration Tools',
    domainId: 'data-bi',
    level: 'Expert',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['GDE (Graphical Development Env)', 'Co>Operating System', 'Components & Graphs', 'Data Partitioning']
  },
  {
    title: 'Dell Boomi Cloud Integration Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'ETL & Data Integration Tools',
    domainId: 'data-bi',
    badge: 'Trending',
    level: 'Professional',
    duration: '40 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Boomi Atoms & Molecules', 'Cloud Integration Processes', 'Connectors & Mapping', 'API Management']
  },
  {
    title: 'Informatica Data Quality (IDQ) Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'ETL & Data Integration Tools',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '35 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Data Profiling', 'Standardization Rules', 'Matching & Consolidation', 'Address Doctor Integration']
  },
  {
    title: 'Tableau Business Intelligence & Visual Analytics',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    badge: 'Popular',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Tableau Desktop & Server', 'Calculated Fields & LOD', 'Interactive Dashboards', 'Visual Storytelling']
  },
  {
    title: 'Microsoft Power BI Masterclass (DAX & Modeling)',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    badge: 'Most Popular',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Power BI Desktop', 'Power Query M Language', 'DAX Formulas', 'Data Modeling', 'Power BI Service']
  },
  {
    title: 'IBM Cognos BI Reporting Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '40 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Cognos Report Studio', 'Query Studio', 'Framework Manager Modeling', 'Event Studio Alerts']
  },
  {
    title: 'Cognos TM1 / Planning Analytics Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '40 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Multidimensional Cubes', 'TurboIntegrator (TI) Processes', 'TM1 Rules & Feeders', 'Financial Modeling']
  },
  {
    title: 'Oracle OBIEE (Business Intelligence Enterprise Edition)',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['RPD Modeling (Physical/BMM/Presentation)', 'Answers & Interactive Dashboards', 'BI Publisher']
  },
  {
    title: 'MicroStrategy Enterprise Analytics',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '40 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['MicroStrategy Architect', 'Schema Objects & Metrics', 'Dossiers & Dashboards', 'Mobile Analytics']
  },
  {
    title: 'Jaspersoft BI Reporting Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    level: 'Intermediate',
    duration: '35 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Jaspersoft Studio', 'Subreports & Charts', 'JasperReports Server', 'Data Source Connections']
  },
  {
    title: 'SAP BusinessObjects (SAP BO) BI Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Business Intelligence & Reporting',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '45 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Information Design Tool (IDT)', 'Web Intelligence (WebI)', 'Crystal Reports', 'CMC Administration']
  },
  {
    title: 'Microsoft SSAS (SQL Server Analysis Services)',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Microsoft Business Intelligence (MSBI)',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '35 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Multidimensional Cubes', 'Tabular Models', 'MDX & DAX Queries', 'KPIs & Perspectives']
  },
  {
    title: 'Microsoft SSIS (SQL Server Integration Services)',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Microsoft Business Intelligence (MSBI)',
    domainId: 'data-bi',
    badge: 'Popular',
    level: 'Professional',
    duration: '35 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Control Flow & Data Flow', 'Transformations', 'Error Handling & Logging', 'SSIS Catalog Deployment']
  },
  {
    title: 'Microsoft SSRS (SQL Server Reporting Services)',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Microsoft Business Intelligence (MSBI)',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '30 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Report Builder & BIDS', 'Parameterized Reports', 'Drilldown & Matrix', 'Report Server Administration']
  },
  {
    title: 'SAS Base & Advanced Analytics Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Enterprise Analytics & Planning',
    domainId: 'data-bi',
    level: 'Professional',
    duration: '50 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Data Step Programming', 'Proc SQL', 'Macro Variables & Programs', 'Clinical & Financial Analytics']
  },
  {
    title: 'Oracle Hyperion Financial Management (HFM)',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Enterprise Analytics & Planning',
    domainId: 'data-bi',
    level: 'Expert',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Hyperion Essbase', 'Financial Consolidation', 'Hyperion Planning', 'Smart View Excel Add-in']
  },
  {
    title: 'Business Analytics Comprehensive Training',
    category: 'Data Engineering, Analytics & Business Intelligence',
    subcategory: 'Enterprise Analytics & Planning',
    domainId: 'data-bi',
    level: 'Beginner to Advanced',
    duration: '50 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Statistical Analytics', 'Predictive Modeling', 'Excel Analytics', 'Tableau/Power BI', 'Business Case Studies']
  },

  // 6. Database, SQL & Database Administration
  {
    title: 'Oracle SQL and PL/SQL Placement Training',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Oracle Database Training',
    domainId: 'database-dba',
    badge: '100% Placement',
    level: 'Beginner to Advanced',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['SQL Queries & Joins', 'PL/SQL Anonymous Blocks', 'Procedures & Functions', 'Triggers & Packages', 'Cursors']
  },
  {
    title: 'Oracle PL/SQL Advanced Programming',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Oracle Database Training',
    domainId: 'database-dba',
    level: 'Professional',
    duration: '40 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Bulk Collect & FORALL', 'Autonomous Transactions', 'Dynamic SQL', 'Ref Cursors', 'PL/SQL Optimization']
  },
  {
    title: 'Oracle DBA (Database Administrator) Training',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Oracle Database Training',
    domainId: 'database-dba',
    badge: 'High Value',
    level: 'Professional',
    duration: '60 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Oracle Architecture', 'Database Creation', 'Backup & Recovery (RMAN)', 'User Security', 'Data Pump']
  },
  {
    title: 'Oracle RAC (Real Application Clusters) Training',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Oracle Database Training',
    domainId: 'database-dba',
    level: 'Expert',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Grid Infrastructure', 'ASM Storage Management', 'Clusterware Administration', 'Cache Fusion', 'RAC Tuning']
  },
  {
    title: 'Oracle Database Performance Tuning',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Oracle Database Training',
    domainId: 'database-dba',
    level: 'Expert',
    duration: '40 Hrs',
    image: certCloudAzureImg,
    keySkills: ['AWR & ADDM Reports', 'Execution Plans & Indexes', 'Optimizer Hints', 'SQL Tuning Advisor', 'Wait Events']
  },
  {
    title: 'Oracle 12c / 19c Certification Training',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Oracle Database Training',
    domainId: 'database-dba',
    badge: 'OCA / OCP Prep',
    level: 'Associate',
    duration: '60 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Multitenant Architecture (CDB/PDB)', 'Oracle Cloud Infrastructure', 'SQL Certification Exam Topics']
  },
  {
    title: 'SQL Specialist Certification Training',
    category: 'Database, SQL & Database Administration',
    subcategory: 'SQL & PL/SQL Certifications',
    domainId: 'database-dba',
    badge: 'Universal Core',
    level: 'Beginner to Advanced',
    duration: '35 Hrs',
    image: certCloudAzureImg,
    keySkills: ['DDL / DML / DQL', 'Complex Subqueries', 'Window Functions', 'CTEs & Grouping', 'Index Strategies']
  },
  {
    title: 'PL/SQL Developer Certification Track',
    category: 'Database, SQL & Database Administration',
    subcategory: 'SQL & PL/SQL Certifications',
    domainId: 'database-dba',
    level: 'Professional',
    duration: '40 Hrs',
    image: certCloudAzureImg,
    keySkills: ['1Z0-149 Exam Preparation', 'Advanced Packages', 'Exception Handling', 'Secure Coding in PL/SQL']
  },
  {
    title: 'Microsoft SQL Server Database Administration (MS SQL DBA)',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Microsoft SQL Server',
    domainId: 'database-dba',
    level: 'Professional',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['SSMS Administration', 'Backup & Restore Strategies', 'AlwaysOn High Availability', 'SQL Profiler', 'Log Shipping']
  },
  {
    title: 'SQL Server DBA Production Support Training',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Microsoft SQL Server',
    domainId: 'database-dba',
    level: 'Professional',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Index Defragmentation', 'Database Mirroring', 'Transaction Log Management', 'Security & Roles']
  },
  {
    title: 'IBM DB2 Database Administrator Training',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Other Database Administration',
    domainId: 'database-dba',
    level: 'Professional',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['DB2 Architecture', 'Instance & Database Creation', 'Bufferpools & Tablespaces', 'DB2 Backup & Recovery']
  },
  {
    title: 'Teradata Database Architecture & SQL',
    category: 'Database, SQL & Database Administration',
    subcategory: 'Other Database Administration',
    domainId: 'database-dba',
    level: 'Professional',
    duration: '40 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Shared-Nothing Architecture', 'AMPs & Parsing Engine', 'Primary Indexes (UPI/NUPI)', 'BTEQ & FastLoad', 'MultiLoad']
  },

  // 7. Oracle Applications & Oracle Enterprise Technologies
  {
    title: 'Oracle Apps DBA (E-Business Suite) Training',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Applications',
    domainId: 'oracle-apps',
    badge: 'High Value',
    level: 'Expert',
    duration: '60 Hrs',
    image: certCloudAzureImg,
    keySkills: ['EBS Architecture R12.2', 'adadmin & adop Patching', 'Concurrent Managers', 'Cloning Databases', 'Autoconfig']
  },
  {
    title: 'Oracle Apps Technical (R12 EBS) Training',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Applications',
    domainId: 'oracle-apps',
    badge: 'High Demand',
    level: 'Professional',
    duration: '55 Hrs',
    image: certCloudAzureImg,
    keySkills: ['OAF (OA Framework)', 'XML / BI Publisher', 'Interface & Conversions', 'PL/SQL Integration', 'Workflow Builder']
  },
  {
    title: 'Oracle Apps Financials Functional Training',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Applications',
    domainId: 'oracle-apps',
    level: 'Professional',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['General Ledger (GL)', 'Accounts Payable (AP)', 'Accounts Receivable (AR)', 'Cash Management', 'Fixed Assets']
  },
  {
    title: 'Oracle Apps SCM (Supply Chain Management)',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Applications',
    domainId: 'oracle-apps',
    level: 'Professional',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Inventory Management', 'Purchasing (PO)', 'Order Management (OM)', 'Bill of Materials (BOM)']
  },
  {
    title: 'Oracle HRMS Functional Training',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Applications',
    domainId: 'oracle-apps',
    level: 'Professional',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Core HR Configurations', 'Payroll Processing', 'Absence Management', 'SSHMS Self-Service']
  },
  {
    title: 'Oracle Fusion Cloud HCM (Human Capital Management)',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Fusion & Cloud',
    domainId: 'oracle-apps',
    badge: 'Hot Tech',
    level: 'Professional',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Fusion Global HR', 'Talent Management', 'Fast Formulas', 'HCM Data Loader (HDL)', 'OTBI Reports']
  },
  {
    title: 'Oracle Cloud Infrastructure (OCI) Training',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Fusion & Cloud',
    domainId: 'oracle-apps',
    badge: 'Cloud Pioneer',
    level: 'Professional',
    duration: '50 Hrs',
    image: certCloudAzureImg,
    keySkills: ['OCI Architecture', 'Compute & VCN Virtual Networks', 'Autonomous Database', 'Storage & IAM Policies']
  },
  {
    title: 'Oracle SOA Suite 12c Integration Training',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Middleware & Integration',
    domainId: 'oracle-apps',
    level: 'Expert',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['BPEL Process Manager', 'OSB (Service Bus)', 'Mediator & Adapters', 'Fault Handling Framework']
  },
  {
    title: 'Oracle Identity Manager (OIM / IAM) Training',
    category: 'Oracle Applications & Oracle Enterprise Technologies',
    subcategory: 'Oracle Security & Identity',
    domainId: 'oracle-apps',
    level: 'Expert',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Identity Provisioning', 'Reconciliation', 'Access Policies', 'OIM Connectors', 'Approval Workflows']
  },

  // 8. Enterprise Applications, ERP & CRM
  {
    title: 'SAP ABAP Programming Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    badge: 'Core ERP',
    level: 'Professional',
    duration: '60 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['ABAP Workbench', 'Data Dictionary', 'Reports (ALV)', 'BDC & BAPI', 'SmartForms', 'OOPS ABAP']
  },
  {
    title: 'SAP FICO (Financial & Management Accounting)',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    badge: 'High Salary',
    level: 'Professional',
    duration: '60 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['General Ledger Accounting', 'AP & AR Configurations', 'Asset Accounting', 'Cost Center Accounting', 'Internal Orders']
  },
  {
    title: 'SAP MM (Materials Management)',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    badge: 'Popular',
    level: 'Professional',
    duration: '55 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Procurement Cycle', 'Master Data (Material/Vendor)', 'Inventory Management', 'Invoice Verification', 'Valuation']
  },
  {
    title: 'SAP Basis System Administration',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Expert',
    duration: '55 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['SAP Architecture', 'Client Administration', 'TMS Transport Management', 'Kernel Upgrades', 'Spool & Background Jobs']
  },
  {
    title: 'SAP HR / HCM Functional Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Professional',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Organizational Management', 'Personnel Administration', 'Time Management', 'Payroll Schemas & Rules']
  },
  {
    title: 'SAP SD (Sales and Distribution) Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Professional',
    duration: '55 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Sales Order Processing', 'Pricing Procedures', 'Delivery & Billing', 'Credit Management', 'Integration with MM/FI']
  },
  {
    title: 'SAP PP (Production Planning) Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Professional',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['BOM & Routing', 'Work Centers', 'Demand Management', 'MRP Run', 'Production Orders Execution']
  },
  {
    title: 'SAP BO (BusinessObjects) Reporting',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Professional',
    duration: '45 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['IDT Universe Design', 'Web Intelligence (WebI)', 'Crystal Reports', 'Dashboards', 'Security Administration']
  },
  {
    title: 'SAP BI / BW (Business Warehouse) Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Professional',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Data Modeling (InfoCubes, DSOs)', 'Extraction (LO/Generic)', 'BEx Query Designer', 'BW on HANA Architecture']
  },
  {
    title: 'SAP PM (Plant Maintenance) Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Professional',
    duration: '45 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Technical Objects', 'Maintenance Notifications', 'Work Orders', 'Preventive Maintenance Schedules']
  },
  {
    title: 'SAP IS-Retail Industry Solution Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Expert',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Master Data for Retail', 'Merchandise Hierarchy', 'Pricing & Promotions', 'Store Operations & POS Integration']
  },
  {
    title: 'SAP XI / PI / PO Integration Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'SAP Training',
    domainId: 'enterprise-erp-crm',
    level: 'Expert',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Enterprise Service Repository', 'Integration Directory', 'Adapters (RFC, IDoc, SOAP, REST)', 'BPM Flows']
  },
  {
    title: 'Salesforce Administrator & Developer (Apex & LWC)',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'CRM & Enterprise Platforms',
    domainId: 'enterprise-erp-crm',
    badge: 'Most Popular',
    level: 'Professional',
    duration: '65 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Salesforce Admin (Objects, Security)', 'Apex Programming', 'Lightning Web Components (LWC)', 'SOQL/SOSL', 'Flows']
  },
  {
    title: 'Pega Systems CSA / CSSA Certification Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'CRM & Enterprise Platforms',
    domainId: 'enterprise-erp-crm',
    badge: 'High Value',
    level: 'Professional',
    duration: '55 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Pega Infinity Platform', 'Case Management', 'Data Modeling & Integration', 'Decision Rules', 'UI Portals']
  },
  {
    title: 'ServiceNow System Administrator & Developer',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'CRM & Enterprise Platforms',
    domainId: 'enterprise-erp-crm',
    badge: 'Hot Tech',
    level: 'Professional',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['ITSM Suite', 'Service Portal', 'Business Rules & Client Scripts', 'Flow Designer', 'CMDB Configuration']
  },
  {
    title: 'Workday HCM Functional & Technical Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'CRM & Enterprise Platforms',
    domainId: 'enterprise-erp-crm',
    badge: 'High Salary',
    level: 'Professional',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Workday Core HCM', 'Business Process Framework', 'EIB Enterprise Interface Builder', 'Calculated Fields', 'Reporting']
  },
  {
    title: 'SAP Hybris Commerce Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'CRM & Enterprise Platforms',
    domainId: 'enterprise-erp-crm',
    level: 'Expert',
    duration: '50 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Hybris Core Architecture', 'Backoffice & SmartEdit', 'Cronjobs & ImpEx', 'Commerce Customization', 'Solr Search']
  },
  {
    title: 'Dell Boomi Integration Platform Training',
    category: 'Enterprise Applications, ERP & CRM',
    subcategory: 'Enterprise Integration',
    domainId: 'enterprise-erp-crm',
    level: 'Professional',
    duration: '40 Hrs',
    image: certSalesforceErpImg,
    keySkills: ['Atoms & Molecules', 'Cloud & On-Premise Connectors', 'Data Mapping & Transformation', 'Boomi EDI']
  },

  // 9. Cloud Computing, DevOps & IT Infrastructure
  {
    title: 'Cloud Computing Fundamentals & Solutions Architect',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'Cloud Computing',
    domainId: 'cloud-devops',
    badge: 'Core Track',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: devopsCloudImg,
    keySkills: ['Cloud Economics', 'IaaS / PaaS / SaaS', 'Multi-Cloud Architecture', 'Storage & Networking', 'Cloud Security']
  },
  {
    title: 'AWS Certified Solutions Architect & SysOps Training',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'Cloud Computing',
    domainId: 'cloud-devops',
    badge: 'Global #1 Cloud',
    level: 'Professional',
    duration: '60 Hrs',
    image: devopsCloudImg,
    keySkills: ['EC2, S3, RDS, DynamoDB', 'VPC Architecture & Subnets', 'IAM Security & Policies', 'Lambda Serverless', 'CloudWatch']
  },
  {
    title: 'Microsoft Azure Administrator (AZ-104) & Solutions Architect',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'Cloud Computing',
    domainId: 'cloud-devops',
    badge: 'High Demand',
    level: 'Professional',
    duration: '60 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Azure Virtual Machines & VNet', 'Azure AD / Entra ID', 'Azure Storage & Backup', 'ARM Templates & Bicep', 'Cost Ops']
  },
  {
    title: 'Google Cloud Platform (GCP) Cloud Engineer Training',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'Cloud Computing',
    domainId: 'cloud-devops',
    level: 'Professional',
    duration: '50 Hrs',
    image: devopsCloudImg,
    keySkills: ['Google Compute Engine (GCE)', 'GKE Kubernetes', 'Cloud Storage & BigQuery', 'VPC Peering', 'IAM Security']
  },
  {
    title: 'DevOps Master Program (Docker, K8s, Jenkins, Terraform)',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'DevOps & Platform Engineering',
    domainId: 'cloud-devops',
    badge: '100% Placement',
    level: 'Expert',
    duration: '80 Hrs',
    image: devopsMasterImg,
    keySkills: ['Docker Containers', 'Kubernetes Orchestration', 'CI/CD with Jenkins & GitHub Actions', 'Terraform IaC', 'Ansible']
  },
  {
    title: 'DevSecOps & Cloud Security Automation',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'DevOps & Platform Engineering',
    domainId: 'cloud-devops',
    badge: 'Specialist',
    level: 'Expert',
    duration: '50 Hrs',
    image: devopsMasterImg,
    keySkills: ['SAST / DAST Security Gates', 'SonarQube & Snyk Code Scans', 'Trivy Container Scanning', 'HashiCorp Vault Secrets']
  },
  {
    title: 'Kubernetes (CKA / CKAD) Certified Administrator Training',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'DevOps & Platform Engineering',
    domainId: 'cloud-devops',
    badge: 'Certified Track',
    level: 'Expert',
    duration: '45 Hrs',
    image: devopsMasterImg,
    keySkills: ['Pods, Deployments, Services', 'Ingress Controllers', 'ConfigMaps & Secrets', 'Persistent Volumes', 'Helm Charts']
  },
  {
    title: 'VMware vSphere & ESXi Virtualization Training',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'Virtualization',
    domainId: 'cloud-devops',
    level: 'Professional',
    duration: '45 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['vSphere 7/8 Administration', 'ESXi Hypervisor', 'vCenter Server', 'vMotion & HA High Availability', 'DRS Clusters']
  },
  {
    title: 'Linux System Administration & RHCSA Prep',
    category: 'Cloud Computing, DevOps & IT Infrastructure',
    subcategory: 'Operating Systems & Administration',
    domainId: 'cloud-devops',
    badge: 'Fundamental',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['RHEL / CentOS', 'User & Permission Management', 'Systemd Services', 'Storage LVM Configuration', 'SELinux Security']
  },

  // 10. Robotic Process Automation (RPA)
  {
    title: 'Robotic Process Automation (RPA) Comprehensive Training',
    category: 'Robotic Process Automation (RPA)',
    subcategory: 'Robotic Process Automation',
    domainId: 'rpa-automation',
    badge: 'Core RPA',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: certRpaRoboticsImg,
    keySkills: ['RPA Architecture', 'Bot Lifecycle', 'Exception Handling', 'Desktop & Web Automation', 'OCR Processing']
  },
  {
    title: 'UiPath Certified RPA Developer Training',
    category: 'Robotic Process Automation (RPA)',
    subcategory: 'Robotic Process Automation',
    domainId: 'rpa-automation',
    badge: 'Global #1 RPA',
    level: 'Professional',
    duration: '50 Hrs',
    image: certRpaRoboticsImg,
    keySkills: ['UiPath Studio & Orchestrator', 'REFramework Architecture', 'Selectors & UI Explorer', 'Data Scraping', 'AI Center']
  },
  {
    title: 'Automation Anywhere (A360) Certification Training',
    category: 'Robotic Process Automation (RPA)',
    subcategory: 'Robotic Process Automation',
    domainId: 'rpa-automation',
    level: 'Professional',
    duration: '45 Hrs',
    image: certRpaRoboticsImg,
    keySkills: ['Control Room Administration', 'Bot Creator Studio', 'IQ Bot Document Intelligence', 'Variables & Triggers']
  },
  {
    title: 'Blue Prism Certified Developer Training',
    category: 'Robotic Process Automation (RPA)',
    subcategory: 'Robotic Process Automation',
    domainId: 'rpa-automation',
    level: 'Professional',
    duration: '45 Hrs',
    image: certRpaRoboticsImg,
    keySkills: ['Process Studio & Object Studio', 'Application Modeller', 'Work Queues', 'Surface Automation', 'Release Management']
  },
  {
    title: 'OpenSpan (Pega Robotic Automation) Training',
    category: 'Robotic Process Automation (RPA)',
    subcategory: 'Robotic Process Automation',
    domainId: 'rpa-automation',
    level: 'Professional',
    duration: '40 Hrs',
    image: certRpaRoboticsImg,
    keySkills: ['OpenSpan Studio', 'Interrogation of Windows/Web Apps', 'Automations & Events', 'Pega Robot Manager']
  },

  // 11. Cybersecurity & Ethical Hacking
  {
    title: 'Ethical Hacking & Penetration Testing (CEH Track)',
    category: 'Cybersecurity & Ethical Hacking',
    subcategory: 'Ethical Hacking',
    domainId: 'cybersecurity',
    badge: 'Global Demand',
    level: 'Professional',
    duration: '60 Hrs',
    image: forwardDeployedImg,
    keySkills: ['Network Footprinting & Scanning', 'Kali Linux Tools (Nmap, Metasploit, Wireshark)', 'Web App Penetration Testing', 'Vulnerability Assessment']
  },
  {
    title: 'Cyber Defense & DevSecOps Security Engineering',
    category: 'Cybersecurity & Ethical Hacking',
    subcategory: 'Security Engineering',
    domainId: 'cybersecurity',
    level: 'Expert',
    duration: '50 Hrs',
    image: forwardDeployedImg,
    keySkills: ['Threat Modeling', 'OWASP Top 10 Defenses', 'Incident Response & SOC Operations', 'Cryptography Basics', 'IAM Hardening']
  },

  // 12. Project Management, Business Analysis & Enterprise Architecture
  {
    title: 'Certified Scrum Master (CSM) Training',
    category: 'Project Management, Business Analysis & Enterprise Architecture',
    subcategory: 'Agile & Scrum',
    domainId: 'management-analysis',
    badge: 'Globally Recognized',
    level: 'Associate',
    duration: '25 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Scrum Framework & Ceremonies', 'Product Backlog Refinement', 'Sprint Planning & Retrospectives', 'JIRA Agile Boards']
  },
  {
    title: 'PMP (Project Management Professional) Certification Prep',
    category: 'Project Management, Business Analysis & Enterprise Architecture',
    subcategory: 'Project Management',
    domainId: 'management-analysis',
    badge: 'Gold Standard',
    level: 'Expert',
    duration: '45 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['PMBOK 7th Edition', 'Predictive & Hybrid Project Lifecycles', 'Risk Management', 'Stakeholder Engagement', 'Earned Value (EVM)']
  },
  {
    title: 'Product Management Masterclass',
    category: 'Project Management, Business Analysis & Enterprise Architecture',
    subcategory: 'Product Strategy',
    domainId: 'management-analysis',
    badge: 'High Value',
    level: 'Professional',
    duration: '45 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Product Discovery & Roadmaps', 'User Story Mapping', 'A/B Testing & Metrics', 'PRD Authoring', 'Go-To-Market (GTM) Strategy']
  },
  {
    title: 'Business Analyst (ECBA / CCBA) Training with JIRA',
    category: 'Project Management, Business Analysis & Enterprise Architecture',
    subcategory: 'Business Analysis',
    domainId: 'management-analysis',
    badge: 'Popular',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['BABOK Guide Principles', 'BRD & FRD Authoring', 'Use Case Diagrams & BPMN', 'JIRA & Confluence', 'Agile User Stories']
  },
  {
    title: 'TOGAF 9.2 / 10 Enterprise Architecture Training',
    category: 'Project Management, Business Analysis & Enterprise Architecture',
    subcategory: 'Enterprise Architecture',
    domainId: 'management-analysis',
    level: 'Expert',
    duration: '40 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Architecture Development Method (ADM)', 'Business & Data Architecture', 'Technology Architecture', 'Governance & Migration Planning']
  },

  // 13. UI/UX, Graphic Design & Creative Technologies
  {
    title: 'UI/UX Design Masterclass with Figma & Adobe XD',
    category: 'UI/UX, Graphic Design & Creative Technologies',
    subcategory: 'UI/UX Design Training',
    domainId: 'uiux-creative',
    badge: 'Creative Hot',
    level: 'Beginner to Advanced',
    duration: '50 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Design Thinking & User Research', 'Wireframing & Prototyping', 'Figma Auto-Layout & Design Systems', 'Usability Testing']
  },
  {
    title: 'Graphic Design Professional Training (Photoshop, Illustrator)',
    category: 'UI/UX, Graphic Design & Creative Technologies',
    subcategory: 'Graphic Design Training',
    domainId: 'uiux-creative',
    level: 'Beginner to Advanced',
    duration: '40 Hrs',
    image: fullstackJavaImg,
    keySkills: ['Adobe Photoshop CC', 'Adobe Illustrator Vector Art', 'InDesign Layouts', 'Brand Identity Design', 'Typography & Color Theory']
  },
  {
    title: 'Electronic Design Automation (EDA) Training',
    category: 'UI/UX, Graphic Design & Creative Technologies',
    subcategory: 'Creative Technologies',
    domainId: 'uiux-creative',
    level: 'Professional',
    duration: '45 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['PCB Design Principles', 'Schematic Capture', 'Altium Designer / Cadence OrCAD', 'Routing & Gerber Generation']
  },

  // 14. Embedded Systems, Electronics & Engineering Technologies
  {
    title: 'Embedded Systems & Microcontroller Programming',
    category: 'Embedded Systems, Electronics & Engineering Technologies',
    subcategory: 'Embedded Systems',
    domainId: 'embedded-vlsi',
    badge: 'Core Engineering',
    level: 'Professional',
    duration: '60 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['Embedded C', 'ARM Cortex-M / AVR Architecture', 'UART, SPI, I2C Protocols', 'RTOS Basics', 'Hardware Debugging']
  },
  {
    title: 'MATLAB & Simulink for Engineering & DSP',
    category: 'Embedded Systems, Electronics & Engineering Technologies',
    subcategory: 'Engineering Software',
    domainId: 'embedded-vlsi',
    level: 'Intermediate',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Matrix Computations & Plotting', 'Simulink Dynamic Systems', 'Digital Signal Processing (DSP)', 'Control System Modeling']
  },
  {
    title: 'VLSI Design & Verification (Verilog / SystemVerilog)',
    category: 'Embedded Systems, Electronics & Engineering Technologies',
    subcategory: 'Semiconductor & VLSI',
    domainId: 'embedded-vlsi',
    badge: 'High Value',
    level: 'Expert',
    duration: '60 Hrs',
    image: certNetworkInfraImg,
    keySkills: ['Verilog HDL Modeling', 'SystemVerilog for Verification', 'UVM Methodology', 'ASIC Flow & Synthesis', 'Xilinx Vivado']
  },

  // 15. Digital Marketing, Content & Communication
  {
    title: 'Digital Marketing — 100% Placement Program',
    category: 'Digital Marketing, Content & Communication',
    subcategory: 'Digital Marketing',
    domainId: 'digital-marketing',
    badge: '100% Placement',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Search Engine Optimization (SEO)', 'Google Search & Display Ads (PPC)', 'Social Media Marketing (Meta/LinkedIn)', 'Google Analytics 4', 'Email Marketing']
  },
  {
    title: 'Advanced Digital Marketing Strategy',
    category: 'Digital Marketing, Content & Communication',
    subcategory: 'Digital Marketing',
    domainId: 'digital-marketing',
    level: 'Professional',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Conversion Rate Optimization', 'Performance Marketing', 'Programmatic Advertising', 'Marketing Automation', 'Affiliate Marketing']
  },
  {
    title: 'Professional Content Writing & Copywriting',
    category: 'Digital Marketing, Content & Communication',
    subcategory: 'Content & Communication',
    domainId: 'digital-marketing',
    level: 'Beginner to Advanced',
    duration: '35 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['SEO Blog Writing', 'Copywriting for Landing Pages', 'Technical Documentation', 'Social Media Storytelling', 'Content Strategy']
  },

  // 16. Foreign Language Training
  {
    title: 'Japanese Language Training (JLPT N5 to N3)',
    category: 'Foreign Language Training',
    subcategory: 'Asian Languages',
    domainId: 'foreign-languages',
    badge: 'High IT Demand',
    level: 'Beginner to Advanced',
    duration: '80 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Hiragana & Katakana', 'Kanji Characters', 'Grammar & Conversational Fluency', 'JLPT Exam Preparation', 'Japanese Business Etiquette']
  },
  {
    title: 'German Language Training (Goethe-Zertifikat A1-B2)',
    category: 'Foreign Language Training',
    subcategory: 'European Languages',
    domainId: 'foreign-languages',
    badge: 'Study & Work Visa',
    level: 'Beginner to Advanced',
    duration: '75 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['German Grammar & Vocabulary', 'Spoken German Fluency', 'Listening Comprehension', 'Goethe Exam Drills', 'German Corporate Culture']
  },
  {
    title: 'French Language Training (DELF A1-B2)',
    category: 'Foreign Language Training',
    subcategory: 'European Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '70 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['French Phonetics & Accents', 'Conversational French', 'Written Expression', 'DELF Exam Preparation', 'Francophone Culture']
  },
  {
    title: 'English Fluency & Corporate Communication',
    category: 'Foreign Language Training',
    subcategory: 'Global Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '40 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Business English & Email Etiquette', 'Public Speaking & Presentation', 'Accent Neutralization', 'Interview Confidence Drills']
  },
  {
    title: 'Spanish Language Training (DELE A1-B1)',
    category: 'Foreign Language Training',
    subcategory: 'European Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Spanish Pronunciation', 'Essential Grammar & Tenses', 'Everyday Dialogues', 'DELE Exam Preparation', 'Latin American Spanish']
  },
  {
    title: 'Russian Language Training',
    category: 'Foreign Language Training',
    subcategory: 'Eurasian Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Cyrillic Alphabet', 'Russian Phonetics & Cases', 'Basic Conversational Skills', 'Grammar Foundations']
  },
  {
    title: 'Latin Language & Classical Etymology',
    category: 'Foreign Language Training',
    subcategory: 'Classical Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '40 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Classical Latin Grammar', 'Scientific & Legal Terminology', 'Sentence Translation', 'Etymology Foundations']
  },
  {
    title: 'Mandarin Chinese Language Training (HSK 1-3)',
    category: 'Foreign Language Training',
    subcategory: 'Asian Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '70 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Pinyin & 4 Tones', 'Hanzi Simplified Characters', 'Business Greetings & Numbers', 'HSK Exam Preparation']
  },
  {
    title: 'Italian Language Training (CILS A1-B1)',
    category: 'Foreign Language Training',
    subcategory: 'European Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Italian Pronunciation', 'Everyday Conversations', 'Grammar Conjugations', 'Italian Lifestyle & Business Context']
  },
  {
    title: 'Arabic Language Training',
    category: 'Foreign Language Training',
    subcategory: 'Middle Eastern Languages',
    domainId: 'foreign-languages',
    badge: 'Gulf Placement',
    level: 'Beginner to Advanced',
    duration: '65 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Arabic Script & Calligraphy', 'Modern Standard Arabic (MSA)', 'Gulf Business Dialect Basics', 'Reading & Writing Fluency']
  },
  {
    title: 'Portuguese Language Training',
    category: 'Foreign Language Training',
    subcategory: 'European Languages',
    domainId: 'foreign-languages',
    level: 'Beginner to Advanced',
    duration: '60 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['European & Brazilian Portuguese', 'Pronunciation & Vocabulary', 'Conversational Scenarios', 'Grammar Basics']
  },
  {
    title: 'Korean Language Training (TOPIK I)',
    category: 'Foreign Language Training',
    subcategory: 'Asian Languages',
    domainId: 'foreign-languages',
    badge: 'Popular',
    level: 'Beginner to Advanced',
    duration: '70 Hrs',
    image: certMgmtAgileImg,
    keySkills: ['Hangul Alphabet Reading/Writing', 'Honorifics & Social Speech', 'Conversational Korean', 'TOPIK Test Drills']
  },

  // 17. Location-Specific Training Programs
  {
    title: 'Power BI Training — Madurai Campus',
    category: 'Location-Specific Training Programs',
    subcategory: 'Regional Hub Programs',
    domainId: 'location-specific',
    badge: 'Madurai Hub',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['Power BI Desktop & Service', 'DAX Formulas', 'Tamil & English Bilingual Mentors', 'Weekend Batches in Madurai', 'Placement Assistance']
  },
  {
    title: 'Power BI Training — London UK & International Track',
    category: 'Location-Specific Training Programs',
    subcategory: 'Global Programs',
    domainId: 'location-specific',
    badge: 'Global GMT Slabs',
    level: 'Professional',
    duration: '45 Hrs',
    image: dataAnalyticsImg,
    keySkills: ['UK / Europe Timezone Batches', 'Financial Analytics Focus', 'Power BI Enterprise Deployment', 'International Job Readiness']
  },

  // 18. Microsoft Power Platform & Productivity Tools
  {
    title: 'Microsoft Power Apps & Power Platform Masterclass',
    category: 'Microsoft Power Platform & Productivity Tools',
    subcategory: 'Low-Code Enterprise Apps',
    domainId: 'power-platform',
    badge: 'Hot Enterprise Tech',
    level: 'Beginner to Advanced',
    duration: '45 Hrs',
    image: certCloudAzureImg,
    keySkills: ['Canvas Apps & Model-Driven Apps', 'Dataverse Integration', 'Power Automate Cloud Flows', 'Power BI Embedding', 'SharePoint Connectors']
  }
];

// Enrich every course into full CourseDetailData
export const coursesData: CourseDetailData[] = RAW_COURSE_LIST.map((raw) => {
  const slug = slugify(raw.title);
  const duration = raw.duration || '60 Hrs (Weekday / Weekend Batches)';
  const level = raw.level || 'Beginner to Advanced';
  const image = raw.image || javaGenAiImg;
  const rating = '4.9/5';
  const reviewsCount = '1,' + Math.floor(100 + Math.random() * 850);
  const tagline = `Industry-accredited ${raw.title} with hands-on real-world labs, MNC mentorship, and 100% placement support.`;

  const overview =
    raw.overview ||
    `Greens Technologys’ ${raw.title} is an intensive, industry-crafted program built for students, graduates, and working professionals seeking to master practical skills in ${raw.category}. Through hands-on laboratory exercises, live industrial capstone projects, and direct faculty mentorship, learners acquire end-to-end competencies that translate immediately into high-paying tech careers.`;

  const highlights = [
    '100% Practical Hands-on Laboratory Training with Real-Time Industry Case Studies',
    'Faculty with 10+ Years of Senior Industry & MNC Architecture Experience',
    'Greens Central Placement Cell Support with 850+ Top Corporate Hiring Partners',
    'Flexible Weekday Morning, Evening, and Weekend Masterclass Batch Schedules',
    'Unlimited Access to High-Speed Cloud Sandboxes & Hardware Lab Workstations',
    'Dedicated Resume Preparation, Mock Technical Interviews, and Career Mentoring'
  ];

  const toolsAndTech = [
    ...raw.keySkills.slice(0, 5),
    'Git & GitHub',
    'JIRA',
    'Docker / Cloud Sandbox',
    'Visual Studio Code / IDEs'
  ];

  const curriculumModules: CurriculumModule[] = [
    {
      title: 'Module 1: Foundations & Architecture Overview',
      subtitle: 'Core concepts, setup, tooling, and environmental architecture',
      topics: [
        `Introduction to ${raw.title} ecosystem and industrial significance`,
        'Development environment installation, tooling, and CLI configuration',
        'Fundamental architectural patterns and industry best practices',
        'Initial hands-on lab: Hello World and workspace verification'
      ]
    },
    {
      title: 'Module 2: In-Depth Technology Core & Hands-On Labs',
      subtitle: 'Deep dive into essential components and enterprise features',
      topics: [
        `Detailed exploration of ${raw.keySkills[0] || 'core components'}`,
        `Implementation techniques with ${raw.keySkills[1] || 'advanced APIs'}`,
        'Real-world business logic formulation and algorithmic optimization',
        'Interactive lab drills: Building modular and maintainable solutions'
      ]
    },
    {
      title: 'Module 3: Advanced Integration, Performance & Security',
      subtitle: 'Enterprise-grade configurations, scaling, and optimizations',
      topics: [
        `Leveraging ${raw.keySkills[2] || 'cloud integrations'} in modern architectures`,
        'Performance benchmarking, caching, and database query optimization',
        'Error handling, logging, monitoring, and production security audits',
        'Automated testing workflows and CI/CD pipeline integration'
      ]
    },
    {
      title: 'Module 4: Real-Time Capstone Project & Placement Sprint',
      subtitle: 'End-to-end live industry project, mock interviews, and portfolio creation',
      topics: [
        'Live Enterprise Capstone Project mimicking real-world corporate deliverables',
        'Code reviews and architecture validation by senior industry mentors',
        'GitHub portfolio curation, LinkedIn branding, and resume polishing',
        'Mock technical interviews, coding challenges, and corporate placement drives'
      ]
    }
  ];

  const careerRoles = [
    `${raw.title.replace(' Training', '').replace(' Masterclass', '')} Specialist`,
    'Senior Software Engineer',
    'Technical Consultant',
    'Solution Architect',
    'Corporate Technical Lead'
  ];

  const avgSalary = '₹6.5 - 14.5 LPA';
  const topHiringCompanies = [
    'Tata Consultancy Services (TCS)',
    'Cognizant Technology Solutions',
    'Infosys Technologies',
    'Zoho Corporation',
    'Amazon Web Services',
    'Accenture',
    'Capgemini'
  ];

  return {
    id: slug,
    title: raw.title,
    category: raw.category,
    subcategory: raw.subcategory,
    domainId: raw.domainId,
    level,
    image,
    duration,
    provider: 'Greens Technologys Academy',
    badge: raw.badge,
    rating,
    reviewsCount,
    tagline,
    overview,
    highlights,
    prerequisites:
      'Basic logical reasoning and an enthusiasm to learn. No prior coding expertise is strictly required for beginner tracks.',
    targetAudience: [
      'College students and fresh engineering / science graduates seeking campus placement',
      'Working professionals seeking lateral transitions into higher-paying tech stacks',
      'IT employees looking to upskill into modern emerging technologies and certifications',
      'Non-IT career switchers aiming for assured software development opportunities'
    ],
    keySkills: raw.keySkills,
    toolsAndTech,
    curriculumModules,
    careerRoles,
    avgSalary,
    topHiringCompanies
  };
});

// Helper functions for easy querying
export function getAllCourses(): CourseDetailData[] {
  return coursesData;
}

export function getCourseById(idOrSlug: string): CourseDetailData | undefined {
  const clean = slugify(idOrSlug);
  return coursesData.find((c) => c.id === clean || slugify(c.title) === clean);
}

export function getCoursesByDomain(domainId: string): CourseDetailData[] {
  if (domainId === 'all') return coursesData;
  return coursesData.filter((c) => c.domainId === domainId);
}

export function getCoursesByCategory(categoryName: string): CourseDetailData[] {
  return coursesData.filter((c) => c.category.toLowerCase() === categoryName.toLowerCase());
}
