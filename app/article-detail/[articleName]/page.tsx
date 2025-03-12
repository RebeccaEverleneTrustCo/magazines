
"use client";

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from "next/image";
import { useParams } from 'next/navigation';
import { API_URLS } from '@/app/appConstants/apiUrlContants';
import { IArticle } from '@/app/__mock__/articleDataFormat.ts';
import ArticleDetail from '../../components/articleDetailsCards/ArticleDetail';
interface ArticleDetailsProps {
    params: { articleName: string, img: StaticImageData };
}

const ArticleDetailsCards: React.FC<ArticleDetailsProps> = ({ params }) => {
    const { articleName } = params;
    const [article, setArticle] = useState<IArticle | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await fetch('/api/articles'); // Single endpoint

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data: IArticle[] = await response.json();

                // Decode the article name to match against the data
                const decodedArticleName = decodeURIComponent(articleName);
                const foundArticle = data.find(
                    (item) => item.name === decodedArticleName
                );

                if (foundArticle) {
                    setArticle(foundArticle);
                } else {
                    setError('Article not found');
                }
            } catch (e: any) {
                setError(e.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchArticleDetails();
    }, [articleName]);

    if (loading) {
        return <p>Loading article details...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!article) {
        return <p>Article not found.</p>;
    }

    return (
        <ArticleDetail article={article} src ={article.img} />
    );
};

export default ArticleDetailsCards;
