/* =========================================================

   VECTRA® — Matrix Canvas, 3D Metrics, Real 3D Products & Live SEO Blog API

   ========================================================= */



// 1. Subtle Numeric Matrix Background Canvas

(function initNumericMatrix() {

  const canvas = document.getElementById('matrix-bg');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const digits = '0123456789';

  const fontSize = 14;

  let columns = 0;

  let drops = [];

  let matrixEnabled = true;



  function resize() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);

    drops = Array.from({ length: columns }, () => Math.random() * -40);

  }



  resize();

  window.addEventListener('resize', resize);



  let lastTime = 0;

  function draw(now) {

    requestAnimationFrame(draw);

    if (!matrixEnabled) return;

    if (now - lastTime < 55) return;

    lastTime = now;



    ctx.fillStyle = 'rgba(8, 12, 20, 0.15)';

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px "JetBrains Mono", monospace';



    for (let i = 0; i < drops.length; i++) {

      const text = digits[Math.floor(Math.random() * digits.length)];

      const isAccent = Math.random() > 0.985;

      ctx.fillStyle = isAccent ? 'rgba(59, 130, 246, 0.45)' : 'rgba(241, 245, 249, 0.12)';

      ctx.fillText(text, i * fontSize, drops[i] * fontSize);



      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {

        drops[i] = 0;

      }

      drops[i] += 0.65;

    }

  }

  requestAnimationFrame(draw);



  const toggleBtn = document.getElementById('matrix-toggle');

  if (toggleBtn) {

    toggleBtn.addEventListener('click', () => {

      matrixEnabled = !matrixEnabled;

      canvas.classList.toggle('matrix-off', !matrixEnabled);

      toggleBtn.textContent = matrixEnabled ? 'HIỆU ỨNG NỀN: BẬT' : 'HIỆU ỨNG NỀN: TẮT';

    });

  }

})();



// 2. Scroll Progress & Mobile Menu

const progressBar = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {

  const max = document.documentElement.scrollHeight - window.innerHeight;

  if (progressBar) progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';

});



const mobileToggle = document.getElementById('mobile-toggle');

const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileMenu) {

  mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));

  mobileMenu.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => mobileMenu.classList.remove('open'));

  });

}



// 3. CountUp Animation + Interactive 3D Tilt for Metrics Card

function animateMetric(el) {

  if (el.dataset.done) return;

  el.dataset.done = '1';

  const target = parseFloat(el.dataset.target || '0');

  const decimals = parseInt(el.dataset.decimals || '0', 10);

  const prefix = el.dataset.prefix || '';

  const suffix = el.dataset.suffix || '';



  if (window.countUp && window.countUp.CountUp) {

    const cu = new window.countUp.CountUp(el, target, {

      decimalPlaces: decimals,

      duration: 1.8,

      prefix,

      suffix,

    });

    if (!cu.error) {

      cu.start();

      return;

    }

  }

  el.textContent = prefix + target.toFixed(decimals) + suffix;

}



const metricObserver = new IntersectionObserver((entries) => {

  entries.forEach((e) => {

    if (e.isIntersecting) animateMetric(e.target);

  });

}, { threshold: 0.3 });

document.querySelectorAll('.countup-metric').forEach((el) => metricObserver.observe(el));



// 3D Mouse Tilt on Metrics Frame

(function initMetrics3D() {

  const stage = document.getElementById('metrics-3d-stage');

  const card = document.getElementById('metrics-3d-card');

  const glare = document.getElementById('metrics-glare');

  if (!stage || !card) return;



  stage.addEventListener('mousemove', (e) => {

    const rect = stage.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;

    const y = (e.clientY - rect.top) / rect.height;

    const rotY = (x - 0.5) * 18;

    const rotX = (0.5 - y) * 16;

    card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(8px)`;

    if (glare) {

      glare.style.background = `radial-gradient(circle at ${(x * 100).toFixed(0)}% ${(y * 100).toFixed(0)}%, rgba(255,255,255,0.16), transparent 60%)`;

    }

  });



  stage.addEventListener('mouseleave', () => {

    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';

  });

})();



// 4. Hyper-Realistic 3D Product Case Study Showcase

const cases = [

  {

    id: 'maison-aurelia',

    meta: 'THỜI TRANG CAO CẤP • BÁN HÀNG',

    title: 'MAISON AURELIA',

    kpi: '+240% Đơn hàng',

    domain: 'https://www.google.com/search?q=https://maison-aurelia.vn',

    badgeTitle: 'Tăng gấp 3.4 lần đơn hàng',

    badgeSub: 'Sau 60 ngày đổi giao diện mới',

    image: 'assets/case-study-1.jpg',

    metrics: [

      { val: '0.7s', label: 'Tốc độ mở trang' },

      { val: '+240%', label: 'Tăng đơn đặt mua' },

      { val: '-42%', label: 'Giảm khách thoát' },

    ],

    summary: 'Thiết kế lại cửa hàng thời trang trực tuyến với hình ảnh sản phẩm sắc nét và giỏ hàng đặt mua chỉ trong 2 bước chạm.',

  },

  {

    id: 'finpulse-ai',

    meta: 'PHẦN MỀM DOANH NGHIỆP • TÀI CHÍNH',

    title: 'FINPULSE ANALYTICS',

    kpi: '+310% Khách đăng ký',

    domain: 'https://finpulse.vn',

    badgeTitle: 'Hơn 420 doanh nghiệp đăng ký/tháng',

    badgeSub: 'Tự lên Top Google 18 từ khóa chính',

    image: 'assets/case-study-2.jpg',

    metrics: [

      { val: '0.6s', label: 'Mở trang tức thì' },

      { val: '99/100', label: 'Điểm chuẩn Google' },

      { val: '+310%', label: 'Lượt đăng ký tư vấn' },

    ],

    summary: 'Xây dựng trang giới thiệu phần mềm tài chính trực quan, giúp khách hàng doanh nghiệp hiểu rõ lợi ích và đăng ký dùng thử ngay.',

  },

  {

    id: 'vela-villas',

    meta: 'BẤT ĐỘNG SẢN • KIẾN TRÚC NGHỈ DƯỠNG',

    title: 'VELA VILLAS RESORT',

    kpi: '-38% Tiền quảng cáo',

    domain: 'https://www.google.com/search?q=https://velavillas.vn',

    badgeTitle: '+195% Khách đặt lịch xem nhà mẫu',

    badgeSub: 'Hiển thị sắc nét trên cả 4G di động',

    image: 'assets/case-study-3.jpg',

    metrics: [

      { val: '+195%', label: 'Lịch hẹn tham quan' },

      { val: '-38%', label: 'Chi phí mỗi khách' },

      { val: '28.4%', label: 'Tỷ lệ điền Form' },

    ],

    summary: 'Không gian trưng bày biệt thự nghỉ dưỡng sang trọng, tối ưu ảnh tải nhanh và tích hợp nút đặt lịch xem nhà trực tiếp qua Zalo.',

  },

];



const caseListEl = document.getElementById('case-list');

const caseVisualEl = document.getElementById('case-visual');

const caseMetricsEl = document.getElementById('case-metrics-strip');

const caseSummaryEl = document.getElementById('case-summary');

let activeCaseId = cases[0].id;



function renderCases() {

  if (!caseListEl) return;

  caseListEl.innerHTML = cases.map((c) => `

    <button type="button" class="case-item ${c.id === activeCaseId ? 'active' : ''}" data-case="${c.id}">

      <div>

        <div class="case-item-meta">${c.meta}</div>

        <div class="case-item-title">${c.title}</div>

      </div>

      <div class="case-item-kpi">${c.kpi}</div>

    </button>

  `).join('');



  const current = cases.find((c) => c.id === activeCaseId) || cases[0];

  caseVisualEl.innerHTML = `

    <div class="case-device-frame">

      <div class="case-browser-bar">

        <div class="browser-dots"><i></i><i></i><i></i></div>

        <span>${current.domain}</span>

        <span>3D LIVE PREVIEW</span>

      </div>

      <div class="case-screen-wrap">

        <img src="${current.image}" alt="${current.title}" />

        <div class="case-specular"></div>

        <div class="case-float-badge">

          <strong>${current.badgeTitle}</strong>

          <span>${current.badgeSub}</span>

        </div>

      </div>

    </div>

  `;



  if (caseMetricsEl) {

    caseMetricsEl.innerHTML = current.metrics.map((m) => `

      <div class="case-metric-pill">

        <strong>${m.val}</strong>

        <span>${m.label}</span>

      </div>

    `).join('');

  }

  caseSummaryEl.textContent = current.summary;



  caseListEl.querySelectorAll('.case-item').forEach((btn) => {

    btn.addEventListener('click', () => {

      activeCaseId = btn.dataset.case;

      renderCases();

    });

  });

}

renderCases();



// 3D Interactive Tilt on Product Case Study Stage

(function initCase3D() {

  const stage = document.getElementById('case-3d-stage');

  const visual = document.getElementById('case-visual');

  if (!stage || !visual) return;



  stage.addEventListener('mousemove', (e) => {

    const rect = stage.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;

    const y = (e.clientY - rect.top) / rect.height;

    const rotY = (x - 0.5) * 16;

    const rotX = (0.5 - y) * 12;

    visual.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(1.015)`;

  });



  stage.addEventListener('mouseleave', () => {

    visual.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';

  });

})();



// 5. Dedicated SEO Blog System (Local Vietnamese Plain-Language Guides + Live External Blog API)

const localBlogPosts = [

  {

    id: 'mo-trang-nhanh-giu-khach',

    category: 'Bán hàng Online',

    date: '2026-11-22',

    readTime: '3 phút đọc',

    isExternal: false,

    title: 'Làm sao để website mở nhanh dưới 1 giây và giữ khách ở lại mua hàng?',

    excerpt: 'Giải thích dễ hiểu cách tối ưu hình ảnh và bố cục để khách bấm vào là xem được ngay trên điện thoại.',

    tags: ['#BanHangOnline', '#TocDoWeb', '#TangDonHang'],

    body: `

      <p>Khách hàng lướt điện thoại rất ít kiên nhẫn. Nếu bấm vào link sản phẩm mà màn hình trắng xóa quá 3 giây, hơn một nửa số khách sẽ bấm thoát ngay lập tức.</p>

      <h2>1. Hình ảnh đẹp nhưng dung lượng phải thật nhẹ</h2>

      <p>Thay vì đăng ảnh gốc nặng 5–10MB từ điện thoại, website chuẩn sẽ tự động nén ảnh xuống dưới 150KB mà vẫn giữ độ sắc nét, giúp trang mở tức thì kể cả khi khách dùng 4G yếu.</p>

      <h2>2. Đưa thông tin quan trọng nhất lên màn hình đầu tiên</h2>

      <p>Ngay khi mở trang, khách cần thấy rõ bạn bán gì, giá bao nhiêu và nút liên hệ ở đâu mà không phải kéo xuống quá xa.</p>

    `,

  },

  {

    id: 'len-top-google-tu-nhien',

    category: 'Lên Top Google',

    date: '2026-11-18',

    readTime: '4 phút đọc',

    isExternal: false,

    title: 'Cách làm website tự lên Top Google để có khách đều đặn không cần chạy quảng cáo',

    excerpt: '3 nguyên tắc đơn giản giúp Google hiểu rõ dịch vụ của bạn và ưu tiên giới thiệu tới đúng người đang tìm mua.',

    tags: ['#LenTopGoogle', '#KhachTuNhien', '#BlogSEO'],

    body: `

      <p>Nhiều chủ cửa hàng nghĩ muốn có khách trên mạng bắt buộc phải chạy quảng cáo liên tục. Thực tế, một website có mục Blog chia sẻ kiến thức hữu ích sẽ mang về khách hàng miễn phí mỗi ngày.</p>

      <h2>1. Đặt tiêu đề đúng câu khách hàng hay gõ tìm kiếm</h2>

      <p>Hãy viết tiêu đề tự nhiên như cách khách hàng hỏi, ví dụ: "Thiết kế website bán hàng giá bao nhiêu?" thay vì dùng các từ ngữ quá hàn lâm.</p>

      <h2>2. Cập nhật bài viết mới đều đặn</h2>

      <p>Google rất thích những website thường xuyên có nội dung mới. Chỉ cần đăng 2–4 bài hướng dẫn chọn sản phẩm mỗi tháng là thứ hạng trang web sẽ tăng rõ rệt.</p>

    `,

  },

  {

    id: 'trinh-bay-web-de-chot-don',

    category: 'Thiết kế đẹp',

    date: '2026-11-12',

    readTime: '3 phút đọc',

    isExternal: false,

    title: 'Bí quyết trình bày trang web gọn đẹp để khách nhìn là muốn đặt hàng ngay',

    excerpt: 'Tại sao những trang web ít chữ, hình ảnh rõ ràng và nút gọi nổi bật lại bán được nhiều hàng hơn?',

    tags: ['#ThietKeDep', '#ChotDonNhanh', '#TraiNghiemKhachHang'],

    body: `

      <p>Một sai lầm phổ biến là nhồi nhét quá nhiều chữ và màu sắc sặc sỡ lên trang chủ. Điều này khiến người xem bị ngợp và không biết nên bấm vào đâu.</p>

      <h2>1. Chừa khoảng thoáng hợp lý</h2>

      <p>Khoảng trống xung quanh hình sản phẩm giúp mắt người xem dễ chịu hơn và làm nổi bật hẳn giá bán cũng như ưu đãi đi kèm.</p>

      <h2>2. Biểu mẫu liên hệ thật ngắn gọn</h2>

      <p>Chỉ cần hỏi Tên và Số điện thoại / Zalo là đủ để tư vấn nhanh, giúp tỷ lệ khách để lại thông tin tăng gấp đôi.</p>

    `,

  },

];



let allBlogPosts = [...localBlogPosts];

let activeBlogCat = 'all';

const blogGridEl = document.getElementById('blog-grid');

const readerOverlay = document.getElementById('blog-reader');

const readerBody = document.getElementById('article-content');

const readerMeta = document.getElementById('article-meta');

const apiStatusEl = document.getElementById('blog-api-status');

const apiDotEl = document.getElementById('blog-api-dot');



// Inject dynamic JSON-LD BlogPosting Schema for SEO

function updateBlogSchema(posts) {

  const oldScript = document.getElementById('dynamic-blog-schema');

  if (oldScript) oldScript.remove();

  const schema = {

    '@context': 'https://schema.org',

    '@type': 'Blog',

    name: 'VECTRA Blog Kiến Thức Website & Bán Hàng',

    blogPost: posts.slice(0, 6).map((p) => ({

      '@type': 'BlogPosting',

      headline: p.title,

      datePublished: p.date,

      description: p.excerpt,

      url: p.url || 'https://www.google.com/search?q=https://vectra.vn/%23blog-seo',

    })),

  };

  const s = document.createElement('script');

  s.id = 'dynamic-blog-schema';

  s.type = 'application/ld+json';

  s.textContent = JSON.stringify(schema);

  document.head.appendChild(s);

}



// Call external public CORS-enabled Blog API (Dev.to public API)

async function fetchExternalBlogAPI() {

  if (apiStatusEl) apiStatusEl.textContent = 'Đang đồng bộ bài viết từ API bên ngoài...';

  if (apiDotEl) apiDotEl.classList.remove('live');

  try {

    const res = await fetch('https://www.google.com/search?q=https://dev.to/api/articles%3Fper\_page%3D3%26tag%3Dwebdev');

    if (!res.ok) throw new Error('HTTP ' + res.status);

    const data = await res.json();

    const apiMapped = data.map((item) => ({

      id: 'api-' + item.id,

      category: 'Tin công nghệ (API)',

      date: (item.published_at || '').slice(0, 10) || '2026-11-24',

      readTime: `${item.reading_time_minutes || 3} phút đọc`,

      isExternal: true,

      url: item.url,

      title: item.title,

      excerpt: item.description || 'Bài viết chia sẻ kinh nghiệm phát triển và tối ưu website mới nhất được đồng bộ tự động qua API.',

      tags: (item.tag_list || ['webdev']).slice(0, 3).map((t) => '#' + t),

      body: `

        <p><strong>Nguồn bài viết đồng bộ tự động qua Blog API (Dev.to):</strong> Tác giả ${item.user && item.user.name ? item.user.name : 'Cộng đồng Web'}.</p>

        <p>${item.description || 'Bài viết cập nhật xu hướng xây dựng website hiện đại giúp tăng tốc độ và tối ưu hiển thị trên Google.'}</p>

        <p style="margin-top:20px;"><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Mở bài viết gốc đầy đủ ↗</a></p>

      `,

    }));



    allBlogPosts = [...localBlogPosts, ...apiMapped];

    if (apiStatusEl) apiStatusEl.textContent = `Đã đồng bộ ${apiMapped.length} bài viết mới từ Blog API bên ngoài`;

    if (apiDotEl) apiDotEl.classList.add('live');

  } catch (err) {

    allBlogPosts = [...localBlogPosts];

    if (apiStatusEl) apiStatusEl.textContent = 'Hiển thị bài viết có sẵn (API đang ngoại tuyến)';

  }

  updateBlogSchema(allBlogPosts);

  renderBlog();

}



function renderBlog() {

  if (!blogGridEl) return;

  const list = activeBlogCat === 'all' ? allBlogPosts : allBlogPosts.filter((p) => p.category === activeBlogCat);

  if (list.length === 0) {

    blogGridEl.innerHTML = '&lt;div class=&quot;blog-card&quot;&gt;&lt;p class=&quot;blog-excerpt&quot;&gt;Chưa có bài viết trong mục này. Bấm "↻ Tải lại API" để cập nhật.&lt;/p&gt;&lt;/div&gt;';

    return;

  }

  blogGridEl.innerHTML = list.map((p) => `

    <article class="blog-card" data-post="${p.id}">

      <div>

        <div class="blog-meta">

          <span class="blog-cat">${p.category}</span>

          ${p.isExternal ? '<span class="blog-source-pill">API LIVE</span>' : `&lt;span&gt;${p.readTime}&lt;/span&gt;`}

        </div>

        <h3 class="blog-title" style="margin-top:12px;">${p.title}</h3>

        <p class="blog-excerpt" style="margin-top:8px;">${p.excerpt}</p>

      </div>

      <div class="blog-read-link">${p.isExternal ? 'Xem chi tiết bài API →' : 'Đọc bài viết →'}</div>

    </article>

  `).join('');



  blogGridEl.querySelectorAll('.blog-card').forEach((card) => {

    card.addEventListener('click', () => openArticle(card.dataset.post));

  });

}



function openArticle(id) {

  const post = allBlogPosts.find((p) => p.id === id);

  if (!post) return;

  readerMeta.textContent = `${post.category} • ${post.date} • ${post.readTime}`;

  readerBody.innerHTML = `

    <h1>${post.title}</h1>

    ${post.body}

    <div class="article-tags">

      ${post.tags.map((t) => `&lt;span class=&quot;seo-tag&quot;&gt;${t}&lt;/span&gt;`).join('')}

    </div>

  `;

  readerOverlay.classList.add('open');

  document.body.style.overflow = 'hidden';

}



function closeArticle() {

  readerOverlay.classList.remove('open');

  document.body.style.overflow = '';

}



document.querySelectorAll('.filter-btn').forEach((btn) => {

  btn.addEventListener('click', () => {

    activeBlogCat = btn.dataset.cat;

    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));

    btn.classList.add('active');

    renderBlog();

  });

});



const refreshApiBtn = document.getElementById('refresh-blog-api');

if (refreshApiBtn) {

  refreshApiBtn.addEventListener('click', () => {

    fetchExternalBlogAPI();

    showToast('Đang tải bài viết mới từ Blog API...');

  });

}



const closeReaderBtn = document.getElementById('close-reader');

if (closeReaderBtn) closeReaderBtn.addEventListener('click', closeArticle);

if (readerOverlay) {

  readerOverlay.addEventListener('click', (e) => {

    if (e.target === readerOverlay) closeArticle();

  });

}



renderBlog();

fetchExternalBlogAPI();



// 6. Pricing Sync, Form Validation & Copy Helper

const pkgSelect = document.getElementById('package');

document.querySelectorAll('.select-pkg').forEach((btn) => {

  btn.addEventListener('click', () => {

    if (pkgSelect) pkgSelect.value = btn.dataset.pkg;

    document.getElementById('dang-ky').scrollIntoView({ behavior: 'smooth' });

    showToast('Đã chọn: ' + btn.dataset.pkg);

  });

});



const form = document.getElementById('lead-form');

const formMsg = document.getElementById('form-msg');

if (form) {

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value.trim();

    const phone = document.getElementById('phone').value.trim();

    const email = document.getElementById('email').value.trim();



    if (!name || !phone || !email || !email.includes('@')) {

      formMsg.className = 'form-msg error';

      formMsg.textContent = 'Vui lòng nhập đầy đủ Họ tên, Số điện thoại và Email hợp lệ.';

      return;

    }



    formMsg.className = 'form-msg success';

    formMsg.textContent = `Đã tiếp nhận yêu cầu của ${name} (${pkgSelect.value}). Chúng tôi sẽ liên hệ số ${phone} trong 30 phút.`;

    form.reset();

  });

}



function showToast(text) {

  const toast = document.getElementById('toast');

  if (!toast) return;

  toast.textContent = text;

  toast.classList.add('show');

  clearTimeout(window._toastId);

  window._toastId = setTimeout(() => toast.classList.remove('show'), 2400);

}



document.querySelectorAll('.copy-btn, .copy-btn-lg').forEach((btn) => {

  btn.addEventListener('click', () => {

    const val = btn.dataset.copy;

    if (navigator.clipboard && navigator.clipboard.writeText) {

      navigator.clipboard.writeText(val).then(() => showToast('Đã sao chép: ' + val)).catch(() => fallbackCopy(val));

    } else {

      fallbackCopy(val);

    }

  });

});



function fallbackCopy(val) {

  const ta = document.createElement('textarea');

  ta.value = val;

  ta.style.position = 'fixed';

  ta.style.opacity = '0';

  document.body.appendChild(ta);

  ta.select();

  try {

    document.execCommand('copy');

    showToast('Đã sao chép: ' + val);

  } catch (err) {}

  document.body.removeChild(ta);

}



// 7. Scroll Reveal

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach((e) => {

    if (e.isIntersecting) e.target.classList.add('visible');

  });

}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));