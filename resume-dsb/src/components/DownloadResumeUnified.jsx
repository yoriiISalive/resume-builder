import React from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import { useResume } from '../context/ResumeContext';

const DownloadResumeUnified = () => {
  const { selectedTemplate } = useResume();
  const handleDownload = async () => {
    const input = document.getElementById(`resume-content-${selectedTemplate}`);
    if (!input) {
      console.error('Resume content element not found!');
      return;
    }

    // Clone the element to apply print-specific styles without affecting the live preview
    const clonedInput = input.cloneNode(true);
    clonedInput.style.width = '800px'; // Fixed width for PDF
    clonedInput.style.maxHeight = 'none'; // Remove max-height constraint
    clonedInput.style.overflow = 'visible'; // Ensure all content is visible
    clonedInput.style.position = 'absolute';
    clonedInput.style.left = '-9999px'; // Move off-screen
    document.body.appendChild(clonedInput);

    try {
      const canvas = await html2canvas(clonedInput, {
        scale: 2, // Increase scale for better resolution
        useCORS: true, // Enable cross-origin images if any
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgWidth = 595; // A4 width in pt (210mm)
      const pageHeight = 842; // A4 height in pt (297mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      document.body.removeChild(clonedInput);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors cursor-pointer"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download PDF
    </button>
  );
};

export default DownloadResumeUnified;