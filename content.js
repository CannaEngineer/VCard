// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create Projects Tab Content
    function createProjectsTab() {
        const tabContainer = document.querySelector('.content');
        
        // Create tab section
        const projectsSection = document.createElement('section');
        projectsSection.className = 'section tab-content';
        projectsSection.id = 'projects-tab';
        
        // Add content to the section
        projectsSection.innerHTML = `
            <h3 class="section-title">Key Projects</h3>
            <p class="about-text">Here are some of the significant projects I've managed and implemented throughout my career, showcasing my expertise in systems integration, facility design, and technical implementation.</p>
            
            <div class="project-card">
                <h4 class="project-title"><i class="fa-solid fa-industry"></i> Wood Pellet Mill System Implementation</h4>
                <p class="project-description">Directed the end-to-end installation of a large-scale wood pellet mill system, overseeing every phase from waste stream management to final packaging.</p>
                <ul class="project-features">
                    <li><i class="fa-solid fa-check"></i> Sourced materials and coordinated multi-vendor equipment installations</li>
                    <li><i class="fa-solid fa-check"></i> Supervised setup of bins, augers, blowers, and hammermills</li>
                    <li><i class="fa-solid fa-check"></i> Established dust collection systems to ensure environmental compliance</li>
                    <li><i class="fa-solid fa-check"></i> Integrated pellet mills, shaker screeners, and form-fill-seal machines for seamless production</li>
                    <li><i class="fa-solid fa-check"></i> Designed framework for a future robotic palletizer to enhance operational efficiency</li>
                </ul>
            </div>
            
            <div class="project-card">
                <h4 class="project-title">Commercial Grow Irrigation Systems</h4>
                <p class="project-description">Designed and implemented automated irrigation systems for large commercial cannabis cultivation facilities up to 50,000 square feet in size.</p>
                <ul class="project-features">
                    <li>Created custom irrigation solutions based on facility layout and plant needs</li>
                    <li>Implemented water conservation technologies and filtration systems</li>
                    <li>Integrated environmental controls with irrigation timing</li>
                    <li>Designed multi-zone systems with automated timing and manual control capabilities</li>
                    <li>Installed intuitive </li>
                </ul>
            </div>
            
            <div class="project-card">
                <h4 class="project-title">Nursery & Genetics Program Buildout</h4>
                <p class="project-description">Developed a comprehensive cannabis nursery and genetics program from the ground up, encompassing facility design, equipment selection, and team coordination.</p>
                <ul class="project-features">
                    <li>Designed a dedicated nursery area for optimal plant growth</li>
                    <li>Created tailored environments for cloning and vegetative cycles</li>
                    <li>Implemented efficient testing protocols for phenotype selection with minimal labor</li>
                    <li>Constructed ergonomic workspaces for cloning operations</li>
                    <li>Trained staff in genetics maintenance and pheno-hunting techniques</li>
                </ul>
            </div>
            
            <div class="project-card">
                <h4 class="project-title">Industrial Equipment Installations</h4>
                <p class="project-description">Successfully installed and commissioned countless pieces of industrial equipment across various industries, ensuring operational efficiency and safety compliance.</p>
                <ul class="project-features">
                    <li>Coordinated rigging and placement of heavy machinery</li>
                    <li>Performed electrical connections and control system integration</li>
                    <li>Implemented preventative maintenance protocols</li>
                    <li>Trained operators on proper equipment operation and safety</li>
                    <li>Conducted performance testing and operational optimization</li>
                </ul>
            </div>
        `;
        
        // Add the section to the DOM
        tabContainer.appendChild(projectsSection);
    }
    
    // Create Services Tab Content
    function createServicesTab() {
        const tabContainer = document.querySelector('.content');
        
        // Create tab section
        const servicesSection = document.createElement('section');
        servicesSection.className = 'section tab-content';
        servicesSection.id = 'services-tab';
        
        // Add content to the section
        servicesSection.innerHTML = `
            <h3 class="section-title">Services Offered</h3>
            <p class="about-text">I provide specialized consulting services to the cannabis industry, leveraging my unique background in both industrial systems and cannabis cultivation to help businesses optimize their operations.</p>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fa-solid fa-building"></i>
                </div>
                <div class="service-info">
                    <h4>Facility Design & Optimization</h4>
                    <p>End-to-end facility planning for cannabis operations of all sizes. From initial layout to equipment selection and workflow optimization, I design spaces that maximize efficiency, compliance, and product quality. Services include HVAC systems design, lighting plans, and space utilization analysis.</p>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fa-solid fa-seedling"></i>
                </div>
                <div class="service-info">
                    <h4>Cultivation Technology Integration</h4>
                    <p>Implementation of advanced cultivation technologies to improve yields, quality, and consistency. Services include automated irrigation system design, environmental controls setup, sensor network deployment, and data-driven cultivation strategy development.</p>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fa-solid fa-clipboard-check"></i>
                </div>
                <div class="service-info">
                    <h4>Compliance Management & SOP Development</h4>
                    <p>Development of comprehensive standard operating procedures and compliance frameworks tailored to your operation. From cultivation practices to processing, packaging, and inventory management, I create documentation systems that ensure regulatory compliance while maintaining operational efficiency.</p>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fa-solid fa-gears"></i>
                </div>
                <div class="service-info">
                    <h4>Process Automation</h4>
                    <p>Identification and implementation of automation opportunities throughout your cannabis operation. By analyzing workflows and integrating appropriate technology, I help reduce labor costs, minimize human error, and improve consistency in both cultivation and post-harvest processes.</p>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fa-solid fa-dna"></i>
                </div>
                <div class="service-info">
                    <h4>Genetics Program Development</h4>
                    <p>Strategic planning and implementation of in-house genetics programs, including breeding projects, phenotype selection methodologies, and preservation techniques. I help operations develop and maintain proprietary genetics that differentiate their products in the market.</p>
                </div>
            </div>
            
            <div class="service-card">
                <div class="service-icon">
                    <i class="fa-solid fa-project-diagram"></i>
                </div>
                <div class="service-info">
                    <h4>Project Management</h4>
                    <p>Complete project management for equipment installations, facility buildouts, and operational transitions. With extensive experience managing complex technical implementations, I ensure projects are completed on time, within budget, and to specification.</p>
                </div>
            </div>
        `;
        
        // Add the section to the DOM
        tabContainer.appendChild(servicesSection);
    }
    
    // Initialize the content
    createProjectsTab();
    createServicesTab();
});