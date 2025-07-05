import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Link,
  Button,
  Paper,
  Badge,
  Container,
  Stack,
} from "@mui/material";

import { VscFeedback } from "react-icons/vsc";
import { FaSms } from "react-icons/fa";
import { IoMail, IoLogoWhatsapp } from "react-icons/io5";

function Home() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(/beach.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          justifyContent: "left",
          alignItems: "top",
        }}
      >
        <Typography
          variant="h2"
          color="whitesmoke"
          fontWeight="bold"
          textTransform="uppercase"
          paddingLeft={"2rem"}
          paddingTop={"4rem"}
        >
          Welcome to Zaph tours
        </Typography>
        <Typography variant="h4" paddingLeft={"2rem"}>
          Best Safari and adventures
        </Typography>

        <Typography
          variant="h6"
          paddingLeft={"2rem"}
          paddingTop={"1rem"}
          color="whitesmoke"
          fontWeight="bold"
          margin={"20px 2rem"}
          
          sx={{
            maxWidth: "600px",
            marginBottom: "20px",
            textAlign: "left",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontStyle: "italic",
            lineHeight: "1.5",
            fontSize: "1.2rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          Number one travel agency in East Africa
          that offers the best safari and adventures in Kenya, Uganda,
          Tanzania, and Zanzibar. Secure your spot today and experience the
          thrill of a lifetime with our expertly crafted tours and packages.
        </Typography>
        <Button
          variant="text"
          href="/destination"
          color="primary"
          sx={{
            marginTop: "20px",
            marginLeft: "2rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "brown",
            textTransform: "uppercase",
            border: "2px solid brown",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "brown",
              boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
            },
            padding: "10px 20px",

            backgroundColor: "white",
          }}
        >
          BOOK A VACATION TODAY
        </Button>
      </Box>
      <div
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "5px",
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "80%",
            padding: "20px",
            borderRadius: "10px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            margin: "20px auto",  
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              style={{
                color: "brown",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "1px",
                textTransform: "uppercase",
              }}
            >
              About Us
            </Typography>
            <Typography variant="body1" fontSize={"1.2rem"} color="black" fontWeight={"bold"}>
              At Safari Horizons Travel Co., we specialize in crafting
              unforgettable journeys across the vibrant landscapes and cultures
              of East Africa. From the iconic savannahs of Kenya and Tanzania to
              the enchanting shores of Zanzibar and the misty mountains of
              Uganda and Rwanda, our curated tours showcase the region’s
              unmatched beauty and diversity. Founded by passionate explorers
              with deep local roots, we are committed to responsible tourism
              that supports local communities and conserves the natural wonders
              we cherish. Whether you're chasing the Great Migration, trekking
              with mountain gorillas, or soaking up the sun on the Swahili
              coast, we tailor every itinerary to offer authentic, safe, and
              soul-stirring experiences.
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <div>
          <Typography
            variant="h3"
            color="white"
            paddingTop={2}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Featured destinations
          </Typography>

          <div
            alignItems="center"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "80px",
              padding: "8px",
            }}
          >
            <Card sx={{ width: "300px" }}>
              <CardMedia
                component="img"
                height="200px"
                image="./mountains/mount_climbimg.jpg"
              />
              <CardContent>
                <Typography variant="h5">Mt Kenya</Typography>
                <Typography variant="body1">
                  Mt Kenya is a majestic mountain located in East Africa,
                  specifically in Kenya. It is the highest peak in Kenya and the
                  second-highest in Africa, after Mount Kilimanjaro.
                  <Link 
                    href="/destination"
                    
                  >READ MORE</Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" 
                  href="/destination"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "brown",
                    border: "2px solid brown",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",

                    "&:hover": {
                      backgroundColor: "rgba(112, 32, 8, 0.6)",
                      color: "whitesmoke",
                      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ width: "300px" }}>
              <CardMedia
                component="img"
                height="200px"
                image="./mountains/mountain_terrain.jpg"
              />
              <CardContent>
                <Typography variant="h5"> Mt Ruwenzori Climbing</Typography>
                <Typography variant="body1">
                  Mountain climbing is an exhilarating adventure that takes you
                  to the peaks of nature's grandeur. Whether you're a seasoned
                  climber or a beginner, the thrill of scaling towering
                  mountains.
                  <Link>READ MORE</Link>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" 
                  href="/destination"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "brown",
                    border: "2px solid brown",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",

                    "&:hover": {
                      backgroundColor: "rgba(112, 32, 8, 0.6)",
                      color: "whitesmoke",
                      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ width: "300px" }}>
              <CardMedia
                component="img"
                height="200px"
                image="./luxury/luxury6.jpg"
              />
              <CardContent>
                <Typography variant="h5">Coastal Kenya</Typography>
                <Typography variant="body1">
                  Coastal tours offer a unique opportunity to explore the
                  breathtaking beauty of the world's coastlines. From pristine
                  to sandy beaches, rugged cliffs, and vibrant marine life.
                  <Link>READ MORE</Link>
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" 
                  href="/destination"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "brown",
                    border: "2px solid brown",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",

                    "&:hover": {
                      backgroundColor: "rgba(112, 32, 8, 0.6)",
                      color: "whitesmoke",
                      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Book Now
                </Button>
              </CardActions>
            </Card>

            <div>
              <button>
                <Link
                  href="./destination"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1.7rem",
                  }}
                >
                  View All Destinations
                </Link>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backgroundImage: 'url("./safari6.jpg")',
              backgroundSize: "cover",
            }}
          >
            <Typography
              variant="h4"
              color="black"
              backgroundColor="yellow"
              borderRadius="10px"
              padding={2}
              marginTop={5}
              marginBottom={5}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              TESTIMONIALS
            </Typography>

            <Grid container spacing={5} sx={{ padding: "20px",alignItems  : "center", justifyContent: "center" }}>
              <Paper sx={{ p: 5, bgcolor: "yellow", textAlign: "center", width: "40%" }}>
                <img
                  src="/client1.png"
                  alt="Client"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Becky Daniel
                </Typography>
                <Typography variant="body1" color="black" fontStyle="italic" fontSize="1.2rem">
                  "ZAPH TOURS made our honeymoon unforgettable... The deep-sea
                  diving was magical and the beach sunsets were surreal🥰🥰."
                </Typography>
                <Badge
                  badgeContent={1}
                  color="primary"
                  sx={{
                    top: 20,
                    left: 10,
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  <VscFeedback />
                </Badge>
              </Paper>

              <Paper sx={{ p: 5, bgcolor: "yellow", textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
                
                width: "40%" }}>
                <img
                  src="/gent1.png"
                  alt="Client"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Jack Daniel
                </Typography>
                <Typography variant="body1" color="black" fontStyle="italic" fontSize="1.2rem">
                   "The mountain climbing adventure was exhilarating😯😯! The views
                    were breathtaking, and the guides were knowledgeable and
                    friendly😙😝. Highly recommend ZAPH TOURS for any adventure
                    seeker!"
                </Typography>
                <Badge
                  badgeContent={1}
                  color="primary"
                  sx={{
                    top: 20,
                    left: 10,
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  <FaSms />
                </Badge>
              </Paper>

              <Paper sx={{ p: 5, bgcolor: "yellow", textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
                
                width: "40%" }}>
                <img
                  src="/gent2.png"
                  alt="Client"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  Mutua Gideon
                </Typography>
                <Typography variant="body1" color="black" fontStyle="italic" fontSize="1.2rem">
                  "ZAPH TOURS provided an amazing experience for our family
                    vacation! The wildlife safari🦒🐕 was incredible, and the
                    accommodations were top-notch👌✔️. We will definitely book with
                    them again!"
                </Typography>
                <Badge
                  badgeContent={1}
                  color="primary"
                  sx={{
                    top: 20,
                    left: 10,
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  <IoMail />
                </Badge>
              </Paper>
                
              <Paper sx={{ p: 5, bgcolor: "yellow", textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
                
                width: "40%" }}>
                
                <Typography variant="h6" fontWeight="bold">
                  
                </Typography>
                <Typography variant="h3" color="black" fontStyle="italic" fontSize="2rem">
                  <b>50,000+ </b>  satisfied customers and counting!
                </Typography>
                <br />
                <Typography variant="h3" color="black" fontStyle="italic" fontSize="2rem">
                  <b>100,000+</b> adventures booked and counting...
                </Typography>
                <br />
                <Typography variant="h3" color="black" fontStyle="italic" fontSize="2rem">
                  <b>200,000+</b> happy memories created 
                </Typography>
                <br />
                
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
      );
      <div
        style={{
          backgroundImage: 'url("./wildlife/wildlife6.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <Typography>
          <h1
            style={{ color: "black", textAlign: "center", paddingTop: "20px" }}
          >
            Newsletter
          </h1>
        </Typography>
        <paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "10px",
            margin: "20px auto",
            maxWidth: "600px",
          }}
        >
          <Typography
            variant="h5"
            color="black"
            fontWeight={"bold"}
            textAlign="center"
          >
            Subscribe to our newsletter for the latest updates and offers
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1.5px solid #ccc",
                width: "60%",
                marginBottom: "10px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                backgroundColor: "brown",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                textTransform: "uppercase",
                marginTop: "30px",
              }}
            >
              Subscribe
            </button>

          </Box>
          <Typography
            variant="body1"
            color="white"
            textAlign="center"
            marginTop="50px"
            fontSize="1.2rem"
            
            sx={{
              maxWidth: "500px",
              margin: "30px auto",
              padding: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
            }}
          >
            By subscribing, you agree to receive our newsletter and promotional
            content. You can unsubscribe at any time.
          </Typography>
        </paper>

        
      </div>
      );
    </div>
  );
}

export default Home;
