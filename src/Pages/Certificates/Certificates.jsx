import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "../Certificates/Certificates.css";

// Import your certificate images
import NikhithaCertificate from "../../assets/certificates/Nikhitha.webp";
import RajeswariCertificate from "../../assets/certificates/Rajeswari.webp";

const Certificates = () => {
  const [certificateId, setCertificateId] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Map of certificate IDs → images
  const certificatesData = {
      "STS202500003": RajeswariCertificate,
    "STS202500004": NikhithaCertificate,
  };

  const handleSearch = () => {
    if (certificatesData[certificateId]) {
      setSelectedCertificate(certificatesData[certificateId]);
    } else {
      setSelectedCertificate("not-found");
    }
  };

  // ✅ Download as PDF
  const handleDownload = () => {
    if (!selectedCertificate || selectedCertificate === "not-found") return;

    const pdf = new jsPDF("l", "pt", "a4"); // Landscape A4
    const img = new Image();
    img.src = selectedCertificate;

    img.onload = () => {
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = img.width;
      const imgHeight = img.height;

      // Maintain aspect ratio
      const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;

      const x = (pageWidth - newWidth) / 2;
      const y = (pageHeight - newHeight) / 2;

      pdf.addImage(img, "WEBP", x, y, newWidth, newHeight);
      pdf.save(`${certificateId}.pdf`);
    };
  };

  // ✅ Print Certificate
  const handlePrint = () => {
    if (!selectedCertificate || selectedCertificate === "not-found") return;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Certificate</title>
        </head>
        <body style="text-align:center; margin:0;">
          <img src="${selectedCertificate}" style="max-width:100%; height:auto;" />
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="certificatesPage">
      <h1>Certificates</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter your Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Certificate Display */}
      <div className="certificate-display">
        {selectedCertificate === "not-found" && (
          <p style={{ color: "red" }}>❌ Certificate not found!</p>
        )}

        {selectedCertificate && selectedCertificate !== "not-found" && (
          <>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="certificate-image"
            />

            {/* ✅ Download & Print Buttons */}
            <div className="action-buttons">
              {/* <button onClick={handleDownload}>Download PDF</button> */}
              <button onClick={handlePrint}>Print</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Certificates;
