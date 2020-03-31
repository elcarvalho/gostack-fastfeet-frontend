import React, { useMemo } from 'react';

import { Container } from './styles';

export default function AvatarName({ originalName, size }) {
  const avatar = useMemo(() => {
    const name = originalName
      .split(' ')
      .slice(0, 2)
      .reduce((avatar, name) => avatar + name.charAt(0).toUpperCase(), '');

    const charCode = name
      .split('')
      .reduce((code, char) => char.charCodeAt().toString(16) + code, '');

    const hexa = `#${charCode.padEnd(3, 'F')}`;

    return {
      name,
      hexa,
    };
  }, [originalName]);

  return (
    <Container color={avatar.hexa} size={size}>
      <span>{avatar.name}</span>
      {originalName}
    </Container>
  );
}
