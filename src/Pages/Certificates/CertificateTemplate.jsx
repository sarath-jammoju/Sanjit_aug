import React from "react";
import "./CertificateTemplate.css";

const CertificateTemplate = ({
  name,
  role,
  company,
  startDate,
  endDate,
  certId,
  issueDate,
}) => {
  return (
    <div className="certificate-container">
      <div className="certificate-header">
        <h1>CERTIFICATE</h1>
        <h3>OF INTERNSHIP</h3>
      </div>

      <p className="certificate-name">{name}</p>

      <p className="certificate-text">
        has successfully completed <b>the internship</b> as a <b>{role}</b> at{" "}
        <b>{company}</b>
        <br />
        from {startDate} to {endDate}.
      </p>

      <p className="certificate-id">
        CERTIFICATE ID: <b>{certId}</b>
      </p>

      <div className="certificate-footer">
        <div>
          <p className="issue-label">DATE OF ISSUE</p>
          <p>{issueDate}</p>
        </div>
        <div>
          <p className="issue-label">CO-FOUNDER</p>
          <p className="signature">M. Deepak</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;
