import { Typography, Box, Grid, Stack,Button } from "@mui/material";

function TripTypes() {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          paddingTop: 5,
          paddingBottom:0,
          color: "whitesmoke",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        TRIP TYPES
        <br />
      </Typography>

      <Box
        container
        spacing={2}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              margin: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ 
                color: "whitesmoke",
                fontWeight: "bold",
                textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase"
              
              }}
            >
              Honeymoon
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./adventures & honeymoon/honeymoon1.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./adventures & honeymoon/honeymoon2.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>

            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Experience the romance of Kenya with tailored honeymoon packages
              in scenic locations.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 950 per couple</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ 
                color: "whitesmoke", 
                fontWeight: "bold",
                textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase"
              }}
            >
              FAMILY
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./family tour1.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./family tour2.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>

            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Enjoy family-friendly activities and accommodations for a
              memorable vacation.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 1150 per family</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", fontWeight: "bold",textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase" }}
            >
              Cultural Tours
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./african tour5.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="african tour2.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "60vh",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Immerse yourself in the rich cultures and traditions of Kenya's
              diverse communities.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 450 per head</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", fontWeight: "bold",textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase" }}
            >
              Wildlife Safaris
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./wildlife/wildlife3.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  //  objectFit: "contain",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./wildlife/wildlife5.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Engage in thrilling activities like hiking, mountain climbing, and
              zip-lining.
            </Typography>

            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 550 per head</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", fontWeight: "bold",textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase" }}
            >
              Eco Tours
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./african cultures/eco-tours1.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./wellness/eco-tours2.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Explore Kenya's natural beauty while promoting conservation and
              sustainability.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 950 group of 2</Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", fontWeight: "bold",textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase" }}
            >
              Luxury vacations
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./luxury1.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./luxury2.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                 
                }}
              ></Box>
            </Stack>
            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Indulge in luxury vacations with exclusive accommodations and
              personalized services.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 1750 per head</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", fontWeight: "bold",textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase" }}
            >
              Beach Holidays
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./beach3.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./luxury/luxury6.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Relax on Kenya's stunning beaches with sun-soaked holidays and
              water activities.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 950 per couple</Button>
          </Box>
          
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", fontWeight: "bold",textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase" }}
            >
              Wellness retreats
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./wellness/wellness2.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./wellness/wellness3.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Rejuvenate your mind and body with wellness retreats that offer
              relaxation and healing.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 600 per head</Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              padding: 2,
              borderRadius: 2,
              margin: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "whitesmoke", fontWeight: "bold",textAlign:"center",
                paddingBottom:"7px",
                textTransform:"uppercase" }}
            >
              Culnary Tours
            </Typography>
            <Stack component="div" sx={{ flexDirection: "row", gap: "1rem" }}>
              <Box
                component="img"
                src="./culnaries/culnary5.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
              <Box
                component="img"
                src="./culnaries/culnary1.jpg"
                alt="Honeymoon"
                sx={{
                  width: "50%",
                  height: "auto",
                  borderRadius: 2,
                  marginBottom: 2,
                }}
              ></Box>
            </Stack>
            <Typography variant="body1" sx={{ color: "whitesmoke" }}>
              Savor the flavors of Kenya with culinary tours that showcase local
              cuisine and cooking traditions.
            </Typography>
            <Button
              variant="contained"
              color="none"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }} 
            >Book Now</Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "whitesmoke",
                border: "2px solid brown",
                borderRadius: "10px",
                marginTop: 2,
                marginLeft: 5,
                "&:hover": {
                  backgroundColor: "rgba(112, 32, 8, 0.6)",
                  color: "whitesmoke",
                },
              }}
            >$ 800 per head</Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default TripTypes;
