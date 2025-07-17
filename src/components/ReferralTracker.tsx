
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Share2, Copy, Gift, Users, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReferralTracker: React.FC = () => {
  const [referralCode] = useState('WARRIOR47');
  const [referrals] = useState(12);
  const [totalEarned] = useState(1200);
  const { toast } = useToast();

  const referralUrl = `https://memewarrior.com/join?ref=${referralCode}`;

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralUrl);
    toast({
      title: "Link Copied! 🎯",
      description: "Share this link to earn rewards!",
    });
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent("🚀 Join me on Meme Warrior and start earning XP! Use my referral code for bonus rewards 💎");
    const url = encodeURIComponent(referralUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const tiers = [
    { name: 'Bronze Recruiter', required: 5, reward: '50 XP per referral', color: 'text-amber-600' },
    { name: 'Silver Recruiter', required: 10, reward: '75 XP per referral', color: 'text-gray-300' },
    { name: 'Gold Recruiter', required: 25, reward: '100 XP per referral', color: 'text-yellow-400' },
    { name: 'Diamond Recruiter', required: 50, reward: '150 XP per referral', color: 'text-blue-400' },
    { name: 'Legendary Recruiter', required: 100, reward: '200 XP per referral', color: 'text-purple-400' }
  ];

  const currentTier = tiers.find(tier => referrals >= tier.required) || tiers[0];
  const nextTier = tiers.find(tier => referrals < tier.required);

  return (
    <Card className="bg-card-gradient border-purple-800/30 hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="w-5 h-5 text-green-400" />
          Referral Campaign
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
            <div className="text-2xl font-bold text-gradient-gold">{referrals}</div>
            <div className="text-sm text-muted-foreground">Referrals</div>
          </div>
          <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
            <div className="text-2xl font-bold text-gradient-purple">{totalEarned}</div>
            <div className="text-sm text-muted-foreground">XP Earned</div>
          </div>
        </div>

        {/* Current Tier */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Current Tier</span>
            <Badge className={`${currentTier.color} bg-purple-900/30`}>
              {currentTier.name}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">{currentTier.reward}</div>
        </div>

        {/* Progress to Next Tier */}
        {nextTier && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to {nextTier.name}</span>
              <span className="text-purple-400">{referrals}/{nextTier.required}</span>
            </div>
            <Progress 
              value={(referrals / nextTier.required) * 100} 
              className="h-3"
            />
            <div className="text-xs text-muted-foreground">
              {nextTier.required - referrals} more referrals needed
            </div>
          </div>
        )}

        {/* Referral Link */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Your Referral Link</h4>
          <div className="flex gap-2">
            <Input
              value={referralUrl}
              readOnly
              className="bg-purple-900/20 border-purple-800/30 text-sm"
            />
            <Button
              size="sm"
              onClick={copyReferralLink}
              className="bg-crypto-gradient hover:glow-blue"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={shareToTwitter}
            className="bg-blue-600 hover:bg-blue-700 hover:glow-blue"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Tweet Link
          </Button>
          <Button
            onClick={copyReferralLink}
            variant="outline"
            className="border-purple-800/30 hover:bg-purple-800/20"
          >
            <Gift className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
        </div>

        {/* Referral Rewards */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">How it Works</h4>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-400" />
              <span>Friend joins with your link</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-purple-400" />
              <span>You both get bonus XP</span>
            </div>
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-blue-400" />
              <span>Unlock higher reward tiers</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralTracker;
