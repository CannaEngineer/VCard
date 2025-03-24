// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create Genetics & Rosin Tab Content
    function createGeneticsTab() {
        const tabContainer = document.querySelector('.content');
        
        // Create tab section
        const geneticsSection = document.createElement('section');
        geneticsSection.className = 'section tab-content';
        geneticsSection.id = 'genetics-tab';
        
        // Add content to the section
        geneticsSection.innerHTML = `
            <h3 class="section-title">Genetics & Hash Rosin Research</h3>
            <p class="about-text">My passion for cannabis has led me to focus on developing exceptional genetics, with particular attention to varieties that excel in hash rosin production. Through years of research and breeding, I've identified key traits that contribute to superior hash production beyond just total yield.</p>
            
            <div class="award-banner">
                <div class="award-icon"><i class="fa-solid fa-trophy"></i></div>
                <div class="award-info">
                    <h4>2022 Organic Cup Winner - Single Source Rosin</h4>
                    <p>JerzPaya (Papaya × Jersey Juice) - Created, Grown, and Processed by Wicked Sowa</p>
                </div>
            </div>
            
            <div class="hash-rosin-section">
                <h4 class="section-title">Hash Rosin Excellence</h4>
                <p class="about-text">Wicked Sowa represents the culmination of years of research into hash rosin production. I've developed genetics that are specifically optimized for solventless extraction, focusing on multiple quality factors:</p>
                
                <div class="skills-list" style="margin-bottom: 20px;">
                    <span class="skill-tag"><i class="fa-solid fa-droplet"></i> Trichome Structure</span>
                    <span class="skill-tag"><i class="fa-solid fa-temperature-low"></i> Temperature Tolerance</span>
                    <span class="skill-tag"><i class="fa-solid fa-grip-lines"></i> Ease of Separation</span>
                    <span class="skill-tag"><i class="fa-solid fa-flask"></i> Terpene Preservation</span>
                    <span class="skill-tag"><i class="fa-solid fa-sparkles"></i> Resin Clarity</span>
                    <span class="skill-tag"><i class="fa-solid fa-palette"></i> Desirable Color</span>
                    <span class="skill-tag"><i class="fa-solid fa-palette"></i> Storage Techniques</span>  
                    <span class="skill-tag"><i class="fa-solid fa-palette"></i> Process Development</span>                    
                </div>
                
                <p class="about-text">My genetics are specifically bred to produce the ideal trichome morphology and chemical composition that translates into superior hash rosin products with exceptional flavor, potency, and bag appeal. We also specialize in premium rosin cartridges that maintain the full flavor profile of our extracts.</p>
            </div>
            
            <h4 class="subtitle">Featured Genetics</h4>
            <p class="about-text">Here are some of the signature varieties developed through our selective breeding programs:</p>
            
            <div class="genetics-list">
                <div class="genetics-card featured">
                    <div class="genetics-badge"><i class="fa-solid fa-award"></i> Award Winner</div>
                    <h4 class="genetics-name">JerzPaya</h4>
                    <div class="genetics-meta">
                        <span class="genetics-meta-item"><i class="fa-solid fa-cannabis"></i> Feminized</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-flask"></i> Papaya × Jersey Juice</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-trophy"></i> 2022 Organic Cup Winner</span>
                    </div>
                    <p class="genetics-description">Our award-winning variety that combines the tropical notes of Papaya with the unique terpene profile of our Jersey Juice line. Produces exceptional hash with outstanding clarity and a complex fruit-forward profile. Our signature creation known for remarkable yield and quality in solventless extraction.</p>
                    <div class="genetics-features">
                        <span class="genetics-feature">Award Winner</span>
                        <span class="genetics-feature">Tropical Fruit Terps</span>
                        <span class="genetics-feature">Premium Hash Production</span>
                        <span class="genetics-feature">High Trichome Density</span>
                    </div>
                </div>
                
                <div class="genetics-card">
                    <h4 class="genetics-name">Jersey Juice</h4>
                    <div class="genetics-meta">
                        <span class="genetics-meta-item"><i class="fa-solid fa-cannabis"></i> Feminized</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-flask"></i> Proprietary Breeding Line</span>
                    </div>
                    <p class="genetics-description">Our cornerstone breeding line that has proven to be exceptionally reliable for hash production. Features a bright peach Highchew terpene profile that maintains its character through the extraction process and has exceptional stability over time. This genetics line has become the foundation for several successful crosses.</p>
                    <div class="genetics-features">
                        <span class="genetics-feature">Bright Peach Terps</span>
                        <span class="genetics-feature">Extended Shelf Stability</span>
                        <span class="genetics-feature">Versatile Breeding Stock</span>
                        <span class="genetics-feature">Consistent Performer</span>
                    </div>
                </div>
                
                <div class="genetics-card">
                    <h4 class="genetics-name">Grape Dosi Juice</h4>
                    <div class="genetics-meta">
                        <span class="genetics-meta-item"><i class="fa-solid fa-cannabis"></i> Feminized</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-flask"></i> Grape Dosi × Jersey Juice</span>
                    </div>
                    <p class="genetics-description">A standout performer from our Jersey Juice project, combining sweet grape notes with our signature peach profile. Produces exceptional trichome coverage with ideal morphology for mechanical separation. The resulting hash features a unique sweet grape candy flavor with subtle gas undertones.</p>
                    <div class="genetics-features">
                        <span class="genetics-feature">Grape Candy Profile</span>
                        <span class="genetics-feature">High Resin Production</span>
                        <span class="genetics-feature">Ideal Wash Characteristics</span>
                        <span class="genetics-feature">Complex Flavor</span>
                    </div>
                </div>
                
                <div class="genetics-card">
                    <h4 class="genetics-name">Sour Juice</h4>
                    <div class="genetics-meta">
                        <span class="genetics-meta-item"><i class="fa-solid fa-cannabis"></i> Feminized</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-flask"></i> Sour Diesel × Jersey Juice</span>
                    </div>
                    <p class="genetics-description">A powerful combination of legendary Sour Diesel genetics with our hash-optimized Jersey Juice line. Features the distinctive fuel notes of Sour Diesel complemented by sweet fruit undertones that create a complex and memorable terpene profile. Produces exceptional trichome quality for premium extracts.</p>
                    <div class="genetics-features">
                        <span class="genetics-feature">Diesel Fuel Notes</span>
                        <span class="genetics-feature">Sweet Undertones</span>
                        <span class="genetics-feature">Complex Terpenes</span>
                        <span class="genetics-feature">Excellent Bag Appeal</span>
                    </div>
                </div>
                
                <div class="genetics-card">
                    <h4 class="genetics-name">Sour Berry Diesel</h4>
                    <div class="genetics-meta">
                        <span class="genetics-meta-item"><i class="fa-solid fa-cannabis"></i> Feminized</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-flask"></i> Blueberry Diesel × Sour Skittles</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-leaf"></i> Flower Optimized</span>
                    </div>
                    <p class="genetics-description">Specifically developed for premium flower production with a complex terpene profile of deep berry, fuel, and candy notes that blend into a sweet diesel finish. Bred to maintain flavor integrity to the end of a joint or when enjoyed in heady glass or a vaporizer. Features Sour Skittles (Famine (Chem 3 × Abusive OG × West Coast Dawg) × SFZ (SFV OG × Watermelon Zum Zum)).</p>
                    <div class="genetics-features">
                        <span class="genetics-feature">Berry Diesel Profile</span>
                        <span class="genetics-feature">Premium Flower</span>
                        <span class="genetics-feature">Full-Flavor Smoke</span>
                        <span class="genetics-feature">Complex Lineage</span>
                    </div>
                </div>
                
                <div class="genetics-card">
                    <h4 class="genetics-name">Banana Wash</h4>
                    <div class="genetics-meta">
                        <span class="genetics-meta-item"><i class="fa-solid fa-cannabis"></i> Feminized</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-flask"></i> Banana OG Hybrid</span>
                        <span class="genetics-meta-item"><i class="fa-solid fa-droplet"></i> Hash Optimized</span>
                    </div>
                    <p class="genetics-description">Part of our Banana OG hybrid program, specifically selected for exceptional washing characteristics. Features distinctive banana cream terpenes that translate beautifully into hash rosin. Produces high yields of light-colored resin with excellent melt properties and a creamy, tropical flavor profile.</p>
                    <div class="genetics-features">
                        <span class="genetics-feature">Banana Cream Terps</span>
                        <span class="genetics-feature">High Wash Yield</span>
                        <span class="genetics-feature">Light Color</span>
                        <span class="genetics-feature">Smooth Melt</span>
                    </div>
                </div>
                
            
            <div class="section autoflower-section">
                <h4 class="section-title">Never Forget 420 Seed Co</h4>
                <p class="about-text">Through Never Forget 420 Seed Co, we're focused on developing new and unique autoflower varieties that challenge the status quo. Our autoflowering genetics are designed to be:</p>
                
                <ul class="project-features">
                    <li><i class="fa-solid fa-check"></i> <span class="emphasis">Easy for beginners</span> - Simple to grow with forgiving characteristics</li>
                    <li><i class="fa-solid fa-check"></i> <span class="emphasis">Sought after by experts</span> - Quality and performance that rivals photoperiod varieties</li>
                    <li><i class="fa-solid fa-check"></i> <span class="emphasis">Unique to the market</span> - Innovative genetics not found elsewhere</li>
                    <li><i class="fa-solid fa-check"></i> <span class="emphasis">High performance</span> - Yields and potency comparable to traditional varieties</li>
                    <li><i class="fa-solid fa-check"></i> <span class="emphasis">Consistent</span> - Reliable results from seed to harvest</li>
                </ul>
                
                <p class="about-text">Our autoflower breeding program combines top-tier photoperiod genetics with carefully selected ruderalis lines to create varieties that maintain exceptional terpene profiles and potency while offering the convenience of automatic flowering.</p>
            </div>
            
            <h4 class="subtitle">Research Focus</h4>
            <p class="about-text">My ongoing research explores the relationship between genetic markers, cultivation methodology, and final extract quality. Current projects include:</p>
            
            <div class="skills-list">
                <span class="skill-tag">Trichome Morphology Analysis</span>
                <span class="skill-tag">Terpene Preservation Techniques</span>
                <span class="skill-tag">Live Rosin Optimization</span>
                <span class="skill-tag">Cold Room Efficiency</span>
                <span class="skill-tag">Post-Harvest Handling</span>
                <span class="skill-tag">Cultivar-Specific Wash Parameters</span>
                <span class="skill-tag">Premium Cartridge Development</span>
                <span class="skill-tag">Autoflower Resin Production</span>
            </div>
            
            <div class="section">
                <h4 class="subtitle">Partnership Opportunities</h4>
                <p class="about-text">I'm actively seeking partnerships with processors and brands interested in exclusive genetics for hash production. Whether you're looking to develop proprietary strains or need consulting on improving your current extraction processes, I offer customized solutions based on years of research and hands-on experience.</p>
                
                <p class="about-text">For references on any projects, please contact me directly to discuss how we can collaborate to elevate your cannabis program through superior genetics and optimized processes.</p>
            </div>
        `;
        
        // Add the section to the DOM
        tabContainer.appendChild(geneticsSection);
    }
    
    // Create and append styles for genetics content
    function createGeneticsStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .award-banner {
                background: linear-gradient(135deg, rgba(44, 138, 79, 0.7), rgba(0, 0, 0, 0.7));
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 30px;
                display: flex;
                align-items: center;
                gap: 20px;
                border: 1px solid rgba(135, 224, 173, 0.5);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            .award-icon {
                font-size: 2.5rem;
                color: gold;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            }
            
            .award-info h4 {
                font-size: 1.2rem;
                margin-bottom: 5px;
                color: var(--light-green);
            }
            
            .award-info p {
                font-size: 0.95rem;
                color: var(--primary-light);
            }
            
            .genetics-list {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 25px;
                margin: 30px 0;
            }
            
            .genetics-card {
                background: rgba(255, 255, 255, 0.07);
                border-radius: 12px;
                padding: 25px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
                position: relative;
                display: flex;
                flex-direction: column;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            }
            
            .genetics-card:hover {
                background: rgba(255, 255, 255, 0.1);
                transform: translateY(-5px);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                border-color: rgba(135, 224, 173, 0.3);
            }
            
            .genetics-card.featured {
                background: linear-gradient(to bottom right, rgba(44, 138, 79, 0.2), rgba(0, 0, 0, 0.2));
                border: 1px solid rgba(135, 224, 173, 0.4);
            }
            
            .genetics-card.autoflower {
                background: linear-gradient(to bottom right, rgba(79, 44, 138, 0.2), rgba(0, 0, 0, 0.2));
                border: 1px solid rgba(135, 173, 224, 0.4);
            }
            
            .genetics-badge {
                position: absolute;
                top: -10px;
                right: 20px;
                background: var(--accent-green);
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 0.8rem;
                font-weight: 500;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .genetics-card.autoflower .genetics-badge {
                background: linear-gradient(to right, #6f42c1, #4b6fd1);
            }
            
            .genetics-name {
                font-size: 1.3rem;
                font-weight: 600;
                margin-bottom: 15px;
                color: var(--light-green);
            }
            
            .genetics-meta {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                margin-bottom: 15px;
            }
            
            .genetics-meta-item {
                display: flex;
                align-items: center;
                font-size: 0.85rem;
                background: rgba(0, 0, 0, 0.2);
                padding: 5px 10px;
                border-radius: 5px;
            }
            
            .genetics-meta-item i {
                margin-right: 5px;
                color: var(--light-green);
            }
            
            .genetics-description {
                margin-bottom: 20px;
                font-size: 0.95rem;
                line-height: 1.7;
                flex-grow: 1;
            }
            
            .genetics-features {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: auto;
            }
            
            .genetics-feature {
                background: var(--subtle-green);
                padding: 5px 12px;
                border-radius: 15px;
                font-size: 0.8rem;
                border: 1px solid rgba(135, 224, 173, 0.3);
            }
            
            .autoflower-section {
                background: rgba(0, 0, 0, 0.15);
                border-radius: 15px;
                padding: 30px;
                margin: 40px 0;
                border: 1px solid rgba(135, 173, 224, 0.2);
            }
            
            .hash-rosin-section {
                background: rgba(0, 0, 0, 0.15);
                border-radius: 15px;
                padding: 30px;
                margin: 30px 0;
                border: 1px solid rgba(135, 224, 173, 0.2);
            }
        `;
        
        document.head.appendChild(styleElement);
    }
    
    // Initialize the content
    createGeneticsTab();
    createGeneticsStyles();
});