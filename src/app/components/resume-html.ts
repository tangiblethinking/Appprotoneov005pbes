/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Christopher Kenreigh – Staff Product Designer</title>

<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,700&family=DM+Serif+Display&display=swap" rel="stylesheet"/>

<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

:root{
--blue:#2563c7;
--dark:#111111;
--mid:#444444;
--light:#666666;
--rule:#dddddd;
--green:#00A000;
--bg-tint:#f7f8fa;
}

body{
font-family:'DM Sans',sans-serif;
font-size:10.5pt;
color:var(--dark);
background:#e8e8e8;
display:flex;
justify-content:center;
padding:32px 16px;
min-height:100vh;
}

.page{
background:#fff;
width:680px;
max-width:100%;
box-shadow:0 4px 40px rgba(0,0,0,.15);
}

/* HEADER */

header{
padding:28px 36px 20px;
border-bottom:2px solid var(--rule);
}

header h1{
font-family:'DM Serif Display',Georgia,serif;
font-size:28pt;
font-weight:400;
color:var(--dark);
letter-spacing:-.5px;
line-height:1.1;
}

.title-line{
font-size:10pt;
font-weight:700;
color:var(--blue);
margin:5px 0 10px;
}

.contact{
font-size:9pt;
color:var(--mid);
display:flex;
flex-wrap:wrap;
align-items:center;
gap:6px 10px;
}

.contact .phone{color:#212121;font-weight:700;}
.contact .sep{color:var(--rule);}
.contact a{color:var(--blue);text-decoration:none;font-weight:600;}
.contact a:hover{text-decoration:underline;}

/* SECTIONS */

.section{
padding:22px 36px;
border-bottom:1px solid var(--rule);
}

.section:last-child{border-bottom:none;}

.section-title{
font-family:'DM Serif Display',Georgia,serif;
font-size:14pt;
font-weight:400;
color:var(--dark);
border-bottom:1.5px solid var(--dark);
padding-bottom:4px;
margin-bottom:14px;
}

/* SUMMARY */

.summary-quote{
font-size:9.5pt;
font-style:italic;
font-weight:700;
color:#212121;
line-height:1.65;
margin-bottom:10px;
}

.summary-bullets{
list-style:disc;
padding-left:17px;
}

.summary-bullets li{
font-size:9pt;
color:var(--mid);
line-height:1.55;
margin-bottom:3px;
}

/* EXPERIENCE */

.job{margin-bottom:20px;}
.job:last-child{margin-bottom:0;}

.job-title{
font-size:10.5pt;
font-weight:700;
color:var(--dark);
}

.job-company{
display:block;
font-size:10pt;
font-weight:500;
color:var(--blue);
text-decoration:none;
}

.job-company:hover{text-decoration:underline;}

.job-meta{
font-size:8.5pt;
color:var(--light);
margin:3px 0 7px;
display:flex;
align-items:center;
flex-wrap:wrap;
gap:4px;
}

.job-meta svg{
width:13px;
height:13px;
fill:var(--green);
flex-shrink:0;
position:relative;
top:-1px;
}

.meta-dot{color:var(--rule);margin:0 2px;}

.job ul{
list-style:disc;
padding-left:17px;
}

.job ul li{
font-size:9.5pt;
color:var(--mid);
line-height:1.5;
margin-bottom:3px;
}

/* KEY ACHIEVEMENTS */

.dot-list{
list-style:disc;
padding-left:17px;
}

.dot-list li{
font-size:9.5pt;
color:var(--mid);
line-height:1.65;
}

/* SKILLS */

.subsection-title{
font-family:'DM Serif Display',Georgia,serif;
font-size:12pt;
font-weight:400;
color:var(--dark);
border-bottom:1px solid var(--rule);
padding-bottom:3px;
margin:16px 0 10px;
}

.tag-list{
display:flex;
flex-wrap:wrap;
gap:5px;
}

.tag{
font-size:8pt;
font-weight:500;
color:var(--blue);
background:rgba(37,99,199,.09);
border-radius:3px;
padding:3px 8px;
}

/* EDUCATION */

.edu-degree{font-size:10pt;font-weight:700;color:var(--dark);}
.edu-school{font-size:9.5pt;font-weight:500;color:var(--blue);margin-top:2px;}

.edu-meta{
font-size:8.5pt;
color:var(--light);
margin-top:5px;
display:flex;
align-items:center;
flex-wrap:wrap;
gap:4px;
}

/* MOBILE */

@media(max-width:580px){
body{padding:0;background:#fff;}
.page{box-shadow:none;}
header{padding:20px 18px 16px;}
header h1{font-size:22pt;}
.title-line{font-size:9pt;}
.section{padding:18px;}
.section-title{font-size:13pt;}
}

@media print{
body{background:white;padding:0;}
.page{box-shadow:none;width:100%;}
}

</style>
</head>

<body>

<div class="page">

<header>

<h1>Christopher Kenreigh</h1>

<div class="title-line">
Senior Design Operations Manager | Insurtech Platforms | End-to-End Product Design | Digital Applications | Data-Driven UX
</div>

<div class="contact">
<span class="phone">480-206-2145</span>
<span class="sep">|</span>
<a href="mailto:c.kenreigh@gmail.com">c.kenreigh@gmail.com</a>
<span class="sep">|</span>
<a href="https://www.linkedin.com/in/kenreigh/">LinkedIn</a>
<span class="sep">|</span>
<a href="https://www.uxapex.com/portfolioa5">Portfolio</a>
<span class="sep">|</span>
Phoenix, AZ
</div>

</header>


<div class="section">

<h2 class="section-title">Summary</h2>

<p class="summary-quote">
"Senior product designer with 12+ years designing digital platforms that power complex consumer applications, financial workflows, and regulated enterprise systems. Expert translating business logic, underwriting rules, and operational workflows into intuitive SaaS product experiences across web and mobile."
</p>

<ul class="summary-bullets">
<li>12+ years designing complex digital products including SaaS platforms, transactional flows, and consumer-facing applications</li>
<li>Deep experience designing onboarding, identity verification, application workflows, checkout flows, and post-conversion engagement</li>
<li>Strong collaboration with product managers and engineering teams delivering production-ready designs across agile development cycles</li>
<li>Architect of scalable design systems used across multiple web and mobile platforms</li>
<li>Data-driven designer using experimentation, analytics, and user research to guide product decisions</li>
<li>Hands-on with emerging AI tools, automation workflows, and experimentation platforms accelerating product development</li>
</ul>

</div>

<!-- EXPERIENCE (UNCHANGED STRUCTURE WITH UPDATED TEXT) -->

<div class="section">
<h2 class="section-title">Experience</h2>

<div class="job">
<div class="job-title">Senior Design Operations Manager (Principal)</div>
<a class="job-company" href="https://www.plexusworldwide.com">Plexus Worldwide</a>
<div class="job-meta">05/2024 – Present · Phoenix, AZ</div>
<ul>
<li>Lead design of large-scale digital commerce and membership platform serving global users across web and mobile applications</li>
<li>Redesigned onboarding, enrollment, and checkout workflows using behavioral analytics to reduce abandonment 43%</li>
<li>Translate complex business logic, compliance requirements, and operational constraints into scalable product experiences</li>
<li>Architected a unified design system enabling multiple engineering teams to build consistent interfaces</li>
<li>Facilitate cross-functional workshops with product managers and engineering to align roadmap priorities and user needs</li>
<li>Introduced AI-assisted design workflows improving team velocity 35%</li>
</ul>
</div>

<div class="job">
<div class="job-title">Senior Product Designer</div>
<a class="job-company" href="https://www.freeportmcmoran.com">Freeport-McMoRan</a>
<div class="job-meta">08/2022 – 10/2023 · Phoenix, AZ</div>
<ul>
<li>Designed enterprise SaaS tools used by operational teams across global infrastructure projects</li>
<li>Conducted discovery research translating technical workflows into usable digital interfaces</li>
<li>Developed scalable component system implemented across React applications</li>
<li>Collaborated with engineering teams delivering responsive web and mobile experiences improving operational efficiency 30%</li>
</ul>
</div>

<div class="job">
<div class="job-title">Senior Product Designer</div>
<a class="job-company" href="https://www.opentechalliance.com">OpenTech Alliance</a>
<div class="job-meta">05/2021 – 08/2022 · Phoenix, AZ</div>
<ul>
<li>Designed SaaS interfaces supporting automated commerce workflows and customer lifecycle interactions</li>
<li>Redesigned kiosk interface improving task completion 75%</li>
<li>Introduced design systems improving product consistency and engineering efficiency</li>
<li>Used behavioral data to optimize user journeys improving fulfillment 25%</li>
</ul>
</div>

<div class="job">
<div class="job-title">UX Design Lead</div>
<a class="job-company" href="https://www.siemens.com">Siemens</a>
<div class="job-meta">07/2020 – 05/2021 · Remote</div>
<ul>
<li>Led UX strategy across enterprise engineering platforms used by global industrial teams</li>
<li>Unified fragmented interface frameworks into scalable component systems</li>
<li>Produced design documentation enabling engineering teams to build interfaces without design bottlenecks</li>
</ul>
</div>

<div class="job">
<div class="job-title">Senior UX Designer</div>
<a class="job-company" href="https://www.glynlyon.com">Glynlyon Inc</a>
<div class="job-meta">02/2014 – 04/2019 · Phoenix, AZ</div>
<ul>
<li>Designed WCAG-compliant digital learning platforms used across web and mobile devices</li>
<li>Led user research and usability testing improving usability metrics 65%</li>
<li>Facilitated design thinking workshops aligning product and engineering teams around user needs</li>
</ul>
</div>

</div>

<!-- ACHIEVEMENTS -->

<div class="section">
<h2 class="section-title">Key Achievements</h2>
<ul class="dot-list">
<li>43% reduction in checkout abandonment through data-driven UX redesign</li>
<li>Implemented scalable design systems enabling 50% faster product delivery</li>
<li>Secured executive approval for 10+ major product initiatives through strategic design presentations</li>
<li>Delivered 100% compliant user data workflows across regulated product environments</li>
</ul>
</div>

<!-- SKILLS -->

<div class="section">
<h2 class="section-title">Skills</h2>
<div class="tag-list">
<span class="tag">Product Design</span>
<span class="tag">SaaS Platforms</span>
<span class="tag">Application Workflows</span>
<span class="tag">User Research</span>
<span class="tag">Design Systems</span>
<span class="tag">Figma</span>
<span class="tag">Prototyping</span>
<span class="tag">Interaction Design</span>
<span class="tag">Experimentation</span>
<span class="tag">Data-Driven UX</span>
<span class="tag">Accessibility</span>
<span class="tag">Agile Product Development</span>
</div>
</div>

<!-- AI -->

<div class="section">
<h2 class="section-title">AI & Emerging Technology</h2>
<div class="tag-list">
<span class="tag">LLM Workflows</span>
<span class="tag">Agentic AI</span>
<span class="tag">RAG Systems</span>
<span class="tag">AI-Assisted Prototyping</span>
<span class="tag">Responsible AI</span>
</div>
</div>

<!-- EDUCATION -->

<div class="section">

<h2 class="section-title">Education & Certifications</h2>

<div class="edu-degree">Bachelor of Art – Information Design & Technology</div>
<div class="edu-school">The Art Institute of Phoenix</div>

<div class="edu-meta">
09/2002 – 09/2005 · Phoenix, AZ
</div>

<div style="margin-top:12px;font-size:9pt;color:var(--mid);line-height:1.6;">
<strong style="color:var(--dark);">Additional:</strong>
Project Management & Agile Workflows (NASBA) · Microsoft Data & Software Development · TestMu AI Test Automation — LambdaTest · CompTIA A+ & Network+ · LinkedIn Learning Business Analysis & Communication
</div>

</div>

</div>
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
