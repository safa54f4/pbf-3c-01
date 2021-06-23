# 12 - CRUD Firebase

## Tujuan Pembelajaran
1. Mahasiswa dapat mempelajari membuat blogpost yang terhubung ke CRUD Firebase

## Hasil Praktikum

1. Source Code

    1. Praktikum 1

        a. firebase.config.js

        ![SS-1-1-1](img/1/firebase-config.jpg)

        b. rule

        ![SS-1-1-2](img/1/rule.jpg)

    2. Praktikum 2

        a. Blogpost

        ![SS-1-1-3](img/2/blogpost1.jpg)

        ![SS-1-1-4](img/2/blogpost2.jpg)

        ![SS-1-1-5](img/2/blogpost3.jpg)

        ![SS-1-1-6](img/2/blogpost4.jpg)

        ![SS-1-1-7](img/2/blogpost5.jpg)

        ![SS-1-1-8](img/2/blogpost6.jpg)

        b. Home

        ![SS-1-1-9](img/2/home.jpg)

    3. Praktikum 3

        ![SS-1-1-10](img/3/blogpost7.jpg)

    4. Praktikum 4

        ![SS-1-1-11](img/4/blogpost8.jpg)

        ![SS-1-1-12](img/4/blogpost9.jpg)

        ![SS-1-1-13](img/4/blogpost10.jpg)


2. Hasil Tampilan

    1. Praktikum 2

        ![SS-2-1](img/2/hasilprak2.jpg)

    2. Praktikum 3
        ![SS-2-2](img/3/hasilprak3.jpg)

    3. Praktikum 4
        ![SS-2-3]

### Praktikum 3: Membuat Fungsi Hapus Artikel

`Screenshot:`

![Praktikum 3](img/Screenshot_3.png)

### Praktikum 4: Membuat Fungsi Edit (Update) Artikel

`Screenshot:`

![Praktikum 4](img/Screenshot_4.png)

## Tugas

1. Berdasarkan praktikum 1 yang telah Anda lakukan, jelaskan perbedaan fungsi locked mode dan test mode pada langkah 3 saat Anda konfigurasi database Firebase?
2. Buatlah variabel userId pada praktikum 2 langkah 4 agar dapat menyimpan email dari user yang sedang login, sehingga dapat tersimpan di database!
3. Jelaskan maksud kode ini (dataArtikel || []) pada praktikum 2 langkah 6! Mengapa berbeda dari codelabs sebelumnya untuk menampilkan daftar artikel?
4. Lengkapilah kode pada praktikum 4 langkah 5 agar dapat melakukan update artikel! Mengapa setelah klik tombol Update Artikel, form Modal tidak hilang? Bagaimana Anda mengatasi hal tersebut?
5. Ketika Anda menekan tombol Edit, lalu menekan tombol Batal pada form Modal update artikel. Kemudian coba tambah artikel baru, maka artikel yang tadi kita klik tombol Edit akan berubah jadi data yang artikel baru ditambahkan. Mengapa demikian? Silakan diperbaiki.

`Jawab:`

1. Perbedaan dari fungsi locked mode dan test mode adalah pada penulisan dan pembacaan data. Ketika masuk locked mode, maka data tidak akan bisa diakses maupun diolah karena pada pengaturannya diatur false dan sebaliknya pada test mode, data bisa diakses dan diolah.

2. Database
    ![Tugas 2](img/Screenshot_5.png)

3. Berfungsi untuk menampilkan map data dalam bentuk array ataupun objek. tidak seperti praktikum sebelumnya dimana data yang diambil hanya berbentuk objek.

4. Karena showEdit tidak diubah menjadi false.
    ![Tugas 4](img/Screenshot_6.png)

5. Karena pada onSubmit masih memanggil fungsi `handleTombolSimpan`. sehingga data baru akan tersimpan.

