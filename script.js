/* =========================================================
   VECTRA® — Light Matrix Canvas, Bilingual i18n, 3D Metrics,
   3D Case Studies & Live SEO Blog API
   ========================================================= */

// 0. Bilingual Dictionary (VI / EN)
let currentLang = localStorage.getItem('vectra_lang') === 'en' ? 'en' : 'vi';

const i18n = {
  vi: {
    page_title: 'VECTRA® — Thiết Kế Website Chuyên Nghiệp, Dễ Lên Top Google & Chốt Đơn Cao',
    nav_intro: 'Giới thiệu',
    nav_pain: 'Vấn đề',
    nav_pricing: 'Bảng giá',
    nav_cases: 'Mẫu website',
    nav_blog: 'Blog kiến thức',
    nav_contact: 'Liên hệ',
    nav_cta: 'Bắt đầu dự án',
    mnav_pricing: 'Giải pháp & Bảng giá',
    mnav_consult: 'Đăng ký tư vấn',
    hero_label: 'Thiết kế Website Chuyên Nghiệp',
    hero_title: 'Biến khách ghé thăm<br />thành <em>khách mua hàng</em><br />ngay trên website',
    hero_desc: 'Thiết kế đẹp mắt, dễ lên Top Google và mở trang chưa tới 1 giây — giúp thương hiệu của bạn tạo niềm tin ngay từ lần đầu khách ghé thăm.',
    hero_cta_1: 'Nhận báo giá 24h',
    hero_cta_2: 'Xem mẫu website',
    hero_proof: '500+ website đã bàn giao',
    tf_sales_label: 'Doanh thu tháng',
    tf_order_tag: 'Đơn hàng mới',
    tf_order_name: 'Gói Doanh Nghiệp',
    hs_1_l: 'Dự án bàn giao',
    hs_1_s: 'khách hàng',
    hs_1_p: 'từ 2022',
    hs_2_l: 'Tốc độ tải trang',
    hs_2_s: 'hiển thị tức thì',
    hs_2_p: 'chuẩn Google',
    hs_3_l: 'Bảo hành kỹ thuật',
    hs_3_s: 'hỗ trợ 1-1',
    hs_3_p: 'trọn năm',
    hs_4_l: 'Chi phí khởi tạo',
    hs_4_s: 'gói cơ bản',
    hs_4_p: 'trọn gói',
    sc_url: 'thuonghieucuaban.vn',
    sc_live: 'ONLINE',
    sc_brand: 'THƯƠNG HIỆU',
    sc_tag: 'Giao diện độc quyền • Chuẩn Google',
    sc_heading: 'Sản phẩm nổi bật, khách nhìn là tin.',
    sc_btn: 'Đặt hàng ngay →',
    sc_p1: 'Tốc độ',
    sc_p2: 'Đơn hàng',
    sc_p3: '✓ Tự chỉnh sửa',
    sc_phone_cta: 'Liên hệ Zalo',
    sc_pill: 'Mở trang dưới 0.8s',
    ol_label: 'Thực trạng & Giải pháp',
    ol_title: 'Một giải pháp trọn vẹn<br />cho <em>mọi điểm nghẽn</em>',
    ol_t0: 'Giao diện độc quyền',
    ol_t1: 'Tốc độ dưới 1s',
    ol_t2: 'Chuẩn điện thoại',
    ol_t3: 'Lên Top Google',
    ai_title: 'Mô tả ngành hàng của bạn,<br /><em>VECTRA® dựng mẫu ngay</em>',
    ai_ph: 'Ví dụ: Shop thời trang, nha khoa, quán cà phê, bất động sản...',
    ai_btn: 'Tạo mẫu',
    ai_s1: 'Ngành hàng',
    ai_s2: 'Giao diện',
    ai_s3: 'Nội dung',
    ai_s4: 'Chốt đơn & Zalo',
    ai_time: 'Xong trong 0.8s',
    sol_label: 'Bảng giá ưu đãi',
    sol_title: 'Đẹp mắt, dễ dùng và ra đơn thật.',
    sol_1_n: '01 / GIAO DIỆN',
    sol_1_h: 'Thiết kế riêng theo thương hiệu',
    sol_1_p: 'Bố cục độc quyền, làm nổi bật sản phẩm ngay từ giây đầu.',
    sol_2_n: '02 / TỐC ĐỘ',
    sol_2_h: 'Mở trang mượt trong 1 giây',
    sol_2_p: 'Hiển thị tức thì trên cả máy tính lẫn điện thoại 4G.',
    sol_3_n: '03 / LÊN TOP GOOGLE',
    sol_3_h: 'Chuẩn tìm kiếm Google & Blog',
    sol_3_p: 'Cấu trúc chuẩn SEO & Blog hút khách tự nhiên mỗi ngày.',
    sol_4_n: '04 / TỰ CHỦ',
    sol_4_h: 'Dễ tự chỉnh sửa & Bảo hành 12 tháng',
    sol_4_p: 'Tự thay ảnh, sửa giá dễ dàng và hỗ trợ kỹ thuật trọn năm.',
    promo_pill: 'ƯU ĐÃI THÁNG NÀY • TẶNG KÈM TÊN MIỀN, LƯU TRỮ & BẢO HÀNH',
    pkg1_tag: '01 • Khởi nghiệp',
    pkg1_badge: 'Giảm 65%',
    pkg1_name: 'Landing Page Bán Hàng',
    pkg1_compare: 'Giá gốc: <s>1.500.000đ</s>',
    pkg1_perk: '🎁 Tặng cài đặt nút Zalo, Messenger & 1 banner sản phẩm',
    pkg1_f1: 'Thiết kế 1 trang giới thiệu gọn đẹp, dễ chốt đơn',
    pkg1_f2: 'Hiển thị mượt mà trên mọi dòng điện thoại',
    pkg1_f3: 'Gắn sẵn Form nhận đơn & công cụ đếm lượt khách',
    pkg1_f4: 'Bàn giao nhanh chỉ trong 2–3 ngày làm việc',
    pkg1_btn: 'Chọn gói 500K ngay',
    pkg2_ribbon: 'PHỔ BIẾN NHẤT',
    pkg2_tag: '02 • Chuyên nghiệp',
    pkg2_badge: 'Tiết kiệm 2 triệu',
    pkg2_name: 'Website Doanh Nghiệp',
    pkg2_compare: 'Giá gốc: <s>5.000.000đ</s>',
    pkg2_perk: '🎁 Tặng 01 năm lưu trữ tốc độ cao + Khóa bảo mật SSL + 5 bài viết mẫu',
    pkg2_f1: 'Đầy đủ trang Giới thiệu, Sản phẩm, Dịch vụ & Blog lên Top Google',
    pkg2_f2: 'Trang quản trị tiếng Việt, tự đổi ảnh và sửa giá cực dễ',
    pkg2_f3: 'Tối ưu tốc độ mở trang nhanh & chuẩn hiển thị Google',
    pkg2_f4: 'Bảo hành kỹ thuật và hỗ trợ chỉnh sửa 12 tháng',
    pkg2_btn: 'Chọn gói 3 Triệu (Ưu đãi)',
    pkg3_tag: '03 • Cao cấp VIP',
    pkg3_badge: 'Trọn gói A–Z',
    pkg3_name: 'Website Bán Hàng Cao Cấp',
    pkg3_compare: 'Giá gốc: <s>8.000.000đ</s>',
    pkg3_perk: '🎁 Tặng tên miền .COM/.VN + Lưu trữ 1 năm + Hiệu ứng 3D sản phẩm',
    pkg3_f1: 'Thiết kế độc quyền theo yêu cầu, hỗ trợ đa ngôn ngữ',
    pkg3_f2: 'Có sẵn Giỏ hàng, thanh toán chuyển khoản QR & quản lý đơn',
    pkg3_f3: 'Tích hợp hiệu ứng 3D sản phẩm nổi bật & Blog tự động cập nhật',
    pkg3_f4: 'Ưu tiên hỗ trợ kỹ thuật 1-1 nhanh chóng trong 12 tháng',
    pkg3_btn: 'Nhận ưu đãi gói 5 Triệu',
    case_label: 'Sản phẩm thực tế',
    case_title: 'Trải nghiệm trực tiếp các mẫu website đã bàn giao.',
    case_sub: 'Chọn dự án bên trái, cuộn và bấm thử trực tiếp trên khung trình duyệt bên phải (hỗ trợ xem cả Máy tính & Điện thoại).',
    case_cta: 'Làm website như mẫu này →',
    case_preview_tag: 'LIVE DEMO',
    modal_title: 'Để lại thông tin nhận tư vấn ngay',
    modal_sub: 'Chỉ cần Tên và Số điện thoại, chúng tôi sẽ liên hệ gửi mẫu giao diện phù hợp trong 15 phút.',
    modal_submit: 'Gửi thông tin ngay →',
    modal_zalo_head: 'Hoặc nhắn trực tiếp qua Zalo',
    modal_zalo_label: 'Số Zalo của tôi',
    modal_zalo_copy: '📋 Sao chép số',
    modal_zalo_chat: '💬 Mở Zalo ngay',
    modal_err: 'Vui lòng nhập đầy đủ Họ tên và Số điện thoại / Zalo.',
    modal_ok: (name, pkg, phone) => `Đã nhận yêu cầu gói ${pkg} của ${name}. Chúng tôi sẽ liên hệ Zalo ${phone} ngay!`,
    blog_label: 'Blog Kiến Thức • Chuẩn Google',
    blog_title: 'Kinh nghiệm làm web & bán hàng hiệu quả.',
    blog_refresh: '↻ Tải lại API',
    cat_all: 'Tất cả',
    cat_sales: 'Bán hàng Online',
    cat_seo: 'Lên Top Google',
    cat_design: 'Thiết kế đẹp',
    cat_api: 'Tin công nghệ (API)',
    cta_label: 'Bắt đầu dự án',
    cta_title: 'Nhận phương án & báo giá trong 24h.',
    cta_desc: 'Không gọi làm phiền. Gửi trực tiếp bản phác thảo giao diện, thời gian hoàn thiện và chi phí rõ ràng nhất.',
    f_name: 'Họ và tên *',
    f_phone: 'Số điện thoại / Zalo *',
    f_email: 'Email *',
    f_package: 'Gói quan tâm',
    opt_1: 'Landing Page — 500.000VNĐ',
    opt_2: 'Website Doanh Nghiệp — 3.000.000VNĐ',
    opt_3: 'Website Cao Cấp — 5.000.000VNĐ',
    f_note: 'Yêu cầu ngắn gọn',
    f_submit: 'Gửi yêu cầu tư vấn miễn phí →',
    ph_name: 'Nguyễn Minh Anh',
    ph_phone: '0909 123 456',
    ph_email: 'name@company.vn',
    ph_note: 'Ngành nghề kinh doanh, sản phẩm bạn muốn giới thiệu...',
    foot_tag: 'Sẵn sàng bứt phá doanh thu?',
    foot_title: 'Sở hữu website chuyên nghiệp chỉ từ <span>500.000VNĐ</span>',
    foot_desc: 'Tư vấn tận tâm bằng ngôn ngữ dễ hiểu — Bàn giao nhanh — Bảo hành trọn năm.',
    foot_btn1: 'Đăng ký nhận ưu đãi →',
    foot_btn2: 'Gọi / Zalo: 0909 888 777',
    c1_label: 'Hotline / Zalo hỗ trợ nhanh',
    c1_sub: 'Phản hồi trong 15 phút • Tư vấn 1-1 miễn phí',
    c1_btn: '📋 Sao chép số điện thoại',
    c2_label: 'Email nhận yêu cầu',
    c2_sub: 'Gửi mẫu tham khảo hoặc báo giá doanh nghiệp',
    c2_btn: '📋 Sao chép email',
    c3_label: 'Văn phòng làm việc',
    c3_val: 'TP. HCM • Biên Hòa',
    c3_sub: 'Hỗ trợ gặp trực tiếp & họp Online toàn quốc',
    c4_label: 'Thời gian hỗ trợ',
    c4_val: 'Thứ 2 – Thứ 7',
    c4_sub: '08:30 – 18:00 (Hỗ trợ sự cố 24/7)',
    foot_copy: '— Thiết kế Website Chuyên Nghiệp & Dễ Lên Top Google © 2026',
    fnav_cases: 'Dự án',
    fnav_blog: 'Blog',
    fnav_top: 'Về đầu trang ↑',
    close_reader: 'Đóng ✕',
    api_loading: 'Đang đồng bộ bài viết từ API bên ngoài...',
    api_synced: (n) => `Đã đồng bộ ${n} bài viết mới từ Blog API bên ngoài`,
    api_offline: 'Hiển thị bài viết có sẵn (API đang ngoại tuyến)',
    blog_empty: 'Chưa có bài viết trong mục này. Bấm "↻ Tải lại API" để cập nhật.',
    blog_read: 'Đọc bài viết →',
    blog_read_api: 'Xem chi tiết bài API →',
    blog_open_orig: 'Mở bài viết gốc đầy đủ ↗',
    api_source_label: 'Nguồn bài viết đồng bộ tự động qua Blog API (Dev.to):',
    api_author_default: 'Cộng đồng Web',
    api_fallback_desc: 'Bài viết chia sẻ kinh nghiệm phát triển và tối ưu website mới nhất được đồng bộ tự động qua API.',
    api_min_read: 'phút đọc',
    toast_api_refresh: 'Đang tải bài viết mới từ Blog API...',
    toast_selected: 'Đã chọn: ',
    toast_copied: 'Đã sao chép: ',
    toast_lang: 'Đã chuyển sang Tiếng Việt',
    form_error: 'Vui lòng nhập đầy đủ Họ tên, Số điện thoại và Email hợp lệ.',
    form_success: (name, pkg, phone) => `Đã tiếp nhận yêu cầu của ${name} (${pkg}). Chúng tôi sẽ liên hệ số ${phone} trong 30 phút.`,
  },
  en: {
    page_title: 'VECTRA® — High-Converting, SEO-Ready Web Design Studio',
    nav_intro: 'Overview',
    nav_pain: 'Challenges',
    nav_pricing: 'Pricing',
    nav_cases: 'Web Templates',
    nav_blog: 'Insights Blog',
    nav_contact: 'Contact',
    nav_cta: 'Start a Project',
    mnav_pricing: 'Solutions & Pricing',
    mnav_consult: 'Free Consultation',
    hero_label: 'Professional Web Design Studio',
    hero_title: 'Turn website visitors<br />into <em>paying buyers</em><br />in seconds',
    hero_desc: 'Bespoke aesthetics, top Google rankings, and sub-second page loads — helping your brand earn instant customer trust from the very first click.',
    hero_cta_1: 'Get a 24h Quote',
    hero_cta_2: 'Explore Templates',
    hero_proof: '500+ websites delivered',
    tf_sales_label: 'Monthly sales',
    tf_order_tag: 'New order',
    tf_order_name: 'Business Suite',
    hs_1_l: 'Sites delivered',
    hs_1_s: 'happy clients',
    hs_1_p: 'since 2022',
    hs_2_l: 'Page load speed',
    hs_2_s: 'instant render',
    hs_2_p: 'Google ready',
    hs_3_l: 'Tech warranty',
    hs_3_s: '1-on-1 support',
    hs_3_p: 'full year',
    hs_4_l: 'Starting from',
    hs_4_s: 'starter plan',
    hs_4_p: 'all-in-one',
    sc_url: 'yourbrand.com',
    sc_live: 'ONLINE',
    sc_brand: 'YOUR BRAND',
    sc_tag: 'Bespoke Design • SEO Ready',
    sc_heading: 'Showcase products, earn instant trust.',
    sc_btn: 'Order Now →',
    sc_p1: 'Load speed',
    sc_p2: 'Orders',
    sc_p3: '✓ Easy Editing',
    sc_phone_cta: 'Chat on Zalo',
    sc_pill: 'Sub-0.8s page load',
    ol_label: 'Problems & Solutions',
    ol_title: 'One complete solution<br />for <em>every conversion leak</em>',
    ol_t0: 'Bespoke Design',
    ol_t1: 'Sub-1s Speed',
    ol_t2: 'Mobile Ready',
    ol_t3: 'Google Top #1',
    ai_title: 'Describe what you sell,<br /><em>VECTRA® builds the demo</em>',
    ai_ph: 'e.g. Fashion boutique, dental clinic, coffee shop, real estate...',
    ai_btn: 'Create',
    ai_s1: 'Niche',
    ai_s2: 'Design',
    ai_s3: 'Copy',
    ai_s4: 'Checkout & Zalo',
    ai_time: 'Done in 0.8s',
    sol_label: 'Special Pricing',
    sol_title: 'Refined, effortless, and built to sell.',
    sol_1_n: '01 / DESIGN',
    sol_1_h: 'Tailored to your brand identity',
    sol_1_p: 'Bespoke layout that spotlights your products from second one.',
    sol_2_n: '02 / SPEED',
    sol_2_h: 'Sub-1s load on desktop & mobile',
    sol_2_p: 'Instant rendering on both desktop and everyday 4G phones.',
    sol_3_n: '03 / GOOGLE SEO',
    sol_3_h: 'Search-ready structure & Blog',
    sol_3_p: 'SEO-ready structure & Blog to capture organic traffic daily.',
    sol_4_n: '04 / OWNERSHIP',
    sol_4_h: 'Easy editing & 12-month warranty',
    sol_4_p: 'Swap photos & prices anytime with 12-month tech support.',
    promo_pill: 'THIS MONTH’S OFFER • FREE DOMAIN, HOSTING & 12-MONTH CARE',
    pkg1_tag: '01 • Starter',
    pkg1_badge: 'Save 65%',
    pkg1_name: 'High-Converting Landing Page',
    pkg1_compare: 'Regular: <s>1,500,000đ</s>',
    pkg1_perk: '🎁 Free Zalo & Messenger chat setup + 1 custom product banner',
    pkg1_f1: 'Focused 1-page layout crafted to drive instant inquiries',
    pkg1_f2: 'Pixel-perfect responsive display across all mobile devices',
    pkg1_f3: 'Pre-wired lead capture form & visitor analytics counter',
    pkg1_f4: 'Fast turnaround & launch in just 2–3 business days',
    pkg1_btn: 'Choose 500K Plan',
    pkg2_ribbon: 'MOST POPULAR',
    pkg2_tag: '02 • Professional',
    pkg2_badge: 'Save 2M VND',
    pkg2_name: 'Corporate Business Website',
    pkg2_compare: 'Regular: <s>5,000,000đ</s>',
    pkg2_perk: '🎁 Free 1-year NVMe hosting + SSL security + 5 starter SEO articles',
    pkg2_f1: 'Full About, Products, Services & Google-ready Blog pages',
    pkg2_f2: 'Intuitive admin dashboard to update photos & prices effortlessly',
    pkg2_f3: 'Optimized for Google Core Web Vitals & organic search ranking',
    pkg2_f4: '12 months of technical warranty & priority content updates',
    pkg2_btn: 'Choose 3M Plan (Best Value)',
    pkg3_tag: '03 • Flagship VIP',
    pkg3_badge: 'All-Inclusive',
    pkg3_name: 'Bespoke E-Commerce Suite',
    pkg3_compare: 'Regular: <s>8,000,000đ</s>',
    pkg3_perk: '🎁 Free .COM/.VN domain + 1-year hosting + Interactive 3D showcase',
    pkg3_f1: 'Custom-crafted exclusive UI with multi-language support',
    pkg3_f2: 'Built-in Shopping Cart, QR bank transfer & order management',
    pkg3_f3: 'Interactive 3D product previews & automated Blog API feed',
    pkg3_f4: '1-on-1 VIP priority engineering support for 12 full months',
    pkg3_btn: 'Claim 5M VIP Package',
    case_label: 'Selected Work',
    case_title: 'Interactive Live Website Demos.',
    case_sub: 'Pick a project on the left, then scroll and interact with the real website right inside the browser frame.',
    case_cta: 'Build a site like this →',
    case_preview_tag: 'LIVE DEMO',
    modal_title: 'Quick Consultation Request',
    modal_sub: 'Just share your Name and Phone/Zalo — we will send tailored layout concepts within 15 minutes.',
    modal_submit: 'Send Request Now →',
    modal_zalo_head: 'Or message me directly on Zalo',
    modal_zalo_label: 'My Zalo Number',
    modal_zalo_copy: '📋 Copy Number',
    modal_zalo_chat: '💬 Chat on Zalo',
    modal_err: 'Please enter both your Name and Phone / Zalo number.',
    modal_ok: (name, pkg, phone) => `Received ${pkg} inquiry from ${name}. We will reach out on ${phone} shortly!`,
    blog_label: 'Knowledge Hub • SEO Ready',
    blog_title: 'Practical insights on web design & growth.',
    blog_refresh: '↻ Refresh API',
    cat_all: 'All',
    cat_sales: 'Online Sales',
    cat_seo: 'Google SEO',
    cat_design: 'UI Design',
    cat_api: 'Tech Feed (API)',
    cta_label: 'Start a Project',
    cta_title: 'Receive a tailored plan & quote within 24h.',
    cta_desc: 'Zero spam calls. We send a clear layout concept, exact timeline, and transparent pricing straight to you.',
    f_name: 'Full Name *',
    f_phone: 'Phone / Zalo *',
    f_email: 'Email Address *',
    f_package: 'Interested Package',
    opt_1: 'Landing Page — 500,000 VND',
    opt_2: 'Corporate Website — 3,000,000 VND',
    opt_3: 'Bespoke E-Commerce — 5,000,000 VND',
    f_note: 'Project Brief',
    f_submit: 'Request Free Consultation →',
    ph_name: 'Alex Nguyen',
    ph_phone: '+84 909 123 456',
    ph_email: 'name@company.com',
    ph_note: 'Your industry, products, or goals for the new website...',
    foot_tag: 'Ready to scale your online revenue?',
    foot_title: 'Launch your professional website from <span>500,000 VND</span>',
    foot_desc: 'Clear jargon-free consulting — Fast delivery — Full-year warranty.',
    foot_btn1: 'Claim Your Offer →',
    foot_btn2: 'Call / Zalo: 0909 888 777',
    c1_label: 'Hotline / Zalo Quick Support',
    c1_sub: 'Replies within 15 mins • Free 1-on-1 consultation',
    c1_btn: '📋 Copy phone number',
    c2_label: 'Project Inquiries Email',
    c2_sub: 'Send inspiration links or request a corporate proposal',
    c2_btn: '📋 Copy email address',
    c3_label: 'Studio Locations',
    c3_val: 'Ho Chi Minh City • Bien Hoa',
    c3_sub: 'In-person meetings & nationwide remote calls',
    c4_label: 'Support Hours',
    c4_val: 'Mon – Sat',
    c4_sub: '08:30 – 18:00 (24/7 uptime monitoring)',
    foot_copy: '— High-Converting, SEO-Ready Web Design Studio © 2026',
    fnav_cases: 'Work',
    fnav_blog: 'Blog',
    fnav_top: 'Back to top ↑',
    close_reader: 'Close ✕',
    api_loading: 'Syncing latest articles from external API...',
    api_synced: (n) => `Synced ${n} fresh articles from external Blog API`,
    api_offline: 'Showing curated local articles (API offline)',
    blog_empty: 'No articles in this category yet. Click "↻ Refresh API" to update.',
    blog_read: 'Read article →',
    blog_read_api: 'View API article →',
    blog_open_orig: 'Open full original article ↗',
    api_source_label: 'Auto-synced via Dev.to Blog API:',
    api_author_default: 'Web Community',
    api_fallback_desc: 'Latest web engineering and performance optimization insights synced automatically via API.',
    api_min_read: 'min read',
    toast_api_refresh: 'Fetching latest posts from Blog API...',
    toast_selected: 'Selected: ',
    toast_copied: 'Copied: ',
    toast_lang: 'Switched to English',
    form_error: 'Please enter your Full Name, Phone number, and a valid Email.',
    form_success: (name, pkg, phone) => `Request received for ${name} (${pkg}). We will contact ${phone} within 30 minutes.`,
  },
};

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || i18n.vi[key] || '';
}

// 1. Subtle Numeric Matrix Background Canvas (Tuned for Swiss Light Mode)
(function initNumericMatrix() {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const digits = '0123456789';
  const fontSize = 14;
  let columns = 0;
  let drops = [];

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
    if (now - lastTime < 55) return;
    lastTime = now;

    ctx.fillStyle = 'rgba(245, 247, 250, 0.22)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = digits[Math.floor(Math.random() * digits.length)];
      const isAccent = Math.random() > 0.985;
      ctx.fillStyle = isAccent ? 'rgba(234, 88, 12, 0.28)' : 'rgba(30, 41, 59, 0.08)';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.65;
    }
  }
  requestAnimationFrame(draw);
})();

// 2. Scroll Progress, Transparent Header on Scroll & Mobile Menu
const progressBar = document.getElementById('scroll-progress');
const siteHeader = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.nav-desktop .nav-link, .mobile-menu .nav-link');
const sections = document.querySelectorAll('main section[id], footer[id]');

function updateOnScroll() {
  const scrollY = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';

  if (siteHeader) {
    siteHeader.classList.toggle('scrolled', scrollY > 30);
  }

  let currentId = '';
  const offset = 120;
  sections.forEach((sec) => {
    if (scrollY >= sec.offsetTop - offset) {
      currentId = sec.getAttribute('id') || '';
    }
  });
  if (scrollY + window.innerHeight >= document.documentElement.scrollHeight - 20) {
    currentId = 'lien-he';
  }
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}

window.addEventListener('scroll', updateOnScroll, { passive: true });
updateOnScroll();

const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileToggle && mobileMenu) {
  function setMobileMenu(isOpen) {
    mobileMenu.classList.toggle('open', isOpen);
    if (siteHeader) siteHeader.classList.toggle('menu-open', isOpen);
    mobileToggle.textContent = isOpen ? '✕' : '☰';
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.contains('open');
    setMobileMenu(!isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false));
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      setMobileMenu(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
      setMobileMenu(false);
    }
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
      glare.style.background = `radial-gradient(circle at ${(x * 100).toFixed(0)}% ${(y * 100).toFixed(0)}%, rgba(234, 88, 12, 0.12), transparent 60%)`;
    }
  });

  stage.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
  });
})();

// 4. Hyper-Realistic 3D Product Case Study Showcase (Bilingual)
const casesData = {
  vi: [
    {
      id: 'maison-aurelia',
      meta: 'THỜI TRANG CAO CẤP • BÁN HÀNG',
      title: 'MAISON AURELIA',
      kpi: '+240% Đơn hàng',
      domain: 'maison-aurelia.vn',
      demoUrl: 'demos/maison-aurelia.html',
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
      domain: 'finpulse.vn',
      demoUrl: 'demos/finpulse.html',
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
      domain: 'velavillas.vn',
      demoUrl: 'demos/velavillas.html',
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
  ],
  en: [
    {
      id: 'maison-aurelia',
      meta: 'LUXURY FASHION • E-COMMERCE',
      title: 'MAISON AURELIA',
      kpi: '+240% Orders',
      domain: 'maison-aurelia.vn',
      demoUrl: 'demos/maison-aurelia.html',
      badgeTitle: '3.4x Increase in Monthly Orders',
      badgeSub: 'Within 60 days after relaunch',
      image: 'assets/case-study-1.jpg',
      metrics: [
        { val: '0.7s', label: 'Page Load Time' },
        { val: '+240%', label: 'Order Growth' },
        { val: '-42%', label: 'Bounce Rate Drop' },
      ],
      summary: 'Redesigned online luxury boutique featuring razor-sharp product imagery and a frictionless 2-tap mobile checkout flow.',
    },
    {
      id: 'finpulse-ai',
      meta: 'B2B SAAS • FINTECH',
      title: 'FINPULSE ANALYTICS',
      kpi: '+310% Signups',
      domain: 'finpulse.vn',
      demoUrl: 'demos/finpulse.html',
      badgeTitle: '420+ Enterprise Signups / Month',
      badgeSub: 'Ranked Top 3 on Google for 18 keywords',
      image: 'assets/case-study-2.jpg',
      metrics: [
        { val: '0.6s', label: 'Instant Render' },
        { val: '99/100', label: 'Google Core Vitals' },
        { val: '+310%', label: 'Demo Requests' },
      ],
      summary: 'Built a crisp B2B fintech landing experience that turns complex analytics into clear ROI and converts visitors into trial leads.',
    },
    {
      id: 'vela-villas',
      meta: 'REAL ESTATE • LUXURY RESORT',
      title: 'VELA VILLAS RESORT',
      kpi: '-38% Ad Spend CPA',
      domain: 'velavillas.vn',
      demoUrl: 'demos/velavillas.html',
      badgeTitle: '+195% Private Viewing Bookings',
      badgeSub: 'Optimized for mobile 4G browsing',
      image: 'assets/case-study-3.jpg',
      metrics: [
        { val: '+195%', label: 'Viewing Tours' },
        { val: '-38%', label: 'Cost Per Lead' },
        { val: '28.4%', label: 'Form Conversion' },
      ],
      summary: 'An editorial digital showcase for luxury coastal villas with fast-loading galleries and instant Zalo viewing scheduling.',
    },
  ],
};

const caseListEl = document.getElementById('case-list');
const caseVisualEl = document.getElementById('case-visual');
const caseMetricsEl = document.getElementById('case-metrics-strip');
const caseSummaryEl = document.getElementById('case-summary');
let activeCaseId = casesData.vi[0].id;
let previewDeviceMode = 'desktop';

function renderCases() {
  const cases = casesData[currentLang] || casesData.vi;
  if (!caseListEl || !caseVisualEl) return;

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
  const demoSrc = current.demoUrl || 'demos/maison-aurelia.html';
  const openLabel = currentLang === 'en' ? 'Open full ↗' : 'Mở trang thật ↗';

  caseVisualEl.innerHTML = `
    <div class="case-device-frame">
      <div class="case-browser-bar">
        <div class="browser-dots"><i></i><i></i><i></i></div>
        <span class="case-domain-pill">🔒 ${current.domain}</span>
        <div class="case-toolbar">
          <button type="button" class="case-mode-btn ${previewDeviceMode === 'desktop' ? 'active' : ''}" data-mode="desktop">🖥️ Desktop</button>
          <button type="button" class="case-mode-btn ${previewDeviceMode === 'mobile' ? 'active' : ''}" data-mode="mobile">📱 Mobile</button>
          <a href="${demoSrc}" target="_blank" rel="noopener" class="case-open-link">${openLabel}</a>
        </div>
      </div>
      <div id="case-screen-wrap" class="case-screen-wrap ${previewDeviceMode === 'mobile' ? 'is-mobile' : ''}">
        <iframe src="${demoSrc}" title="${current.title}" loading="lazy"></iframe>
      </div>
    </div>
  `;

  caseVisualEl.querySelectorAll('.case-mode-btn').forEach((mBtn) => {
    mBtn.addEventListener('click', () => {
      previewDeviceMode = mBtn.dataset.mode;
      const wrap = document.getElementById('case-screen-wrap');
      if (wrap) wrap.classList.toggle('is-mobile', previewDeviceMode === 'mobile');
      caseVisualEl.querySelectorAll('.case-mode-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.mode === previewDeviceMode);
      });
    });
  });

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

// 5. Dedicated SEO Blog System (Bilingual Local Guides + Live External Blog API)
const catKeyMap = {
  'all': 'all',
  'Bán hàng Online': 'sales',
  'Lên Top Google': 'seo',
  'Thiết kế đẹp': 'design',
  'Tin công nghệ (API)': 'api',
};

const localBlogData = {
  vi: [
    {
      id: 'mo-trang-nhanh-giu-khach',
      catKey: 'sales',
      category: 'Bán hàng Online',
      date: '2026-11-22',
      readTime: '3 phút đọc',
      image: 'assets/case-study-1.jpg',
      isExternal: false,
      title: 'Mở trang 0.7s — Giữ 90% khách ở lại chốt đơn',
      excerpt: 'Tối ưu ảnh siêu nhẹ & nút đặt hàng 2 chạm trên điện thoại.',
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
      catKey: 'seo',
      category: 'Lên Top Google',
      date: '2026-11-18',
      readTime: '4 phút đọc',
      image: 'assets/case-study-2.jpg',
      isExternal: false,
      title: 'Tự lên Top Google — Có khách đều không cần chạy Ads',
      excerpt: 'Cấu trúc chuẩn SEO & Blog kéo khách tìm kiếm tự nhiên mỗi ngày.',
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
      catKey: 'design',
      category: 'Thiết kế đẹp',
      date: '2026-11-12',
      readTime: '3 phút đọc',
      image: 'assets/case-study-3.jpg',
      isExternal: false,
      title: 'Giao diện tối giản — Nhìn phát muốn đặt hàng ngay',
      excerpt: 'Ít chữ, ảnh sản phẩm sắc nét & form liên hệ siêu gọn.',
      tags: ['#ThietKeDep', '#ChotDonNhanh', '#TraiNghiemKhachHang'],
      body: `
        <p>Một sai lầm phổ biến là nhồi nhét quá nhiều chữ và màu sắc sặc sỡ lên trang chủ. Điều này khiến người xem bị ngợp và không biết nên bấm vào đâu.</p>
        <h2>1. Chừa khoảng thoáng hợp lý</h2>
        <p>Khoảng trống xung quanh hình sản phẩm giúp mắt người xem dễ chịu hơn và làm nổi bật hẳn giá bán cũng như ưu đãi đi kèm.</p>
        <h2>2. Biểu mẫu liên hệ thật ngắn gọn</h2>
        <p>Chỉ cần hỏi Tên và Số điện thoại / Zalo là đủ để tư vấn nhanh, giúp tỷ lệ khách để lại thông tin tăng gấp đôi.</p>
      `,
    },
  ],
  en: [
    {
      id: 'mo-trang-nhanh-giu-khach',
      catKey: 'sales',
      category: 'Online Sales',
      date: '2026-11-22',
      readTime: '3 min read',
      image: 'assets/case-study-1.jpg',
      isExternal: false,
      title: '0.7s Page Load — Keep 90% of Buyers Until Checkout',
      excerpt: 'Lightweight product visuals & 2-tap mobile ordering.',
      tags: ['#OnlineSales', '#WebSpeed', '#HigherOrders'],
      body: `
        <p>Mobile shoppers have little patience. If tapping a product link results in a blank screen for more than 3 seconds, over half of your potential buyers will leave immediately.</p>
        <h2>1. Crisp photography with lightweight file sizes</h2>
        <p>Instead of uploading raw 5–10MB smartphone photos, a properly engineered site compresses assets under 150KB while keeping them razor-sharp—loading instantaneously even on slow 4G.</p>
        <h2>2. Put your core offer above the fold</h2>
        <p>Within the first screen, visitors must immediately see what you sell, transparent pricing, and a clear call-to-action button without endless scrolling.</p>
      `,
    },
    {
      id: 'len-top-google-tu-nhien',
      catKey: 'seo',
      category: 'Google SEO',
      date: '2026-11-18',
      readTime: '4 min read',
      image: 'assets/case-study-2.jpg',
      isExternal: false,
      title: 'Rank #1 on Google — Daily Organic Leads Without Ads',
      excerpt: 'Built-in SEO schema & Blog that captures search traffic.',
      tags: ['#GoogleSEO', '#OrganicLeads', '#ContentMarketing'],
      body: `
        <p>Many business owners assume online sales require non-stop ad budgets. In reality, a well-structured website paired with a helpful Knowledge Blog attracts high-intent leads for free every single day.</p>
        <h2>1. Match titles to real customer searches</h2>
        <p>Write headings in plain, natural language matching what buyers actually type—like "How much does an e-commerce website cost?" instead of vague slogans.</p>
        <h2>2. Publish helpful guides consistently</h2>
        <p>Google rewards active websites. Publishing just 2–4 concise buying guides per month steadily pushes your domain up the search results.</p>
      `,
    },
    {
      id: 'trinh-bay-web-de-chot-don',
      catKey: 'design',
      category: 'UI Design',
      date: '2026-11-12',
      readTime: '3 min read',
      image: 'assets/case-study-3.jpg',
      isExternal: false,
      title: 'Minimalist UI — Instant Trust & 2x Higher Orders',
      excerpt: 'Less text, crisp visuals & frictionless lead capture.',
      tags: ['#MinimalistUI', '#ConversionDesign', '#UserExperience'],
      body: `
        <p>A common mistake is cramming too much text and loud colors onto the homepage. Visual overload overwhelms visitors and makes them hesitate.</p>
        <h2>1. Let your products breathe with whitespace</h2>
        <p>Generous spacing around product visuals reduces eye strain and naturally guides attention straight to your pricing and promotional perks.</p>
        <h2>2. Keep inquiry forms frictionless</h2>
        <p>Asking only for Name, Phone, and Email makes submitting a request effortless—often doubling form completion rates.</p>
      `,
    },
  ],
};

let externalRawItems = [];
let apiStatusState = 'loading'; // 'loading' | 'live' | 'offline'
let allBlogPosts = [...localBlogData[currentLang]];
let activeBlogCat = 'all';

const blogGridEl = document.getElementById('blog-grid');
const readerOverlay = document.getElementById('blog-reader');
const readerBody = document.getElementById('article-content');
const readerMeta = document.getElementById('article-meta');
const apiStatusEl = document.getElementById('blog-api-status');
const apiDotEl = document.getElementById('blog-api-dot');

function rebuildBlogPosts() {
  const locals = localBlogData[currentLang] || localBlogData.vi;
  const fallbackImages = ['assets/case-study-1.jpg', 'assets/case-study-2.jpg', 'assets/case-study-3.jpg'];
  const apiMapped = externalRawItems.map((item, idx) => ({
    id: 'api-' + item.id,
    catKey: 'api',
    category: t('cat_api'),
    date: (item.published_at || '').slice(0, 10) || '2026-11-24',
    readTime: `${item.reading_time_minutes || 3} ${t('api_min_read')}`,
    image: item.cover_image || item.social_image || fallbackImages[idx % fallbackImages.length],
    isExternal: true,
    url: item.url,
    title: item.title,
    excerpt: item.description || t('api_fallback_desc'),
    tags: (item.tag_list || ['webdev']).slice(0, 3).map((tag) => '#' + tag),
    body: `
      <p><strong>${t('api_source_label')}</strong> ${item.user && item.user.name ? item.user.name : t('api_author_default')}.</p>
      <p>${item.description || t('api_fallback_desc')}</p>
      <p style="margin-top:20px;"><a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">${t('blog_open_orig')}</a></p>
    `,
  }));
  allBlogPosts = [...locals, ...apiMapped];
  updateApiStatusText();
}

function updateApiStatusText() {
  if (!apiStatusEl) return;
  if (apiStatusState === 'loading') {
    apiStatusEl.textContent = t('api_loading');
  } else if (apiStatusState === 'live') {
    apiStatusEl.textContent = t('api_synced')(externalRawItems.length);
  } else {
    apiStatusEl.textContent = t('api_offline');
  }
}

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

async function fetchExternalBlogAPI() {
  apiStatusState = 'loading';
  updateApiStatusText();
  if (apiDotEl) apiDotEl.classList.remove('live');
  try {
    const res = await fetch('https://dev.to/api/articles?per_page=3&tag=webdev');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    externalRawItems = await res.json();
    apiStatusState = 'live';
    if (apiDotEl) apiDotEl.classList.add('live');
  } catch (err) {
    externalRawItems = [];
    apiStatusState = 'offline';
  }
  rebuildBlogPosts();
  updateBlogSchema(allBlogPosts);
  renderBlog();
}

function renderBlog() {
  if (!blogGridEl) return;
  const list = activeBlogCat === 'all' ? allBlogPosts : allBlogPosts.filter((p) => p.catKey === activeBlogCat);
  if (list.length === 0) {
    blogGridEl.innerHTML = `<div class="blog-card"><p class="blog-excerpt">${t('blog_empty')}</p></div>`;
    return;
  }
  blogGridEl.innerHTML = list.map((p) => `
    <article class="blog-card" data-post="${p.id}">
      <div class="blog-thumb">
        <img src="${p.image || 'assets/case-study-1.jpg'}" alt="${p.title}" loading="lazy" />
        <span class="blog-thumb-badge">${p.isExternal ? 'API LIVE' : p.category}</span>
      </div>
      <div class="blog-card-body">
        <div>
          <div class="blog-meta">
            <span class="blog-cat">${p.category}</span>
            <span>${p.readTime}</span>
          </div>
          <h3 class="blog-title" style="margin-top:8px;">${p.title}</h3>
          <p class="blog-excerpt" style="margin-top:6px;">${p.excerpt}</p>
        </div>
        <div class="blog-read-link">${p.isExternal ? t('blog_read_api') : t('blog_read')}</div>
      </div>
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
      ${post.tags.map((tag) => `<span class="seo-tag">${tag}</span>`).join('')}
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
    activeBlogCat = catKeyMap[btn.dataset.cat] || 'all';
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderBlog();
  });
});

const refreshApiBtn = document.getElementById('refresh-blog-api');
if (refreshApiBtn) {
  refreshApiBtn.addEventListener('click', () => {
    fetchExternalBlogAPI();
    showToast(t('toast_api_refresh'));
  });
}

const closeReaderBtn = document.getElementById('close-reader');
if (closeReaderBtn) closeReaderBtn.addEventListener('click', closeArticle);
if (readerOverlay) {
  readerOverlay.addEventListener('click', (e) => {
    if (e.target === readerOverlay) closeArticle();
  });
}

// 6. Language Switcher Controller
function applyLanguage(lang, showNotice) {
  currentLang = lang === 'en' ? 'en' : 'vi';
  localStorage.setItem('vectra_lang', currentLang);
  document.documentElement.lang = currentLang;
  document.title = t('page_title');

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key] !== undefined) {
      el.textContent = i18n[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[currentLang][key] !== undefined) {
      el.innerHTML = i18n[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang][key] !== undefined) {
      el.setAttribute('placeholder', i18n[currentLang][key]);
    }
  });

  renderCases();
  if (typeof renderOneLink === 'function') renderOneLink();
  if (typeof renderAiBuilder === 'function') renderAiBuilder();
  rebuildBlogPosts();
  renderBlog();

  if (showNotice) {
    showToast(t('toast_lang'));
  }
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang !== currentLang) {
      applyLanguage(btn.dataset.lang, true);
    }
  });
});

// Initialization moved to bottom after all sections & data are defined

// 7. Pricing Quick Modal (Form + Zalo), Main Form Validation & Copy Helper
const pkgSelect = document.getElementById('package');
const pkgModal = document.getElementById('pkg-modal');
const pkgModalBadge = document.getElementById('pkg-modal-badge');
const pkgModalClose = document.getElementById('pkg-modal-close');
const pkgQuickForm = document.getElementById('pkg-quick-form');
const pkgFormMsg = document.getElementById('pkg-form-msg');
let activeModalPkg = '';

function openPkgModal(pkgName) {
  activeModalPkg = pkgName;
  if (pkgSelect) pkgSelect.value = pkgName;
  if (pkgModalBadge) pkgModalBadge.textContent = pkgName;
  if (pkgFormMsg) {
    pkgFormMsg.className = 'form-msg';
    pkgFormMsg.textContent = '';
  }
  if (pkgModal) {
    pkgModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const nameInput = document.getElementById('pkg-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 60);
  }
}

function closePkgModal() {
  if (pkgModal) pkgModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.select-pkg').forEach((btn) => {
  btn.addEventListener('click', () => {
    openPkgModal(btn.dataset.pkg);
  });
});

if (pkgModalClose) pkgModalClose.addEventListener('click', closePkgModal);
if (pkgModal) {
  pkgModal.addEventListener('click', (e) => {
    if (e.target === pkgModal) closePkgModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && pkgModal && pkgModal.classList.contains('open')) {
    closePkgModal();
  }
});

if (pkgQuickForm) {
  pkgQuickForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('pkg-name').value.trim();
    const phone = document.getElementById('pkg-phone').value.trim();

    if (!name || !phone) {
      pkgFormMsg.className = 'form-msg error';
      pkgFormMsg.textContent = t('modal_err');
      return;
    }

    pkgFormMsg.className = 'form-msg success';
    pkgFormMsg.textContent = t('modal_ok')(name, activeModalPkg, phone);
    pkgQuickForm.reset();
  });
}

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
      formMsg.textContent = t('form_error');
      return;
    }

    formMsg.className = 'form-msg success';
    formMsg.textContent = t('form_success')(name, pkgSelect.value, phone);
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
      navigator.clipboard.writeText(val).then(() => showToast(t('toast_copied') + val)).catch(() => fallbackCopy(val));
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
    showToast(t('toast_copied') + val);
  } catch (err) {}
  document.body.removeChild(ta);
}

// 8. Scroll Reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// 9. One-Link Style Pain & Solution Tabs + AI Builder Interactive Fan Cards
const oneLinkData = {
  vi: [
    {
      tag: '01 / GIAO DIỆN',
      image: 'assets/case-study-1.jpg',
      cardTitle: 'Giao diện độc quyền thương hiệu',
      m1Val: '5s', m1Lab: 'Tạo niềm tin',
      m2Val: '+240%', m2Lab: 'Đơn hàng',
      cta: 'Xem mẫu thực tế →',
      badBadge: '5s mất khách',
      goodBadge: '✓ Ấn tượng ngay',
      heading: 'Nổi bật khác biệt thay vì <em>giống hệt đối thủ</em>',
      bad: 'Dùng mẫu đại trà khiến khách lướt qua trong 5 giây.',
      good: 'Thiết kế riêng theo nhận diện, làm nổi bật sản phẩm chủ lực.',
      pills: ['✓ Bố cục độc quyền', '✓ Ảnh sản phẩm sắc nét', '✓ Nút chốt đơn rõ ràng'],
    },
    {
      tag: '02 / TỐC ĐỘ',
      image: 'assets/case-study-2.jpg',
      cardTitle: 'Tải trang tức thì dưới 1 giây',
      m1Val: '0.7s', m1Lab: 'Mở trang',
      m2Val: '99/100', m2Lab: 'Điểm Google',
      cta: 'Tăng tốc ngay →',
      badBadge: '4.8s rớt khách',
      goodBadge: '⚡ Nhanh 0.7s',
      heading: 'Mở trang tức thì, <em>không lãng phí tiền Ads</em>',
      bad: 'Web chậm làm rớt 20% khách bấm từ quảng cáo.',
      good: 'Tối ưu ảnh & mã nguồn giúp mở mượt ngay cả trên mạng 4G.',
      pills: ['✓ Tải trang 0.7 giây', '✓ Không giật lag', '✓ Giữ chân khách Ads'],
    },
    {
      tag: '03 / DI ĐỘNG',
      image: 'assets/case-study-3.jpg',
      cardTitle: 'Trải nghiệm mượt trên điện thoại',
      m1Val: '75%', m1Lab: 'Khách Mobile',
      m2Val: '2 chạm', m2Lab: 'Đặt hàng',
      cta: 'Xem bản Mobile →',
      badBadge: '75% thoát trang',
      goodBadge: '📱 Chuẩn từng nút',
      heading: 'Chữ rõ, nút lớn <em>chạm là đặt hàng</em>',
      bad: 'Chữ nhỏ, vỡ khung trên điện thoại khiến khách ngại bấm.',
      good: 'Thiết kế ưu tiên màn hình dọc, nút Zalo & đặt hàng ngay tầm tay.',
      pills: ['✓ Vừa khít mọi màn hình', '✓ Nút Zalo 1 chạm', '✓ Giỏ hàng siêu gọn'],
    },
    {
      tag: '04 / GOOGLE SEO',
      image: 'assets/case-study-2.jpg',
      cardTitle: 'Lên Top Google & đo hiệu quả',
      m1Val: 'Top #1', m1Lab: 'Tìm kiếm',
      m2Val: '12T', m2Lab: 'Bảo hành',
      cta: 'Nhận lộ trình SEO →',
      badBadge: 'Top #99+ mất hút',
      goodBadge: '▲ Hút khách tự nhiên',
      heading: 'Khách tự tìm thấy bạn <em>trên Google mỗi ngày</em>',
      bad: 'Tìm tên dịch vụ không thấy đâu, không biết khách đến từ đâu.',
      good: 'Sẵn cấu trúc chuẩn Google, Blog kiến thức & thống kê lượt khách.',
      pills: ['✓ Chuẩn cấu trúc Google', '✓ Tích hợp Blog SEO', '✓ Quản trị dễ dàng'],
    },
  ],
  en: [
    {
      tag: '01 / DESIGN',
      image: 'assets/case-study-1.jpg',
      cardTitle: 'Bespoke Brand Identity UI',
      m1Val: '5s', m1Lab: 'Instant trust',
      m2Val: '+240%', m2Lab: 'Orders',
      cta: 'Explore Demos →',
      badBadge: '5s trust drop',
      goodBadge: '✓ Stand out',
      heading: 'Stand out instantly instead of <em>generic templates</em>',
      bad: 'Cookie-cutter layouts dilute your brand within 5 seconds.',
      good: 'Tailored visual hierarchy that spotlights your core offer.',
      pills: ['✓ Exclusive layout', '✓ Crisp product showcase', '✓ Clear CTA flow'],
    },
    {
      tag: '02 / SPEED',
      image: 'assets/case-study-2.jpg',
      cardTitle: 'Sub-1s Instant Page Load',
      m1Val: '0.7s', m1Lab: 'Load time',
      m2Val: '99/100', m2Lab: 'Core Vitals',
      cta: 'Boost Speed →',
      badBadge: '4.8s bounce',
      goodBadge: '⚡ 0.7s load',
      heading: 'Instant rendering so you <em>never waste ad spend</em>',
      bad: 'Slow pages lose 20% of paid ad clicks before content shows.',
      good: 'Engineered for sub-second speed even on cellular 4G.',
      pills: ['✓ 0.7s page load', '✓ Zero layout shift', '✓ Higher ad ROI'],
    },
    {
      tag: '03 / MOBILE',
      image: 'assets/case-study-3.jpg',
      cardTitle: 'Thumb-Friendly Mobile UX',
      m1Val: '75%', m1Lab: 'Mobile buyers',
      m2Val: '2-tap', m2Lab: 'Checkout',
      cta: 'View Mobile →',
      badBadge: '75% bounce rate',
      goodBadge: '📱 Pixel-perfect',
      heading: 'Readable text & <em>effortless 2-tap checkout</em>',
      bad: 'Tiny text and broken mobile grids frustrate smartphone users.',
      good: 'Mobile-first layout with thumb-ready Zalo & order buttons.',
      pills: ['✓ Fits every phone', '✓ 1-tap Zalo chat', '✓ Frictionless form'],
    },
    {
      tag: '04 / GOOGLE SEO',
      image: 'assets/case-study-2.jpg',
      cardTitle: 'Rank Top #1 on Google',
      m1Val: 'Top #1', m1Lab: 'Search rank',
      m2Val: '12M', m2Lab: 'Warranty',
      cta: 'Get SEO Plan →',
      badBadge: 'Rank #99+',
      goodBadge: '▲ Organic traffic',
      heading: 'Get discovered <em>on Google every single day</em>',
      bad: 'Invisible on search results with zero visitor attribution.',
      good: 'Built-in Schema, SEO Blog & clear lead tracking.',
      pills: ['✓ Google-ready structure', '✓ Integrated SEO Blog', '✓ Easy self-editing'],
    },
  ],
};

let activeOlIdx = 0;
function renderOneLink() {
  const list = oneLinkData[currentLang] || oneLinkData.vi;
  const item = list[activeOlIdx] || list[0];
  const visualEl = document.getElementById('ol-visual');
  const copyEl = document.getElementById('ol-copy');
  if (!visualEl || !copyEl) return;

  visualEl.innerHTML = `
    <div class="ol-phone">
      <div class="ol-phone-img">
        <img src="${item.image}" alt="${item.cardTitle}" />
        <span class="ol-phone-tag">${item.tag}</span>
      </div>
      <div class="ol-phone-title">${item.cardTitle}</div>
      <div class="ol-phone-metrics">
        <div><strong>${item.m1Val}</strong><span>${item.m1Lab}</span></div>
        <div><strong>${item.m2Val}</strong><span>${item.m2Lab}</span></div>
      </div>
      <a href="#giai-phap" class="ol-phone-cta">${item.cta}</a>
    </div>
    <div class="ol-float-badge">
      <strong>✕ ${item.badBadge}</strong>
      <span>${item.goodBadge}</span>
    </div>
  `;

  const badPrefix = currentLang === 'en' ? 'Problem:' : 'Thực trạng:';
  const goodPrefix = currentLang === 'en' ? 'Solution:' : 'Giải pháp:';
  const ctaLabel = currentLang === 'en' ? 'Choose a plan' : 'Xem bảng giá phù hợp';

  copyEl.innerHTML = `
    <h3 class="ol-copy-heading">${item.heading}</h3>
    <div class="ol-compare-box">
      <div class="ol-compare-row is-bad"><b>✕ ${badPrefix}</b> <span>${item.bad}</span></div>
      <div class="ol-compare-row is-good"><b>✓ ${goodPrefix}</b> <span>${item.good}</span></div>
    </div>
    <div class="ol-pills">${item.pills.map((p) => `<span>${p}</span>`).join('')}</div>
    <a href="#giai-phap" class="btn-tap">
      <span>${ctaLabel}</span>
      <span class="btn-tap-arrow" aria-hidden="true">↗</span>
    </a>
  `;

  document.querySelectorAll('#ol-tabs .ol-tab').forEach((tBtn) => {
    tBtn.classList.toggle('active', parseInt(tBtn.dataset.ol, 10) === activeOlIdx);
  });
}

document.querySelectorAll('#ol-tabs .ol-tab').forEach((btn) => {
  btn.addEventListener('click', () => {
    activeOlIdx = parseInt(btn.dataset.ol, 10) || 0;
    renderOneLink();
  });
});

// AI Builder: Auto-typing + 4-step build animation + Blur-to-Sharp 3-Card Showcase (VI/EN)
const aiAutoPrompts = {
  vi: [
    'Tôi mở phòng Gym & PT 1-1, muốn website đăng ký tập thử và bảng giá gói tập',
    'Tôi bán đồ ăn healthy eat-clean, muốn menu đặt món giao nhanh trong 15 phút',
    'Tôi làm dịch vụ giao hàng nội thành 2H, cần trang web đặt đơn và tra cứu cước',
  ],
  en: [
    'I run a Gym & PT studio and want a booking page for 30-day training plans',
    'I sell healthy meal bowls and want a fast 15-minute online menu',
    'I run an express delivery service and need a sleek shipping rate website',
  ],
};

let aiUserTyping = false;
let aiAutoTimer = null;
let aiPromptIdx = 0;

function extractAiTopic(raw) {
  if (!raw) return '';
  const cleaned = raw.trim();
  if (cleaned.length <= 28) return cleaned;
  const parts = cleaned.split(/,|với|và|cần|muốn|and|with|for/i);
  return (parts[0] || cleaned).replace(/^(Tôi bán|Tôi mở|Tôi làm|Tôi kinh doanh|I run|I own|I sell)\s+/i, '').trim().slice(0, 32);
}

let aiRenderedLang = null;

function renderAiBuilder(customText) {
  const stage = document.getElementById('ai-fan-stage');
  const input = document.getElementById('ai-prompt-input');
  if (!stage) return;

  const rawVal = customText !== undefined ? customText : (input ? input.value.trim() : '');
  const topic = extractAiTopic(rawVal);
  const isEn = currentLang === 'en';

  const pubText = isEn ? 'Page published' : 'Đã xuất bản';
  const gymTitle = topic && !/healthy|giao hàng|delivery|eat-clean/i.test(rawVal)
    ? topic
    : (isEn ? '30-day gym & PT plan' : 'Tập Gym & PT 1-1');
  const gymSub = isEn ? 'Video & PT • 20 min a day' : 'Lịch tập & PT • 20 phút mỗi ngày';
  const gymCta = isEn ? 'Start training • $49' : 'Đăng ký tập thử • 499K';
  const floatCta = isEn ? 'Build my store with AI ↗' : 'Thiết kế web với VECTRA® ↗';

  // Only build DOM once per language so images never flicker/reload during transitions
  if (aiRenderedLang !== currentLang || !stage.querySelector('.ai-fan-card.is-center')) {
    aiRenderedLang = currentLang;
    stage.innerHTML = `
      <!-- Left Card: Healthy Food -->
      <a href="#giai-phap" class="ai-fan-card is-left">
        <div class="ai-hl-head">
          <span class="ai-hl-avatar">🥗</span>
          <div class="ai-hl-brand">Green Kitchen<span>${isEn ? 'fresh healthy food' : 'đồ ăn healthy mỗi ngày'}</span></div>
        </div>
        <div class="ai-hl-title">GREEN<span>BOWL</span></div>
        <div class="ai-hl-sub">${isEn ? '40 healthy bowls in 15 mins' : '40 món eat-clean giao nhanh 15 phút'}</div>
        <div class="ai-hl-photo">
          <img src="assets/demo-healthy.jpg" alt="Healthy Food Website" />
          <span class="ai-hl-pill-time">${isEn ? '15 MIN ⏱' : '15 PHÚT ⏱'}</span>
        </div>
        <div class="ai-hl-chips">
          <div class="ai-hl-chip c-lime">40<span>${isEn ? 'recipes' : 'món ăn'}</span></div>
          <div class="ai-hl-chip c-pink">4<span>${isEn ? 'weekly plans' : 'gói tuần'}</span></div>
        </div>
      </a>

      <!-- Center Card: Gym Studio -->
      <a href="#giai-phap" class="ai-fan-card is-center">
        <span class="ai-pub-badge"><i>✓</i> ${pubText}</span>
        <div class="ai-gym-hero">
          <div class="ai-gym-topbar">
            <span class="ai-gym-name">APEX GYM</span>
            <span class="ai-gym-menu">☰</span>
          </div>
          <img src="assets/demo-gym.jpg" alt="Gym Studio Website" />
        </div>
        <div class="ai-gym-body">
          <div class="ai-gym-title" id="ai-gym-title">${gymTitle}</div>
          <div class="ai-gym-sub">${gymSub}</div>

          <span class="ai-gym-cta ai-stagger s1">${gymCta}</span>

          <div class="ai-gym-stats ai-stagger s2">
            <div><strong>30</strong><span>${isEn ? 'workouts' : 'bài tập'}</span></div>
            <div><strong>2,400+</strong><span>${isEn ? 'members' : 'hội viên'}</span></div>
            <div><strong>4.9 ★</strong><span>${isEn ? 'reviews' : 'đánh giá'}</span></div>
          </div>

          <div class="ai-gym-thumbs ai-stagger s3">
            <div class="ai-gym-thumb-box"><img src="assets/demo-gym.jpg" alt="" /></div>
            <div class="ai-gym-thumb-box"><strong>30</strong><span>${isEn ? 'days' : 'ngày'}</span></div>
          </div>
        </div>
        <span class="ai-float-cta">${floatCta}</span>
      </a>

      <!-- Right Card: Express Delivery -->
      <a href="#giai-phap" class="ai-fan-card is-right">
        <div class="ai-dl-top">
          <span>SWIFT EXPRESS</span>
          <span>${isEn ? '210K parcels' : '210K đơn/tháng'}</span>
        </div>
        <div class="ai-dl-title">${isEn ? 'Express<br/><em>Delivery</em>' : 'Giao Hàng<br/><em>Siêu Tốc</em>'}</div>
        <div class="ai-dl-photo">
          <img src="assets/demo-delivery.jpg" alt="Express Delivery Website" />
          <div class="ai-dl-price-circle">29K<span>${isEn ? 'PER ORDER' : 'MỖI ĐƠN'}</span></div>
        </div>
        <div class="ai-dl-rows">
          <div><span>${isEn ? 'Same-day 2H' : 'Nội thành 2H'}</span><b>29.000đ</b></div>
          <div><span>${isEn ? 'Next-day 24H' : 'Liên tỉnh 24H'}</span><b>45.000đ</b></div>
        </div>
      </a>
    `;
  } else {
    const titleEl = document.getElementById('ai-gym-title');
    if (titleEl) titleEl.textContent = gymTitle;
  }
}

function runAiBuildSequence(textForCards) {
  const stage = document.getElementById('ai-fan-stage');
  const steps = document.querySelectorAll('#ai-steps .ai-step');
  const timeEl = document.getElementById('ai-done-time');
  if (!stage) return;

  renderAiBuilder(textForCards);
  stage.classList.add('is-building');
  steps.forEach((s) => s.classList.remove('done'));
  if (timeEl) timeEl.style.opacity = '0.3';

  steps.forEach((s, i) => {
    setTimeout(() => s.classList.add('done'), 160 * (i + 1));
  });

  setTimeout(() => {
    requestAnimationFrame(() => {
      stage.classList.remove('is-building');
      if (timeEl) timeEl.style.opacity = '1';
    });
  }, 760);
}

function startAiAutoLoop() {
  const input = document.getElementById('ai-prompt-input');
  if (!input || aiUserTyping) return;
  clearTimeout(aiAutoTimer);

  const prompts = aiAutoPrompts[currentLang] || aiAutoPrompts.vi;
  const targetText = prompts[aiPromptIdx % prompts.length];
  let charIdx = 0;
  input.value = '';

  function typeNext() {
    if (aiUserTyping) return;
    if (charIdx <= targetText.length) {
      input.value = targetText.slice(0, charIdx);
      charIdx++;
      aiAutoTimer = setTimeout(typeNext, 28);
    } else {
      runAiBuildSequence(targetText);
      aiPromptIdx++;
      aiAutoTimer = setTimeout(startAiAutoLoop, 4600);
    }
  }
  typeNext();
}

const aiInput = document.getElementById('ai-prompt-input');
const aiForm = document.getElementById('ai-builder-form');
if (aiInput) {
  aiInput.addEventListener('focus', () => {
    if (!aiUserTyping) {
      aiUserTyping = true;
      clearTimeout(aiAutoTimer);
    }
  });
  aiInput.addEventListener('input', () => {
    aiUserTyping = true;
    clearTimeout(aiAutoTimer);
    renderAiBuilder();
  });
}
if (aiForm) {
  aiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    aiUserTyping = true;
    clearTimeout(aiAutoTimer);
    runAiBuildSequence();
  });
}

// Initialize language, cases, one-link tabs, AI builder, and blog API
applyLanguage(currentLang, false);
fetchExternalBlogAPI();
startAiAutoLoop();
