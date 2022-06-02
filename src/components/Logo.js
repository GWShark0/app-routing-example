import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as LogoImage } from '../assets/logo.svg';
import { ReactComponent as LogoIconImage } from '../assets/logo-icon.svg';

const Link = styled(RouterLink)({ display: 'flex' });
const LogoWrapper = styled(LogoImage)({});
const LogoIconWrapper = styled(LogoIconImage)({});

export default function Logo(props) {
  const { icon = false, to } = props;

  const Component = icon ? LogoIconWrapper : LogoWrapper;

  if (to) {
    return (
      <Link to={to}>
        <Component sx={{ height: (theme) => theme.spacing(4) }} />
      </Link>
    );
  }

  return <Component sx={{ height: (theme) => theme.spacing(4) }} />;
}
