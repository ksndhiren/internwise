import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import DotGrid from "@/components/shared/DotGrid";
import BlobDecoration from "@/components/shared/BlobDecoration";
import { blogArticles } from "@/data/blogPosts";

const Blog = () => {
  const featured = blogArticles[0];
  const rest = blogArticles.slice(1);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
        <DotGrid />
        <BlobDecoration color="sky" className="w-96 h-96 -top-20 -right-48" />
        <Container className="relative z-10 text-center">
          <SectionLabel>Insights &amp; Guidance</SectionLabel>
          <SectionHeading light className="mt-4 mb-4">Internwise Blog</SectionHeading>
          <p className="text-white/60 font-body max-w-xl mx-auto">
            Practical advice, industry insights, and career guidance for graduates and employers navigating the internship landscape.
          </p>
        </Container>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <Container>
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 md:gap-12 bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-sky/10 text-sky font-body text-xs font-medium px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="font-body text-xs text-foreground/50">
                  {featured.date}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy tracking-tight mb-4 group-hover:text-sky transition-colors">
                {featured.title}
              </h2>
              <p className="font-body text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 text-coral text-sm font-semibold font-body">
                  Read article <ArrowRight size={14} />
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-foreground/40 font-body">
                  <Clock size={12} /> {featured.readTime} read
                </span>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* More Articles */}
      {rest.length > 0 && (
        <section className="pb-24 bg-background">
          <Container>
            <h3 className="font-display text-xl font-bold text-navy mb-8">More Articles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-sky/10 text-sky font-body text-xs font-medium px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="font-body text-xs text-foreground/40">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy group-hover:text-sky transition-colors mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm font-body text-foreground/60 line-clamp-3 mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <span className="inline-flex items-center gap-1 text-coral text-sm font-semibold font-body">
                        Read more <ArrowRight size={14} />
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-foreground/40 font-body">
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Blog;
