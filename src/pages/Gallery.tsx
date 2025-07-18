import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Download, 
  Trophy,
  Eye,
  ArrowLeft,
  Filter,
  TrendingUp
} from 'lucide-react';
import Navigation from '@/components/Navigation';

interface Meme {
  id: string;
  title: string;
  imageUrl: string;
  author: string;
  likes: number;
  comments: number;
  views: number;
  uploadDate: string;
  tags: string[];
  isLiked: boolean;
}

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'trending' | 'recent'>('all');
  
  // Mock meme data
  const [memes] = useState<Meme[]>([
    {
      id: '1',
      title: 'When you finally understand React hooks',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      author: 'CodeMaster',
      likes: 1247,
      comments: 89,
      views: 5430,
      uploadDate: '2h ago',
      tags: ['react', 'programming', 'funny'],
      isLiked: false
    },
    {
      id: '2',
      title: 'Debugging at 3 AM be like',
      imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      author: 'NightCoder',
      likes: 892,
      comments: 56,
      views: 3210,
      uploadDate: '4h ago',
      tags: ['debugging', 'late-night', 'relatable'],
      isLiked: true
    },
    {
      id: '3',
      title: 'CSS Grid finally makes sense',
      imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
      author: 'GridLord',
      likes: 2103,
      comments: 134,
      views: 8765,
      uploadDate: '1d ago',
      tags: ['css', 'grid', 'layout'],
      isLiked: false
    },
    // Add more mock data
    {
      id: '4',
      title: 'When your code works on first try',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      author: 'LuckyDev',
      likes: 3456,
      comments: 201,
      views: 12340,
      uploadDate: '2d ago',
      tags: ['miracle', 'coding', 'success'],
      isLiked: true
    }
  ]);

  const filteredMemes = memes.filter(meme => {
    if (filter === 'trending') return meme.likes > 1000;
    if (filter === 'recent') return meme.uploadDate.includes('h ago');
    return true;
  });

  const handleLike = (memeId: string) => {
    // Implementation would update the like status
    console.log('Liked meme:', memeId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gradient-purple">Meme Gallery</h1>
              <p className="text-muted-foreground">Discover the best memes from our community</p>
            </div>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              <Filter className="w-4 h-4 mr-2" />
              All
            </Button>
            <Button
              variant={filter === 'trending' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('trending')}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending
            </Button>
            <Button
              variant={filter === 'recent' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('recent')}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Recent
            </Button>
          </div>
        </div>

        {/* Meme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMemes.map((meme) => (
            <Card key={meme.id} className="group hover:shadow-lg transition-all duration-300 hover-scale bg-card/50 backdrop-blur border-purple-800/30">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={meme.imageUrl}
                    alt={meme.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    {meme.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                      {meme.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      by {meme.author} • {meme.uploadDate}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className={`w-3 h-3 ${meme.isLiked ? 'text-red-500 fill-red-500' : ''}`} />
                        {meme.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {meme.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {meme.views.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 h-8"
                      onClick={() => handleLike(meme.id)}
                    >
                      <Heart className={`w-3 h-3 mr-1 ${meme.isLiked ? 'text-red-500 fill-red-500' : ''}`} />
                      Like
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 h-8">
                      <Share2 className="w-3 h-3 mr-1" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Download className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="hover:bg-purple-800/20">
            Load More Memes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;