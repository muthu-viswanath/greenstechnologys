// Master Certification Database for Greens Technologys
// Contains rich, industry-curated curriculum overviews for all 53 certifications

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

export interface CurriculumModule {
  title: string;
  subtitle: string;
  topics: string[];
}

export interface CertificationDetailData {
  id: string;
  title: string;
  category:
    | 'Cloud & DevOps'
    | 'Testing & QA'
    | 'AI & Data Science'
    | 'Full Stack & Programming'
    | 'Enterprise & ERP'
    | 'Automation & RPA'
    | 'Management & Agile'
    | 'Systems & Infrastructure';
  level: 'Associate' | 'Professional' | 'Expert';
  image: string;
  duration: string;
  provider: string;
  examCode: string;
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

export const certificationsData: CertificationDetailData[] = [
  // =========================================================================
  // 1. CLOUD & DEVOPS
  // =========================================================================
  {
    id: 'oracle',
    title: 'ORACLE Database & SQL Certified Associate',
    category: 'Cloud & DevOps',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '60 Hrs (Weekday / Weekend)',
    provider: 'Oracle University Accreditation Track',
    examCode: '1Z0-071 (Oracle Database SQL) / 1Z0-082',
    badge: 'Enterprise Demand',
    rating: '4.9',
    reviewsCount: '3,840+ Certified',
    tagline: 'Master mission-critical enterprise database architecture, advanced PL/SQL programming, and high-performance querying.',
    overview:
      'Oracle Database powers 90% of Fortune 500 financial, healthcare, and enterprise transactional platforms. This certification curriculum trains you on Oracle 19c multi-tenant architecture, complex relational modeling, subquery factoring, analytical SQL window functions, stored procedures, packages, and query optimization.',
    highlights: [
      'Comprehensive preparation for Oracle 1Z0-071 official certification exam',
      'Hands-on lab environments with Oracle 19c Enterprise Edition on Linux servers',
      'Production database migration and transaction locking scenarios',
      'Real-world PL/SQL business logic and batch automation case studies'
    ],
    prerequisites: 'Basic computer literacy and fundamentals of structured data. Prior programming knowledge is beneficial but not mandatory.',
    targetAudience: [
      'Aspiring Database Administrators (DBAs)',
      'Backend Software Engineers & SQL Developers',
      'Data Analysts and Business Intelligence Engineers',
      'Fresh graduates seeking high-growth enterprise software careers'
    ],
    keySkills: ['Oracle 19c Architecture', 'PL/SQL Packages', 'Analytical Functions', 'Execution Plans', 'Index Optimization', 'ACID Transactions'],
    toolsAndTech: ['Oracle 19c Enterprise', 'SQL Developer', 'Toad for Oracle', 'PL/SQL Developer', 'Linux Bash'],
    curriculumModules: [
      {
        title: 'Module 1: Relational Modeling & Oracle 19c Multi-Tenant Architecture',
        subtitle: 'Core foundation of relational database structures and container systems',
        topics: [
          'Relational database design principles and normal forms (1NF to BCNF)',
          'Multitenant container database (CDB) and pluggable database (PDB) mechanics',
          'Oracle data blocks, extents, segments, and tablespace management',
          'Data Definition Language (DDL) and Data Manipulation Language (DML) workflows'
        ]
      },
      {
        title: 'Module 2: Advanced SQL Querying & Analytic Processing',
        subtitle: 'Unlocking deep analytical capabilities and multi-table operations',
        topics: [
          'Complex joins, self-joins, cross joins, and outer join operations',
          'Correlated and non-correlated subqueries, CTEs, and WITH clause hierarchy',
          'Analytic window functions: RANK, DENSE_RANK, ROW_NUMBER, LEAD, and LAG',
          'Set operators, group-by rollups, cubes, and pivot/unpivot operations'
        ]
      },
      {
        title: 'Module 3: Enterprise PL/SQL Programming Architecture',
        subtitle: 'Server-side business logic and modular code implementation',
        topics: [
          'Anonymous blocks, variable scoping, and dynamic SQL execution',
          'Stored procedures, functions, packages, and parameter passing modes',
          'Advanced cursor mechanics: implicit, explicit, parameter, and REF cursors',
          'Autonomous transactions and enterprise-grade exception handling patterns'
        ]
      },
      {
        title: 'Module 4: Performance Diagnostics & SQL Tuning',
        subtitle: 'Optimizing high-throughput transactional queries',
        topics: [
          'Deciphering Oracle Explain Plans and Autotrace statistics',
          'B-Tree, Bitmap, Composite, and Function-Based indexing strategies',
          'Cost-Based Optimizer (CBO) behavior, table statistics, and DBMS_STATS',
          'Bulk processing with FORALL and BULK COLLECT to eliminate context switching'
        ]
      },
      {
        title: 'Module 5: Capstone Enterprise Implementation & Exam Simulation',
        subtitle: 'Real-world banking schema buildout and mock certification drills',
        topics: [
          'Designing an end-to-end core banking transactional schema with security constraints',
          'Implementing automated reconciliation batch jobs via PL/SQL scheduler',
          'Official 1Z0-071 exam pattern analysis, speed drills, and mock question banks'
        ]
      }
    ],
    careerRoles: ['Oracle Database Developer', 'SQL Programmer', 'Junior Oracle DBA', 'Data Migration Specialist', 'Backend Data Engineer'],
    avgSalary: '₹6.0 LPA - ₹15.5 LPA',
    topHiringCompanies: ['Oracle', 'TCS', 'Infosys', 'Cognizant', 'HCLTech', 'Standard Chartered', 'Barclays']
  },

  {
    id: 'azure',
    title: 'Microsoft Azure Solutions Architect Certification',
    category: 'Cloud & DevOps',
    level: 'Expert',
    image: certCloudAzureImg,
    duration: '70 Hrs (Weekday / Weekend)',
    provider: 'Microsoft Certified: Azure Solutions Architect Expert',
    examCode: 'AZ-104 (Administrator) & AZ-305 (Solutions Architect)',
    badge: 'Top Tier Cloud',
    rating: '4.9',
    reviewsCount: '4,120+ Certified',
    tagline: 'Architect resilient, scalable, multi-region cloud infrastructures on Microsoft Azure.',
    overview:
      'This certification path prepares you to master enterprise-grade Microsoft Azure cloud services. You will learn to architect compute solutions, configure secure software-defined virtual networks, manage hybrid cloud identity with Microsoft Entra ID, design disaster recovery architectures, and automate cloud provisioning using ARM and Bicep.',
    highlights: [
      'Dual-exam mapping for both AZ-104 and AZ-305 certifications',
      'Live Azure sandbox labs with enterprise credit allocations',
      'Multi-region high availability and fault-tolerant architectural design',
      'Cloud cost optimization and Governance using Azure Policy and Blueprints'
    ],
    prerequisites: 'Foundational understanding of operating systems, networking fundamentals (IP addressing, DNS), and basic cloud concepts.',
    targetAudience: [
      'System Administrators transitioning to Cloud Engineers',
      'Cloud Architects & Infrastructure Engineers',
      'DevOps Engineers seeking Azure ecosystem mastery',
      'Software Developers architecting cloud-native applications'
    ],
    keySkills: ['Azure Virtual Machines & AKS', 'Virtual Networks & Peering', 'Entra ID (Azure AD)', 'Azure Storage & Cosmos DB', 'Bicep / ARM Templates', 'Disaster Recovery (ASR)'],
    toolsAndTech: ['Azure Portal', 'Azure CLI & PowerShell', 'Azure Kubernetes Service', 'Terraform & Bicep', 'Azure Monitor'],
    curriculumModules: [
      {
        title: 'Module 1: Cloud Identity, Governance & Enterprise Access',
        subtitle: 'Foundational security posture and role-based access control',
        topics: [
          'Microsoft Entra ID (formerly Azure AD) users, groups, and multi-factor authentication',
          'Role-Based Access Control (RBAC) and custom role definitions',
          'Azure Policies, Management Groups, and enterprise landing zone blueprints',
          'Cost management, budgeting alerts, and resource tagging strategies'
        ]
      },
      {
        title: 'Module 2: Resilient Compute & Container Solutions',
        subtitle: 'Architecting compute services for scale and zero-downtime',
        topics: [
          'Azure Virtual Machines, VM Scale Sets (VMSS), and dedicated hosts',
          'Containerization with Azure Container Instances (ACI) and Container Apps',
          'Deploying and orchestrating microservices on Azure Kubernetes Service (AKS)',
          'Serverless computing using Azure Functions and Event Grid'
        ]
      },
      {
        title: 'Module 3: Software-Defined Networking & Traffic Management',
        subtitle: 'Securing cloud traffic across hybrid and distributed setups',
        topics: [
          'Virtual Networks (VNet), subnets, Network Security Groups (NSGs), and ASGs',
          'VNet Peering, Azure VPN Gateway, and ExpressRoute hybrid connectivity',
          'Layer 4 and Layer 7 load balancing: Azure Load Balancer vs Application Gateway',
          'Azure Front Door, Traffic Manager, and Web Application Firewall (WAF) policies'
        ]
      },
      {
        title: 'Module 4: Enterprise Data Storage & High Availability Databases',
        subtitle: 'Structuring unstructured, relational, and NoSQL storage tiers',
        topics: [
          'Azure Blob Storage, Data Lake Gen2, lifecycle tiers, and replication modes (LRS, GRS)',
          'Azure SQL Database, Elastic Pools, and Managed Instances',
          'Globally distributed multi-model databases with Azure Cosmos DB',
          'Disaster recovery planning using Azure Site Recovery (ASR) and Backup vaults'
        ]
      },
      {
        title: 'Module 5: Infrastructure as Code & Solution Architecture Capstone',
        subtitle: 'Production rollout with Infrastructure as Code and AZ-305 case studies',
        topics: [
          'Automated deployments via Azure Resource Manager (ARM) and Bicep',
          'Designing a zero-trust multi-tier financial portal on Azure',
          'Mock certification exam walkthroughs and architectural case analysis'
        ]
      }
    ],
    careerRoles: ['Azure Cloud Architect', 'Azure Administrator', 'Cloud Systems Engineer', 'DevOps Architect', 'Infrastructure Consultant'],
    avgSalary: '₹8.5 LPA - ₹24.0 LPA',
    topHiringCompanies: ['Microsoft', 'Accenture', 'Deloitte', 'Wipro', 'Capgemini', 'EY', 'LTIMindtree']
  },

  {
    id: 'devops',
    title: 'DevOps & SRE Multi-Cloud Master Certification',
    category: 'Cloud & DevOps',
    level: 'Expert',
    image: devopsMasterImg,
    duration: '80 Hrs (Weekday / Weekend)',
    provider: 'Cloud Native / Linux Foundation Aligned',
    examCode: 'CKA (Kubernetes) / HashiCorp Terraform / AWS DevOps',
    badge: 'Industry Benchmark',
    rating: '4.9',
    reviewsCount: '5,200+ Certified',
    tagline: 'End-to-end automation pipelines, container orchestration, IaC, and SRE observability practices.',
    overview:
      'DevOps and Site Reliability Engineering (SRE) are the most sought-after skill sets in enterprise IT. This comprehensive certification curriculum guides you through continuous integration and delivery (CI/CD), production Kubernetes clusters, Infrastructure as Code with Terraform, Ansible configuration management, and full-stack observability with Prometheus and Grafana.',
    highlights: [
      'Production cluster provisioning on AWS & Azure using Terraform',
      'Real-world CI/CD pipelines deploying microservices with automated testing gates',
      'Certified Kubernetes Administrator (CKA) syllabus alignment',
      'DevSecOps security scanning integrated into pull request pipelines'
    ],
    prerequisites: 'Basic knowledge of Linux commands and understanding of software development lifecycles.',
    targetAudience: [
      'Software Developers moving to DevOps / Cloud Engineering',
      'System Administrators seeking automated infrastructure roles',
      'QA Engineers transitioning to SDET & Release Engineering',
      'Tech Leads modernizing enterprise delivery pipelines'
    ],
    keySkills: ['Docker Containerization', 'Kubernetes (CKA)', 'Terraform IaC', 'Jenkins CI/CD', 'Ansible Automation', 'Prometheus & Grafana', 'DevSecOps SonarQube'],
    toolsAndTech: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'GitLab CI', 'Prometheus', 'Grafana', 'Trivy'],
    curriculumModules: [
      {
        title: 'Module 1: Version Control, Git Workflows & Collaborative Branching',
        subtitle: 'Foundations of collaborative code repositories and semantic releases',
        topics: [
          'Advanced Git: interactive rebasing, merge strategies, submodules, and cherry-picking',
          'GitFlow and trunk-based development strategies for high-frequency teams',
          'Webhooks, pull request automation, branch protection, and code-signing'
        ]
      },
      {
        title: 'Module 2: Containerization with Docker & Container Security',
        subtitle: 'Packaging portable microservices and multi-stage container builds',
        topics: [
          'Docker architecture, namespaces, cgroups, and storage drivers',
          'Optimizing Dockerfiles with multi-stage builds and Alpine distroless images',
          'Container networking, volume persistence, and Compose multi-service stacks',
          'Vulnerability scanning with Trivy and Docker Scout in registry pipelines'
        ]
      },
      {
        title: 'Module 3: Enterprise Kubernetes Orchestration (CKA Aligned)',
        subtitle: 'Managing zero-downtime containerized workloads at enterprise scale',
        topics: [
          'Kubernetes control plane architecture: API Server, etcd, Kubelet, and Scheduler',
          'Pod lifecycle, Deployments, ReplicaSets, StatefulSets, and DaemonSets',
          'Services (ClusterIP, NodePort, LoadBalancer) and Ingress Controllers (Nginx)',
          'Persistent Volumes (PV), Claims (PVC), ConfigMaps, and Secret encryption'
        ]
      },
      {
        title: 'Module 4: Infrastructure as Code (Terraform) & Configuration (Ansible)',
        subtitle: 'Declarative cloud provisioning and automated server provisioning',
        topics: [
          'Terraform providers, state file remote locking with S3 and DynamoDB',
          'Reusable Terraform modules, workspaces, and zero-drift cloud provisioning',
          'Ansible playbooks, YAML syntax, inventory management, and Jinja2 templating',
          'Automated patching and configuration baseline enforcement across 100+ servers'
        ]
      },
      {
        title: 'Module 5: Continuous Delivery (CI/CD) & Observability SRE Stack',
        subtitle: 'Automated delivery pipelines and production monitoring',
        topics: [
          'Building Jenkins declarative scripted pipelines with automated artifact archiving',
          'ArgoCD GitOps deployment patterns for Kubernetes environments',
          'Prometheus metrics scraping, alertmanager routing, and Grafana dashboarding',
          'Real-time incident response simulations, SLIs, SLOs, and error budget tracking'
        ]
      }
    ],
    careerRoles: ['DevOps Engineer', 'Site Reliability Engineer (SRE)', 'Cloud Automation Architect', 'Platform Engineer', 'Build & Release Specialist'],
    avgSalary: '₹7.5 LPA - ₹22.0 LPA',
    topHiringCompanies: ['Amazon', 'Google Cloud', 'Thoughtworks', 'Cisco', 'Paypal', 'Societe Generale', 'Infosys']
  },

  {
    id: 'linux',
    title: 'LINUX System Administration & RHCSA Certification',
    category: 'Cloud & DevOps',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Red Hat Enterprise Linux / Linux Foundation',
    examCode: 'EX200 (Red Hat Certified System Administrator)',
    badge: 'Core Infrastructure',
    rating: '4.8',
    reviewsCount: '2,900+ Certified',
    tagline: 'Master RHEL administration, user permissions, SELinux security, and enterprise automation.',
    overview:
      'Linux is the operating backbone for over 90% of global internet servers, cloud clusters, and supercomputers. This RHCSA-aligned curriculum teaches you command-line proficiency, user and group security, LVM disk storage management, systemd service management, firewall configuration, and automated Bash scripting.',
    highlights: [
      'Aligined with official Red Hat RHCSA EX200 exam guidelines',
      '100% hands-on terminal command-line exercises on RHEL 9 and CentOS Stream',
      'SELinux mandatory access control and firewalld security hardening',
      'Storage partitioning with Logical Volume Manager (LVM) and Stratis'
    ],
    prerequisites: 'Basic familiarity with computer operating systems. No prior Linux experience required.',
    targetAudience: ['Aspiring Linux Administrators', 'Cloud and DevOps Engineers', 'Infrastructure Support Analysts', 'Cybersecurity Professionals'],
    keySkills: ['Linux Command Line', 'User & Group Permissions', 'LVM Disk Management', 'Systemd Services', 'SELinux Enforcement', 'Bash Automation'],
    toolsAndTech: ['Red Hat Enterprise Linux 9', 'CentOS / Rocky Linux', 'Bash Shell', 'Vim / Nano', 'Firewalld', 'Tar & SSH'],
    curriculumModules: [
      {
        title: 'Module 1: Essential Linux Command-Line Mechanics',
        subtitle: 'Mastering file manipulation, navigation, and text stream filters',
        topics: [
          'Filesystem Hierarchy Standard (FHS) and navigation techniques',
          'Input/output redirection, pipes, tee, grep, sed, and awk text processing',
          'File archiving, compression (tar, gzip, bzip2), and remote file transfer (rsync, scp)',
          'Managing process lifecycles: top, htop, ps, kill, and nice priority scheduling'
        ]
      },
      {
        title: 'Module 2: User Security, File Permissions & Access Control',
        subtitle: 'Securing multi-user operating environments and privilege escalation',
        topics: [
          'User and group administration, shadow password hashing, and expiration policies',
          'Standard UNIX permissions (rwx), SUID, SGID, and Sticky Bit mechanics',
          'POSIX Access Control Lists (ACLs) for granular user access delegation',
          'Configuring sudoers access and privilege escalation audit logging'
        ]
      },
      {
        title: 'Module 3: Storage Management & Logical Volume Management (LVM)',
        subtitle: 'Dynamic disk scaling, partitioning, and mount points',
        topics: [
          'MBR and GPT partitioning using fdisk and parted',
          'Creating and managing Physical Volumes (PV), Volume Groups (VG), and Logical Volumes (LV)',
          'Online filesystem resizing (XFS, Ext4) without downtime',
          'Persistent automounting configuration in /etc/fstab with UUIDs'
        ]
      },
      {
        title: 'Module 4: Systemd Service Control & Networking',
        subtitle: 'Boot process inspection, networking configuration, and scheduling',
        topics: [
          'Systemd unit files, service masking, targets, and boot rescue environments',
          'Network configuration with nmcli and iproute2 suites',
          'NTP / Chrony time synchronization and local DNS resolver configuration',
          'Automating periodic cron jobs and systemd timer units'
        ]
      },
      {
        title: 'Module 5: Security Hardening with SELinux & Firewalld',
        subtitle: 'Enterprise compliance, firewall rules, and RHCSA practical drills',
        topics: [
          'SELinux modes (Enforcing, Permissive), contexts, booleans, and audit2allow troubleshooting',
          'Firewalld zones, rich rules, and port redirection',
          'RHCSA mock exam practical labs under timed testing conditions'
        ]
      }
    ],
    careerRoles: ['Linux Systems Administrator', 'RHEL Support Engineer', 'Infrastructure Engineer', 'DevOps Systems Specialist'],
    avgSalary: '₹4.8 LPA - ₹11.5 LPA',
    topHiringCompanies: ['Red Hat', 'IBM', 'Wipro', 'HCLTech', 'Amazon Web Services', 'NTT Data']
  },

  {
    id: 'virtualization',
    title: 'Virtualization & VMware Certified Professional',
    category: 'Cloud & DevOps',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'VMware by Broadcom / Hyper-V Ecosystem',
    examCode: 'VCP-DCV (VMware Certified Professional - Data Center Virtualization)',
    badge: 'Datacenter Standard',
    rating: '4.8',
    reviewsCount: '2,150+ Certified',
    tagline: 'Design, configure, and manage high-availability virtual datacenters using vSphere and ESXi.',
    overview:
      'Data center virtualization is the foundational technology powering private and public cloud platforms. This curriculum equips you with hands-on skills in installing VMware ESXi hypervisors, managing centralized workloads with vCenter Server, configuring shared SAN/NAS datastores, and implementing vSphere High Availability (HA) and Distributed Resource Scheduler (DRS).',
    highlights: [
      'VCP-DCV certification syllabus alignment and enterprise lab setup',
      'Configuring vSphere High Availability (HA) and Fault Tolerance (FT)',
      'Storage virtualization with VMware vSAN and iSCSI/NFS datastores',
      'vSphere vMotion live migrations without server interruption'
    ],
    prerequisites: 'Foundational knowledge of server hardware, storage networking, and Windows or Linux server administration.',
    targetAudience: ['Datacenter Administrators', 'Virtualization Engineers', 'System Engineers', 'Cloud Infrastructure Specialists'],
    keySkills: ['VMware ESXi 8.x', 'vCenter Server Appliance (VCSA)', 'vSphere HA & DRS', 'vSAN Storage', 'Distributed Virtual Switches (vDS)', 'VMotion & Storage vMotion'],
    toolsAndTech: ['VMware vSphere 8', 'ESXi Hypervisor', 'vCenter Server', 'vSAN', 'PowerCLI', 'Microsoft Hyper-V'],
    curriculumModules: [
      {
        title: 'Module 1: Hypervisor Fundamentals & ESXi Architecture',
        subtitle: 'Type-1 bare-metal virtualization setup and initial configuration',
        topics: [
          'Comparing Type-1 and Type-2 hypervisors, virtualization overhead, and NUMA architecture',
          'Bare-metal installation of VMware ESXi 8 on enterprise server hardware',
          'Direct Console User Interface (DCUI) and host web client management',
          'Virtual Machine virtual hardware versioning, CPU allocation, and memory ballooning'
        ]
      },
      {
        title: 'Module 2: Centralized Management with vCenter Server Appliance',
        subtitle: 'Scalable data center operations and cluster grouping',
        topics: [
          'Deploying and configuring vCenter Server Appliance (VCSA) with PostgreSQL DB',
          'Managing datacenter inventory, folders, host clusters, and resource pools',
          'Single Sign-On (SSO) integration with Active Directory / LDAP',
          'vCenter lifecycle management and automated ESXi host patching'
        ]
      },
      {
        title: 'Module 3: Virtual Networking & Storage Architecture',
        subtitle: 'Software-defined network switches and shared datastore mechanics',
        topics: [
          'Standard vSwitches (vSS) vs Distributed vSwitches (vDS)',
          'Port groups, NIC teaming, failover policies, and VLAN tagging (802.1Q)',
          'Shared storage configuration: iSCSI, NFS, and Fibre Channel (FC) datastores',
          'VMware vSAN software-defined storage pooling and fault domain policies'
        ]
      },
      {
        title: 'Module 4: Business Continuity, High Availability & Disaster Recovery',
        subtitle: 'Zero downtime workload mobility and failover architecture',
        topics: [
          'Live VM migrations using vSphere vMotion and Storage vMotion',
          'vSphere High Availability (HA) admission control and heartbeat networks',
          'Distributed Resource Scheduler (DRS) rules, affinity, and anti-affinity groups',
          'VMware Fault Tolerance (FT) for mission-critical zero-data-loss uptime'
        ]
      },
      {
        title: 'Module 5: Performance Diagnostics & VCP Exam Preparation',
        subtitle: 'Troubleshooting ESXi bottlenecks and certification readiness',
        topics: [
          'Analyzing host and VM performance metrics (CPU ready time, memory swapping, disk latency)',
          'PowerCLI script automation for repetitive administrative workflows',
          'VCP-DCV exam sample questions, lab scenarios, and troubleshooting drills'
        ]
      }
    ],
    careerRoles: ['Virtualization Administrator', 'VMware Systems Engineer', 'Data Center Infrastructure Engineer', 'Cloud Virtualization Specialist'],
    avgSalary: '₹5.5 LPA - ₹14.0 LPA',
    topHiringCompanies: ['VMware / Broadcom', 'NTT Data', 'Wipro', 'Kyndryl', 'Cognizant', 'HCLTech']
  },

  {
    id: 'unix',
    title: 'UNIX Server Administration & Shell Scripting',
    category: 'Cloud & DevOps',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'The Open Group UNIX Standards Aligned',
    examCode: 'Enterprise UNIX Certified Specialist',
    rating: '4.8',
    reviewsCount: '1,840+ Certified',
    tagline: 'Master enterprise UNIX platforms (Solaris, AIX, HP-UX) and automated administrative scripting.',
    overview:
      'Enterprise banking, telecommunication, and airline reservation mainframes run on trusted UNIX operating systems. This curriculum covers UNIX file structures, kernel parameters, process control, system log inspection, POSIX compliance, and advanced administrative Shell automation.',
    highlights: [
      'Mastering POSIX shell scripting for real-world automated maintenance',
      'UNIX process scheduling, IPC mechanics, and daemon lifecycles',
      'System performance analysis and network diagnostic utilities',
      'Security auditing, su/sudo privilege containment, and log auditing'
    ],
    prerequisites: 'Basic computer hardware understanding. No previous command-line experience needed.',
    targetAudience: ['Junior System Administrators', 'Telecom and Banking Application Support', 'Data Engineers', 'Fresh Engineering Graduates'],
    keySkills: ['UNIX Architecture', 'POSIX Shell Scripting', 'Process Signals & Cron', 'Sed & Awk Text Processing', 'User Isolation & Auditing'],
    toolsAndTech: ['Oracle Solaris', 'IBM AIX / Linux', 'Korn Shell (ksh)', 'Bash', 'Awk / Sed', 'Vi Editor'],
    curriculumModules: [
      {
        title: 'Module 1: UNIX Architecture & Command Line Mastery',
        subtitle: 'Kernel-space vs user-space, filesystem nodes, and navigation',
        topics: [
          'UNIX architecture: Kernel, Shell, utilities, and file system hierarchy',
          'Inodes, soft links, hard links, and filesystem structural differences',
          'File manipulation commands, file search utilities (find, xargs, which)',
          'Editing configurations with Vi/Vim: command mode, visual mode, and regex find-replace'
        ]
      },
      {
        title: 'Module 2: Process Lifecycles & Inter-Process Communication',
        subtitle: 'Monitoring and managing multi-threaded server tasks',
        topics: [
          'Process creation (fork/exec), parent-child relationships, zombie and orphan processes',
          'Process monitoring: ps, top, prstat, and signal transmission (kill -9, -15, -1)',
          'Scheduling recurring batch tasks using at, crontab, and cron daemon monitoring',
          'Inter-process communication fundamentals: pipes, named pipes (FIFOs), and sockets'
        ]
      },
      {
        title: 'Module 3: Advanced Stream Filtering with Awk and Sed',
        subtitle: 'Automated data sanitization and system log reporting',
        topics: [
          'Stream editor (sed) regular expressions, substitute flags, and multi-line commands',
          'Awk programming syntax: BEGIN, END blocks, field separators ($1..$NF)',
          'Conditionals, loops, arrays, and associative hashing in Awk scripts',
          'Parsing server access logs, generating tabular error summaries, and alerting'
        ]
      },
      {
        title: 'Module 4: Enterprise UNIX Shell Scripting Automation',
        subtitle: 'Building reliable administrative scripts with error handling',
        topics: [
          'Shell script structure, shebang variations, and command line arguments ($@, $#)',
          'Conditional statements (if-then-else, test brackets), loops (for, while, until)',
          'Shell functions, return values, variable scope, and exit codes ($?)',
          'Trap signals for cleanup on unexpected script termination'
        ]
      },
      {
        title: 'Module 5: Security Auditing & Production Case Studies',
        subtitle: 'Hardening UNIX instances in high-security financial environments',
        topics: [
          'System logs auditing in /var/log, syslogd configuration, and rotation',
          'User authentication security and secure shell (SSH) key-based trust establishment',
          'Building an automated backup, health check, and disk alert notification script'
        ]
      }
    ],
    careerRoles: ['UNIX Administrator', 'Application Support Specialist', 'Production Operations Engineer', 'Telecom Systems Engineer'],
    avgSalary: '₹4.5 LPA - ₹10.5 LPA',
    topHiringCompanies: ['IBM', 'Oracle', 'Tech Mahindra', 'Citi', 'Standard Chartered', 'Ericsson']
  },

  // =========================================================================
  // 2. TESTING & QA
  // =========================================================================
  {
    id: 'istqb',
    title: 'ISTQB Certified Tester (Foundation & Advanced)',
    category: 'Testing & QA',
    level: 'Associate',
    image: sdetExpertImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'International Software Testing Qualifications Board (ISTQB)',
    examCode: 'CTFL (Certified Tester Foundation Level) & CTAL',
    badge: 'Worldwide Standard',
    rating: '4.9',
    reviewsCount: '4,650+ Certified',
    tagline: 'The world’s most globally recognized certification for software quality assurance and testing methodologies.',
    overview:
      'ISTQB certification is the global gold standard for software testers across 130+ countries. This curriculum provides in-depth mastery of the software test lifecycle (STLC), black-box test design techniques, white-box path coverage, defect triage lifecycles, and risk-based testing strategies in Agile environments.',
    highlights: [
      'Comprehensive syllabus aligned with latest ISTQB CTFL v4.0 syllabus',
      'Black-box and white-box test design case studies from enterprise banking apps',
      'Over 500+ mock exam questions with detailed diagnostic rationales',
      '100% exam pass guarantee with mentor-guided review sessions'
    ],
    prerequisites: 'No prior technical or programming knowledge required. Suitable for freshers and experienced testers alike.',
    targetAudience: ['Aspiring Quality Assurance Engineers', 'Manual Software Testers', 'QA Leads & Test Managers', 'Developers learning QA principles'],
    keySkills: ['Equivalence Partitioning', 'Boundary Value Analysis', 'Decision Table Testing', 'Defect Life Cycle', 'Agile Test Quadrants', 'Risk Assessment'],
    toolsAndTech: ['Jira Software', 'Confluence', 'Zephyr Test Management', 'TestRail', 'Mantis Bug Tracker'],
    curriculumModules: [
      {
        title: 'Module 1: Fundamentals of Software Testing & Quality Assurance',
        subtitle: 'Core principles, psychology of testing, and quality metrics',
        topics: [
          'Why is testing necessary? Causes of software defects, costs of late bug detection',
          'Seven foundational testing principles explained with real industry examples',
          'Verification vs Validation and standard test process activities',
          'The psychology of testing and effective communication with development teams'
        ]
      },
      {
        title: 'Module 2: Testing Throughout the Software Development Lifecycle',
        subtitle: 'Sequential vs Agile models and test levels',
        topics: [
          'V-Model, Waterfall, Iterative, and Agile development models',
          'Test levels: Unit, Component, Integration, System, and User Acceptance Testing (UAT)',
          'Test types: Functional, Non-functional, Structural, and Change-related (Regression)',
          'Maintenance testing and impact analysis for production patches'
        ]
      },
      {
        title: 'Module 3: Static Testing & Review Techniques',
        subtitle: 'Catching defects early without code execution',
        topics: [
          'Static testing benefits and the formal review process (Moderator, Author, Reviewer)',
          'Review types: Informal review, Walkthrough, Technical review, and Inspection',
          'Applying review techniques: Checklist-based, Scenario-based, and Role-based',
          'Static code analysis tools and automated linting integrations'
        ]
      },
      {
        title: 'Module 4: Dynamic Test Design Techniques',
        subtitle: 'Mathematical precision in test case generation',
        topics: [
          'Black-Box techniques: Equivalence Partitioning (EP) and Boundary Value Analysis (BVA)',
          'Decision Table testing and State Transition diagrams',
          'White-Box techniques: Statement coverage, Branch/Decision coverage, and Cyclomatic Complexity',
          'Experience-based techniques: Error Guessing, Exploratory testing, and Checklist testing'
        ]
      },
      {
        title: 'Module 5: Test Management, Defect Tracking & CTFL Exam Drills',
        subtitle: 'Risk management, metrics reporting, and exam simulations',
        topics: [
          'Test planning, test estimation (Planning Poker, Function Points), and test monitoring',
          'Risk-based testing: Risk identification, probability, and impact scoring',
          'Defect management lifecycle: Writing reproducible defect reports in Jira',
          'ISTQB CTFL v4.0 timed exam simulation with comprehensive answer debriefs'
        ]
      }
    ],
    careerRoles: ['QA Test Engineer', 'Software Tester', 'QA Analyst', 'Test Lead', 'UAT Coordinator'],
    avgSalary: '₹4.2 LPA - ₹9.8 LPA',
    topHiringCompanies: ['Capgemini', 'Cognizant', 'TCS', 'Wipro', 'Mindtree', 'HCLTech', 'Accenture']
  },

  {
    id: 'selenium',
    title: 'Selenium WebDriver Automation SDET Certification',
    category: 'Testing & QA',
    level: 'Professional',
    image: sdetExpertImg,
    duration: '65 Hrs (Weekday / Weekend)',
    provider: 'Greens Certified SDET Council',
    examCode: 'Certified Software Development Engineer in Test (SDET)',
    badge: 'Highest Placement',
    rating: '4.9',
    reviewsCount: '6,400+ Certified',
    tagline: 'Build industry-grade automation testing frameworks with Java, Selenium WebDriver, TestNG, and Cucumber BDD.',
    overview:
      'Manual testing alone is no longer enough in modern Agile sprint cycles. This SDET-level curriculum trains you to build complete automation frameworks from scratch using Java, Selenium 4, Page Object Model (POM), TestNG for test execution, Cucumber for Behavior-Driven Development (BDD), and integration with Jenkins CI/CD.',
    highlights: [
      'Comprehensive Java programming for automation from scratch',
      'Advanced Selenium 4: Relative locators, Shadow DOM, and DevTools integration',
      'Building hybrid, data-driven, and BDD Cucumber frameworks',
      'Automated headless test execution in Jenkins CI/CD with Extent Reports'
    ],
    prerequisites: 'Basic understanding of software testing concepts. No prior Java or coding experience required.',
    targetAudience: ['Manual Testers moving to Automation', 'Fresher Graduates targeting SDET roles', 'QA Leads architecting frameworks', 'Developers writing end-to-end tests'],
    keySkills: ['Java for Testers', 'Selenium WebDriver 4', 'TestNG Framework', 'Cucumber BDD', 'Page Object Model', 'Maven & Jenkins', 'Extent Reports'],
    toolsAndTech: ['Selenium WebDriver 4', 'Java 17', 'TestNG', 'Cucumber', 'Maven', 'Git / GitHub', 'Jenkins', 'ExtentReports'],
    curriculumModules: [
      {
        title: 'Module 1: Core Java Programming for Automation Engineers',
        subtitle: 'Object-Oriented Programming principles tailored for test scripting',
        topics: [
          'Java syntax, data types, operators, and control flow statements',
          'OOPs fundamentals: Classes, Objects, Inheritance, Polymorphism, Abstraction, and Encapsulation',
          'Java Collections Framework: List, ArrayList, Set, HashSet, Map, and HashMap in automation',
          'Robust exception handling and file I/O operations (Apache POI for Excel data parsing)'
        ]
      },
      {
        title: 'Module 2: Selenium 4 WebDriver Architecture & Locator Strategies',
        subtitle: 'Browser automation and dynamic element interrogation',
        topics: [
          'Selenium architecture: WebDriver W3C protocol and browser drivers',
          'Element locators: ID, Name, Class, Tag, LinkText, dynamic XPath axes, and CSS Selectors',
          'Interacting with WebElements: click, sendKeys, clear, dropdowns (Select class), and checkboxes',
          'Handling alerts, modal popups, multiple browser windows, and iframe switches'
        ]
      },
      {
        title: 'Module 3: Advanced Browser Interactions & Synchronization',
        subtitle: 'Handling dynamic JavaScript applications and user gestures',
        topics: [
          'Synchronization strategies: Implicit Wait, Explicit Wait, and Fluent Wait conditions',
          'Actions class: Mouse hover, drag-and-drop, double click, and context right click',
          'JavaScriptExecutor: Scrolling, handling invisible elements, and capturing performance metrics',
          'Taking screenshots on test failure and attaching to HTML execution reports'
        ]
      },
      {
        title: 'Module 4: Enterprise Test Frameworks: TestNG & Page Object Model',
        subtitle: 'Modular, maintainable, and parallel test execution',
        topics: [
          'TestNG annotations, suite XML configuration, grouping, and prioritization',
          'Data-driven testing using @DataProvider and external Excel test data sheets',
          'Page Object Model (POM) design pattern and PageFactory implementation',
          'Parallel cross-browser test execution on Chrome, Firefox, and Edge'
        ]
      },
      {
        title: 'Module 5: Behavior-Driven Development (Cucumber BDD) & CI/CD Pipeline',
        subtitle: 'Collaborative Gherkin specifications and automated pipeline runs',
        topics: [
          'Cucumber feature files, Gherkin syntax (Given, When, Then, And), and scenario outlines',
          'Step definitions, hooks, tagged executions, and dependency injection',
          'Building custom ExtentReports with pie charts and failure screenshots',
          'Integrating Maven build tools with Jenkins for scheduled nighttime regression pipelines'
        ]
      }
    ],
    careerRoles: ['SDET (Software Development Engineer in Test)', 'Automation Test Engineer', 'QA Automation Lead', 'Selenium Framework Architect'],
    avgSalary: '₹5.5 LPA - ₹15.0 LPA',
    topHiringCompanies: ['Amazon', 'Zoho', 'Cognizant', 'TCS', 'Infosys', 'PayPal', 'Ford Motor']
  },

  {
    id: 'software-testing',
    title: 'Manual & Software Testing Professional Certification',
    category: 'Testing & QA',
    level: 'Associate',
    image: sdetExpertImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Greens QA Standards Board',
    examCode: 'Certified Software QA Practitioner',
    rating: '4.8',
    reviewsCount: '5,100+ Certified',
    tagline: 'Comprehensive manual testing, Agile methodologies, Jira issue tracking, and API testing with Postman.',
    overview:
      'This foundational certification curriculum gives you the exact skills needed to break into the IT industry as a certified software testing professional. It covers the complete Software Development Life Cycle (SDLC), Software Testing Life Cycle (STLC), drafting high-coverage test cases, managing sprints in Jira, and testing backend REST APIs using Postman.',
    highlights: [
      'End-to-end hands-on project testing an actual enterprise e-commerce portal',
      'Writing test cases, traceability matrices (RTM), and bug reports',
      'Sprint ceremonies and Agile QA practices in Atlassian Jira',
      'API testing fundamentals: HTTP methods, status codes, and JSON response verification in Postman'
    ],
    prerequisites: 'No technical prerequisites. Ideal for fresh graduates and professionals switching careers from non-IT fields.',
    targetAudience: ['Fresh Graduates looking for their first IT job', 'Professionals from non-tech backgrounds', 'Customer Support / BPO transitioning to QA', 'Manual Testers wanting formal certification'],
    keySkills: ['SDLC & STLC', 'Test Case Design', 'Traceability Matrix', 'Defect Life Cycle', 'Jira Sprint Tracking', 'Postman API Testing'],
    toolsAndTech: ['Jira Software', 'Postman API Client', 'Confluence', 'Excel / Google Sheets', 'Bugzilla'],
    curriculumModules: [
      {
        title: 'Module 1: Software Engineering Lifecycles (SDLC & STLC)',
        subtitle: 'How software is conceived, built, tested, and shipped',
        topics: [
          'Software Development Lifecycle models: Waterfall, Spiral, and Agile Scrum',
          'Software Testing Lifecycle phases: Requirement analysis, test planning, design, execution, closure',
          'Agile Scrum workflow: User stories, acceptance criteria, sprint planning, and daily standups',
          'Quality Assurance (QA) vs Quality Control (QC) definitions and distinctions'
        ]
      },
      {
        title: 'Module 2: Test Case Design & Documentation Mastery',
        subtitle: 'Crafting bulletproof test scenarios for real business applications',
        topics: [
          'Analyzing Software Requirement Specifications (SRS) and Business Requirement Documents (BRD)',
          'Drafting test scenarios, test cases, preconditions, and expected results',
          'Applying test design techniques: Boundary Value Analysis and Equivalence Class Partitioning',
          'Building Requirement Traceability Matrix (RTM) to ensure 100% requirement coverage'
        ]
      },
      {
        title: 'Module 3: Defect Tracking & Jira Project Management',
        subtitle: 'Finding, logging, and verifying bugs across the defect lifecycle',
        topics: [
          'Defect life cycle states: New, Assigned, Open, Fixed, Retest, Closed, Reopened',
          'Writing clear bug reports: Severity vs Priority, steps to reproduce, and screenshot proof',
          'Hands-on Jira: Creating epics, user stories, tasks, bugs, and managing Kanban/Scrum boards',
          'Conducting test execution cycles and generating test execution summary reports'
        ]
      },
      {
        title: 'Module 4: Web Application Testing Specializations',
        subtitle: 'Cross-browser, UI, usability, and security verification',
        topics: [
          'Cross-browser and cross-platform compatibility testing',
          'Form validation, error messaging, and input boundary validation',
          'Usability and accessibility testing (WCAG compliance principles)',
          'Regression testing strategies and smoke/sanity testing checklists'
        ]
      },
      {
        title: 'Module 5: Backend REST API Testing with Postman',
        subtitle: 'Verifying data integrity and business logic before the UI',
        topics: [
          'Understanding Client-Server architecture, HTTP request headers, query and path parameters',
          'Testing REST endpoints with GET, POST, PUT, and DELETE methods',
          'Interpreting HTTP response status codes: 2xx (Success), 4xx (Client errors), 5xx (Server errors)',
          'Writing automated assertions in Postman using JavaScript tests for response validation'
        ]
      }
    ],
    careerRoles: ['Manual QA Tester', 'Software Test Engineer', 'QA Analyst', 'Junior Test Engineer', 'API Testing Associate'],
    avgSalary: '₹3.8 LPA - ₹8.0 LPA',
    topHiringCompanies: ['TCS', 'Infosys', 'Cognizant', 'Tech Mahindra', 'Wipro', 'Accenture', 'Zoho']
  },

  {
    id: 'astqb-mobile',
    title: 'ASTQB Certified Mobile Application Tester',
    category: 'Testing & QA',
    level: 'Professional',
    image: sdetExpertImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'American Software Testing Qualifications Board (ASTQB)',
    examCode: 'ASTQB Mobile Tester Certification',
    badge: 'Mobile Specialist',
    rating: '4.8',
    reviewsCount: '1,920+ Certified',
    tagline: 'Master mobile application testing across iOS and Android platforms, network simulation, and Appium automation.',
    overview:
      'With mobile devices accounting for over 60% of digital traffic, mobile testing expertise is a distinct, high-value specialty. This curriculum covers native, hybrid, and mobile web application testing, mobile device hardware constraints (battery, memory, sensors), network bandwidth throttling, and automated testing with Appium.',
    highlights: [
      'Aligined with official ASTQB Mobile Application Testing curriculum',
      'Real device lab testing across diverse Android and iOS hardware configurations',
      'Handling interruptions: Incoming phone calls, SMS, push notifications, low battery',
      'Automated mobile functional testing using Appium and UI Automator'
    ],
    prerequisites: 'Basic understanding of software testing concepts. Prior ISTQB CTFL certification is helpful but not required.',
    targetAudience: ['QA Testers seeking mobile specialization', 'Mobile App Developers', 'Automation Engineers adding Appium skills'],
    keySkills: ['iOS & Android OS Architecture', 'Mobile Usability', 'Network Throttling', 'Interruption Testing', 'Appium Mobile Automation', 'Device Farm Testing'],
    toolsAndTech: ['Appium', 'Android Studio / ADB', 'Xcode Simulator', 'BrowserStack / SauceLabs', 'Postman'],
    curriculumModules: [
      {
        title: 'Module 1: Mobile Platform Architecture & Testing Challenges',
        subtitle: 'Understanding the mobile ecosystem across iOS and Android',
        topics: [
          'Native vs Hybrid vs Mobile Web applications: architectural differences',
          'Android SDK, APK package structure vs Apple iOS IPA sandboxing',
          'Mobile hardware fragmentation: Screen resolutions, aspect ratios, CPU/GPU limits',
          'Device orientation, touch gestures (pinch, swipe, tap), and sensor integration testing'
        ]
      },
      {
        title: 'Module 2: Mobile Functional & Environmental Testing',
        subtitle: 'Testing under unstable real-world conditions',
        topics: [
          'Interruption testing: Incoming voice calls, SMS, push notifications, alarms, and battery states',
          'Network variability testing: 5G, 4G, 3G, Wi-Fi transitions, airplane mode, and offline caching',
          'Installation, upgrade, downgrade, uninstallation, and permission permission grant testing',
          'Localization and internationalization testing across timezones, languages, and currencies'
        ]
      },
      {
        title: 'Module 3: Non-Functional Mobile Testing: Performance & Security',
        subtitle: 'Validating device health, battery drain, and data security',
        topics: [
          'Battery consumption analysis and CPU/RAM profiling using Android Profiler and Instruments',
          'App launch time optimization (cold start vs warm start)',
          'Mobile data privacy, encrypted local storage (SQLite, Keychain, SharedPreferences)',
          'Verifying SSL certificate pinning and secure API token transmission'
        ]
      },
      {
        title: 'Module 4: Mobile Automation with Appium & UI Automator',
        subtitle: 'Automated test execution across mobile devices',
        topics: [
          'Appium server architecture and client-server communication',
          'Setting DesiredCapabilities for Android and iOS device sessions',
          'Locating mobile elements using Appium Inspector, Accessibility ID, and XPath',
          'Automating touch actions, scrolling, swiping, and mobile gestures with W3C Actions API'
        ]
      },
      {
        title: 'Module 5: Cloud Device Farms & ASTQB Exam Blueprint',
        subtitle: 'Running tests on hundreds of devices in the cloud and exam drills',
        topics: [
          'Parallel execution on cloud device farms (BrowserStack and Sauce Labs)',
          'Mobile crash reporting integration with Firebase Crashlytics',
          'ASTQB Mobile Tester sample exams, question reviews, and pass strategies'
        ]
      }
    ],
    careerRoles: ['Mobile QA Specialist', 'Appium Automation Engineer', 'Mobile Test Lead', 'Quality Assurance Engineer (Mobile)'],
    avgSalary: '₹5.0 LPA - ₹13.5 LPA',
    topHiringCompanies: ['Swiggy', 'Zomato', 'Paytm', 'PhonePe', 'Accenture', 'Cognizant', 'Flipkart']
  },

  {
    id: 'performance-tuning',
    title: 'Software Performance Testing & Tuning (JMeter / LoadRunner)',
    category: 'Testing & QA',
    level: 'Expert',
    image: sdetExpertImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'Greens Performance Engineering Guild',
    examCode: 'Certified Performance Engineering Specialist',
    badge: 'High Value Niche',
    rating: '4.8',
    reviewsCount: '2,300+ Certified',
    tagline: 'Master load testing, stress simulation, bottleneck identification, and server tuning with Apache JMeter and LoadRunner.',
    overview:
      'High traffic events like festival sales or financial market openings crash unoptimized applications. This advanced curriculum teaches you how to design realistic user load profiles, simulate tens of thousands of concurrent virtual users, identify database and server-side bottlenecks, and optimize response latencies.',
    highlights: [
      'Simulating realistic multi-tier concurrent user load with Apache JMeter 5.x',
      'Parameterization, correlation, and regular expression extractors for dynamic session tokens',
      'Distributed load testing using master-slave JMeter cloud architectures',
      'Server-side bottleneck analysis: CPU spikes, memory leaks, thread dumps, and slow DB queries'
    ],
    prerequisites: 'Basic knowledge of web protocols (HTTP/HTTPS) and general software testing fundamentals.',
    targetAudience: ['Performance Test Engineers', 'QA Automation Engineers moving into Performance', 'Backend Engineers optimizing systems', 'DevOps Engineers monitoring load'],
    keySkills: ['Apache JMeter', 'Micro Focus LoadRunner', 'Correlation & Parameterization', 'Thread Groups & Timers', 'Bottleneck Root-Cause Analysis', 'Server Resource Profiling'],
    toolsAndTech: ['Apache JMeter', 'LoadRunner', 'BlazeMeter', 'Grafana & InfluxDB', 'JConsole / VisualVM'],
    curriculumModules: [
      {
        title: 'Module 1: Performance Testing Principles & Workload Modeling',
        subtitle: 'Understanding non-functional requirements and user concurrency',
        topics: [
          'Performance metrics: Response Time, Throughput (TPS), Latency, Concurrency, and Error Rate',
          'Testing types: Load testing, Stress testing, Endurance/Soak testing, Spike testing, and Volume testing',
          'Non-Functional Requirement (NFR) gathering and SLA definition with stakeholders',
          'Designing Workload Models based on production analytics and peak user forecasts'
        ]
      },
      {
        title: 'Module 2: Apache JMeter Architecture & Test Scripting',
        subtitle: 'Building reliable test scripts simulating real user flows',
        topics: [
          'JMeter GUI vs Non-GUI execution modes and architecture',
          'Thread Groups: Virtual user count, ramp-up time, and loop iterations',
          'Samplers: HTTP Request, Java Request, and JDBC Request configurations',
          'Logic Controllers: Loop, If, Switch, Once Only, and Transaction Controllers'
        ]
      },
      {
        title: 'Module 3: Correlation, Parameterization & Dynamic Data Handling',
        subtitle: 'Managing unique session tokens, CSRF tokens, and credentials',
        topics: [
          'Handling dynamic tokens using Regular Expression Extractor and JSON Extractor',
          'Parameterizing test data with CSV Data Set Config for credential feeding',
          'Assertions: Response Assertion, JSON Assertion, Duration Assertion, and Size Assertion',
          'Pacing and think-time simulation with Constant Timers and Gaussian Random Timers'
        ]
      },
      {
        title: 'Module 4: Distributed Cloud Load Testing & Monitoring',
        subtitle: 'Generating massive load across multiple worker nodes',
        topics: [
          'Setting up JMeter Master-Slave distributed load generators over network',
          'Integrating JMeter with InfluxDB and Grafana for live real-time metrics dashboards',
          'Generating comprehensive HTML dashboard reports with latency percentiles (90th, 95th, 99th)',
          'Profiling server-side resources using PerfMon metrics collector'
        ]
      },
      {
        title: 'Module 5: Server Bottleneck Diagnostics & LoadRunner Overview',
        subtitle: 'Root-cause analysis and enterprise LoadRunner toolset',
        topics: [
          'Identifying memory leaks, garbage collection pauses, and thread contention',
          'Database query optimization and connection pool exhaustion diagnostics',
          'Micro Focus LoadRunner components: VuGen, Controller, and Analysis',
          'Delivering actionable performance engineering recommendations to development teams'
        ]
      }
    ],
    careerRoles: ['Performance Test Engineer', 'Performance Testing Specialist', 'Non-Functional QA Lead', 'Performance Engineering Consultant'],
    avgSalary: '₹6.5 LPA - ₹16.0 LPA',
    topHiringCompanies: ['Walmart Global Tech', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Fidelity Investments']
  },

  // =========================================================================
  // 3. PROJECT MANAGEMENT & AGILE
  // =========================================================================
  {
    id: 'scrum-master',
    title: 'Scrum Master Certification (CSM / PSM)',
    category: 'Management & Agile',
    level: 'Professional',
    image: certMgmtAgileImg,
    duration: '35 Hrs (Weekday / Weekend)',
    provider: 'Scrum Alliance / Scrum.org Aligned',
    examCode: 'PSM I (Professional Scrum Master) / CSM',
    badge: 'Leadership Track',
    rating: '4.9',
    reviewsCount: '3,700+ Certified',
    tagline: 'Facilitate high-velocity Agile teams, eliminate sprint impediments, and master servant leadership.',
    overview:
      'Agile Scrum is the standard operational framework across modern technology enterprises. This certification track prepares you for the globally acclaimed PSM I and CSM credentials, teaching the Scrum Guide principles, facilitation of sprint events (Planning, Daily Standup, Review, Retrospective), backlog refinement, and scaling Agile across multiple squads.',
    highlights: [
      'Aligined with official Scrum Guide standards by Ken Schwaber & Jeff Sutherland',
      'Realistic Agile sprint simulation labs using Jira Software and Confluence',
      'Techniques for coaching cross-functional product teams and stakeholders',
      'Over 300+ PSM I scenario-based practice questions with 100% pass guarantee'
    ],
    prerequisites: 'No technical or coding background required. Open to all professionals aspiring to lead Agile teams.',
    targetAudience: ['Aspiring Scrum Masters & Agile Coaches', 'Project Managers transitioning from Waterfall', 'Tech Leads & Senior Developers', 'QA Leads & Product Owners'],
    keySkills: ['Scrum Framework', 'Sprint Facilitation', 'Servant Leadership', 'Impediment Removal', 'Burn-Down / Burn-Up Charts', 'Jira Agile Boards'],
    toolsAndTech: ['Jira Software', 'Miro / Mural', 'Confluence', 'Slack / MS Teams', 'Planning Poker Tools'],
    curriculumModules: [
      {
        title: 'Module 1: Agile Manifesto Values & Scrum Foundations',
        subtitle: 'The philosophical and cultural shift from predictive to adaptive delivery',
        topics: [
          'The 4 values and 12 principles of the Agile Manifesto',
          'Waterfall vs Agile delivery: Managing uncertainty and frequent customer feedback',
          'Scrum theory: Empirical process control (Transparency, Inspection, Adaptation)',
          'The 5 Scrum values: Commitment, Focus, Openness, Respect, and Courage'
        ]
      },
      {
        title: 'Module 2: Scrum Accountabilities (Roles) Deep-Dive',
        subtitle: 'Mastering the triad of Product Owner, Developers, and Scrum Master',
        topics: [
          'The Scrum Master: Servant-leader, facilitator, coach, and barrier-remover',
          'The Product Owner: Value maximization, product backlog ownership, stakeholder alignment',
          'Developers: Cross-functional, self-managing, technical excellence',
          'Resolving role conflicts and navigating authority boundaries without command-and-control'
        ]
      },
      {
        title: 'Module 3: Scrum Events & Collaborative Ceremonies',
        subtitle: 'Structuring high-engagement team meetings that drive momentum',
        topics: [
          'The Sprint: The heartbeat of Scrum and establishing sprint timeboxes',
          'Sprint Planning: Crafting compelling Sprint Goals and defining commitments',
          'Daily Scrum: 15-minute synchronization and early roadblock identification',
          'Sprint Review: Inspecting increments with stakeholders; Sprint Retrospective: Continuous improvement'
        ]
      },
      {
        title: 'Module 4: Scrum Artifacts & Commitments',
        subtitle: 'Maintaining absolute transparency in delivery progress',
        topics: [
          'Product Backlog and the Product Goal commitment',
          'Sprint Backlog and the Sprint Goal commitment',
          'Increment and the Definition of Done (DoD) commitment',
          'Backlog Refinement: User story slicing (INVEST criteria), acceptance criteria, and estimation'
        ]
      },
      {
        title: 'Module 5: Agile Metrics, Impediment Coaching & PSM Exam Drills',
        subtitle: 'Measuring team health, handling dysfunction, and exam pass preparation',
        topics: [
          'Agile velocity, sprint burndown charts, release burnup charts, and cumulative flow diagrams',
          'Techniques for handling difficult team dynamics and stakeholder interference',
          'PSM I practice drills: analyzing tricky situational questions and timing optimization'
        ]
      }
    ],
    careerRoles: ['Scrum Master', 'Agile Coach', 'Agile Project Manager', 'Delivery Manager', 'Sprint Facilitator'],
    avgSalary: '₹8.0 LPA - ₹18.5 LPA',
    topHiringCompanies: ['Accenture', 'TCS', 'Cognizant', 'Deloitte', 'Standard Chartered', 'SAP', 'Barclays']
  },

  {
    id: 'pmp',
    title: 'PMP® Project Management Professional Certification',
    category: 'Management & Agile',
    level: 'Expert',
    image: certMgmtAgileImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Project Management Institute (PMI) USA',
    examCode: 'PMP® Certification Exam (PMBOK 7th Edition Aligned)',
    badge: 'Premier Global Credential',
    rating: '4.9',
    reviewsCount: '4,100+ Certified',
    tagline: 'The world’s gold standard for senior project managers, covering Predictive, Agile, and Hybrid delivery models.',
    overview:
      'The PMP® credential from the Project Management Institute is universally respected across global industries. This comprehensive training program satisfies the mandatory 35 Contact Hours / PDUs, rigorously preparing you across the three core domains: People (42%), Process (50%), and Business Environment (8%), aligning with the PMBOK® Guide 7th Edition and Agile Practice Guide.',
    highlights: [
      'Provides the mandatory 35 Contact Hours / PDUs certificate required by PMI',
      'Mastering Predictive (Waterfall), Agile, and Hybrid project methodologies',
      'Application assistance: Profile review and audit defense guidance by certified PMPs',
      'Access to 1,500+ realistic PMP exam simulator questions with situational analysis'
    ],
    prerequisites: 'Secondary degree with 5 years project management experience OR four-year bachelor’s degree with 3 years project experience.',
    targetAudience: ['Senior Project Managers', 'Program Managers & Delivery Leads', 'Associate PMs ready for global credentialing', 'Engineering Managers'],
    keySkills: ['PMBOK 7th Edition', 'Earned Value Management (EVM)', 'Risk Management', 'Stakeholder Engagement', 'Agile & Hybrid PM', 'Procurement & Contracting'],
    toolsAndTech: ['Microsoft Project', 'Jira Software', 'Smartsheet', 'PMBOK Guide 7th Ed', 'Agile Practice Guide'],
    curriculumModules: [
      {
        title: 'Module 1: Domain 1 - People (Managing High-Performing Teams)',
        subtitle: 'Leadership styles, team building, conflict resolution, and empowerment',
        topics: [
          'Building and leading diverse, cross-functional, and remote project teams',
          'Managing conflict using Thomas-Kilmann conflict resolution modes',
          'Empowering team members and delegating authority with accountability',
          'Negotiating project agreements and mentoring team members for career growth'
        ]
      },
      {
        title: 'Module 2: Domain 2 - Process: Scope, Schedule & Cost Planning',
        subtitle: 'Core operational execution across predictive and hybrid project models',
        topics: [
          'Work Breakdown Structure (WBS) creation and scope baseline verification',
          'Schedule management: Critical Path Method (CPM), fast-tracking, and crashing',
          'Cost management: Earned Value Management (EVM metrics: CPI, SPI, EAC, VAC)',
          'Change management processes and Change Control Board (CCB) governance'
        ]
      },
      {
        title: 'Module 3: Domain 2 - Process: Risk, Quality & Procurement Management',
        subtitle: 'Proactive mitigation of project threats and vendor management',
        topics: [
          'Risk identification, qualitative and quantitative risk analysis, risk response strategies',
          'Quality planning, assurance, and continuous improvement (Kaizen, Six Sigma basics)',
          'Procurement planning: Contract types (Fixed-Price, Cost-Reimbursable, T&M)',
          'Managing project knowledge transfer and artifact repositories'
        ]
      },
      {
        title: 'Module 4: Domain 3 - Business Environment & Organizational Strategy',
        subtitle: 'Aligning project initiatives with enterprise strategy and compliance',
        topics: [
          'Project governance structures and strategic business case alignment',
          'Managing project compliance (legal, regulatory, security, data protection)',
          'Evaluating and delivering project value, benefits realization, and organizational change',
          'External environmental influences (PESTLE analysis) on project success'
        ]
      },
      {
        title: 'Module 5: PMP Application Coaching & Full-Length Exam Drills',
        subtitle: 'Passing the 180-question exam on your first attempt',
        topics: [
          'Step-by-step guidance on writing PMI-compliant project experience descriptions',
          'Navigating situational questions: Recognizing the PM mindset required by PMI',
          'Simulated 4-hour mock exams with detailed metric breakdown of your strengths and weak areas'
        ]
      }
    ],
    careerRoles: ['Project Manager', 'Senior Project Manager', 'Technical Delivery Manager', 'Program Manager', 'PMO Lead'],
    avgSalary: '₹12.0 LPA - ₹28.0 LPA',
    topHiringCompanies: ['Deloitte', 'PwC', 'KPMG', 'EY', 'Cisco', 'Amazon', 'Larsen & Toubro', 'Cognizant']
  },

  {
    id: 'capm',
    title: 'CAPM® Certified Associate in Project Management',
    category: 'Management & Agile',
    level: 'Associate',
    image: certMgmtAgileImg,
    duration: '35 Hrs (Weekday / Weekend)',
    provider: 'Project Management Institute (PMI) USA',
    examCode: 'CAPM® Certification Exam',
    rating: '4.8',
    reviewsCount: '1,750+ Certified',
    tagline: 'Launch your project management career with the premier foundational credential from PMI.',
    overview:
      'The CAPM® certification is tailored for aspiring project managers, fresh graduates, and junior team members who wish to demonstrate foundational knowledge of project management terminology, predictive lifecycles, Agile frameworks, and business analysis principles according to PMI standards.',
    highlights: [
      'Satisfies the mandatory 23 hours of project management education required by PMI',
      'No extensive project management experience needed to sit for the exam',
      'Comprehensive coverage of project lifecycles, governance, and predictive models',
      'Includes 500+ CAPM practice questions with full answer rationales'
    ],
    prerequisites: 'Secondary diploma (high school diploma or equivalent). No prior project management experience required.',
    targetAudience: ['College Graduates entering management careers', 'Junior Project Coordinators', 'Technical team members taking on PM duties', 'Career Changers'],
    keySkills: ['PM Fundamentals', 'Predictive Project Lifecycles', 'Agile Principles', 'Business Analysis Frameworks', 'Communication Planning'],
    toolsAndTech: ['MS Project', 'Trello', 'Jira', 'PMBOK Guide'],
    curriculumModules: [
      {
        title: 'Module 1: Project Management Fundamentals & Core Concepts',
        subtitle: 'Projects vs Operations, organizational structures, and governance',
        topics: [
          'Defining projects, programs, portfolios, and organizational strategies',
          'Project lifecycles: Predictive, iterative, incremental, and adaptive models',
          'Project manager competencies, ethics, and professional conduct',
          'Project integration management and project charter formulation'
        ]
      },
      {
        title: 'Module 2: Predictive Project Delivery Management',
        subtitle: 'Managing traditional scope, schedules, costs, and quality',
        topics: [
          'Developing project management plans and work breakdown structures',
          'Sequencing activities, estimating durations, and critical path analysis',
          'Cost budgeting, baseline establishment, and cost variance tracking',
          'Quality control measures and stakeholder communication strategies'
        ]
      },
      {
        title: 'Module 3: Adaptive & Agile Frameworks for CAPM',
        subtitle: 'Modern agile methods covered in the updated CAPM blueprint',
        topics: [
          'Agile mindset, values, and principles from the Agile Practice Guide',
          'Scrum framework components: Roles, artifacts, and ceremonies',
          'Extreme Programming (XP) practices and Kanban board workflow visualization',
          'Choosing between predictive and adaptive methodologies for specific project types'
        ]
      },
      {
        title: 'Module 4: Business Analysis Principles for Project Associates',
        subtitle: 'Needs assessment, requirement gathering, and stakeholder management',
        topics: [
          'The role of the Business Analyst in project inception',
          'Eliciting business, user, and functional requirements',
          'Requirements traceability and change impact assessment',
          'Validating solution outcomes against original business expectations'
        ]
      },
      {
        title: 'Module 5: CAPM Exam Preparation & Simulation Drills',
        subtitle: 'Strategies for mastering the 150-question examination',
        topics: [
          'Exam question breakdown: Multiple-choice, multiple-response, drag-and-drop, animations',
          'Time management strategies for the 180-minute test window',
          'Full-length simulated exams and application submission coaching'
        ]
      }
    ],
    careerRoles: ['Associate Project Manager', 'Project Coordinator', 'Junior PMO Analyst', 'Operations Associate', 'Project Assistant'],
    avgSalary: '₹4.5 LPA - ₹9.0 LPA',
    topHiringCompanies: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM', 'Tech Mahindra']
  },

  {
    id: 'itil',
    title: 'ITIL® 4 Foundation IT Service Management',
    category: 'Management & Agile',
    level: 'Associate',
    image: certMgmtAgileImg,
    duration: '30 Hrs (Weekday / Weekend)',
    provider: 'PeopleCert / AXELOS Accredited',
    examCode: 'ITIL® 4 Foundation in IT Service Management',
    badge: 'Enterprise Service Standard',
    rating: '4.8',
    reviewsCount: '2,600+ Certified',
    tagline: 'Master the Service Value System (SVS), guiding principles, and modern IT service management practices.',
    overview:
      'ITIL® 4 is the universal framework for managing IT services across corporate enterprises. It connects traditional service desk management with modern DevOps, Cloud, and Agile operating models. This course teaches the ITIL Service Value System, Four Dimensions of Service Management, 7 Guiding Principles, and 34 ITIL management practices.',
    highlights: [
      'Aligined with official AXELOS ITIL 4 Foundation syllabus',
      'Real-world incident, problem, and change enablement case studies',
      'Integration of ITIL with Agile, DevOps, and Digital Transformation initiatives',
      'Practice question bank with 100% exam pass track record'
    ],
    prerequisites: 'No technical or certification prerequisites. Open to anyone working in or aspiring to enter IT operations.',
    targetAudience: ['IT Service Desk & Support Engineers', 'System Administrators', 'Service Delivery Managers', 'IT Operations Leads'],
    keySkills: ['ITIL 4 SVS', '7 Guiding Principles', 'Incident Management', 'Change Enablement', 'Problem Management', 'Service Level Management'],
    toolsAndTech: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'ITIL 4 Framework'],
    curriculumModules: [
      {
        title: 'Module 1: Key Concepts of IT Service Management',
        subtitle: 'Value co-creation, stakeholders, products, and services',
        topics: [
          'The nature of value co-creation between service providers and service consumers',
          'Service relationships: Service provision, service consumption, and service management',
          'Outcomes, costs, and risks associated with IT service delivery',
          'Service offerings, goods, access to resources, and service actions'
        ]
      },
      {
        title: 'Module 2: The Four Dimensions of Service Management',
        subtitle: 'Holistic approach to delivering sustainable enterprise value',
        topics: [
          'Organizations and People: Culture, skills, and communication networks',
          'Information and Technology: Workflow automation, AI, and information security',
          'Partners and Suppliers: Vendor contracts and supply chain integration',
          'Value Streams and Processes: End-to-end journey mapping from customer demand to value'
        ]
      },
      {
        title: 'Module 3: The ITIL Service Value System (SVS) & 7 Guiding Principles',
        subtitle: 'Guiding enterprise decision making across all circumstances',
        topics: [
          'The ITIL Service Value System architecture overview',
          'The 7 Guiding Principles: Focus on value, Start where you are, Progress iteratively with feedback',
          'Collaborate and promote visibility, Think and work holistically, Keep it simple and practical, Optimize and automate',
          'The Service Value Chain: Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support'
        ]
      },
      {
        title: 'Module 4: Core ITIL Management Practices Deep-Dive',
        subtitle: 'The 15 essential practices tested in the Foundation exam',
        topics: [
          'Incident Management vs Problem Management: Resolving outages vs eliminating root causes',
          'Change Enablement: Assessing risk and scheduling emergency vs standard changes',
          'Service Desk: Single point of contact, omni-channel support, and ticket routing',
          'Service Level Management (SLAs, OLAs, UCs) and Continual Improvement register'
        ]
      },
      {
        title: 'Module 5: ITIL 4 Foundation Exam Simulation & Case Studies',
        subtitle: 'Mastering the 40-question certification test format',
        topics: [
          'Exam format: 40 multiple-choice questions, 65% pass mark (26/40)',
          'Analyzing scenario-based questions and common distractors',
          'Two full-length mock exams with mentor-led answer reviews'
        ]
      }
    ],
    careerRoles: ['IT Service Manager', 'Service Desk Analyst', 'ITIL Process Consultant', 'Change Manager', 'Incident Coordinator'],
    avgSalary: '₹5.0 LPA - ₹12.5 LPA',
    topHiringCompanies: ['Cognizant', 'Accenture', 'TCS', 'HCLTech', 'Infosys', 'Capgemini', 'DXC Technology']
  },

  {
    id: 'cbap',
    title: 'CBAP® Certified Business Analysis Professional',
    category: 'Management & Agile',
    level: 'Expert',
    image: certMgmtAgileImg,
    duration: '55 Hrs (Weekday / Weekend)',
    provider: 'International Institute of Business Analysis (IIBA®)',
    examCode: 'CBAP® Level 3 (BABOK® Guide v3 Aligned)',
    badge: 'Senior BA Benchmark',
    rating: '4.9',
    reviewsCount: '1,420+ Certified',
    tagline: 'The premier global credential for senior business analysts, enterprise architects, and solution consultants.',
    overview:
      'The CBAP® certification from IIBA® is recognized worldwide as the highest tier credential for practicing business analysts with extensive industry experience. This course aligns with the Business Analysis Body of Knowledge (BABOK® Guide v3), covering all 6 Knowledge Areas, underlying competencies, techniques, and perspectives (Agile, BI, IT, BPM).',
    highlights: [
      'Satisfies the mandatory 35 Professional Development (PD) Hours required by IIBA®',
      'Mastering all 6 BABOK® v3 Knowledge Areas with enterprise case studies',
      'Hands-on practice with process modeling, use case diagrams, and stakeholder matrices',
      'Extensive scenario-based case study questions mimicking the actual 120-question exam'
    ],
    prerequisites: 'Minimum 7,500 hours of business analysis work experience in the last 10 years, including experience in at least 4 of the 6 BABOK knowledge areas.',
    targetAudience: ['Senior Business Analysts', 'Enterprise Architects', 'Product Managers', 'Consultants leading digital transformation'],
    keySkills: ['BABOK® v3 Knowledge Areas', 'Requirements Elicitation', 'Traceability & Governance', 'Solution Evaluation', 'Process Modeling (BPMN)', 'Strategy Analysis'],
    toolsAndTech: ['MS Visio', 'Enterprise Architect', 'Jira Software', 'Lucidchart', 'Confluence'],
    curriculumModules: [
      {
        title: 'Module 1: Business Analysis Planning & Monitoring',
        subtitle: 'Organizing the BA effort and establishing governance protocols',
        topics: [
          'Selecting a business analysis approach: Predictive vs Adaptive',
          'Conducting stakeholder analysis: RACI matrix, stakeholder power/interest grids',
          'Planning business analysis governance: Decision making, approvals, and change control',
          'Planning business analysis information management and metrics'
        ]
      },
      {
        title: 'Module 2: Strategy Analysis & Solution Scoping',
        subtitle: 'Identifying business needs, assessing gaps, and defining the target state',
        topics: [
          'Analyzing current enterprise state: Business architecture, pain points, capabilities',
          'Defining desired future state: Business objectives, value metrics, outcome boundaries',
          'Assessing risks and feasibility: Technical, operational, and financial feasibility',
          'Defining change strategy: Transition states, trade-off analysis, and business cases'
        ]
      },
      {
        title: 'Module 3: Requirements Elicitation, Collaboration & Life Cycle Management',
        subtitle: 'Extracting deep business truths and managing changes over time',
        topics: [
          'Elicitation techniques: Brainstorming, interviews, focus groups, observation, prototyping',
          'Confirming elicitation results and communicating business analysis information',
          'Tracing requirements from business goals down to test scenarios',
          'Prioritizing requirements: MoSCoW, Kano analysis, timeboxing, and voting'
        ]
      },
      {
        title: 'Module 4: Requirements Analysis & Design Definition (RADD)',
        subtitle: 'Transforming raw findings into structured specifications',
        topics: [
          'Specifying and modeling requirements: Process models (BPMN), use case diagrams, user stories',
          'Verifying and validating requirements against quality characteristics',
          'Defining requirements architecture and identifying design options',
          'Analyzing potential value and recommending the optimal solution approach'
        ]
      },
      {
        title: 'Module 5: Solution Evaluation & CBAP Exam Case Studies',
        subtitle: 'Measuring post-implementation ROI and mastering the exam format',
        topics: [
          'Measuring solution performance metrics and analyzing qualitative feedback',
          'Analyzing enterprise limitations and recommending actions to increase solution value',
          'Tackling CBAP case-study questions (1-2 pages of background scenario text per question set)',
          'Complete IIBA application review and mentorship'
        ]
      }
    ],
    careerRoles: ['Lead Business Analyst', 'Principal BA Consultant', 'Enterprise Business Architect', 'Product Strategy Lead', 'Business Systems Consultant'],
    avgSalary: '₹14.0 LPA - ₹30.0 LPA',
    topHiringCompanies: ['McKinsey & Co', 'Accenture Strategy', 'Deloitte', 'Standard Chartered', 'Cognizant', 'Infosys']
  },

  {
    id: 'ccba',
    title: 'CCBA® Certification of Capability in Business Analysis',
    category: 'Management & Agile',
    level: 'Professional',
    image: certMgmtAgileImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'International Institute of Business Analysis (IIBA®)',
    examCode: 'CCBA® Level 2 (BABOK® Guide v3 Aligned)',
    rating: '4.8',
    reviewsCount: '1,280+ Certified',
    tagline: 'Validate your proven business analysis capabilities with IIBA’s Level 2 professional certification.',
    overview:
      'The CCBA® certification is tailored for business analysts with 2 to 3 years of hands-on experience who want to certify their capability to lead requirements work independently. Aligned with BABOK® v3, this course reinforces foundational and intermediate techniques for requirements engineering, stakeholder facilitation, and solution definition.',
    highlights: [
      'Satisfies the mandatory 21 Professional Development (PD) Hours for IIBA®',
      'Designed specifically for mid-level BAs taking on broader project responsibilities',
      'Hands-on BPMN workflow mapping and user story splitting workshops',
      'Realistic 130-question scenario-based mock exams with personalized coaching'
    ],
    prerequisites: 'Minimum 3,750 hours of business analysis work experience within the last 7 years.',
    targetAudience: ['Mid-level Business Analysts (2-5 years experience)', 'Systems Analysts', 'Product Owners', 'Consultants'],
    keySkills: ['BABOK v3 Framework', 'BPMN Process Modeling', 'Elicitation Workshops', 'Requirements Prioritization', 'Functional Decomposition'],
    toolsAndTech: ['Visio', 'Jira', 'Lucidchart', 'Confluence', 'Miro'],
    curriculumModules: [
      {
        title: 'Module 1: Professional Business Analysis Foundation & BABOK v3',
        subtitle: 'Standardized terminology and the Business Analysis Core Concept Model (BACCM)',
        topics: [
          'The 6 core concepts: Change, Need, Solution, Stakeholder, Value, Context',
          'Business analysis tasks, guidelines, tools, and techniques overview',
          'Stakeholder identification and role responsibility mapping'
        ]
      },
      {
        title: 'Module 2: Planning the Business Analysis Effort',
        subtitle: 'Structuring deliverables and managing engagement',
        topics: [
          'Defining stakeholder communication channels and frequency',
          'Planning requirement reviews, approval workflows, and sign-offs',
          'Identifying project assumptions, constraints, and dependencies'
        ]
      },
      {
        title: 'Module 3: Elicitation & Collaboration Workshops',
        subtitle: 'Extracting requirements from diverse business departments',
        topics: [
          'Conducting collaborative JAD (Joint Application Development) workshops',
          'Document analysis, interface analysis, and reverse-engineering legacy systems',
          'Managing conflicting stakeholder priorities with data-driven trade-offs'
        ]
      },
      {
        title: 'Module 4: Requirements Modeling & Quality Verification',
        subtitle: 'Drafting crystal clear functional and non-functional specifications',
        topics: [
          'Business Process Model and Notation (BPMN 2.0) swimlane diagrams',
          'Data flow diagrams (DFD), entity relationship diagrams (ERD) from a BA perspective',
          'Writing unambiguous user stories with Given-When-Then acceptance criteria',
          'Validating requirements for completeness, consistency, and testability'
        ]
      },
      {
        title: 'Module 5: CCBA Scenario-Based Exam Simulation',
        subtitle: 'Strategies for passing the 130 scenario-based questions',
        topics: [
          'Analyzing medium-length scenario questions and recognizing key BABOK techniques',
          'Time management: Pacing across the 3-hour examination window',
          'Application documentation coaching and full mock tests'
        ]
      }
    ],
    careerRoles: ['Senior Business Analyst', 'Business Systems Analyst', 'Agile Business Analyst', 'Functional Consultant'],
    avgSalary: '₹8.0 LPA - ₹17.0 LPA',
    topHiringCompanies: ['Cognizant', 'Capgemini', 'Wipro', 'TCS', 'HCLTech', 'Tech Mahindra']
  },

  {
    id: 'togaf',
    title: 'TOGAF® Enterprise Architecture Certification',
    category: 'Management & Agile',
    level: 'Expert',
    image: certMgmtAgileImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'The Open Group',
    examCode: 'TOGAF® Standard (Part 1 Foundation & Part 2 Certified)',
    badge: 'Enterprise Architecture Elite',
    rating: '4.9',
    reviewsCount: '1,560+ Certified',
    tagline: 'Architect enterprise-wide IT landscapes, governance frameworks, and digital transformation roadmaps.',
    overview:
      'TOGAF® is the globally dominant framework for enterprise architecture used by over 80% of Fortune 50 companies. This certification course covers the Architecture Development Method (ADM) cycle, Architecture Content Framework, Enterprise Continuum, and Architecture Governance, enabling you to align business vision with IT systems.',
    highlights: [
      'Comprehensive preparation for combined TOGAF Foundation and Certified exams',
      'Hands-on enterprise architecture artifacts: Vision, Business, Data, Application, Tech architectures',
      'Transition planning from legacy monolithic systems to modern composable cloud architectures',
      'In-depth scenario case studies based on actual Fortune 500 transformations'
    ],
    prerequisites: 'Prior experience in software architecture, enterprise systems, or senior technology management.',
    targetAudience: ['Enterprise Architects', 'Solution Architects', 'Chief Information Officers / CTOs', 'Senior Technical Consultants'],
    keySkills: ['TOGAF ADM Cycle', 'Business Architecture', 'Data & Application Architecture', 'Technology Architecture', 'Architecture Governance', 'Migration Planning'],
    toolsAndTech: ['Archi / Sparx EA', 'TOGAF ADM', 'BPMN', 'UML', 'Archimate'],
    curriculumModules: [
      {
        title: 'Module 1: TOGAF Framework Core Concepts & Architecture Governance',
        subtitle: 'Understanding enterprise architecture value and organization',
        topics: [
          'What is an enterprise architecture and why is TOGAF the global standard?',
          'Architecture Board, Architecture Principles, Compliance reviews, and Governance',
          'Architecture Capability Framework and organizational maturity models'
        ]
      },
      {
        title: 'Module 2: The Architecture Development Method (ADM) Cycle - Part 1',
        subtitle: 'Preliminary phase through Business Architecture design',
        topics: [
          'Preliminary Phase: Defining enterprise context, scoping, and customizing the ADM',
          'Phase A: Architecture Vision, statement of architecture work, stakeholder engagement',
          'Phase B: Business Architecture: Business strategy, processes, organizational structure'
        ]
      },
      {
        title: 'Module 3: The Architecture Development Method (ADM) Cycle - Part 2',
        subtitle: 'Information systems and technology infrastructure architecture',
        topics: [
          'Phase C: Information Systems Architectures - Data Architecture & Application Architecture',
          'Phase D: Technology Architecture: Hardware, cloud networks, operating platforms',
          'Architecture Building Blocks (ABBs) vs Solution Building Blocks (SBBs)'
        ]
      },
      {
        title: 'Module 4: Opportunities, Solutions & Migration Planning',
        subtitle: 'Transition architectures and roadmap realization',
        topics: [
          'Phase E: Opportunities and Solutions: Identifying candidate transformation projects',
          'Phase F: Migration Planning: Cost/benefit analysis, risk assessment, and implementation roadmaps',
          'Phase G: Implementation Governance and Phase H: Architecture Change Management'
        ]
      },
      {
        title: 'Module 5: Architecture Content Framework & TOGAF Exam Drills',
        subtitle: 'Mastering Part 1 (Knowledge) and Part 2 (Complex Scenarios)',
        topics: [
          'Architecture Content Framework: Deliverables, Artifacts (Catalogs, Matrices, Diagrams)',
          'Part 1: 40 multiple-choice questions speed drills (Pass score: 55%)',
          'Part 2: 8 complex scenario questions with gradient scoring (5, 3, 1, 0 points)'
        ]
      }
    ],
    careerRoles: ['Enterprise Architect', 'Chief Architect', 'Lead Solution Architect', 'Digital Transformation Strategist', 'Cloud Enterprise Architect'],
    avgSalary: '₹18.0 LPA - ₹38.0 LPA',
    topHiringCompanies: ['TCS', 'Wipro', 'IBM', 'Accenture', 'Cognizant', 'Deloitte', 'Standard Chartered']
  },

  // =========================================================================
  // 4. ENTERPRISE & ERP
  // =========================================================================
  {
    id: 'salesforce',
    title: 'SALESFORCE Certified Administrator & Developer',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '65 Hrs (Weekday / Weekend)',
    provider: 'Salesforce Trailhead Certified Track',
    examCode: 'Administrator (ADM-201) & Platform Developer I (PDI)',
    badge: 'Top Trending Cloud ERP',
    rating: '4.9',
    reviewsCount: '5,800+ Certified',
    tagline: 'Master Salesforce CRM administration, declarative process automation, Apex coding, and Lightning Web Components (LWC).',
    overview:
      'Salesforce is the world’s #1 CRM platform powering customer operations for over 150,000 businesses globally. This dual-track certification curriculum takes you from core administration (data security, custom objects, flows, validation rules) to programmatic custom development using Apex controllers, SOQL queries, and Lightning Web Components (LWC).',
    highlights: [
      'Dual-exam preparation for both ADM-201 and Platform Developer I credentials',
      'Hands-on development within dedicated Salesforce Developer Sandbox orgs',
      'Mastering modern Flow Builder automation to replace legacy workflow rules',
      'Building reactive, high-speed UI modules with Lightning Web Components'
    ],
    prerequisites: 'Basic understanding of database concepts. For the Developer track, basic familiarity with Object-Oriented Programming (Java or C#) is helpful.',
    targetAudience: ['Aspiring Salesforce Administrators', 'Developers wanting to specialize in Salesforce CRM', 'Business Analysts customizing CRM portals', 'Fresh Graduates'],
    keySkills: ['Salesforce Data Model', 'Flow Builder', 'Apex Classes & Triggers', 'SOQL & SOSL', 'Lightning Web Components (LWC)', 'Security & Sharing Rules'],
    toolsAndTech: ['Salesforce Developer Org', 'VS Code & Salesforce CLI', 'Flow Builder', 'Workbench', 'Data Loader'],
    curriculumModules: [
      {
        title: 'Module 1: Salesforce Architecture, Data Modeling & UI Customization',
        subtitle: 'Core CRM entities, custom relationships, and user interfaces',
        topics: [
          'Multi-tenant cloud architecture, Standard Objects (Lead, Account, Contact, Opportunity, Case)',
          'Creating Custom Objects, Custom Fields, Picklists, and Formula Fields',
          'Relationship types: Master-Detail, Lookup, Many-to-Many (Junction objects), Hierarchical',
          'Lightning App Builder: Customizing page layouts, record pages, and dynamic forms'
        ]
      },
      {
        title: 'Module 2: Security, Access Governance & Data Management',
        subtitle: 'Multi-layer security model and bulk data utilities',
        topics: [
          'Organization-Wide Defaults (OWD), Role Hierarchy, Sharing Rules, and Manual Sharing',
          'Profiles, Permission Sets, and Permission Set Groups for granular user privileges',
          'Field-Level Security (FLS) and record-level security troubleshooting',
          'Data operations with Data Import Wizard and Salesforce Data Loader (Insert, Update, Upsert, Delete)'
        ]
      },
      {
        title: 'Module 3: Declarative Process Automation with Salesforce Flows',
        subtitle: 'Building powerful, no-code automated business workflows',
        topics: [
          'Flow Builder architecture: Record-Triggered Flows, Screen Flows, Auto-launched Flows, Scheduled Flows',
          'Flow elements: Decisions, Loops, Assignments, Get/Create/Update/Delete records',
          'Validation rules, cross-object field updates, and automated email alerts',
          'Migration best practices from legacy Workflow Rules and Process Builder to Flows'
        ]
      },
      {
        title: 'Module 4: Programmatic Custom Development with Apex & SOQL',
        subtitle: 'Server-side OOP logic running on the Salesforce platform',
        topics: [
          'Apex syntax, data types, collections (List, Set, Map), and execution governors/limits',
          'Writing efficient SOQL (Salesforce Object Query Language) and SOSL queries',
          'Apex Triggers: Context variables (Trigger.new, Trigger.old, isBefore, isAfter) and trigger frameworks',
          'Writing comprehensive unit test classes with @testSetup to meet 75%+ code coverage mandate'
        ]
      },
      {
        title: 'Module 5: Modern UI Development with Lightning Web Components (LWC)',
        subtitle: 'Next-generation web standards running inside Salesforce',
        topics: [
          'LWC architecture: HTML templates, modern ES6+ JavaScript, and CSS styles',
          'Reactivity with @api and @track decorators and wire service (@wire) data binding',
          'Component communication: Custom Events (child to parent) and Lightning Message Service (LMS)',
          'Deploying metadata via VS Code, Salesforce CLI (SFDX), and certification exam preparation'
        ]
      }
    ],
    careerRoles: ['Salesforce Administrator', 'Salesforce Developer', 'Salesforce Consultant', 'CRM Systems Specialist', 'Platform Developer'],
    avgSalary: '₹6.5 LPA - ₹18.0 LPA',
    topHiringCompanies: ['Salesforce', 'Cognizant', 'Accenture', 'TCS', 'Infosys', 'Deloitte', 'PwC']
  },

  {
    id: 'sap-abap',
    title: 'SAP ABAP on HANA Enterprise Developer Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '75 Hrs (Weekday / Weekend)',
    provider: 'SAP Partner Ecosystem Aligned',
    examCode: 'C_TAW12 (SAP Certified Development Associate - ABAP with SAP NetWeaver)',
    rating: '4.8',
    reviewsCount: '2,950+ Certified',
    tagline: 'Develop core enterprise business applications on SAP S/4HANA using modern ABAP 7.5, CDS Views, and OData.',
    overview:
      'SAP is the undisputed world leader in enterprise resource planning, running core operations for multinational corporations. This curriculum covers traditional ABAP (Data Dictionary, Reports, BAPIs, Adobe Forms) through to modern ABAP on SAP HANA, Core Data Services (CDS) views, and OData service generation for SAP Fiori applications.',
    highlights: [
      'Comprehensive hands-on access to live SAP S/4HANA server environments',
      'From Classical & Interactive Reports to modern Object-Oriented ABAP',
      'Core Data Services (CDS Views) and SAP HANA code pushdown techniques',
      'OData API provisioning and integration with modern SAP Fiori user interfaces'
    ],
    prerequisites: 'Basic knowledge of relational databases and basic programming concepts in any language.',
    targetAudience: ['Aspiring SAP Consultants', 'Developers transitioning into enterprise ERP', 'Non-SAP programmers seeking lucrative ERP roles'],
    keySkills: ['ABAP Data Dictionary', 'OOP ABAP', 'CDS Views', 'BAPI & RFC', 'SmartForms / Adobe Forms', 'OData & SAP Gateway'],
    toolsAndTech: ['SAP GUI', 'Eclipse with ABAP Development Tools (ADT)', 'SAP NetWeaver', 'SAP HANA Studio'],
    curriculumModules: [
      {
        title: 'Module 1: SAP Architecture & ABAP Data Dictionary (SE11)',
        subtitle: 'Foundations of SAP 3-tier architecture and relational schema modeling',
        topics: [
          'SAP system architecture: Presentation, Application, and Database layers',
          'Data Dictionary: Database Tables, Data Elements, Domains, and Structures',
          'Views: Database Views, Projection Views, Maintenance Views, and Search Helps',
          'Lock Objects (ENQUEUE / DEQUEUE) for managing concurrent database access'
        ]
      },
      {
        title: 'Module 2: ABAP Programming Fundamentals & Modularization',
        subtitle: 'Writing server-side business logic and report generations',
        topics: [
          'Data types, variables, control statements, internal tables (Standard, Sorted, Hashed)',
          'Modularization techniques: Subroutines, Function Modules, and Function Groups',
          'Classical Reports, Interactive Reports, and ALV (ABAP List Viewer) Grid display',
          'Selection screens, screen events (AT SELECTION-SCREEN, START-OF-SELECTION)'
        ]
      },
      {
        title: 'Module 3: Object-Oriented ABAP & Enhancement Frameworks',
        subtitle: 'Modern software engineering and customizing standard SAP code',
        topics: [
          'OO ABAP: Local and Global Classes (SE24), Inheritance, Interfaces, and Polymorphism',
          'Enhancements: User Exits, Customer Exits, Business Add-Ins (BAdIs), and Explicit/Implicit Enhancements',
          'Business Application Programming Interfaces (BAPIs) and Remote Function Calls (RFC)',
          'Printing enterprise documents: SmartForms and Adobe Document Services (ADS)'
        ]
      },
      {
        title: 'Module 4: ABAP on SAP HANA & Core Data Services (CDS)',
        subtitle: 'Code pushdown paradigm leveraging the speed of in-memory computing',
        topics: [
          'SAP HANA architecture principles: Columnar storage, in-memory computing, parallel processing',
          'Code pushdown techniques: Open SQL enhancements, AMDP (ABAP Managed Database Procedures)',
          'Defining Core Data Services (CDS) Views in Eclipse ADT with joins and associations',
          'Exposing CDS views as OData services via annotations (@OData.publish: true)'
        ]
      },
      {
        title: 'Module 5: End-to-End Enterprise Project & SAP Certification Readiness',
        subtitle: 'Real-world business process automation and C_TAW12 mock drills',
        topics: [
          'Building an end-to-end Purchase Order workflow with custom validations and Fiori integration',
          'Debugging complex standard SAP programs using the New ABAP Debugger',
          'SAP C_TAW12 official certification syllabus analysis and sample question drills'
        ]
      }
    ],
    careerRoles: ['SAP ABAP Developer', 'SAP Technical Consultant', 'ABAP on HANA Specialist', 'SAP Integration Consultant'],
    avgSalary: '₹7.0 LPA - ₹18.5 LPA',
    topHiringCompanies: ['SAP Labs', 'Accenture', 'TCS', 'Infosys', 'Wipro', 'Deloitte', 'Cognizant']
  },

  {
    id: 'sap-fico',
    title: 'SAP FICO Financial & Controlling Consultant Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '70 Hrs (Weekday / Weekend)',
    provider: 'SAP Partner Ecosystem Aligned',
    examCode: 'C_TS4FI (SAP Certified Application Associate - SAP S/4HANA Finance)',
    badge: 'High Finance ERP',
    rating: '4.8',
    reviewsCount: '2,400+ Certified',
    tagline: 'Configure and consult on enterprise financial accounting and managerial cost controlling on SAP S/4HANA.',
    overview:
      'SAP FICO is the financial nerve center of global corporations, handling balance sheets, regulatory tax compliance, asset accounting, cost center allocations, and executive financial reporting. This course teaches both FI (Financial Accounting) and CO (Controlling/Managerial Accounting) on SAP S/4HANA.',
    highlights: [
      'Comprehensive coverage of SAP S/4HANA Universal Journal (ACDOCA table)',
      'Hands-on configuration of enterprise chart of accounts, company codes, and fiscal calendars',
      'Integration points with SAP Material Management (MM) and Sales & Distribution (SD)',
      'Real-world month-end financial closing procedures and P&L reporting'
    ],
    prerequisites: 'Foundational understanding of commerce, accounting principles, or business finance. Prior SAP experience is not required.',
    targetAudience: ['Commerce, Finance, & Accounting Graduates (B.Com, M.Com, MBA Finance)', 'Practicing Accountants moving to ERP Consulting', 'Existing SAP consultants expanding to FICO'],
    keySkills: ['General Ledger (GL)', 'Accounts Payable (AP)', 'Accounts Receivable (AR)', 'Asset Accounting (AA)', 'Cost Center Accounting (CCA)', 'Profit Center Accounting (PCA)'],
    toolsAndTech: ['SAP S/4HANA', 'SAP GUI', 'Universal Journal ACDOCA', 'SAP Fiori Launchpad'],
    curriculumModules: [
      {
        title: 'Module 1: Enterprise Structure & General Ledger (FI-GL) Configuration',
        subtitle: 'Setting up company codes, fiscal years, and foundational ledgers',
        topics: [
          'Defining Organizational Units: Company, Company Code, Credit Control Area, Business Area',
          'Fiscal Year Variants, Posting Period Variants, and Document Types & Number Ranges',
          'Chart of Accounts architecture: Operating, Country-specific, and Group Chart of Accounts',
          'Configuring General Ledger Master records and understanding the S/4HANA Universal Journal'
        ]
      },
      {
        title: 'Module 2: Accounts Payable (FI-AP) & Procurement Integration',
        subtitle: 'Managing vendor master data, invoices, and automated payment runs',
        topics: [
          'Vendor Account Groups, Number Ranges, and Vendor Master creation in Business Partner (BP) model',
          'Posting vendor invoices, credit memos, and down payments',
          'Configuring the Automatic Payment Program (F110) for automated bank transfers',
          'Integration with SAP Materials Management (FI-MM integration: Account Determination OBYC)'
        ]
      },
      {
        title: 'Module 3: Accounts Receivable (FI-AR) & Sales Integration',
        subtitle: 'Customer billing, credit management, and dunning procedures',
        topics: [
          'Customer Account Groups and Business Partner creation',
          'Posting customer invoices, incoming payments, and partial/residual clearances',
          'Configuring the Automated Dunning Program for overdue payment reminders',
          'Integration with SAP Sales & Distribution (FI-SD integration: Revenue Account Determination VKOA)'
        ]
      },
      {
        title: 'Module 4: Asset Accounting (FI-AA) & Bank Ledger',
        subtitle: 'Fixed asset lifecycles, depreciation runs, and electronic bank statements',
        topics: [
          'Chart of Depreciation, Asset Classes, and Account Determination for capital assets',
          'Asset acquisition, inter-company asset transfers, retirements, and scrappings',
          'Depreciation keys, calculating depreciation, and executing monthly depreciation runs (AFAB)',
          'Bank Master data, House Banks, and Electronic Bank Statement (EBS) reconciliation'
        ]
      },
      {
        title: 'Module 5: Controlling (CO) Fundamentals & S/4HANA Finance Exam',
        subtitle: 'Internal managerial accounting and certification drills',
        topics: [
          'Controlling Area setup and assignment to Company Codes',
          'Cost Element Accounting, Cost Center Accounting (CCA), and internal order allocations',
          'Profit Center Accounting (PCA) for departmental profitability analysis',
          'C_TS4FI exam structure, review of sample questions, and case study problem solving'
        ]
      }
    ],
    careerRoles: ['SAP FICO Consultant', 'SAP Financial Analyst', 'SAP Finance Lead', 'ERP Finance Specialist'],
    avgSalary: '₹6.5 LPA - ₹17.5 LPA',
    topHiringCompanies: ['Deloitte', 'PwC', 'EY', 'KPMG', 'Accenture', 'TCS', 'Wipro']
  },

  {
    id: 'workday',
    title: 'Workday HCM & Financials Integration Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Workday Enterprise Ecosystem Aligned',
    examCode: 'Workday Pro Certified Integration Specialist',
    badge: 'Modern Cloud ERP',
    rating: '4.8',
    reviewsCount: '1,650+ Certified',
    tagline: 'Master the cloud-native HCM platform powering global workforce management, custom reporting, and EIB integrations.',
    overview:
      'Workday is the cloud ERP platform of choice for thousands of multinational enterprises replacing legacy on-premise HR systems. This curriculum covers Core Human Capital Management (HCM), Organizations and Staffing Models, Business Process Framework, Advanced Calculated Fields, and Enterprise Interface Builder (EIB) inbound/outbound integrations.',
    highlights: [
      'Comprehensive hands-on tenant training on modern Workday cloud instances',
      'Configuring Supervisory Organizations, Job Profiles, and Compensation Packages',
      'Mastering Workday Report Writer and multi-tier Calculated Fields',
      'Building automated data integrations via Enterprise Interface Builder (EIB) and Core Connectors'
    ],
    prerequisites: 'Basic knowledge of HR concepts or general ERP fundamentals. No coding background required.',
    targetAudience: ['HR professionals transitioning to HR Technology', 'ERP Consultants moving from SAP HR/PeopleSoft to Workday', 'Business Analysts and Integration Developers'],
    keySkills: ['Core HCM Foundations', 'Supervisory Organizations', 'Business Process Framework', 'Calculated Fields', 'Enterprise Interface Builder (EIB)', 'Security Groups'],
    toolsAndTech: ['Workday Cloud Tenant', 'Workday Report Writer', 'EIB Integration Suite', 'XML & XSLT Studio'],
    curriculumModules: [
      {
        title: 'Module 1: Workday Core Concepts & Organizational Architecture',
        subtitle: 'Understanding Workday single-version multi-tenant architecture',
        topics: [
          'Workday architecture overview: In-memory object model and business objects',
          'Supervisory Organizations: The foundational hierarchy for reporting and staffing',
          'Subordinate organizations, Cost Center organizations, and Company organizations',
          'Organization hierarchies and matrix organizational reporting structures'
        ]
      },
      {
        title: 'Module 2: Staffing Models, Jobs & Compensation Plans',
        subtitle: 'Hiring mechanics, job profiles, and employee remuneration structures',
        topics: [
          'Staffing Models comparison: Position Management vs Job Management models',
          'Creating Job Profiles, Job Families, and Job Family Groups',
          'Compensation components: Compensation Packages, Eligibility Rules, Grades, and Grade Profiles',
          'Base pay salary plans, bonus allowances, and merit review cycles'
        ]
      },
      {
        title: 'Module 3: Business Process Framework & Security Configuration',
        subtitle: 'Automating multi-step approvals and configuring role-based access',
        topics: [
          'Business Process Framework: Actions, Approvals, Reviews, and Notifications',
          'Customizing the Hire Business Process with validation conditions and conditional routing',
          'Configurable Security: Role-Based vs User-Based vs Domain Security Groups',
          'Maintaining Security Policies and activating security changes in the tenant'
        ]
      },
      {
        title: 'Module 4: Workday Report Writer & Advanced Calculated Fields',
        subtitle: 'Transforming enterprise workforce data into executive intelligence',
        topics: [
          'Report types: Simple, Advanced, Matrix, Composite, and Trending reports',
          'Primary business objects, related business objects, and data source selection',
          'Building Calculated Fields: Extract Single Instance, Lookup Related Value, Format Date/Text',
          'Sharing reports, scheduling background deliveries, and converting reports into Web Services'
        ]
      },
      {
        title: 'Module 5: Enterprise Integrations with EIB & Core Connectors',
        subtitle: 'Connecting Workday to third-party payroll and benefits providers',
        topics: [
          'Inbound and Outbound Enterprise Interface Builder (EIB) configuration',
          'Using Custom Transformations with XSLT for data format translation',
          'Core Connector architecture and Document Transformation (DT)',
          'Integration monitoring, error log troubleshooting, and certification interview drills'
        ]
      }
    ],
    careerRoles: ['Workday HCM Consultant', 'Workday Integration Specialist', 'Workday HRIS Analyst', 'Workday Reporting Analyst'],
    avgSalary: '₹8.0 LPA - ₹20.0 LPA',
    topHiringCompanies: ['Accenture', 'Deloitte', 'IBM', 'PwC', 'Cognizant', 'Alight Solutions', 'Capgemini']
  },

  {
    id: 'pega',
    title: 'PEGA Certified System Architect (CSA & CSSA)',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '55 Hrs (Weekday / Weekend)',
    provider: 'Pegasystems',
    examCode: 'PEGA Certified System Architect (PXC) & CSSA',
    badge: 'Enterprise BPM Leader',
    rating: '4.8',
    reviewsCount: '2,200+ Certified',
    tagline: 'Master Low-Code/No-Code Case Management, automated business process workflows, and Pega Infinity Platform.',
    overview:
      'Pegasystems powers digital process automation, customer engagement, and case management for the world’s leading banks, insurance providers, and government agencies. This dual CSA/CSSA curriculum teaches you to build enterprise business process workflows, dynamic data models, UI portals, and SLA automations on the Pega Infinity platform.',
    highlights: [
      'Aligined with official Pega Certified System Architect (PCMC) blueprint',
      'Hands-on building of real-world multi-stage Case Life Cycles',
      'Configuring Service-Level Agreements (SLAs), routing rules, and notifications',
      'Pega decisioning: When rules, Decision Tables, Decision Trees, and Data Transforms'
    ],
    prerequisites: 'Basic knowledge of software logic and relational data. Prior Java experience is helpful but not mandatory.',
    targetAudience: ['Developers wanting to enter High-Paying Low-Code BPM', 'Business Analysts transitioning to System Architects', 'Fresh Engineering Graduates'],
    keySkills: ['Pega Case Lifecycle', 'Data Modeling & Pages', 'Decision Rules', 'Flow Actions', 'Service-Level Agreements (SLAs)', 'Integration Connectors'],
    toolsAndTech: ['Pega Infinity 8.x / 24', 'Pega App Studio & Dev Studio', 'Pega Clipboard', 'Pega Tracer'],
    curriculumModules: [
      {
        title: 'Module 1: Pega Infinity Architecture & Case Lifecycle Management',
        subtitle: 'The foundation of enterprise low-code digital process automation',
        topics: [
          'Pega multi-layered architecture: Enterprise Class Structure (ECS) and Rule resolution',
          'App Studio vs Dev Studio roles and workspaces',
          'Designing Case Life Cycles: Stages (Primary, Alternate), Processes, and Steps',
          'Child cases, case dependencies, and parallel processing branches'
        ]
      },
      {
        title: 'Module 2: Data Modeling, Clipboard & User Interface Design',
        subtitle: 'Structuring transactional memory and responsive user forms',
        topics: [
          'Pega Data Model: Single Value, Page, Page List, and Page Group properties',
          'Understanding the Pega Clipboard memory structure and pyWorkPage inspection',
          'Data Types, Data Records, and Data Pages (Declare Pages: Scope - Thread, Requestor, Node)',
          'User Interface: Sections, Dynamic Layouts, Views, and responsive design controls'
        ]
      },
      {
        title: 'Module 3: Business Logic, Automated Decisions & Routing',
        subtitle: 'Enforcing business policies and task assignments dynamically',
        topics: [
          'Data Transforms: Setting default values, mapping properties across cases',
          'Decision Rules: When conditions, Decision Tables, and Decision Trees',
          'Work routing: Operator worklists vs Work queues (Workbaskets)',
          'Configuring Service-Level Agreements (SLAs): Goal, Deadline, Passed Deadline, and escalation actions'
        ]
      },
      {
        title: 'Module 4: Process Automation & Flow Actions',
        subtitle: 'Advanced stage progression and exception handling',
        topics: [
          'Flow Actions (Connector vs Local) and validating user inputs with Validate rules',
          'Automated background processing: Activities (Methods, Steps, Transitions), Job Schedulers, Queue Processors',
          'Sending automated contextual email notifications with correspondence rules',
          'Security: Access Groups, Roles, Privileges, and Access When conditions'
        ]
      },
      {
        title: 'Module 5: Integration, Debugging & CSA Certification Drills',
        subtitle: 'Connecting Pega to enterprise backends and exam mastery',
        topics: [
          'Integration basics: Connect REST, Service REST, and data transform mapping',
          'Diagnostic tools: Mastering the Pega Tracer, Clipboard, and PAL performance analyzer',
          'Pega CSA exam syllabus review, mock test simulations, and certification guidance'
        ]
      }
    ],
    careerRoles: ['Pega System Architect (CSA)', 'Senior System Architect (CSSA)', 'Pega Business Architect (CBA)', 'BPM Solutions Consultant'],
    avgSalary: '₹7.5 LPA - ₹18.0 LPA',
    topHiringCompanies: ['Pegasystems', 'Cognizant', 'TCS', 'Accenture', 'Infosys', 'Citi', 'Wells Fargo']
  },

  {
    id: 'tibco',
    title: 'TIBCO ActiveMatrix BusinessWorks Integration Certification',
    category: 'Enterprise & ERP',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'TIBCO Software / Cloud Software Group',
    examCode: 'TCP-BW6 (TIBCO Certified Professional - BusinessWorks 6)',
    rating: '4.8',
    reviewsCount: '1,350+ Certified',
    tagline: 'Connect disparate enterprise applications using TIBCO ActiveMatrix BusinessWorks 6.x and Enterprise Message Service (EMS).',
    overview:
      'TIBCO ActiveMatrix BusinessWorks is a leading integration platform connecting enterprise applications across telecommunications, banking, and supply chain logistics. This course teaches you to design visual integration workflows, handle message queuing with TIBCO EMS, orchestrate REST/SOAP web services, and deploy microservices.',
    highlights: [
      'Aligined with official TCP-BW6 certification examination requirements',
      'Visual process design using TIBCO Business Studio (Eclipse-based IDE)',
      'Enterprise messaging with TIBCO Enterprise Message Service (EMS: Queues & Topics)',
      'Deploying and monitoring integration runtime engines on TIBCO Administrator / TEA'
    ],
    prerequisites: 'Basic knowledge of XML, JSON, and computer networking concepts.',
    targetAudience: ['Middleware Engineers', 'Integration Developers', 'Enterprise Application Support Engineers'],
    keySkills: ['TIBCO BW 6.x', 'TIBCO EMS Messaging', 'REST & SOAP Web Services', 'XPath & XSLT Mapping', 'TIBCO Enterprise Administrator (TEA)'],
    toolsAndTech: ['TIBCO BusinessWorks 6', 'TIBCO EMS', 'TIBCO Enterprise Administrator', 'SoapUI', 'Eclipse IDE'],
    curriculumModules: [
      {
        title: 'Module 1: TIBCO BusinessWorks 6.x Architecture & Workspace',
        subtitle: 'Foundations of OSGi-based enterprise integration middleware',
        topics: [
          'TIBCO BW6 architecture: Engine, AppSpaces, AppNodes, and Domains',
          'TIBCO Business Studio IDE layout, projects, and application modules',
          'Creating processes, shared resources, and activities overview'
        ]
      },
      {
        title: 'Module 2: Process Orchestration, Data Mapping & XPath',
        subtitle: 'Transforming data payloads across disparate endpoints',
        topics: [
          'Designing synchronous and asynchronous integration processes',
          'Data transformation using XPath expressions, functions, and XSLT mapping',
          'Loops (For-Each, Repeat-Until), transitions, and conditional routing',
          'Robust error handling with Catch, Rethrow, and custom error logging frameworks'
        ]
      },
      {
        title: 'Module 3: Enterprise Messaging with TIBCO EMS',
        subtitle: 'Reliable, guaranteed asynchronous messaging pipelines',
        topics: [
          'JMS architecture: Queues (Point-to-Point) vs Topics (Publish/Subscribe)',
          'TIBCO EMS Server configuration: Delivery modes (Persistent vs Non-Persistent)',
          'Configuring JMS Send Message, JMS Receive Message, and Queue Requestor activities',
          'Message acknowledgement modes: Auto, Client, and Dups-OK'
        ]
      },
      {
        title: 'Module 4: Web Services: REST APIs & SOAP Integration',
        subtitle: 'Exposing and consuming modern web services',
        topics: [
          'Designing and exposing RESTful services with JSON payloads in BW6',
          'Creating and consuming SOAP web services using WSDL schemas',
          'Testing integration endpoints using SoapUI and Postman clients',
          'Security: SSL/TLS configuration, HTTP Basic Authentication'
        ]
      },
      {
        title: 'Module 5: Packaging, Deployment & TCP-BW6 Certification',
        subtitle: 'Enterprise deployment automation and certification drills',
        topics: [
          'Building Enterprise Archive (EAR) packages and profile configurations',
          'Deploying applications via TIBCO Enterprise Administrator (TEA) and bwadmin CLI',
          'Performance tuning: Thread pool sizing and memory heap allocation',
          'TIBCO certification mock exam questions and interview preparation'
        ]
      }
    ],
    careerRoles: ['TIBCO Developer', 'Integration Specialist', 'Middleware Consultant', 'SOA Architect'],
    avgSalary: '₹6.5 LPA - ₹15.5 LPA',
    topHiringCompanies: ['Cognizant', 'TCS', 'Infosys', 'Capgemini', 'Wipro', 'FedEx', 'Airtel']
  },

  {
    id: 'adobe-cq5',
    title: 'Adobe Experience Manager (AEM / CQ5) Developer',
    category: 'Enterprise & ERP',
    level: 'Expert',
    image: certSalesforceErpImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Adobe Certified Expert (ACE) Aligned',
    examCode: 'AD0-E123 (Adobe Experience Manager Sites Developer)',
    badge: 'Premium Web CMS',
    rating: '4.9',
    reviewsCount: '1,480+ Certified',
    tagline: 'Build high-performance digital experiences and headless CMS solutions using Adobe Experience Manager 6.5 and AEM as a Cloud Service.',
    overview:
      'Adobe Experience Manager (AEM) is the world’s leading digital experience and content management platform used by top Fortune 500 brands. This curriculum teaches you the underlying Apache Sling and OSGi frameworks, JCR repository nodes, HTL component authoring, Sling Models, Core Components, and AEM Dispatcher caching.',
    highlights: [
      'Aligined with official Adobe Certified Expert (ACE) AD0-E123 blueprint',
      'Hands-on development on AEM 6.5 Author and Publish local instances',
      'Building custom responsive components using HTL and Sling Models',
      'Headless AEM content delivery using Content Fragments and GraphQL APIs'
    ],
    prerequisites: 'Solid background in Core Java, HTML, CSS, JavaScript, and Maven.',
    targetAudience: ['Java Developers moving to enterprise CMS consulting', 'Web Developers wanting to specialize in AEM', 'Existing AEM authors wanting developer certification'],
    keySkills: ['Apache Sling', 'OSGi Bundles (Felix)', 'Java Content Repository (JCR Oak)', 'HTL (Sightly)', 'Sling Models', 'Content Fragments & GraphQL'],
    toolsAndTech: ['AEM 6.5 / AEM as a Cloud Service', 'CRXDE Lite', 'Apache Felix Web Console', 'IntelliJ / Eclipse', 'Apache Maven'],
    curriculumModules: [
      {
        title: 'Module 1: AEM Architecture: OSGi, Apache Sling & JCR Oak',
        subtitle: 'The foundational architectural triad of Adobe Experience Manager',
        topics: [
          'AEM architecture stack: Java Content Repository (Apache Jackrabbit Oak), Apache Sling, OSGi',
          'Author vs Publish instances, Dispatcher web server module caching',
          'OSGi mechanics: Bundles, Services, Declarative Services annotations (@Component, @Reference)',
          'CRXDE Lite navigation, JCR node types (cq:Page, nt:unstructured), and indexing'
        ]
      },
      {
        title: 'Module 2: AEM Component Development with HTL & ClientLibs',
        subtitle: 'Building modular, author-friendly web interface components',
        topics: [
          'AEM project structure: ui.apps, ui.content, core bundle Maven archetypes',
          'HTML Template Language (HTL / Sightly) syntax, expressions, and global objects',
          'Creating editable Touch UI dialogs using Coral UI / Granite UI components',
          'Client-Side Libraries (ClientLibs): CSS/JS minification, dependencies, and category loading'
        ]
      },
      {
        title: 'Module 3: Server-Side Logic with Sling Models & OSGi Services',
        subtitle: 'Clean separation of business logic from presentation templates',
        topics: [
          'Sling Models: @Model, @Inject, @ValueMapValue, and @ChildResource annotations',
          'Custom Sling Servlets: Path-based vs ResourceType-based registration',
          'Creating custom OSGi configurations using Java interfaces (@ObjectClassDefinition)',
          'Event handling: Sling Event Listeners and JCR Observation'
        ]
      },
      {
        title: 'Module 4: Headless AEM, Content Fragments & Core Components',
        subtitle: 'Omnichannel content distribution to modern web and mobile apps',
        topics: [
          'Utilizing WCM Core Components and the Component Proxy pattern',
          'Creating Content Fragments and Experience Fragments for reusable content delivery',
          'Exposing Content Fragments via GraphQL queries for headless React/Next.js frontends',
          'AEM Workflows: Creating custom workflow models and custom process steps'
        ]
      },
      {
        title: 'Module 5: Dispatcher Caching, Deployment & ACE Certification',
        subtitle: 'Production security, caching rules, and certification mastery',
        topics: [
          'Configuring AEM Dispatcher on Apache HTTP Server: Caching filters and invalidation',
          'AEM as a Cloud Service deployment via Cloud Manager CI/CD pipelines',
          'AD0-E123 certification exam question patterns, scenario breakdowns, and mock drills'
        ]
      }
    ],
    careerRoles: ['AEM Developer', 'Lead AEM Engineer', 'Adobe CMS Technical Architect', 'AEM Consultant'],
    avgSalary: '₹9.0 LPA - ₹25.0 LPA',
    topHiringCompanies: ['Adobe', 'Sapient / Publicis', 'Deloitte Digital', 'Cognizant', 'TCS', 'Wipro', 'Accenture']
  },

  // =========================================================================
  // 5. AUTOMATION & RPA
  // =========================================================================
  {
    id: 'uipath',
    title: 'UiPath Certified Advanced RPA Developer (UiARD)',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '55 Hrs (Weekday / Weekend)',
    provider: 'UiPath Academy Certified Track',
    examCode: 'UiPath-ARDv1 (Advanced RPA Developer)',
    badge: 'Industry RPA Leader',
    rating: '4.9',
    reviewsCount: '4,800+ Certified',
    tagline: 'Design, build, and deploy enterprise software automation bots using UiPath Studio, Orchestrator, and ReFramework.',
    overview:
      'UiPath is recognized as the world’s leading Robotic Process Automation (RPA) enterprise platform. This advanced certification curriculum trains you to build resilient unattended and attended automation bots, configure UiPath Orchestrator for queue scheduling, master the Robotic Enterprise Framework (ReFramework), and automate AI document extraction.',
    highlights: [
      'Comprehensive preparation for official UiPath UiARD certification',
      'Mastering UiPath Robotic Enterprise Framework (ReFramework) state machine',
      'Orchestrator deployment: Assets, Queues, Triggers, Robots, and Process packages',
      'AI-powered Document Understanding for automated PDF and invoice processing'
    ],
    prerequisites: 'Basic understanding of software logic, variables, and loops. No prior coding experience required.',
    targetAudience: ['Aspiring RPA Developers', 'Software Engineers moving into automation', 'QA Automation Testers expanding to RPA', 'Process Improvement Analysts'],
    keySkills: ['UiPath Studio', 'ReFramework', 'Orchestrator Queues', 'UI Automation & Selectors', 'Document Understanding (OCR)', 'Excel & PDF Automation'],
    toolsAndTech: ['UiPath Studio', 'UiPath Orchestrator', 'UiPath Assistant', 'UiPath AI Center', 'Regex & VB.NET'],
    curriculumModules: [
      {
        title: 'Module 1: RPA Fundamentals & UiPath Studio Architecture',
        subtitle: 'Foundations of robotic automation and visual workflow design',
        topics: [
          'RPA fundamentals: Benefits, business case discovery, Attended vs Unattended bots',
          'UiPath Studio interface: Activities panel, Properties, Variables, and Arguments',
          'Control flow: Sequences, Flowcharts, State Machines, and Decisions',
          'Data manipulation: Strings, DateTime, Arrays, Lists, and DataTables'
        ]
      },
      {
        title: 'Module 2: Advanced UI Automation & Robust Selectors',
        subtitle: 'Reliable screen element interrogation and dynamic UI handling',
        topics: [
          'Understanding UI Automation: Simulating human keyboard and mouse actions',
          'Selectors: Full vs Partial vs Fuzzy selectors, and wildcards (*, ?)',
          'UI Explorer: Fine-tuning selectors with dynamic attributes and Anchor Base',
          'Modern Design Experience: App/Web Recorder, Object Repository, and Computer Vision'
        ]
      },
      {
        title: 'Module 3: Enterprise File Automation & Exception Handling',
        subtitle: 'Automating high-volume Excel, PDF, and email operations',
        topics: [
          'Excel automation: Workbook activities vs Excel Application Scope (Office 365 integration)',
          'PDF automation: Reading text, screen scraping with OCR engines (Tesseract, OmniPage)',
          'Email automation: Outlook, SMTP, IMAP, and POP3 handling attachments',
          'Exception handling: Try Catch, Throw, Rethrow, Global Exception Handler'
        ]
      },
      {
        title: 'Module 4: Enterprise Orchestrator Management & Scalability',
        subtitle: 'Centralized bot scheduling, monitoring, and transactional queues',
        topics: [
          'Publishing automation packages (.nupkg) to UiPath Orchestrator',
          'Managing Assets, Credentials, and Orchestrator Queues for transaction items',
          'Configuring Robots, Machine Keys, Environments, and scheduled Triggers',
          'Monitoring bot execution logs, alerts, and remote debugging'
        ]
      },
      {
        title: 'Module 5: UiPath Robotic Enterprise Framework (ReFramework)',
        subtitle: 'The enterprise standard template for high-reliability production bots',
        topics: [
          'Deep-dive into ReFramework states: Init, Get Transaction Data, Process Transaction, End Process',
          'Config.xlsx setup for dynamic environment parameters and asset mappings',
          'Handling Business Rule Exceptions vs System Exceptions with automatic retry mechanisms',
          'UiARD mock examination drills and certification application coaching'
        ]
      }
    ],
    careerRoles: ['RPA Developer', 'Senior UiPath Engineer', 'RPA Solution Architect', 'Automation Consultant'],
    avgSalary: '₹6.0 LPA - ₹16.0 LPA',
    topHiringCompanies: ['Cognizant', 'PwC', 'Deloitte', 'Accenture', 'TCS', 'Capgemini', 'Wipro']
  },

  {
    id: 'blue-prism',
    title: 'Blue Prism Certified Developer (AD01) Certification',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Blue Prism University / SS&C Blue Prism',
    examCode: 'AD01 (Blue Prism Developer Certification)',
    rating: '4.8',
    reviewsCount: '1,950+ Certified',
    tagline: 'Architect enterprise digital workforces using Blue Prism Process Studio, Object Studio, and Work Queues.',
    overview:
      'Blue Prism is the enterprise robotic automation choice for Tier-1 banks, insurance providers, and healthcare platforms that require strict auditability and governance. This course prepares you for the official AD01 certification, covering Process Studio logic, Object Studio application interrogation, surface automation, and multi-bot workload distribution.',
    highlights: [
      'Full preparation for official Blue Prism Developer (AD01) certification exam',
      'Architectural separation of business logic (Process) from application models (Objects)',
      'Enterprise Work Queue configuration with encryption and priority handling',
      'Surface Automation techniques for Citrix and remote virtual desktop environments'
    ],
    prerequisites: 'Basic knowledge of flowchart logic and software workflows.',
    targetAudience: ['RPA Developers', 'Software Engineers moving into Enterprise RPA', 'Banking automation specialists'],
    keySkills: ['Process Studio', 'Object Studio', 'Work Queues', 'Surface Automation (Citrix)', 'Application Modeller', 'Exception Bubbling'],
    toolsAndTech: ['Blue Prism v7', 'Application Modeller', 'Control Room', 'SQL Server Backend'],
    curriculumModules: [
      {
        title: 'Module 1: Blue Prism Architecture & Enterprise Governance',
        subtitle: 'Foundations of connected-RPA and certified security standards',
        topics: [
          'Blue Prism multi-tier architecture: Interactive Client, Application Server, Database, Resource PCs',
          'Understanding the 3-layer architecture: Process Layer, Business Object Layer, Target Application',
          'Security, credentials vault, user access management, and audit logs'
        ]
      },
      {
        title: 'Module 2: Process Studio Workflow Design',
        subtitle: 'Visual business logic implementation and data structures',
        topics: [
          'Process Studio stages: Action, Decision, Choice, Calculation, Multiple Calculation',
          'Data Items, Collections, and Loops for tabular records',
          'Pages, Sub-processes, and clean process flow organization',
          'Exception Handling: Recover, Resume, and exception bubbling to parent pages'
        ]
      },
      {
        title: 'Module 3: Object Studio & Application Interrogation',
        subtitle: 'Interacting with Windows, Web, and Mainframe target systems',
        topics: [
          'Object Studio lifecycle: Initialize, Clean Up, and custom Action pages',
          'Application Modeller: Spy modes (Win32, Accessibility, UI Automation, HTML)',
          'Fine-tuning element attributes: Wildcards, dynamic attributes, match index',
          'Read, Write, Navigate, and Wait stages for robust system synchronization'
        ]
      },
      {
        title: 'Module 4: Enterprise Work Queues & Surface Automation',
        subtitle: 'Managing scalable multi-bot transaction workloads',
        topics: [
          'Configuring Work Queues: Item Statuses (Pending, Locked, Completed, Exception)',
          'Tagging, prioritizing, and deferring queue transactions across bots',
          'Surface Automation: Automating Citrix and virtual environments using image recognition and font matching',
          'Environmental variables, session variables, and scheduler setup in Control Room'
        ]
      },
      {
        title: 'Module 5: Enterprise Best Practices & AD01 Certification Drills',
        subtitle: 'Delivering production-grade bots that pass Blue Prism audit standards',
        topics: [
          'Blue Prism Development Best Practice guidelines and code review checklists',
          'Release Manager: Packaging packages (.bprelease) across DEV, TEST, and PROD',
          'AD01 certification mock exam drills with detailed rationale explanations'
        ]
      }
    ],
    careerRoles: ['Blue Prism Developer', 'RPA Developer', 'Senior Automation Specialist', 'Blue Prism Technical Lead'],
    avgSalary: '₹6.5 LPA - ₹15.5 LPA',
    topHiringCompanies: ['Barclays', 'HSBC', 'EY', 'Deloitte', 'Cognizant', 'Capgemini', 'TCS']
  },

  {
    id: 'automation-anywhere',
    title: 'Automation Anywhere Certified Master RPA Professional',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Automation Anywhere University',
    examCode: 'Certified Advanced / Master RPA Professional (Automation 360)',
    badge: 'Cloud-Native RPA',
    rating: '4.8',
    reviewsCount: '2,100+ Certified',
    tagline: 'Build cloud-native intelligent automation bots with Automation 360, IQ Bot AI document extraction, and Bot Insight.',
    overview:
      'Automation Anywhere Automation 360 is the cloud-native, web-based RPA platform leading intelligent digital automation. This certification course covers building bots with the Universal Recorder, handling Excel/database operations, configuring Workload Management queues, implementing AI-driven document extraction with IQ Bot, and analyzing bot metrics with Bot Insight.',
    highlights: [
      'Aligined with official Automation 360 Advanced & Master certification blueprints',
      'Web-based cloud bot development using the Automation 360 Control Room',
      'AI-powered document data extraction using IQ Bot / Document Automation',
      'Workload queues and enterprise credential vault configuration'
    ],
    prerequisites: 'Basic knowledge of logical reasoning and general computer tasks.',
    targetAudience: ['RPA Developers', 'Software Engineers', 'Business Process Automation Analysts'],
    keySkills: ['Automation 360 Cloud', 'Universal Recorder', 'IQ Bot / AI Document Processing', 'Workload Management', 'Bot Insight Analytics', 'Excel & DB Packages'],
    toolsAndTech: ['Automation 360 Control Room', 'Bot Agent', 'IQ Bot', 'Bot Insight'],
    curriculumModules: [
      {
        title: 'Module 1: Automation 360 Cloud Architecture & Bot Studio',
        subtitle: 'Cloud-native RPA navigation and core package overview',
        topics: [
          'Automation 360 architecture: Cloud Control Room, Bot Agent, and Bot Creator',
          'Web-based Bot Studio workspace: Actions panel, Flow view, List view, Dual view',
          'Variables: String, Number, Boolean, List, Record, and Table variables',
          'Prompt and Message Box interactions and logging'
        ]
      },
      {
        title: 'Module 2: Recording & UI Interactivity',
        subtitle: 'Interacting with web and desktop user interfaces seamlessly',
        topics: [
          'Universal Recorder: Capturing web and desktop actions with high selector precision',
          'Simulate keystrokes, mouse clicks, and window object validation',
          'Managing dynamic web objects using HTML DOM properties and XPath expressions',
          'Conditional logic (If/Else), loops (Loop package: While, For Each, Times), and delays'
        ]
      },
      {
        title: 'Module 3: Enterprise Packages: Excel, Files, Database & Email',
        subtitle: 'Connecting bots to enterprise operational data stores',
        topics: [
          'Excel Advanced and Excel Basic packages: Reading, writing, filtering, and macros',
          'Database package: Connecting via ODBC/OLEDB, executing SQL queries and stored procedures',
          'File and Folder management, CSV manipulation, and ZIP operations',
          'Email package: Integrating with Exchange, Outlook, and SMTP servers'
        ]
      },
      {
        title: 'Module 4: Intelligent Document Processing with IQ Bot',
        subtitle: 'Integrating AI and OCR to extract semi-structured document data',
        topics: [
          'IQ Bot architecture and Document Automation workflows',
          'Training learning instances for diverse invoice and purchase order layouts',
          'Field extraction validation and human-in-the-loop review queues',
          'Exporting extracted JSON/CSV data into downstream ERP backends'
        ]
      },
      {
        title: 'Module 5: Workload Management, Bot Insight & Master Exam Drills',
        subtitle: 'Scalable deployment, analytics, and certification assessment',
        topics: [
          'Configuring Workload Management queues and automated pool distribution',
          'Bot Insight: Visualizing operational dashboards and business value metrics',
          'Automation Anywhere Master RPA certification project assessment and mock test review'
        ]
      }
    ],
    careerRoles: ['Automation Anywhere Developer', 'Master RPA Professional', 'RPA Automation Consultant', 'Intelligent Automation Architect'],
    avgSalary: '₹6.0 LPA - ₹15.0 LPA',
    topHiringCompanies: ['Accenture', 'Cognizant', 'Genpact', 'Infosys', 'TCS', 'Wipro', 'KPMG']
  },

  {
    id: 'rpa-general',
    title: 'Robotic Process Automation Master Track',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '65 Hrs (Weekday / Weekend)',
    provider: 'Greens Certified Automation Guild',
    examCode: 'Multi-Tool Enterprise RPA Architect',
    rating: '4.8',
    reviewsCount: '3,100+ Certified',
    tagline: 'Multi-platform robotic automation mastery across UiPath, Automation Anywhere, and Blue Prism architectures.',
    overview:
      'Organizations increasingly operate hybrid RPA estates combining multiple automation technologies. This Master Track provides cross-platform expertise, comparing bot architectures across UiPath, Automation Anywhere, and Blue Prism, while teaching end-to-end Process Discovery, Solution Design Documents (SDD), and bot maintenance.',
    highlights: [
      'Comprehensive comparative training across the top 3 RPA market leaders',
      'Formulating Process Definition Documents (PDD) and Solution Design Documents (SDD)',
      'Designing resilient exception management architectures and disaster recovery',
      'Hands-on bot deployment across banking reconciliation and HR onboarding scenarios'
    ],
    prerequisites: 'Basic computer literacy and understanding of business workflows.',
    targetAudience: ['IT Professionals seeking broad RPA career mobility', 'Tech Leads supervising automation programs', 'Consultants assessing enterprise RPA suites'],
    keySkills: ['Process Discovery & Feasibility', 'SDD & PDD Documentation', 'Multi-Vendor Bot Design', 'Exception Frameworks', 'Orchestration & Governance'],
    toolsAndTech: ['UiPath Studio', 'Automation 360', 'Blue Prism', 'Miro / Visio', 'Postman'],
    curriculumModules: [
      {
        title: 'Module 1: RPA Enterprise Lifecycle & Process Discovery',
        subtitle: 'Evaluating process feasibility and calculating automation ROI',
        topics: [
          'RPA maturity framework: Opportunity assessment, complexity scoring, and ROI calculation',
          'Authoring industry-standard Process Definition Documents (PDD)',
          'Designing enterprise Solution Design Documents (SDD) with risk mitigation plans',
          'Setting up an RPA Center of Excellence (CoE) and governance standards'
        ]
      },
      {
        title: 'Module 2: UiPath Enterprise Automation Essentials',
        subtitle: 'State machine architecture and transactional processing',
        topics: [
          'UiPath Studio workflow development and UI Explorer selector optimization',
          'ReFramework implementation for banking reconciliation processes',
          'Orchestrator queue management and asset credential management'
        ]
      },
      {
        title: 'Module 3: Automation Anywhere Automation 360 Core Delivery',
        subtitle: 'Cloud-native bot building and intelligent document extraction',
        topics: [
          'Universal Recorder automation across legacy desktop and modern web systems',
          'Excel Advanced and Database package integration for automated invoicing',
          'Configuring IQ Bot learning instances for automated PDF ingestion'
        ]
      },
      {
        title: 'Module 4: Blue Prism Architecture & Object Modeller Overview',
        subtitle: 'Strict governance, process studio, and work queues',
        topics: [
          'Object Studio application interrogation across Win32 and HTML modes',
          'Process Studio workflow orchestration and work queue transaction tracking',
          'Audit compliance and credentials vault management'
        ]
      },
      {
        title: 'Module 5: Capstone Multi-Platform Project & Career Advisory',
        subtitle: 'Deploying an enterprise end-to-end multi-system automation solution',
        topics: [
          'Building a full automated loan origination workflow spanning email, web portal, and mainframe',
          'Conducting User Acceptance Testing (UAT) and hypercare production support',
          'Resume building, GitHub portfolio presentation, and interview technical rounds'
        ]
      }
    ],
    careerRoles: ['RPA Consultant', 'Lead RPA Developer', 'Enterprise Automation Architect', 'RPA CoE Lead'],
    avgSalary: '₹7.0 LPA - ₹17.0 LPA',
    topHiringCompanies: ['Deloitte', 'EY', 'PwC', 'Accenture', 'Cognizant', 'Capgemini']
  },

  {
    id: 'openspan',
    title: 'OpenSpan (Pega Robotics) Desktop Automation Certification',
    category: 'Automation & RPA',
    level: 'Professional',
    image: certRpaRoboticsImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'Pegasystems',
    examCode: 'PEGA Certified Robotics System Architect (PCRSA)',
    rating: '4.8',
    reviewsCount: '1,120+ Certified',
    tagline: 'Master attended desktop robotic automation integrated directly into Pega customer service workflows.',
    overview:
      'OpenSpan (acquired by Pegasystems and rebranded as Pega Robotic Process Automation & Workforce Intelligence) specializes in attended desktop automation. It assists call center and customer service representatives by eliminating repetitive cut-and-paste tasks across legacy Windows, Web, and Mainframe terminal screens.',
    highlights: [
      'Aligined with official Pega Certified Robotics System Architect (PCRSA) exam',
      'Interrogating legacy Windows applications, web forms, and 3270 terminal emulators',
      'Building event-driven attended robotic automations that trigger off user keystrokes',
      'Integrating OpenSpan desktop bots directly with Pega Case Management workflows'
    ],
    prerequisites: 'Basic programming concepts and familiarity with Windows desktop operating systems.',
    targetAudience: ['Pega System Architects adding robotics capability', 'Desktop Automation Developers', 'Call Center Systems Engineers'],
    keySkills: ['OpenSpan Studio', 'Application Interrogation', 'Event Monitoring', 'Windows & Web Adapters', 'Pega Robot Manager'],
    toolsAndTech: ['Pega Robotics Studio (OpenSpan)', 'Pega Robot Manager', 'Visual Studio Plugin', 'Pega Infinity'],
    curriculumModules: [
      {
        title: 'Module 1: Pega Robotics (OpenSpan) Architecture & Studio Setup',
        subtitle: 'Foundations of attended and unattended desktop robotic automation',
        topics: [
          'Pega Robotics architecture: Studio, Runtime, Robot Manager, and Workforce Intelligence',
          'Visual Studio IDE integration and OpenSpan project solution structure',
          'Understanding adapters: Windows Adapter, Web Adapter, and Text/Terminal Adapter'
        ]
      },
      {
        title: 'Module 2: Interrogating Windows & Web Applications',
        subtitle: 'Capturing desktop targets and handling dynamic controls',
        topics: [
          'Interrogation process: Interrogation form, target controls, and matching rules',
          'Win32 and .NET controls: Textboxes, buttons, grids, and dropdown lists',
          'Web interrogation: HTML elements, tables, frames, and handling popups',
          'Fine-tuning matching rules: UseKeys, Match Rules, and dynamic clones'
        ]
      },
      {
        title: 'Module 3: Event-Driven Automation Design',
        subtitle: 'Building automated workflows triggered by user actions',
        topics: [
          'Automation design surface: Blocks, entry points, exit points, and execution paths',
          'Event-driven triggers: Automating actions when a user clicks a button or opens a customer record',
          'Data transmission: Connecting data ports, type conversion, and variable storage',
          'Looping through tabular data and multi-screen data aggregation'
        ]
      },
      {
        title: 'Module 4: Integration with Pega Infinity Case Management',
        subtitle: 'Bridging desktop automation with enterprise enterprise BPM',
        topics: [
          'Connecting desktop bots to Pega applications via Robotic Desktop Automation (RDA)',
          'Invoking automations from Pega Flow Actions and receiving return data payloads',
          'Pega Robot Manager: Deploying runtime packages, monitoring bot health, and work group assignments',
          'Credential management and encrypted application logins'
        ]
      },
      {
        title: 'Module 5: Diagnostic Tools & PCRSA Certification Readiness',
        subtitle: 'Troubleshooting desktop hooks and exam preparation',
        topics: [
          'Debugging automations using breakpoints, step execution, and the Test Runner',
          'Analyzing OpenSpan diagnostic logs and resolving application hook crashes',
          'PCRSA exam question analysis and review of sample testing scenarios'
        ]
      }
    ],
    careerRoles: ['Pega Robotics Specialist', 'OpenSpan Developer', 'RDA Consultant', 'Pega Certified Robotics Architect'],
    avgSalary: '₹6.5 LPA - ₹15.0 LPA',
    topHiringCompanies: ['Cognizant', 'Accenture', 'TCS', 'Infosys', 'Citi', 'Wells Fargo']
  },

  // =========================================================================
  // 6. AI & DATA SCIENCE
  // =========================================================================
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning Master Certification',
    category: 'AI & Data Science',
    level: 'Expert',
    image: genaiMasterImg,
    duration: '80 Hrs (Weekday / Weekend)',
    provider: 'Data Science Council / Greens Certified',
    examCode: 'Certified Data Science & Machine Learning Practitioner',
    badge: 'Premier AI Flagship',
    rating: '4.9',
    reviewsCount: '6,100+ Certified',
    tagline: 'Master Python data analytics, statistical modeling, machine learning algorithms, deep learning, and cloud deployment.',
    overview:
      'Data Science and Artificial Intelligence are fundamentally restructuring global commerce. This flagship master curriculum provides complete mastery from Python statistical foundations (NumPy, Pandas, Matplotlib, Seaborn) to supervised and unsupervised machine learning algorithms (Scikit-Learn), deep learning neural networks (PyTorch/TensorFlow), and MLOps deployment.',
    highlights: [
      'Comprehensive mathematics for ML: Linear algebra, calculus, probability, and statistics',
      'End-to-end data pipeline projects with real-world financial, healthcare, and retail datasets',
      'Deep Learning computer vision and natural language processing (NLP) architectures',
      'Production MLOps: Serving models via FastAPI, Docker, and cloud endpoints'
    ],
    prerequisites: 'Basic programming interest and high-school level mathematics. No prior advanced programming required.',
    targetAudience: ['Software Engineers transitioning to Data Science / AI', 'Data Analysts and BI Developers moving into predictive ML', 'Statisticians and researchers', 'Fresh Graduates'],
    keySkills: ['Python Data Stack (Pandas, NumPy)', 'Machine Learning (Scikit-Learn)', 'Deep Learning (PyTorch)', 'Feature Engineering', 'Model Evaluation & Tuning', 'FastAPI Deployment'],
    toolsAndTech: ['Jupyter Lab', 'Python 3.11', 'Pandas & NumPy', 'Scikit-Learn', 'PyTorch', 'FastAPI', 'Docker', 'MLflow'],
    curriculumModules: [
      {
        title: 'Module 1: Python Data Science Ecosystem & Statistical Computing',
        subtitle: 'Vectorized computing, exploratory data analysis, and visual storytelling',
        topics: [
          'Python data structures, list comprehensions, lambda expressions, and generators',
          'Vectorized matrix computations with NumPy: Broadcasting, indexing, and linear algebra',
          'Data wrangling with Pandas: DataFrames, grouping, pivoting, merging, and missing data imputation',
          'Exploratory Data Analysis (EDA) visualizations with Matplotlib and Seaborn'
        ]
      },
      {
        title: 'Module 2: Applied Statistics & Feature Engineering for ML',
        subtitle: 'Foundational mathematics and transforming raw data into predictive features',
        topics: [
          'Descriptive vs inferential statistics, probability distributions, Central Limit Theorem',
          'Hypothesis testing: p-values, t-tests, ANOVA, and Chi-Square tests',
          'Feature scaling (StandardScaler, MinMaxScaler) and categorical encoding (One-Hot, Target)',
          'Handling imbalanced classes (SMOTE), outlier detection, and dimensionality reduction (PCA)'
        ]
      },
      {
        title: 'Module 3: Supervised & Unsupervised Machine Learning Algorithms',
        subtitle: 'Mastering the core algorithmic families of Scikit-Learn',
        topics: [
          'Regression algorithms: Linear Regression, Ridge, Lasso, and Polynomial Regression',
          'Classification algorithms: Logistic Regression, K-Nearest Neighbors (KNN), and Support Vector Machines (SVM)',
          'Tree-based ensemble models: Decision Trees, Random Forests, XGBoost, LightGBM, and CatBoost',
          'Unsupervised learning: K-Means clustering, Hierarchical clustering, and DBSCAN'
        ]
      },
      {
        title: 'Module 4: Deep Learning Foundations with PyTorch',
        subtitle: 'Neural networks, computer vision, and NLP architectures',
        topics: [
          'Artificial Neural Networks (ANN): Forward propagation, backpropagation, and loss functions',
          'Convolutional Neural Networks (CNN): Convolution, pooling, and image classification',
          'Recurrent Neural Networks (RNN) and LSTMs for time-series forecasting',
          'Introduction to modern Transformer architectures and HuggingFace models'
        ]
      },
      {
        title: 'Module 5: MLOps, Model Deployment & Production Capstone',
        subtitle: 'Serving trained machine learning models into production systems',
        topics: [
          'Model serialization (Pickle, ONNX) and building REST APIs with FastAPI',
          'Containerizing machine learning inference services with Docker',
          'Model tracking and experiment logging using MLflow',
          'Deploying an end-to-end credit risk default prediction application to the cloud'
        ]
      }
    ],
    careerRoles: ['Data Scientist', 'Machine Learning Engineer', 'AI Specialist', 'Data Science Consultant', 'Quantitative Analyst'],
    avgSalary: '₹8.5 LPA - ₹24.0 LPA',
    topHiringCompanies: ['Google', 'Amazon', 'Microsoft', 'Fractal Analytics', 'Mu Sigma', 'PayPal', 'Walmart Labs']
  },

  {
    id: 'data-warehousing',
    title: 'DATA WAREHOUSING & ETL Architect Certification',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '55 Hrs (Weekday / Weekend)',
    provider: 'DWH Standards Board',
    examCode: 'Certified Enterprise Data Warehouse Architect',
    rating: '4.8',
    reviewsCount: '2,800+ Certified',
    tagline: 'Design enterprise dimensional data warehouses, star schemas, OLAP cubes, and high-throughput ETL data pipelines.',
    overview:
      'Data Warehousing is the architectural foundation of corporate Business Intelligence and analytical decision-making. This comprehensive curriculum teaches Ralph Kimball dimensional modeling principles, Star vs Snowflake schemas, Fact and Dimension table classification, Slowly Changing Dimensions (SCD Types 1, 2, 3), and ETL pipeline architecture.',
    highlights: [
      'In-depth mastery of Ralph Kimball vs Bill Inmon data warehouse methodologies',
      'Designing Star, Snowflake, and Constellation dimensional schemas from scratch',
      'Slowly Changing Dimensions (SCD Type 1, Type 2, Type 3, and Type 6) implementation',
      'Hands-on building of enterprise data pipelines transforming millions of records'
    ],
    prerequisites: 'Basic understanding of relational databases and SQL queries.',
    targetAudience: ['Data Engineers and ETL Developers', 'Database Administrators moving into BI', 'Data Analysts designing analytical warehouses'],
    keySkills: ['Dimensional Modeling', 'Star & Snowflake Schemas', 'Fact & Dimension Tables', 'Slowly Changing Dimensions (SCD)', 'ETL Pipeline Design', 'OLAP vs OLTP'],
    toolsAndTech: ['Oracle DWH / Snowflake', 'SQL & PL/SQL', 'Informatica / DataStage', 'ERwin Data Modeler'],
    curriculumModules: [
      {
        title: 'Module 1: Data Warehousing Fundamentals & Architecture',
        subtitle: 'Why enterprises need dedicated analytical data stores separate from OLTP',
        topics: [
          'Comparing OLTP (transactional) vs OLAP (analytical) database workloads',
          'Data Warehouse architecture: Staging area, Enterprise Data Warehouse (EDW), and Data Marts',
          'Kimball bottom-up dimensional approach vs Inmon top-down normalized approach',
          'Data Governance, Data Quality, and Metadata repository management'
        ]
      },
      {
        title: 'Module 2: Dimensional Modeling & Schema Architecture',
        subtitle: 'Designing Star and Snowflake schemas for lightning-fast business reporting',
        topics: [
          'Fact tables: Transaction facts, Periodic snapshot facts, and Accumulating snapshot facts',
          'Dimension tables: Conformed dimensions, Role-playing dimensions, Degenerate dimensions',
          'Star schema vs Snowflake schema: Normalization trade-offs, query performance, and indexing',
          'Factless fact tables for tracking events and coverage conditions'
        ]
      },
      {
        title: 'Module 3: Slowly Changing Dimensions (SCD) & History Tracking',
        subtitle: 'Capturing historical attribute shifts over time with absolute precision',
        topics: [
          'SCD Type 0 (Retain Original) and SCD Type 1 (Overwrite value)',
          'SCD Type 2 (Add New Row): Start dates, End dates, Current record flags, and Surrogate keys',
          'SCD Type 3 (Add New Column for Previous Value) and SCD Type 6 (Hybrid 1+2+3)',
          'Surrogate key management and natural key mapping in analytical databases'
        ]
      },
      {
        title: 'Module 4: Enterprise ETL Process Engineering',
        subtitle: 'Extract, Transform, and Load architecture across heterogeneous systems',
        topics: [
          'Extract mechanisms: Full extraction vs Incremental extraction (Change Data Capture - CDC)',
          'Transformations: Data cleansing, deduplication, standardizing date/formats, lookup joins',
          'Load strategies: Bulk loading, truncate & load, incremental upserts, and index rebuilds',
          'Error handling, reject tables, and auditing row counts across pipeline stages'
        ]
      },
      {
        title: 'Module 5: Real-World Case Studies & Architectural Project',
        subtitle: 'Designing an end-to-end retail and banking analytical data warehouse',
        topics: [
          'Designing a multi-channel retail e-commerce dimensional schema with 10+ dimensions',
          'Partitioning strategies (Range, Hash, List) and materialized views for query optimization',
          'Interview technical rounds: Defending schema design decisions in enterprise panels'
        ]
      }
    ],
    careerRoles: ['Data Warehouse Architect', 'ETL Developer', 'BI Engineer', 'Data Modeling Specialist'],
    avgSalary: '₹6.5 LPA - ₹17.0 LPA',
    topHiringCompanies: ['TCS', 'Cognizant', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'IBM']
  },

  {
    id: 'sas',
    title: 'SAS Certified Clinical & Statistical Analyst',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'SAS Institute Aligned',
    examCode: 'SAS Certified Specialist: Base & Clinical Trials Programmer',
    rating: '4.8',
    reviewsCount: '1,890+ Certified',
    tagline: 'Master Base SAS, Advanced SAS Macros, PROC SQL, and CDISC clinical trial data standards.',
    overview:
      'SAS is the dominant validated statistical software platform used across global pharmaceutical clinical trials, healthcare epidemiology, and banking risk modeling. This specialized curriculum teaches Base SAS programming, data step mechanics, SAS Macros for batch automation, PROC SQL querying, and CDISC SDTM/ADaM clinical reporting standards.',
    highlights: [
      'Aligined with official SAS Base & Clinical Trials Programmer certifications',
      'Mastering DATA step processing, PDV (Program Data Vector), and informats/formats',
      'SAS Macro programming for automated reporting across hundreds of clinical datasets',
      'Clinical trial data standards: CDISC SDTM and ADaM mapping for FDA submissions'
    ],
    prerequisites: 'Foundational interest in statistics, healthcare, clinical research, or data analysis.',
    targetAudience: ['Pharmacy, Life Sciences, & Biotechnology Graduates', 'Statisticians and Data Analysts', 'Clinical Data Managers'],
    keySkills: ['Base SAS Programming', 'SAS Macros', 'PROC SQL', 'PROC REPORT & TABULATE', 'CDISC SDTM / ADaM', 'Statistical Graphics (ODS)'],
    toolsAndTech: ['SAS Studio', 'SAS Enterprise Guide', 'SAS 9.4', 'Base SAS Software'],
    curriculumModules: [
      {
        title: 'Module 1: Base SAS Syntax & DATA Step Mechanics',
        subtitle: 'Understanding the Program Data Vector and reading raw files',
        topics: [
          'SAS system overview: Libraries, temporary vs permanent datasets, SAS windowing environment',
          'Reading raw data: Column input, formatted input, list input, and delimiter handling',
          'The compilation and execution phase: How the Program Data Vector (PDV) operates',
          'Creating variables, conditional processing (IF-THEN-ELSE), and DO loops'
        ]
      },
      {
        title: 'Module 2: SAS Functions, Formats & Data Transformations',
        subtitle: 'Manipulating text, dates, numbers, and merging datasets',
        topics: [
          'Character, numeric, and date/time functions (SCAN, SUBSTR, COMPRESS, INTNX, YRDIF)',
          'Applying and defining user formats with PROC FORMAT',
          'Concatenating, interleaving, one-to-one merging, and match-merging with BY statements',
          'Transposing datasets using PROC TRANSPOSE for analytical readiness'
        ]
      },
      {
        title: 'Module 3: PROC SQL & Advanced Data Analytics',
        subtitle: 'Leveraging standard SQL capabilities natively inside the SAS engine',
        topics: [
          'Writing SELECT queries, WHERE clauses, and calculated columns in PROC SQL',
          'Joining multiple SAS datasets (Inner, Left, Right, Full Outer joins)',
          'Creating and updating tables, views, and integrity constraints',
          'Using PROC SQL subqueries and creating macro variables via INTO clause'
        ]
      },
      {
        title: 'Module 4: Enterprise SAS Macro Facility Programming',
        subtitle: 'Building dynamic, reusable, and parameter-driven macro programs',
        topics: [
          'Macro processing mechanics: Word scanner, macro processor, and symbol table',
          'Macro variables: Defining, resolving (%EVAL, %SYSFUNC), and scoping (Global vs Local)',
          'Writing macro programs with positional and keyword parameters',
          'Conditional macro processing (%IF-%THEN-%ELSE) and macro debugging (%PUT, MPRINT, SYMBOLGEN)'
        ]
      },
      {
        title: 'Module 5: Clinical Data Standards (CDISC) & Regulatory Reporting',
        subtitle: 'Preparing FDA-compliant clinical trial submissions',
        topics: [
          'Overview of Clinical Data Interchange Standards Consortium (CDISC)',
          'Mapping raw clinical data into SDTM (Study Data Tabulation Model) domains (DM, AE, LB, VS)',
          'Building ADaM (Analysis Data Model) datasets for statistical analysis (ADSL, ADAE)',
          'Generating clinical Tables, Listings, and Figures (TLFs) using PROC REPORT and ODS'
        ]
      }
    ],
    careerRoles: ['Statistical Programmer', 'SAS Programmer', 'Clinical SAS Programmer', 'Biostatistical Analyst'],
    avgSalary: '₹5.5 LPA - ₹14.0 LPA',
    topHiringCompanies: ['Novartis', 'Pfizer', 'IQVIA', 'Parexel', 'Covance', 'Cognizant', 'TCS']
  },

  {
    id: 'datastage',
    title: 'IBM InfoSphere DataStage Enterprise ETL Certification',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'IBM Certified Solution Developer',
    examCode: 'C1000-130 (IBM InfoSphere DataStage v11.7 Developer)',
    rating: '4.8',
    reviewsCount: '1,720+ Certified',
    tagline: 'Build high-performance parallel ETL pipelines using IBM InfoSphere DataStage Designer, Director, and Administrator.',
    overview:
      'IBM InfoSphere DataStage is a world-renowned enterprise ETL platform powering large-scale data warehouses across global banking, telecommunications, and healthcare enterprises. This course teaches parallel engine architecture, Transformer stages, Lookup vs Join stages, Change Capture, and Job Sequencer orchestration.',
    highlights: [
      'Aligined with official IBM C1000-130 DataStage Developer certification',
      'Mastering parallel processing: Pipeline and partition parallelism across CPU nodes',
      'In-depth stage configurations: Transformer, Remove Duplicates, Sort, Aggregator, Merge',
      'Automated batch job orchestration and dependency handling with Job Sequencers'
    ],
    prerequisites: 'Basic knowledge of SQL queries and relational database concepts.',
    targetAudience: ['ETL Developers', 'Data Engineers', 'DataStage Developers seeking official IBM certification'],
    keySkills: ['DataStage Parallel Engine', 'Partitioning Techniques', 'Transformer Stage', 'Lookup & Join Stages', 'Job Sequencer', 'Performance Tuning'],
    toolsAndTech: ['IBM InfoSphere DataStage 11.7', 'DataStage Designer', 'DataStage Director', 'DataStage Administrator', 'Oracle DB'],
    curriculumModules: [
      {
        title: 'Module 1: DataStage Architecture & Parallel Processing Engine',
        subtitle: 'Understanding the mechanics of multi-node parallel computing',
        topics: [
          'IBM InfoSphere Information Server architecture: Repository tier, Services tier, Engine tier, Client tier',
          'Parallel processing paradigms: Pipeline parallelism vs Partition parallelism',
          'Configuration file (.apt): Defining nodes, disk storage pools, and scratch spaces',
          'DataStage clients overview: Designer, Director, and Administrator'
        ]
      },
      {
        title: 'Module 2: File Stages & Partitioning Techniques',
        subtitle: 'Ingesting data and distributing workloads across parallel processing nodes',
        topics: [
          'Sequential File stage, Data Set stage, and File Set stage configurations',
          'Partitioning algorithms: Hash, Range, Modulo, Round-Robin, Entire, DB2/Same',
          'Collector algorithms: Round-Robin, Ordered, and Sort-Merge',
          'Avoiding re-partitioning overhead and preserving data sort orders'
        ]
      },
      {
        title: 'Module 3: Processing & Transformation Stages Deep-Dive',
        subtitle: 'Transforming, cleansing, and aggregating multi-million row datasets',
        topics: [
          'Transformer stage: Derivations, loop processing, stage variables, and system variables',
          'Restructuring data: Pivot stage, Column Export, and Column Import stages',
          'Sorting and deduplication: Sort stage, Remove Duplicates stage, and Filter stage',
          'Combining datasets: Join stage (Inner, Left, Full) vs Lookup stage (Normal vs Sparse) vs Merge stage'
        ]
      },
      {
        title: 'Module 4: Enterprise Database Integration & Job Sequencers',
        subtitle: 'Connecting to enterprise databases and automating multi-job flows',
        topics: [
          'Connector stages: Oracle Connector, DB2 Connector, and ODBC Connector configurations',
          'Bulk load configurations and managing database transaction commits',
          'Designing Job Sequencers: StartLoop, EndLoop, Notification Activity, Execute Command Activity',
          'Handling job dependencies, conditional routing, and automated failure alerts'
        ]
      },
      {
        title: 'Module 5: Monitoring, Debugging & IBM Certification Drills',
        subtitle: 'Using DataStage Director to analyze performance and pass the C1000-130 exam',
        topics: [
          'Monitoring job runs, interpreting log warnings, and setting up job parameters',
          'Performance tuning: Buffer sizing, identifying stage bottlenecks, and row-rate optimization',
          'IBM certification question bank drills and technical interview preparation'
        ]
      }
    ],
    careerRoles: ['DataStage Developer', 'ETL Specialist', 'Data Integration Engineer', 'Data Warehouse Consultant'],
    avgSalary: '₹6.5 LPA - ₹15.5 LPA',
    topHiringCompanies: ['TCS', 'IBM', 'Cognizant', 'Capgemini', 'Wipro', 'Citi', 'Barclays']
  },

  {
    id: 'talend',
    title: 'TALEND Open Studio Big Data & Data Integration Developer',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'Talend Academy / Qlik',
    examCode: 'Talend Data Integration Certified Developer',
    rating: '4.8',
    reviewsCount: '1,680+ Certified',
    tagline: 'Master open-source ETL pipelines, tMap data transformation, cloud integrations, and Big Data processing with Talend.',
    overview:
      'Talend is a modern, unified data integration platform that generates clean, native Java code under the hood. This curriculum teaches you to build data pipelines using Talend Open Studio, master the tMap transformation component, integrate with databases and REST APIs, handle context variables across environments, and process Big Data.',
    highlights: [
      'Aligined with official Talend Data Integration Certified Developer blueprint',
      'Mastering the tMap component: Filtering, expressions, joins, and reject handling',
      'Dynamic environment management using Context Variables and Context Groups',
      'Integrating with Big Data ecosystems (Hadoop, Hive) and cloud warehouses (Snowflake)'
    ],
    prerequisites: 'Basic knowledge of SQL queries and general programming concepts.',
    targetAudience: ['ETL Developers', 'Data Integration Engineers', 'Java Developers moving to Data Engineering'],
    keySkills: ['Talend Open Studio', 'tMap Transformation', 'Context Variables', 'Database Connectors', 'REST API Integration', 'Big Data Jobs'],
    toolsAndTech: ['Talend Open Studio 8.x', 'Java 17', 'PostgreSQL / MySQL', 'Snowflake', 'Postman'],
    curriculumModules: [
      {
        title: 'Module 1: Talend Architecture & Studio Workspace',
        subtitle: 'Understanding the code-generation model and workspace layout',
        topics: [
          'Talend architecture: Java code generation engine and workspace repository',
          'Studio layout: Repository, Design workspace, Component palette, Run console',
          'Creating projects, business models, and building your first data transfer job',
          'Connecting components using Trigger links (OnSubjobOk, OnComponentOk) and Row links (Main)'
        ]
      },
      {
        title: 'Module 2: File Handling, Metadata & Database Connectors',
        subtitle: 'Managing centralized schema metadata and database connectivity',
        topics: [
          'Centralized Metadata: File delimited, Excel, XML, and database connections',
          'Reading and writing files: tFileInputDelimited, tFileOutputExcel, tFileArchive',
          'Database connectivity: tDBConnection, tDBInput, tDBOutput, tDBCommit, and tDBRollback',
          'Handling transactional batches and database error rejections'
        ]
      },
      {
        title: 'Module 3: Advanced Transformation with the tMap Component',
        subtitle: 'The heart of Talend data transformations and mapping logic',
        topics: [
          'tMap architecture: Input tables, lookup tables, expression builder, output tables',
          'Lookup models: Load once vs Reload at each row, and lookup join types (Inner, Left Outer)',
          'Filtering rows at the mapping level and capturing unmatched reject rows',
          'Using custom Java functions and external Java libraries inside tMap expressions'
        ]
      },
      {
        title: 'Module 4: Environment Contexts, Error Handling & API Integration',
        subtitle: 'Promoting jobs across DEV, QA, and PROD with dynamic parameterization',
        topics: [
          'Creating Context Variables and Context Groups for environment configuration',
          'Passing dynamic runtime parameters from prompt dialogs and external files',
          'Logging and error handling: tLogRow, tLogCatcher, tDie, and tWarn',
          'Consuming REST APIs using tRESTClient and parsing JSON responses with tExtractJSONFields'
        ]
      },
      {
        title: 'Module 5: Job Orchestration, Cloud Deployment & Certification',
        subtitle: 'Building master orchestration workflows and certification review',
        topics: [
          'Designing master orchestration jobs using tRunJob and passing parameters',
          'Building standalone executable jobs (.zip) with embedded Java runtimes',
          'Overview of Talend Cloud and Big Data integration components (tHDFS, tHive)',
          'Talend Data Integration Certified Developer exam simulation and sample questions'
        ]
      }
    ],
    careerRoles: ['Talend Developer', 'ETL Integration Engineer', 'Data Engineer', 'Talend Consultant'],
    avgSalary: '₹6.0 LPA - ₹15.0 LPA',
    topHiringCompanies: ['Cognizant', 'Capgemini', 'TCS', 'Infosys', 'LTIMindtree', 'Wipro']
  },

  {
    id: 'qlikview',
    title: 'QlikView & Qlik Sense BI Developer Certification',
    category: 'AI & Data Science',
    level: 'Associate',
    image: dataAnalyticsImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'Qlik Qualified Associate / Developer Track',
    examCode: 'Qlik Sense Business Analyst & Data Architect Certification',
    rating: '4.8',
    reviewsCount: '1,520+ Certified',
    tagline: 'Master the Qlik Associative Engine, multi-tier data modeling with QVD files, and Set Analysis calculations.',
    overview:
      'Qlik’s patented Associative Engine allows business users to freely explore data in all directions without being restricted by pre-defined query paths. This curriculum covers in-memory architecture, multi-tier data architectures (extract, transform, presentation with QVDs), resolving synthetic keys and circular references, and mastering Set Analysis formulas.',
    highlights: [
      'Aligined with official Qlik Sense Business Analyst & Data Architect certifications',
      'Mastering the Qlik Associative Engine: Greys, Whites, and Greens logic',
      'Building scalable multi-tier architectures with optimized QVD files',
      'Advanced Set Analysis calculations for complex comparative KPI dashboards'
    ],
    prerequisites: 'Basic understanding of relational databases and SQL queries.',
    targetAudience: ['BI Developers', 'Data Analysts', 'Reporting Specialists', 'Business Intelligence Consultants'],
    keySkills: ['Qlik Associative Engine', 'Set Analysis', 'QVD Architecture', 'Data Modeling (Synthetic Keys)', 'Qlik Sense Visualizations', 'Section Access Security'],
    toolsAndTech: ['Qlik Sense Desktop / Cloud', 'QlikView 12', 'Qlik Management Console (QMC)', 'QVD Files'],
    curriculumModules: [
      {
        title: 'Module 1: Qlik Associative Engine & Platform Architecture',
        subtitle: 'How associative in-memory indexing differs from traditional SQL querying',
        topics: [
          'The Qlik Associative Engine: The power of Green (Selected), White (Possible), and Grey (Excluded)',
          'Qlik Sense vs QlikView: Modern self-service analytics vs guided dashboard development',
          'Qlik architecture: Qlik Management Console (QMC), Hub, Engine, and Proxy service'
        ]
      },
      {
        title: 'Module 2: Data Extraction, Scripting & QVD Layer Architecture',
        subtitle: 'Extracting data and building an enterprise QVD data layer',
        topics: [
          'Data Load Editor: Scripting syntax, Load statements, and Inline tables',
          'Connecting to databases via ODBC/OLEDB and cloud storage buckets',
          'The 3-tier QVD architecture: Raw Extraction QVDs, Transformed Business QVDs, App Model',
          'Optimized vs Non-optimized QVD loads and incremental load strategies'
        ]
      },
      {
        title: 'Module 3: Advanced Data Modeling & Resolving Anomalies',
        subtitle: 'Building clean associative data models without performance degradation',
        topics: [
          'Identifying and resolving Synthetic Keys and Circular References',
          'Techniques for combining tables: Concatenation (Implicit, Explicit) vs Join (Left, Right, Inner, Outer)',
          'Handling slowly changing dimensions, interval matches (IntervalMatch), and master calendars',
          'Link tables vs Concatenated fact tables for multi-fact architectures'
        ]
      },
      {
        title: 'Module 4: Advanced Calculations & Set Analysis Mastery',
        subtitle: 'The secret weapon for building advanced enterprise KPI calculations',
        topics: [
          'Set Analysis syntax: Identifiers (1, $, $1), Operators (+, -, *, /), and Modifiers',
          'Building complex conditional metrics (e.g. Current Year vs Previous Year sales)',
          'Using Dollar-Sign Expansion with variables and search strings in Set Analysis',
          'Aggr() function mechanics for nested aggregations and dynamic segmentation'
        ]
      },
      {
        title: 'Module 5: Visual Dashboard Design & Qlik Certification Drills',
        subtitle: 'Designing executive dashboards and certification exam prep',
        topics: [
          'Designing visual sheets: Bar charts, Scatter plots, Treemaps, and KPI scorecards',
          'Data storytelling, responsive layouts, and user bookmarks',
          'Implementing row-level and column-level data security with Section Access',
          'Qlik Sense Data Architect certification mock exams and scenario drills'
        ]
      }
    ],
    careerRoles: ['Qlik Developer', 'Qlik Sense Consultant', 'BI Visual Specialist', 'Data Analytics Architect'],
    avgSalary: '₹6.0 LPA - ₹14.5 LPA',
    topHiringCompanies: ['Cognizant', 'Capgemini', 'TCS', 'Wipro', 'HCLTech', 'Infosys']
  },

  {
    id: 'analytics',
    title: 'Advanced Business Analytics & Power BI Certification',
    category: 'AI & Data Science',
    level: 'Associate',
    image: dataAnalyticsImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Microsoft Certified: Power BI Data Analyst',
    examCode: 'PL-300 (Microsoft Power BI Data Analyst)',
    badge: 'Premier BI Standard',
    rating: '4.9',
    reviewsCount: '5,600+ Certified',
    tagline: 'Transform raw corporate data into interactive executive dashboards using Power Query, DAX modeling, and Power BI Service.',
    overview:
      'Microsoft Power BI is the uncontested leader in corporate business intelligence. This PL-300 aligned certification curriculum teaches you to extract data from disparate databases, clean and reshape datasets using Power Query (M code), build star schemas, write advanced DAX formulas (CALCULATE, time intelligence), and publish reports to Power BI Service.',
    highlights: [
      'Comprehensive preparation for official Microsoft PL-300 certification exam',
      'Advanced data cleansing and transformation using Power Query (M Language)',
      'Mastering DAX (Data Analysis Expressions): Row context, Filter context, CALCULATE',
      'Deploying row-level security (RLS) and scheduled data refreshes on Power BI Cloud'
    ],
    prerequisites: 'Basic knowledge of Excel. No prior coding or database experience needed.',
    targetAudience: ['Business Analysts and Financial Analysts', 'Reporting Specialists moving to modern BI', 'Fresh Graduates seeking high-growth analyst roles', 'Managers tracking KPIs'],
    keySkills: ['Power Query (M Code)', 'Data Modeling (Star Schema)', 'DAX Formulas', 'Interactive Visuals', 'Power BI Service', 'Row-Level Security (RLS)'],
    toolsAndTech: ['Power BI Desktop', 'Power BI Service', 'Power Query', 'DAX Studio', 'SQL Server / Excel'],
    curriculumModules: [
      {
        title: 'Module 1: Ingesting & Transforming Data with Power Query',
        subtitle: 'Automating repetitive data cleanup workflows using M language',
        topics: [
          'Connecting to diverse data sources: Excel, CSV, SQL Server, SharePoint, Web APIs',
          'Power Query transformations: Splitting columns, unpivoting, merging, appending, and group-by',
          'Cleaning dirty data: Missing values, changing data types, removing duplicate rows',
          'Understanding the Applied Steps sequence and basic M code formulas'
        ]
      },
      {
        title: 'Module 2: Enterprise Data Modeling & Relationship Cardinality',
        subtitle: 'Designing optimal star schemas for blazing fast analytical queries',
        topics: [
          'Designing Star Schemas: Separating Fact tables from Dimension tables',
          'Relationship cardinalities: One-to-Many (1:*), Many-to-One (*:1), Many-to-Many (*:*)',
          'Cross-filter direction (Single vs Both) and managing relationship ambiguity',
          'Building dynamic Date/Calendar tables using DAX (CALENDAR, CALENDARAUTO)'
        ]
      },
      {
        title: 'Module 3: DAX (Data Analysis Expressions) Mastery - Part 1',
        subtitle: 'Foundations of computed measures, calculated columns, and context',
        topics: [
          'Calculated Columns vs DAX Measures: Performance and memory trade-offs',
          'Understanding Evaluation Context: Row Context vs Filter Context',
          'Standard aggregation functions: SUM, AVERAGE, COUNTROWS, DISTINCTCOUNT',
          'Iterating functions: SUMX, AVERAGEX, and context transition'
        ]
      },
      {
        title: 'Module 4: Advanced DAX & Time Intelligence Formulas',
        subtitle: 'The power of CALCULATE, filter modification, and period-over-period comparisons',
        topics: [
          'Mastering the CALCULATE function: Modifying and replacing filter context',
          'Filter modification functions: ALL, ALLEXCEPT, ALLSELECTED, FILTER, VALUES',
          'Time Intelligence calculations: YTD, QTD, MTD, SAMEPERIODLASTYEAR, DATEADD',
          'Optimizing DAX query performance and profiling memory using DAX Studio'
        ]
      },
      {
        title: 'Module 5: Visual Storytelling, Cloud Service & PL-300 Certification',
        subtitle: 'Publishing enterprise dashboards, security governance, and exam drills',
        topics: [
          'Interactive visualizations: Drill-through pages, bookmarks, tooltips, and custom visual themes',
          'Power BI Service: Workspaces, Apps, Dashboards, and scheduled gateway refreshes',
          'Row-Level Security (RLS) configuration for departmental data privacy',
          'Microsoft PL-300 certification practice exam drills and voucher guidance'
        ]
      }
    ],
    careerRoles: ['Power BI Developer', 'Business Intelligence Analyst', 'Data Analyst', 'Reporting Specialist', 'BI Consultant'],
    avgSalary: '₹5.5 LPA - ₹14.0 LPA',
    topHiringCompanies: ['Microsoft', 'Accenture', 'EY', 'Deloitte', 'PwC', 'KPMG', 'TCS', 'Cognizant']
  },

  {
    id: 'excel-vba',
    title: 'Advanced Excel & VBA Macro Automation Certification',
    category: 'AI & Data Science',
    level: 'Associate',
    image: dataAnalyticsImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'Microsoft Office Specialist (MOS) Expert Aligned',
    examCode: 'MO-201 (Microsoft Excel Expert)',
    rating: '4.8',
    reviewsCount: '3,800+ Certified',
    tagline: 'Master advanced spreadsheet modeling, dynamic array formulas, Power Pivot, and automated VBA Macros.',
    overview:
      'Excel remains the universal lingua franca of business finance, accounting, and operations worldwide. This curriculum elevates you from standard spreadsheet user to advanced automation expert. You will master modern dynamic array formulas (XLOOKUP, FILTER, UNIQUE), Power Pivot data modeling, and write automated Visual Basic for Applications (VBA) macro routines.',
    highlights: [
      'Aligined with official Microsoft Office Specialist (MO-201) Excel Expert blueprint',
      'Mastering modern dynamic array formulas: XLOOKUP, FILTER, SORT, UNIQUE',
      'Building automated business dashboards with Pivot Tables, Slicers, and Timelines',
      'Developing automated Visual Basic for Applications (VBA) macros with custom UserForms'
    ],
    prerequisites: 'Basic familiarity with Microsoft Excel. No coding or computer science background needed.',
    targetAudience: ['Finance and Accounting Professionals', 'Business Analysts and Operations Managers', 'HR and Administration Executives', 'Fresh Graduates'],
    keySkills: ['Dynamic Array Formulas (XLOOKUP)', 'Pivot Tables & Slicers', 'Power Pivot & Data Model', 'VBA Macro Programming', 'UserForms & Event Triggers', 'What-If Analysis'],
    toolsAndTech: ['Microsoft Excel 365 / 2021', 'VBA Editor (ALT+F11)', 'Power Pivot', 'Power Query in Excel'],
    curriculumModules: [
      {
        title: 'Module 1: Advanced Formulas & Dynamic Array Functions',
        subtitle: 'Next-generation calculation engines replacing legacy lookups',
        topics: [
          'Mastering XLOOKUP vs VLOOKUP/INDEX-MATCH: Exact match, approximate match, reverse search',
          'Dynamic Array formulas: FILTER, SORT, SORTBY, UNIQUE, SEQUENCE, and RANDARRAY',
          'Logical and conditional functions: Nested IFS, SWITCH, SUMIFS, COUNTIFS, and IFERROR',
          'Text and date functions: TEXTSPLIT, TEXTJOIN, LAMBDA helper functions, and WORKDAY.INTL'
        ]
      },
      {
        title: 'Module 2: Interactive Data Analysis with Pivot Tables & Power Pivot',
        subtitle: 'Summarizing multi-thousand row datasets without writing a single line of code',
        topics: [
          'Pivot Table architecture: Calculated Fields, Calculated Items, and grouping dates/numbers',
          'Interactive filtering using multi-connected Slicers and interactive Timelines',
          'Power Pivot: Loading data into the Excel Data Model and creating 1-to-many relationships',
          'Writing introductory DAX measures inside Excel for advanced margin and ratio analysis'
        ]
      },
      {
        title: 'Module 3: Advanced Business Modeling & Scenario Analysis',
        subtitle: 'Decision-making utilities for budgeting, forecasting, and optimization',
        topics: [
          'What-If Analysis: Data Tables (One-variable and Two-variable sensitivity matrices)',
          'Goal Seek for reverse target calculations and Scenario Manager for budget forecasts',
          'Excel Solver: Linear programming for optimal cost minimization and resource allocation',
          'Advanced conditional formatting using custom formula rules and data bars'
        ]
      },
      {
        title: 'Module 4: VBA Macro Programming Fundamentals',
        subtitle: 'Automating repetitive manual reporting tasks using Visual Basic code',
        topics: [
          'The Excel Object Model: Application, Workbook, Worksheet, and Range objects',
          'VBA syntax: Variables, data types, Option Explicit, and variable scope',
          'Control structures: If-Then-Else, Select Case, For Next, For Each, and Do While loops',
          'Referencing cells and dynamic ranges using Cells(r,c), Range(), and End(xlUp)'
        ]
      },
      {
        title: 'Module 5: Custom UserForms, Event Automation & Project Deployment',
        subtitle: 'Building automated data entry applications and macro tools',
        topics: [
          'Designing custom UserForms: Textboxes, ComboBoxes, Option buttons, and validation',
          'Worksheet and Workbook events: Worksheet_Change, Workbook_Open automated routines',
          'Speeding up VBA macro execution (ScreenUpdating, Calculation, DisplayAlerts)',
          'Building an automated daily consolidation macro compiling data from 50+ files in seconds'
        ]
      }
    ],
    careerRoles: ['MIS Executive', 'Financial Analyst', 'Senior Operations Analyst', 'VBA Macro Developer', 'Business Analyst'],
    avgSalary: '₹4.2 LPA - ₹9.5 LPA',
    topHiringCompanies: ['JPMorgan Chase', 'Genpact', 'EY', 'Deloitte', 'Amazon', 'Wipro', 'TCS']
  },

  {
    id: 'matlab',
    title: 'MATLAB Numerical Computation & Modeling Certification',
    category: 'AI & Data Science',
    level: 'Professional',
    image: dataAnalyticsImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'MathWorks Certified Track Aligned',
    examCode: 'MathWorks Certified MATLAB Associate',
    rating: '4.8',
    reviewsCount: '1,320+ Certified',
    tagline: 'Master matrix algorithms, numerical computation, signal processing, and Simulink system modeling.',
    overview:
      'MATLAB (Matrix Laboratory) is the premier computational environment used by engineers, quantitative financial modelers, and research scientists worldwide. This curriculum covers matrix algorithms, numerical solvers, data visualization, signal processing, curve fitting, and dynamical system simulation in Simulink.',
    highlights: [
      'Aligined with official MathWorks Certified MATLAB Associate blueprint',
      'High-performance matrix mathematics, linear algebra solvers, and differential equations',
      'Signal processing and filtering algorithms with the Signal Processing Toolbox',
      'Simulating physical dynamical systems and control loops using Simulink'
    ],
    prerequisites: 'Basic knowledge of engineering mathematics (linear algebra, calculus).',
    targetAudience: ['Engineering Students and Researchers (ECE, EEE, Mechanical, Aerospace)', 'Quantitative Finance Analysts', 'Data Scientists modeling physical systems'],
    keySkills: ['Matrix Computations', 'Numerical Solvers (ODE)', 'Simulink System Modeling', 'Signal Processing Toolbox', 'Curve Fitting & Interpolation'],
    toolsAndTech: ['MATLAB R2023b / R2024', 'Simulink', 'Signal Processing Toolbox', 'Optimization Toolbox'],
    curriculumModules: [
      {
        title: 'Module 1: MATLAB Environment & Vectorized Computing',
        subtitle: 'Mastering matrix manipulation and the MATLAB command workspace',
        topics: [
          'The MATLAB workspace: Command window, editor, workspace browser, and path management',
          'Creating vectors and matrices: Colon operator, linspace, eye, zeros, and ones',
          'Matrix operations vs Array element-wise operations (.*, ./, .^)',
          'Matrix indexing, slicing, logical masks, and multidimensional arrays'
        ]
      },
      {
        title: 'Module 2: Programming Logic & Function Architecture',
        subtitle: 'Writing modular computational scripts and custom algorithms',
        topics: [
          'Writing script files (.m) and function files with input/output arguments',
          'Control flow: If-else structures, switch-case, for loops, and while loops',
          'Vectorization techniques for eliminating computationally expensive loops',
          'Handling diverse data structures: Cell arrays, structures, and tables'
        ]
      },
      {
        title: 'Module 3: Advanced Data Visualization & Curve Fitting',
        subtitle: 'Generating publication-quality 2D and 3D scientific plots',
        topics: [
          '2D plotting: plot, subplot, scatter, stem, bar, and customizing titles/legends',
          '3D plotting: mesh, surf, contour, and camera viewing perspectives',
          'Data import/export utilities for Excel, CSV, and binary data files',
          'Curve fitting: Polynomial regression (polyfit, polyval) and nonlinear curve fitting tools'
        ]
      },
      {
        title: 'Module 4: Numerical Methods & Signal Processing',
        subtitle: 'Solving differential equations and frequency-domain analysis',
        topics: [
          'Numerical root finding (fzero), optimization (fminsearch), and integration (integral)',
          'Solving Ordinary Differential Equations (ODEs) using ode45 and ode23 solvers',
          'Discrete Fourier Transform (FFT) and frequency spectrum analysis',
          'Designing digital filters (FIR, IIR) using the Filter Designer app'
        ]
      },
      {
        title: 'Module 5: Simulink Dynamic Simulation & Certification Drills',
        subtitle: 'Model-based design for control systems and MathWorks exam prep',
        topics: [
          'Simulink basics: Sources, sinks, continuous blocks, discrete blocks, and scopes',
          'Modeling physical systems (e.g. Mass-spring-damper, RLC electrical circuits)',
          'Simulating feedback control systems with PID controllers',
          'MathWorks Certified MATLAB Associate sample exam drills and problem walkthroughs'
        ]
      }
    ],
    careerRoles: ['MATLAB Developer', 'Algorithm Engineer', 'Control Systems Engineer', 'Quantitative Modeling Analyst'],
    avgSalary: '₹5.5 LPA - ₹13.5 LPA',
    topHiringCompanies: ['MathWorks', 'Bosch', 'Continental', 'Honeywell', 'Tata Elxsi', 'ISRO / DRDO Ecosystem']
  },

  // =========================================================================
  // 7. FULL STACK & PROGRAMMING
  // =========================================================================
  {
    id: 'java-j2ee',
    title: 'JAVA / J2EE Enterprise Developer Certification',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: javaGenAiImg,
    duration: '75 Hrs (Weekday / Weekend)',
    provider: 'Oracle Certified Java SE Aligned',
    examCode: '1Z0-819 (Oracle Certified Professional: Java SE 11/17 Developer)',
    badge: 'Enterprise Core Foundation',
    rating: '4.9',
    reviewsCount: '7,200+ Certified',
    tagline: 'Master modern Java (17/21), Object-Oriented Design, Spring Boot microservices, Hibernate ORM, and cloud REST APIs.',
    overview:
      'Java is the most resilient, high-performance enterprise programming language in the world, powering 90% of Fortune 500 backend systems. This curriculum covers modern Java SE (17 & 21 LTS), OOP architecture, Collections, Streams & Lambdas, multithreading, Spring Boot 3 microservices, Hibernate ORM, and Docker deployment.',
    highlights: [
      'Aligined with official Oracle 1Z0-819 Java SE Developer certification',
      'Modern Java 17/21 features: Records, Pattern Matching, Sealed Classes, Virtual Threads',
      'Building production RESTful microservices with Spring Boot 3 and Spring Data JPA',
      'Database integration with Hibernate/JPA, MySQL, and Docker containerization'
    ],
    prerequisites: 'Basic knowledge of logical reasoning. No previous programming experience required.',
    targetAudience: ['Fresh Graduates targeting software engineering roles', 'Developers switching to Java backend engineering', 'Full Stack developers needing solid backend skills'],
    keySkills: ['Java 17/21 LTS', 'OOP Architecture', 'Java Collections & Streams', 'Spring Boot 3', 'Hibernate ORM / JPA', 'RESTful Microservices', 'JUnit 5 & Mockito'],
    toolsAndTech: ['IntelliJ IDEA / Eclipse', 'Java 17/21', 'Spring Boot 3', 'Maven', 'MySQL', 'Postman', 'Docker', 'Git'],
    curriculumModules: [
      {
        title: 'Module 1: Core Java Programming & Object-Oriented Principles',
        subtitle: 'Solid foundations of class hierarchies, polymorphism, and memory management',
        topics: [
          'Java architecture: JVM, JRE, JDK, bytecode compilation, and garbage collection',
          'Data types, operators, control flow statements, and memory allocation (Stack vs Heap)',
          'OOPs principles: Classes, Objects, Inheritance, Encapsulation, Polymorphism, Abstraction',
          'Abstract classes vs Interfaces, modern default and static interface methods'
        ]
      },
      {
        title: 'Module 2: Java Collections Framework & Modern Functional Streams',
        subtitle: 'High-performance data structures and functional programming',
        topics: [
          'Collections hierarchy: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap)',
          'Comparable and Comparator interfaces for custom sorting algorithms',
          'Lambda expressions, Functional Interfaces (@FunctionalInterface, Predicate, Function, Consumer)',
          'Stream API: filter, map, flatMap, reduce, collect, and parallel stream processing'
        ]
      },
      {
        title: 'Module 3: Exception Handling, Concurrency & Virtual Threads',
        subtitle: 'Building resilient, crash-proof, multi-threaded server systems',
        topics: [
          'Checked vs Unchecked exceptions, try-catch-finally, try-with-resources, and custom exceptions',
          'Multithreading: Thread lifecycle, Runnable interface, synchronization, and race conditions',
          'Java Concurrency Utilities: ExecutorService, Callable, Future, and Thread Pools',
          'Java 21 Project Loom: Virtual Threads for lightweight, massive scale concurrency'
        ]
      },
      {
        title: 'Module 4: Persistence with Hibernate & Spring Data JPA',
        subtitle: 'Eliminating raw SQL with industry-standard Object-Relational Mapping',
        topics: [
          'JDBC fundamentals and understanding Object-Relational Mapping (ORM)',
          'Hibernate/JPA architecture: Entities, annotations (@Entity, @Table, @Id, @GeneratedValue)',
          'Entity relationships: @OneToOne, @OneToMany, @ManyToOne, and @ManyToMany with cascades',
          'Spring Data JPA: JpaRepository, derived query methods, and custom JPQL queries'
        ]
      },
      {
        title: 'Module 5: Spring Boot 3 Microservices & Oracle Exam Prep',
        subtitle: 'Building and securing enterprise REST APIs and certification drills',
        topics: [
          'Spring Boot architecture: Dependency Injection, Inversion of Control (IoC), and Auto-Configuration',
          'Building RESTful APIs: @RestController, @GetMapping, @PostMapping, and ResponseEntity',
          'Validation (@Valid), centralized exception handling with @RestControllerAdvice',
          'Unit testing with JUnit 5 and Mockito; Oracle 1Z0-819 certification mock review'
        ]
      }
    ],
    careerRoles: ['Java Backend Developer', 'Spring Boot Engineer', 'Full Stack Java Developer', 'Software Engineer', 'Microservices Architect'],
    avgSalary: '₹6.0 LPA - ₹16.5 LPA',
    topHiringCompanies: ['Amazon', 'Oracle', 'JPMorgan Chase', 'Cognizant', 'TCS', 'Infosys', 'Capgemini']
  },

  {
    id: 'dot-net',
    title: 'Microsoft .NET Core & C# Full Stack Certification',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: javaGenAiImg,
    duration: '70 Hrs (Weekday / Weekend)',
    provider: 'Microsoft Certified: Azure Developer / .NET Track',
    examCode: 'AZ-204 (Developing Solutions for Microsoft Azure) / .NET Specialty',
    badge: 'Enterprise Microsoft Standard',
    rating: '4.8',
    reviewsCount: '4,300+ Certified',
    tagline: 'Build cross-platform web APIs and enterprise microservices using C#, ASP.NET Core 8, and Entity Framework Core.',
    overview:
      'Microsoft’s cross-platform .NET 8 framework is among the fastest, most scalable backend stacks on the planet. This curriculum teaches modern C#, ASP.NET Core Web APIs, dependency injection, Entity Framework Core (EF Core) database migrations, JWT authentication, and deploying cloud-native .NET applications to Microsoft Azure.',
    highlights: [
      'Aligined with modern .NET 8 LTS standards and Azure AZ-204 developer exam',
      'Deep dive into C# 12: Pattern matching, records, async/await, and LINQ',
      'Building RESTful microservices with ASP.NET Core and Minimal APIs',
      'Database operations with Entity Framework Core (Code-First migrations)'
    ],
    prerequisites: 'Basic understanding of object-oriented programming concepts in any language.',
    targetAudience: ['C# / .NET Developers upgrading to .NET 8 Core', 'Fresh Graduates seeking enterprise software engineering roles', 'Legacy .NET Framework developers modernizing skills'],
    keySkills: ['C# 12', 'ASP.NET Core 8 Web API', 'Entity Framework Core', 'LINQ Queries', 'JWT Authentication', 'Azure App Services', 'SQL Server'],
    toolsAndTech: ['Visual Studio 2022', 'C# 12', '.NET 8 SDK', 'SQL Server / SSMS', 'Postman', 'Docker', 'Azure'],
    curriculumModules: [
      {
        title: 'Module 1: C# Programming & Object-Oriented Architecture',
        subtitle: 'Mastering modern C# syntax, types, and architectural patterns',
        topics: [
          '.NET architecture: Common Language Runtime (CLR), Common Intermediate Language (CIL), cross-platform runtime',
          'Data types, value types vs reference types, nullable types, and memory allocation',
          'OOP in C#: Classes, objects, inheritance, interfaces, abstract classes, and encapsulation',
          'Modern C# features: Records, pattern matching, top-level statements, and string interpolation'
        ]
      },
      {
        title: 'Module 2: Generics, Collections & Language Integrated Query (LINQ)',
        subtitle: 'Manipulating in-memory data structures with expressive functional syntax',
        topics: [
          'Generic classes and methods (List<T>, Dictionary<TKey, TValue>, HashSet<T>)',
          'Delegates, Action<T>, Func<T>, and anonymous lambda expressions',
          'Language Integrated Query (LINQ): Query syntax vs Method syntax',
          'LINQ operations: Where, Select, OrderBy, GroupBy, Join, Any, All, and FirstOrDefault'
        ]
      },
      {
        title: 'Module 3: Asynchronous Programming & ASP.NET Core Web APIs',
        subtitle: 'Building non-blocking, high-throughput web services',
        topics: [
          'Asynchronous programming: Task, Task<T>, async and await keyword mechanics',
          'ASP.NET Core architecture: Middleware pipeline, Request lifecycle, Dependency Injection container',
          'Building RESTful APIs: Controllers, routing attributes, action results, and status codes',
          'Creating fast, lightweight endpoints using modern Minimal APIs'
        ]
      },
      {
        title: 'Module 4: Data Access with Entity Framework Core (EF Core)',
        subtitle: 'Code-First database migrations and relational data persistence',
        topics: [
          'EF Core architecture: DbContext, DbSet, and connection string configurations',
          'Code-First modeling: Data Annotations vs Fluent API configuration',
          'Managing database migrations (dotnet ef migrations add / update)',
          'Executing LINQ queries against EF Core: Eager loading (Include), Explicit loading, and Lazy loading'
        ]
      },
      {
        title: 'Module 5: Security, Azure Deployment & Certification Coaching',
        subtitle: 'Securing web APIs with JWT tokens and containerizing for cloud',
        topics: [
          'Authentication and authorization: Implementing JSON Web Tokens (JWT) and role-based policies',
          'Global error handling, input validation using FluentValidation, and Swagger/OpenAPI documentation',
          'Containerizing .NET applications with Docker and deploying to Azure App Services',
          'Microsoft certification exam patterns and technical interview preparation'
        ]
      }
    ],
    careerRoles: ['.NET Developer', 'C# Backend Engineer', 'Full Stack .NET Developer', 'Software Engineer', 'Azure .NET Consultant'],
    avgSalary: '₹5.5 LPA - ₹15.5 LPA',
    topHiringCompanies: ['Microsoft', 'Cognizant', 'TCS', 'HCLTech', 'Accenture', 'Wipro', 'Mindtree']
  },

  {
    id: 'php',
    title: 'PHP & Laravel Modern Web Application Certification',
    category: 'Full Stack & Programming',
    level: 'Associate',
    image: javaGenAiImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'Zend / Web Certified PHP Engineer Aligned',
    examCode: 'Zend Certified PHP Engineer',
    rating: '4.8',
    reviewsCount: '2,800+ Certified',
    tagline: 'Build scalable modern web applications and REST APIs using modern PHP 8, Laravel, Eloquent ORM, and MySQL.',
    overview:
      'PHP powers over 75% of dynamic websites across the internet, including massive CMS ecosystems. This curriculum brings you up to speed with modern PHP 8 (typed properties, match expressions, attributes) and the world’s most popular PHP framework: Laravel. You will learn MVC architecture, Eloquent ORM, Blade templating, authentication, and REST API development.',
    highlights: [
      'Modern PHP 8.x: Strict types, arrow functions, match expressions, and OOP design',
      'The complete Laravel framework: Routing, Controllers, Middleware, Blade, and Artisan CLI',
      'Database persistence with Eloquent ORM, Migrations, and Seeders',
      'API authentication using Laravel Sanctum and building secure JSON endpoints'
    ],
    prerequisites: 'Basic knowledge of HTML and CSS. No prior backend programming experience required.',
    targetAudience: ['Aspiring Full Stack Web Developers', 'Frontend Developers adding backend PHP skills', 'WordPress developers upgrading to custom Laravel applications'],
    keySkills: ['PHP 8.x', 'Laravel MVC', 'Eloquent ORM', 'MySQL Database', 'RESTful API Development', 'Authentication (Sanctum)', 'Blade Templates'],
    toolsAndTech: ['PHP 8.2/8.3', 'Laravel 11', 'Composer', 'MySQL', 'Postman', 'VS Code', 'Git'],
    curriculumModules: [
      {
        title: 'Module 1: Modern PHP 8 Fundamentals & OOP Architecture',
        subtitle: 'Clean server-side programming with modern type safety',
        topics: [
          'PHP syntax, variables, data types, superglobals ($_GET, $_POST, $_SESSION, $_COOKIE)',
          'Modern PHP 8 features: Typed properties, union types, match expressions, nullsafe operator',
          'Object-Oriented PHP: Classes, objects, constructors, inheritance, interfaces, and traits',
          'Composer dependency manager and PSR-4 autoloading standards'
        ]
      },
      {
        title: 'Module 2: Laravel Architecture & MVC Routing',
        subtitle: 'The elegant framework for web artisans',
        topics: [
          'Laravel directory structure, configuration files, and the Artisan command line tool',
          'Routing: Route parameters, named routes, route groups, and middleware assignment',
          'Controllers: Resource controllers, single-action controllers, and dependency injection',
          'Blade templating engine: Master layouts, components, slots, directives (@if, @foreach)'
        ]
      },
      {
        title: 'Module 3: Database Migrations & Eloquent ORM',
        subtitle: 'Graceful database modeling without raw SQL queries',
        topics: [
          'Database migrations: Defining table schemas, column types, and foreign key constraints',
          'Database seeders and Model Factories for generating mock testing data',
          'Eloquent ORM: Active Record pattern, mass assignment, and mutators/accessors',
          'Eloquent relationships: One-to-One, One-to-Many, Many-to-Many with pivot tables'
        ]
      },
      {
        title: 'Module 4: Authentication, Forms & API Development',
        subtitle: 'Securing user sessions and exposing RESTful services',
        topics: [
          'Form validation using Form Request classes and CSRF token protection',
          'Authentication systems: User registration, login, password resets, and role middleware',
          'Building RESTful APIs: API Resource classes for JSON formatting and transformation',
          'Token-based API authentication with Laravel Sanctum'
        ]
      },
      {
        title: 'Module 5: Capstone Application Build & Deployment',
        subtitle: 'Launching a full-stack e-commerce or SaaS application',
        topics: [
          'Building a full e-commerce portal with shopping cart, checkout, and order history',
          'File uploads and storage management using the Laravel Storage facade',
          'Deploying Laravel applications to production Linux VPS servers (Nginx, PHP-FPM, MySQL)',
          'Technical interview preparation and Zend certification exam review'
        ]
      }
    ],
    careerRoles: ['PHP Developer', 'Laravel Developer', 'Full Stack Web Developer', 'Backend Software Engineer'],
    avgSalary: '₹4.5 LPA - ₹11.5 LPA',
    topHiringCompanies: ['Zoho', 'Cognizant', 'TCS', 'Tech Mahindra', 'Wipro', 'Webflow Ecosystem', 'Freshworks']
  },

  {
    id: 'ionic',
    title: 'Ionic Cross-Platform Mobile App Development',
    category: 'Full Stack & Programming',
    level: 'Associate',
    image: javaGenAiImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'Ionic Framework Certified Developer',
    examCode: 'Certified Cross-Platform Mobile App Developer',
    rating: '4.8',
    reviewsCount: '1,750+ Certified',
    tagline: 'Build native iOS and Android apps from a single web codebase using Ionic, Angular/React, and Capacitor.',
    overview:
      'Ionic allows developers to build beautiful, high-performance native iOS and Android applications using familiar web technologies (HTML, CSS, TypeScript) coupled with Angular, React, or Vue. This course teaches cross-platform UI components, state management, offline storage, and accessing native device hardware (Camera, GPS, Biometrics) using Capacitor.',
    highlights: [
      'Single codebase generating production apps for both Apple App Store and Google Play',
      'Rich library of adaptive mobile UI components matching native iOS and Material Design',
      'Native device hardware integration via Capacitor plugins (Camera, Geolocation, Push Notifications)',
      'Building offline-first applications with SQLite local storage'
    ],
    prerequisites: 'Basic knowledge of HTML, CSS, and modern JavaScript or TypeScript.',
    targetAudience: ['Web Developers wanting to build mobile apps', 'Frontend Engineers (Angular/React)', 'Freelancers building mobile client apps'],
    keySkills: ['Ionic Framework', 'Capacitor', 'Angular / React with Ionic', 'Mobile UI Components', 'Native Device APIs (Camera, GPS)', 'App Store Deployment'],
    toolsAndTech: ['Ionic CLI', 'Capacitor', 'Android Studio', 'Xcode (for iOS)', 'TypeScript', 'VS Code'],
    curriculumModules: [
      {
        title: 'Module 1: Ionic Architecture & Mobile UI Component Library',
        subtitle: 'Foundations of cross-platform hybrid mobile applications',
        topics: [
          'Hybrid vs Native mobile architecture: Web views, bridge communication, and performance',
          'Ionic CLI setup, project templates (tabs, sidemenu, blank), and live reload testing',
          'Adaptive styling: How Ionic automatically matches iOS and Android Material Design',
          'Ionic UI components: ion-card, ion-list, ion-item, ion-button, ion-modal, ion-slides'
        ]
      },
      {
        title: 'Module 2: Navigation Patterns & Form Validation',
        subtitle: 'Building intuitive mobile user flows and inputs',
        topics: [
          'Mobile navigation: Stack navigation, tabs routing, split-pane layouts for tablets',
          'Lifecycle hooks: ionViewWillEnter, ionViewDidEnter, ionViewWillLeave',
          'Mobile form controls: ion-input, ion-textarea, ion-select, ion-datetime, ion-toggle',
          'Reactive form validation and user feedback toasts / alerts'
        ]
      },
      {
        title: 'Module 3: Native Device Hardware Access with Capacitor',
        subtitle: 'Interacting with smartphone cameras, location, and storage',
        topics: [
          'Capacitor architecture: Replacing legacy Cordova with modern web standards',
          'Camera API: Capturing photos and selecting images from the device gallery',
          'Geolocation API: Accessing GPS coordinates and displaying interactive maps',
          'Device storage: Storing persistent data using Preferences and SQLite'
        ]
      },
      {
        title: 'Module 4: Consuming REST APIs & State Management',
        subtitle: 'Connecting mobile frontends to cloud backends',
        topics: [
          'Making HTTP requests to external REST endpoints with authentication headers',
          'Managing loading spinners (ion-loading), pull-to-refresh (ion-refresher), and infinite scroll',
          'State management patterns for syncing user profiles and application state',
          'Offline caching strategies for handling intermittent network connectivity'
        ]
      },
      {
        title: 'Module 5: Building Native Binaries & App Store Deployment',
        subtitle: 'Generating production APK/AAB and iOS IPA packages',
        topics: [
          'Generating Android Studio projects with Capacitor CLI and building release APKs',
          'Setting app icons, splash screens, permissions (AndroidManifest.xml, Info.plist)',
          'Configuring push notifications using Firebase Cloud Messaging (FCM)',
          'Step-by-step submission guidelines for Google Play Console and Apple App Store'
        ]
      }
    ],
    careerRoles: ['Mobile App Developer', 'Ionic Developer', 'Cross-Platform Mobile Engineer', 'Frontend Mobile Specialist'],
    avgSalary: '₹5.0 LPA - ₹12.0 LPA',
    topHiringCompanies: ['TCS', 'Cognizant', 'Infosys', 'Tech Mahindra', 'Wipro', 'Mindtree']
  },

  {
    id: 'shell-perl',
    title: 'SHELL Scripting & PERL Enterprise Automation',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: certNetworkInfraImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'SysAdmin Council Aligned',
    examCode: 'Certified Enterprise Automation Scripting Specialist',
    rating: '4.8',
    reviewsCount: '2,150+ Certified',
    tagline: 'Automate enterprise server maintenance, data scrubbing, and batch operations with Bash Shell and Perl.',
    overview:
      'Backend infrastructure maintenance, financial batch reconciliation, and telecom data processing depend heavily on automated Shell and Perl scripting. This curriculum teaches advanced Bash Shell automation (regex, cron, exit codes, process signals) alongside Perl programming (regular expressions, hash arrays, file manipulation, DBI database connectivity).',
    highlights: [
      'Mastering advanced Bash Shell scripting for server automation',
      'Advanced regular expressions, Sed and Awk stream filtering for large datasets',
      'Perl programming: Hashes, file handles, references, and CPAN modules',
      'Automated database querying using Perl DBI/DBD drivers'
    ],
    prerequisites: 'Basic knowledge of Linux or UNIX commands.',
    targetAudience: ['System Administrators', 'DevOps & Infrastructure Engineers', 'Telecom & Data Processing Specialists', 'Database Administrators'],
    keySkills: ['Bash Shell Scripting', 'Perl Programming', 'Regular Expressions', 'Sed & Awk', 'Cron Scheduling', 'Perl DBI Database Connection'],
    toolsAndTech: ['Bash Shell', 'Perl 5', 'Linux / UNIX Server', 'Cron', 'Vim / Nano'],
    curriculumModules: [
      {
        title: 'Module 1: Advanced Bash Shell Scripting Architecture',
        subtitle: 'Writing robust, production-grade automated shell scripts',
        topics: [
          'Shebang variations, environment variables, user-defined variables, and command substitution',
          'Input/output redirection, pipes, standard input (stdin), standard output (stdout), standard error (stderr)',
          'Conditional statements: test brackets [ vs [[, string/numeric comparisons, file attributes',
          'Looping structures: for loops, while loops, until loops, and reading files line-by-line'
        ]
      },
      {
        title: 'Module 2: Error Handling, Functions & Scheduling in Shell',
        subtitle: 'Crash-resilient automation that alerts administrators',
        topics: [
          'Shell functions, passing arguments, return codes ($?), and local variable scoping',
          'Trap signals for automated cleanup on unexpected script aborts (SIGINT, SIGTERM)',
          'Exit code conventions (0 for success, non-zero for specific error types)',
          'Scheduling scripts with Cron, crontab syntax, and automated log rotation'
        ]
      },
      {
        title: 'Module 3: Perl Foundations & Data Structures',
        subtitle: 'The practical extraction and reporting language for text manipulation',
        topics: [
          'Perl syntax, execution models, and strict/warnings enforcement (use strict; use warnings;)',
          'Scalar variables ($), Array variables (@), and Hash associative arrays (%)',
          'Array operations: push, pop, shift, unshift, splice, sort, and reverse',
          'Hash operations: keys, values, each, exists, and delete'
        ]
      },
      {
        title: 'Module 4: Powerful Perl Regular Expressions & File I/O',
        subtitle: 'Industry-standard regex patterns and file processing',
        topics: [
          'Opening, reading, and writing files with modern 3-argument open() and lexical filehandles',
          'Perl regular expressions: Pattern matching (m//), substitution (s///), and translation (tr///)',
          'Metacharacters, quantifiers, capture groups, and backreferences',
          'References and complex nested data structures (Arrays of Hashes, Hashes of Arrays)'
        ]
      },
      {
        title: 'Module 5: Database Automation with Perl DBI & Real-World Projects',
        subtitle: 'Connecting scripts directly to relational databases',
        topics: [
          'Database connectivity with Perl DBI and DBD drivers (Oracle, MySQL, PostgreSQL)',
          'Preparing, executing queries, and fetching record rows dynamically',
          'Building an automated daily server health check and database backup validation utility',
          'Technical interview questions on Shell vs Perl usage in enterprise environments'
        ]
      }
    ],
    careerRoles: ['Linux Automation Engineer', 'Shell/Perl Scripting Specialist', 'Build and Release Engineer', 'Unix Operations Engineer'],
    avgSalary: '₹5.0 LPA - ₹12.5 LPA',
    topHiringCompanies: ['Ericsson', 'Cisco', 'IBM', 'Tech Mahindra', 'Wipro', 'TCS']
  },

  {
    id: 'forms-reports',
    title: 'Oracle Forms and Reports Developer Certification',
    category: 'Full Stack & Programming',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'Oracle University Track Aligned',
    examCode: 'Oracle Forms Developer Certified Professional (1Z0-141)',
    rating: '4.8',
    reviewsCount: '1,450+ Certified',
    tagline: 'Develop, maintain, and modernize mission-critical enterprise applications using Oracle Forms 12c and Reports Builder.',
    overview:
      'Thousands of financial institutions, government agencies, and retail enterprises rely on Oracle Forms and Reports for mission-critical transactional operations. This course teaches you to design responsive data blocks, write PL/SQL triggers, handle master-detail relationships, program user alerts, and design tabular and matrix business reports in Oracle Reports 12c.',
    highlights: [
      'Aligined with official Oracle Forms Developer certification guidelines',
      'Mastering Forms Builder 12c: Blocks, Canvases, Windows, and Items',
      'Writing Forms triggers: WHEN-VALIDATE-ITEM, PRE-QUERY, POST-CHANGE, ON-ERROR',
      'Designing complex enterprise reports using Reports Builder 12c'
    ],
    prerequisites: 'Strong foundation in SQL and PL/SQL programming fundamentals.',
    targetAudience: ['Oracle Developers', 'PL/SQL Programmers expanding to Forms/Reports', 'Enterprise Application Maintenance Engineers'],
    keySkills: ['Oracle Forms 12c', 'Oracle Reports Builder', 'Forms Triggers (PL/SQL)', 'Master-Detail Blocks', 'Built-in Packages', 'WebLogic Deployment'],
    toolsAndTech: ['Oracle Forms Builder 12c', 'Oracle Reports Builder 12c', 'Oracle Database 19c', 'Oracle WebLogic Server'],
    curriculumModules: [
      {
        title: 'Module 1: Oracle Forms 12c Architecture & Form Builder Environment',
        subtitle: 'Understanding 3-tier web deployment and the Forms Builder workspace',
        topics: [
          'Oracle Forms architecture: Client browser (Forms Applet / Java Web Start), WebLogic Forms Services, Database',
          'Forms Builder workspace: Object Navigator, Layout Editor, Property Palette, and PL/SQL Editor',
          'Creating Data Blocks based on database tables vs Control Blocks based on memory',
          'Canvases: Content canvases, Stacked canvases, Tab canvases, and Windows'
        ]
      },
      {
        title: 'Module 2: Form Items & Input Validation Controls',
        subtitle: 'Designing intuitive enterprise data entry interfaces',
        topics: [
          'Item types: Text items, Checkboxes, Radio groups, List items (Poplist, Tlist, Combo)',
          'Setting item properties: Required, Format mask, Data type, Validation range',
          'Record groups and Lists of Values (LOV) for dynamic database lookups',
          'Implementing Master-Detail relationships with automatic coordination'
        ]
      },
      {
        title: 'Module 3: Forms Triggers & PL/SQL Event Programming',
        subtitle: 'Intercepting and reacting to user actions and database transactions',
        topics: [
          'Trigger hierarchy: Form-level, Block-level, and Item-level trigger scoping',
          'Validation triggers: WHEN-VALIDATE-ITEM and WHEN-VALIDATE-RECORD',
          'Navigation triggers: PRE-BLOCK, POST-BLOCK, KEY-NEXT-ITEM',
          'Query triggers (PRE-QUERY, POST-QUERY) and transactional triggers (ON-INSERT, ON-UPDATE)'
        ]
      },
      {
        title: 'Module 4: Forms Built-in Packages, Alerts & Menus',
        subtitle: 'Extending functionality with native Oracle API libraries',
        topics: [
          'Standard built-ins: GO_BLOCK, EXECUTE_QUERY, COMMIT_FORM, CLEAR_FORM',
          'Creating and displaying custom Modal Alerts (Information, Caution, Stop)',
          'Creating custom Menu modules (.mmb/.mmx) with security roles',
          'Handling errors gracefully with ON-ERROR and ON-MESSAGE triggers'
        ]
      },
      {
        title: 'Module 5: Oracle Reports Builder 12c & Modernization',
        subtitle: 'Designing enterprise reports and modernizing legacy Forms',
        topics: [
          'Reports Builder architecture: Data Model, Layout Model, and Parameter Form',
          'Report styles: Tabular, Group Above, Group Left, Matrix, and Master-Detail reports',
          'Integrating Reports with Forms using RUN_REPORT_OBJECT built-in',
          'Modernization strategies: Upgrading legacy 6i/10g forms to WebLogic 12c'
        ]
      }
    ],
    careerRoles: ['Oracle Forms Developer', 'Oracle PL/SQL & Forms Consultant', 'Application Maintenance Specialist', 'Oracle ERP Systems Developer'],
    avgSalary: '₹5.5 LPA - ₹13.0 LPA',
    topHiringCompanies: ['TCS', 'Oracle', 'Cognizant', 'Wipro', 'HCLTech', 'Tech Mahindra']
  },

  // =========================================================================
  // 8. SYSTEMS & INFRASTRUCTURE
  // =========================================================================
  {
    id: 'comptia-network',
    title: 'CompTIA Network+ N10-008 Certification',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'CompTIA International',
    examCode: 'N10-008 (CompTIA Network+)',
    badge: 'Worldwide Networking Standard',
    rating: '4.8',
    reviewsCount: '3,200+ Certified',
    tagline: 'Master TCP/IP networking, routing, switching, wireless protocols, and network troubleshooting.',
    overview:
      'CompTIA Network+ is the universally respected vendor-neutral certification for network administrators and cloud infrastructure engineers. This course provides comprehensive knowledge of OSI layers, IPv4/IPv6 subnetting, routing protocols (OSPF, BGP), switching, VLANs, wireless standards, network security protocols, and troubleshooting utilities.',
    highlights: [
      'Aligined with official CompTIA Network+ N10-008 examination objectives',
      'Mastering IPv4 Classless Subnetting (VLSM) and IPv6 addressing',
      'Configuring routing, switching, VLANs, and trunking (802.1Q)',
      'Network diagnostics with Wireshark packet capture and command-line tools'
    ],
    prerequisites: 'Basic familiarity with computer hardware and operating systems.',
    targetAudience: ['Network Administrators', 'Systems Engineers', 'Cloud Infrastructure Specialists', 'Cybersecurity Professionals needing networking mastery'],
    keySkills: ['OSI 7-Layer Model', 'IPv4 Subnetting & IPv6', 'Routing Protocols (OSPF, BGP)', 'VLANs & Switching', 'Network Security', 'Wireshark Packet Analysis'],
    toolsAndTech: ['Wireshark', 'Cisco Packet Tracer', 'GNS3', 'Ping / Traceroute / Netstat', 'Nmap'],
    curriculumModules: [
      {
        title: 'Module 1: Networking Concepts & The OSI Model',
        subtitle: 'Understanding how data travels across local and global networks',
        topics: [
          'The 7 layers of the OSI model and corresponding TCP/IP model comparison',
          'Common networking protocols and ports: HTTP (80), HTTPS (443), SSH (22), DNS (53), DHCP (67/68)',
          'Network topologies: Star, Mesh, Bus, Ring, and Hybrid architectures',
          'Cabling standards: Twisted pair (Cat 6/6a), Fiber optics (Single-mode vs Multi-mode), and transceivers'
        ]
      },
      {
        title: 'Module 2: IPv4 Subnetting, IPv6 & Core Network Services',
        subtitle: 'Mathematical precision in IP address design and dynamic allocation',
        topics: [
          'IPv4 address classes, private vs public addresses (RFC 1918), and NAT/PAT translation',
          'Subnetting with Variable Length Subnet Masking (VLSM) and CIDR notation',
          'IPv6 addressing: Unicast, Multicast, Anycast, and compression rules',
          'Dynamic Host Configuration Protocol (DHCP) DORA process and DNS record types (A, AAAA, CNAME, MX)'
        ]
      },
      {
        title: 'Module 3: Routing & Switching Technologies',
        subtitle: 'Directing network traffic across LANs and WANs',
        topics: [
          'Layer 2 switching: MAC address tables, collision domains, and broadcast domains',
          'Configuring Virtual LANs (VLANs), 802.1Q trunking, and Spanning Tree Protocol (STP)',
          'Routing concepts: Routing tables, default gateways, static vs dynamic routing',
          'Interior vs Exterior routing protocols: OSPF (Link-State) vs BGP (Path-Vector)'
        ]
      },
      {
        title: 'Module 4: Wireless Standards, Cloud & Network Security',
        subtitle: 'Protecting network perimeters against unauthorized intrusion',
        topics: [
          'Wi-Fi standards (802.11a/b/g/n/ac/ax - Wi-Fi 6), frequencies (2.4GHz vs 5GHz), and WPA3 security',
          'Network security appliances: Firewalls (Stateful vs NGFW), IDS/IPS, and VPN concentrators',
          'Common network attacks: Man-in-the-Middle, DoS/DDoS, ARP spoofing, and Rogue DHCP',
          'Zero Trust network architecture and network segmentation principles'
        ]
      },
      {
        title: 'Module 5: Network Troubleshooting & CompTIA Exam Simulation',
        subtitle: 'Practical troubleshooting methodology and certification drills',
        topics: [
          'The CompTIA 7-step troubleshooting methodology',
          'Hardware testing tools: Cable testers, tone generators, optical time-domain reflectometers (OTDR)',
          'Software utilities: ping, traceroute, nslookup, netstat, arp, ipconfig/ifconfig',
          'Packet analysis with Wireshark and simulated CompTIA Network+ exam questions'
        ]
      }
    ],
    careerRoles: ['Network Administrator', 'Network Support Engineer', 'Infrastructure Specialist', 'Junior Network Architect'],
    avgSalary: '₹4.5 LPA - ₹10.5 LPA',
    topHiringCompanies: ['Cisco', 'Wipro', 'HCLTech', 'Cognizant', 'TCS', 'Tech Mahindra', 'Airtel']
  },

  {
    id: 'comptia-a-plus',
    title: 'CompTIA A+ IT Technician Certification (Core 1 & Core 2)',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '50 Hrs (Weekday / Weekend)',
    provider: 'CompTIA International',
    examCode: 'Core 1 (220-1101) & Core 2 (220-1102)',
    rating: '4.8',
    reviewsCount: '2,900+ Certified',
    tagline: 'The definitive entry credential for IT support, computer hardware, operating systems, and client security.',
    overview:
      'CompTIA A+ is the undisputed industry standard for establishing a career in IT hardware support, system operations, and technical help desk services. Covering both Core 1 (mobile devices, networking, hardware, virtualization) and Core 2 (operating systems, security, software troubleshooting, operational procedures), this course equips you with complete technical problem-solving capabilities.',
    highlights: [
      'Prepares you for both CompTIA A+ exams: Core 1 (220-1101) and Core 2 (220-1102)',
      'Hands-on computer hardware assembly, RAM, storage, and CPU diagnostics',
      'Windows 10/11, macOS, and Linux operating system troubleshooting',
      'Malware removal, disk encryption, and client endpoint security hardening'
    ],
    prerequisites: 'Basic familiarity with personal computers. No prior IT work experience required.',
    targetAudience: ['Individuals breaking into their first IT job', 'Help Desk Technicians', 'Desktop Support Specialists', 'Field Service Technicians'],
    keySkills: ['Computer Hardware Assembly', 'OS Installation & Recovery', 'Troubleshooting Methodology', 'Endpoint Security', 'Mobile Device Support', 'Basic Networking'],
    toolsAndTech: ['Windows 11 / 10', 'Linux Ubuntu', 'Command Prompt / PowerShell', 'BIOS/UEFI Utilities', 'Hardware Diagnostic Kits'],
    curriculumModules: [
      {
        title: 'Module 1: Computer Hardware Components & Assembly',
        subtitle: 'Disassembling, configuring, and upgrading personal computers',
        topics: [
          'Motherboard form factors, CPU sockets, chipsets, and bus architectures',
          'RAM types: DDR4, DDR5, ECC vs Non-ECC, and dual-channel configuration',
          'Storage devices: NVMe M.2 SSDs, SATA SSDs, HDDs, and RAID configurations (0, 1, 5, 10)',
          'Power Supply Units (PSU): Wattage calculations and 80 Plus efficiency ratings'
        ]
      },
      {
        title: 'Module 2: Peripherals, Mobile Devices & Basic Networking',
        subtitle: 'Supporting laptop hardware, smartphones, and local connectivity',
        topics: [
          'Display technologies: OLED, IPS LCD, resolutions, and video ports (HDMI, DisplayPort, USB-C)',
          'Laptop internal components: Replacing batteries, displays, Wi-Fi cards, and keyboards',
          'Configuring mobile email, Bluetooth pairing, and Mobile Device Management (MDM)',
          'TCP/IP basics: IP addresses, subnet masks, DNS, and setting up wireless routers'
        ]
      },
      {
        title: 'Module 3: Operating Systems Installation & Administration',
        subtitle: 'Managing Windows, macOS, and Linux client environments',
        topics: [
          'Windows 10/11 installation, clean installs, in-place upgrades, and bootable USB creation',
          'Windows management tools: Device Manager, Disk Management, Task Manager, Event Viewer',
          'Command-line utilities: chkdsk, sfc /scannow, DISM, tasklist, gpupdate',
          'Basic macOS navigation (Terminal, Finder) and Linux client administration'
        ]
      },
      {
        title: 'Module 4: Security Hardening & Malware Elimination',
        subtitle: 'Protecting workstations against unauthorized access and viral infection',
        topics: [
          'Physical security: Cable locks, badge readers, privacy screens, and secure token authentication',
          'Logical security: User Account Control (UAC), BitLocker drive encryption, and NTFS permissions',
          'CompTIA 7-step malware removal process: Quarantine, disable System Restore, remediate, educate',
          'Social engineering awareness: Phishing, shoulder surfing, and tailgating prevention'
        ]
      },
      {
        title: 'Module 5: Operational Procedures & Dual-Exam Simulation Drills',
        subtitle: 'Professional etiquette, safety standards, and passing Core 1 & Core 2',
        topics: [
          'Electrostatic Discharge (ESD) prevention and safe component handling',
          'Professional customer communication, documentation, and ticketing systems',
          'Core 1 (220-1101) and Core 2 (220-1102) performance-based question (PBQ) practice drills'
        ]
      }
    ],
    careerRoles: ['Desktop Support Technician', 'IT Help Desk Analyst', 'Field Service Specialist', 'Technical Support Representative'],
    avgSalary: '₹3.5 LPA - ₹7.5 LPA',
    topHiringCompanies: ['Wipro', 'TCS', 'HCLTech', 'Cognizant', 'Dell Technologies', 'HP', 'Accenture']
  },

  {
    id: 'iot',
    title: 'Internet of Things (IoT) Embedded Systems Certification',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: certNetworkInfraImg,
    duration: '45 Hrs (Weekday / Weekend)',
    provider: 'IoT Technology Guild Aligned',
    examCode: 'Certified IoT Embedded Solutions Developer',
    rating: '4.8',
    reviewsCount: '1,380+ Certified',
    tagline: 'Design smart connected devices using Raspberry Pi, Arduino, ESP32, MQTT protocols, and Cloud IoT hubs.',
    overview:
      'The Internet of Things (IoT) bridges the physical and digital worlds, connecting millions of smart sensors, industrial machines, and consumer electronics. This course teaches hardware prototyping with Arduino and Raspberry Pi, sensor data collection, wireless protocols (MQTT, CoAP, BLE, Zigbee), and streaming telemetry data to AWS IoT Core and Azure IoT Hub.',
    highlights: [
      'Prototyping with real microcontrollers: ESP32 Wi-Fi/Bluetooth and Raspberry Pi 4',
      'Interfacing digital and analog sensors (Temperature, Humidity, Motion, Gas, Ultrasonic)',
      'Lightweight machine-to-machine communication with MQTT and publish-subscribe brokers',
      'Streaming real-time telemetry to AWS IoT Core and visualizing on Grafana dashboards'
    ],
    prerequisites: 'Basic knowledge of any programming language (C, C++, or Python).',
    targetAudience: ['Electronics and Embedded Engineers', 'Software Developers entering Smart Hardware', 'Makers and Robotics Enthusiasts'],
    keySkills: ['Embedded C / MicroPython', 'ESP32 & Raspberry Pi', 'MQTT Protocol', 'Sensor Interfacing', 'AWS IoT Core / Azure IoT', 'Hardware Communication (I2C, SPI)'],
    toolsAndTech: ['Raspberry Pi', 'ESP32 / Arduino', 'Mosquitto MQTT', 'AWS IoT Core', 'Node-RED', 'Python'],
    curriculumModules: [
      {
        title: 'Module 1: IoT Architecture & Embedded Hardware Platforms',
        subtitle: 'Foundations of connected sensor devices and microcontroller boards',
        topics: [
          'IoT 4-layer architecture: Sensing layer, Network layer, Data processing layer, Application layer',
          'Comparing microcontrollers (Arduino, ESP32) vs microprocessors (Raspberry Pi)',
          'GPIO (General Purpose Input/Output) pins: Digital vs Analog pins, Pull-up/Pull-down resistors',
          'Serial communication protocols: UART, I2C (Inter-Integrated Circuit), and SPI'
        ]
      },
      {
        title: 'Module 2: Sensor Interfacing & Signal Acquisition',
        subtitle: 'Reading physical real-world inputs and controlling actuators',
        topics: [
          'Interfacing analog and digital sensors: Temperature/Humidity (DHT11/22), Ultrasonic (HC-SR04), PIR motion',
          'Analog-to-Digital Conversion (ADC) resolution and sampling rates',
          'Controlling actuators: Relays, DC motors, servo motors, and PWM (Pulse Width Modulation) signals',
          'Power management, battery optimization, and deep sleep states for remote sensors'
        ]
      },
      {
        title: 'Module 3: Wireless Communication & IoT Protocols',
        subtitle: 'Lightweight networking tailored for low-bandwidth constrained devices',
        topics: [
          'Comparing IoT wireless standards: Wi-Fi, Bluetooth Low Energy (BLE), Zigbee, LoRaWAN',
          'MQTT protocol: Publish-Subscribe architecture, topics, brokers (Eclipse Mosquitto), and QoS levels (0, 1, 2)',
          'Constrained Application Protocol (CoAP) and HTTP/REST comparisons',
          'Securing IoT communication with TLS/SSL and device certificates'
        ]
      },
      {
        title: 'Module 4: Cloud IoT Platforms & Real-Time Dashboards',
        subtitle: 'Ingesting and processing millions of sensor telemetry messages',
        topics: [
          'Connecting devices to AWS IoT Core / Microsoft Azure IoT Hub',
          'Device Shadows and Digital Twins for maintaining device states offline',
          'Routing telemetry data into time-series databases (InfluxDB) using IoT Rules',
          'Building real-time monitoring dashboards using Node-RED and Grafana'
        ]
      },
      {
        title: 'Module 5: Edge Computing, Machine Learning & Capstone Project',
        subtitle: 'Deploying intelligence onto low-power hardware devices',
        topics: [
          'Introduction to Edge AI (TinyML) on microcontrollers',
          'Building an end-to-end Smart Home Automation / Industrial Monitoring capstone project',
          'IoT device firmware over-the-air (OTA) updates and fleet management'
        ]
      }
    ],
    careerRoles: ['IoT Developer', 'Embedded Systems Engineer', 'IoT Solutions Architect', 'Hardware-Software Integration Specialist'],
    avgSalary: '₹5.5 LPA - ₹14.0 LPA',
    topHiringCompanies: ['Bosch', 'Schneider Electric', 'Honeywell', 'Siemens', 'Tata Elxsi', 'Intel', 'Qualcomm']
  },

  {
    id: 'blockchain',
    title: 'Certified Blockchain Solutions Developer',
    category: 'Systems & Infrastructure',
    level: 'Expert',
    image: certNetworkInfraImg,
    duration: '55 Hrs (Weekday / Weekend)',
    provider: 'Blockchain Council Aligned',
    examCode: 'Certified Blockchain Developer (CBD)',
    badge: 'Emerging Web3 Frontier',
    rating: '4.8',
    reviewsCount: '1,560+ Certified',
    tagline: 'Master decentralized ledgers, Ethereum Smart Contracts with Solidity, Web3.js dApps, and Hyperledger Fabric enterprise chains.',
    overview:
      'Blockchain technology provides immutable, cryptographically verifiable trust across decentralized networks. This advanced curriculum teaches consensus mechanisms, cryptographic hashing, writing secure Ethereum smart contracts using Solidity, testing with Hardhat, decentralized frontend integration via Web3.js / Ethers.js, and private enterprise consortium blockchains with Hyperledger Fabric.',
    highlights: [
      'Aligined with official Blockchain Council developer certification standards',
      'Writing and auditing production smart contracts using Solidity 0.8+',
      'Decentralized Application (dApp) development with React and Ethers.js',
      'Private permissioned enterprise consortium architecture with Hyperledger Fabric'
    ],
    prerequisites: 'Solid foundation in JavaScript or any object-oriented programming language.',
    targetAudience: ['Software Developers moving into Web3 / Blockchain', 'Security Auditors wanting smart contract expertise', 'Enterprise Architects evaluating distributed ledgers'],
    keySkills: ['Solidity Smart Contracts', 'Ethereum Virtual Machine (EVM)', 'Hardhat & Remix IDE', 'Ethers.js / Web3.js', 'Hyperledger Fabric', 'Smart Contract Security'],
    toolsAndTech: ['Solidity', 'Remix IDE', 'Hardhat', 'MetaMask', 'Ethers.js', 'Hyperledger Fabric', 'Docker'],
    curriculumModules: [
      {
        title: 'Module 1: Blockchain Cryptography & Distributed Consensus',
        subtitle: 'The foundational cryptographic principles behind decentralized ledgers',
        topics: [
          'Cryptographic hashing (SHA-256), Merkle Trees, and asymmetric public-private key cryptography',
          'Distributed ledgers: Immutable blocks, peer-to-peer networking, and transaction pooling',
          'Consensus algorithms: Proof of Work (PoW), Proof of Stake (PoS), and Raft/PBFT',
          'Public blockchains (Ethereum) vs Permissioned private blockchains (Hyperledger)'
        ]
      },
      {
        title: 'Module 2: Ethereum Architecture & Solidity Smart Contracts',
        subtitle: 'Programming programmable trust on the Ethereum Virtual Machine',
        topics: [
          'Ethereum Virtual Machine (EVM) architecture: Gas mechanics, gas limit, and execution opcodes',
          'Solidity syntax: Data types, storage vs memory vs calldata, state variables, and mappings',
          'Functions: Visibility (public, private, external, internal), view, pure, and payable',
          'Contract inheritance, interfaces, abstract contracts, and modifiers'
        ]
      },
      {
        title: 'Module 3: Token Standards, Testing & Security Auditing',
        subtitle: 'Building ERC-20, ERC-721 tokens and protecting against hacks',
        topics: [
          'Token standards: Creating fungible tokens (ERC-20) and Non-Fungible Tokens (ERC-721 / NFTs)',
          'Development environment: Compiling, testing, and deploying contracts using Hardhat and Chai',
          'Smart contract security: Preventing reentrancy attacks, integer overflows, and front-running',
          'Using OpenZeppelin secure audited contract libraries'
        ]
      },
      {
        title: 'Module 4: Full-Stack dApp Development with Web3.js / Ethers.js',
        subtitle: 'Connecting browser user interfaces to deployed smart contracts',
        topics: [
          'Web3 providers and connecting client applications to MetaMask crypto wallets',
          'Reading contract state and sending signed transactions using Ethers.js',
          'Listening to smart contract events and updating frontend state in real-time',
          'Decentralized file storage integration with IPFS (InterPlanetary File System)'
        ]
      },
      {
        title: 'Module 5: Enterprise Consortium Blockchains with Hyperledger Fabric',
        subtitle: 'Private enterprise networks for supply chain and banking',
        topics: [
          'Hyperledger Fabric architecture: Peer nodes, Orderer service, Certificate Authority (CA)',
          'Channels, private data collections, and chaincode (smart contracts in Go/Node.js)',
          'Deploying a multi-organization supply chain tracking network with Docker',
          'Blockchain developer certification sample questions and portfolio guidance'
        ]
      }
    ],
    careerRoles: ['Blockchain Developer', 'Smart Contract Engineer', 'Web3 Software Developer', 'Solidity Specialist', 'Blockchain Architect'],
    avgSalary: '₹8.0 LPA - ₹22.0 LPA',
    topHiringCompanies: ['Polygon', 'ConsenSys', 'IBM Blockchain', 'Wipro', 'TCS', 'Cognizant', 'Coinbase']
  },

  {
    id: 'informix',
    title: 'IBM Informix Dynamic Server (IDS) Administration',
    category: 'Systems & Infrastructure',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'IBM Certified Specialist Track Aligned',
    examCode: 'C1000-058 (IBM Informix Dynamic Server System Administrator)',
    rating: '4.8',
    reviewsCount: '1,150+ Certified',
    tagline: 'Master enterprise database engine administration, dbspaces, ON-Bar backups, and Informix high availability.',
    overview:
      'IBM Informix is a blazing fast, self-managing transactional database powering telecommunication giants, healthcare providers, and high-frequency retail POS chains. This course teaches disk storage configuration (chunks, dbspaces), engine memory buffers, onstat diagnostic monitoring, physical/logical log administration, ON-Bar backup utilities, and High Availability Data Replication (HDR).',
    highlights: [
      'Aligined with official IBM Informix System Administrator certification requirements',
      'Configuring dbspaces, blobspaces, raw disks, and dynamic shared memory',
      'Diagnostic analysis with onstat utilities for real-time engine monitoring',
      'Configuring High Availability Data Replication (HDR) and secondary servers'
    ],
    prerequisites: 'Basic understanding of relational databases and Linux/UNIX command line.',
    targetAudience: ['Informix DBAs', 'Database Administrators', 'Telecommunications Infrastructure Engineers'],
    keySkills: ['Informix Engine Architecture', 'Dbspaces & Chunks', 'Onstat Diagnostic Utilities', 'ON-Bar & Onmode Utilities', 'High Availability Replication (HDR)', 'Logical Log Management'],
    toolsAndTech: ['IBM Informix 14.10', 'ON-Bar Backup Tool', 'Onstat / Oncheck', 'UNIX / Linux OS'],
    curriculumModules: [
      {
        title: 'Module 1: Informix Architecture & Engine Initialization',
        subtitle: 'Understanding the Informix shared memory and thread architecture',
        topics: [
          'Informix Dynamic Server architecture: Virtual processors, shared memory segments (Resident, Virtual, Buffer)',
          'Configuration parameters in onconfig file: Rootpath, rootsize, buffers, locks',
          'Starting, stopping, and changing engine operating modes with oninit and onmode',
          'Database connectivity configuration in sqlhosts and network protocols'
        ]
      },
      {
        title: 'Module 2: Disk Storage Architecture & Space Allocation',
        subtitle: 'Managing raw disk partitions, chunks, and dbspaces',
        topics: [
          'Storage hierarchy: Chunks, dbspaces, tablespaces, extents, and disk pages',
          'Creating and dropping standard dbspaces, temporary dbspaces, and smart blobspaces using onspaces',
          'Managing table extents and avoiding extent overflow errors',
          'Altering tables and table defragmentation techniques'
        ]
      },
      {
        title: 'Module 3: Transaction Logging & Database Diagnostics',
        subtitle: 'Maintaining physical logs, logical logs, and inspecting memory state',
        topics: [
          'Physical log buffer mechanics and checkpoint processing',
          'Logical log files: Allocating, switching, backing up, and log full recovery procedures',
          'Mastering onstat diagnostic flags: onstat -g ath (threads), -g buf (buffers), -d (spaces), -u (users)',
          'Database integrity checking using the oncheck utility'
        ]
      },
      {
        title: 'Module 4: Enterprise Backup, Restore & Disaster Recovery',
        subtitle: 'Zero data loss backup strategies with ON-Bar and ontape',
        topics: [
          'Comparing ontape utility vs ON-Bar backup architecture with storage managers',
          'Performing full backups (Level 0) and incremental backups (Level 1 and Level 2)',
          'Continuous and automatic logical log backups',
          'Restoring databases: Physical restore, logical log roll-forward, and point-in-time recovery'
        ]
      },
      {
        title: 'Module 5: High Availability Clustering & IBM Exam Prep',
        subtitle: 'Continuous availability across replicated standby servers',
        topics: [
          'High Availability Data Replication (HDR): Primary and Secondary server pairings',
          'Remote Secondary (RSS) and Shared Disk Secondary (SDS) clusters',
          'Connection Manager setup for automatic client failover',
          'IBM Informix certification sample questions and practical DBA troubleshooting drills'
        ]
      }
    ],
    careerRoles: ['Informix DBA', 'Database Systems Engineer', 'Enterprise Infrastructure Administrator', 'Telecom Database Specialist'],
    avgSalary: '₹6.0 LPA - ₹14.0 LPA',
    topHiringCompanies: ['IBM', 'Ericsson', 'Cisco', 'Cognizant', 'Wipro', 'TCS']
  },

  {
    id: 'pervasive',
    title: 'Pervasive PSQL / Actian Zen Database Certification',
    category: 'Systems & Infrastructure',
    level: 'Professional',
    image: certCloudAzureImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'Actian Corporation Certified Aligned',
    examCode: 'Actian Zen (Pervasive PSQL) Certified Professional',
    rating: '4.8',
    reviewsCount: '980+ Certified',
    tagline: 'Master the dual-engine transactional Btrieve and relational SQL architecture powering embedded business applications.',
    overview:
      'Pervasive PSQL (now Actian Zen) is the embedded database platform of choice for medical practice systems, accounting software (Sage, QuickBooks), and high-reliability embedded hardware. This specialized curriculum teaches its unique dual-engine architecture: the ultra-fast transactional Btrieve API and the relational SQL relational engine, performance optimization, and database recovery.',
    highlights: [
      'Mastering the dual-engine architecture: MicroKernel Btrieve vs Relational SQL engine',
      'Data Dictionary Files (DDFs): FILE.DDF, FIELD.DDF, INDEX.DDF creation and maintenance',
      'Configuring server memory cache, transaction durability, and multi-user concurrency',
      'Continuous operation backups without shutting down mission-critical applications'
    ],
    prerequisites: 'Basic knowledge of databases and operating system administration.',
    targetAudience: ['Database Administrators', 'Enterprise Application Support Engineers', 'Healthcare and Accounting Systems Technicians'],
    keySkills: ['Btrieve API', 'Relational SQL Engine', 'DDF Data Dictionary Files', 'Pervasive Control Center (PCC)', 'Continuous Operations Backup', 'Performance Tuning'],
    toolsAndTech: ['Actian Zen / Pervasive PSQL v15', 'Pervasive Control Center (PCC)', 'Btrieve Maintenance Utility', 'SQL Data Manager'],
    curriculumModules: [
      {
        title: 'Module 1: Actian Zen / Pervasive PSQL Architecture',
        subtitle: 'Understanding the zero-administration dual-engine architecture',
        topics: [
          'Pervasive PSQL architecture: MicroKernel Engine (Btrieve) and Relational Engine',
          'Comparing direct record-level access vs relational query parsing',
          'Client-Server installation, workgroup engines, and network protocol configuration',
          'Pervasive Control Center (PCC) navigation and server settings management'
        ]
      },
      {
        title: 'Module 2: Relational Data Dictionary Files (DDFs)',
        subtitle: 'Bridging low-level data files to modern SQL queries',
        topics: [
          'The role of Data Dictionary Files: FILE.DDF, FIELD.DDF, INDEX.DDF',
          'Creating DDFs for legacy flat data files using the DDF Builder utility',
          'Defining table schemas, primary keys, alternate keys, and data types',
          'Querying Pervasive databases using standard SQL syntax via ODBC and JDBC drivers'
        ]
      },
      {
        title: 'Module 3: Low-Level Btrieve File Maintenance & Repair',
        subtitle: 'Maintaining file integrity and record-level locking',
        topics: [
          'Btrieve file structures: Page sizes, record lengths, variable-length records, indexes',
          'Using the Maintenance utility (BUTIL) for file cloning, exporting, and index rebuilding',
          'File recovery techniques for damaged files (Status 2, Status 84, Status 94 errors)',
          'Multi-user concurrency, pessimistic record locking, and transaction logging'
        ]
      },
      {
        title: 'Module 4: Performance Tuning & Cache Management',
        subtitle: 'Optimizing memory buffers for high-speed transaction processing',
        topics: [
          'Configuring MicroKernel memory: Max MicroKernel Memory usage, Cache Allocation Size',
          'Analyzing communication buffers and thread allocations',
          'Performance profiling using the Monitor utility and query execution plan analysis',
          'Network protocol optimization for local and remote WAN client connections'
        ]
      },
      {
        title: 'Module 5: Backup Strategies, Security & Real-World Maintenance',
        subtitle: 'Continuous online backups and certification review',
        topics: [
          'Continuous Operations mode: Backing up live, active databases without user disruption',
          'Automating pre-backup and post-backup script triggers',
          'Database security: User authentication, database master passwords, and file encryption',
          'Troubleshooting common production error codes and certification examination review'
        ]
      }
    ],
    careerRoles: ['Pervasive PSQL DBA', 'Actian Zen Database Administrator', 'Application Support Specialist', 'ERP Database Consultant'],
    avgSalary: '₹5.5 LPA - ₹13.0 LPA',
    topHiringCompanies: ['Sage Software Ecosystem', 'Healthcare Systems Vendors', 'Wipro', 'HCLTech', 'Cognizant']
  },

  {
    id: 'adeptia',
    title: 'Adeptia Enterprise B2B / EDI Integration Certification',
    category: 'Systems & Infrastructure',
    level: 'Professional',
    image: certSalesforceErpImg,
    duration: '40 Hrs (Weekday / Weekend)',
    provider: 'Adeptia Suite Aligned',
    examCode: 'Certified Adeptia Integration Specialist',
    rating: '4.8',
    reviewsCount: '920+ Certified',
    tagline: 'Connect enterprise supply chains using Adeptia B2B integration, EDI X12/EDIFACT standards, and automated business workflows.',
    overview:
      'Adeptia is a premier enterprise B2B data integration and customer onboarding platform that automates electronic data interchange (EDI) across retail, logistics, and insurance supply chains. This course teaches visual process flow design, EDI message translation (ANSI X12, EDIFACT), partner onboarding portals, and automated backend database ingestion.',
    highlights: [
      'Comprehensive training on Adeptia Connect and Adeptia Integration Accelerator',
      'Electronic Data Interchange (EDI) standards: ANSI X12 and UN/EDIFACT mapping',
      'Visual process flow design with automated business rules and error handling',
      'Secure B2B file transfer protocols: AS2, SFTP, FTPS, and web service APIs'
    ],
    prerequisites: 'Basic understanding of XML, JSON, or relational databases.',
    targetAudience: ['EDI Specialists', 'B2B Integration Engineers', 'Supply Chain Systems Analysts', 'Middleware Developers'],
    keySkills: ['Adeptia Process Flow', 'EDI X12 Standards', 'EDIFACT Translation', 'Data Mapping & Schema Validation', 'AS2 Communication', 'Trading Partner Management'],
    toolsAndTech: ['Adeptia Integration Suite', 'EDI X12 / EDIFACT', 'AS2 Protocol', 'XML / JSON', 'SQL'],
    curriculumModules: [
      {
        title: 'Module 1: Adeptia Architecture & Enterprise B2B Fundamentals',
        subtitle: 'Foundations of partner onboarding and automated data exchange',
        topics: [
          'Adeptia architecture: Web-based developer portal, execution engine, and metadata repository',
          'B2B data exchange fundamentals: Proprietary data vs industry standards',
          'Overview of Adeptia activities: Source, Target, Schema, Mapping, and Process Flow',
          'User roles, permissions, and security governance within Adeptia Suite'
        ]
      },
      {
        title: 'Module 2: EDI Standards & Transaction Set Mapping',
        subtitle: 'Decoding standard supply chain messages (Purchase Orders, Invoices)',
        topics: [
          'EDI architecture: Interchange (ISA/IEA), Functional Group (GS/GE), Transaction Sets (ST/SE)',
          'Core EDI X12 documents: 850 (Purchase Order), 855 (PO Ack), 856 (ASN), 810 (Invoice)',
          'UN/EDIFACT equivalent documents: ORDERS, ORDRSP, DESADV, INVOIC',
          'Parsing and generating EDI functional acknowledgements (997 / CONTRL)'
        ]
      },
      {
        title: 'Module 3: Advanced Data Mapping & Schema Transformation',
        subtitle: 'Mapping complex EDI structures to relational tables and XML',
        topics: [
          'Creating source and target schemas: Positional, Delimited, XML, JSON, and Database schemas',
          'The Adeptia Data Mapper: Drag-and-drop mapping, built-in string/date/math functions',
          'Conditional mapping, looping through repeated segment loops, and lookup values',
          'Data validation rules and capturing data translation errors'
        ]
      },
      {
        title: 'Module 4: Secure B2B Protocols & Trading Partner Management',
        subtitle: 'Configuring encrypted communication channels between corporations',
        topics: [
          'Secure file transfer configurations: AS2 (Applicability Statement 2) with digital certificates and MDN',
          'SFTP, FTPS, and automated polling schedules',
          'Configuring Trading Partner profiles: Inbound and outbound partner relationships',
          'Exposing and consuming web services (REST / SOAP) inside Adeptia workflows'
        ]
      },
      {
        title: 'Module 5: Process Flow Orchestration, Monitoring & Certification',
        subtitle: 'Building automated multi-step supply chain workflows',
        topics: [
          'Designing Process Flows: Decisions, gateways, task routing, and parallel branches',
          'Exception handling: Automated error notifications and task reassignment',
          'Process monitoring: Tracking transaction logs, throughput metrics, and audit dashboards',
          'Adeptia certification exam review and supply chain interview preparation'
        ]
      }
    ],
    careerRoles: ['EDI Specialist', 'Adeptia B2B Integration Developer', 'Supply Chain Data Engineer', 'B2B Integration Consultant'],
    avgSalary: '₹6.0 LPA - ₹14.0 LPA',
    topHiringCompanies: ['Cognizant', 'Capgemini', 'TCS', 'Wipro', 'FedEx', 'Walmart Supply Chain']
  },

  {
    id: 'foreign-languages',
    title: 'Corporate Foreign Languages Certification (German / Japanese / French)',
    category: 'Systems & Infrastructure',
    level: 'Associate',
    image: forwardDeployedImg,
    duration: '60 Hrs (Weekday / Weekend)',
    provider: 'International Language Standards (CEFR A1/A2 / JLPT N5-N4)',
    examCode: 'Goethe-Zertifikat (German) / JLPT (Japanese) / DELF (French)',
    badge: 'Global Career Mobility',
    rating: '4.9',
    reviewsCount: '2,450+ Certified',
    tagline: 'Achieve corporate conversational and technical fluency to fast-track on-site postings in Europe and Japan.',
    overview:
      'Global technology leaders actively prioritize bilingual software engineers for lucrative on-site postings in Germany, Switzerland, Japan, and France. This specialized corporate language program is tailored for IT professionals, covering conversational fluency, technical terminology, business email communication, and international certification preparation (Goethe A1/A2 for German, JLPT N5/N4 for Japanese, DELF for French).',
    highlights: [
      'Curriculum tailored specifically for software engineers and corporate tech professionals',
      'Native-speaker trainers with extensive corporate international experience',
      'Mastering technical vocabulary: Project discussions, sprint ceremonies, client demos',
      'Targeted preparation for official Goethe-Institut, JLPT, and DELF examinations'
    ],
    prerequisites: 'No previous knowledge of the chosen language required. Starts from absolute fundamentals.',
    targetAudience: ['Software Engineers aspiring for overseas on-site assignments in Europe or Japan', 'Bilingual IT Support Consultants', 'Professionals working with global multinational teams'],
    keySkills: ['Corporate Conversation', 'Technical Vocabulary', 'Business Email Writing', 'Pronunciation & Phonetics', 'CEFR Exam Preparation', 'Cross-Cultural Etiquette'],
    toolsAndTech: ['Audio Labs', 'Interactive Workbooks', 'JLPT / Goethe Practice Portals', 'Pronunciation Trainers'],
    curriculumModules: [
      {
        title: 'Module 1: Phonetics, Alphabet & Conversational Foundations',
        subtitle: 'Mastering pronunciation, basic vocabulary, and greetings',
        topics: [
          'Phonetics, accents, and script mastery (Latin alphabet variations, Hiragana/Katakana for Japanese)',
          'Self-introductions, professional titles, nationalities, and numbers',
          'Essential everyday conversational phrases and courteous corporate greetings',
          'Fundamental sentence structure: Subject-Verb-Object and word order rules'
        ]
      },
      {
        title: 'Module 2: Essential Grammar & Tense Formulations',
        subtitle: 'Building confident sentences for everyday and workplace use',
        topics: [
          'Articles (Definite, Indefinite, Gender classifications)',
          'Verb conjugations in present and past tenses; regular vs irregular verbs',
          'Pronouns, prepositions of time and place, and modal auxiliary verbs',
          'Asking clear clarifying questions and providing structured responses'
        ]
      },
      {
        title: 'Module 3: Corporate IT Vocabulary & Workplace Interaction',
        subtitle: 'Participating in technical sprint ceremonies and team discussions',
        topics: [
          'Software and IT terminology: Code, bugs, deadlines, deployments, servers, meetings',
          'Conducting daily standup updates and expressing project progress and blockers',
          'Writing clear professional business emails, appointment requests, and meeting follow-ups',
          'Understanding cross-cultural workplace etiquette and corporate customs in Germany/Japan'
        ]
      },
      {
        title: 'Module 4: Listening Comprehension & Client Dialogue Drills',
        subtitle: 'Understanding native speakers at natural conversational speed',
        topics: [
          'Listening drills with diverse regional accents and business phone call simulations',
          'Extracting key action items from rapid verbal instructions and meetings',
          'Simulated client presentation: Explaining a software product feature in the target language',
          'Handling technical troubleshooting dialogues with international stakeholders'
        ]
      },
      {
        title: 'Module 5: Official Certification Exam Simulation (Goethe / JLPT / DELF)',
        subtitle: 'Practicing all 4 language modules: Reading, Writing, Listening, Speaking',
        topics: [
          'Detailed breakdown of official examination format and scoring rubrics',
          'Reading comprehension speed drills and multiple-choice strategies',
          'Writing short formal letters / essays evaluated by native trainers',
          'One-on-one simulated speaking viva interviews with real-time feedback'
        ]
      }
    ],
    careerRoles: ['Bilingual Software Engineer', 'Onsite Technical Lead (Europe / Japan)', 'Bilingual IT Support Analyst', 'International Technical Consultant'],
    avgSalary: '₹7.5 LPA - ₹18.0 LPA (Plus Onsite Allowances)',
    topHiringCompanies: ['Rakuten', 'NTT Data', 'Bosch', 'Siemens', 'Cognizant Japan', 'TCS Europe', 'Accenture']
  }
];

// Helper lookup function to get certification by slug ID
export function getCertificationById(id: string): CertificationDetailData | undefined {
  return certificationsData.find((cert) => cert.id.toLowerCase() === id.toLowerCase());
}

// Category tabs list
export const certificationCategories = [
  'All Certifications',
  'Cloud & DevOps',
  'Testing & QA',
  'AI & Data Science',
  'Management & Agile',
  'Enterprise & ERP',
  'Automation & RPA',
  'Full Stack & Programming',
  'Systems & Infrastructure'
] as const;
