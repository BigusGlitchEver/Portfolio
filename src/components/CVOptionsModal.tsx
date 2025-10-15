import React, { useState } from 'react';
import { Download, Globe, Mail, Share2, X } from 'lucide-react';

interface CVOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewBrowser: () => void;
}

const CVOptionsModal: React.FC<CVOptionsModalProps> = ({ 
  isOpen, 
  onClose, 
  onViewBrowser 
}) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isEmailing, setIsEmailing] = useState(false);

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);
    try {
      // Create download link for pre-generated PDF
      const link = document.createElement('a');
      link.href = '/Samuel_Shmoo_Bigus_CV.pdf';
      link.download = 'Samuel_Shmoo_Bigus_CV.pdf';
      link.click();
      
      // Close modal after brief delay to show loading state
      setTimeout(() => {
        setIsGeneratingPDF(false);
        onClose();
      }, 500);
      
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Error downloading PDF. Please try again.');
      setIsGeneratingPDF(false);
    }
  };

  const handleEmailPDF = async () => {
    setIsEmailing(true);
    try {
      // Generate PDF and create mailto link
      const mailtoLink = `mailto:?subject=Samuel Shmoo Bigus - CV&body=Please find my CV attached. You can also view it online at: ${window.location.origin}/cv`;
      window.location.href = mailtoLink;
    } catch (error) {
      console.error('Error creating email:', error);
    } finally {
      setIsEmailing(false);
      onClose();
    }
  };

  const handleShareLink = () => {
    const cvUrl = `${window.location.origin}/cv`;
    if (navigator.share) {
      navigator.share({
        title: 'Samuel Shmoo Bigus - CV',
        text: 'Check out my CV',
        url: cvUrl
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(cvUrl).then(() => {
        alert('CV link copied to clipboard!');
      }).catch(() => {
        // Final fallback: show the URL
        prompt('Copy this link:', cvUrl);
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-blue-400/20 rounded-2xl p-8 max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">CV Options</h2>
          <p className="text-gray-300">Choose how you'd like to access my CV</p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Download PDF */}
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="w-full flex items-center gap-4 p-4 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-xl transition-all duration-200 group disabled:opacity-50"
          >
            <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
              <Download className="w-6 h-6 text-blue-300" />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Download PDF</div>
              <div className="text-gray-300 text-sm">Get a clean, printable copy</div>
            </div>
          </button>

          {/* View in Browser */}
          <button
            onClick={onViewBrowser}
            className="w-full flex items-center gap-4 p-4 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 rounded-xl transition-all duration-200 group"
          >
            <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
              <Globe className="w-6 h-6 text-emerald-300" />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">View in Browser</div>
              <div className="text-gray-300 text-sm">Interactive online version</div>
            </div>
          </button>

          {/* Email PDF */}
          <button
            onClick={handleEmailPDF}
            disabled={isEmailing}
            className="w-full flex items-center gap-4 p-4 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 rounded-xl transition-all duration-200 group disabled:opacity-50"
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
              <Mail className="w-6 h-6 text-purple-300" />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Email PDF</div>
              <div className="text-gray-300 text-sm">Send via email client</div>
            </div>
          </button>

          {/* Share Link */}
          <button
            onClick={handleShareLink}
            className="w-full flex items-center gap-4 p-4 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/30 rounded-xl transition-all duration-200 group"
          >
            <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
              <Share2 className="w-6 h-6 text-orange-300" />
            </div>
            <div className="text-left">
              <div className="text-white font-medium">Share Link</div>
              <div className="text-gray-300 text-sm">Copy or share CV URL</div>
            </div>
          </button>
        </div>

        {/* Loading states */}
        {(isGeneratingPDF || isEmailing) && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-blue-300">
              <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
              {isGeneratingPDF ? 'Generating PDF...' : 'Opening email...'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVOptionsModal;
