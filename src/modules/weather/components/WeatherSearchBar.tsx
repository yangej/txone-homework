import { Button, Stack, TextField, Typography } from '@mui/material';
import { FormEventHandler } from 'react';

type FormDataValue = Record<string, string>;

export interface WeatherSearchBarProps {
  defaultValues?: {
    city?: string;
    country?: string;
  };
  hasError?: boolean;
  onSubmit(value: FormDataValue): void;
}

const WeatherSearchBar = ({
  defaultValues = {},
  hasError = false,
  onSubmit,
}: WeatherSearchBarProps) => {
  const { city: defaultCity = '', country: defaultCountry = '' } =
    defaultValues;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = Object.fromEntries(formData.entries()) as FormDataValue;
    onSubmit(value);
  };

  return (
    <form key={defaultCity + defaultCountry} onSubmit={handleSubmit}>
      <Stack direction="column" gap="12px">
        <Stack direction="row" gap="14px" alignItems="center" maxWidth="542px">
          <label htmlFor="city">City</label>
          <TextField
            id="city"
            name="city"
            size="small"
            sx={{ width: '132px', backgroundColor: 'white' }}
            defaultValue={defaultCity}
            error={hasError}
          />
          <label htmlFor="country">Country</label>
          <TextField
            id="country"
            name="country"
            size="small"
            sx={{ width: '132px', backgroundColor: 'white' }}
            defaultValue={defaultCountry}
            error={hasError}
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
        {hasError && (
          <Stack direction="row" paddingLeft="42px">
            <Typography color="error">Not found the city or country</Typography>
          </Stack>
        )}
      </Stack>
    </form>
  );
};

export default WeatherSearchBar;
