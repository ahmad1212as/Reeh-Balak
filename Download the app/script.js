function downloadFile() {
  const url = "https://reeh-balak.github.io/Website/Desktop%20application/Reeh%20Balak%20Setup.exe";
  const a = document.createElement('a');
  a.href = url;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ربط زر التحميل بالحدث
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('downloadBtn');
  btn.addEventListener('click', downloadFile);
});

// منع النقر بالزر الأيمن
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// منع اختصارات لوحة المفاتيح المرتبطة بأدوات المطور
document.addEventListener('keydown', function(e) {
  if (e.key === "F12") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'c')) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key.toLowerCase() === 's') {
    e.preventDefault();
  }
});
