
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Crown, Medal, Star, Users, Zap } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'xp' | 'memes' | 'streak'>('xp');

  const generateMockData = (type: string) => {
    const names = [
      'CryptoKing', 'MemeQueen', 'DiamondHands', 'ToTheMoon', 'DogeCoin',
      'PepeMaster', 'ShibaLord', 'WhalAlert', 'HODLer', 'DegenPlayer',
      'NFTFlip', 'YieldFarm', 'AlphaTrade', 'BetaBull', 'GammaGain',
      'DeltaDegen', 'EpsilonElite', 'ZetaZone', 'EtaEarn', 'ThetaThrive'
    ];

    return names.map((name, index) => ({
      rank: index + 1,
      name,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      xp: Math.floor(Math.random() * 10000) + 5000,
      memes: Math.floor(Math.random() * 100) + 10,
      streak: Math.floor(Math.random() * 30) + 1,
      level: Math.floor((Math.random() * 10000 + 5000) / 500) + 1
    })).sort((a, b) => {
      switch (type) {
        case 'xp': return b.xp - a.xp;
        case 'memes': return b.memes - a.memes;
        case 'streak': return b.streak - a.streak;
        default: return b.xp - a.xp;
      }
    });
  };

  const data = generateMockData(activeTab);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-300" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <span className="text-muted-foreground">#{rank}</span>;
    }
  };

  const getValue = (user: any) => {
    switch (activeTab) {
      case 'xp': return `${user.xp.toLocaleString()} XP`;
      case 'memes': return `${user.memes} memes`;
      case 'streak': return `${user.streak} days`;
      default: return '';
    }
  };

  return (
    <Card className="bg-card-gradient border-purple-800/30 hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-center justify-center">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <span className="text-gradient-gold">Global Leaderboard</span>
        </CardTitle>
        
        <div className="flex gap-2 justify-center">
          <Button
            variant={activeTab === 'xp' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('xp')}
            className={activeTab === 'xp' ? 'bg-crypto-gradient' : 'border-purple-800/30'}
          >
            <Zap className="w-4 h-4 mr-1" />
            XP
          </Button>
          <Button
            variant={activeTab === 'memes' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('memes')}
            className={activeTab === 'memes' ? 'bg-crypto-gradient' : 'border-purple-800/30'}
          >
            <Star className="w-4 h-4 mr-1" />
            Memes
          </Button>
          <Button
            variant={activeTab === 'streak' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTab('streak')}
            className={activeTab === 'streak' ? 'bg-crypto-gradient' : 'border-purple-800/30'}
          >
            <Users className="w-4 h-4 mr-1" />
            Streak
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {data.slice(0, 15).map((user) => (
            <div
              key={user.rank}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all hover-scale ${
                user.rank <= 3 
                  ? 'bg-gradient-to-r from-yellow-900/20 to-purple-900/20 border border-yellow-800/30' 
                  : 'bg-purple-900/10 border border-purple-800/20'
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-8">
                  {getRankIcon(user.rank)}
                </div>
                
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full bg-purple-900/20"
                />
                
                <div className="flex-1">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">Level {user.level}</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-bold text-gradient-purple">{getValue(user)}</div>
                {user.rank <= 3 && (
                  <Badge className="bg-yellow-900/30 text-yellow-400 border-yellow-800/30">
                    Top 3
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
