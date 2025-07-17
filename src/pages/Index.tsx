
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Wallet, 
  Upload, 
  Trophy, 
  Users, 
  Zap, 
  Star, 
  Calendar,
  Share2,
  Coins,
  Rocket,
  Target,
  Gift,
  Crown,
  Flame
} from 'lucide-react';
import WalletConnection from '@/components/WalletConnection';
import MemeUploader from '@/components/MemeUploader';
import DailyCheckIn from '@/components/DailyCheckIn';
import BadgeTracker from '@/components/BadgeTracker';
import Leaderboard from '@/components/Leaderboard';
import ReferralTracker from '@/components/ReferralTracker';
import SocialEmbeds from '@/components/SocialEmbeds';
import CountdownTimer from '@/components/CountdownTimer';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [userXP, setUserXP] = useState(1250);
  const [userLevel, setUserLevel] = useState(5);
  const [dailyStreak, setDailyStreak] = useState(7);

  const handleWalletConnect = (connected: boolean) => {
    setWalletConnected(connected);
  };

  const addXP = (amount: number) => {
    setUserXP(prev => prev + amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-crypto-gradient opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-purple">
              MEME WARRIOR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The ultimate meme coin experience. Upload, earn, compete, and dominate the meme economy.
            </p>
          </div>

          <CountdownTimer />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <WalletConnection onConnect={handleWalletConnect} />
            <Button size="lg" className="bg-gaming-gradient hover:glow-pink hover-scale">
              <Rocket className="w-5 h-5 mr-2" />
              Join Waitlist
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Warriors", value: "12,547", color: "text-blue-400" },
              { icon: Trophy, label: "Memes Created", value: "89,234", color: "text-purple-400" },
              { icon: Coins, label: "XP Earned", value: "2.1M", color: "text-yellow-400" },
              { icon: Flame, label: "Daily Streak", value: "365 days", color: "text-red-400" }
            ].map((stat, index) => (
              <Card key={index} className="bg-card-gradient border-purple-800/30 hover-glow hover-scale">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gradient-gold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Dashboard */}
      {walletConnected && (
        <section className="py-20 px-4 bg-gradient-to-br from-blue-950/20 via-background to-purple-950/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                <Zap className="w-3 h-3 mr-1" />
                DASHBOARD
              </Badge>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Command Center
              </h2>
              <p className="text-xl text-muted-foreground">Your journey to meme mastery starts here</p>
            </div>

            {/* Simplified Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-gradient-to-br from-background/80 to-yellow-950/20 border-yellow-500/30 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-4xl font-bold text-gradient-gold mb-2">Level {userLevel}</div>
                    <div className="text-sm text-muted-foreground mb-4">{userXP} / {(userLevel + 1) * 500} XP</div>
                    <Progress value={(userXP % 500) / 5} className="h-2" />
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-gradient-to-br from-background/80 to-red-950/20 border-red-500/30 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Flame className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-red-400 mb-2">{dailyStreak}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-gradient-to-br from-background/80 to-purple-950/20 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gradient-purple mb-2">#47</div>
                    <div className="text-sm text-muted-foreground">Global Rank</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <DailyCheckIn onCheckIn={() => addXP(50)} />
              <MemeUploader onUpload={() => addXP(100)} />
            </div>
          </div>
        </section>
      )}

      {/* Badge Collection */}
      <section className="py-32 px-4 bg-gradient-to-r from-amber-950/10 via-background to-yellow-950/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-sm px-4 py-2">
                  <Trophy className="w-4 h-4 mr-2" />
                  ACHIEVEMENT SYSTEM
                </Badge>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent leading-tight">
                  Legendary<br />Achievements
                </h2>
                <p className="text-2xl text-muted-foreground leading-relaxed">
                  Collect rare badges, unlock exclusive rewards, and showcase your meme mastery to the world.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div className="text-3xl font-bold text-amber-400">24</div>
                  <div className="text-sm text-muted-foreground">Total Badges</div>
                </div>
                <div className="p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-400">7</div>
                  <div className="text-sm text-muted-foreground">Unlocked</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <BadgeTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Referral Campaign */}
      <section className="py-32 px-4 bg-gradient-to-l from-emerald-950/10 via-background to-green-950/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-sm px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  NETWORK BUILDING
                </Badge>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                  Referral<br />Empire
                </h2>
                <p className="text-2xl text-muted-foreground leading-relaxed">
                  Build your warrior network, earn massive bonuses, and climb the referral ranks.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-3xl font-bold text-emerald-400">156</div>
                  <div className="text-sm text-muted-foreground">Referrals</div>
                </div>
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400">2.4k</div>
                  <div className="text-sm text-muted-foreground">Bonus XP</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <ReferralTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-blue-950/20 to-indigo-950/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 text-lg px-6 py-3">
              <Crown className="w-5 h-5 mr-2" />
              HALL OF LEGENDS
            </Badge>
            <h2 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Global Rankings
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Battle for supremacy and claim your place among the greatest meme warriors in history
            </p>
          </div>
          <Leaderboard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-card-gradient rounded-2xl p-12 border border-purple-800/30 hover-glow">
            <h2 className="text-4xl font-bold text-gradient-purple mb-6">Ready to Become a Meme Warrior?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the revolution and start earning XP, collecting badges, and climbing the leaderboard today!
            </p>
            {!walletConnected ? (
              <WalletConnection onConnect={handleWalletConnect} />
            ) : (
              <Button size="lg" className="bg-gaming-gradient hover:glow-pink hover-scale">
                <Target className="w-5 h-5 mr-2" />
                Start Your Quest
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
