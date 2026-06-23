// 1. Smooth scroll navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Project card expand/collapse
document.querySelectorAll('.project-card a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const card = this.closest('.project-card');
        card.classList.toggle('expanded');
        // Toggle detail content visibility
    });
});

// 3. Skills filter (optional)
function filterSkills(category) {
    document.querySelectorAll('.skill-item').forEach(item => {
        item.style.display = item.dataset.category === category ? 'block' : 'none';
    });
}

// 4. Resize observer for responsive layout
const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
        // Adjust grid layout based on container width
    });
});
observer.observe(document.querySelector('.project-grid'));

// 5. Intersection observer for scroll animations
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
sections.forEach(s => sectionObserver.observe(s));