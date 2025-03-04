"use client";

function ArticleDetailCard({
    description,
    isFavorite,
    isReading,
  }: {
    description: string;
    isFavorite: boolean;
    isReading: boolean;
  }) {
    return (
      <div className="article-detail-card">
        <h1>Article Details</h1>
        <p>{description}</p>
        {/* Render other article details as necessary */}
      </div>
    );
  }
  
  export default ArticleDetailCard;