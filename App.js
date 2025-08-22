import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
    // State to manage current active page/view
    const [currentPage, setCurrentPage] = useState('home');
    // State to hold mock product data
    const [products] = useState([
        {
            id: 1,
            name: 'قفطان ملكي حريري مطرز يدوياً',
            category: 'ملابس',
            price: 4500,
            image: 'https://placehold.co/600x400/985a3c/ffffff?text=قفطان+ملكي',
            description: 'قفطان مغربي أصيل مصنوع من حرير طبيعي فاخر، مطرز يدوياً بتقنية "العقاد والسفيفة" التقليدية. يعكس التصميم الأناقة والتراث المغربي الغني، وهو مثالي للمناسبات الخاصة. الألوان المستخدمة مستخلصة من أصباغ طبيعية.',
            artisanStory: 'صنعته أنامل الحرفية فاطمة الزهراء من مدينة فاس، التي ورثت فن التطريز من جدتها، وتستخدم فقط الخيوط الطبيعية والأصباغ الآمنة للبيئة.',
            materials: ['حرير طبيعي', 'خيوط قطنية', 'أصباغ طبيعية'],
            craftsmanship: 'تطريز يدوي، عقاد وسفيفة'
        },
        {
            id: 2,
            name: 'حقيبة يد جلدية طبيعية',
            category: 'حقائب',
            price: 950,
            image: 'https://placehold.co/600x400/8B4513/ffffff?text=حقيبة+جلد',
            description: 'حقيبة يد أنيقة مصنوعة يدوياً من الجلد الطبيعي المدبوغ بطرق تقليدية صديقة للبيئة. تتميز بتصميم فريد ومتانة عالية، وتناسب الاستخدام اليومي أو المناسبات.',
            artisanStory: 'الحرفي أحمد من مراكش هو صانع هذه الحقيبة. يعمل أحمد في صناعة الجلود منذ أكثر من 30 عاماً، ويلتزم باستخدام الجلود المحلية ومعالجتها بأقل تأثير بيئي.',
            materials: ['جلد طبيعي'],
            craftsmanship: 'خياطة يدوية، دباغة تقليدية'
        },
        {
            id: 3,
            name: 'قلادة فضية بتصميم بربري',
            category: 'إكسسوارات',
            price: 700,
            image: 'https://placehold.co/600x400/C0C0C0/ffffff?text=قلادة+فضية',
            description: 'قلادة فضية مصنوعة يدوياً بأسلوب التصميم البربري الأصيل. تتميز بتفاصيل دقيقة وتعكس جمال الحلي التقليدية المغربية. فضة معاد تدويرها بنسبة 925.',
            artisanStory: 'الحرفية خديجة من تيزنيت، مدينة الفضة، هي من أبدعت هذه القطعة. خديجة ملتزمة باستخدام الفضة المعاد تدويرها وتقنيات صياغة تراعي البيئة.',
            materials: ['فضة 925 معاد تدويرها'],
            craftsmanship: 'صياغة فضة يدوية'
        },
        {
            id: 4,
            name: 'مزهرية خزفية مزخرفة',
            category: 'ديكور منزلي',
            price: 380,
            image: 'https://placehold.co/600x400/A0522D/ffffff?text=مزهرية+خزفية',
            description: 'مزهرية خزفية فريدة من نوعها، مزخرفة يدوياً بأنماط مغربية تقليدية. مصنوعة من الطين الطبيعي ومطلية بأصباغ خالية من الرصاص، مثالية لإضافة لمسة فنية لمنزلك.',
            artisanStory: 'صنعها الحرفي سعيد من مدينة آسفي، المعروفة بفخارها. سعيد يحرص على استخدام الطين المحلي والأفران التقليدية التي تستهلك طاقة أقل.',
            materials: ['طين طبيعي', 'أصباغ خالية من الرصاص'],
            craftsmanship: 'تشكيل ورسم يدوي'
        },
        {
            id: 5,
            name: 'بساط صوفي تقليدي (زرابي)',
            category: 'ديكور منزلي',
            price: 3200,
            image: 'https://placehold.co/600x400/5A2C10/ffffff?text=بساط+صوفي',
            description: 'بساط صوفي مغربي تقليدي، منسوج يدوياً من صوف طبيعي 100%. يتميز بألوانه الطبيعية المستوحاة من الطبيعة وأنماطه الهندسية الفريدة، يجلب الدفء والأصالة لأي مكان.',
            artisanStory: 'الحرفية أمينة وعائلتها من الأطلس الكبير هم من نسجوا هذا البساط. يعتمدون على صوف الأغنام المحلية ويستخدمون أصباغاً نباتية فقط.',
            materials: ['صوف طبيعي 100%', 'أصباغ نباتية'],
            craftsmanship: 'نسيج يدوي'
        },
        {
            id: 6,
            name: 'مصباح جلدي يدوي الصنع',
            category: 'ديكور منزلي',
            price: 600,
            image: 'https://placehold.co/600x400/D2B48C/ffffff?text=مصباح+جلدي',
            description: 'مصباح يدوي الصنع من الجلد الطبيعي المخرم، يضفي إضاءة دافئة وظلالاً فنية رائعة. تصميم مستوحى من الفوانيس المغربية التقليدية.',
            artisanStory: 'الحرفي يوسف من الرباط، متخصص في صناعة الفوانيس الجلدية. يوسف يستخدم قصاصات الجلد لتقليل الهدر ويضمن أن كل قطعة فريدة.',
            materials: ['جلد طبيعي'],
            craftsmanship: 'تشكيل وتخريم يدوي'
        },
        {
            id: 7,
            name: 'وشاح حريري مطبوع يدوياً',
            category: 'إكسسوارات',
            price: 300,
            image: 'https://placehold.co/600x400/964B00/ffffff?text=وشاح+حريري',
            description: 'وشاح أنيق من الحرير الطبيعي الخالص، مطبوع يدوياً بنقوش مغربية معاصرة باستخدام أصباغ صديقة للبيئة. مثالي لإضافة لمسة من الفخامة والأصالة.',
            artisanStory: 'الحرفية ليلى من شفشاون، معروفة بمهارتها في الطباعة على الحرير. ليلى تبتكر تصاميم فريدة مستلهمة من الطبيعة المحيطة بها.',
            materials: ['حرير طبيعي', 'أصباغ صديقة للبيئة'],
            craftsmanship: 'طباعة يدوية'
        },
        {
            id: 8,
            name: 'حذاء بابوش جلدي مريح',
            category: 'ملابس',
            price: 450,
            image: 'https://placehold.co/600x400/6B8E23/ffffff?text=حذاء+بابوش',
            description: 'بابوش مغربي تقليدي، مصنوع يدوياً من الجلد الناعم والمرن، يوفر راحة فائقة وتصميماً كلاسيكياً يواكب الموضة الحديثة.',
            artisanStory: 'الحرفي حسن من فاس، عائلته تعمل في صناعة الأحذية التقليدية لأجيال. يحرص حسن على استخدام أجود أنواع الجلود المحلية.',
            materials: ['جلد طبيعي'],
            craftsmanship: 'خياطة يدوية'
        },
    ]);

    // State to hold mock artisan data
    const [artisans] = useState([
        {
            id: 1,
            name: 'فاطمة الزهراء',
            craft: 'تطريز القفطان والعقاد',
            region: 'فاس',
            bio: 'ورثت فاطمة الزهراء فن التطريز والعقاد والسفيفة من جدتها، وهي تكرس حياتها للحفاظ على هذا الفن العريق وتطويره. تعمل في ورشتها الخاصة بفاس، وتستخدم فقط الخيوط الطبيعية والأصباغ الآمنة للبيئة، لتنتج قطعًا فنية تتسم بالأصالة والجودة.',
            image: 'https://placehold.co/300x300/6A5ACD/ffffff?text=فاطمة+الزهراء',
            productsMade: ['قفطان ملكي حريري مطرز يدوياً']
        },
        {
            id: 2,
            name: 'أحمد العلوي',
            craft: 'صناعة الجلود',
            region: 'مراكش',
            bio: 'يعد أحمد العلوي من أمهر الحرفيين في صناعة الجلود بمراكش، بخبرة تمتد لأكثر من 30 عاماً. يلتزم أحمد العلوي باستخدام الجلود المحلية ومعالجتها بطرق تقليدية صديقة للبيئة، مما يضمن منتجات عالية الجودة والمتانة.',
            image: 'https://placehold.co/300x300/B0E0E6/000000?text=أحمد+العلوي',
            productsMade: ['حقيبة يد جلدية طبيعية', 'حذاء بابوش جلدي مريح']
        },
        {
            id: 3,
            name: 'خديجة الفضالي',
            craft: 'صياغة الفضة',
            region: 'تيزنيت',
            bio: 'منذ نعومة أظفارها، نشأت خديجة في تيزنيت، مدينة الفضة الشهيرة. أتقنت فن صياغة الفضة اليدوية من خلال توجيهات والديها. تكرس خديجة عملها للحفاظ على تراث الفضة الأمازيغي، وتستخدم الفضة المعاد تدويرها في معظم أعمالها لضمان الاستدامة.',
            image: 'https://placehold.co/300x300/FFD700/000000?text=خديجة+الفضالي',
            productsMade: ['قلادة فضية بتصميم بربري']
        },
        {
            id: 4,
            name: 'سعيد الحجازي',
            craft: 'فن الخزف',
            region: 'آسفي',
            bio: 'سعيد الحجازي فنان خزف من مدينة آسفي، المعروفة عالمياً بفخارها. يتخصص سعيد في تحويل الطين الطبيعي إلى قطع فنية مزخرفة يدوياً بأنماط مغربية تقليدية، مع التركيز على استخدام أصباغ خالية من الرصاص وممارسات إنتاج صديقة للبيئة.',
            image: 'https://placehold.co/300x300/8B4513/ffffff?text=سعيد+الحجازي',
            productsMade: ['مزهرية خزفية مزخرفة']
        },
        {
            id: 5,
            name: 'أمينة بن يوسف',
            craft: 'نسيج الزرابي',
            region: 'الأطلس الكبير',
            bio: 'تنتمي أمينة إلى عائلة عريقة في نسيج الزرابي بالأطلس الكبير. تعمل مع نساء قريتها للحفاظ على هذا الفن الأصيل. تستخدم أمينة صوف الأغنام المحلية والأصباغ النباتية فقط لإنتاج زرابي تحمل قصصاً وأنماطاً تعكس تراث منطقتها.',
            image: 'https://placehold.co/300x300/228B22/ffffff?text=أمينة+بن+يوسف',
            productsMade: ['بساط صوفي تقليدي (زرابي)']
        },
        {
            id: 6,
            name: 'يوسف العمراني',
            craft: 'مصابيح جلدية',
            region: 'الرباط',
            bio: 'يوسف العمراني هو حرفي متخصص في صناعة المصابيح والفوانيس الجلدية في الرباط. يجمع بين التقنيات التقليدية والتصاميم الحديثة لخلق قطع إضاءة فنية. يركز يوسف على تقليل الهدر في ورشته ويضمن أن كل مصباح هو تحفة فنية فريدة.',
            image: 'https://placehold.co/300x300/FFDAB9/000000?text=يوسف+العمراني',
            productsMade: ['مصباح جلدي يدوي الصنع']
        }
    ]);

    // State for selected product details
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Function to navigate between pages
    const navigateTo = (page, product = null) => {
        setCurrentPage(page);
        setSelectedProduct(product);
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    // Components for different pages/sections

    // Header Component
    const Header = () => (
        <header className="bg-white shadow-lg sticky top-0 z-50 rounded-b-xl">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="https://placehold.co/50x50/36454F/ffffff?text=شعار" alt="شعار المتجر" className="w-12 h-12 rounded-full mr-3 shadow-md" />
                    <h1 className="text-3xl font-bold text-gray-800 font-inter">كنوز المغرب</h1>
                </div>
                <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-lg font-medium">
                    <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-orange-600 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">الرئيسية</button>
                    <button onClick={() => navigateTo('products')} className="text-gray-700 hover:text-orange-600 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">المنتجات</button>
                    <button onClick={() => navigateTo('artisans')} className="text-gray-700 hover:text-orange-600 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">قصص الحرفيين</button>
                    <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-orange-600 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">من نحن</button>
                    <button onClick={() => navigateTo('contact')} className="text-gray-700 hover:text-orange-600 transition duration-300 px-3 py-2 rounded-lg hover:bg-gray-100">اتصل بنا</button>
                </nav>
            </div>
        </header>
    );

    // Footer Component
    const Footer = () => (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 rounded-t-xl mt-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Us section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">عن كنوز المغرب</h3>
                    <p className="text-gray-300 leading-relaxed">
                        نقدم لكم أرقى المنتجات التقليدية المغربية المصنوعة يدوياً بمواد طبيعية، مع التزامنا بالاستدامة ودعم الحرفيين المهرة.
                    </p>
                </div>

                {/* Quick Links section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">روابط سريعة</h3>
                    <ul className="space-y-2">
                        <li><button onClick={() => navigateTo('products')} className="text-gray-300 hover:text-orange-400 transition duration-300">منتجاتنا</button></li>
                        <li><button onClick={() => navigateTo('artisans')} className="text-gray-300 hover:text-orange-400 transition duration-300">قصص الحرفيين</button></li>
                        <li><button onClick={() => navigateTo('about')} className="text-gray-300 hover:text-orange-400 transition duration-300">من نحن</button></li>
                        <li><button onClick={() => alert('سياسة الخصوصية قيد الإنشاء.')} className="text-gray-300 hover:text-orange-400 transition duration-300">سياسة الخصوصية</button></li>
                        <li><button onClick={() => alert('سياسة الإرجاع قيد الإنشاء.')} className="text-gray-300 hover:text-orange-400 transition duration-300">سياسة الإرجاع</button></li>
                    </ul>
                </div>

                {/* Contact & Social Media section */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
                    <p className="text-gray-300 mb-2">البريد الإلكتروني: info@kunoozalmaghrib.com</p>
                    <p className="text-gray-300 mb-4">الهاتف: +212 6 XX XX XX XX</p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition duration-300 text-2xl">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition duration-300 text-2xl">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300 text-2xl">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-10 text-sm">
                &copy; {new Date().getFullYear()} كنوز المغرب. جميع الحقوق محفوظة.
            </div>
        </footer>
    );

    // Home Page Component
    const HomePage = () => (
        <main className="font-inter">
            {/* Hero Section */}
            <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center p-4 rounded-b-xl shadow-lg" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/6D2200/ffffff?text=الصناعة+التقليدية+المغربية")', backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-b-xl"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-down">
                        اكتشف أصالة المغرب بلمسة مستدامة
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up">
                        منتجات يدوية فريدة، مصنوعة بحب ووعي بيئي، تروي قصة التراث المغربي العريق.
                    </p>
                    <button onClick={() => navigateTo('products')} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg">
                        تسوق الآن
                    </button>
                </div>
            </section>

            {/* Featured Categories Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h3 className="text-4xl font-bold text-gray-800 mb-12">فئاتنا المميزة</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Category Card 1: القفطان */}
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out p-6 flex flex-col items-center">
                        <img src="https://placehold.co/300x200/A0522D/ffffff?text=القفطان" alt="القفطان" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h4 className="text-2xl font-semibold text-gray-800 mb-2">القفطان المغربي</h4>
                        <p className="text-gray-600 text-center mb-4">أناقة تراثية بتصاميم عصرية ومواد طبيعية.</p>
                        <button onClick={() => navigateTo('products')} className="text-orange-600 hover:text-orange-800 font-semibold transition duration-300">
                            اكتشف المزيد &rarr;
                        </button>
                    </div>
                    {/* Category Card 2: الحقائب الجلدية */}
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out p-6 flex flex-col items-center">
                        <img src="https://placehold.co/300x200/8B4513/ffffff?text=الحقائب+الجلدية" alt="الحقائب الجلدية" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h4 className="text-2xl font-semibold text-gray-800 mb-2">الحقائب الجلدية</h4>
                        <p className="text-gray-600 text-center mb-4">حقائب فريدة من الجلد الطبيعي المصنوع يدوياً.</p>
                        <button onClick={() => navigateTo('products')} className="text-orange-600 hover:text-orange-800 font-semibold transition duration-300">
                            اكتشف المزيد &rarr;
                        </button>
                    </div>
                    {/* Category Card 3: الحلي والإكسسوارات */}
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out p-6 flex flex-col items-center">
                        <img src="https://placehold.co/300x200/C0C0C0/000000?text=الحلي+والاكسسوارات" alt="الحلي والإكسسوارات" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h4 className="text-2xl font-semibold text-gray-800 mb-2">الحلي والإكسسوارات</h4>
                        <p className="text-gray-600 text-center mb-4">لمسة من التراث تضفي جمالاً على إطلالتك.</p>
                        <button onClick={() => navigateTo('products')} className="text-orange-600 hover:text-orange-800 font-semibold transition duration-300">
                            اكتشف المزيد &rarr;
                        </button>
                    </div>
                    {/* Category Card 4: الخزف والزرابي */}
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out p-6 flex flex-col items-center">
                        <img src="https://placehold.co/300x200/A52A2A/ffffff?text=الخزف+والزرابي" alt="الخزف والزرابي" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h4 className="text-2xl font-semibold text-gray-800 mb-2">الخزف والزرابي</h4>
                        <p className="text-gray-600 text-center mb-4">قطع فنية لديكور منزلي يحكي قصة.</p>
                        <button onClick={() => navigateTo('products')} className="text-orange-600 hover:text-orange-800 font-semibold transition duration-300">
                            اكتشف المزيد &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* About Sustainability Section */}
            <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16 rounded-xl mx-auto container px-4 my-16 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 text-center md:text-right">
                        <h3 className="text-4xl font-bold mb-6 leading-tight">التزامنا بالاستدامة</h3>
                        <p className="text-xl leading-relaxed mb-6">
                            في "كنوز المغرب"، كل قطعة تحمل قصة التزامنا بالبيئة. نستخدم مواد طبيعية 100% ونتبع ممارسات إنتاج أخلاقية وصديقة للبيئة، لتقديم منتجات جميلة ومسؤولة.
                        </p>
                        <button onClick={() => navigateTo('about')} className="bg-white text-green-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg">
                            تعرف على المزيد
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="https://placehold.co/500x350/228B22/ffffff?text=استدامة" alt="استدامة" className="rounded-lg shadow-2xl border-4 border-white" />
                    </div>
                </div>
            </section>

            {/* Artisan Spotlight Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h3 className="text-4xl font-bold text-gray-800 mb-12">قصص من أيادي مبدعة</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artisans.slice(0, 3).map(artisan => (
                        <div key={artisan.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out p-6 flex flex-col items-center text-center">
                            <img src={artisan.image} alt={artisan.name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-orange-600 shadow-md" />
                            <h4 className="text-2xl font-semibold text-gray-800 mb-2">{artisan.name}</h4>
                            <p className="text-orange-600 font-medium mb-3">{artisan.craft}</p>
                            <p className="text-gray-600 line-clamp-3 mb-4">{artisan.bio}</p>
                            <button onClick={() => navigateTo('artisans')} className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
                                اقرأ القصة كاملة &rarr;
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <button onClick={() => navigateTo('artisans')} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg">
                        اكتشف المزيد من الحرفيين
                    </button>
                </div>
            </section>
        </main>
    );

    // Products Page Component
    const ProductsPage = () => (
        <main className="container mx-auto px-4 py-12 font-inter">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">منتجاتنا التقليدية المستدامة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-xl" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-orange-600 font-bold text-2xl">{product.price.toLocaleString()} درهم</span>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{product.category}</span>
                            </div>
                            <button
                                onClick={() => navigateTo('product-detail', product)}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                عرض التفاصيل
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );

    // Product Detail Page Component
    const ProductDetailPage = ({ product }) => {
        if (!product) {
            return (
                <div className="container mx-auto px-4 py-12 text-center text-gray-700 font-inter">
                    <p className="text-2xl mb-6">المنتج المطلوب غير موجود.</p>
                    <button onClick={() => navigateTo('products')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
                        العودة إلى المنتجات
                    </button>
                </div>
            );
        }

        return (
            <main className="container mx-auto px-4 py-12 font-inter">
                <button onClick={() => navigateTo('products')} className="mb-8 flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    العودة للمنتجات
                </button>

                <div className="bg-white rounded-xl shadow-xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Product Image */}
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <img src={product.image} alt={product.name} className="w-full max-w-lg h-auto rounded-lg shadow-lg" />
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
                        <p className="text-orange-600 font-semibold text-3xl mb-6">{product.price.toLocaleString()} درهم</p>

                        <h3 className="text-2xl font-semibold text-gray-700 mb-3">الوصف:</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                        <h3 className="text-2xl font-semibold text-gray-700 mb-3">المواد والحرفية:</h3>
                        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                            {product.materials && product.materials.map((material, index) => (
                                <li key={index}>{material}</li>
                            ))}
                            {product.craftsmanship && <li>{product.craftsmanship}</li>}
                        </ul>

                        <h3 className="text-2xl font-semibold text-gray-700 mb-3">قصة الحرفي:</h3>
                        <p className="text-gray-600 leading-relaxed mb-8 italic">{product.artisanStory}</p>

                        <button
                            onClick={() => alert(`تمت إضافة ${product.name} إلى سلة التسوق (هذه وظيفة عرضية فقط).`)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full shadow-lg text-xl transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            أضف إلى السلة
                        </button>
                    </div>
                </div>
            </main>
        );
    };

    // Artisan Stories Page Component
    const ArtisansPage = () => (
        <main className="container mx-auto px-4 py-12 font-inter">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">قصص من أيادي مبدعة: حرفيون من المغرب</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {artisans.map(artisan => (
                    <div key={artisan.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out p-6 flex flex-col items-center text-center">
                        <img src={artisan.image} alt={artisan.name} className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-orange-600 shadow-md" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{artisan.name}</h3>
                        <p className="text-orange-600 font-medium mb-3">{artisan.craft} من {artisan.region}</p>
                        <p className="text-gray-600 leading-relaxed mb-4">{artisan.bio}</p>
                        {artisan.productsMade && artisan.productsMade.length > 0 && (
                            <div className="mt-2 text-gray-700 text-sm">
                                <span className="font-semibold">بعض أعماله:</span> {artisan.productsMade.join(', ')}.
                            </div>
                        )}
                        {/* Could add a button to view products by this artisan */}
                    </div>
                ))}
            </div>
        </main>
    );

    // About Us Page Component
    const AboutPage = () => (
        <main className="container mx-auto px-4 py-12 font-inter">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">عن كنوز المغرب</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 text-gray-700 leading-relaxed text-lg">
                <p className="mb-6">
                    في "كنوز المغرب"، نؤمن بأن الجمال الحقيقي يكمن في الأصالة والاستدامة. مشروعنا هو ثمرة شغف عميق بالصناعة التقليدية المغربية وتراثها الغني، ممزوجاً بالتزام راسخ تجاه البيئة والمجتمع.
                </p>
                <p className="mb-6">
                    **رؤيتنا:** أن نكون الوجهة الرائدة عالمياً للمنتجات التقليدية المغربية المصنوعة يدوياً والمستدامة، مع تمكين الحرفيين وتعزيز التراث الثقافي.
                </p>
                <p className="mb-6">
                    **رسالتنا:** تقديم منتجات تقليدية مغربية فريدة وعالية الجودة، مصنوعة بمسؤولية بيئية واجتماعية، تروي قصة التراث الغني والحرفية المغربية العريقة.
                </p>
                <p className="mb-6 font-semibold text-gray-800">التزامنا بالاستدامة:</p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>**مواد طبيعية 100%:** نستخدم فقط أجود المواد الخام الطبيعية مثل الجلد، خيوط الرافية، القطن، الصوف، والأصباغ النباتية.</li>
                    <li>**إنتاج يدوي أخلاقي:** ندعم الحرف اليدوية التي تقلل من البصمة الكربونية وتحافظ على مهارات الأجيال.</li>
                    <li>**تعبئة صديقة للبيئة:** نلتزم باستخدام مواد تغليف قابلة لإعادة التدوير أو التحلل لتقليل النفايات.</li>
                </ul>
                <p className="mb-6 font-semibold text-gray-800">دعم الحرفيين:</p>
                <p className="mb-6">
                    نعمل بشراكة مباشرة مع الحرفيين المغاربة المهرة، ونضمن لهم أسعاراً عادلة وشروط عمل كريمة. كل عملية شراء من "كنوز المغرب" هي دعم مباشر لهذه الأيادي المبدعة، ومساهمة في الحفاظ على تراثنا الثقافي الغني للأجيال القادمة.
                </p>
                <p>
                    شكراً لكونك جزءاً من رحلتنا نحو عالم أكثر جمالاً واستدامة.
                </p>
            </div>
        </main>
    );

    // Contact Us Page Component
    const ContactPage = () => (
        <main className="container mx-auto px-4 py-12 font-inter">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">تواصل معنا</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 max-w-2xl mx-auto">
                <p className="text-gray-700 mb-8 text-lg text-center">
                    نحن هنا للإجابة على جميع استفساراتك ومساعدتك. لا تتردد في التواصل معنا عبر الطرق التالية أو بملء النموذج أدناه.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-center">
                    <div>
                        <div className="text-orange-600 mb-3">
                            <i className="fas fa-envelope fa-3x"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">البريد الإلكتروني</h3>
                        <p className="text-gray-600"><a href="mailto:info@kunoozalmaghrib.com" className="hover:underline">info@kunoozalmaghrib.com</a></p>
                    </div>
                    <div>
                        <div className="text-orange-600 mb-3">
                            <i className="fas fa-phone-alt fa-3x"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">الهاتف</h3>
                        <p className="text-gray-600">+212 6 XX XX XX XX</p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">الاسم الكامل</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 text-gray-800"
                            placeholder="أدخل اسمك"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">البريد الإلكتروني</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 text-gray-800"
                            placeholder="أدخل بريدك الإلكتروني"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">رسالتك</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 text-gray-800"
                            placeholder="اكتب رسالتك هنا..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
                        onClick={(e) => { e.preventDefault(); alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً (هذه وظيفة عرضية فقط).'); }}
                    >
                        إرسال الرسالة
                    </button>
                </form>
            </div>
        </main>
    );


    // Render current page based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'products':
                return <ProductsPage />;
            case 'product-detail':
                return <ProductDetailPage product={selectedProduct} />;
            case 'artisans':
                return <ArtisansPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-inter">
            <Header />
            <div className="flex-grow">
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
};

export default App;
