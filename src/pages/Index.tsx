
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
        <div className="absolute inset-0 bg-crypto-gradient opacity-10 animate-glow-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-purple animate-fade-in-down">
              MEME WARRIOR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              The ultimate meme coin experience. Upload, earn, compete, and dominate the meme economy.
            </p>
          </div>

          <div className="animate-scale-in animation-delay-500">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-700">
            <WalletConnection onConnect={handleWalletConnect} />
            <Button size="lg" className="bg-gaming-gradient hover:glow-pink hover-scale animate-glow-pulse">
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
              <Card 
                key={index} 
                className={`bg-card-gradient border-purple-800/30 hover-glow hover-scale animate-fade-in-up`}
                style={{ animationDelay: `${900 + index * 150}ms` }}
              >
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
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 animate-scale-in">
                <Zap className="w-3 h-3 mr-1" />
                DASHBOARD
              </Badge>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-down">
                Command Center
              </h2>
              <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-300">Your journey to meme mastery starts here</p>
            </div>

            {/* Simplified Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="relative group animate-fade-in-left animation-delay-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-gradient-to-br from-background/80 to-yellow-950/20 border-yellow-500/30 backdrop-blur-sm hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <Star className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-4xl font-bold text-gradient-gold mb-2">Level {userLevel}</div>
                    <div className="text-sm text-muted-foreground mb-4">{userXP} / {(userLevel + 1) * 500} XP</div>
                    <Progress value={(userXP % 500) / 5} className="h-2" />
                  </CardContent>
                </Card>
              </div>

              <div className="relative group animate-scale-in animation-delay-700">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-gradient-to-br from-background/80 to-red-950/20 border-red-500/30 backdrop-blur-sm hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <Flame className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-red-400 mb-2">{dailyStreak}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group animate-fade-in-right animation-delay-900">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
                <Card className="relative bg-gradient-to-br from-background/80 to-purple-950/20 border-purple-500/30 backdrop-blur-sm hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gradient-purple mb-2">#47</div>
                    <div className="text-sm text-muted-foreground">Global Rank</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="animate-slide-up animation-delay-1100">
                <DailyCheckIn onCheckIn={() => addXP(50)} />
              </div>
              <div className="animate-slide-up animation-delay-1300">
                <MemeUploader onUpload={() => addXP(100)} />
              </div>
              <div className="animate-slide-up animation-delay-1400 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-purple-400" />
                    <h3 className="text-lg font-semibold">Level {userLevel}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>XP Progress</span>
                      <span>{userXP}/2000</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gaming-gradient h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${(userXP / 2000) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Next reward: Legendary Badge
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Badge Collection */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-950/10 via-background to-yellow-950/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5 space-y-6">
              <div className="space-y-3">
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs px-3 py-1">
                  <Trophy className="w-3 h-3 mr-1" />
                  BADGE COLLECTION
                </Badge>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent leading-tight">
                  Achievement<br />System
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Collect rare badges and showcase your meme mastery.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <div className="text-2xl font-bold text-amber-400">24</div>
                  <div className="text-xs text-muted-foreground">Total Badges</div>
                </div>
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-2xl font-bold text-yellow-400">7</div>
                  <div className="text-xs text-muted-foreground">Unlocked</div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5">
              <BadgeTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Referral Campaign */}
      <section className="py-16 px-4 bg-gradient-to-l from-green-950/10 via-background to-emerald-950/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-2/5 space-y-6">
              <div className="space-y-3">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs px-3 py-1">
                  <Users className="w-3 h-3 mr-1" />
                  REFERRALS
                </Badge>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                  Invite &<br />Earn
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Invite friends and earn rewards together.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <div className="text-xl font-bold text-emerald-400">12</div>
                  <div className="text-xs text-muted-foreground">Invited</div>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                  <div className="text-xl font-bold text-green-400">8</div>
                  <div className="text-xs text-muted-foreground">Joined</div>
                </div>
                <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 text-center">
                  <div className="text-xl font-bold text-teal-400">420</div>
                  <div className="text-xs text-muted-foreground">XP</div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5">
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
