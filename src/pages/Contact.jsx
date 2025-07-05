import {
  Typography,
  Card,
  CardContent,
  Box,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { IoMail, IoLogoWhatsapp } from "react-icons/io5";
import { FaSms, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiThreads } from "react-icons/si";


function Contact() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("./safari4.jpg")',
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay",
        minHeight: "100vh",
        color: "white",
        padding: 4,
      }}
    >
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Contact Us
      </Typography>

      
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                <IoMail /> Email Us
              </Typography>
              <Typography variant="body1">
                <Link href="mailto:zaphtours@gmail.com" underline="hover">
                  zaphtours@gmail.com
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                <FaSms /> SMS
              </Typography>
              <Typography variant="body1">+254 700 000 000</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                <IoLogoWhatsapp /> WhatsApp
              </Typography>
              <Typography variant="body1">+254 700 000 000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={6}
      
      >
        <Typography variant="h5" mb={2} fontWeight="bold" textAlign="center">
          Send Us a Message
        </Typography>
        <Grid container spacing={2} justifyContent="center"
        
        >
          <Grid item xs={12} md={5} 
          
          sx={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            height:"100%",
            borderRadius:"10px"
          }}
          
          >
            
            <TextField fullWidth label="Name" type="" placeholder="Enter Name" color="primary" size="large" sx={{color:'orange', }} />
          </Grid>
          <Grid item xs={12} md={5}
           sx={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            height:"100%",
            borderRadius:"10px"
          }}
          >
            <TextField fullWidth label="Email" type="email" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={10}
           sx={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            height:"100%",
            borderRadius:"10px"
          }}
          >
            <TextField fullWidth label="Subject" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={10}
           sx={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            height:"100%",
            borderRadius:"10px"
          }}
          >
            <TextField fullWidth multiline minRows={4} label="Message" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={10} textAlign="centre">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

      
      <Box mt={6}>
        <Grid container spacing={20}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Our Location
            </Typography>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.779894003714!2d36.82194671154059!3d-1.2920654341714978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10cbb7e88b0f%3A0x3e514048baef28c6!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1719242343925"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Office Hours
            </Typography>
            <Typography variant="body1">
              <b>Monday</b> - Friday: 9:00 AM – 5:00 PM
              <br />
              <br />
              <b>Saturday</b>: 10:00 AM – 2:00 PM
              <br />
              <br />
              <b>Sunday</b>: Closed
            </Typography>
          </Grid>
        </Grid>
      </Box>

    
      <Box mt={6} textAlign="center">
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Follow Us on Social Media
        </Typography>
        <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
          <Link href="#" color="inherit" 
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              color: "orange",
            },
          }}
          ><FaFacebook size={30} /></Link>
          <Link href="#" color="inherit" sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              color: "orange",
            },
          }}><FaInstagram size={30} /></Link>
          <Link href="#" color="inherit" sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              color: "orange",
            },
          }}><FaLinkedin size={30} /></Link>
          <Link href="#" color="inherit" sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              color: "orange",
            },
          }}><FaTwitter size={30} /></Link>
          <Link href="#" color="inherit" sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              color: "orange",
            },
          }}><FaYoutube size={30} /></Link>
          <Link href="#" color="inherit" sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              color: "orange",
            },
          }}><SiThreads size={30} /></Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
