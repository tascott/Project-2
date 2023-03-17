import React, { forwardRef } from 'react';

const InvoiceTemplate = forwardRef(({ data }, ref) => {

  const {
    invoiceNumber,
    invoiceDate,
    dueDate,
    clientName,
    clientAddress,
  } = data;

  return (
  <div ref={ref} id="invoice" style={{ width: '800px', height: '800px', margin: 'auto' }}>
    <h2>Invoice</h2>
    <p>
      <strong>Invoice number:</strong> {invoiceNumber}
    </p>
    <p>
      <strong>Invoice date:</strong> {invoiceDate}
    </p>
    <p>
      <strong>Due date:</strong> {dueDate}
    </p>

    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <div>
        <h3>{clientName}</h3>
        <p>{clientAddress}</p>
      </div>
    </div>

    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>Description</th>
          <th style={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>Quantity</th>
          <th style={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>Unit Price</th>
          <th style={{ borderBottom: '1px solid black', paddingBottom: '8px' }}>Amount</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td style={{ padding: '8px' }}>Web Development</td>
            <td style={{ padding: '8px' }}>1</td>
            <td style={{ padding: '8px' }}>1000</td>
            <td style={{ padding: '8px' }}>1000</td>
       </tr>
      </tbody>
    </table>
  </div>
)});

export default InvoiceTemplate;