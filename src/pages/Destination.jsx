import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";

function Destination() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography
        variant="h3"
        sx={{
          padding: 5,
          color: "whitesmoke",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Discover the world's most breathtaking destinations with ZAPH TOURS
      </Typography>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Card sx={{ width: "40%", p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={600}>Mt Kenya Climbing</Typography>
            <CardMedia
              component="img"
              image="./mountains/mount_climbimg.jpg"
              alt="wildlife"
              sx={{ borderRadius: "10px" }}
              />
          
          <Typography variant="body1">
              Mt Kenya is a majestic mountain located in East Africa,
              specifically in Kenya. It is the highest peak in Kenya and the
              second-highest in Africa, after Mount Kilimanjaro.
                  </Typography>
                  </CardContent>
          <Stack direction="row" spacing={2} sx={{ px: 2, pb: 2 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ textTransform: "none" }}
            >
              $200 per Individual
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ textTransform: "none" }}
            >
            🈹 $700  Group of 4
            </Button>
          </Stack>
        </Card>

        <Card sx={{ width: "40%", p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={600}>
              Discover the elephants of Ruwenzori
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image="./wildlife/wildlife3.jpg"
            alt="Wildlife"
            sx={{ borderRadius: "10px" }}
          />
          <CardContent>
            <Typography variant="body1">
              Experience the beauty of nature like never before with our
              exclusive tours. From the majestic mountains to the serene
              beaches, we offer a wide range of travel experiences that cater to
              every adventurer's dream.
            </Typography>
          </CardContent>
          <Stack direction="row" spacing={2} sx={{ px: 2, pb: 2 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ textTransform: "none" }}
            >
              $200 per Individual
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ textTransform: "none" }}
            >
              🈹 $900  Group of 10
            </Button>
          </Stack>
        </Card>

        
        <Card sx={{ width: "40%", p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={600}>The grey Rhinos of Tanzania</Typography>
          </CardContent>
          <CardMedia
            component="img"
            image="./wildlife/wildlife4.jpg"
            alt="Wildlife"
            sx={{ borderRadius: "10px" }}
          />
          <CardContent>
            <Typography variant="body1">
              Amazing Rhinos of Tanzania are waiting for you! Join us on a
              journey to explore the majestic wildlife and breathtaking
              landscapes.
            </Typography>
          </CardContent>
          <Stack direction="row" spacing={2} sx={{ px: 2, pb: 2 }}>
            <Button variant="contained" color="success">
              $250 / Individual
            </Button>
            <Button variant="outlined" color="secondary">
              🈹 $850  Group of 4
            </Button>
          </Stack>
        </Card>

         <Card sx={{ width: "40%", p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={600}>Mt Ruwenzori  Climbing</Typography>
          </CardContent>
          <CardMedia
            component="img"
            image="./mountains/mountain_terrain.jpg"
            alt="Wildlife"
            sx={{ borderRadius: "10px" }}
          />
          <CardContent>
            <Typography variant="body1">
              Mountain climbing is an exhilarating adventure that takes you
                  to the peaks of nature's grandeur. Whether you're a seasoned
                  climber or a beginner, the thrill of scaling towering
                  mountains.  
            </Typography>
          </CardContent>
          <Stack direction="row" spacing={2} sx={{ px: 2, pb: 2 }}>
            <Button variant="contained" color="success">
              $150 / Individual
            </Button>
            <Button variant="outlined" color="secondary">
              🈹 $600  Group of 4
            </Button>
          </Stack>
        </Card>

        <Card sx={{ width: "40%", p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={600}>
              The tours in Tsavo National Park
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image="./adventures & honeymoon/sunset van.jpg"
            alt="Wildlife"
            sx={{ borderRadius: "10px" }}
          />
          <CardContent>
            <Typography variant="body1">
              Enjoy the breathtaking views of Tsavo National Park with our
              exclusive tours. Experience the thrill of adventure and the beauty
              of Nature.
            </Typography>
          </CardContent>
          <Stack direction="row" spacing={2} sx={{ px: 2, pb: 2 }}>
            <Button variant="contained" color="success">
              $180 per Individual
            </Button>
            <Button variant="outlined" color="secondary">
              🈹 $650  Group of 4
            </Button>
          </Stack>
        </Card>

        <Card sx={{ width: "40%", p: 2 }}>
          <CardContent>
            <Typography variant="h5" fontWeight={600}>Coastal Kenya</Typography>
          </CardContent>
          <CardMedia
            component="img"
            image="./luxury/luxury6.jpg"
            alt="Wildlife"
            sx={{ borderRadius: "10px" }}
          />
          <CardContent>
            <Typography variant="body1">
              Coastal tours offer a unique opportunity to explore the
                  breathtaking beauty of the world's coastlines. From pristine
                  to sandy beaches, rugged cliffs, and vibrant marine life.
            </Typography>
          </CardContent>
          <Stack direction="row" spacing={2} sx={{ px: 2, pb: 2 }}>
            <Button variant="contained" color="success">
              $150 per Individual
            </Button>
            <Button variant="outlined" color="secondary">
              🈹 $550  Group of 4
            </Button>
          </Stack>
        </Card>
      </div>
    </div>
  );
}

export default Destination;
