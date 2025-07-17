
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

  return (
    <Card className="bg-card-gradient border-purple-800/30 hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          Badge Collection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {badges.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-lg border ${getRarityBg(badge.rarity)} ${
                  badge.earned ? 'opacity-100' : 'opacity-60'
                } hover-scale`}
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
                    <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
                    {!badge.earned && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span className={getRarityColor(badge.rarity)}>{badge.progress}%</span>
                        </div>
                        <Progress 
                          value={badge.progress} 
                          className="h-2"
                        />
                      </div>
                    )}
                    {badge.earned && (
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <Star className="w-3 h-3" />
                        <span>Earned</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BadgeTracker;
