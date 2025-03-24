// Tab Navigation
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.section.tab-content');
    const contentArea = document.querySelector('.content');
    
    // Create sticky header wrapper if it doesn't exist
    let stickyWrapper = document.querySelector('.sticky-header');
    if (!stickyWrapper) {
        const navContainer = document.querySelector('.tab-container');
        stickyWrapper = document.createElement('div');
        stickyWrapper.className = 'sticky-header';
        document.querySelector('.vcard').insertBefore(stickyWrapper, contentArea);
        
        // Move nav into sticky wrapper
        stickyWrapper.appendChild(navContainer);
    }
    
    // Make sure all tabs have proper IDs and data attributes
    tabContents.forEach((content) => {
        // Extract tab name from ID if it exists, or set a default
        let tabName;
        if (content.id) {
            tabName = content.id.replace('-tab', '');
        } else {
            // Try to find a matching button
            const matchingButton = Array.from(tabButtons).find(btn => 
                content.textContent.toLowerCase().includes(btn.textContent.toLowerCase())
            );
            tabName = matchingButton ? matchingButton.getAttribute('data-tab') : 'unknown';
            content.id = tabName + '-tab';
        }
        content.setAttribute('data-tab', tabName);
    });
    
    // Hide all tab contents except the first one
    tabContents.forEach((content, index) => {
        content.style.display = index === 0 ? 'block' : 'none';
        content.classList.toggle('active', index === 0);
    });
    
    // Set active state for the first tab
    tabButtons[0].classList.add('active');
    
    // Handle tab clicks
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Add active class to clicked button and show corresponding content
            button.classList.add('active');
            const activeContent = document.getElementById(`${tabId}-tab`);
            if (activeContent) {
                activeContent.classList.add('active');
                activeContent.style.display = 'block';
                
                // Scroll to the content with offset for sticky header
                const headerHeight = stickyWrapper.offsetHeight;
                const contentTop = activeContent.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                window.scrollTo({
                    top: contentTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize gallery modals
function initGalleryModals() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.modal');
    
    if (!galleryItems.length || !modal) return;
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.querySelector('.gallery-image').getAttribute('src');
            const title = item.querySelector('.gallery-title').textContent;
            const desc = item.querySelector('.gallery-desc').textContent;
            const tags = item.getAttribute('data-tags') ? item.getAttribute('data-tags').split(',') : [];
            
            // Update modal content
            const modalImage = modal.querySelector('.modal-image');
            const modalTitle = modal.querySelector('.modal-title');
            const modalDesc = modal.querySelector('.modal-description');
            const modalTags = modal.querySelector('.modal-meta');
            
            modalImage.setAttribute('src', imageSrc);
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            
            // Set tags
            modalTags.innerHTML = '';
            tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'modal-tag';
                tagEl.textContent = tag.trim();
                modalTags.appendChild(tagEl);
            });
            
            // Show modal
            modal.style.display = 'block';
        });
    });
    
    // Close modal when clicking the close button
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tabs and content sections
    initTabs();
    
    // Initialize gallery modals (if they exist)
    initGalleryModals();
    
    // Save Contact as vCard
    const saveContactBtn = document.getElementById('saveContact');
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create vCard content
            let vcard = `BEGIN:VCARD
VERSION:3.0
N:Crawford;Daniel;;;
FN:Daniel Crawford
ORG:Hudson Cannabis
TITLE:Sustainable Systems & Facilities Manager
TEL;TYPE=CELL:207-538-5990
EMAIL;TYPE=WORK:dan@hudsonhemp.com
EMAIL;TYPE=WORK:sales@nf420seedco.com
URL;TYPE=WORK:https://nf420seedco.com
URL;TYPE=LinkedIn:https://www.linkedin.com/in/daniel-crawford-6997b157
END:VCARD`;
            
            // Create a blob with the vCard content
            let blob = new Blob([vcard], { type: 'text/vcard' });
            let link = document.createElement('a');
            
            // Create a URL for the blob
            link.href = window.URL.createObjectURL(blob);
            link.download = 'daniel_crawford.vcf';
            
            // Append the link to the document, click it, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});