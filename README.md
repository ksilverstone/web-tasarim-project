# NatureCamp - Doğa Kampı ve Karavan Kiralama Sitesi

Bu proje, Kocaeli Üniversitesi Teknoloji Fakültesi Bilişim Sistemleri Mühendisliği Bölümü "TBL303: Web Tasarımı" dersi kapsamında 2025-2026 Güz döneminde geliştirilmiştir.

NatureCamp; karavan kiralama, kamp alanları ve bungalov konaklama hizmetleri sunan hayali bir turizm acentesinin responsive (duyarlı) web sitesi projesidir. Proje ayrıca, backend bağlantısı olmaksızın simüle edilmiş bir yönetici (admin) panelini de içermektedir.

## Proje Özellikleri

Müşteri Arayüzü (Frontend):
- Responsive Tasarım: Mobil, tablet ve masaüstü cihazlarla tam uyumlu görünüm.
- Dinamik Slider: Owl Carousel ile oluşturulmuş otomatik geçişli manşet alanı.
- Duyuru Sistemi: Duyuru detaylarının sayfa yenilenmeden açıldığı Bootstrap Modal yapısı.
- Hizmet Sayfaları: Karavan, Kamp ve Bungalov için detaylı tanıtım ve listeleme sayfaları.
- İstatistikler: Chart.js ile görselleştirilmiş dinamik veri grafikleri.
- İletişim Formu: İstemci taraflı doğrulama ve gönderim simülasyonu.

Yönetici Paneli (Admin):
- Dashboard: Site özet verilerinin görüntülendiği kontrol paneli.
- İçerik Yönetimi: Duyuru, ürün ve hizmet ekleme sayfaları (Dosya yükleme arayüzü simülasyonu dahil).
- Not: Admin paneli "/admin" klasörü altında yer almaktadır ve görsel arayüz olarak tasarlanmıştır.

## Kullanılan Teknolojiler

- HTML5 & CSS3
- Bootstrap Framework
- JavaScript (ES6+) & jQuery
- Chart.js (Grafik Kütüphanesi)
- Owl Carousel (Slider Eklentisi)
- Google Fonts & Font Awesome

## Kurulum ve Çalıştırma

Bu proje statik web sayfalarından oluştuğu için herhangi bir veritabanı kurulumu veya sunucu yapılandırması gerektirmez.

1. Projeyi bilgisayarınıza indirin (ZIP olarak veya git clone ile).
2. Ana klasördeki "index.html" dosyasını tarayıcınızda açarak siteyi görüntüleyebilirsiniz.
3. Yönetim paneline erişmek için tarayıcınızın adres çubuğunda dosya yolunun sonuna "/admin/index.html" ekleyebilir veya footer'daki linki kullanabilirsiniz.

## Dosya Yapısı

- /css: Stil dosyaları
- /js: JavaScript dosyaları
- /images: Proje görselleri (Araçlar, kamp alanları vb.)
- /admin: Yönetim paneli HTML ve varlık dosyaları
- *.html: Müşteri arayüzü sayfaları

## Kaynaklar ve Şablonlar

Projenin geliştirilmesinde aşağıdaki ücretsiz HTML şablonları temel alınmış ve proje isterlerine göre özelleştirilmiştir:
- Frontend Şablonu: A-World (ThemeWagon)
- Admin Şablonu: SB Admin 2 (StartBootstrap)

---
Geliştirici: Kerem Emre GÜMÜŞTAŞ
Öğrenci No: 231307084
