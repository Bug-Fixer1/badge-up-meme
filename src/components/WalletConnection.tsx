
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WalletConnectionProps {
  onConnect: (connected: boolean) => void;
}

const WalletConnection: React.FC<WalletConnectionProps> = ({ onConnect }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  // Mock wallet connection - in production, integrate with Solana wallet adapters
  const connectWallet = async () => {
    setIsConnecting(true);
    
    // Simulate connection delay
    setTimeout(() => {
      const mockAddress = '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU';
      setWalletAddress(mockAddress);
      setIsConnected(true);
      setIsConnecting(false);
      onConnect(true);
      
      toast({
        title: "Wallet Connected! 🚀",
        description: "Welcome to Meme Warrior! Start earning XP now.",
      });
    }, 2000);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    onConnect(false);
    
    toast({
      title: "Wallet Disconnected",
      description: "Come back soon, warrior!",
    });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address Copied!",
      description: "Wallet address copied to clipboard",
    });
  };

  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <Card className="bg-card-gradient border-green-800/30 glow-blue">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <div className="text-sm font-medium text-green-400">Connected</div>
                <div className="text-xs text-muted-foreground">
                  {formatAddress(walletAddress)}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={copyAddress}
                className="hover:bg-purple-800/20"
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={disconnectWallet}
                className="border-red-800/30 text-red-400 hover:bg-red-800/20"
              >
                Disconnect
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Button
      size="lg"
      onClick={connectWallet}
      disabled={isConnecting}
      className="bg-crypto-gradient hover:glow-purple hover-scale"
    >
      <Wallet className="w-5 h-5 mr-2" />
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
};

export default WalletConnection;
