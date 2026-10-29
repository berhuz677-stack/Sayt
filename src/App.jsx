import "./App.css";

function App() {
  return (
    <div className="shop">
      <header className="navbar">
        <h1 className="logo">BEK<span>SHOP</span></h1>

        <nav>
          <a href="#home">Bosh sahifa</a>
          <a href="#products">Mahsulotlar</a>
          <a href="#categories">Kategoriyalar</a>
          <a href="#contact">Aloqa</a>
        </nav>

        <a href="#products" className="cart">🛒 Savatcha</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="subtitle">YANGI KOLLEKSIYA</p>
          <h2>Eng yaxshi<br />mahsulotlar <span>shu yerda!</span></h2>
          <p className="description">
            Sifatli mahsulotlar, hamyonbop narxlar va zamonaviy dizayn.
            O'zingizga yoqqan mahsulotni tanlang!
          </p>
          <a href="#products" className="shop-btn">Xarid qilish →</a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
            alt="Sport oyoq kiyimi"
          />
        </div>
      </section>

      <section className="categories" id="categories">
        <h2>Kategoriyalar</h2>

        <div className="category-list">
          <div className="category">
            <span>👟</span>
            <h3>Oyoq kiyim</h3>
          </div>

          <div className="category">
            <span>👕</span>
            <h3>Kiyimlar</h3>
          </div>

          <div className="category">
            <span>⌚</span>
            <h3>Aksessuarlar</h3>
          </div>

          <div className="category">
            <span>🎧</span>
            <h3>Elektronika</h3>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="section-title">
          <div>
            <p className="subtitle">BIZNING DO'KON</p>
            <h2>Mashhur mahsulotlar</h2>
          </div>

          <a href="#products" className="all-products">
            Barchasini ko'rish →
          </a>
        </div>

        <div className="product-list">
          <div className="product-card">
            <div className="product-image">
              <span className="badge">Yangi</span>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                alt="Sport krossovka"
              />
            </div>

            <div className="product-info">
              <p>OYOQ KIYIM</p>
              <h3>Sport krossovka</h3>
              <div className="price-row">
                <strong>450 000 so'm</strong>
                <a href="#contact" className="add-btn">+</a>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
                alt="Oq futbolka"
              />
            </div>

            <div className="product-info">
              <p>KIYIMLAR</p>
              <h3>Oq futbolka</h3>
              <div className="price-row">
                <strong>120 000 so'm</strong>
                <a href="#contact" className="add-btn">+</a>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <span className="badge">TOP</span>
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                alt="Qo'l soati"
              />
            </div>

            <div className="product-info">
              <p>AKSESSUARLAR</p>
              <h3>Zamonaviy soat</h3>
              <div className="price-row">
                <strong>280 000 so'm</strong>
                <a href="#contact" className="add-btn">+</a>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                alt="Quloqchin"
              />
            </div>

            <div className="product-info">
              <p>ELEKTRONIKA</p>
              <h3>Premium quloqchin</h3>
              <div className="price-row">
                <strong>350 000 so'm</strong>
                <a href="#contact" className="add-btn">+</a>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500"
                alt="Fotoapparat"
              />
            </div>

            <div className="product-info">
              <p>ELEKTRONIKA</p>
              <h3>Fotoapparat</h3>
              <div className="price-row">
                <strong>2 500 000 so'm</strong>
                <a href="#contact" className="add-btn">+</a>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
                alt="Quloqchin"
              />
            </div>

            <div className="product-info">
              <p>ELEKTRONIKA</p>
              <h3>Wireless Headphones</h3>
              <div className="price-row">
                <strong>650 000 so'm</strong>
                <a href="#contact" className="add-btn">+</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discount">
        <div>
          <p>MAXSUS TAKLIF 🔥</p>
          <h2>Birinchi xaridingizga 20% chegirma!</h2>
          <span>O'zingizga yoqqan mahsulotlarni tanlang.</span>
        </div>

        <a href="#products">Xarid qilish →</a>
      </section>

      <footer id="contact">
        <h2 className="logo">BEK<span>SHOP</span></h2>
        <p>Sifatli mahsulotlar — qulay narxlar.</p>
        <p className="copyright">© 2026 BEKSHOP. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}

export default App;