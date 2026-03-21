import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import DotGrid from "@/components/shared/DotGrid";
import { blogArticles } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = article.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", article.metaDescription);
    }
    return () => {
      document.title = "Internwise 2.0 - Your Internship Specialist Since 2010";
    };
  }, [article]);

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-navy mb-4">Article Not Found</h1>
            <p className="font-body text-foreground/60 mb-8">The article you are looking for does not exist.</p>
            <Link to="/blog" className="text-coral font-semibold font-body hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-28 pb-24 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
        <DotGrid />
      </section>

      {/* Article card */}
      <Container className="relative z-10 -mt-16 pb-24">
        <article className="max-w-3xl mx-auto bg-background rounded-2xl shadow-xl p-5 sm:p-8 lg:p-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-foreground/50 hover:text-navy transition-colors mb-6"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 text-xs font-body text-foreground/40 mb-4">
            <span className="text-sky font-semibold uppercase tracking-wider">{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span>{article.readTime} read</span>
          </div>

          <h1 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">
            {article.title}
          </h1>

          {/* Article image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-auto"
            />
          </div>

          <blockquote className="border-l-4 border-coral pl-4 text-foreground/60 font-body italic mb-10">
            {article.excerpt}
          </blockquote>

          <div
            className="prose-internwise"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </Container>

      <Footer />
    </>
  );
};

export default BlogPost;
