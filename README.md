🎨 Kişiye Özel Renk Analizi Uygulaması

Bu proje, kullanıcıların göz, saç ve ten renklerine göre kendilerine en çok yakışan renkleri analiz eden bir web uygulamasıdır.  
Uygulama, kullanıcının girdiği verileri değerlendirerek uygun renk paletlerini ve kaçınılması gereken renkleri önerir.  
Amaç, kişisel renk uyumunu kolayca öğrenmeyi sağlayan sade ve kullanıcı dostu bir araç geliştirmektir.


🌈 Özellikler

 * Kullanıcı girişi — Göz rengi, saç rengi ve ten rengi bilgileri girilebilir.
 * Renk analizi algoritması — Girilen verilere göre kişiye özel renk paleti oluşturur.
 * Uygun olmayan renkleri belirtme — Kullanıcının kaçınması gereken tonları gösterir.
 * Bootstrap 5 ile modern arayüz.
 * Analiz sonuçlarını modal veya kart yapısında gösterme — Renk önerileri dinamik olarak render edilir.
 * Vanilla JS ile modüler ES6+ kod yapısı — Kodlar ayrı modüllere bölünmüştür.


🗂 Dosya Yapısı

proje-kökü/

── index.html       # Uygulamanın ana sayfası 

── css/

  ── styles.css     # Özel stil dosyası 
  
── js/

   ── app.js        # Uygulamanın başlangıç dosyası
   
   ── depolama.js   # LocalStorage üzerinde CRUD işlemleri
   
   ── ui.js         # DOM render işlemleri ve modal yönetimi
   
   ── events.js     # Olay dinleyicilerini tanımlar
   
── README.md        # Proje açıklama dosyası


⚙ Kurulum ve Kullanım

1) Projeyi indirin veya klonlayın.
2) index.html dosyasını tarayıcıda açın.
3) Göz, saç ve ten renginizi girin.
4) Analiz Et butonuna tıklayın.
5) Sonuçları inceleyin.
6) Veriler LocalStorage’da saklanır.


💻 Teknolojiler

* HTML5 ve CSS3 — Uygulamanın temel yapısı ve görsel tasarımı oluşturuldu.
* Bootstrap 5 — Responsive (duyarlı) tasarım, grid yapısı ve modal pencereler için kullanıldı.
* Vanilla JavaScript (ES6+) — Renk analizi mantığı, olay dinleyicileri ve modüler yapı bu dil ile geliştirildi.
* LocalStorage API — Kullanıcı verilerinin (göz, saç, ten rengi) tarayıcıda kalıcı olarak saklanması sağlandı.
