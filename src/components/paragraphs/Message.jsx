import React, { useState } from 'react';
import { Grid2, TextField, Button, FormControl } from '@mui/material';

const Message = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;
  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  return (
    <Grid2 container alignItems="center" justifyContent="center">
      <Grid2
        item
        size={{ xs: 12, md: 6 }}
        justifyContent="center"
        alignItems="center"
      >
        <form
          action="https://getform.io/f/ec7c72e8-90b3-4997-9e07-54fea54b054f"
          method="POST"
        >
          <FormControl sx={{ width: '100%', padding: '1rem' }}>
            <TextField
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Your Name"
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px 12px 0 0',
                },
              }}
            />
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Your E-mail"
              required
              variant="outlined"
              sx={{
                mt: '-1px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                },
              }}
            />
            <TextField
              name="message"
              value={message}
              onChange={onChange}
              placeholder="Message"
              minRows={5}
              required
              multiline={true}
              variant="outlined"
              sx={{
                mt: '-1px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                },
              }}
            />
            {/* <!-- add hidden Honeypot input to prevent spams --> */}
            <TextField
              type="hidden"
              name="_gotcha"
              sx={{ display: 'none', important: false }}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: '-1px',
                borderRadius: '0 0 12px 12px',
                height: 48,
              }}
            >
              Send Message
            </Button>
          </FormControl>
        </form>
      </Grid2>
    </Grid2>
  );
};

export default Message;
