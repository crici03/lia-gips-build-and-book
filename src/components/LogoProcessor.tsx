import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const LogoProcessor: React.FC = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        // Fetch the uploaded logo
        const response = await fetch('/lovable-uploads/4c514e54-7ed8-4319-9a14-aae54e446266.png');
        const blob = await response.blob();
        
        // Load as image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original if processing fails
        setProcessedLogoUrl('/lovable-uploads/4c514e54-7ed8-4319-9a14-aae54e446266.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  if (isProcessing) {
    return <div className="h-16 w-16 bg-white/20 animate-pulse rounded" />;
  }

  return (
    <img 
      src={processedLogoUrl || '/lovable-uploads/4c514e54-7ed8-4319-9a14-aae54e446266.png'} 
      alt="LG Logo" 
      className="h-16 w-auto"
    />
  );
};

export default LogoProcessor;