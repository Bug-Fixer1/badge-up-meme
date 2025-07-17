
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Gift, Flame } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DailyCheckInProps {
  onCheckIn: () => void;
}

const DailyCheckIn: React.FC<DailyCheckInProps> = ({ onCheckIn }) => {
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const [streak, setStreak] = useState(7);
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already checked in today (mock implementation)
    const lastCheckIn = localStorage.getItem('lastCheckIn');
    const today = new Date().toDateString();
    
    if (lastCheckIn === today) {
      setHasCheckedIn(true);
    }
  }, []);

  const handleCheckIn = async () => {
    setIsChecking(true);
    
    setTimeout(() => {
      setHasCheckedIn(true);
      setStreak(prev => prev + 1);
      setIsChecking(false);
      onCheckIn();
      
      // Store check-in date
      localStorage.setItem('lastCheckIn', new Date().toDateString());
      
      toast({
        title: "Daily Check-in Complete! 🎉",
        description: `+50 XP earned! Streak: ${streak + 1} days`,
      });
    }, 1500);
  };

  const rewards = [
    { day: 1, reward: '50 XP', type: 'xp' },
    { day: 3, reward: 'Bronze Badge', type: 'badge' },
    { day: 7, reward: '200 XP', type: 'xp' },
    { day: 14, reward: 'Silver Badge', type: 'badge' },
    { day: 30, reward: 'Gold Badge', type: 'badge' }
  ];

  return (
    <Card className="bg-card-gradient border-purple-800/30 hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-400" />
          Daily Check-in
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-2xl font-bold text-gradient-gold">{streak}</span>
            <span className="text-muted-foreground">day streak</span>
          </div>
          <Badge variant="secondary" className="bg-purple-900/30">
            Level {Math.floor(streak / 7) + 1}
          </Badge>
        </div>

        <Button
          onClick={handleCheckIn}
          disabled={hasCheckedIn || isChecking}
          className="w-full bg-crypto-gradient hover:glow-blue"
        >
          <Gift className="w-4 h-4 mr-2" />
          {hasCheckedIn 
            ? 'Checked in today ✓' 
            : isChecking 
            ? 'Checking in...' 
            : 'Check in for 50 XP'
          }
        </Button>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Streak Rewards</h4>
          <div className="grid grid-cols-1 gap-2">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 rounded-lg text-sm ${
                  streak >= reward.day 
                    ? 'bg-green-900/20 border border-green-800/30' 
                    : 'bg-purple-900/10 border border-purple-800/20'
                }`}
              >
                <span>Day {reward.day}</span>
                <Badge 
                  variant={streak >= reward.day ? "default" : "outline"}
                  className={streak >= reward.day ? "bg-green-600" : ""}
                >
                  {reward.reward}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyCheckIn;
