import { Link, useNavigate } from 'react-router-dom';
import './Logo.scss';

export default function Logo({ fontSize }) {
  const navigate = useNavigate();

  return (
    <div
      className="logo"
      onClick={() => navigate('/')}
      style={{ fontSize: fontSize }}
    >
      ROECY'
    </div>
  );
}
