const Contact = () => {
  return (
    <section className="contact" id="iletisim">
      <div className="contact-container">
        <h2>İletişime Geçin</h2>
        <div className="contact-form">
          <input type="text" placeholder="Adınız" />
          <input type="email" placeholder="E-posta" />
          <input type="tel" placeholder="Telefon" />
          <textarea placeholder="Mesajınız"></textarea>
          <button type="submit">Gönder</button>
        </div>
      </div>
    </section>
  );
};

export default Contact; 