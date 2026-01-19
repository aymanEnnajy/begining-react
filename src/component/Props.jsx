import { Box, Grid, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";

// ✅ Données internes (comme dans un vrai projet)
const STATS_DATA = [
  { label: "Projects Completed", value: 120 },
  { label: "Happy Clients", value: 85 },
  { label: "Years of Experience", value: 5 },
];

export default function StatsSection() {
  // state pour l’animation
  const [counts, setCounts] = useState(
    STATS_DATA.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, index) => {
          if (count < STATS_DATA[index].value) {
            return count + 1;
          }
          return count;
        })
      );
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: 10, backgroundColor: "#f5f7fa" }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        mb={6}
      >
        Our Achievements
      </Typography>

      {/* Stats */}
      <Grid container spacing={4} justifyContent="center">
        {STATS_DATA.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                color="primary"
              >
                {counts[index]}+
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
              >
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
