document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-btn');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeButton = document.getElementById('mobile-menu-close');

    function closeMenu() {
        if (!overlay || !menuButton) return;
        overlay.classList.remove('active', 'show');
        menuButton.setAttribute('aria-expanded', 'false');
    }

    if (menuButton && overlay) {
        menuButton.addEventListener('click', () => {
            const isOpen = !overlay.classList.contains('show');
            overlay.classList.toggle('show', isOpen);
            overlay.classList.toggle('active', isOpen);
            menuButton.setAttribute('aria-expanded', String(isOpen));
        });
    }

    if (closeButton) closeButton.addEventListener('click', closeMenu);
    if (overlay) {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) closeMenu();
        });
    }

    document.querySelectorAll('.mobile-menu-nav a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');
    const productSections = Array.from(document.querySelectorAll('section.section')).filter((section) =>
        section.querySelector('.product-card')
    );

    function applyProductFilter(filter) {
        products.forEach((product) => {
            const categories = (product.dataset.category || '').split(/\s+/).filter(Boolean);
            const show = filter === 'all' || categories.includes(filter);
            product.style.display = show ? '' : 'none';
        });

        productSections.forEach((section) => {
            const hasVisibleProducts = Array.from(section.querySelectorAll('.product-card')).some(
                (product) => product.style.display !== 'none'
            );
            section.style.display = hasVisibleProducts ? '' : 'none';
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter || 'all';

            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            applyProductFilter(filter);
        });
    });
});
