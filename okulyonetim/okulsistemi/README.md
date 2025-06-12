# Okul Yönetim Sistemi

Bu proje, Java Spring Boot ve React kullanılarak geliştirilmiş bir **Okul Yönetim Sistemi** uygulamasıdır. Amaç; öğrenci, öğretmen ve sınıf yönetimini kolaylaştırmak, modern yazılım geliştirme pratiklerini ve Java ekosisteminin güncel teknolojilerini uygulamaktır.

## Proje Özellikleri

- **Backend:** Spring Boot, Spring Data JPA, Spring Security, PostgreSQL/H2
- **Frontend:** React, TypeScript, Material UI
- **Katmanlı Mimari:** Controller, Service, Repository, Model
- **RESTful API:** CRUD işlemleri, JWT ile güvenlik
- **Veritabanı:** PostgreSQL (veya H2)
- **Test:** Postman koleksiyonu ile API testleri
- **Modern Java:** Lambda, Stream API, Koleksiyonlar, OOP, Exception Handling
- **Kolay Deploy:** Maven ile build, Docker ile deploy edilebilir yapı

## Kurulum ve Çalıştırma

### Backend (Spring Boot)

1. Proje dizinine girin:
    ```sh
    cd okulyonetim/okulsistemi
    ```
2. Bağımlılıkları yükleyin ve projeyi başlatın:
    ```sh
    mvn clean install
    mvn spring-boot:run
    ```
3. Uygulama varsayılan olarak `http://localhost:8080` adresinde çalışacaktır.

### Frontend (React)

1. Frontend dizinine girin:
    ```sh
    cd okulyonetim/okulsistemi/frontend
    ```
2. Bağımlılıkları yükleyin ve başlatın:
    ```sh
    npm install
    npm start
    ```
3. Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## Kullanılan Teknolojiler

- Java 17
- Spring Boot 3.x
- Spring Data JPA
- Spring Security
- PostgreSQL / H2
- React 19.x + TypeScript
- Material UI
- Maven

## Proje Yapısı

```
okulyonetim/
└── okulsistemi/
    ├── src/
    ├── frontend/
    ├── pom.xml
    └── ...
```

## API Testleri

- `OkulYonetimSistemi.postman_collection.json` dosyası ile Postman üzerinden API uç noktalarını test edebilirsiniz.

## Katkı ve Lisans

- Katkı sağlamak isteyenler için pull request'ler açıktır.
- Bu proje MIT lisansı ile lisanslanmıştır.

---

**Not:**  
Veritabanı bağlantı ayarlarını `src/main/resources/application.properties` dosyasından düzenleyebilirsiniz. 