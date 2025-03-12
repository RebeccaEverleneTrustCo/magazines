// app/api/articles/route.ts
import { NextResponse } from 'next/server';
import youngKidsData from '@/public/youngKidsData.json'; // Adjust path
import middleSchoolData from '@/public/middleSchoolData.json'; // Adjust path
import parentsData from '@/public/parentsData.json'; // Adjust path
import { IArticle } from '@/app/__mock__/articleDataFormat.ts';

export async function GET() {
  // Combine all data sources
  const allArticles: IArticle[] = [
    ...youngKidsData,
    ...middleSchoolData,
    ...parentsData,
  ];

  return NextResponse.json(allArticles);
}