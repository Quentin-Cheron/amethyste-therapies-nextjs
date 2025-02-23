interface EmailTemplateProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => (
  <div
    style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    }}
  >
    {/* En-tête */}
    <h2 style={{ color: '#333', textAlign: 'center' }}>📩 Nouveau Message Reçu</h2>

    {/* Informations du contact */}
    <div style={{ padding: '15px', backgroundColor: '#ffffff', borderRadius: '5px' }}>
      <p style={{ fontSize: '16px', color: '#333' }}>
        <strong>👤 Nom :</strong> {firstName} {lastName}
      </p>
      <p style={{ fontSize: '16px', color: '#333' }}>
        <strong>📧 Email :</strong>{' '}
        <a href={`mailto:${email}`} style={{ color: '#4f46e5' }}>
          {email}
        </a>
      </p>
      <p style={{ fontSize: '16px', color: '#333' }}>
        <strong>📞 Téléphone :</strong>{' '}
        <a href={`tel:${phone}`} style={{ color: '#4f46e5' }}>
          {phone}
        </a>
      </p>
    </div>

    {/* Message */}
    <div
      style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f3f4f6',
        borderRadius: '5px',
      }}
    >
      <p style={{ fontSize: '16px', color: '#333' }}>
        <strong>✉️ Message :</strong>
      </p>
      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>{message}</p>
    </div>

    {/* Bas de page */}
    <p style={{ fontSize: '14px', color: '#777', textAlign: 'center', marginTop: '20px' }}>
      📌 Cet email est généré automatiquement.
    </p>
  </div>
)
