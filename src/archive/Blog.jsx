import React from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    title: "Understanding MAKO Robotic-Arm Assisted Joint Replacement",
    category: "Robotic Surgery",
    date: "April 2, 2026",
    excerpt: "The integration of CT-derived 3D modeling with robotic assistance ensures sub-millimeter accuracy, significantly reducing post-operative pain and accelerating the rehabilitation timeline.",
    author: "Dr. Amith Reddy"
  },
  {
    title: "Direct Anterior Approach vs. Traditional Hip Replacement",
    category: "Advanced Arthroplasty",
    date: "March 18, 2026",
    excerpt: "By exploiting a natural internervous and intermuscular plane, the Direct Anterior Approach bypasses the need to detach tendons, revolutionizing early mobilization.",
    author: "Dr. Nitish Bhan"
  },
  {
    title: "Is Exosome Therapy the Future of Cartilage Restoration?",
    category: "Orthobiologics",
    date: "March 05, 2026",
    excerpt: "Exploring the clinical efficacy of cell-derived nanovesicles in modulating joint inflammation and promoting native chondrocyte proliferation in early-stage osteoarthritis.",
    author: "Dr. B. Harsha Vardhana Reddy"
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Precision Orthopaedics Clinical Updates",
          "publisher": {
            "@type": "MedicalOrganization",
            "name": "Precision Orthopaedics"
          }
        })}
      </script>

      <section className="blog-hero">
        <div className="container text-center">
          <h1>Clinical Updates & AEO Medical Hub</h1>
          <p className="hero-subtext">Peer-reviewed insights, technological advancements, and rehabilitative guides authored directly by our international faculty.</p>
        </div>
      </section>

      <section className="blog-content container mt-xl mb-xl">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date"><Calendar size={14}/> {post.date}</span>
              </div>
              <h2>{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-author"><BookOpen size={14} /> {post.author}</span>
                <button className="read-more">Read Insight <ArrowRight size={14}/></button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
