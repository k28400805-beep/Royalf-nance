// Kredi Hesaplayıcı Dinamik İşlevi
const tutarInput = document.getElementById('krediTutar');
const geriOdemeSpan = document.getElementById('geriOdeme');

if (tutarInput) {
    tutarInput.addEventListener('input', function () {
        let tutar = parseFloat(tutarInput.value) || 0;
        let toplam = tutar * 1.5; // %50 Faiz
        geriOdemeSpan.textContent = toplam.toFixed(1) + " TL";
    });
}

function basvuruYap() {
    alert("Giriş Katı Ofisi'ne gelerek veya Genel Başkan'a ulaşarak VIP Kredi Kartınızı teslim alabilirsiniz!");
}

function islemYap() {
    alert("Borsa ve Altın alım-satım işlemleri Giriş Katı Veznesi'nde yapılmaktadır.");
}

function krediBasvurusu() {
    let tutar = tutarInput.value;
    alert(tutar + " TL kredi talebiniz Giriş Katı Ofisi Yönetimi'ne iletildi!");
}
