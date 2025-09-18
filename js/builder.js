// Step Management
let currentStep = 1;
const totalSteps = 5;

function changeStep(direction) {
    const newStep = currentStep + direction;
    
    if (newStep < 1 || newStep > totalSteps) return;
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
    
    // Show new step
    currentStep = newStep;
    document.getElementById(`step${currentStep}`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
    
    // Mark completed steps
    for (let i = 1; i < currentStep; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.add('completed');
    }
    
    // Update navigation buttons
    updateNavigation();
    
    // Generate resume on each step
    generateResume();
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
    nextBtn.style.display = currentStep === totalSteps ? 'none' : 'block';
}

// Template Management
function changeTemplate() {
    const selector = document.getElementById('templateSelector');
    const styleLink = document.getElementById('resumeStyle');
    styleLink.href = selector.value;
}

// Dynamic Form Elements
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const newItem = document.createElement('div');
    newItem.className = 'experience-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Job Title - Company" class="jobTitle">
        <div class="date-range">
            <div class="custom-date">
                <select class="startMonth"><option value="">Month</option></select>
                <select class="startYear"><option value="">Year</option></select>
            </div>
            <span>to</span>
            <div class="custom-date">
                <select class="endMonth"><option value="">Month</option></select>
                <select class="endYear"><option value="">Year</option></select>
            </div>
            <label><input type="checkbox" class="currentJob"> Current Position</label>
        </div>
        <textarea placeholder="Job responsibilities (one per line)" rows="3" class="responsibilities"></textarea>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addProject() {
    const container = document.getElementById('projectsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'project-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Project Name" class="projectName">
        <input type="text" placeholder="Technologies Used" class="projectTech">
        <textarea placeholder="Project description" rows="2" class="projectDesc"></textarea>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addEducation() {
    const container = document.getElementById('educationContainer');
    const newItem = document.createElement('div');
    newItem.className = 'education-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Institution Name" class="institution">
        <input type="text" placeholder="Degree/Course" class="degree">
        <div class="date-range">
            <div class="custom-date">
                <select class="eduStartMonth"><option value="">Month</option></select>
                <select class="eduStartYear"><option value="">Year</option></select>
            </div>
            <span>to</span>
            <div class="custom-date">
                <select class="eduEndMonth"><option value="">Month</option></select>
                <select class="eduEndYear"><option value="">Year</option></select>
            </div>
        </div>
        <input type="text" placeholder="GPA/Percentage" class="gpa">
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addSkill() {
    const container = document.getElementById('skillsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'skill-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Skill Category" class="skillCategory">
        <input type="text" placeholder="Skills (comma separated)" class="skillList">
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addCertification() {
    const container = document.getElementById('certificationsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'certification-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Certification Name" class="certName">
        <input type="text" placeholder="Issuing Organization" class="certOrg">
        <div class="custom-date single">
            <select class="certMonth"><option value="">Month</option></select>
            <select class="certYear"><option value="">Year</option></select>
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addLanguage() {
    const container = document.getElementById('languagesContainer');
    const newItem = document.createElement('div');
    newItem.className = 'language-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Language" class="languageName">
        <select class="proficiency">
            <option value="">Proficiency Level</option>
            <option value="Native">Native</option>
            <option value="Fluent">Fluent</option>
            <option value="Advanced">Advanced</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Basic">Basic</option>
        </select>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addAward() {
    const container = document.getElementById('awardsContainer');
    const newItem = document.createElement('div');
    newItem.className = 'award-item';
    newItem.innerHTML = `
        <input type="text" placeholder="Award Title" class="awardTitle">
        <input type="text" placeholder="Issuer/Institution" class="awardIssuer">
        <div class="custom-date single">
            <select class="awardMonth"><option value="">Month</option></select>
            <select class="awardYear"><option value="">Year</option></select>
        </div>
        <button type="button" onclick="this.parentElement.remove(); generateResume();">Remove</button>
    `;
    container.appendChild(newItem);
    addEventListeners(newItem);
}

function addEventListeners(element) {
    const inputs = element.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', generateResume);
        input.addEventListener('change', generateResume);
    });
    
    // Populate year dropdowns in new elements
    const yearSelects = element.querySelectorAll('select[class*="Year"]');
    const currentYear = new Date().getFullYear();
    
    yearSelects.forEach(select => {
        for (let year = currentYear + 2; year >= currentYear - 50; year--) {
            select.innerHTML += `<option value="${year}">${year}</option>`;
        }
    });
    
    // Populate month dropdowns in new elements
    const monthSelects = element.querySelectorAll('select[class*="Month"]');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    monthSelects.forEach(select => {
        months.forEach(month => {
            select.innerHTML += `<option value="${month}">${month}</option>`;
        });
    });
}

// Resume Generation (using existing logic from generator.js)
function generateResume() {
    const resume = document.getElementById('resume');
    
    // Get form data
    const name = document.getElementById('fullName').value || 'Rajesh Kumar';
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value || 'email@example.com';
    const phone = document.getElementById('phone').value || '+123 456 7890';
    const linkName1 = document.getElementById('linkName1').value;
    const linkUrl1 = document.getElementById('linkUrl1').value;
    const linkName2 = document.getElementById('linkName2').value;
    const linkUrl2 = document.getElementById('linkUrl2').value;
    const location = document.getElementById('location').value || 'City, Country';
    const summary = document.getElementById('summary').value || 'Professional summary will appear here...';
    
    // Update header
    let headerHTML = `<div class="name">${name}</div>`;
    if (jobTitle) {
        headerHTML += `<div style="font-size: 1.2em; color: #666; margin: 5px 0;">${jobTitle}</div>`;
    }
    
    let contactInfo = [];
    contactInfo.push(email, phone);
    if (linkName1 && linkUrl1) contactInfo.push(`<a href="${linkUrl1}" target="_blank">${linkName1}</a>`);
    if (linkName2 && linkUrl2) contactInfo.push(`<a href="${linkUrl2}" target="_blank">${linkName2}</a>`);
    contactInfo.push(location);
    
    headerHTML += `<div class="contact">${contactInfo.join(' | ')}</div>`;
    resume.querySelector('.header').innerHTML = headerHTML;
    
    // Clear existing sections except header
    const sections = resume.querySelectorAll('section');
    sections.forEach(section => section.remove());
    
    // Update summary
    if (summary && summary !== 'Professional summary will appear here...') {
        const summarySection = document.createElement('section');
        summarySection.innerHTML = `
            <div class="section-title">Professional Summary</div>
            <p>${summary}</p>
        `;
        resume.appendChild(summarySection);
    }
    
    // Update skills
    const skillItems = document.querySelectorAll('.skill-item');
    let hasSkills = false;
    let skillsHTML = '<div class="section-title">Skills</div>';
    
    skillItems.forEach(item => {
        const category = item.querySelector('.skillCategory').value;
        const skills = item.querySelector('.skillList').value;
        
        if (category && skills) {
            skillsHTML += `<p><strong>${category}:</strong> ${skills}</p>`;
            hasSkills = true;
        }
    });
    
    if (hasSkills) {
        const skillsSection = document.createElement('section');
        skillsSection.innerHTML = skillsHTML;
        resume.appendChild(skillsSection);
    }
    
    // Update experience
    const experienceItems = document.querySelectorAll('.experience-item');
    let hasExperience = false;
    let experienceHTML = '<div class="section-title">Work Experience</div>';
    
    experienceItems.forEach(item => {
        const jobTitle = item.querySelector('.jobTitle').value;
        const currentJob = item.querySelector('.currentJob').checked;
        const responsibilities = item.querySelector('.responsibilities').value;
        
        if (jobTitle) {
            let duration = '';
            const startMonth = item.querySelector('.startMonth').value;
            const startYear = item.querySelector('.startYear').value;
            const endMonth = item.querySelector('.endMonth').value;
            const endYear = item.querySelector('.endYear').value;
            
            if (startMonth && startYear) {
                const start = `${startMonth} ${startYear}`;
                const end = currentJob ? 'Present' : (endMonth && endYear ? `${endMonth} ${endYear}` : '');
                duration = `${start} - ${end}`;
            }
            
            experienceHTML += `
                <h3>${jobTitle}</h3>
                <p><em>${duration}</em></p>
                <ul>
            `;
            
            if (responsibilities) {
                responsibilities.split('\n').forEach(resp => {
                    if (resp.trim()) {
                        experienceHTML += `<li>${resp.trim()}</li>`;
                    }
                });
            }
            
            experienceHTML += '</ul>';
            hasExperience = true;
        }
    });
    
    if (hasExperience) {
        const experienceSection = document.createElement('section');
        experienceSection.innerHTML = experienceHTML;
        resume.appendChild(experienceSection);
    }
    
    // Update projects
    const projectItems = document.querySelectorAll('.project-item');
    let hasProjects = false;
    let projectsHTML = '<div class="section-title">Projects</div>';
    
    projectItems.forEach(item => {
        const projectName = item.querySelector('.projectName').value;
        const projectTech = item.querySelector('.projectTech').value;
        const projectDesc = item.querySelector('.projectDesc').value;
        
        if (projectName) {
            projectsHTML += `
                <h3>${projectName}</h3>
                <p><em>Technologies: ${projectTech}</em></p>
                <p>${projectDesc}</p>
            `;
            hasProjects = true;
        }
    });
    
    if (hasProjects) {
        const projectsSection = document.createElement('section');
        projectsSection.innerHTML = projectsHTML;
        resume.appendChild(projectsSection);
    }
    
    // Update education
    const educationItems = document.querySelectorAll('.education-item');
    let hasEducation = false;
    let educationHTML = '<div class="section-title">Education</div>';
    
    educationItems.forEach(item => {
        const institution = item.querySelector('.institution').value;
        const degree = item.querySelector('.degree').value;
        const gpa = item.querySelector('.gpa').value;
        
        if (institution || degree) {
            let duration = '';
            const startMonth = item.querySelector('.eduStartMonth').value;
            const startYear = item.querySelector('.eduStartYear').value;
            const endMonth = item.querySelector('.eduEndMonth').value;
            const endYear = item.querySelector('.eduEndYear').value;
            
            if (startMonth && startYear && endMonth && endYear) {
                duration = `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
            }
            
            educationHTML += `
                <h3>${degree} - ${institution}</h3>
                <p><em>${duration}</em></p>
                ${gpa ? `<p>GPA/Score: ${gpa}</p>` : ''}
            `;
            hasEducation = true;
        }
    });
    
    if (hasEducation) {
        const educationSection = document.createElement('section');
        educationSection.innerHTML = educationHTML;
        resume.appendChild(educationSection);
    }
    
    // Update certifications
    const certificationItems = document.querySelectorAll('.certification-item');
    let hasCertifications = false;
    let certificationsHTML = '<div class="section-title">Certifications</div><ul>';
    
    certificationItems.forEach(item => {
        const certName = item.querySelector('.certName').value;
        const certOrg = item.querySelector('.certOrg').value;
        
        if (certName) {
            const certMonth = item.querySelector('.certMonth').value;
            const certYear = item.querySelector('.certYear').value;
            const certDateFormatted = (certMonth && certYear) ? `${certMonth} ${certYear}` : '';
            certificationsHTML += `<li>${certName} - ${certOrg} ${certDateFormatted ? `(${certDateFormatted})` : ''}</li>`;
            hasCertifications = true;
        }
    });
    
    certificationsHTML += '</ul>';
    
    if (hasCertifications) {
        const certificationsSection = document.createElement('section');
        certificationsSection.innerHTML = certificationsHTML;
        resume.appendChild(certificationsSection);
    }
    
    // Update languages
    const languageItems = document.querySelectorAll('.language-item');
    let hasLanguages = false;
    let languagesHTML = '<div class="section-title">Languages</div><ul>';
    
    languageItems.forEach(item => {
        const langName = item.querySelector('.languageName').value;
        const proficiency = item.querySelector('.proficiency').value;
        
        if (langName) {
            languagesHTML += `<li>${langName}${proficiency ? ` - ${proficiency}` : ''}</li>`;
            hasLanguages = true;
        }
    });
    
    languagesHTML += '</ul>';
    
    if (hasLanguages) {
        const languagesSection = document.createElement('section');
        languagesSection.innerHTML = languagesHTML;
        resume.appendChild(languagesSection);
    }
    
    // Update awards
    const awardItems = document.querySelectorAll('.award-item');
    let hasAwards = false;
    let awardsHTML = '<div class="section-title">Awards & Achievements</div><ul>';
    
    awardItems.forEach(item => {
        const awardTitle = item.querySelector('.awardTitle').value;
        const awardIssuer = item.querySelector('.awardIssuer').value;
        
        if (awardTitle) {
            const awardMonth = item.querySelector('.awardMonth').value;
            const awardYear = item.querySelector('.awardYear').value;
            const awardDateFormatted = (awardMonth && awardYear) ? `${awardMonth} ${awardYear}` : '';
            awardsHTML += `<li>${awardTitle} - ${awardIssuer} ${awardDateFormatted ? `(${awardDateFormatted})` : ''}</li>`;
            hasAwards = true;
        }
    });
    
    awardsHTML += '</ul>';
    
    if (hasAwards) {
        const awardsSection = document.createElement('section');
        awardsSection.innerHTML = awardsHTML;
        resume.appendChild(awardsSection);
    }
    
    // Update interests
    const interests = document.getElementById('interests').value;
    if (interests) {
        const interestsSection = document.createElement('section');
        interestsSection.innerHTML = `
            <div class="section-title">Interests</div>
            <p>${interests}</p>
        `;
        resume.appendChild(interestsSection);
    }
}

function generateFilename() {
    const name = document.getElementById('fullName').value || 'Rajesh_Kumar';
    const jobTitle = document.getElementById('jobTitle').value || '';
    
    let filename = name.replace(/[^a-zA-Z0-9]/g, '_');
    if (jobTitle) {
        filename += '_' + jobTitle.replace(/[^a-zA-Z0-9]/g, '_');
    }
    filename += '_Resume.pdf';
    
    return filename;
}

function downloadPDF() {
    const element = document.getElementById('resume');
    
    const clone = element.cloneNode(true);
    clone.style.boxShadow = 'none';
    clone.style.margin = '0';
    clone.style.padding = '0';
    clone.style.border = 'none';
    clone.style.borderRadius = '0';
    clone.style.fontSize = '11pt';
    clone.style.lineHeight = '1.6';
    clone.style.maxWidth = 'none';
    clone.style.width = '100%';
    clone.style.background = '#fff';

    const opt = {
        margin: [20, 15, 20, 15],
        filename: generateFilename(),
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            allowTaint: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(clone).save();
}

// Populate year and month dropdowns
function populateYears() {
    const currentYear = new Date().getFullYear();
    const yearSelects = document.querySelectorAll('select[class*="Year"]');
    
    yearSelects.forEach(select => {
        select.innerHTML = '<option value="">Year</option>';
        for (let year = currentYear + 2; year >= currentYear - 50; year--) {
            select.innerHTML += `<option value="${year}">${year}</option>`;
        }
    });
}

function populateMonths() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthSelects = document.querySelectorAll('select[class*="Month"]');
    
    monthSelects.forEach(select => {
        select.innerHTML = '<option value="">Month</option>';
        months.forEach(month => {
            select.innerHTML += `<option value="${month}">${month}</option>`;
        });
    });
}

// Mobile preview toggle
function togglePreview() {
    const previewSection = document.querySelector('.preview-section');
    const toggleBtn = document.getElementById('previewToggle');
    
    if (previewSection.classList.contains('show')) {
        previewSection.classList.remove('show');
        toggleBtn.textContent = 'Show Preview';
    } else {
        previewSection.classList.add('show');
        toggleBtn.textContent = 'Hide Preview';
        previewSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateYears();
    populateMonths();
    
    // Set default template or check for selected template from templates page
    const selectedTemplate = localStorage.getItem('selectedTemplate');
    if (selectedTemplate) {
        document.getElementById('templateSelector').value = `templates/${selectedTemplate}`;
        document.getElementById('resumeStyle').href = `templates/${selectedTemplate}`;
        localStorage.removeItem('selectedTemplate');
    } else {
        // Set default template to Modern Minimalist
        document.getElementById('templateSelector').value = 'templates/template1.css';
        document.getElementById('resumeStyle').href = 'templates/template1.css';
    }
    
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('input', generateResume);
        input.addEventListener('change', generateResume);
    });
    
    // Generate initial resume
    generateResume();
    updateNavigation();
});
// Allow direct step navigation
function goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > totalSteps) return;
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.remove('active');
    
    // Show new step
    currentStep = stepNumber;
    document.getElementById(`step${currentStep}`).classList.add('active');
    document.querySelector(`.step[data-step="${currentStep}"]`).classList.add('active');
    
    // Mark completed steps
    for (let i = 1; i < currentStep; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.add('completed');
    }
    
    // Remove completed class from future steps
    for (let i = currentStep; i <= totalSteps; i++) {
        document.querySelector(`.step[data-step="${i}"]`).classList.remove('completed');
    }
    
    // Update navigation
    updateNavigation();
    
    // Generate resume
    generateResume();
}

// Add click handlers to step indicators
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Add click handlers to step indicators for direct navigation
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = parseInt(this.getAttribute('data-step'));
            goToStep(stepNumber);
        });
        step.style.cursor = 'pointer';
    });
});