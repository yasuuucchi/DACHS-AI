document.addEventListener('DOMContentLoaded', () => {
    // スムーズスクロール
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

    // ヘッダーの透明度制御
    let header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.opacity = '1';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // 下スクロール
            header.style.opacity = '0.8';
        } else {
            // 上スクロール
            header.style.opacity = '1';
        }
        
        lastScroll = currentScroll;
    });

    // 全てのセクションを即座に表示
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'none';
    });
});

