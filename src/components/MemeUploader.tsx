
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Image, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MemeUploaderProps {
  onUpload: () => void;
}

const MemeUploader: React.FC<MemeUploaderProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file || !title) {
      toast({
        title: "Missing Info",
        description: "Please select a file and add a title",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      onUpload();
      
      toast({
        title: "Meme Uploaded! 🔥",
        description: "+100 XP earned! Your meme is now live.",
      });
      
      // Reset form
      setFile(null);
      setTitle('');
      setDescription('');
      setPreview(null);
    }, 2000);
  };

  return (
    <Card className="bg-card-gradient border-purple-800/30 hover-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="w-5 h-5 text-purple-400" />
          Upload Your Meme
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-purple-800/30 rounded-lg p-6 text-center hover:border-purple-600/50 transition-colors">
          {preview ? (
            <div className="space-y-4">
              <img src={preview} alt="Preview" className="max-w-full max-h-48 mx-auto rounded-lg" />
              <Button
                variant="ghost"
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                }}
                className="text-red-400 hover:bg-red-800/20"
              >
                Remove
              </Button>
            </div>
          ) : (
            <>
              <Upload className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <p className="text-muted-foreground mb-4">Drop your meme here or click to upload</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="meme-upload"
              />
              <Button asChild variant="outline" className="border-purple-800/30">
                <label htmlFor="meme-upload" className="cursor-pointer">
                  Choose File
                </label>
              </Button>
            </>
          )}
        </div>

        <Input
          placeholder="Give your meme a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-purple-900/20 border-purple-800/30"
        />

        <Textarea
          placeholder="Add a description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-purple-900/20 border-purple-800/30"
          rows={3}
        />

        <Button
          onClick={handleUpload}
          disabled={isUploading || !file || !title}
          className="w-full bg-gaming-gradient hover:glow-pink"
        >
          <Zap className="w-4 h-4 mr-2" />
          {isUploading ? 'Uploading...' : 'Upload & Earn 100 XP'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MemeUploader;
