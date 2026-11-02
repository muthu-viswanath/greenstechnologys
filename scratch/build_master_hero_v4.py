import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np

def generate_grand_masterpiece_v4():
    W = 2560
    H = 1320
    
    # 1. Base Dark Luxury Obsidian Canvas
    base = Image.new('RGB', (W, H), (6, 12, 16))
    draw = ImageDraw.Draw(base)

    # Architectural room gradient: deep dark slate to rich teal-navy
    for y in range(H):
        t = y / H
        r = int(5 + t * 14)
        g = int(10 + t * 24)
        b = int(17 + t * 33)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # Top ceiling recessed spotlights
    spot = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(spot)
    for i in range(16):
        cx = 90 + i * 160
        s_draw.ellipse([cx - 100, -60, cx + 100, 150], fill=(52, 211, 153, 20))
        s_draw.line([(cx, 0), (cx, 22)], fill=(134, 195, 124, 180), width=2)
    
    # Amphitheater floor horizon
    floor_y = int(H * 0.77)
    
    # Vanishing perspective floor lines (gleaming polished showroom tile)
    for x in range(-200, W + 200, 70):
        vx = W // 2
        bx = vx + int((x - vx) * 2.8)
        s_draw.line([(x, floor_y), (bx, H)], fill=(40, 85, 90, 24), width=1)
    
    for fy in range(floor_y, H, 24):
        prog = (fy - floor_y) / (H - floor_y)
        alpha = int(12 + prog * 55)
        s_draw.line([(0, fy), (W, fy)], fill=(52, 211, 153, alpha), width=1)

    base = Image.alpha_composite(base.convert('RGBA'), spot).convert('RGB')
    draw = ImageDraw.Draw(base)

    # 2. THE GIANT PANORAMIC WALL SCREEN
    margin_x = 45
    screen_top = 35
    screen_w = W - (2 * margin_x)
    screen_h = int(H * 0.71)
    screen_bottom = screen_top + screen_h

    # Glowing aura around screen frame
    aura = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    a_draw = ImageDraw.Draw(aura)
    for r_offset in range(36, 0, -2):
        alpha = int((36 - r_offset) * 3.5)
        a_draw.rounded_rectangle(
            [margin_x - r_offset, screen_top - r_offset, margin_x + screen_w + r_offset, screen_bottom + r_offset],
            radius=26,
            outline=(134, 195, 124, alpha),
            width=2
        )
    base = Image.alpha_composite(base.convert('RGBA'), aura).convert('RGB')
    draw = ImageDraw.Draw(base)

    # Screen Outer Bezel
    draw.rounded_rectangle(
        [margin_x - 8, screen_top - 8, margin_x + screen_w + 8, screen_bottom + 8],
        radius=22,
        fill=(12, 20, 24),
        outline=(52, 211, 153),
        width=3
    )

    # Screen Interior Surface
    draw.rounded_rectangle(
        [margin_x, screen_top, margin_x + screen_w, screen_bottom],
        radius=18,
        fill=(8, 15, 19)
    )

    # Screen subtle grid lines
    hud = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    h_draw = ImageDraw.Draw(hud)
    for gx in range(margin_x, margin_x + screen_w, 30):
        h_draw.line([(gx, screen_top), (gx, screen_bottom)], fill=(25, 55, 62, 24), width=1)
    for gy in range(screen_top, screen_bottom, 26):
        h_draw.line([(margin_x, gy), (margin_x + screen_w, gy)], fill=(25, 55, 62, 24), width=1)
    
    # Ambient glows
    h_draw.ellipse([margin_x + 100, screen_top + 100, margin_x + 900, screen_top + 600], fill=(56, 189, 248, 18))
    h_draw.ellipse([margin_x + screen_w - 900, screen_top + 100, margin_x + screen_w - 100, screen_top + 600], fill=(167, 139, 250, 18))
    h_draw.ellipse([W//2 - 400, screen_top + 100, W//2 + 400, screen_top + 600], fill=(52, 211, 153, 18))

    base = Image.alpha_composite(base.convert('RGBA'), hud).convert('RGB')
    draw = ImageDraw.Draw(base)

    # Fonts
    bold_font = 'C:/Windows/Fonts/segoeuib.ttf'
    reg_font = 'C:/Windows/Fonts/segoeui.ttf'

    font_brand = ImageFont.truetype(bold_font, 32)
    font_sub = ImageFont.truetype(reg_font, 15)
    font_badge = ImageFont.truetype(bold_font, 12)
    font_col_title = ImageFont.truetype(bold_font, 15)
    font_course = ImageFont.truetype(reg_font, 12)
    font_salary = ImageFont.truetype(bold_font, 11)

    # Screen Top Brand Bar
    header_bar_h = 68
    draw.rectangle([margin_x, screen_top, margin_x + screen_w, screen_top + header_bar_h], fill=(12, 24, 29))
    draw.line([(margin_x, screen_top + header_bar_h), (margin_x + screen_w, screen_top + header_bar_h)], fill=(52, 211, 153), width=2)

    # Brand Title
    draw.text((margin_x + 30, screen_top + 16), "GREENS TECHNOLOGYS", fill=(134, 195, 124), font=font_brand)
    draw.text((margin_x + 410, screen_top + 26), "•  CENTRAL MASTER COURSES DIRECTORY  •  100+ PLACEMENT TRACKS", fill=(160, 205, 195), font=font_sub)

    # Live HUD Stats
    draw.text((margin_x + screen_w - 500, screen_top + 16), "● 22 CHENNAI BRANCHES  |  100% PLACEMENT ECOSYSTEM", fill=(56, 189, 248), font=font_badge)
    draw.text((margin_x + screen_w - 500, screen_top + 38), "AVG SALARY: ₹8.5 - 24.0 LPA  |  LIVE LAB ADMISSIONS OPEN", fill=(250, 204, 21), font=font_badge)

    # 6 Columns with all courses filling the entire screen height
    categories = [
        {
            "title": "PROGRAMMING & FULL STACK",
            "accent": (56, 189, 248),
            "salary": "₹6.5 - 18 LPA",
            "courses": [
                "Full Stack Developer (100% Placement)",
                "Java Full Stack (Spring Boot + React)",
                "Python Full Stack (Django + FastAPI)",
                ".NET Core Full Stack & C# Microservices",
                "Core Java 21, J2EE & Spring AI",
                "Python Programming & Automation",
                "C & C++ High-Performance Systems",
                "UNIX & Linux Shell Scripting",
                "Angular 17+ & React Frontend Arch",
                "iOS (Swift) & Android Native Apps",
                "React Native Cross-Platform Apps",
                "Ionic Mobile Application Dev",
                "Oracle APEX & Forms Enterprise",
                "Hibernate & Microservices Lab",
                "WebSphere & Middleware Platforms",
                "R Programming & Perl Scripting",
                "PHP & MySQL Web Development",
                "C# .NET, LINQ, WCF & WPF"
            ]
        },
        {
            "title": "AI, GENAI & DATA SCIENCE",
            "accent": (167, 139, 250),
            "salary": "₹9.0 - 28 LPA",
            "courses": [
                "Generative AI & Agentic Systems",
                "LLMs, LangChain, LlamaIndex & Vector DBs",
                "Enterprise RAG Pipelines & Fine-Tuning",
                "Artificial Intelligence & Neural Nets",
                "Machine Learning with Python",
                "Data Science with Python & R",
                "Natural Language Processing (NLP)",
                "Computer Vision & Edge AI (OpenCV)",
                "Prompt Engineering for Developers",
                "MLOps (Kubeflow, MLflow, Docker)",
                "TensorFlow & PyTorch Enterprise Lab",
                "Forward Deployed AI Engineering",
                "Deep Learning & Generative Models",
                "FastAPI & AI Microservice Endpoints",
                "Llama, Mistral & Claude Integration",
                "Autonomous Code-Gen & AI Agents",
                "Vector Search (Chroma, Pinecone)",
                "AI Ethics & Model Evaluation"
            ]
        },
        {
            "title": "CLOUD, DEVOPS & INFRA",
            "accent": (52, 211, 153),
            "salary": "₹8.0 - 22 LPA",
            "courses": [
                "DevOps Master (Docker, K8s, Terraform)",
                "AWS Certified Solutions Architect",
                "Microsoft Azure Cloud Administrator",
                "Google Cloud Platform (GCP) Eng",
                "Kubernetes Administration (CKA/CKAD)",
                "CI/CD Pipeline Automation (Jenkins)",
                "Infrastructure as Code (Terraform)",
                "RedHat Linux Administration (RHCSA)",
                "Site Reliability Engineering (SRE)",
                "DevSecOps & Cloud Security",
                "VMware vSphere & Hybrid Cloud",
                "OpenShift Enterprise Platform",
                "Ansible & Chef Configuration Mgmt",
                "Azure DevOps CI/CD Pipelines",
                "AWS SysOps & CloudFormation",
                "Linux Kernel & Shell Automation",
                "Docker Swarm & Container Security",
                "Cloud Migration & FinOps Practice"
            ]
        },
        {
            "title": "SOFTWARE TESTING & SDET",
            "accent": (251, 146, 60),
            "salary": "₹6.0 - 16.5 LPA",
            "courses": [
                "Playwright Next-Gen Web Automation",
                "Selenium WebDriver (Java & Python)",
                "Full SDET Automation Architect",
                "REST Assured & Postman API Testing",
                "Mobile Automation with Appium",
                "Cucumber BDD & TestNG Frameworks",
                "Performance Testing with JMeter",
                "Tricentis Tosca Automation Suite",
                "Manual Testing & ISTQB Prep",
                "AI-Augmented QA & Autonomous Tests",
                "Cypress Modern Web Test Suite",
                "Security Testing with OWASP ZAP",
                "LoadRunner Enterprise Testing",
                "Database & ETL Test Automation",
                "Katalon Studio Test Frameworks",
                "API Mocking & Contract Testing",
                "Cross-Browser Cloud Testing",
                "Continuous QA in CI/CD DevOps"
            ]
        },
        {
            "title": "DATA ENG & BUSINESS INTEL",
            "accent": (244, 114, 182),
            "salary": "₹7.5 - 20 LPA",
            "courses": [
                "Data Engineering (PySpark, Databricks)",
                "Microsoft Power BI Masterclass (DAX)",
                "Tableau Desktop & Server Analyst",
                "Snowflake Cloud Data Warehouse",
                "SQL Server & Oracle Advanced PL/SQL",
                "Big Data Hadoop, Hive & Kafka Streaming",
                "Database Administration (DBA Master)",
                "ETL Pipelines with Informatica",
                "Business Analysis (CBAP / Agile BA)",
                "Alteryx Data Analytics & Prep",
                "Google Looker Data Engineering",
                "Advanced Excel & Financial Modeling",
                "PostgreSQL & MySQL Database Admin",
                "MongoDB NoSQL & Apache Cassandra",
                "Apache Airflow Data Orchestration",
                "Data Governance & Modern Data Stack",
                "Talend Open Studio & Data Quality",
                "Cognos & Qlik Sense Analytics"
            ]
        },
        {
            "title": "CYBER, ENTERPRISE & CREATIVE",
            "accent": (250, 204, 21),
            "salary": "₹7.0 - 25 LPA",
            "courses": [
                "Ethical Hacking & Penetration Testing",
                "SOC Analyst & Cyber Threat Hunting",
                "Salesforce Admin & Apex/LWC Developer",
                "SAP S/4HANA (FICO, MM, SD, ABAP)",
                "Oracle Fusion Cloud Financials",
                "UiPath & Automation Anywhere RPA",
                "UI/UX Design (Figma & Design Systems)",
                "Embedded Systems, IoT & Automotive CAN",
                "Digital Marketing & Growth Hacking",
                "Microsoft Power Apps & Power Automate",
                "Foreign Languages (German, French, Jap)",
                "Madurai & London Training Programs",
                "CompTIA Security+ & CEH Certified",
                "ServiceNow Administrator & Dev",
                "Workday HCM & Financials Cloud",
                "Graphic Design & Creative Media Suite",
                "VLSI & Embedded C Firmware Design",
                "Agile Scrum Master (CSM / PSPO)"
            ]
        }
    ]

    col_count = len(categories)
    usable_w = screen_w - 36
    col_w = (usable_w - (col_count - 1) * 12) // col_count
    content_top = screen_top + header_bar_h + 10
    card_h = screen_bottom - content_top - 46

    for i, cat in enumerate(categories):
        cx = margin_x + 18 + i * (col_w + 12)
        cy = content_top

        # Column background card
        draw.rounded_rectangle([cx, cy, cx + col_w, cy + card_h], radius=8, fill=(12, 22, 27), outline=(22, 38, 46), width=1)

        # Card Header
        h_h = 46
        draw.rounded_rectangle([cx, cy, cx + col_w, cy + h_h], radius=8, fill=(16, 30, 36))
        draw.line([(cx + 6, cy + h_h), (cx + col_w - 6, cy + h_h)], fill=cat["accent"], width=2)
        
        draw.text((cx + 10, cy + 7), cat["title"], fill=cat["accent"], font=font_col_title)
        draw.text((cx + 10, cy + 26), f"Avg: {cat['salary']}", fill=(185, 215, 220), font=font_salary)

        # Course items
        list_y = cy + h_h + 6
        item_h = 22
        for c_idx, c_name in enumerate(cat["courses"]):
            if list_y + item_h > cy + card_h - 4:
                break
            if c_idx % 2 == 1:
                draw.rectangle([cx + 2, list_y - 1, cx + col_w - 2, list_y + item_h - 2], fill=(10, 18, 22))
            
            # Bullet dot in accent color
            draw.ellipse([cx + 7, list_y + 7, cx + 11, list_y + 11], fill=cat["accent"])
            draw.text((cx + 17, list_y + 1), c_name, fill=(225, 240, 245), font=font_course)
            list_y += item_h + 1

    # Screen Bottom Status Bar (clean text, no broken unicode glyphs)
    bot_y = screen_bottom - 38
    draw.rectangle([margin_x, bot_y, margin_x + screen_w, screen_bottom], fill=(12, 22, 28))
    draw.line([(margin_x, bot_y), (margin_x + screen_w, bot_y)], fill=(52, 211, 153), width=1)
    
    draw.text((margin_x + 25, bot_y + 10), "● CAMPUS HUBS: OMR THORAIPAKKAM • ADYAR • TAMBARAM • VELACHERY • ANNA NAGAR • PORUR • VADAPALANI", fill=(140, 180, 190), font=font_badge)
    draw.text((margin_x + screen_w - 480, bot_y + 10), "• 100% INTERVIEW CALLS GUARANTEED • 1,400+ HIRING PARTNERS", fill=(52, 211, 153), font=font_badge)

    # 3. FLOOR REFLECTION OF THE BIG SCREEN
    refl_h = int(H * 0.22)
    refl_crop = base.crop((margin_x, screen_bottom - 240, margin_x + screen_w, screen_bottom))
    refl_crop = refl_crop.transpose(Image.FLIP_TOP_BOTTOM)
    refl_crop = refl_crop.resize((screen_w, refl_h), Image.Resampling.BILINEAR)
    refl_crop = refl_crop.filter(ImageFilter.GaussianBlur(8))

    alpha_mask = Image.new('L', (screen_w, refl_h))
    for ry in range(refl_h):
        val = int(115 * (1 - ry / refl_h))
        alpha_mask.paste(val, (0, ry, screen_w, ry + 1))
    
    base.paste(refl_crop, (margin_x, screen_bottom + 4), alpha_mask)

    # 4. STUDENT CLEAN CUTOUT & SEAMLESS COMPOSITING
    orig_man = Image.open('src/assets/carousel/story_1_tech_evolution.jpg')
    crop_student = orig_man.crop((842, 318, 1018, 768)) # w=176, h=450
    
    target_h = 560
    target_w = int(176 * (target_h / 450))
    student_scaled = crop_student.resize((target_w, target_h), Image.Resampling.LANCZOS).convert('RGBA')

    # Color-key & precise mask: remove white background edges cleanly
    arr = np.array(student_scaled)
    # Background in original crop is bright neon green/white
    r_chan, g_chan, b_chan = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    brightness = 0.299 * r_chan + 0.587 * g_chan + 0.114 * b_chan
    
    # Polygon base
    mask = Image.new('L', (target_w, target_h), 0)
    m_draw = ImageDraw.Draw(mask)
    sw, sh = target_w, target_h
    poly = [
        (int(sw*0.38), int(sh*0.03)), (int(sw*0.58), int(sh*0.03)),
        (int(sw*0.72), int(sh*0.11)), (int(sw*0.78), int(sh*0.18)),
        (int(sw*0.86), int(sh*0.28)), (int(sw*0.84), int(sh*0.48)),
        (int(sw*0.76), int(sh*0.58)), (int(sw*0.70), int(sh*0.72)),
        (int(sw*0.65), int(sh*0.98)), (int(sw*0.34), int(sh*0.98)),
        (int(sw*0.28), int(sh*0.75)), (int(sw*0.25), int(sh*0.55)),
        (int(sw*0.14), int(sh*0.48)), (int(sw*0.12), int(sh*0.28)),
        (int(sw*0.22), int(sh*0.16)), (int(sw*0.38), int(sh*0.03))
    ]
    m_draw.polygon(poly, fill=255)
    # Erode mask slightly to eliminate any bright halos
    mask = mask.filter(ImageFilter.MinFilter(5))
    mask = mask.filter(ImageFilter.GaussianBlur(3))
    student_scaled.putalpha(mask)

    student_x = int(W * 0.44)
    student_y = floor_y - 125

    # Floor shadow under student
    shadow_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sh_draw = ImageDraw.Draw(shadow_layer)
    sh_draw.ellipse([student_x - 90, student_y + target_h - 26, student_x + target_w + 90, student_y + target_h + 26], fill=(0, 0, 0, 220))
    sh_draw.ellipse([student_x - 40, student_y + target_h - 16, student_x + target_w + 40, student_y + target_h + 16], fill=(0, 0, 0, 255))
    base = Image.alpha_composite(base.convert('RGBA'), shadow_layer).convert('RGB')

    # Paste student
    base.paste(student_scaled, (student_x, student_y), student_scaled)

    # Edge highlights on student from screen glow
    rim_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    r_draw = ImageDraw.Draw(rim_layer)
    head_cx = student_x + int(sw * 0.48)
    head_cy = student_y + int(sh * 0.08)
    r_draw.arc([head_cx - 40, head_cy - 40, head_cx + 40, head_cy + 40], 180, 360, fill=(134, 195, 124, 180), width=3)
    r_draw.line([(student_x + int(sw*0.25), student_y + int(sh*0.16)), (student_x + int(sw*0.12), student_y + int(sh*0.35))], fill=(52, 211, 153, 160), width=3)
    r_draw.line([(student_x + int(sw*0.75), student_y + int(sh*0.16)), (student_x + int(sw*0.85), student_y + int(sh*0.35))], fill=(56, 189, 248, 160), width=3)
    base = Image.alpha_composite(base.convert('RGBA'), rim_layer).convert('RGB')

    # Save
    out_path = r"c:\Users\muthu\Downloads\greenstech\src\assets\courses\greens_courses_big_screen.jpg"
    base.save(out_path, format="JPEG", quality=96)
    print(f"Masterpiece v4 generated successfully at: {out_path} ({W}x{H})")

if __name__ == "__main__":
    generate_grand_masterpiece_v4()
