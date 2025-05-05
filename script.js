// 動態載入現場照片
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const sitePhotos = [
        '現場照 (1).jpg',
        '現場照 (2).jpg',
        '現場照 (3).jpg',
        '現場照 (4).jpg',
        '現場照 (5).jpg',
        '現場照 (6).jpg',
        '現場照 (7).jpg'
    ];

    sitePhotos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = photo;
        img.alt = '現場照片';
        
        const caption = document.createElement('p');
        caption.textContent = '現場照片';
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        galleryGrid.appendChild(galleryItem);
    });

    // 添加平滑滾動效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 添加導航欄滾動效果
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll) {
            header.style.transform = 'translateY(-100px)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // 添加圖片點擊放大效果
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
});

// 添加模態框樣式
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        cursor: pointer;
    }
    
    .modal img {
        max-width: 90%;
        max-height: 90vh;
        object-fit: contain;
    }
`;
document.head.appendChild(style); 