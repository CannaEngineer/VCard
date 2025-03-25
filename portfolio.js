// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create Portfolio Tab Content
    function createPortfolioTab() {
        const tabContainer = document.querySelector('.content');
        
        // Create tab section
        const portfolioSection = document.createElement('section');
        portfolioSection.className = 'section tab-content';
        portfolioSection.id = 'portfolio-tab';
        
        // Add content to the section
        portfolioSection.innerHTML = `
            <h3 class="section-title">Portfolio</h3>
            <p class="about-text">Explore my work across facility design, genetics development, and system implementations. Each project represents my commitment to quality, innovation, and sustainable practices in the cannabis industry.</p>
            
            <div class="tab-container">
                <div class="tab-buttons">
                    <div class="tab-button active" data-portfolio="all">All Projects</div>
                    <div class="tab-button" data-portfolio="facilities">Facilities</div>
                    <div class="tab-button" data-portfolio="genetics">Genetics</div>
                    <div class="tab-button" data-portfolio="systems">Systems</div>
                </div>
            </div>
            
            <div class="gallery">
                <!-- Placeholder for gallery items - these would be populated with your actual photos -->
                <div class="gallery-item" data-category="facilities" data-tags="Design,HVAC,Commercial">
                    <img src="HVAC.webp" alt="Commercial Processing Facility" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Commercial Processing Facility</h4>
                        <p class="gallery-desc">5,000 sq ft manufacturing space with prescision climate control</p>
                    </div>
                </div>
                
                <div class="gallery-item" data-category="facilities" data-tags="Design,Workflow,Efficiency">
                    <img src="process.webp" alt="Processing Facility Layout" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Processing Facility Layout</h4>
                        <p class="gallery-desc">Optimized workflow design with inspiration from industry</p> 
                    </div>
                </div>
                
                <div class="gallery-item" data-category="systems" data-tags="Irrigation,Automation,Water Efficiency">
                    <img src="irrigation.webp" alt="Automated Irrigation System" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Automated Irrigation System</h4>
                        <p class="gallery-desc">Multi-zone precision irrigation</p>
                    </div>
                </div>
                
                <div class="gallery-item" data-category="systems" data-tags="Equipment,Industrial,Installation">
                    <img src="facility.webp" alt="Equipment Installation" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Industrial Equipment Installation</h4>
                        <p class="gallery-desc">Pellet mill system implementation with custom modifications</p>
                    </div>
                </div>

                <div class="gallery-item" data-category="genetics" data-tags="Breeding,Research,Phenotypes">
                    <img src="resin.webp" alt="Red Heri Fuit Bud" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Genetic Selection Process</h4>
                        <p class="gallery-desc">Phenotype hunting and trait selection for hash production</p>
                    </div>
                </div>
                
                <div class="gallery-item" data-category="genetics" data-tags="Breeding,Research,Phenotypes">
                    <img src="cup.webp" alt="2022 Organic Cup Trophy" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Award Winning Varieties</h4>
                        <p class="gallery-desc">Selecting for specific use cases and market leading performance.</p>
                    </div>
                </div>
                
                <div class="gallery-item" data-category="genetics" data-tags="Hash,Rosin,Quality">
                    <img src="sweetsocrates.webp" alt="Sweet Socrates - Winner 2022 Organic Cup NYC" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Sweet Socrates Hash Rosin From Wicked Sowa Genetics</h4>
                        <p class="gallery-desc">Premium quality solventless extract from proprietary genetics. 2022 Organic Cup NYC 1st place.</p>
                    </div>
                </div>
                
                <div class="gallery-item" data-category="systems" data-tags="HVAC,Climate,Efficiency">
                    <img src="duct.webp" alt="HVAC Implementation" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Advanced Climate Control</h4>
                        <p class="gallery-desc">Energy-efficient HVAC design for precise environmental control</p>
                    </div>
                </div>
                
                <div class="gallery-item" data-category="genetics" data-tags="Seeds,Production,Feminized">
                    <img src="seed.webp" alt="Seed Production" class="gallery-image">
                    <div class="gallery-overlay">
                        <h4 class="gallery-title">Feminized Seed Production</h4>
                        <p class="gallery-desc">World leading genetic program</p>
                    </div>
                </div>
            </div>
            
            <!-- Modal for gallery items -->
            <div class="modal">
                <span class="close-modal">&times;</span>
                <div class="modal-content">
                    <img src="" alt="" class="modal-image">
                    <div class="modal-info">
                        <h3 class="modal-title"></h3>
                        <p class="modal-description"></p>
                        <div class="modal-meta"></div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h4 class="subtitle">References</h4>
                <p class="about-text">For references on any projects or collaboration inquiries, please contact me directly. I'd be happy to provide detailed information about my past work and connect you with appropriate references based on your specific interests.</p>
                
                <div class="contact-reference">
                    <i class="fa-solid fa-envelope"></i>
                    <span>dan@hudsonhemp.com</span>
                </div>
            </div>
        `;
        
        // Add the section to the DOM
        tabContainer.appendChild(portfolioSection);
        
        // Add portfolio filtering functionality
        const portfolioButtons = portfolioSection.querySelectorAll('.tab-button[data-portfolio]');
        const galleryItems = portfolioSection.querySelectorAll('.gallery-item');
        
        portfolioButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-portfolio');
                
                // Remove active class from all buttons
                portfolioButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Show all items or filter by category
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (category === 'all' || category === itemCategory) {
                        item.style.display = 'block';
                        // Add a slight delay for animation effect
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Initialize the portfolio gallery
        function initPortfolioGallery() {
            // Set initial state - show all items
            galleryItems.forEach(item => {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.style.transition = 'all 0.3s ease';
            });
            
            // Set the "All Projects" button as active by default
            portfolioButtons[0].classList.add('active');
        }
        
        // Initialize the portfolio
        initPortfolioGallery();
    }
    
    // Initialize the content
    createPortfolioTab();
    
    // Add gallery CSS styles programmatically
    function addGalleryStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .gallery {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 20px;
                margin-top: 25px;
            }
            
            .gallery-item {
                position: relative;
                overflow: hidden;
                border-radius: 10px;
                border: 1px solid rgba(245, 245, 245, 0.1);
                aspect-ratio: 4/3;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .gallery-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }
            
            .gallery-item:hover .gallery-image {
                transform: scale(1.05);
            }
            
            .gallery-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                padding: 20px 15px 15px;
                transform: translateY(100%);
                transition: transform 0.3s ease;
            }
            
            .gallery-item:hover .gallery-overlay {
                transform: translateY(0);
            }
            
            .gallery-title {
                color: var(--primary-light);
                font-size: 0.95rem;
                font-weight: 600;
                margin-bottom: 5px;
            }
            
            .gallery-desc {
                color: var(--primary-light);
                font-size: 0.8rem;
                opacity: 0.9;
            }
            
            .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.9);
                padding: 20px;
                overflow-y: auto;
            }
            
            .modal-content {
                position: relative;
                max-width: 800px;
                margin: 40px auto;
                background: var(--primary-dark);
                border-radius: 10px;
                border: 1px solid rgba(245, 245, 245, 0.1);
                overflow: hidden;
                animation: modalFade 0.3s ease-in-out;
            }
            
            @keyframes modalFade {
                from {opacity: 0; transform: translateY(-30px);}
                to {opacity: 1; transform: translateY(0);}
            }
            
            .modal-image {
                width: 100%;
                max-height: 500px;
                object-fit: contain;
                background: #000;
            }
            
            .modal-info {
                padding: 20px;
            }
            
            .modal-title {
                font-size: 1.5rem;
                margin-bottom: 10px;
                color: var(--light-green);
            }
            
            .modal-description {
                font-size: 1rem;
                line-height: 1.6;
                margin-bottom: 15px;
            }
            
            .modal-meta {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 15px;
            }
            
            .modal-tag {
                background: var(--subtle-green);
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 0.8rem;
            }
            
            .close-modal {
                position: absolute;
                top: 10px;
                right: 20px;
                font-size: 2rem;
                color: var(--primary-light);
                cursor: pointer;
                z-index: 1001;
            }
            
            .testimonial {
                background: rgba(245, 245, 245, 0.05);
                border-radius: 12px;
                padding: 25px;
                margin-bottom: 20px;
                border: 1px solid rgba(245, 245, 245, 0.1);
                position: relative;
            }
            
            .testimonial-text {
                font-size: 1rem;
                line-height: 1.8;
                margin-bottom: 20px;
                font-style: italic;
                position: relative;
                padding-left: 25px;
            }
            
            .testimonial-text::before {
                content: """;
                font-size: 3rem;
                position: absolute;
                left: -10px;
                top: -20px;
                color: var(--light-green);
                opacity: 0.3;
            }
            
            .testimonial-author {
                display: flex;
                align-items: center;
            }
            
            .author-info h4 {
                font-size: 1rem;
                margin-bottom: 5px;
            }
            
            .author-info p {
                font-size: 0.85rem;
                opacity: 0.8;
            }
        `;
        
        document.head.appendChild(styleElement);
    }
    
    // Add the gallery styles
    addGalleryStyles();
});