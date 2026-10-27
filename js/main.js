// Public Domain & Reggadi Special Books Database
const booksDatabase = [
    {
        id: 101,
        title: "قدري - رواية أدبية",
        author: "محمد رگادي",
        category: "reggadi",
        badge: "إصدار خاص",
        rating: 5.0,
        downloads: 38400,
        pages: 220,
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
        description: "رواية مميزة للكاتب محمد رگادي تتناول مشاعر القدر والمصادفة والروابط العميقة بين القلوب والإرادة.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 102,
        title: "مملكة الأطياف",
        author: "محمد رگادي",
        category: "reggadi",
        badge: "جديد",
        rating: 4.9,
        downloads: 29100,
        pages: 310,
        cover: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=500&q=80",
        description: "ملحمة فانتازيا أدبية مميزة من تأليف الكاتب محمد رگادي، تنقل القارئ إلى عوالم النور والأطياف والذاكرة.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 103,
        title: "معتركة - أرض نسيان",
        author: "محمد رگادي",
        category: "reggadi",
        badge: "الأكثر قراءة",
        rating: 4.9,
        downloads: 41200,
        pages: 220,
        cover: "https://images.unsplash.com/photo-1509021436468-d51039749865?w=500&q=80",
        description: "عمل أدبي رفيع المستوى من إصدارات محمد رگادي في أدب الفانتازيا والبحث عن الهوية والذكريات المفقودة.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 201,
        title: "مقدمة ابن خلدون",
        author: "عبد الرحمن ابن خلدون",
        category: "public_domain",
        badge: "ملكية عامة",
        rating: 4.9,
        downloads: 58000,
        pages: 680,
        cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&q=80",
        description: "كتاب خالي من حقوق النشر. يعد موسوعة في التاريخ وعلوم العمران والاجتماع البشري وضع فيه المؤلف القوانين الأساسية لظهور الدول وسقوطها.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 202,
        title: "كليلة ودمنة",
        author: "ابن المقفع (ترجمة)",
        category: "public_domain",
        badge: "ملكية عامة",
        rating: 4.8,
        downloads: 49000,
        pages: 280,
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
        description: "مجموعة حكايات وأمثال على ألسنة الحيوانات تحمل حكماً سياسية وأخلاقية خالدة، من التراث الأدبي العالمي المفتوح.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 203,
        title: "طوق الحمامة في الألفة والأُلاَّف",
        author: "ابن حزم الأندلسي",
        category: "history",
        badge: "تراث أندلسي",
        rating: 4.7,
        downloads: 36000,
        pages: 240,
        cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80",
        description: "دراسة أدبية ونفسية فريدة للألف والمحبة وأسبابها وظواهرها في التراث الأندلسي الإسلامي الخالد.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 204,
        title: "الرحيق المختوم",
        author: "صفي الرحمن المباركفوري",
        category: "history",
        badge: "سيرة نبوية",
        rating: 5.0,
        downloads: 67000,
        pages: 520,
        cover: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&q=80",
        description: "دراسة شاملة وموثقة للسيرة النبوية الشريفة، متاح للقراءة والتحميل دون قيود حقوق.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 205,
        title: "فن الحرب (Sun Tzu)",
        author: "صن تزو (ترجمة مفتوحة)",
        category: "public_domain",
        badge: "ترجمة حرّة",
        rating: 4.8,
        downloads: 54000,
        pages: 180,
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
        description: "أحد أقدم الكتابات العسكرية والإستراتيجية في العالم، يدرس التخطيط والقيادة وإدارة الأزمات.",
        pdfUrl: "books/sample_book.pdf"
    },
    {
        id: 206,
        title: "حي بن يقظان",
        author: "ابن طفيل",
        category: "public_domain",
        badge: "فلسفة حرة",
        rating: 4.7,
        downloads: 31000,
        pages: 190,
        cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&q=80",
        description: "قصة فلسفية رمزية من أدب القرون الوسطى تبحث في إمكانية الوصول إلى المعرفة من خلال الفطرة والعقل.",
        pdfUrl: "books/sample_book.pdf"
    }
];

let favorites = JSON.parse(localStorage.getItem('reggadi_favs')) || [];
let currentCategory = 'all';

// DOM Elements
const booksGrid = document.getElementById('booksGrid');
const categoryMenu = document.getElementById('categoryMenu');
const searchInput = document.getElementById('searchInput');
const sectionTitle = document.getElementById('sectionTitle');
const sectionSub = document.getElementById('sectionSub');
const favCount = document.getElementById('favCount');
const bookModal = document.getElementById('bookModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const readerModal = document.getElementById('readerModal');
const pdfFrame = document.getElementById('pdfFrame');
const closeReader = document.getElementById('closeReader');
const sortSelect = document.getElementById('sortSelect');

// Theme Switcher Logic
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggleBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load Saved Theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Render Books
function renderBooks(books) {
    booksGrid.innerHTML = '';

    if (books.length === 0) {
        booksGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-book-open" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
                <h3>عذراً، لم نجد أي كتب مطابقة لترشيحك</h3>
                <p>جرّب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً من القائمة.</p>
            </div>
        `;
        return;
    }

    books.forEach(book => {
        const isFav = favorites.includes(book.id);
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <span class="card-badge">${book.badge}</span>
            <div class="book-cover-wrap">
                <img src="${book.cover}" alt="${book.title}" class="book-cover">
            </div>
            <div class="book-card-body">
                <h3 class="book-title" title="${book.title}">${book.title}</h3>
                <p class="book-author"><i class="fa-solid fa-feather"></i> ${book.author}</p>
                <div class="book-meta">
                    <span class="rating"><i class="fa-solid fa-star"></i> ${book.rating}</span>
                    <span><i class="fa-solid fa-file-pdf"></i> ${book.pages} صفحة</span>
                    <span><i class="fa-solid fa-download"></i> ${book.downloads.toLocaleString()}</span>
                </div>
                <div class="card-actions">
                    <button class="btn-detail" onclick="openBookModal(${book.id})">التفاصيل والتحميل</button>
                    <button class="btn-fav ${isFav ? 'active' : ''}" onclick="toggleFavorite(${book.id}, this)">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        booksGrid.appendChild(card);
    });
    updateFavCount();
}

// Category Filter Function
function filterCat(catKey) {
    currentCategory = catKey;
    document.querySelectorAll('.category-menu li, .quick-tag').forEach(el => {
        if (el.getAttribute('data-cat') === catKey) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    let filtered = booksDatabase;
    if (catKey === 'reggadi') {
        sectionTitle.innerHTML = '<i class="fa-solid fa-feather-pointed"></i> إصدارات الكاتب محمد رگادي';
        sectionSub.innerText = 'المؤلفات والروايات الخاصة بالكاتب محمد رگادي المتوفرة للقراءة';
        filtered = booksDatabase.filter(b => b.category === 'reggadi');
    } else if (catKey === 'public_domain') {
        sectionTitle.innerHTML = '<i class="fa-solid fa-building-columns"></i> كتب الملكية العامة (بدون حقوق)';
        sectionSub.innerText = 'كتب تاريخية وفلسفية حرة ومتاحة للجميع مجاناً';
        filtered = booksDatabase.filter(b => b.category === 'public_domain');
    } else if (catKey !== 'all') {
        sectionTitle.innerHTML = `<i class="fa-solid fa-layer-group"></i> كتب القسم`;
        sectionSub.innerText = 'تصفح قائمة الكتب المصنفة بحسب تخصصها';
        filtered = booksDatabase.filter(b => b.category === catKey);
    } else {
        sectionTitle.innerHTML = '<i class="fa-solid fa-fire-flame-curated"></i> جميع الكتب والأعمال الأدبية';
        sectionSub.innerText = 'عرض وتصفح كامل المكتبة الإلكترونية المتاحة';
    }

    renderBooks(sortBooksData(filtered));
}

// Menu Click Listener
categoryMenu.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (li) filterCat(li.getAttribute('data-cat'));
});

// Quick Hero Tags Click Listener
document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => filterCat(tag.getAttribute('data-cat')));
});

// Realtime Search
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = booksDatabase.filter(b =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        b.description.toLowerCase().includes(query)
    );
    renderBooks(filtered);
});

// Favorites Toggle
function toggleFavorite(id, btn) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(fId => fId !== id);
        btn.classList.remove('active');
    } else {
        favorites.push(id);
        btn.classList.add('active');
    }
    localStorage.setItem('reggadi_favs', JSON.stringify(favorites));
    updateFavCount();
}

function updateFavCount() {
    favCount.innerText = favorites.length;
}

// Favorite Tab Click
document.getElementById('favTabBtn').addEventListener('click', (e) => {
    e.preventDefault();
    sectionTitle.innerHTML = '<i class="fa-solid fa-heart" style="color:#ef4444;"></i> كتبك المفضلة';
    sectionSub.innerText = 'قائمة الكتب التي قمت بحفظها في المفضلة الخاصة بك';
    const favBooks = booksDatabase.filter(b => favorites.includes(b.id));
    renderBooks(favBooks);
});

// Sorting Logic
function sortBooksData(data) {
    const sortVal = sortSelect.value;
    let sorted = [...data];
    if (sortVal === 'downloads') {
        sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (sortVal === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
    } else {
        sorted.sort((a, b) => b.id - a.id);
    }
    return sorted;
}

sortSelect.addEventListener('change', () => {
    filterCat(currentCategory);
});

// Modal Details & Download
function openBookModal(id) {
    const book = booksDatabase.find(b => b.id === id);
    if (!book) return;

    modalBody.innerHTML = `
        <div>
            <img src="${book.cover}" alt="${book.title}" class="modal-cover-img">
        </div>
        <div class="modal-info">
            <h2>${book.title}</h2>
            <div class="modal-author"><i class="fa-solid fa-feather"></i> المؤلف: ${book.author}</div>
            
            <div class="modal-tags">
                <span><strong>التقييم:</strong> ⭐ ${book.rating}/5</span>
                <span><strong>الصفحات:</strong> ${book.pages} صفحة</span>
                <span><strong>التحميلات:</strong> ${book.downloads.toLocaleString()}</span>
            </div>

            <p class="modal-desc">${book.description}</p>

            <div class="modal-btns">
                <a href="${book.pdfUrl}" download="${book.title}.pdf" class="btn-download">
                    <i class="fa-solid fa-download"></i> تحميل الكتاب PDF
                </a>
                <button class="btn-read" onclick="openPdfReader('${book.pdfUrl}', '${book.title}')">
                    <i class="fa-solid fa-book-open"></i> قراءة أونلاين
                </button>
            </div>
        </div>
    `;
    bookModal.style.display = 'flex';
}

closeModal.onclick = () => bookModal.style.display = 'none';
window.onclick = (e) => { if (e.target === bookModal) bookModal.style.display = 'none'; };

// Online PDF Reader Modal
function openPdfReader(url, title) {
    bookModal.style.display = 'none';
    document.getElementById('readerTitle').innerText = 'قراءة: ' + title;
    pdfFrame.src = url;
    readerModal.style.display = 'flex';
}

closeReader.onclick = () => {
    readerModal.style.display = 'none';
    pdfFrame.src = '';
};

// Initial Render
renderBooks(sortBooksData(booksDatabase));
