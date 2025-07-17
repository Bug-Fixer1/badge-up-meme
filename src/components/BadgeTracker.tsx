
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, Crown, Shield, Zap, Target } from 'lucide-react';

const BadgeTracker: React.FC = () => {
  const badges = [
    {
      id: 1,
      name: 'First Meme',
      description: 'Upload your first meme',
      icon: Star,
      earned: true,
      progress: 100,
      rarity: 'common'
    },
    {
      id: 2,
      name: 'Streak Master',
      description: 'Complete 7-day check-in streak',
      icon: Trophy,
      earned: true,
      progress: 100,
      rarity: 'uncommon'
    },
    {
      id: 3,
      name: 'Viral Creator',
      description: 'Get 1000 likes on a meme',
      icon: Zap,
      earned: false,
      progress: 65,
      rarity: 'rare'
    },
    {
      id: 4,
      name: 'Community Champion',
      description: 'Refer 10 friends',
      icon: Crown,
      earned: false,
      progress: 30,
      rarity: 'epic'
    },
    {
      id: 5,
      name: 'Whale Status',
      description: 'Hold 1M+ tokens',
      icon: Shield,
      earned: false,
      progress: 0,
      rarity: 'legendary'
    },
    {
      id: 6,
      name: 'Perfect Score',
      description: 'Win 10 competitions',
      icon: Target,
      earned: false,
      progress: 10,
      rarity: 'legendary'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-900/20 border-gray-800/30';
      case 'uncommon': return 'bg-green-900/20 border-green-800/30';
      case 'rare': return 'bg-blue-900/20 border-blue-800/30';
      case 'epic': return 'bg-purple-900/20 border-purple-800/30';
      case 'legendary': return 'bg-yellow-900/20 border-yellow-800/30';
      default: return 'bg-gray-900/20 border-gray-800/30';
    }
  };

  const earnedBadges = badges.filter(badge => badge.earned);
  const unearnedBadges = badges.filter(badge => !badge.earned);

  return (
    <Card className="bg-card-gradient border-purple-800/30 hover-glow overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-purple-800/30">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-gradient-purple">Badge Collection</span>
          </div>
          <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
            {earnedBadges.length}/{badges.length} Earned
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {/* Earned Badges Section */}
        {earnedBadges.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-green-400 mb-3 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Earned Badges
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {earnedBadges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={badge.id}
                    className={`relative p-4 rounded-xl border-2 ${getRarityBg(badge.rarity)} hover-scale group cursor-pointer`}
                  >
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                      <Star className="w-2.5 h-2.5 text-black" />
                    </div>
                    <div className="text-center">
                      <div className={`p-3 rounded-lg ${getRarityBg(badge.rarity)} mx-auto w-fit mb-2`}>
                        <IconComponent className={`w-8 h-8 ${getRarityColor(badge.rarity)}`} />
                      </div>
                      <h5 className="font-medium text-sm mb-1">{badge.name}</h5>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getRarityColor(badge.rarity)} border-current`}
                      >
                        {badge.rarity}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Progress Badges Section */}
        {unearnedBadges.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              In Progress
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unearnedBadges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-lg border ${getRarityBg(badge.rarity)} opacity-80 hover:opacity-100 transition-opacity hover-scale`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${getRarityBg(badge.rarity)}`}>
                        <IconComponent className={`w-6 h-6 ${getRarityColor(badge.rarity)}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium truncate">{badge.name}</h4>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getRarityColor(badge.rarity)} border-current`}
                          >
                            {badge.rarity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Progress</span>
                            <span className={getRarityColor(badge.rarity)}>{badge.progress}%</span>
                          </div>
                          <Progress 
                            value={badge.progress} 
                            className="h-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BadgeTracker;
