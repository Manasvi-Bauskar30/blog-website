/**
 * Blog Website JavaScript
 * Handles all interactive functionality including navigation, search, comments, and theme switching
 */

// Blog posts data - Contains all blog post information
const blogPosts = [
    {
        id: 1,
        title: "The Future of Artificial Intelligence in 2025",
        excerpt: "Explore the latest developments in AI technology and how they're shaping our future. From machine learning to neural networks, discover what's coming next.",
        content: `
            <p>Artificial Intelligence has reached unprecedented heights in 2025, transforming industries and reshaping how we interact with technology. This comprehensive guide explores the cutting-edge developments that are defining the AI landscape.</p>
            
            <h3>Machine Learning Revolution</h3>
            <p>Machine learning algorithms have become more sophisticated, enabling computers to learn and adapt without explicit programming. The latest neural networks can process complex data patterns with remarkable accuracy, leading to breakthroughs in image recognition, natural language processing, and predictive analytics.</p>
            
            <h3>AI in Healthcare</h3>
            <p>The healthcare industry has embraced AI for diagnostic imaging, drug discovery, and personalized treatment plans. AI-powered systems can now detect diseases earlier and with greater precision than traditional methods, potentially saving millions of lives.</p>
            
            <h3>Autonomous Systems</h3>
            <p>Self-driving cars, drones, and robotic systems have become more reliable and widespread. These autonomous systems use advanced AI algorithms to navigate complex environments and make real-time decisions.</p>
            
            <h3>Ethical Considerations</h3>
            <p>As AI becomes more powerful, ethical considerations become increasingly important. Issues such as bias in algorithms, privacy concerns, and the impact on employment require careful consideration and regulation.</p>
            
            <p>The future of AI is bright, but it requires responsible development and implementation to ensure it benefits all of humanity.</p>
        `,
        category: "ai",
        date: "2025-01-15",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        author: "Dr. Sarah Johnson",
        readTime: "8 min read"
    },
    {
        id: 2,
        title: "Modern Web Development: React vs Vue vs Angular",
        excerpt: "A comprehensive comparison of the three most popular JavaScript frameworks. Learn which one is best for your next project.",
        content: `
            <p>Choosing the right JavaScript framework is crucial for modern web development. This detailed comparison examines React, Vue, and Angular to help you make an informed decision.</p>
            
            <h3>React: The Component King</h3>
            <p>React, developed by Facebook, has dominated the frontend landscape with its component-based architecture. Its virtual DOM implementation provides excellent performance, while the extensive ecosystem offers solutions for almost every need.</p>
            
            <h3>Vue: The Progressive Framework</h3>
            <p>Vue.js strikes a balance between simplicity and power. Its gentle learning curve makes it accessible to beginners, while its advanced features satisfy experienced developers. The framework's progressive nature allows for gradual adoption in existing projects.</p>
            
            <h3>Angular: The Full-Featured Platform</h3>
            <p>Angular provides a complete solution for large-scale applications. With built-in features like dependency injection, routing, and form handling, it's ideal for enterprise-level projects that require structure and scalability.</p>
            
            <h3>Performance Comparison</h3>
            <p>Each framework has its performance characteristics. React excels in dynamic applications, Vue offers consistent performance across different scenarios, and Angular shines in complex, data-heavy applications.</p>
            
            <h3>Making the Right Choice</h3>
            <p>The best framework depends on your project requirements, team expertise, and long-term goals. Consider factors like learning curve, community support, and ecosystem maturity when making your decision.</p>
        `,
        category: "web-dev",
        date: "2025-01-12",
        image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
        author: "Mike Chen",
        readTime: "12 min read"
    },
    {
        id: 3,
        title: "Mobile App Development Trends in 2025",
        excerpt: "Discover the latest trends in mobile app development, from cross-platform solutions to emerging technologies that are changing the mobile landscape.",
        content: `
            <p>The mobile app development landscape continues to evolve rapidly in 2025. New technologies, frameworks, and user expectations are driving innovation across the industry.</p>
            
            <h3>Cross-Platform Development</h3>
            <p>Cross-platform frameworks like React Native, Flutter, and Xamarin have matured significantly. These tools now offer near-native performance while maintaining code reusability across platforms, making them increasingly attractive for businesses.</p>
            
            <h3>5G Integration</h3>
            <p>The widespread adoption of 5G networks has opened new possibilities for mobile applications. Developers can now create apps with real-time features, enhanced AR/VR experiences, and seamless cloud integration.</p>
            
            <h3>AI-Powered Features</h3>
            <p>Mobile apps are incorporating AI features like voice recognition, image processing, and predictive analytics. These capabilities enhance user experience and provide personalized interactions.</p>
            
            <h3>Progressive Web Apps (PWAs)</h3>
            <p>PWAs continue to bridge the gap between web and mobile applications. They offer app-like experiences through web browsers while maintaining the accessibility and discoverability of web applications.</p>
            
            <h3>Security and Privacy</h3>
            <p>With increasing concerns about data privacy, mobile app security has become paramount. Developers are implementing advanced encryption, biometric authentication, and privacy-by-design principles.</p>
        `,
        category: "mobile",
        date: "2025-01-10",
        image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
        author: "Lisa Rodriguez",
        readTime: "10 min read"
    },
    {
        id: 4,
        title: "Cybersecurity Best Practices for Developers",
        excerpt: "Essential security practices every developer should know. Learn how to protect your applications and users from common security threats.",
        content: `
            <p>Cybersecurity is not just the responsibility of security teams—developers play a crucial role in building secure applications. This guide covers essential security practices that every developer should implement.</p>
            
            <h3>Secure Coding Principles</h3>
            <p>Writing secure code starts with understanding common vulnerabilities. The OWASP Top 10 provides a foundation for identifying and preventing security risks in web applications.</p>
            
            <h3>Input Validation and Sanitization</h3>
            <p>Never trust user input. Implement comprehensive input validation and sanitization to prevent injection attacks, XSS, and other input-based vulnerabilities.</p>
            
            <h3>Authentication and Authorization</h3>
            <p>Implement robust authentication mechanisms and proper authorization controls. Use established protocols like OAuth 2.0 and implement multi-factor authentication where possible.</p>
            
            <h3>Data Protection</h3>
            <p>Encrypt sensitive data both in transit and at rest. Use strong encryption algorithms and manage encryption keys securely. Implement proper data handling and retention policies.</p>
            
            <h3>Security Testing</h3>
            <p>Integrate security testing into your development pipeline. Use static analysis tools, dependency scanners, and penetration testing to identify vulnerabilities early.</p>
            
            <h3>Incident Response</h3>
            <p>Prepare for security incidents with proper logging, monitoring, and response procedures. Quick detection and response can minimize the impact of security breaches.</p>
        `,
        category: "technology",
        date: "2025-01-08",
        image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
        author: "David Kim",
        readTime: "15 min read"
    },
    {
        id: 5,
        title: "The Rise of Quantum Computing",
        excerpt: "Quantum computing is moving from theory to reality. Explore how this revolutionary technology will impact various industries and our daily lives.",
        content: `
            <p>Quantum computing represents one of the most significant technological advances of our time. As we move beyond the limitations of classical computing, quantum systems promise to solve problems that were previously impossible to tackle.</p>
            
            <h3>Understanding Quantum Mechanics</h3>
            <p>Quantum computers leverage quantum mechanical phenomena like superposition and entanglement to process information in fundamentally different ways than classical computers. This allows them to perform certain calculations exponentially faster.</p>
            
            <h3>Current Applications</h3>
            <p>While still in early stages, quantum computing is already showing promise in cryptography, drug discovery, financial modeling, and optimization problems. Companies like IBM, Google, and Microsoft are leading the charge in quantum research.</p>
            
            <h3>Challenges and Limitations</h3>
            <p>Quantum computers face significant challenges including quantum decoherence, error rates, and the need for extremely low temperatures. These technical hurdles are gradually being overcome through innovative engineering solutions.</p>
            
            <h3>Impact on Cryptography</h3>
            <p>Quantum computing poses both opportunities and threats to cybersecurity. While it could break current encryption methods, it also enables quantum cryptography for ultra-secure communications.</p>
            
            <h3>The Future Landscape</h3>
            <p>As quantum computing matures, it will likely complement rather than replace classical computing. Hybrid systems that leverage both quantum and classical processing will become the norm for solving complex problems.</p>
        `,
        category: "technology",
        date: "2025-01-05",
        image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
        author: "Dr. Emily Watson",
        readTime: "11 min read"
    }
];

// Global variables for application state
let currentTheme = 'light';
let filteredPosts = [...blogPosts];
let currentPost = null;

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize all application components
 */
function initializeApp() {
    loadTheme();
    renderPosts();
    setupEventListeners();
    setupScrollEffects();
}

/**
 * Load and apply saved theme preference
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

/**
 * Update theme toggle icon based on current theme
 */
function updateThemeIcon() {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

/**
 * Render blog posts to the grid
 */
function renderPosts() {
    const postsGrid = document.getElementById('postsGrid');
    if (!postsGrid) return;

    postsGrid.innerHTML = '';

    if (filteredPosts.length === 0) {
        postsGrid.innerHTML = `
            <div class="no-posts">
                <h3>No posts found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    filteredPosts.forEach(post => {
        const postCard = createPostCard(post);
        postsGrid.appendChild(postCard);
    });
}

/**
 * Create a post card element
 * @param {Object} post - Blog post data
 * @returns {HTMLElement} Post card element
 */
function createPostCard(post) {
    const postCard = document.createElement('article');
    postCard.className = 'post-card';
    postCard.setAttribute('data-category', post.category);
    
    postCard.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
        <div class="post-content">
            <span class="post-category">${getCategoryDisplayName(post.category)}</span>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">
                <div class="post-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${formatDate(post.date)}</span>
                </div>
                <a href="#" class="read-more">Read More</a>
            </div>
        </div>
    `;

    // Add click event to open post modal
    postCard.addEventListener('click', () => openPostModal(post));

    return postCard;
}

/**
 * Get display name for category
 * @param {string} category - Category slug
 * @returns {string} Display name
 */
function getCategoryDisplayName(category) {
    const categoryMap = {
        'technology': 'Technology',
        'programming': 'Programming',
        'ai': 'AI & ML',
        'web-dev': 'Web Development',
        'mobile': 'Mobile'
    };
    return categoryMap[category] || category;
}

/**
 * Format date for display
 * @param {string} dateString - Date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Filter posts by category
 * @param {string} category - Category to filter by
 */
function filterPosts(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter posts
    if (category === 'all') {
        filteredPosts = [...blogPosts];
    } else {
        filteredPosts = blogPosts.filter(post => post.category === category);
    }

    renderPosts();
}

/**
 * Search posts based on query
 */
function searchPosts() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();

    if (query === '') {
        filteredPosts = [...blogPosts];
    } else {
        filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.content.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query) ||
            post.author.toLowerCase().includes(query)
        );
    }

    renderPosts();

    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.filter-btn[onclick="filterPosts(\'all\')"]').classList.add('active');
}

/**
 * Open post modal with full content
 * @param {Object} post - Blog post data
 */
function openPostModal(post) {
    currentPost = post;
    const modal = document.getElementById('postModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="modal-post-image">
        <h1 class="modal-post-title">${post.title}</h1>
        <div class="modal-post-meta">
            <div><i class="fas fa-user"></i> ${post.author}</div>
            <div><i class="fas fa-calendar-alt"></i> ${formatDate(post.date)}</div>
            <div><i class="fas fa-clock"></i> ${post.readTime}</div>
            <div><i class="fas fa-tag"></i> ${getCategoryDisplayName(post.category)}</div>
        </div>
        <div class="social-share">
            <a href="#" class="share-btn facebook" onclick="sharePost('facebook')">
                <i class="fab fa-facebook-f"></i> Share
            </a>
            <a href="#" class="share-btn twitter" onclick="sharePost('twitter')">
                <i class="fab fa-twitter"></i> Tweet
            </a>
            <a href="#" class="share-btn linkedin" onclick="sharePost('linkedin')">
                <i class="fab fa-linkedin-in"></i> Share
            </a>
        </div>
        <div class="modal-post-content">
            ${post.content}
        </div>
        <div class="comments-section">
            <h3 class="comments-title">Comments</h3>
            <form class="comment-form" onsubmit="submitComment(event)">
                <div class="form-group">
                    <label for="commentName">Name *</label>
                    <input type="text" id="commentName" required>
                </div>
                <div class="form-group">
                    <label for="commentEmail">Email *</label>
                    <input type="email" id="commentEmail" required>
                </div>
                <div class="form-group">
                    <label for="commentMessage">Message *</label>
                    <textarea id="commentMessage" required placeholder="Share your thoughts..."></textarea>
                </div>
                <button type="submit" class="submit-comment">
                    <i class="fas fa-paper-plane"></i> Post Comment
                </button>
            </form>
            <div class="comments-list" id="commentsList">
                ${renderComments(post.id)}
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/**
 * Close the post modal
 */
function closeModal() {
    const modal = document.getElementById('postModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentPost = null;
}

/**
 * Share post on social media
 * @param {string} platform - Social media platform
 */
function sharePost(platform) {
    if (!currentPost) return;

    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(currentPost.title);
    const text = encodeURIComponent(currentPost.excerpt);

    let shareUrl = '';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

/**
 * Submit a new comment
 * @param {Event} event - Form submit event
 */
function submitComment(event) {
    event.preventDefault();

    if (!currentPost) return;

    const name = document.getElementById('commentName').value;
    const email = document.getElementById('commentEmail').value;
    const message = document.getElementById('commentMessage').value;

    // Create comment object
    const comment = {
        id: Date.now(),
        postId: currentPost.id,
        name: name,
        email: email,
        message: message,
        date: new Date().toISOString()
    };

    // Save comment to localStorage
    saveComment(comment);

    // Clear form
    document.getElementById('commentName').value = '';
    document.getElementById('commentEmail').value = '';
    document.getElementById('commentMessage').value = '';

    // Refresh comments display
    document.getElementById('commentsList').innerHTML = renderComments(currentPost.id);

    // Show success message
    showNotification('Comment posted successfully!', 'success');
}

/**
 * Save comment to localStorage
 * @param {Object} comment - Comment data
 */
function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('blogComments') || '[]');
    comments.push(comment);
    localStorage.setItem('blogComments', JSON.stringify(comments));
}

/**
 * Get comments for a specific post
 * @param {number} postId - Post ID
 * @returns {Array} Comments array
 */
function getComments(postId) {
    const comments = JSON.parse(localStorage.getItem('blogComments') || '[]');
    return comments.filter(comment => comment.postId === postId);
}

/**
 * Render comments HTML
 * @param {number} postId - Post ID
 * @returns {string} Comments HTML
 */
function renderComments(postId) {
    const comments = getComments(postId);

    if (comments.length === 0) {
        return '<p>No comments yet. Be the first to comment!</p>';
    }

    return comments.map(comment => `
        <div class="comment">
            <div class="comment-header">
                <span class="comment-author">${comment.name}</span>
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
            <div class="comment-content">${comment.message}</div>
        </div>
    `).join('');
}

/**
 * Show notification message
 * @param {string} message - Notification message
 * @param {string} type - Notification type (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

/**
 * Scroll to a specific section
 * @param {string} sectionId - Section ID to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Setup event listeners for various interactions
 */
function setupEventListeners() {
    // Search input enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchPosts();
            }
        });
    }

    // Close modal when clicking outside
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Navigation link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu
            document.getElementById('navMenu').classList.remove('active');
            
            // Scroll to section or filter posts
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const sectionId = href.substring(1);
                if (sectionId === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    // Filter posts by category
                    const categoryMap = {
                        'technology': 'technology',
                        'programming': 'programming',
                        'ai': 'ai',
                        'web-dev': 'web-dev',
                        'mobile': 'mobile'
                    };
                    
                    if (categoryMap[sectionId]) {
                        filterPosts(categoryMap[sectionId]);
                        scrollToSection('blog-posts');
                    }
                }
            }
        });
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                showNotification('Thank you for subscribing!', 'success');
                this.querySelector('.newsletter-input').value = '';
            }
        });
    }
}

/**
 * Setup scroll effects for header and other elements
 */
function setupScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Header scroll effect
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;

        // Update active navigation based on scroll position
        updateActiveNavigation();
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavigation() {
    const sections = ['home', 'blog-posts'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
    });
}

/**
 * Lazy load images when they come into viewport
 */
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);

/**
 * Add CSS animations for notifications
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .header {
        transition: transform 0.3s ease;
    }

    .no-posts {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        background: var(--bg-secondary);
        border-radius: var(--border-radius);
        color: var(--text-secondary);
    }

    .no-posts h3 {
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);