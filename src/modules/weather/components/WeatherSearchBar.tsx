import { Button, Stack, TextField } from '@mui/material';
import { FormEventHandler } from 'react';

type FormDataValue = Record<string, string>;

export interface WeatherSearchBarProps {
  onSubmit(value: FormDataValue): void;
}

const WeatherSearchBar = ({ onSubmit }: WeatherSearchBarProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = Object.fromEntries(formData.entries()) as FormDataValue;
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" gap="14px" alignItems="center" maxWidth="542px">
        <label htmlFor="city">City</label>
        <TextField id="city" name="city" size="small" sx={{ width: '132px' }} />
        <label htmlFor="country">Country</label>
        <TextField
          id="country"
          name="country"
          size="small"
          sx={{ width: '132px' }}
        />
        <Button
          type="submit"
          variant="contained"
          className="flex-grow"
          color="primary"
        >
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default WeatherSearchBar;
