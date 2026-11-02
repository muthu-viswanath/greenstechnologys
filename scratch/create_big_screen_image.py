import math
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_courses_screen_image():
    W = 2400
    H = 1250
    img = Image.new('RGB', (W, H), (8, 14, 18))
    draw = ImageDraw.Draw(img)

    # 1. Background gradient (luxurious dark amphitheater / tech lab)
    for y in range(H):
        ratio = y / H
        # Deep space slate to dark teal at bottom
        r = int(7 + ratio * 12)
        g = int(14 + ratio * 20)
        b = int(22 + ratio * 28)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # Ambient ceiling spotlights & tech glow
    glow_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_img)

    # Top emerald architectural lighting
    for i in range(12):
        x_spot = 150 + i * 190
        glow_draw.ellipse([x_spot - 120, -50, x_spot + 120, 180], fill=(52, 211, 153, 18))
        glow_draw.line([(x_spot, 0), (x_spot, 25)], fill=(134, 195, 124, 180), width=3)

    # Perspective floor lines (reflective polished showroom floor)
    floor_y = int(H * 0.72)
    for x in range(0, W + 1, 100):
        # Draw perspective vanishing lines to center
        cx = W // 2
        cy = floor_y - 80
        # Line from horizon to bottom
        bx = cx + int((x - cx) * 2.2)
        glow_draw.line([(x, floor_y), (bx, H)], fill=(40, 75, 70, 25), width=1)

    for fy in range(floor_y, H, 35):
        alpha = int(10 + (fy - floor_y) / (H - floor_y) * 35)
        glow_draw.line([(0, fy), (W, fy)], fill=(52, 211, 153, alpha), width=1)

    img = Image.alpha_composite(img.convert('RGBA'), glow_img).convert('RGB')
    draw = ImageDraw.Draw(img)

    # 2. THE BIG SCREEN (Giant Curved Panoramic Video Wall)
    # Screen bounding box
    margin_x = 90
    screen_top = 70
    screen_w = W - (2 * margin_x)
    screen_h = int(H * 0.62)
    screen_bottom = screen_top + screen_h

    # Screen Outer Glow / Bezel Halo
    halo_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    halo_draw = ImageDraw.Draw(halo_img)
    for offset in range(30, 0, -2):
        alpha = int((30 - offset) * 2.2)
        halo_draw.rounded_rectangle(
            [margin_x - offset, screen_top - offset, margin_x + screen_w + offset, screen_bottom + offset],
            radius=24,
            outline=(134, 195, 124, alpha),
            width=2
        )
    img = Image.alpha_composite(img.convert('RGBA'), halo_img).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Screen Bezel & Surface
    draw.rounded_rectangle(
        [margin_x - 6, screen_top - 6, margin_x + screen_w + 6, screen_bottom + 6],
        radius=20,
        fill=(15, 23, 26),
        outline=(52, 211, 153),
        width=3
    )

    # Inside screen background: subtle deep cyan/emerald tech grid
    screen_inner = [margin_x, screen_top, margin_x + screen_w, screen_bottom]
    draw.rounded_rectangle(screen_inner, radius=16, fill=(10, 18, 22))

    # Grid pattern on screen
    grid_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_img)
    for gx in range(margin_x, margin_x + screen_w, 40):
        grid_draw.line([(gx, screen_top), (gx, screen_bottom)], fill=(30, 60, 65, 30), width=1)
    for gy in range(screen_top, screen_bottom, 35):
        grid_draw.line([(margin_x, gy), (margin_x + screen_w, gy)], fill=(30, 60, 65, 30), width=1)
    img = Image.alpha_composite(img.convert('RGBA'), grid_img).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Fonts
    font_path_bold = 'C:/Windows/Fonts/segoeuib.ttf'
    font_path_regular = 'C:/Windows/Fonts/segoeui.ttf'
    font_path_mono = 'C:/Windows/Fonts/consola.ttf'

    font_brand = ImageFont.truetype(font_path_bold, 36)
    font_sub = ImageFont.truetype(font_path_regular, 18)
    font_col_title = ImageFont.truetype(font_path_bold, 19)
    font_course = ImageFont.truetype(font_path_regular, 15)
    font_badge = ImageFont.truetype(font_path_bold, 13)

    # 3. SCREEN CONTENT: GREENS TECHNOLOGYS MASTER COURSE DIRECTORY
    # Screen Header Bar
    draw.rectangle([margin_x, screen_top, margin_x + screen_w, screen_top + 75], fill=(14, 28, 34))
    draw.line([(margin_x, screen_top + 75), (margin_x + screen_w, screen_top + 75)], fill=(52, 211, 153), width=2)

    # Brand Title on Screen
    draw.text((margin_x + 35, screen_top + 16), "GREENS TECHNOLOGYS", fill=(134, 195, 124), font=font_brand)
    draw.text((margin_x + 470, screen_top + 28), "•  CENTRAL COURSES DISPLAY & CAREER PATHWAYS", fill=(160, 200, 190), font=font_sub)

    # Live Status HUD on top-right of screen
    draw.text((margin_x + screen_w - 380, screen_top + 26), "● 100+ CERTIFIED TRACKS  |  22 CAMPUSES", fill=(56, 189, 248), font=font_badge)

    # Screen 6 Main Course Columns
    columns_data = [
        {
            "category": "PROGRAMMING & FULL STACK",
            "color": (56, 189, 248),  # Sky blue
            "courses": [
                "• Full Stack Developer (100% Placement)",
                "• Java Full Stack (Spring Boot + React)",
                "• Python Full Stack (Django + Vue)",
                "• .NET Core Full Stack & C# MVC",
                "• Core Java, J2EE, Hibernate & Spring AI",
                "• Python Programming & Data Automation",
                "• C & C++ Systems Programming",
                "• UNIX / Linux Shell Scripting",
                "• Angular & React Frontend Architecture",
                "• iOS & Android Native Mobile Apps"
            ]
        },
        {
            "category": "AI, ML & DATA SCIENCE",
            "color": (167, 139, 250),  # Purple
            "courses": [
                "• Generative AI & Autonomous Agents",
                "• LLMs, LangChain, LlamaIndex & RAG",
                "• Artificial Intelligence & Deep Learning",
                "• Machine Learning with Python",
                "• Data Science with R & Python",
                "• Natural Language Processing (NLP)",
                "• Computer Vision & OpenCV",
                "• Prompt Engineering for Developers",
                "• TensorFlow & PyTorch Frameworks",
                "• AI-Powered App Integration"
            ]
        },
        {
            "category": "CLOUD, DEVOPS & INFRA",
            "color": (52, 211, 153),  # Emerald
            "courses": [
                "• DevOps Master (Docker, K8s, Terraform)",
                "• AWS Solutions Architect Certified",
                "• Microsoft Azure Cloud Administrator",
                "• Google Cloud Platform (GCP) Eng",
                "• Kubernetes (CKA / CKAD) Admin",
                "• CI/CD Pipeline Automation (Jenkins)",
                "• Infrastructure as Code (Terraform)",
                "• RedHat Linux Administration (RHCSA)",
                "• VMware vSphere & Virtualization",
                "• Site Reliability Engineering (SRE)"
            ]
        },
        {
            "category": "SOFTWARE TESTING & SDET",
            "color": (251, 146, 60),  # Orange
            "courses": [
                "• Playwright Next-Gen Automation",
                "• Selenium WebDriver with Java / Python",
                "• Full SDET Automation Engineer",
                "• REST Assured & Postman API Testing",
                "• Mobile Testing with Appium",
                "• Cucumber BDD Framework",
                "• Performance Testing with JMeter",
                "• Tricentis Tosca Automation",
                "• Manual Testing & ISTQB Prep",
                "• AI-Augmented QA Testing"
            ]
        },
        {
            "category": "DATA ENG & BUSINESS INTEL",
            "color": (244, 114, 182),  # Pink
            "courses": [
                "• Data Engineering (Spark + Databricks)",
                "• Microsoft Power BI Masterclass",
                "• Tableau Desktop & Server Analyst",
                "• Snowflake Cloud Data Warehouse",
                "• SQL Server, Oracle SQL & PL/SQL",
                "• Big Data Hadoop & Kafka Streaming",
                "• Database Administration (DBA)",
                "• ETL Pipelines with Informatica",
                "• Business Analysis (CBAP Prep)",
                "• Advanced Excel & Financial Modeling"
            ]
        },
        {
            "category": "CYBERSECURITY & ENTERPRISE",
            "color": (250, 204, 21),  # Gold
            "courses": [
                "• Ethical Hacking & Cyber Defense",
                "• SOC Analyst & Threat Hunting",
                "• Salesforce Admin & Apex Developer",
                "• SAP S/4HANA (FICO, MM, SD, ABAP)",
                "• Oracle Fusion Cloud & Financials",
                "• UiPath & Automation Anywhere RPA",
                "• UI/UX Design (Figma + Design Systems)",
                "• Embedded Systems & IoT Engineering",
                "• Digital Marketing & Growth Hacking",
                "• German, French & Japanese Training"
            ]
        }
    ]

    col_count = len(columns_data)
    inner_padding = 24
    usable_w = screen_w - (2 * inner_padding)
    col_w = (usable_w - (col_count - 1) * 16) // col_count
    content_top = screen_top + 90

    for i, col in enumerate(columns_data):
        cx = margin_x + inner_padding + i * (col_w + 16)
        cy = content_top

        # Category Card Header
        header_h = 36
        draw.rounded_rectangle([cx, cy, cx + col_w, cy + header_h], radius=6, fill=(18, 32, 38))
        draw.line([(cx + 8, cy + header_h - 1), (cx + col_w - 8, cy + header_h - 1)], fill=col["color"], width=2)
        draw.text((cx + 10, cy + 9), col["category"], fill=col["color"], font=font_col_title)

        # Course Items
        list_y = cy + header_h + 12
        for c_idx, course in enumerate(col["courses"]):
            # Alternate row background
            item_h = 24
            if c_idx % 2 == 1:
                draw.rectangle([cx, list_y - 2, cx + col_w, list_y + item_h - 4], fill=(13, 23, 28))
            draw.text((cx + 8, list_y), course, fill=(215, 230, 235), font=font_course)
            list_y += item_h + 4

    # Floor Reflection of the Screen
    refl_h = int(H * 0.18)
    refl_img = img.crop((margin_x, screen_bottom - 220, margin_x + screen_w, screen_bottom))
    refl_img = refl_img.transpose(Image.FLIP_TOP_BOTTOM)
    refl_img = refl_img.resize((screen_w, refl_h), Image.Resampling.BILINEAR)
    refl_img = refl_img.filter(ImageFilter.GaussianBlur(8))
    
    # Fade reflection
    alpha_mask = Image.new('L', (screen_w, refl_h))
    for ry in range(refl_h):
        val = int(80 * (1 - ry / refl_h))
        alpha_mask.paste(val, (0, ry, screen_w, ry + 1))
    
    img.paste(refl_img, (margin_x, screen_bottom + 12), alpha_mask)
    draw = ImageDraw.Draw(img)

    # 4. STUDENT FIGURE STANDING IN FRONT OF THE BIG SCREEN (Silhouette / Back 3/4 view)
    # Positioning the student at center-left looking up at the panoramic display
    student_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(student_img)

    sx = W // 2 - 80   # Center offset
    sy = floor_y - 40  # Feet planted on the floor
    # Student scale: approx 420px height
    # Silhouette color: deep navy slate with emerald edge lighting from screen

    # Floor shadow under student
    s_draw.ellipse([sx - 110, sy + 380, sx + 110, sy + 430], fill=(0, 0, 0, 160))

    # Shoes
    s_draw.rounded_rectangle([sx - 55, sy + 365, sx - 15, sy + 395], radius=8, fill=(15, 20, 24, 255))
    s_draw.rounded_rectangle([sx + 15, sy + 365, sx + 55, sy + 395], radius=8, fill=(15, 20, 24, 255))
    # Shoes highlights
    s_draw.line([(sx - 50, sy + 370), (sx - 20, sy + 370)], fill=(52, 211, 153, 160), width=2)
    s_draw.line([(sx + 20, sy + 370), (sx + 50, sy + 370)], fill=(52, 211, 153, 160), width=2)

    # Legs (Trousers / Jeans)
    # Left leg
    s_draw.polygon([
        (sx - 48, sy + 220), (sx - 12, sy + 220),
        (sx - 18, sy + 370), (sx - 50, sy + 370)
    ], fill=(22, 30, 36, 255))
    # Right leg
    s_draw.polygon([
        (sx + 12, sy + 220), (sx + 48, sy + 220),
        (sx + 50, sy + 370), (sx + 18, sy + 370)
    ], fill=(22, 30, 36, 255))

    # Torso (Jacket / Shirt with backpack)
    # Body
    s_draw.polygon([
        (sx - 70, sy + 60), (sx + 70, sy + 60),
        (sx + 55, sy + 225), (sx - 55, sy + 225)
    ], fill=(26, 36, 44, 255))

    # Backpack on student's back
    s_draw.rounded_rectangle([sx - 50, sy + 80, sx + 50, sy + 200], radius=18, fill=(16, 24, 28, 255))
    # Backpack straps and zipper details
    s_draw.line([(sx - 35, sy + 90), (sx - 42, sy + 185)], fill=(45, 60, 68, 255), width=6)
    s_draw.line([(sx + 35, sy + 90), (sx + 42, sy + 185)], fill=(45, 60, 68, 255), width=6)
    s_draw.arc([sx - 25, sy + 110, sx + 25, sy + 170], 0, 180, fill=(52, 211, 153, 200), width=3)

    # Left arm holding tablet/phone or down
    s_draw.polygon([
        (sx - 70, sy + 60), (sx - 95, sy + 140),
        (sx - 80, sy + 230), (sx - 65, sy + 220),
        (sx - 55, sy + 130)
    ], fill=(24, 34, 40, 255))

    # Right arm slightly raised pointing towards the screen
    s_draw.polygon([
        (sx + 70, sy + 60), (sx + 105, sy + 110),
        (sx + 135, sy + 80), (sx + 145, sy + 92),
        (sx + 108, sy + 135), (sx + 65, sy + 130)
    ], fill=(24, 34, 40, 255))

    # Neck
    s_draw.rectangle([sx - 16, sy + 32, sx + 16, sy + 62], fill=(42, 54, 62, 255))

    # Head (Looking up at the giant screen)
    # Head tilted upward
    s_draw.ellipse([sx - 34, sy - 30, sx + 34, sy + 38], fill=(28, 38, 44, 255))
    # Hair
    s_draw.ellipse([sx - 36, sy - 34, sx + 36, sy + 18], fill=(12, 16, 20, 255))

    # Rim light on student from the big screen!
    # Emerald rim on shoulders and head
    s_draw.arc([sx - 35, sy - 32, sx + 35, sy + 20], 190, 350, fill=(134, 195, 124, 240), width=3)
    s_draw.line([(sx - 70, sy + 60), (sx - 95, sy + 140)], fill=(52, 211, 153, 220), width=3)
    s_draw.line([(sx + 70, sy + 60), (sx + 135, sy + 80)], fill=(56, 189, 248, 220), width=3)

    img = Image.alpha_composite(img.convert('RGBA'), student_img).convert('RGB')
    
    # Save image
    out_dir = r"c:\Users\muthu\Downloads\greenstech\src\assets\courses"
    out_path = os.path.join(out_dir, "greens_courses_big_screen.jpg")
    img.save(out_path, format="JPEG", quality=95)
    print(f"Generated big screen image at: {out_path} ({W}x{H})")

if __name__ == "__main__":
    create_courses_screen_image()
