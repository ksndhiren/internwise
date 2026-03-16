import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import SectionLabel from "@/components/shared/SectionLabel";
import SectionHeading from "@/components/shared/SectionHeading";
import DotGrid from "@/components/shared/DotGrid";
import BlobDecoration from "@/components/shared/BlobDecoration";
import { blogArticles } from "@/data/blogPosts";

const Blog = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="relative pt-28 pb-24 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
      <DotGrid />
      <BlobDecoration color="sky" className="w-96 h-96 -top-20 -right-48" />
      <Container className="relative z-10 text-center">
        <SectionLabel>Insights & Guidance</SectionLabel>
        <SectionHeading light className="mt-4 mb-4">Internwise Blog</SectionHeading>
        <p className="text-white/60 font-body max-w-xl mx-auto">
          Practical advice, industry insights, and career guidance for graduates and employers navigating the internship landscape.
        </p>
      </Container>
    </section>

    {/* Articles Grid */}
    <section className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Article image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-body text-foreground/40 mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground/20" />
                  <span>{article.readTime} read</span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy group-hover:text-sky transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm font-body text-foreground/60 line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-coral text-sm font-semibold font-body">
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>

    <Footer />
  </>
);

export default Blog;
