import Link from "next/link";
import HomeNavbar from "@/components/home/HomeNavbar";
import HomeFooter from "@/components/home/HomeFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Tanmiyat Al-Ula",
  description:
    "Expert insights on property maintenance, building systems, and real estate management in Saudi Arabia.",
};

export default function BlogPage() {
  return (
    <div className="blog-page">
      <HomeNavbar />

      {/* Hero */}
      <section className="blog-hero">
        <div className="container">
          <span className="blog-hero-eyebrow">Insights & Expertise</span>
          <h1>
            Property Maintenance
            <br />
            <span>Insights for Saudi Arabia</span>
          </h1>
          <p className="blog-hero-sub">
            Expert perspectives on property care, building systems, and real
            estate management across the Kingdom.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
                <div className="blog-card-body">
                  <span className="blog-card-category">{post.category}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-card-meta">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="blog-read-link"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
      <WhatsAppFloat />
    </div>
  );
}
