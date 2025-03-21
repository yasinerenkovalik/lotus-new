import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./FormPage.css";
import logo from "./logo-placeholder.png";

const FormPage = () => {
  const formRef = useRef();

  const handleDownloadPDF = () => {
    html2canvas(formRef.current, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      // Görselin boyutları
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
  
      // Oranı koruyarak PDF'e sığdırmak için ölçekleme
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;
  
      const marginX = (pdfWidth - finalWidth) / 2;
      const marginY = (pdfHeight - finalHeight) / 2;
  
      pdf.addImage(imgData, "PNG", marginX, marginY, finalWidth, finalHeight);
      pdf.save("lotus-form.pdf");
    });
  };
  const formatDate = (inputDate) => {
    if (!inputDate) return "";
    const [year, month, day] = inputDate.split("-");
    return `${day}.${month}.${year}`;
  };
  
  const formatTime = (inputTime) => {
    if (!inputTime) return "";
    return inputTime; // Zaten input type="time" 24 saat formatında çalışır
  };
  
  
  
  
  return (
    <div>
      <button onClick={handleDownloadPDF} className="download-btn">PDF İndir</button>
      <div ref={formRef} className="form-container">

        {/* EN ÜSTTEKİ LOGO VE İLETİŞİM BİLGİLERİ */}
        <div className="header-section">
          <div className="logo-container">
            <img  alt="Logo" src={logo} />
          </div>
          <div className="info-container">
            <div><strong>ÇAĞRI MERKEZİ</strong></div>
            <div className="phone-number">0552 685 81 81</div>
            <div className="address">
              Osman Gazi Mahallesi İstiklal Cd. No:49, 41700 Darıca/Kocaeli
            </div>
          </div>
        </div>

        <h2 className="title">SİPARİŞ FİŞİ</h2>

        {/* MÜŞTERİ BİLGİLERİ + KURULUM TARİHLERİ */}
        <div className="top-section">
          <div className="customer-info">
            <div><strong>MÜŞTERİ ADI:</strong><input type="text" className="width-10" /></div>
            <div><strong>ADRES:</strong><textarea rows="3" /></div>
            <div>
              <strong>TELEFON 1:</strong> <input type="text" />
              <strong> TELEFON 2:</strong> <input type="text" />
            </div>
          </div>
          <div className="date-info">
  <div>
    <label>Kurulum Tarihi</label>
    <input type="date" />
    <label>Saat</label>
    <input type="time" step="1" />
  </div>
  <div>
    <label>Bitiş Tarihi</label>
    <input type="date" />
    <label>Saat</label>
    <input type="time" step="1" />
  </div>
  <div>
    <label>İşlem Bitiş Tarihi</label>
    <input type="date" />
    <label>Saat</label>
    <input type="time" step="1" />
  </div>
</div>

        </div>

        {/* MALZEME LİSTESİ + EKSTRA BİLGİLER */}
        <div className="middle-section">
          <table className="material-table">
            <thead>
              <tr>
                <th>SIRA NO</th>
                <th>MALZEME ADI</th>
                <th>ADET</th>
                <th>TUTAR</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 15 }).map((_, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td><input type="text" /></td>
                  <td><input type="number" /></td>
                  <td><input type="number" /></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="extra-section">
            <div className="checkbox-group">
              <p>Kurulum yapılacak alan açık alan mı?</p>
              <label><input type="checkbox" /> Evet</label>
              <label><input type="checkbox" /> Hayır</label>
            </div>
            <div className="extras">
              <div>
                <label>KARŞILAMA PANOSU:</label>
                <input type="checkbox" />
                <input type="text" placeholder="Açıklama" />
              </div>
              <div>
                <label>NEON YAZI:</label>
                <input type="checkbox" />
                <input type="text" placeholder="Açıklama" />
              </div>
            </div>
            <div className="note">
              <label>MÜŞTERİ NOT:</label>
              <textarea rows="5" />
            </div>
          </div>
        </div>

        {/* ALT KISIM: DESTEK – ÖDEME – İMZA */}
        <div className="bottom-section">
          <div className="whatsapp">
            <strong>📞 24/7 WHATSAPP DESTEK</strong>
          </div>
          <div className="payment">
            <div><label>KAPORA:</label><input type="number" /></div>
            <div><label>KALAN TUTAR:</label><input type="number" /></div>
            <div><label>GENEL TUTAR:</label><input type="number" /></div>
          </div>
        </div>

        <div className="signature">
          <div>
            <label>Firma Yetkilisi Ad Soyad İmza</label>
            <textarea rows="3" />
          </div>
          <div>
            <label>Müşteri Ad Soyad İmza</label>
            <textarea rows="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
