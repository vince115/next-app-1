'use client';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import style from "./contact.module.scss";
import { Globals } from '@react-spring/web';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccessMessage('Message sent successfully!');
      handleReset(); // 成功後清空表單
    } catch (error) {
      setErrorMessage('Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  Globals.assign({
    frameLoop: 'demand'
  });

  return (
    <Container>
      <Paper className="m-2 p-2 dark:bg-stone-900">
        <Typography variant="h4" className="p-4 text-purple-500 drop-shadow">
          Contact
        </Typography>
        <Typography className="p-4">
          Get in touch or shoot me an email directly at vince115@gmail.com
        </Typography>
        <FormControl component="form" onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Box className="w-[80%] pl-[10%]">
              <TextField
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`${style.input} bg-gray-50 dark:bg-gray-800`}
                placeholder="Name"
              />
            </Box>
            <Box className="w-[80%] pl-[10%] py-4">
              <TextField
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${style.input} bg-gray-50 dark:bg-gray-800`}
                placeholder="Email"
              />
            </Box>
            <Box className="w-[80%] pl-[10%]">
              <TextField
                id="message"
                name="message"
                value={formData.message}
                multiline
                rows={8}
                onChange={handleChange}
                required
                className={`${style.textarea} bg-gray-50 dark:bg-gray-800`}
                placeholder="Message"
              />
            </Box>
            <Box className="w-[80%] pl-[10%] text-center">
              <Button
                type="button"
                variant="contained"
                onClick={handleReset}
                className="bg-orange-400 m-4"
                disabled={isSubmitting}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                className="bg-teal-500 m-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Email'}
              </Button>
            </Box>
          </Grid>
        </FormControl>
        {successMessage && <Typography className="p-4 text-green-500">{successMessage}</Typography>}
        {errorMessage && <Typography className="p-4 text-red-500">{errorMessage}</Typography>}
      </Paper>
    </Container>
  );
};

export default Contact;