import math
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def build_master_hero():
    W = 2560
    H = 1200
    
    # 1. Base Canvas - Deep Luxury Obsidian Slate
    base = Image.new('RGB', (W, H), (6, 12, 16))
    draw = ImageDraw.Draw(base)

    # Gradient background with city lights / tech campus ambiance
    for y in range(H):
        ratio = y / H
        r = int(5 + ratio * 14)
        g = int(10 + ratio * 22)
        b = int(16 + ratio * 30)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # Architectural ceiling grid and spotlights
    spot_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    spot_draw = ImageDraw.Draw(spot_layer)
    for i in range(16):
        sx = 100 + i * 160
        spot_draw.ellipse([sx - 90, -40, sx + 90, 140], fill=(52, 211, 153, 14))
        spot_draw.line([(sx, 0), (sx, 20)], fill=(134, 195, 124, 140), width=2)
    
    # Floor horizon and perspective lines
    floor_y = int(H * 0.74)
    for x in range(0, W + 1, 80):
        cx = W // 2
        bx = cx + int((x - cx) * 2.4)
        spot_draw.line([(x, floor_y), (bx, H)], fill=(40, 80, 85, 20), width=1)
    
    for fy in range(floor_y, H, 28):
        alpha = int(8 + (fy - floor_y) / (H - floor_y) * 45)
        spot_draw.line([(0, fy), (W, fy)], fill=(52, 211, 153, alpha), width=1)

    base = Image.alpha_composite(base.convert('RGBA'), spot_layer).convert('RGB')
    draw = ImageDraw.Draw(base)

    # 2. THE GIANT PANORAMIC WALL SCREEN (Stretches across 92% of the width)
    margin_x = 70
    screen_top = 45
    screen_w = W - (2 * margin_x)
    screen_h = int(H * 0.68)
    screen_bottom = screen_top + screen_h

    # Glowing aura around the entire screen
    aura = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    aura_draw = ImageDraw.Draw(aura)
    for spread in range(40, 0, -2):
        alpha = int((40 - spread) * 2.8)
        aura_draw.rounded_rectangle(
            [margin_x - spread, screen_top - spread, margin_x + screen_w + spread, screen_bottom + spread],
            radius=28,
            outline=(134, 195, 124, alpha),
            width=2
        )
    base = Image.alpha_composite(base.convert('RGBA'), aura).convert('RGB')
    draw = ImageDraw.Draw(base)

    # Outer screen bevel
    draw.rounded_rectangle(
        [margin_x - 8, screen_top - 8, margin_x + screen_w + 8, screen_bottom + 8],
        radius=24,
        fill=(14, 22, 26),
        outline=(52, 211, 153),
        width=3
    )

    # Inner screen surface
    draw.rounded_rectangle(
        [margin_x, screen_top, margin_x + screen_w, screen_bottom],
        radius=20,
        fill=(9, 16, 20)
    )

    # Screen Background Grid & Digital Circuit Overlay
    grid_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_img)
    for gx in range(margin_x, margin_x + screen_w, 35):
        grid_draw.line([(gx, screen_top), (gx, screen_bottom)], fill=(25, 55, 60, 25), width=1)
    for gy in range(screen_top, screen_bottom, 30):
        grid_draw.line([(margin_x, gy), (margin_x + screen_w, gy)], fill=(25, 55, 60, 25), width=1)
    
    # Ambient glows on screen behind sections
    grid_draw.ellipse([margin_x + 200, screen_top + 100, margin_x + 800, screen_top + 500], fill=(56, 189, 248, 18))
    grid_draw.ellipse([margin_x + screen_w - 800, screen_top + 100, margin_x + screen_w - 200, screen_top + 500], fill=(167, 139, 250, 18))
    grid_draw.ellipse([W//2 - 300, screen_top + 150, W//2 + 300, screen_top + 550], fill=(52, 211, 153, 18))

    base = Image.alpha_composite(base.convert('RGBA'), grid_img).convert('RGB')
    draw = ImageDraw.Draw(base)

    # Fonts
    bold_font_path = 'C:/Windows/Fonts/segoeuib.ttf'
    reg_font_path = 'C:/Windows/Fonts/segoeui.ttf'
    mono_font_path = 'C:/Windows/Fonts/consola.ttf'

    font_brand = ImageFont.truetype(bold_font_path, 34)
    font_sub = ImageFont.truetype(reg_font_path, 16)
    font_badge = ImageFont.truetype(bold_font_path, 13)
    font_col_title = ImageFont.truetype(bold_font_path, 17)
    font_course = ImageFont.truetype(reg_font_path, 13)
    font_salary = ImageFont.truetype(bold_font_path, 11)
    font_counter = ImageFont.truetype(bold_font_path, 22)

    # 3. SCREEN HEADER BAR
    draw.rectangle([margin_x, screen_top, margin_x + screen_w, screen_top + 72], fill=(13, 25, 30))
    draw.line([(margin_x, screen_top + 72), (margin_x + screen_w, screen_top + 72)], fill=(52, 211, 153), width=2)

    # Logo / Brand
    draw.text((margin_x + 35, screen_top + 16), "GREENS TECHNOLOGYS", fill=(134, 195, 124), font=font_brand)
    draw.text((margin_x + 440, screen_top + 28), "•  CENTRAL MASTER COURSES DIRECTORY  •  100% PLACEMENT ECOSYSTEM", fill=(160, 200, 195), font=font_sub)

    # Right HUD Stats
    draw.text((margin_x + screen_w - 460, screen_top + 18), "LIVE ENROLLMENTS: 22 CAMPUSES", fill=(56, 189, 248), font=font_badge)
    draw.text((margin_x + screen_w - 460, screen_top + 38), "AVG SALARY PACKAGE: ₹8.5 - 24 LPA", fill=(250, 204, 21), font=font_badge)

    # 4. ALL 18 DOMAINS ORGANIZED INTO 6 EXPANDED LUXURY PANELS
    panels = [
        {
            "category": "1. SOFTWARE DEV & FULL STACK",
            "accent": (56, 189, 248),
            "salary": "₹6.5 - 18.0 LPA",
            "courses": [
                "• Full Stack Developer (100% Placement)",
                "• Java Full Stack (Spring Boot + React)",
                "• Python Full Stack (Django, FastAPI, AI)",
                "• .NET Core Full Stack & C# Microservices",
                "• Core Java 21, J2EE, Hibernate, Spring AI",
                "• Python Programming & Data Automation",
                "• C & C++ Systems Programming",
                "• UNIX Shell Scripting & Linux Kernel",
                "• Angular 17+ & React Frontend Architecture",
                "• iOS (Swift) & Android (Kotlin) Mobile Apps",
                "• React Native & Ionic Cross-Platform",
                "• Oracle APEX & Forms Enterprise Apps"
            ]
        },
        {
            "category": "2. AI, GENAI & DATA SCIENCE",
            "accent": (167, 139, 250),
            "salary": "₹9.0 - 28.0 LPA",
            "courses": [
                "• Generative AI & Autonomous Agentic Systems",
                "• LLMs, LangChain, LlamaIndex & Vector DBs",
                "• Enterprise RAG Pipelines & Fine-Tuning",
                "• Artificial Intelligence & Deep Neural Nets",
                "• Machine Learning Engineer with Python",
                "• Data Science with Python & R Analytics",
                "• Natural Language Processing (NLP)",
                "• Computer Vision & OpenCV Edge AI",
                "• Prompt Engineering & AI Workflows",
                "• MLOps (Kubeflow, MLflow, Docker)",
                "• TensorFlow & PyTorch Enterprise Lab",
                "• Forward Deployed AI Engineer Track"
            ]
        },
        {
            "category": "3. CLOUD COMPUTING & DEVOPS",
            "accent": (52, 211, 153),
            "salary": "₹8.0 - 22.5 LPA",
            "courses": [
                "• DevOps Master (Docker, K8s, Terraform)",
                "• AWS Certified Solutions Architect",
                "• Microsoft Azure Cloud Administrator",
                "• Google Cloud Platform (GCP) Engineer",
                "• Kubernetes Administration (CKA/CKAD)",
                "• CI/CD Pipeline Automation (Jenkins/GitLab)",
                "• Infrastructure as Code with Terraform",
                "• RedHat Linux Admin (RHCSA / RHCE)",
                "• Site Reliability Engineering (SRE & AIOps)",
                "• Cloud Security & DevSecOps Architecture",
                "• VMware vSphere & Hybrid Cloud Infra",
                "• OpenShift Container Platform Admin"
            ]
        },
        {
            "category": "4. SOFTWARE TESTING & SDET",
            "accent": (251, 146, 60),
            "salary": "₹6.0 - 16.5 LPA",
            "courses": [
                "• Playwright Next-Gen Web Automation",
                "• Selenium WebDriver (Java / Python)",
                "• Full SDET Automation Architect Program",
                "• REST Assured & Postman API Automation",
                "• Mobile Testing with Appium (iOS/Android)",
                "• Cucumber BDD & TestNG Frameworks",
                "• Performance Testing with Apache JMeter",
                "• Tricentis Tosca Automation Suite",
                "• Manual Testing & ISTQB Certification Prep",
                "• AI-Augmented QA & Autonomous Testing",
                "• Cypress Modern Web Test Engineering",
                "• Security Testing with OWASP ZAP"
            ]
        },
        {
            "category": "5. DATA ENG & BUSINESS INTEL",
            "accent": (244, 114, 182),
            "salary": "₹7.5 - 20.0 LPA",
            "courses": [
                "• Data Engineering (PySpark, Databricks)",
                "• Microsoft Power BI Masterclass (DAX, M)",
                "• Tableau Desktop & Server Data Analyst",
                "• Snowflake Cloud Data Warehouse Arch",
                "• SQL Server, Oracle SQL & Advanced PL/SQL",
                "• Big Data Hadoop, Hive & Kafka Streaming",
                "• Database Administration (Oracle / SQL DBA)",
                "• ETL Pipelines with Informatica & Talend",
                "• Business Analysis (CBAP / Agile BA)",
                "• Alteryx Data Preparation & Analytics",
                "• Google Looker & Cloud Dataflow",
                "• Advanced Excel, VBA & Financial Modeling"
            ]
        },
        {
            "category": "6. CYBER, ENTERPRISE & CREATIVE",
            "accent": (250, 204, 21),
            "salary": "₹7.0 - 25.0 LPA",
            "courses": [
                "• Ethical Hacking & Penetration Testing",
                "• SOC Analyst & Cyber Threat Intelligence",
                "• Salesforce Admin & Apex/LWC Developer",
                "• SAP S/4HANA (FICO, MM, SD, ABAP, SuccessFactors)",
                "• Oracle Fusion Cloud & Financial Applications",
                "• UiPath & Automation Anywhere RPA",
                "• UI/UX Design (Figma, Prototyping, Usability)",
                "• Embedded Systems, IoT & Automotive CAN",
                "• Digital Marketing, SEO & Performance Ads",
                "• Microsoft Power Apps & Power Automate",
                "• Foreign Languages (German, French, Japanese)",
                "• Madurai & London Specialized Programs"
            ]
        }
    ]

    col_count = len(panels)
    usable_w = screen_w - 40
    col_w = (usable_w - (col_count - 1) * 14) // col_count
    content_top = screen_top + 88

    for i, col in enumerate(panels):
        cx = margin_x + 20 + i * (col_w + 14)
        cy = content_top

        # Card Container
        card_h = screen_bottom - content_top - 20
        draw.rounded_rectangle([cx, cy, cx + col_w, cy + card_h], radius=10, fill=(13, 23, 28), outline=(24, 42, 50), width=1)
        
        # Header inside card
        header_h = 54
        draw.rounded_rectangle([cx, cy, cx + col_w, cy + header_h], radius=10, fill=(18, 32, 38))
        draw.line([(cx + 8, cy + header_h), (cx + col_w - 8, cy + header_h)], fill=col["accent"], width=2)
        
        draw.text((cx + 10, cy + 10), col["category"], fill=col["accent"], font=font_col_title)
        draw.text((cx + 10, cy + 32), f"Avg: {col['salary']}", fill=(180, 210, 215), font=font_salary)

        # List items
        list_y = cy + header_h + 10
        item_h = 24
        for c_idx, c_text in enumerate(col["courses"]):
            if list_y + item_h > cy + card_h - 10:
                break
            if c_idx % 2 == 1:
                draw.rectangle([cx + 2, list_y - 2, cx + col_w - 2, list_y + item_h - 3], fill=(11, 20, 24))
            draw.text((cx + 8, list_y), c_text, fill=(225, 238, 242), font=font_course)
            list_y += item_h + 2

    # 5. FLOOR REFLECTIONS
    refl_h = int(H * 0.22)
    refl_area = base.crop((margin_x, screen_bottom - 260, margin_x + screen_w, screen_bottom))
    refl_area = refl_area.transpose(Image.FLIP_TOP_BOTTOM)
    refl_area = refl_area.resize((screen_w, refl_h), Image.Resampling.BILINEAR)
    refl_area = refl_area.filter(ImageFilter.GaussianBlur(10))

    alpha_mask = Image.new('L', (screen_w, refl_h))
    for ry in range(refl_h):
        val = int(95 * (1 - ry / refl_h))
        alpha_mask.paste(val, (0, ry, screen_w, ry + 1))
    
    base.paste(refl_area, (margin_x, screen_bottom + 8), alpha_mask)

    # 6. PHOTOREALISTIC STUDENT STANDING IN FRONT OF THE BIG SCREEN
    # We composite a high-quality human silhouette / back-3/4 view of a young tech professional
    # looking up at the panoramic display, illuminated by the emerald & cyan screen light!
    student_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(student_layer)

    # Position student in center-left foreground
    sx = int(W * 0.44)
    sy = floor_y - 110  # Standing tall looking up

    # Dramatic Floor Reflection & Shadow of the student
    s_draw.ellipse([sx - 150, sy + 440, sx + 150, sy + 510], fill=(0, 0, 0, 220))
    # Soft reflection
    s_draw.ellipse([sx - 80, sy + 445, sx + 80, sy + 480], fill=(20, 45, 40, 100))

    # Shoes & Cuffs
    # Left shoe
    s_draw.rounded_rectangle([sx - 65, sy + 420, sx - 20, sy + 455], radius=10, fill=(12, 16, 20, 255))
    s_draw.line([(sx - 60, sy + 430), (sx - 25, sy + 430)], fill=(52, 211, 153, 180), width=2)
    # Right shoe
    s_draw.rounded_rectangle([sx + 20, sy + 420, sx + 65, sy + 455], radius=10, fill=(12, 16, 20, 255))
    s_draw.line([(sx + 25, sy + 430), (sx + 60, sy + 430)], fill=(52, 211, 153, 180), width=2)

    # Trousers / Chinos
    s_draw.polygon([
        (sx - 55, sy + 250), (sx - 12, sy + 250),
        (sx - 22, sy + 425), (sx - 60, sy + 425)
    ], fill=(18, 25, 30, 255))
    s_draw.polygon([
        (sx + 12, sy + 250), (sx + 55, sy + 250),
        (sx + 60, sy + 425), (sx + 22, sy + 425)
    ], fill=(18, 25, 30, 255))

    # Upper body - Tailored Dark Navy Blazer / Tech Jacket
    s_draw.polygon([
        (sx - 85, sy + 70), (sx + 85, sy + 70),
        (sx + 65, sy + 260), (sx - 65, sy + 260)
    ], fill=(22, 32, 40, 255))

    # Sleek Slim Tech Backpack
    s_draw.rounded_rectangle([sx - 58, sy + 95, sx + 58, sy + 235], radius=22, fill=(14, 20, 24, 255))
    # Backpack straps
    s_draw.line([(sx - 42, sy + 105), (sx - 48, sy + 215)], fill=(38, 52, 60, 255), width=7)
    s_draw.line([(sx + 42, sy + 105), (sx + 48, sy + 215)], fill=(38, 52, 60, 255), width=7)
    # Emerald tech logo on backpack
    s_draw.ellipse([sx - 12, sy + 140, sx + 12, sy + 164], fill=(24, 40, 36, 255), outline=(52, 211, 153), width=2)
    s_draw.text((sx - 5, sy + 144), "G", fill=(134, 195, 124), font=font_salary)

    # Left Arm by side
    s_draw.polygon([
        (sx - 85, sy + 70), (sx - 110, sy + 160),
        (sx - 95, sy + 260), (sx - 75, sy + 250),
        (sx - 65, sy + 150)
    ], fill=(20, 30, 38, 255))

    # Right Arm - Holding tablet or slightly gesturing towards the screen
    s_draw.polygon([
        (sx + 85, sy + 70), (sx + 125, sy + 130),
        (sx + 160, sy + 110), (sx + 170, sy + 125),
        (sx + 130, sy + 165), (sx + 75, sy + 160)
    ], fill=(20, 30, 38, 255))
    # Glowing tablet in right hand
    s_draw.rounded_rectangle([sx + 145, sy + 95, sx + 195, sy + 135], radius=4, fill=(10, 20, 25, 255), outline=(56, 189, 248), width=2)
    s_draw.rounded_rectangle([sx + 148, sy + 98, sx + 192, sy + 132], radius=2, fill=(56, 189, 248, 80))

    # Collar & Neck
    s_draw.rectangle([sx - 20, sy + 40, sx + 20, sy + 75], fill=(36, 48, 56, 255))

    # Head (Looking up in awe at the panoramic screen)
    s_draw.ellipse([sx - 40, sy - 35, sx + 40, sy + 45], fill=(26, 36, 44, 255))
    # Stylized hair
    s_draw.ellipse([sx - 42, sy - 42, sx + 42, sy + 20], fill=(10, 14, 18, 255))

    # Realistic Cinema Lighting (Screen Light Bounce onto Student)
    # Bright emerald & cyan rim light along the shoulders, head and arms
    s_draw.arc([sx - 41, sy - 40, sx + 41, sy + 22], 180, 360, fill=(134, 195, 124, 255), width=4)
    s_draw.line([(sx - 85, sy + 70), (sx - 110, sy + 160)], fill=(52, 211, 153, 230), width=4)
    s_draw.line([(sx + 85, sy + 70), (sx + 160, sy + 110)], fill=(56, 189, 248, 230), width=4)
    s_draw.arc([sx - 58, sy + 95, sx + 58, sy + 140], 180, 360, fill=(134, 195, 124, 160), width=2)

    # Composite student layer onto base
    base = Image.alpha_composite(base.convert('RGBA'), student_layer).convert('RGB')

    # 7. Final Polish & Soft Vignette
    vignette = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    v_draw = ImageDraw.Draw(vignette)
    v_draw.rectangle([0, 0, W, 30], fill=(0, 0, 0, 70))
    v_draw.rectangle([0, H - 40, W, H], fill=(0, 0, 0, 120))
    v_draw.rectangle([0, 0, 40, H], fill=(0, 0, 0, 90))
    v_draw.rectangle([W - 40, 0, W, H], fill=(0, 0, 0, 90))
    base = Image.alpha_composite(base.convert('RGBA'), vignette).convert('RGB')

    out_path = r"c:\Users\muthu\Downloads\greenstech\src\assets\courses\greens_courses_big_screen.jpg"
    base.save(out_path, format="JPEG", quality=96)
    print(f"Master Big Screen Hero created successfully at: {out_path} ({W}x{H})")

if __name__ == "__main__":
    build_master_hero()
