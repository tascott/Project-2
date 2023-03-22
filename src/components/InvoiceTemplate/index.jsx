import React, { forwardRef } from "react";
import "../../scss/style.css";
import { images } from "../../components/ImageImports";

const InvoiceTemplate = forwardRef(({ data }, ref) => {
  const { invoiceDate, paymentDueDate, clientName, clientAddress, notes, seo, design, logoCreation, contentCreation  } =
    data;
  const imgSrc = images[data.image];

  return (
    <div className="invoiceBG"
      ref={ref}
      id="invoice"
      style={{ width: '500px', height: '600px' }}
    >
      <h6>Invoice</h6>
      <img className="project--card_img" src={imgSrc} alt={data.website_name} style={{ maxWidth: "100px" }} />
      <p>
        <strong>Invoice date:</strong> {invoiceDate}
      </p>
      <p>
        <strong>Payment due date:</strong> {paymentDueDate}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <h3>{clientName}</h3>
          <p>{clientAddress}</p>
          <p>{notes}</p>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "8px" }}
            >
              Description
            </th>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "8px" }}
            >
              Quantity
            </th>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "8px" }}
            >
              Unit Price
            </th>
            <th
              style={{ borderBottom: "1px solid black", paddingBottom: "8px" }}
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
        {seo &&
              <tr>
                <td style={{ padding: "8px 0", textAlign:"center" }}>SEO</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>1</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
              </tr>
          }
          {design &&
              <tr>
                <td style={{ padding: "8px 0", textAlign:"center" }}>Design</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>1</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
              </tr>
          }
          {logoCreation &&
              <tr>
                <td style={{ padding: "8px 0", textAlign:"center" }}>Logo Creation</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>1</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
              </tr>
          }
          {contentCreation &&
              <tr>
                <td style={{ padding: "8px 0", textAlign:"center" }}>Content Creation</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>1</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
                <td style={{ padding: "8px 0", textAlign:"center" }}>500</td>
              </tr>
          }

        </tbody>
      </table>
    </div>
  );
});

export default InvoiceTemplate;
