const buttons = document.querySelectorAll('.btn');
        const storeImages = document.querySelectorAll('.store-item');
        const overlay = document.getElementById('overlay');
        const closeBtn = overlay.querySelector('.close-btn');

        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = e.target.dataset.filter;
                storeImages.forEach((item) => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else {
                        if (item.classList.contains(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });

        storeImages.forEach((item) => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').getAttribute('src');
                overlay.querySelector('img').src = imgSrc;
                overlay.classList.add('active');
                storeImages.forEach((storeItem) => {
                    if (storeItem !== item) {
                        storeItem.classList.add('enlarged');
                    }
                });
            });
        });

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            storeImages.forEach((storeItem) => {
                storeItem.classList.remove('enlarged');
            });
        });