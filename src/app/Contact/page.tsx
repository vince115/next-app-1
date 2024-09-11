"use client";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
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
        <Typography className="p-4 ">
            Get in touch or shoot me an email directly on vince115@gmail.com
        </Typography>
        <FormControl onSubmit={handleSubmit}>
          <Grid container spacing={1}>
         
            <Box className="w-[80%] pl-[10%]">
              <TextField
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`${style.input} bg-gray-50 dark:bg-gray-800`}
                placeholder="Name"
              />
            </Box>
            
            <Box className="w-[80%] pl-[10%] py-4">
              <TextField
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`${style.input} bg-gray-50 dark:bg-gray-800`}
                placeholder="Email"
              />
           </Box>

            <Box className="w-[80%] pl-[10%]">
              <TextField
                id="message"
                value={message}
                multiline
                rows={8}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={`${style.textarea} bg-gray-50 dark:bg-gray-800`}
                placeholder="Message"
              />
            </Box>
           
           
           
            <Box className="w-[80%] pl-[10%] text-center ">
              <Button
                type="button"
                variant="contained"
                onClick={handleReset}
                className="bg-orange-400 m-4"
              >
                Reset
              </Button>
           
           
              <Button type="submit" variant="contained" className="bg-teal-500 m-4">
                Send Email
              </Button>
          </Box>
           
          </Grid>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default Contact;
