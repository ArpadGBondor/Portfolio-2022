import React, { useState } from 'react';
import { Grid, TextField, Button, FormControl } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const Message = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formData;
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !message) return;
        try {
            const res = await axios.post(`/api/message`, formData);

            toast(res.data);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            toast.error(error?.response?.data || error.message);
        }
    };
    const onChange = (e) =>
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ width: '100%' }}>
                        <TextField
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Your Name"
                            required
                            variant="outlined"
                        />
                        <TextField
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Your E-mail"
                            required
                            variant="outlined"
                        />
                        <TextField
                            name="message"
                            value={message}
                            onChange={onChange}
                            placeholder="Message"
                            minRows={6}
                            required
                            multiline={true}
                            variant="outlined"
                        ></TextField>
                        <Button type="submit" variant="contained" color="primary">
                            Send Message
                        </Button>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    );
};

export default Message;
