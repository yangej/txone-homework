import { Box, Card, CardProps, Stack } from '@mui/material';
import { ReactNode } from 'react';

interface Props extends CardProps {
  header?: {
    left?: ReactNode;
    right?: ReactNode;
  };
  footer?: {
    left?: ReactNode;
    right?: ReactNode;
  };
}

const InfoCard = ({ header, footer, children, ...cardProps }: Props) => {
  return (
    <Card
      variant="outlined"
      className="flex flex-col justify-between p-8"
      {...cardProps}
    >
      {header && (
        <Stack direction="row" justifyContent="space-between">
          <Box>{header.left}</Box>
          <Box>{header.right}</Box>
        </Stack>
      )}
      {children}
      {footer && (
        <Stack direction="row" justifyContent="space-between">
          <Box>{footer.left}</Box>
          <Box>{footer.right}</Box>
        </Stack>
      )}
    </Card>
  );
};

export default InfoCard;
