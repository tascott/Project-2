import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import InvoiceTemplate from '../InvoiceTemplate';
const InvoiceGenerator = ({ data }) => {
  const invoiceRef = useRef();

  console.log('ata', data)

  const generatePDF = async () => {
    const canvas = await html2canvas(invoiceRef.current, { scale: 1 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    console.log(imgData)
    pdf.addImage(imgData, 'png', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice.pdf');
  };

  return (
    <div>
      <h3>Invoice Generator.jsx</h3>
      <InvoiceTemplate ref={invoiceRef} data={data} />
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default InvoiceGenerator;