import Link from "next/link";
import { notFound } from "next/navigation";
import HomeNavbar from "@/components/home/HomeNavbar";
import HomeFooter from "@/components/home/HomeFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import { blogPosts, getBlogPost, type BlogSection } from "@/lib/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tanmiyat Al-Ula Blog`,
    description: post.excerpt,
  };
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={index} className="blog-post-h2">
          {section.text}
        </h2>
      );

    case "paragraph":
      return (
        <p key={index} className="blog-post-paragraph">
          {section.text}
        </p>
      );

    case "list":
      return (
        <div key={index}>
          {section.intro && (
            <p className="blog-post-list-intro">{section.intro}</p>
          )}
          <ul className="blog-post-list">
            {section.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );

    case "callout":
      return (
        <div key={index} className="blog-post-callout">
          <div className="blog-post-callout-label">{section.label}</div>
          <p className="blog-post-callout-text">{section.text}</p>
        </div>
      );

    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const [firstSection, ...restSections] = post.sections;
  const hasIntro =
    firstSection?.type === "paragraph";

  return (
    <div className="blog-post-page">
      <HomeNavbar />

      {/* Post Hero */}
      <section className="blog-post-hero">
        <div className="blog-post-hero-inner">
          <div className="blog-post-breadcrumb">
            <Link href="/blog">Blog</Link>
            <span className="blog-post-breadcrumb-sep">›</span>
            <span>{post.category}</span>
          </div>
          <span className="blog-post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.date}</span>
            <span className="blog-post-meta-sep">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <div className="blog-post-image-wrap">
        <img
          src={post.image}
          alt={post.title}
          className="blog-post-feature-image"
        />
      </div>

      {/* Article */}
      <article className="blog-post-article">
        {hasIntro && (
          <p className="blog-post-intro">{firstSection.text}</p>
        )}
        {(hasIntro ? restSections : post.sections).map(renderSection)}
      </article>

      {/* CTA */}
      <div className="blog-post-cta">
        <h2>Ready to protect your property?</h2>
        <p>
          Schedule a professional inspection or start a maintenance subscription
          tailored to your property's needs.
        </p>
        <div className="blog-cta-actions">
          <a
            href="https://app.getmaintainx.com/request-portal/09eddadb-48ae-451b-b87b-9788072c6fe8"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-cta-primary"
          >
            Request a Service
          </a>
          <Link href="/plans" className="blog-cta-secondary">
            View Maintenance Plans
          </Link>
        </div>
      </div>

      {/* More Posts */}
      {otherPosts.length > 0 && (
        <section className="blog-more-section">
          <div className="container">
            <h2 className="blog-more-heading">More from the Blog</h2>
            <div className="blog-more-grid">
              {otherPosts.map((p) => (
                <article key={p.slug} className="blog-card">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="blog-card-image"
                  />
                  <div className="blog-card-body">
                    <span className="blog-card-category">{p.category}</span>
                    <h2 className="blog-card-title">{p.title}</h2>
                    <p className="blog-card-excerpt">{p.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="blog-card-meta">
                        <span>{p.date}</span>
                        <span>{p.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${p.slug}`}
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
      )}

      <HomeFooter />
      <WhatsAppFloat />
    </div>
  );
}
